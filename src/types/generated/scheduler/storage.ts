import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v1010 from '../v1010'
import * as matrixEnjinV1012 from '../matrixEnjinV1012'

export const incompleteSince =  {
    matrixEnjinV603: new StorageType('Scheduler.IncompleteSince', 'Optional', [], sts.number()) as IncompleteSinceMatrixEnjinV603,
}

export interface IncompleteSinceMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const agenda =  {
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV603: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixEnjinV603.Scheduled))) as AgendaMatrixEnjinV603,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    matrixEnjinV1012: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => matrixEnjinV1012.Scheduled))) as AgendaMatrixEnjinV1012,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v500: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v500.Scheduled))) as AgendaV500,
    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    v1010: new StorageType('Scheduler.Agenda', 'Default', [sts.number()], sts.array(() => sts.option(() => v1010.Scheduled))) as AgendaV1010,
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV603.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixEnjinV603.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixEnjinV603.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixEnjinV603.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (matrixEnjinV1012.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((matrixEnjinV1012.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((matrixEnjinV1012.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((matrixEnjinV1012.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v500.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v500.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v500.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v500.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v500.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v500.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v500.Scheduled | undefined)[] | undefined)][]>
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface AgendaV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): (v1010.Scheduled | undefined)[]
    get(block: Block, key: number): Promise<((v1010.Scheduled | undefined)[] | undefined)>
    getMany(block: Block, keys: number[]): Promise<((v1010.Scheduled | undefined)[] | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: ((v1010.Scheduled | undefined)[] | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: ((v1010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: ((v1010.Scheduled | undefined)[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: ((v1010.Scheduled | undefined)[] | undefined)][]>
}

export const lookup =  {
    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    matrixEnjinV603: new StorageType('Scheduler.Lookup', 'Optional', [sts.bytes()], sts.tuple(() => [sts.number(), sts.number()])) as LookupMatrixEnjinV603,
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface LookupMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<([number, number] | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<([number, number] | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: ([number, number] | undefined)][]>
}

export const retries =  {
    /**
     *  Retry configurations for items to be executed, indexed by task address.
     */
    matrixEnjinV1012: new StorageType('Scheduler.Retries', 'Optional', [sts.tuple(() => [sts.number(), sts.number()])], matrixEnjinV1012.RetryConfig) as RetriesMatrixEnjinV1012,
}

/**
 *  Retry configurations for items to be executed, indexed by task address.
 */
export interface RetriesMatrixEnjinV1012  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [number, number]): Promise<(matrixEnjinV1012.RetryConfig | undefined)>
    getMany(block: Block, keys: [number, number][]): Promise<(matrixEnjinV1012.RetryConfig | undefined)[]>
    getKeys(block: Block): Promise<[number, number][]>
    getKeys(block: Block, key: [number, number]): Promise<[number, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, block: Block, key: [number, number]): AsyncIterable<[number, number][]>
    getPairs(block: Block): Promise<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairs(block: Block, key: [number, number]): Promise<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [number, number]): AsyncIterable<[k: [number, number], v: (matrixEnjinV1012.RetryConfig | undefined)][]>
}
