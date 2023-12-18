import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const multisigs =  {
    /**
     *  The set of open multisig operations.
     */
    matrixEnjinV603: new StorageType('Multisig.Multisigs', 'Optional', [matrixEnjinV603.AccountId32, sts.bytes()], matrixEnjinV603.Multisig) as MultisigsMatrixEnjinV603,
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV603.AccountId32, key2: Bytes): Promise<(matrixEnjinV603.Multisig | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.AccountId32, Bytes][]): Promise<(matrixEnjinV603.Multisig | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.AccountId32, Bytes][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[matrixEnjinV603.AccountId32, Bytes][]>
    getKeys(block: Block, key1: matrixEnjinV603.AccountId32, key2: Bytes): Promise<[matrixEnjinV603.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[matrixEnjinV603.AccountId32, Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: Bytes): AsyncIterable<[matrixEnjinV603.AccountId32, Bytes][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32): Promise<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.AccountId32, key2: Bytes): Promise<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32): AsyncIterable<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.AccountId32, key2: Bytes): AsyncIterable<[k: [matrixEnjinV603.AccountId32, Bytes], v: (matrixEnjinV603.Multisig | undefined)][]>
}
