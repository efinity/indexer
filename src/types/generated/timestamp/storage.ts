import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'

export const now =  {
    /**
     *  Current time for the current block.
     */
    matrixEnjinV603: new StorageType('Timestamp.Now', 'Default', [], sts.bigint()) as NowMatrixEnjinV603,
}

/**
 *  Current time for the current block.
 */
export interface NowMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const didUpdate =  {
    /**
     *  Did the timestamp get updated in this block?
     */
    matrixEnjinV603: new StorageType('Timestamp.DidUpdate', 'Default', [], sts.boolean()) as DidUpdateMatrixEnjinV603,
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface DidUpdateMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
