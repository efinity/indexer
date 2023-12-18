import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'

export const identityOf =  {
    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType('Identity.IdentityOf', 'Optional', [matrixEnjinV1000.AccountId32], matrixEnjinV1000.Registration) as IdentityOfMatrixEnjinV1000,
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<(matrixEnjinV1000.Registration | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<(matrixEnjinV1000.Registration | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: (matrixEnjinV1000.Registration | undefined)][]>
}

export const superOf =  {
    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    matrixEnjinV1000: new StorageType('Identity.SuperOf', 'Optional', [matrixEnjinV1000.AccountId32], sts.tuple(() => [matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data])) as SuperOfMatrixEnjinV1000,
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface SuperOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([matrixEnjinV1000.AccountId32, matrixEnjinV1000.Data] | undefined)][]>
}

export const subsOf =  {
    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    matrixEnjinV1000: new StorageType('Identity.SubsOf', 'Default', [matrixEnjinV1000.AccountId32], sts.tuple(() => [sts.bigint(), sts.array(() => matrixEnjinV1000.AccountId32)])) as SubsOfMatrixEnjinV1000,
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface SubsOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [bigint, matrixEnjinV1000.AccountId32[]]
    get(block: Block, key: matrixEnjinV1000.AccountId32): Promise<([bigint, matrixEnjinV1000.AccountId32[]] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.AccountId32[]): Promise<([bigint, matrixEnjinV1000.AccountId32[]] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV1000.AccountId32): Promise<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<matrixEnjinV1000.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.AccountId32): Promise<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.AccountId32): AsyncIterable<[k: matrixEnjinV1000.AccountId32, v: ([bigint, matrixEnjinV1000.AccountId32[]] | undefined)][]>
}

export const registrars =  {
    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    matrixEnjinV1000: new StorageType('Identity.Registrars', 'Default', [], sts.array(() => sts.option(() => matrixEnjinV1000.RegistrarInfo))) as RegistrarsMatrixEnjinV1000,
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface RegistrarsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV1000.RegistrarInfo | undefined)[]
    get(block: Block): Promise<((matrixEnjinV1000.RegistrarInfo | undefined)[] | undefined)>
}
