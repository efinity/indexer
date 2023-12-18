import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const setInvulnerables =  {
    name: 'CollatorStaking.set_invulnerables',
    /**
     * Force set the invulnerables.
     * 
     * [`ForceOrigin`](Config::ForceOrigin) call only.
     * 
     * # Errors
     * 
     * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.set_invulnerables',
        sts.struct({
            accounts: sts.array(() => matrixEnjinV603.AccountId32),
        })
    ),
}

export const joinCandidates =  {
    name: 'CollatorStaking.join_candidates',
    /**
     * Join the list of candidates for collation.
     * 
     * # Errors
     * 
     * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
     * - [`Error::NominationExists`] if nomination already exists.
     * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
     * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.join_candidates',
        sts.struct({
            amount: sts.bigint(),
            rewardsCut: matrixEnjinV603.Perbill,
        })
    ),
}

export const unbond =  {
    name: 'CollatorStaking.unbond',
    /**
     * Leave the collator set of this parachain.
     * 
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
     * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
     * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.unbond',
        sts.unit()
    ),
}

export const nominate =  {
    name: 'CollatorStaking.nominate',
    /**
     * Nominate a specific candidate to be selected for collation and block production.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationExists`] if the nomination already exists.
     * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
     *   minimum.
     * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.nominate',
        sts.struct({
            collatorId: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const removeNomination =  {
    name: 'CollatorStaking.remove_nomination',
    /**
     * Remove a nomination previously registered for a specific collator candidate.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
     * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.remove_nomination',
        sts.struct({
            collatorId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const forceSetCurrentMaxCandidates =  {
    name: 'CollatorStaking.force_set_current_max_candidates',
    /**
     * Set the current max candidates, must be within 0 and
     * [`MaxCandidates`](Config::MaxCandidates)
     * 
     * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
     * 
     * # Errors
     * 
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.force_set_current_max_candidates',
        sts.struct({
            maxCandidates: sts.number(),
        })
    ),
}

export const forceSetMinCollatorStake =  {
    name: 'CollatorStaking.force_set_min_collator_stake',
    /**
     * Set the minimum collator stake amount
     * 
     * [`T::ForceOrigin`](Config::ForceOrigin) call only
     */
    matrixEnjinV603: new CallType(
        'CollatorStaking.force_set_min_collator_stake',
        sts.struct({
            minCollatorStake: sts.bigint(),
        })
    ),
}
