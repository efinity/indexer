import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingFilledEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    FixedPriceState,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    ListingType,
    MarketplaceListingFilled,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CollectionService } from '../../../services'
import { CommonContext } from '../../types/contexts'
import { getBestListing } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MarketplaceListingFilledEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function listingFilled(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingFilled', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    listing.state = new FixedPriceState({
        listingType: ListingType.FixedPrice,
        amountFilled: listing.amount - data.amountRemaining,
    })

    if (data.amountRemaining === 0n) {
        const listingStatus = new ListingStatus({
            id: `${listingId}-${block.height}`,
            type: ListingStatusType.Finalized,
            listing,
            height: block.height,
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.insert(ListingStatus, listingStatus as any)
    }

    const sale = new ListingSale({
        id: `${listingId}-${item.event.id}`,
        amount: data.amountFilled,
        buyer: new Account({ id: u8aToHex(data.buyer) }),
        price: listing.price,
        listing,
        createdAt: new Date(block.timestamp),
    })
    await ctx.store.save(sale)

    listing.updatedAt = new Date(block.timestamp)
    await ctx.store.save(listing)

    if (listing.makeAssetId.bestListing?.id === listing.id && data.amountRemaining === 0n) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        listing.makeAssetId.bestListing = null
        if (bestListing) {
            listing.makeAssetId.bestListing = bestListing
        }
        await ctx.store.save(listing.makeAssetId)
    }

    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingFilled({
            listing: listing.id,
            buyer: u8aToHex(data.buyer),
            amountFilled: data.amountFilled,
            amountRemaining: data.amountRemaining,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token: listing.makeAssetId,
            from: listing.seller,
            to: new Account({ id: u8aToHex(data.buyer) }),
            event,
        }),
    ]
}
