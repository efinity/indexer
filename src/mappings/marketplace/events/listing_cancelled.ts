import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCancelledEvent } from '../../../types/generated/events'
import {
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingStatus,
    ListingStatusType,
    MarketplaceListingCancelled,
} from '../../../model'
import { Context } from '../../../processor'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { Event } from '../../../types/generated/support'

interface EventData {
    listingId: Uint8Array
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MarketplaceListingCancelledEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId } = data.asEfinityV3000
        return { listingId }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function listingCancelled(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingCancelled', { event: { args: true; extrinsic: true } }>
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
        type: ListingStatusType.Cancelled,
        listing,
        height: block.height,
        createdAt: new Date(block.timestamp),
    })
    await ctx.store.insert(listingStatus)
    // new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingCancelled({
            listing: listing.id,
        }),
    })
}
