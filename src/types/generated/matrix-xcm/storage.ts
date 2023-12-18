import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const minimumWeights =  {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    matrixEnjinV603: new StorageType('MatrixXcm.MinimumWeights', 'Default', [matrixEnjinV603.XcmOperation], matrixEnjinV603.MinimumWeightFeePair) as MinimumWeightsMatrixEnjinV603,
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MinimumWeightFeePair
    get(block: Block, key: matrixEnjinV603.XcmOperation): Promise<(matrixEnjinV603.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.XcmOperation[]): Promise<(matrixEnjinV603.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.XcmOperation[]>
    getKeys(block: Block, key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.XcmOperation): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.XcmOperation): Promise<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.XcmOperation): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: (matrixEnjinV603.MinimumWeightFeePair | undefined)][]>
}
