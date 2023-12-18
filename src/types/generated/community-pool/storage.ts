import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const proposalCount =  {
    /**
     *  Number of proposals that have been made.
     */
    matrixEnjinV603: new StorageType('CommunityPool.ProposalCount', 'Default', [], sts.number()) as ProposalCountMatrixEnjinV603,
}

/**
 *  Number of proposals that have been made.
 */
export interface ProposalCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const proposals =  {
    /**
     *  Proposals that have been made.
     */
    matrixEnjinV603: new StorageType('CommunityPool.Proposals', 'Optional', [sts.number()], matrixEnjinV603.Proposal) as ProposalsMatrixEnjinV603,
}

/**
 *  Proposals that have been made.
 */
export interface ProposalsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(matrixEnjinV603.Proposal | undefined)>
    getMany(block: Block, keys: number[]): Promise<(matrixEnjinV603.Proposal | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (matrixEnjinV603.Proposal | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (matrixEnjinV603.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (matrixEnjinV603.Proposal | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Proposal | undefined)][]>
}

export const deactivated =  {
    /**
     *  The amount which has been reported as inactive to Currency.
     */
    matrixEnjinV603: new StorageType('CommunityPool.Deactivated', 'Default', [], sts.bigint()) as DeactivatedMatrixEnjinV603,
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface DeactivatedMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const approvals =  {
    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    matrixEnjinV603: new StorageType('CommunityPool.Approvals', 'Default', [], sts.array(() => sts.number())) as ApprovalsMatrixEnjinV603,
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface ApprovalsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
