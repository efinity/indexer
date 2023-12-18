import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const pausedExtrinsics =  {
    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    matrixEnjinV603: new StorageType('ExtrinsicPause.PausedExtrinsics', 'Optional', [matrixEnjinV603.ExtrinsicInfo], sts.unit()) as PausedExtrinsicsMatrixEnjinV603,
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface PausedExtrinsicsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.ExtrinsicInfo): Promise<(null | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeys(block: Block, key: matrixEnjinV603.ExtrinsicInfo): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: (null | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.ExtrinsicInfo): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: (null | undefined)][]>
}
