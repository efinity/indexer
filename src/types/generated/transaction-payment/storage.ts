import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const nextFeeMultiplier =  {
    matrixEnjinV603: new StorageType('TransactionPayment.NextFeeMultiplier', 'Default', [], matrixEnjinV603.FixedU128) as NextFeeMultiplierMatrixEnjinV603,
}

export interface NextFeeMultiplierMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.FixedU128
    get(block: Block): Promise<(matrixEnjinV603.FixedU128 | undefined)>
}

export const storageVersion =  {
    matrixEnjinV603: new StorageType('TransactionPayment.StorageVersion', 'Default', [], matrixEnjinV603.Releases) as StorageVersionMatrixEnjinV603,
}

export interface StorageVersionMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Releases
    get(block: Block): Promise<(matrixEnjinV603.Releases | undefined)>
}
