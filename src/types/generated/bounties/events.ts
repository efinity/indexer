import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const bountyProposed =  {
    name: 'Bounties.BountyProposed',
    /**
     * New bounty proposal.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyProposed',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyRejected =  {
    name: 'Bounties.BountyRejected',
    /**
     * A bounty proposal was rejected; funds were slashed.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyRejected',
        sts.struct({
            index: sts.number(),
            bond: sts.bigint(),
        })
    ),
}

export const bountyBecameActive =  {
    name: 'Bounties.BountyBecameActive',
    /**
     * A bounty proposal is funded and became active.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyBecameActive',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyAwarded =  {
    name: 'Bounties.BountyAwarded',
    /**
     * A bounty is awarded to a beneficiary.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyAwarded',
        sts.struct({
            index: sts.number(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}

export const bountyClaimed =  {
    name: 'Bounties.BountyClaimed',
    /**
     * A bounty is claimed by beneficiary.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyClaimed',
        sts.struct({
            index: sts.number(),
            payout: sts.bigint(),
            beneficiary: matrixEnjinV603.AccountId32,
        })
    ),
}

export const bountyCanceled =  {
    name: 'Bounties.BountyCanceled',
    /**
     * A bounty is cancelled.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyCanceled',
        sts.struct({
            index: sts.number(),
        })
    ),
}

export const bountyExtended =  {
    name: 'Bounties.BountyExtended',
    /**
     * A bounty expiry is extended.
     */
    matrixEnjinV603: new EventType(
        'Bounties.BountyExtended',
        sts.struct({
            index: sts.number(),
        })
    ),
}
