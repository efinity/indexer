import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const configuration =  {
    /**
     *  The configuration.
     */
    matrixEnjinV603: new StorageType('DmpQueue.Configuration', 'Default', [], matrixEnjinV603.ConfigData) as ConfigurationMatrixEnjinV603,
}

/**
 *  The configuration.
 */
export interface ConfigurationMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.ConfigData
    get(block: Block): Promise<(matrixEnjinV603.ConfigData | undefined)>
}

export const pageIndex =  {
    /**
     *  The page index.
     */
    matrixEnjinV603: new StorageType('DmpQueue.PageIndex', 'Default', [], matrixEnjinV603.PageIndexData) as PageIndexMatrixEnjinV603,
}

/**
 *  The page index.
 */
export interface PageIndexMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.PageIndexData
    get(block: Block): Promise<(matrixEnjinV603.PageIndexData | undefined)>
}

export const pages =  {
    /**
     *  The queue pages.
     */
    matrixEnjinV603: new StorageType('DmpQueue.Pages', 'Default', [sts.number()], sts.array(() => sts.tuple(() => [sts.number(), sts.bytes()]))) as PagesMatrixEnjinV603,
}

/**
 *  The queue pages.
 */
export interface PagesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, Bytes][]
    get(block: Block, key: number): Promise<([number, Bytes][] | undefined)>
    getMany(block: Block, keys: number[]): Promise<([number, Bytes][] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ([number, Bytes][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ([number, Bytes][] | undefined)][]>
}

export const overweight =  {
    /**
     *  The overweight messages.
     */
    matrixEnjinV603: new StorageType('DmpQueue.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [sts.number(), sts.bytes()])) as OverweightMatrixEnjinV603,
}

/**
 *  The overweight messages.
 */
export interface OverweightMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([number, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([number, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([number, Bytes] | undefined)][]>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    matrixEnjinV603: new StorageType('DmpQueue.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightMatrixEnjinV603,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}
