import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const newInvulnerables =  {
    name: 'CollatorStaking.NewInvulnerables',
    /**
     * A new list of invulnerables has been set by root.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.NewInvulnerables',
        sts.struct({
            /**
             * list of [`AccountId`](frame_system::Config::AccountId) of invulnerables
             */
            new: sts.array(() => matrixEnjinV603.AccountId32),
        })
    ),
}

export const roundFinalized =  {
    name: 'CollatorStaking.RoundFinalized',
    /**
     * A new round was finalized
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.RoundFinalized',
        sts.struct({
            /**
             * round number that was finalized
             */
            number: sts.number(),
        })
    ),
}

export const candidateJoined =  {
    name: 'CollatorStaking.CandidateJoined',
    /**
     * A new candidate joined the list of candidates.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CandidateJoined',
        sts.struct({
            /**
             * accountId of the new candidate
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * amount staked
             */
            amount: sts.bigint(),
            /**
             * The percentage cut on the rewards that goes to the nominators
             */
            rewardsCut: matrixEnjinV603.Perbill,
        })
    ),
}

export const candidateRemoved =  {
    name: 'CollatorStaking.CandidateRemoved',
    /**
     * Candidate was removed.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CandidateRemoved',
        sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of candidate
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const nominated =  {
    name: 'CollatorStaking.Nominated',
    /**
     * A new nomination was registered for a specific candidate.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.Nominated',
        sts.struct({
            /**
             * the account that was nominated
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * the collator connected to the account
             */
            collatorId: matrixEnjinV603.AccountId32,
            /**
             * amount staked from collator
             */
            amount: sts.bigint(),
        })
    ),
}

export const nominationRemoved =  {
    name: 'CollatorStaking.NominationRemoved',
    /**
     * Nomination was removed.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.NominationRemoved',
        sts.struct({
            /**
             * the account removed from nominated list
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * collator connected to the account
             */
            collatorId: matrixEnjinV603.AccountId32,
            /**
             * amount unstaked from collator
             */
            amount: sts.bigint(),
        })
    ),
}

export const collatorSelected =  {
    name: 'CollatorStaking.CollatorSelected',
    /**
     * A candidate has been selected to become a collator for the current round.
     */
    matrixEnjinV603: new EventType(
        'CollatorStaking.CollatorSelected',
        sts.struct({
            /**
             * [`AccountId`](frame_system::Config::AccountId) of collator
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}
