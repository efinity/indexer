import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceAuctionFinalizedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountEvent,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingSale,
    ListingStatus,
    ListingStatusType,
    MarketplaceAuctionFinalized,
} from '../../../model'
import { Bid } from '../../../types/generated/v3000'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { CollectionService } from '../../../services'

interface EventData {
    listingId: Uint8Array
    winningBid: Bid | undefined
    protocolFee: bigint
    royalty: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MarketplaceAuctionFinalizedEvent(ctx, event)

    if (data.isEfinityV3000) {
        const { listingId, winningBid, protocolFee, royalty } = data.asEfinityV3000
        return { listingId, winningBid, protocolFee, royalty }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function auctionFinalized(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.AuctionFinalized', { event: { args: true; extrinsic: true } }>
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

    if (data.winningBid) {
        const sale = new ListingSale({
            id: `${listingId}-${item.event.id}`,
            amount: listing.amount,
            price: data.winningBid.price,
            buyer: new Account({ id: u8aToHex(data.winningBid.bidder) }),
            listing,
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.save(sale)
    }
    listing.updatedAt = new Date(block.timestamp)
    await ctx.store.save(listing)

    const listingStatus = new ListingStatus({
        id: `${listingId}-${block.height}`,
        type: ListingStatusType.Finalized,
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
        data: new MarketplaceAuctionFinalized({
            listing: listing.id,
            winningBid: data.winningBid ? `${listing.id}-${u8aToHex(data.winningBid.bidder)}-${data.winningBid.price}` : null,
            protocolFee: data.protocolFee,
            royalty: data.royalty,
        }),
    })

    return [event, new AccountEvent({ id: item.event.id, account: listing.seller, event })]
}
