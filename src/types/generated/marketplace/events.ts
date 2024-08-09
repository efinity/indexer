import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'

export const listingCreated =  {
    name: 'Marketplace.ListingCreated',
    /**
     * A listing was created
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The listing
             */
            listing: matrixEnjinV603.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1010: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1010.H256,
            /**
             * The listing
             */
            listing: v1010.Listing,
        })
    ),
    /**
     * A listing was created
     */
    v1011: new EventType(
        'Marketplace.ListingCreated',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1011.H256,
            /**
             * The listing
             */
            listing: v1011.Listing,
        })
    ),
}

export const listingCancelled =  {
    name: 'Marketplace.ListingCancelled',
    /**
     * A listing was cancelled
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingCancelled',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV603.H256,
        })
    ),
}

export const listingFilled =  {
    name: 'Marketplace.ListingFilled',
    /**
     * A listing was filled or partially filled
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * account that filled the listing
             */
            buyer: matrixEnjinV603.AccountId32,
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
    /**
     * A listing was filled or partially filled
     */
    v1011: new EventType(
        'Marketplace.ListingFilled',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: v1011.H256,
            /**
             * account that filled the listing
             */
            buyer: v1011.AccountId32,
            /**
             * The price it was filled with
             */
            price: sts.bigint(),
            /**
             * The amount that was filled
             */
            amountFilled: sts.bigint(),
            /**
             * Amount remaining to be filled
             */
            amountRemaining: sts.bigint(),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
}

export const bidPlaced =  {
    name: 'Marketplace.BidPlaced',
    /**
     * A bid was placed
     */
    matrixEnjinV603: new EventType(
        'Marketplace.BidPlaced',
        sts.struct({
            /**
             * ID of the listing
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that was placed
             */
            bid: matrixEnjinV603.Bid,
        })
    ),
}

export const auctionFinalized =  {
    name: 'Marketplace.AuctionFinalized',
    /**
     * An auction was finalized
     */
    matrixEnjinV603: new EventType(
        'Marketplace.AuctionFinalized',
        sts.struct({
            /**
             * The listing id
             */
            listingId: matrixEnjinV603.H256,
            /**
             * The bid that won
             */
            winningBid: sts.option(() => matrixEnjinV603.Bid),
            /**
             * Amount paid as protocol fee
             */
            protocolFee: sts.bigint(),
            /**
             * Amount that went to royalties
             */
            royalty: sts.bigint(),
        })
    ),
}

export const protocolFeeSet =  {
    name: 'Marketplace.ProtocolFeeSet',
    /**
     * Protocol fee was set
     */
    matrixEnjinV603: new EventType(
        'Marketplace.ProtocolFeeSet',
        sts.struct({
            /**
             * The new protocol fee
             */
            protocolFee: matrixEnjinV603.Perbill,
        })
    ),
}

export const listingConverted =  {
    name: 'Marketplace.ListingConverted',
    /**
     * A listing was converted to the correct format
     */
    matrixEnjinV1005: new EventType(
        'Marketplace.ListingConverted',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: matrixEnjinV1005.H256,
        })
    ),
}

export const expiredListingRemoved =  {
    name: 'Marketplace.ExpiredListingRemoved',
    /**
     * An expired listing was removed
     */
    v1010: new EventType(
        'Marketplace.ExpiredListingRemoved',
        sts.struct({
            /**
             * Id for the listing
             */
            listingId: v1010.H256,
        })
    ),
}

export const counterOfferPlaced =  {
    name: 'Marketplace.CounterOfferPlaced',
    /**
     * A counter offer was placed on a listing
     */
    v1010: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1010.H256,
            /**
             * The counter offer
             */
            counterOffer: v1010.CounterOffer,
        })
    ),
    /**
     * A counter offer was placed on a listing
     */
    v1011: new EventType(
        'Marketplace.CounterOfferPlaced',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1011.H256,
            /**
             * The counter offer
             */
            counterOffer: v1011.CounterOffer,
        })
    ),
}

export const counterOfferAnswered =  {
    name: 'Marketplace.CounterOfferAnswered',
    /**
     * A response was issued for a counter offer
     */
    v1010: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1010.H256,
            /**
             * If the offer was accepted
             */
            accepted: sts.boolean(),
        })
    ),
    /**
     * A response was issued for a counter offer
     */
    v1011: new EventType(
        'Marketplace.CounterOfferAnswered',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1011.H256,
            /**
             * The account that created the counter offer
             */
            creator: v1011.AccountId32,
            /**
             * The response to the counter offer
             */
            response: v1011.CounterOfferResponse,
        })
    ),
}

export const migrationStep =  {
    name: 'Marketplace.MigrationStep',
    /**
     * The migration step has completed
     */
    v1010: new EventType(
        'Marketplace.MigrationStep',
        sts.struct({
            /**
             * The number of items processed within this step
             */
            itemsProcessed: sts.number(),
            /**
             * The migration phase
             */
            phase: sts.number(),
        })
    ),
}

export const counterOfferRemoved =  {
    name: 'Marketplace.CounterOfferRemoved',
    /**
     * A counter offer was removed
     */
    v1011: new EventType(
        'Marketplace.CounterOfferRemoved',
        sts.struct({
            /**
             * Id of the listing
             */
            listingId: v1011.H256,
            /**
             * The account that created the counter offer
             */
            creator: v1011.AccountId32,
        })
    ),
}
