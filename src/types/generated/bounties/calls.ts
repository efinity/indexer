import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const proposeBounty =  {
    name: 'Bounties.propose_bounty',
    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    matrixEnjinV603: new CallType(
        'Bounties.propose_bounty',
        sts.struct({
            value: sts.bigint(),
            description: sts.bytes(),
        })
    ),
}

export const approveBounty =  {
    name: 'Bounties.approve_bounty',
    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.approve_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const proposeCurator =  {
    name: 'Bounties.propose_curator',
    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.propose_curator',
        sts.struct({
            bountyId: sts.number(),
            curator: matrixEnjinV603.MultiAddress,
            fee: sts.bigint(),
        })
    ),
}

export const unassignCurator =  {
    name: 'Bounties.unassign_curator',
    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.unassign_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const acceptCurator =  {
    name: 'Bounties.accept_curator',
    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.accept_curator',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const awardBounty =  {
    name: 'Bounties.award_bounty',
    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.award_bounty',
        sts.struct({
            bountyId: sts.number(),
            beneficiary: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const claimBounty =  {
    name: 'Bounties.claim_bounty',
    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.claim_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const closeBounty =  {
    name: 'Bounties.close_bounty',
    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.close_bounty',
        sts.struct({
            bountyId: sts.number(),
        })
    ),
}

export const extendBountyExpiry =  {
    name: 'Bounties.extend_bounty_expiry',
    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * ## Complexity
     * - O(1).
     */
    matrixEnjinV603: new CallType(
        'Bounties.extend_bounty_expiry',
        sts.struct({
            bountyId: sts.number(),
            remark: sts.bytes(),
        })
    ),
}
