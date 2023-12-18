import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'

export const key =  {
    /**
     *  The `AccountId` of the sudo key.
     */
    v500: new StorageType('Sudo.Key', 'Optional', [], v500.AccountId32) as KeyV500,
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface KeyV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v500.AccountId32 | undefined)>
}
