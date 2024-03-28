import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    MarketplaceAuctionFinalized,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getBestListing } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MarketplaceAuctionFinalizedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { listingId, winningBid, protocolFee, royalty } = data.asMatrixEnjinV603
        return { listingId, winningBid, protocolFee, royalty }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'Marketplace.AuctionFinalized', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>,
    listing: Listing
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceAuctionFinalized({
            listing: listing.id,
            winningBid: data.winningBid ? `${listing.id}-${u8aToHex(data.winningBid.bidder)}-${data.winningBid.price}` : null,
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
            to: data.winningBid?.bidder ? new Account({ id: u8aToHex(data.winningBid.bidder) }) : null,
            event,
        }),
    ]
}

export async function auctionFinalized(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.AuctionFinalized', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOne<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
                bestListing: true,
            },
        },
    })

    if (!listing || !listing.makeAssetId) {
        return undefined
    }

    if (data.winningBid) {
        const sale = new ListingSale({
            id: `${listingId}-${item.event.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer: new Account({ id: u8aToHex(data.winningBid.bidder) }),
            listing,
            createdAt: new Date(block.timestamp),
        })
        listing.makeAssetId.lastSale = sale
        await ctx.store.save(sale)
    }

    listing.isActive = false
    listing.updatedAt = new Date(block.timestamp)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })

    await Promise.all([ctx.store.insert(ListingStatus, listingStatus as any), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        listing.makeAssetId.bestListing = null
        if (bestListing) {
            listing.makeAssetId.bestListing = bestListing
        }
    }
    await ctx.store.save(listing.makeAssetId)

    syncCollectionStats(listing.makeAssetId.collection.id)

    return getEvent(item, data, listing)
}
