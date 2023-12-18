import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const proposed =  {
    name: 'Democracy.Proposed',
    /**
     * A motion has been proposed by a public account.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Proposed',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const tabled =  {
    name: 'Democracy.Tabled',
    /**
     * A public proposal has been tabled for referendum vote.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Tabled',
        sts.struct({
            proposalIndex: sts.number(),
            deposit: sts.bigint(),
        })
    ),
}

export const externalTabled =  {
    name: 'Democracy.ExternalTabled',
    /**
     * An external proposal has been tabled.
     */
    matrixEnjinV603: new EventType(
        'Democracy.ExternalTabled',
        sts.unit()
    ),
}

export const started =  {
    name: 'Democracy.Started',
    /**
     * A referendum has begun.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Started',
        sts.struct({
            refIndex: sts.number(),
            threshold: matrixEnjinV603.VoteThreshold,
        })
    ),
}

export const passed =  {
    name: 'Democracy.Passed',
    /**
     * A proposal has been approved by referendum.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Passed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const notPassed =  {
    name: 'Democracy.NotPassed',
    /**
     * A proposal has been rejected by referendum.
     */
    matrixEnjinV603: new EventType(
        'Democracy.NotPassed',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const cancelled =  {
    name: 'Democracy.Cancelled',
    /**
     * A referendum has been cancelled.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Cancelled',
        sts.struct({
            refIndex: sts.number(),
        })
    ),
}

export const delegated =  {
    name: 'Democracy.Delegated',
    /**
     * An account has delegated their vote to another account.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Delegated',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            target: matrixEnjinV603.AccountId32,
        })
    ),
}

export const undelegated =  {
    name: 'Democracy.Undelegated',
    /**
     * An account has cancelled a previous delegation operation.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Undelegated',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const vetoed =  {
    name: 'Democracy.Vetoed',
    /**
     * An external proposal has been vetoed.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Vetoed',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            proposalHash: matrixEnjinV603.H256,
            until: sts.number(),
        })
    ),
}

export const blacklisted =  {
    name: 'Democracy.Blacklisted',
    /**
     * A proposal_hash has been blacklisted permanently.
     */
    matrixEnjinV603: new EventType(
        'Democracy.Blacklisted',
        sts.struct({
            proposalHash: matrixEnjinV603.H256,
        })
    ),
}

export const voted =  {
    name: 'Democracy.Voted',
    /**
     * An account has voted in a referendum
     */
    matrixEnjinV603: new EventType(
        'Democracy.Voted',
        sts.struct({
            voter: matrixEnjinV603.AccountId32,
            refIndex: sts.number(),
            vote: matrixEnjinV603.AccountVote,
        })
    ),
}

export const seconded =  {
    name: 'Democracy.Seconded',
    /**
     * An account has secconded a proposal
     */
    matrixEnjinV603: new EventType(
        'Democracy.Seconded',
        sts.struct({
            seconder: matrixEnjinV603.AccountId32,
            propIndex: sts.number(),
        })
    ),
}

export const proposalCanceled =  {
    name: 'Democracy.ProposalCanceled',
    /**
     * A proposal got canceled.
     */
    matrixEnjinV603: new EventType(
        'Democracy.ProposalCanceled',
        sts.struct({
            propIndex: sts.number(),
        })
    ),
}

export const metadataSet =  {
    name: 'Democracy.MetadataSet',
    /**
     * Metadata for a proposal or a referendum has been set.
     */
    matrixEnjinV603: new EventType(
        'Democracy.MetadataSet',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}

export const metadataCleared =  {
    name: 'Democracy.MetadataCleared',
    /**
     * Metadata for a proposal or a referendum has been cleared.
     */
    matrixEnjinV603: new EventType(
        'Democracy.MetadataCleared',
        sts.struct({
            /**
             * Metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}

export const metadataTransferred =  {
    name: 'Democracy.MetadataTransferred',
    /**
     * Metadata has been transferred to new owner.
     */
    matrixEnjinV603: new EventType(
        'Democracy.MetadataTransferred',
        sts.struct({
            /**
             * Previous metadata owner.
             */
            prevOwner: matrixEnjinV603.MetadataOwner,
            /**
             * New metadata owner.
             */
            owner: matrixEnjinV603.MetadataOwner,
            /**
             * Preimage hash.
             */
            hash: matrixEnjinV603.H256,
        })
    ),
}
