import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as v1004 from '../v1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as v1005 from '../v1005'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'

export const account =  {
    /**
     *  The full account information for a particular account ID.
     */
    matrixEnjinV603: new StorageType('System.Account', 'Default', [matrixEnjinV603.AccountId32], matrixEnjinV603.AccountInfo) as AccountMatrixEnjinV603,
    /**
     *  The full account information for a particular account ID.
     */
    v500: new StorageType('System.Account', 'Default', [v500.AccountId32], v500.AccountInfo) as AccountV500,
    /**
     *  The full account information for a particular account ID.
     */
    v602: new StorageType('System.Account', 'Default', [v602.AccountId32], v602.AccountInfo) as AccountV602,
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountInfo
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.AccountInfo | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountInfo | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.AccountInfo
    get(block: Block, key: v500.AccountId32): Promise<(v500.AccountInfo | undefined)>
    getMany(block: Block, keys: v500.AccountId32[]): Promise<(v500.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v500.AccountId32[]>
    getKeys(block: Block, key: v500.AccountId32): Promise<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<v500.AccountId32[]>
    getPairs(block: Block): Promise<[k: v500.AccountId32, v: (v500.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v500.AccountId32): Promise<[k: v500.AccountId32, v: (v500.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.AccountId32, v: (v500.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<[k: v500.AccountId32, v: (v500.AccountInfo | undefined)][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface AccountV602  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v602.AccountInfo
    get(block: Block, key: v602.AccountId32): Promise<(v602.AccountInfo | undefined)>
    getMany(block: Block, keys: v602.AccountId32[]): Promise<(v602.AccountInfo | undefined)[]>
    getKeys(block: Block): Promise<v602.AccountId32[]>
    getKeys(block: Block, key: v602.AccountId32): Promise<v602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v602.AccountId32): AsyncIterable<v602.AccountId32[]>
    getPairs(block: Block): Promise<[k: v602.AccountId32, v: (v602.AccountInfo | undefined)][]>
    getPairs(block: Block, key: v602.AccountId32): Promise<[k: v602.AccountId32, v: (v602.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v602.AccountId32, v: (v602.AccountInfo | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v602.AccountId32): AsyncIterable<[k: v602.AccountId32, v: (v602.AccountInfo | undefined)][]>
}

export const extrinsicCount =  {
    /**
     *  Total extrinsics count for the current block.
     */
    matrixEnjinV603: new StorageType('System.ExtrinsicCount', 'Optional', [], sts.number()) as ExtrinsicCountMatrixEnjinV603,
}

/**
 *  Total extrinsics count for the current block.
 */
export interface ExtrinsicCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockWeight =  {
    /**
     *  The current weight for the block.
     */
    matrixEnjinV603: new StorageType('System.BlockWeight', 'Default', [], matrixEnjinV603.PerDispatchClass) as BlockWeightMatrixEnjinV603,
}

/**
 *  The current weight for the block.
 */
export interface BlockWeightMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.PerDispatchClass
    get(block: Block): Promise<(matrixEnjinV603.PerDispatchClass | undefined)>
}

export const allExtrinsicsLen =  {
    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    matrixEnjinV603: new StorageType('System.AllExtrinsicsLen', 'Optional', [], sts.number()) as AllExtrinsicsLenMatrixEnjinV603,
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface AllExtrinsicsLenMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const blockHash =  {
    /**
     *  Map of block numbers to block hashes.
     */
    matrixEnjinV603: new StorageType('System.BlockHash', 'Default', [sts.number()], matrixEnjinV603.H256) as BlockHashMatrixEnjinV603,
}

/**
 *  Map of block numbers to block hashes.
 */
export interface BlockHashMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256
    get(block: Block, key: number): Promise<(matrixEnjinV603.H256 | undefined)>
    getMany(block: Block, keys: number[]): Promise<(matrixEnjinV603.H256 | undefined)[]>
    getKeys(block: Block): Promise<number[]>
    getKeys(block: Block, key: number): Promise<number[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, block: Block, key: number): AsyncIterable<number[]>
    getPairs(block: Block): Promise<[k: number, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairs(block: Block, key: number): Promise<[k: number, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: number, v: (matrixEnjinV603.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.H256 | undefined)][]>
}

export const extrinsicData =  {
    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    matrixEnjinV603: new StorageType('System.ExtrinsicData', 'Default', [sts.number()], sts.bytes()) as ExtrinsicDataMatrixEnjinV603,
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface ExtrinsicDataMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
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

export const number =  {
    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    matrixEnjinV603: new StorageType('System.Number', 'Default', [], sts.number()) as NumberMatrixEnjinV603,
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface NumberMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const parentHash =  {
    /**
     *  Hash of the previous block.
     */
    matrixEnjinV603: new StorageType('System.ParentHash', 'Default', [], matrixEnjinV603.H256) as ParentHashMatrixEnjinV603,
}

/**
 *  Hash of the previous block.
 */
export interface ParentHashMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256
    get(block: Block): Promise<(matrixEnjinV603.H256 | undefined)>
}

export const digest =  {
    /**
     *  Digest of the current block, also part of the block header.
     */
    matrixEnjinV603: new StorageType('System.Digest', 'Default', [], matrixEnjinV603.Digest) as DigestMatrixEnjinV603,
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface DigestMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.Digest
    get(block: Block): Promise<(matrixEnjinV603.Digest | undefined)>
}

export const events =  {
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV603: new StorageType('System.Events', 'Default', [], sts.array(() => matrixEnjinV603.EventRecord)) as EventsMatrixEnjinV603,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1000: new StorageType('System.Events', 'Default', [], sts.array(() => matrixEnjinV1000.EventRecord)) as EventsMatrixEnjinV1000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1004: new StorageType('System.Events', 'Default', [], sts.array(() => matrixEnjinV1004.EventRecord)) as EventsMatrixEnjinV1004,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    matrixEnjinV1005: new StorageType('System.Events', 'Default', [], sts.array(() => matrixEnjinV1005.EventRecord)) as EventsMatrixEnjinV1005,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v500: new StorageType('System.Events', 'Default', [], sts.array(() => v500.EventRecord)) as EventsV500,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v600: new StorageType('System.Events', 'Default', [], sts.array(() => v600.EventRecord)) as EventsV600,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v601: new StorageType('System.Events', 'Default', [], sts.array(() => v601.EventRecord)) as EventsV601,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v602: new StorageType('System.Events', 'Default', [], sts.array(() => v602.EventRecord)) as EventsV602,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v604: new StorageType('System.Events', 'Default', [], sts.array(() => v604.EventRecord)) as EventsV604,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1000: new StorageType('System.Events', 'Default', [], sts.array(() => v1000.EventRecord)) as EventsV1000,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1004: new StorageType('System.Events', 'Default', [], sts.array(() => v1004.EventRecord)) as EventsV1004,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1005: new StorageType('System.Events', 'Default', [], sts.array(() => v1005.EventRecord)) as EventsV1005,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1010: new StorageType('System.Events', 'Default', [], sts.array(() => v1010.EventRecord)) as EventsV1010,
    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    v1011: new StorageType('System.Events', 'Default', [], sts.array(() => v1011.EventRecord)) as EventsV1011,
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.EventRecord[]
    get(block: Block): Promise<(matrixEnjinV603.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1000.EventRecord[]
    get(block: Block): Promise<(matrixEnjinV1000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1004.EventRecord[]
    get(block: Block): Promise<(matrixEnjinV1004.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsMatrixEnjinV1005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV1005.EventRecord[]
    get(block: Block): Promise<(matrixEnjinV1005.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.EventRecord[]
    get(block: Block): Promise<(v500.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV600  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v600.EventRecord[]
    get(block: Block): Promise<(v600.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV601  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v601.EventRecord[]
    get(block: Block): Promise<(v601.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV602  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v602.EventRecord[]
    get(block: Block): Promise<(v602.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV604  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v604.EventRecord[]
    get(block: Block): Promise<(v604.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1000  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1000.EventRecord[]
    get(block: Block): Promise<(v1000.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1004  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1004.EventRecord[]
    get(block: Block): Promise<(v1004.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1005  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1005.EventRecord[]
    get(block: Block): Promise<(v1005.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1010.EventRecord[]
    get(block: Block): Promise<(v1010.EventRecord[] | undefined)>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface EventsV1011  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1011.EventRecord[]
    get(block: Block): Promise<(v1011.EventRecord[] | undefined)>
}

export const eventCount =  {
    /**
     *  The number of events in the `Events<T>` list.
     */
    matrixEnjinV603: new StorageType('System.EventCount', 'Default', [], sts.number()) as EventCountMatrixEnjinV603,
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface EventCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const eventTopics =  {
    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    matrixEnjinV603: new StorageType('System.EventTopics', 'Default', [matrixEnjinV603.H256], sts.array(() => sts.tuple(() => [sts.number(), sts.number()]))) as EventTopicsMatrixEnjinV603,
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface EventTopicsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): [number, number][]
    get(block: Block, key: matrixEnjinV603.H256): Promise<([number, number][] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<([number, number][] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: ([number, number][] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: ([number, number][] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: ([number, number][] | undefined)][]>
}

export const lastRuntimeUpgrade =  {
    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    matrixEnjinV603: new StorageType('System.LastRuntimeUpgrade', 'Optional', [], matrixEnjinV603.LastRuntimeUpgradeInfo) as LastRuntimeUpgradeMatrixEnjinV603,
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface LastRuntimeUpgradeMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.LastRuntimeUpgradeInfo | undefined)>
}

export const upgradedToU32RefCount =  {
    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    matrixEnjinV603: new StorageType('System.UpgradedToU32RefCount', 'Default', [], sts.boolean()) as UpgradedToU32RefCountMatrixEnjinV603,
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface UpgradedToU32RefCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const upgradedToTripleRefCount =  {
    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    matrixEnjinV603: new StorageType('System.UpgradedToTripleRefCount', 'Default', [], sts.boolean()) as UpgradedToTripleRefCountMatrixEnjinV603,
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface UpgradedToTripleRefCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const executionPhase =  {
    /**
     *  The execution phase of the block.
     */
    matrixEnjinV603: new StorageType('System.ExecutionPhase', 'Optional', [], matrixEnjinV603.Phase) as ExecutionPhaseMatrixEnjinV603,
}

/**
 *  The execution phase of the block.
 */
export interface ExecutionPhaseMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.Phase | undefined)>
}

export const inherentsApplied =  {
    /**
     *  Whether all inherents have been applied.
     */
    v1010: new StorageType('System.InherentsApplied', 'Default', [], sts.boolean()) as InherentsAppliedV1010,
}

/**
 *  Whether all inherents have been applied.
 */
export interface InherentsAppliedV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}

export const authorizedUpgrade =  {
    /**
     *  `Some` if a code upgrade has been authorized.
     */
    v1010: new StorageType('System.AuthorizedUpgrade', 'Optional', [], v1010.CodeUpgradeAuthorization) as AuthorizedUpgradeV1010,
}

/**
 *  `Some` if a code upgrade has been authorized.
 */
export interface AuthorizedUpgradeV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v1010.CodeUpgradeAuthorization | undefined)>
}
