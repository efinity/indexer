import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const collators =  {
    /**
     *  The current set of collators
     */
    matrixEnjinV603: new StorageType('CollatorStaking.Collators', 'Default', [], sts.array(() => matrixEnjinV603.Collator)) as CollatorsMatrixEnjinV603,
}

/**
 *  The current set of collators
 */
export interface CollatorsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<(matrixEnjinV603.Collator[] | undefined)>
}

export const invulnerables =  {
    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    matrixEnjinV603: new StorageType('CollatorStaking.Invulnerables', 'Default', [], sts.array(() => matrixEnjinV603.Collator)) as InvulnerablesMatrixEnjinV603,
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface InvulnerablesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<(matrixEnjinV603.Collator[] | undefined)>
}

export const candidates =  {
    /**
     *  The current set of candidates for collation.
     */
    matrixEnjinV603: new StorageType('CollatorStaking.Candidates', 'Default', [], sts.array(() => matrixEnjinV603.Collator)) as CandidatesMatrixEnjinV603,
}

/**
 *  The current set of candidates for collation.
 */
export interface CandidatesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Collator[]
    get(block: Block): Promise<(matrixEnjinV603.Collator[] | undefined)>
}

export const desiredCandidatesCount =  {
    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    matrixEnjinV603: new StorageType('CollatorStaking.DesiredCandidatesCount', 'Default', [], sts.number()) as DesiredCandidatesCountMatrixEnjinV603,
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface DesiredCandidatesCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const nominators =  {
    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    matrixEnjinV603: new StorageType('CollatorStaking.Nominators', 'Optional', [matrixEnjinV603.AccountId32], matrixEnjinV603.Nomination) as NominatorsMatrixEnjinV603,
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface NominatorsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.Nomination | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.Nomination | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Nomination | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Nomination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Nomination | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.Nomination | undefined)][]>
}

export const currentRound =  {
    /**
     *  The current round information.
     */
    matrixEnjinV603: new StorageType('CollatorStaking.CurrentRound', 'Default', [], matrixEnjinV603.Round) as CurrentRoundMatrixEnjinV603,
}

/**
 *  The current round information.
 */
export interface CurrentRoundMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Round
    get(block: Block): Promise<(matrixEnjinV603.Round | undefined)>
}

export const collatorExits =  {
    /**
     *  The list of collators who requested an exit.
     */
    matrixEnjinV603: new StorageType('CollatorStaking.CollatorExits', 'Optional', [matrixEnjinV603.AccountId32], sts.number()) as CollatorExitsMatrixEnjinV603,
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorExitsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(number | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (number | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (number | undefined)][]>
}

export const minCollatorStake =  {
    /**
     *  The min stake amount for collators
     */
    matrixEnjinV603: new StorageType('CollatorStaking.MinCollatorStake', 'Default', [], sts.bigint()) as MinCollatorStakeMatrixEnjinV603,
}

/**
 *  The min stake amount for collators
 */
export interface MinCollatorStakeMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const sessionInfo =  {
    /**
     *  The session info of collators including produced blocks and uptime
     */
    matrixEnjinV603: new StorageType('CollatorStaking.SessionInfo', 'Default', [matrixEnjinV603.AccountId32, sts.number()], matrixEnjinV603.CollatorSessionInfo) as SessionInfoMatrixEnjinV603,
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface SessionInfoMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.CollatorSessionInfo
    get(block: Block, key1: matrixEnjinV603.AccountId32, key2: number): Promise<(matrixEnjinV603.CollatorSessionInfo | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.AccountId32, number][]): Promise<(matrixEnjinV603.CollatorSessionInfo | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32, key2: number): Promise<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: number): AsyncIterable<[matrixEnjinV603.AccountId32, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32, key2: number): Promise<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: number): AsyncIterable<[k: [matrixEnjinV603.AccountId32, number], v: (matrixEnjinV603.CollatorSessionInfo | undefined)][]>
}
