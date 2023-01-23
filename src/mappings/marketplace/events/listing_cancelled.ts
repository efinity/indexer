import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceListingCancelledEvent } from '../../../types/generated/events'
import {
    AccountEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingStatus,
    ListingStatusType,
    MarketplaceListingCancelled,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CollectionService } from '../../../services'
import { CommonContext } from '../../types/contexts'

interface EventData {
    listingId: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MarketplaceListingCancelledEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId } = data.asEfinityV3000
        return { listingId }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function listingCancelled(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.ListingCancelled', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountEvent] | undefined> {
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
    await ctx.store.insert(ListingStatus, listingStatus as any)
    new CollectionService(ctx.store).sync(listing.makeAssetId.collection.id)

    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceListingCancelled({
            listing: listing.id,
        }),
    })

    return [event, new AccountEvent({ id: item.event.id, account: listing.seller, event })]
}
