import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

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
