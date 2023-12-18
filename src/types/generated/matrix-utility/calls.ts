import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as v1003 from '../v1003'

export const batch =  {
    name: 'MatrixUtility.batch',
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV603: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV603.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    matrixEnjinV1000: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => matrixEnjinV1000.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    v604: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => v604.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    v1000: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => v1000.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
    /**
     * Dispatch a batch of calls.
     * 
     * May be called from any origin except [`None`].
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing [`frame_system::Config::BaseCallFilter`]).
     * 
     * # Errors
     * 
     * - [`Error::TooManyCalls`]: If the number of calls exceeds the limit.
     */
    v1003: new CallType(
        'MatrixUtility.batch',
        sts.struct({
            calls: sts.array(() => v1003.Call),
            continueOnFailure: sts.boolean(),
        })
    ),
}
