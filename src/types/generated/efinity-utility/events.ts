import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'

export const batchDispatched =  {
    name: 'EfinityUtility.BatchDispatched',
    /**
     * Batch of calls dispatched without errors.
     */
    v500: new EventType(
        'EfinityUtility.BatchDispatched',
        sts.unit()
    ),
}

export const batchPartiallyDispatched =  {
    name: 'EfinityUtility.BatchPartiallyDispatched',
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    v500: new EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), v500.DispatchError]))
    ),
    /**
     * Batch of calls dispatched, but some calls resulted in error.
     * Indexes and errors of failing dispatch calls are provided.
     */
    v602: new EventType(
        'EfinityUtility.BatchPartiallyDispatched',
        sts.array(() => sts.tuple(() => [sts.number(), v602.DispatchError]))
    ),
}

export const batchFailed =  {
    name: 'EfinityUtility.BatchFailed',
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    v500: new EventType(
        'EfinityUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: v500.DispatchError,
        })
    ),
    /**
     * Batch of calls did not disptach completely.
     * Index and error of the failing dispatch call is provided.
     */
    v602: new EventType(
        'EfinityUtility.BatchFailed',
        sts.struct({
            index: sts.number(),
            error: v602.DispatchError,
        })
    ),
}
