import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const bountyCount =  {
    /**
     *  Number of bounty proposals that have been made.
     */
    matrixEnjinV603: new StorageType('Bounties.BountyCount', 'Default', [], sts.number()) as BountyCountMatrixEnjinV603,
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountyCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const bounties =  {
    /**
     *  Bounties that have been made.
     */
    matrixEnjinV603: new StorageType('Bounties.Bounties', 'Optional', [sts.number()], matrixEnjinV603.Bounty) as BountiesMatrixEnjinV603,
}

/**
 *  Bounties that have been made.
 */
export interface BountiesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(matrixEnjinV603.Bounty | undefined)>
    getMany(block: Block, keys: number[]): Promise<(matrixEnjinV603.Bounty | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (matrixEnjinV603.Bounty | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (matrixEnjinV603.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (matrixEnjinV603.Bounty | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Bounty | undefined)][]>
}

export const bountyDescriptions =  {
    /**
     *  The description of each bounty.
     */
    matrixEnjinV603: new StorageType('Bounties.BountyDescriptions', 'Optional', [sts.number()], sts.bytes()) as BountyDescriptionsMatrixEnjinV603,
}

/**
 *  The description of each bounty.
 */
export interface BountyDescriptionsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: number[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (Bytes | undefined)][]>
}

export const bountyApprovals =  {
    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    matrixEnjinV603: new StorageType('Bounties.BountyApprovals', 'Default', [], sts.array(() => sts.number())) as BountyApprovalsMatrixEnjinV603,
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountyApprovalsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number[]
    get(block: Block): Promise<(number[] | undefined)>
}
