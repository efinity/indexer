import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MarketplaceBidPlacedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    AuctionState,
    Bid,
    Event as EventModel,
    Extrinsic,
    Listing,
    ListingType,
    MarketplaceBidPlaced,
    Token,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getBestListing, getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MarketplaceBidPlacedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'Marketplace.BidPlaced', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>,
    listing: Listing,
    account: Account
): [EventModel, AccountTokenEvent] | undefined {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: listing.makeAssetId.collection.id,
        tokenId: listing.makeAssetId.id,
        data: new MarketplaceBidPlaced({
            listing: listing.id,
            bid: `${listing.id}-${u8aToHex(data.bid.bidder)}-${data.bid.price}`,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token: new Token({ id: listing.makeAssetId.id }),
            from: account,
            event,
        }),
    ]
}

export async function bidPlaced(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Marketplace.BidPlaced', { event: { args: true; extrinsic: true } }>
): Promise<[EventModel, AccountTokenEvent] | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const listingId = Buffer.from(data.listingId).toString('hex')
    const [listing, account, lastBid] = await Promise.all([
        ctx.store.findOne(Listing, {
            where: { id: listingId },
            relations: {
                seller: true,
                makeAssetId: {
                    collection: true,
                    bestListing: true,
                },
            },
        }),
        getOrCreateAccount(ctx, data.bid.bidder),
        ctx.store.findOne(Bid, { where: { listing: { id: listingId } }, order: { createdAt: 'DESC' } }),
    ])

    if (!listing || !listing.makeAssetId) return undefined

    const bid = new Bid({
        id: `${listingId}-${u8aToHex(data.bid.bidder)}-${data.bid.price}`,
        bidder: account,
        price: data.bid.price,
        listing,
        height: block.height,
        extrinsicHash: item.event.extrinsic?.hash,
        createdAt: new Date(block.timestamp),
    })

    listing.highestPrice = data.bid.price
    listing.state = new AuctionState({
        listingType: ListingType.Auction,
        highBid: bid.id,
    })
    listing.updatedAt = new Date(block.timestamp)

    await Promise.all([ctx.store.save(bid), ctx.store.save(listing)])

    if (listing.makeAssetId.bestListing?.id === listing.id) {
        const bestListing = await getBestListing(ctx, listing.makeAssetId.id)
        if (bestListing?.id !== listing.id) {
            listing.makeAssetId.bestListing = bestListing
            ctx.store.save(listing.makeAssetId)
        }
    }

    syncCollectionStats(listing.makeAssetId.collection.id)

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                listing: {
                    seller: {
                        id: listing.seller.id,
                    },
                    id: listing.id,
                    highestPrice: listing.highestPrice.toString(),
                    amount: listing.amount.toString(),
                    price: listing.price.toString(),
                    data: listing.data.toJSON(),
                },

                lastBid: lastBid
                    ? {
                          id: lastBid.id,
                          price: lastBid.price.toString(),
                          bidder: {
                              id: lastBid.bidder.id,
                          },
                      }
                    : null,
                bid: {
                    id: bid.id,
                    price: bid.price.toString(),
                    bidder: {
                        id: bid.bidder.id,
                    },
                },
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, listing, account)
}
