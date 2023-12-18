import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'

export const batchInterrupted =  {
    name: 'Utility.BatchInterrupted',
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    matrixEnjinV603: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v500: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v500.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v602: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v602.DispatchError,
        })
    ),
    /**
     * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
     * well as the error.
     */
    v604: new EventType(
        'Utility.BatchInterrupted',
        sts.struct({
            index: sts.number(),
            error: v604.DispatchError,
        })
    ),
}

export const batchCompleted =  {
    name: 'Utility.BatchCompleted',
    /**
     * Batch of dispatches completed fully with no error.
     */
    matrixEnjinV603: new EventType(
        'Utility.BatchCompleted',
        sts.unit()
    ),
}

export const batchCompletedWithErrors =  {
    name: 'Utility.BatchCompletedWithErrors',
    /**
     * Batch of dispatches completed but has errors.
     */
    matrixEnjinV603: new EventType(
        'Utility.BatchCompletedWithErrors',
        sts.unit()
    ),
}

export const itemCompleted =  {
    name: 'Utility.ItemCompleted',
    /**
     * A single item within a Batch of dispatches has completed with no error.
     */
    matrixEnjinV603: new EventType(
        'Utility.ItemCompleted',
        sts.unit()
    ),
}

export const itemFailed =  {
    name: 'Utility.ItemFailed',
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    matrixEnjinV603: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v500: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v500.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v602: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v602.DispatchError,
        })
    ),
    /**
     * A single item within a Batch of dispatches has completed with error.
     */
    v604: new EventType(
        'Utility.ItemFailed',
        sts.struct({
            error: v604.DispatchError,
        })
    ),
}

export const dispatchedAs =  {
    name: 'Utility.DispatchedAs',
    /**
     * A call was dispatched.
     */
    matrixEnjinV603: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => matrixEnjinV603.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v500: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v500.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v602: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v602.DispatchError),
        })
    ),
    /**
     * A call was dispatched.
     */
    v604: new EventType(
        'Utility.DispatchedAs',
        sts.struct({
            result: sts.result(() => sts.unit(), () => v604.DispatchError),
        })
    ),
}
