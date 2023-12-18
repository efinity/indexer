import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const publicPropCount =  {
    /**
     *  The number of (public) proposals that have been made so far.
     */
    matrixEnjinV603: new StorageType('Democracy.PublicPropCount', 'Default', [], sts.number()) as PublicPropCountMatrixEnjinV603,
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface PublicPropCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const publicProps =  {
    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    matrixEnjinV603: new StorageType('Democracy.PublicProps', 'Default', [], sts.array(() => sts.tuple(() => [sts.number(), matrixEnjinV603.Bounded, matrixEnjinV603.AccountId32]))) as PublicPropsMatrixEnjinV603,
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface PublicPropsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, matrixEnjinV603.Bounded, matrixEnjinV603.AccountId32][]
    get(block: Block): Promise<([number, matrixEnjinV603.Bounded, matrixEnjinV603.AccountId32][] | undefined)>
}

export const depositOf =  {
    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    matrixEnjinV603: new StorageType('Democracy.DepositOf', 'Optional', [sts.number()], sts.tuple(() => [sts.array(() => matrixEnjinV603.AccountId32), sts.bigint()])) as DepositOfMatrixEnjinV603,
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DepositOfMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<([matrixEnjinV603.AccountId32[], bigint] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([matrixEnjinV603.AccountId32[], bigint] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([matrixEnjinV603.AccountId32[], bigint] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([matrixEnjinV603.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([matrixEnjinV603.AccountId32[], bigint] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([matrixEnjinV603.AccountId32[], bigint] | undefined)][]>
}

export const referendumCount =  {
    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    matrixEnjinV603: new StorageType('Democracy.ReferendumCount', 'Default', [], sts.number()) as ReferendumCountMatrixEnjinV603,
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface ReferendumCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const lowestUnbaked =  {
    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    matrixEnjinV603: new StorageType('Democracy.LowestUnbaked', 'Default', [], sts.number()) as LowestUnbakedMatrixEnjinV603,
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface LowestUnbakedMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const referendumInfoOf =  {
    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    matrixEnjinV603: new StorageType('Democracy.ReferendumInfoOf', 'Optional', [sts.number()], matrixEnjinV603.ReferendumInfo) as ReferendumInfoOfMatrixEnjinV603,
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface ReferendumInfoOfMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(matrixEnjinV603.ReferendumInfo | undefined)>
    getMany(block: Block, keys: number[]): Promise<(matrixEnjinV603.ReferendumInfo | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (matrixEnjinV603.ReferendumInfo | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (matrixEnjinV603.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (matrixEnjinV603.ReferendumInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.ReferendumInfo | undefined)][]>
}

export const votingOf =  {
    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    matrixEnjinV603: new StorageType('Democracy.VotingOf', 'Default', [matrixEnjinV603.AccountId32], matrixEnjinV603.Voting) as VotingOfMatrixEnjinV603,
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface VotingOfMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Voting
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.Voting | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.Voting | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Voting | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Voting | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Voting | undefined)][]>
}

export const lastTabledWasExternal =  {
    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    matrixEnjinV603: new StorageType('Democracy.LastTabledWasExternal', 'Default', [], sts.boolean()) as LastTabledWasExternalMatrixEnjinV603,
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface LastTabledWasExternalMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const nextExternal =  {
    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    matrixEnjinV603: new StorageType('Democracy.NextExternal', 'Optional', [], sts.tuple(() => [matrixEnjinV603.Bounded, matrixEnjinV603.VoteThreshold])) as NextExternalMatrixEnjinV603,
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface NextExternalMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<([matrixEnjinV603.Bounded, matrixEnjinV603.VoteThreshold] | undefined)>
}

export const blacklist =  {
    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    matrixEnjinV603: new StorageType('Democracy.Blacklist', 'Optional', [matrixEnjinV603.H256], sts.tuple(() => [sts.number(), sts.array(() => matrixEnjinV603.AccountId32)])) as BlacklistMatrixEnjinV603,
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface BlacklistMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<([number, matrixEnjinV603.AccountId32[]] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<([number, matrixEnjinV603.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: ([number, matrixEnjinV603.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: ([number, matrixEnjinV603.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: ([number, matrixEnjinV603.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: ([number, matrixEnjinV603.AccountId32[]] | undefined)][]>
}

export const cancellations =  {
    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    matrixEnjinV603: new StorageType('Democracy.Cancellations', 'Default', [matrixEnjinV603.H256], sts.boolean()) as CancellationsMatrixEnjinV603,
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface CancellationsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(boolean | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(boolean | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (boolean | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (boolean | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (boolean | undefined)][]>
}

export const metadataOf =  {
    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    matrixEnjinV603: new StorageType('Democracy.MetadataOf', 'Optional', [matrixEnjinV603.MetadataOwner], matrixEnjinV603.H256) as MetadataOfMatrixEnjinV603,
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface MetadataOfMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.MetadataOwner): Promise<(matrixEnjinV603.H256 | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.MetadataOwner[]): Promise<(matrixEnjinV603.H256 | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeys(block: Block, key: matrixEnjinV603.MetadataOwner): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.MetadataOwner): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.MetadataOwner, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.MetadataOwner): Promise<[k: matrixEnjinV603.MetadataOwner, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.MetadataOwner): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: (matrixEnjinV603.H256 | undefined)][]>
}
