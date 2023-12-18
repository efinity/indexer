import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const members =  {
    /**
     *  The current membership, stored as an ordered Vec.
     */
    matrixEnjinV603: new StorageType('TechnicalMembership.Members', 'Default', [], sts.array(() => matrixEnjinV603.AccountId32)) as MembersMatrixEnjinV603,
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface MembersMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountId32[]
    get(block: Block): Promise<(matrixEnjinV603.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The current prime member, if one exists.
     */
    matrixEnjinV603: new StorageType('TechnicalMembership.Prime', 'Optional', [], matrixEnjinV603.AccountId32) as PrimeMatrixEnjinV603,
}

/**
 *  The current prime member, if one exists.
 */
export interface PrimeMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.AccountId32 | undefined)>
}
