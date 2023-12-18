import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const inboundXcmpStatus =  {
    /**
     *  Status of the inbound XCMP channels.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.InboundXcmpStatus', 'Default', [], sts.array(() => matrixEnjinV603.InboundChannelDetails)) as InboundXcmpStatusMatrixEnjinV603,
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface InboundXcmpStatusMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.InboundChannelDetails[]
    get(block: Block): Promise<(matrixEnjinV603.InboundChannelDetails[] | undefined)>
}

export const inboundXcmpMessages =  {
    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.InboundXcmpMessages', 'Default', [matrixEnjinV603.Id, sts.number()], sts.bytes()) as InboundXcmpMessagesMatrixEnjinV603,
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface InboundXcmpMessagesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.Id, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.Id, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.Id): Promise<[matrixEnjinV603.Id, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id, key2: number): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.Id): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id, key2: number): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
}

export const outboundXcmpStatus =  {
    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.OutboundXcmpStatus', 'Default', [], sts.array(() => matrixEnjinV603.OutboundChannelDetails)) as OutboundXcmpStatusMatrixEnjinV603,
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface OutboundXcmpStatusMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.OutboundChannelDetails[]
    get(block: Block): Promise<(matrixEnjinV603.OutboundChannelDetails[] | undefined)>
}

export const outboundXcmpMessages =  {
    /**
     *  The messages outbound in a given XCMP channel.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.OutboundXcmpMessages', 'Default', [matrixEnjinV603.Id, sts.number()], sts.bytes()) as OutboundXcmpMessagesMatrixEnjinV603,
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface OutboundXcmpMessagesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.Id, number][]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.Id, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.Id): Promise<[matrixEnjinV603.Id, number][]>
    getKeys(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id, key2: number): AsyncIterable<[matrixEnjinV603.Id, number][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.Id): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.Id, key2: number): Promise<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.Id, key2: number): AsyncIterable<[k: [matrixEnjinV603.Id, number], v: (Bytes | undefined)][]>
}

export const signalMessages =  {
    /**
     *  Any signal messages waiting to be sent.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.SignalMessages', 'Default', [matrixEnjinV603.Id], sts.bytes()) as SignalMessagesMatrixEnjinV603,
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface SignalMessagesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): Bytes
    get(block: Block, key: matrixEnjinV603.Id): Promise<(Bytes | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.Id[]): Promise<(Bytes | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.Id[]>
    getKeys(block: Block, key: matrixEnjinV603.Id): Promise<matrixEnjinV603.Id[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.Id[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.Id): AsyncIterable<matrixEnjinV603.Id[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.Id, v: (Bytes | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.Id): Promise<[k: matrixEnjinV603.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.Id, v: (Bytes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.Id): AsyncIterable<[k: matrixEnjinV603.Id, v: (Bytes | undefined)][]>
}

export const queueConfig =  {
    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.QueueConfig', 'Default', [], matrixEnjinV603.QueueConfigData) as QueueConfigMatrixEnjinV603,
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface QueueConfigMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.QueueConfigData
    get(block: Block): Promise<(matrixEnjinV603.QueueConfigData | undefined)>
}

export const overweight =  {
    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.Overweight', 'Optional', [sts.bigint()], sts.tuple(() => [matrixEnjinV603.Id, sts.number(), sts.bytes()])) as OverweightMatrixEnjinV603,
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface OverweightMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<([matrixEnjinV603.Id, number, Bytes] | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<([matrixEnjinV603.Id, number, Bytes] | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: ([matrixEnjinV603.Id, number, Bytes] | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: ([matrixEnjinV603.Id, number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: ([matrixEnjinV603.Id, number, Bytes] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: ([matrixEnjinV603.Id, number, Bytes] | undefined)][]>
}

export const counterForOverweight =  {
    /**
     * Counter for the related counted storage map
     */
    matrixEnjinV603: new StorageType('XcmpQueue.CounterForOverweight', 'Default', [], sts.number()) as CounterForOverweightMatrixEnjinV603,
}

/**
 * Counter for the related counted storage map
 */
export interface CounterForOverweightMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const overweightCount =  {
    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.OverweightCount', 'Default', [], sts.bigint()) as OverweightCountMatrixEnjinV603,
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface OverweightCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const queueSuspended =  {
    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    matrixEnjinV603: new StorageType('XcmpQueue.QueueSuspended', 'Default', [], sts.boolean()) as QueueSuspendedMatrixEnjinV603,
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface QueueSuspendedMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): boolean
    get(block: Block): Promise<(boolean | undefined)>
}
