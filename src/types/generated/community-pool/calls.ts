import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const proposeSpend =  {
    name: 'CommunityPool.propose_spend',
    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * ## Complexity
     * - O(1)
     */
    matrixEnjinV603: new CallType(
        'CommunityPool.propose_spend',
        sts.struct({
            value: sts.bigint(),
            beneficiary: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const rejectProposal =  {
    name: 'CommunityPool.reject_proposal',
    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * ## Complexity
     * - O(1)
     */
    matrixEnjinV603: new CallType(
        'CommunityPool.reject_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const approveProposal =  {
    name: 'CommunityPool.approve_proposal',
    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * ## Complexity
     *  - O(1).
     */
    matrixEnjinV603: new CallType(
        'CommunityPool.approve_proposal',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}

export const spend =  {
    name: 'CommunityPool.spend',
    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    matrixEnjinV603: new CallType(
        'CommunityPool.spend',
        sts.struct({
            amount: sts.bigint(),
            beneficiary: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const removeApproval =  {
    name: 'CommunityPool.remove_approval',
    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * ## Complexity
     * - O(A) where `A` is the number of approvals
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    matrixEnjinV603: new CallType(
        'CommunityPool.remove_approval',
        sts.struct({
            proposalId: sts.number(),
        })
    ),
}
