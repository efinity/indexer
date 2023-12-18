import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const parachainId =  {
    matrixEnjinV603: new StorageType('ParachainInfo.ParachainId', 'Default', [], matrixEnjinV603.Id) as ParachainIdMatrixEnjinV603,
}

export interface ParachainIdMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Id
    get(block: Block): Promise<(matrixEnjinV603.Id | undefined)>
}
