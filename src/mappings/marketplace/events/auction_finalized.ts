import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import { Event as EventModel, Listing, ListingStatus, ListingStatusType } from '../../../model'
import { Bid } from '../../../types/generated/v6'
import { Context } from '../../../processor'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/generated/support'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid | undefined
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MarketplaceAuctionFinalizedEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = data.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function auctionFinalized(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.AuctionFinalized', { event: { args: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const listing = await ctx.store.findOneOrFail<Listing>(Listing, {
        where: { id: listingId },
        relations: {
            seller: true,
            makeAssetId: {
                collection: true,
            },
        },
    })

    listing.updatedAt = new Date(block.timestamp)
    await ctx.store.save(listing)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })
    await ctx.store.insert(listingStatus)

    // if (data.winningBid) {
    //     new EventService(ctx, listing.makeAssetId).MarketplacePurchase(
    //         listing.seller,
    //         await getOrCreateAccount(ctx, data.winningBid.bidder),
    //         listing,
    //         1n
    //     )
    //
    //     new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)
    // }

    return new EventModel({
        id: item.event.id,
        data: null,
    })
}
