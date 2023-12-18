import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'

export const minimumWeights =  {
    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    v500: new StorageType('EfinityXcm.MinimumWeights', 'Default', [v500.XcmOperation], v500.MinimumWeightFeePair) as MinimumWeightsV500,
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MinimumWeightsV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.MinimumWeightFeePair
    get(block: Block, key: v500.XcmOperation): Promise<(v500.MinimumWeightFeePair | undefined)>
    getMany(block: Block, keys: v500.XcmOperation[]): Promise<(v500.MinimumWeightFeePair | undefined)[]>
    getKeys(block: Block): Promise<v500.XcmOperation[]>
    getKeys(block: Block, key: v500.XcmOperation): Promise<v500.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.XcmOperation[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.XcmOperation): AsyncIterable<v500.XcmOperation[]>
    getPairs(block: Block): Promise<[k: v500.XcmOperation, v: (v500.MinimumWeightFeePair | undefined)][]>
    getPairs(block: Block, key: v500.XcmOperation): Promise<[k: v500.XcmOperation, v: (v500.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.XcmOperation, v: (v500.MinimumWeightFeePair | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.XcmOperation): AsyncIterable<[k: v500.XcmOperation, v: (v500.MinimumWeightFeePair | undefined)][]>
}
