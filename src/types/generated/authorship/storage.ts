import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const author =  {
    /**
     *  Author of current block.
     */
    matrixEnjinV603: new StorageType('Authorship.Author', 'Optional', [], matrixEnjinV603.AccountId32) as AuthorMatrixEnjinV603,
}

/**
 *  Author of current block.
 */
export interface AuthorMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.AccountId32 | undefined)>
}
