import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const pools =  {
    /**
     *  Information about the pools
     */
    matrixEnjinV603: new StorageType('Pools.Pools', 'Default', [], sts.array(() => sts.tuple(() => [matrixEnjinV603.AccountId32, matrixEnjinV603.Pool]))) as PoolsMatrixEnjinV603,
}

/**
 *  Information about the pools
 */
export interface PoolsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [matrixEnjinV603.AccountId32, matrixEnjinV603.Pool][]
    get(block: Block): Promise<([matrixEnjinV603.AccountId32, matrixEnjinV603.Pool][] | undefined)>
}
