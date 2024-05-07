import { Buffer } from 'buffer'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCreatedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    AuctionData,
    AuctionState,
    Event as EventModel,
    Extrinsic,
    FeeSide,
    FixedPriceData,
    FixedPriceState,
    Listing,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingCreated,
    Token,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MarketplaceListingCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV1005) {
        return data.asMatrixEnjinV1005
    }

    if (data.isMatrixEnjinV1004) {
        return data.asMatrixEnjinV1004
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV1005) {
        return data.asV1005
    }

    if (data.isV1004) {
        return data.asV1004
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'Marketplace.ListingCreated', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.listing.makeAssetId.collectionId.toString(),
        tokenId: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}`,
        data: new MarketplaceListingCreated({
            listing: Buffer.from(data.listingId).toString('hex'),
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token: new Token({ id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` }),
            from: new Account({ id: u8aToHex(data.listing.seller) }),
            event,
        }),
    ]
}

export async function listingCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingCreated', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined
    const listingId = Buffer.from(data.listingId).toString('hex')
    const [makeAssetId, takeAssetId, account] = await Promise.all([
        ctx.store.findOne<Token>(Token, {
            where: { id: `${data.listing.makeAssetId.collectionId}-${data.listing.makeAssetId.tokenId}` },
            relations: {
                bestListing: true,
            },
        }),
        ctx.store.findOne<Token>(Token, {
            where: { id: `${data.listing.takeAssetId.collectionId}-${data.listing.takeAssetId.tokenId}` },
        }),
        getOrCreateAccount(ctx, data.listing.seller),
    ])

    if (!makeAssetId || !takeAssetId) return undefined

    const feeSide = data.listing.feeSide.__kind as FeeSide
    const listingData =
        data.listing.data.__kind === ListingType.FixedPrice
            ? new FixedPriceData({ listingType: ListingType.FixedPrice })
            : new AuctionData({
                  listingType: ListingType.Auction,
                  startHeight: data.listing.data.value.startBlock,
                  endHeight: data.listing.data.value.endBlock,
              })
    const listingState =
        data.listing.state.__kind === ListingType.FixedPrice.toString()
            ? new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
            : new AuctionState({ listingType: ListingType.Auction })

    const listing = new Listing({
        id: listingId,
        seller: account,
        makeAssetId,
        takeAssetId,
        amount: data.listing.amount,
        price: data.listing.price,
        highestPrice: data.listing.price,
        minTakeValue: data.listing.minTakeValue,
        feeSide,
        height: data.listing.creationBlock,
        deposit: data.listing.deposit,
        salt: Buffer.from(data.listing.salt).toString('hex'),
        data: listingData,
        state: listingState,
        isActive: true,
        type: listingData.listingType,
        createdAt: new Date(block.timestamp),
        updatedAt: new Date(block.timestamp),
    })

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Active,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })

    // update best listing
    if ((makeAssetId.bestListing && makeAssetId.bestListing?.highestPrice >= listing.price) || !makeAssetId.bestListing) {
        makeAssetId.bestListing = listing
    }
    makeAssetId.recentListing = listing

    await Promise.all([
        ctx.store.insert(Listing, listing as any),
        ctx.store.insert(ListingStatus, listingStatus as any),
        ctx.store.save(makeAssetId),
    ])

    syncCollectionStats(data.listing.makeAssetId.collectionId.toString())

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                listing,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
