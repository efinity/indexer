import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const validators =  {
    /**
     *  The current set of validators.
     */
    matrixEnjinV603: new StorageType('Session.Validators', 'Default', [], sts.array(() => matrixEnjinV603.AccountId32)) as ValidatorsMatrixEnjinV603,
}

/**
 *  The current set of validators.
 */
export interface ValidatorsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountId32[]
    get(block: Block): Promise<(matrixEnjinV603.AccountId32[] | undefined)>
}

export const currentIndex =  {
    /**
     *  Current index of the session.
     */
    matrixEnjinV603: new StorageType('Session.CurrentIndex', 'Default', [], sts.number()) as CurrentIndexMatrixEnjinV603,
}

/**
 *  Current index of the session.
 */
export interface CurrentIndexMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const queuedChanged =  {
    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    matrixEnjinV603: new StorageType('Session.QueuedChanged', 'Default', [], sts.boolean()) as QueuedChangedMatrixEnjinV603,
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface QueuedChangedMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const queuedKeys =  {
    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    matrixEnjinV603: new StorageType('Session.QueuedKeys', 'Default', [], sts.array(() => sts.tuple(() => [matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys]))) as QueuedKeysMatrixEnjinV603,
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface QueuedKeysMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys][]
    get(block: Block): Promise<([matrixEnjinV603.AccountId32, matrixEnjinV603.SessionKeys][] | undefined)>
}

export const disabledValidators =  {
    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    matrixEnjinV603: new StorageType('Session.DisabledValidators', 'Default', [], sts.array(() => sts.number())) as DisabledValidatorsMatrixEnjinV603,
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface DisabledValidatorsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}

export const nextKeys =  {
    /**
     *  The next session keys for a validator.
     */
    matrixEnjinV603: new StorageType('Session.NextKeys', 'Optional', [matrixEnjinV603.AccountId32], matrixEnjinV603.SessionKeys) as NextKeysMatrixEnjinV603,
}

/**
 *  The next session keys for a validator.
 */
export interface NextKeysMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.SessionKeys | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.SessionKeys | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.SessionKeys | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.SessionKeys | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.SessionKeys | undefined)][]>
}

export const keyOwner =  {
    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    matrixEnjinV603: new StorageType('Session.KeyOwner', 'Optional', [sts.tuple(() => [matrixEnjinV603.KeyTypeId, sts.bytes()])], matrixEnjinV603.AccountId32) as KeyOwnerMatrixEnjinV603,
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface KeyOwnerMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): Promise<(matrixEnjinV603.AccountId32 | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.KeyTypeId, Bytes][]): Promise<(matrixEnjinV603.AccountId32 | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeys(block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): Promise<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): AsyncIterable<[matrixEnjinV603.KeyTypeId, Bytes][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: (matrixEnjinV603.AccountId32 | undefined)][]>
    getPairs(block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): Promise<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: (matrixEnjinV603.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: (matrixEnjinV603.AccountId32 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [matrixEnjinV603.KeyTypeId, Bytes]): AsyncIterable<[k: [matrixEnjinV603.KeyTypeId, Bytes], v: (matrixEnjinV603.AccountId32 | undefined)][]>
}
