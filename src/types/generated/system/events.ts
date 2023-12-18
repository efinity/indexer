import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'

export const extrinsicSuccess =  {
    name: 'System.ExtrinsicSuccess',
    /**
     * An extrinsic completed successfully.
     */
    matrixEnjinV603: new EventType(
        'System.ExtrinsicSuccess',
        sts.struct({
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
}

export const extrinsicFailed =  {
    name: 'System.ExtrinsicFailed',
    /**
     * An extrinsic failed.
     */
    matrixEnjinV603: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: matrixEnjinV603.DispatchError,
            dispatchInfo: matrixEnjinV603.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v500: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v500.DispatchError,
            dispatchInfo: v500.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v602: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v602.DispatchError,
            dispatchInfo: v602.DispatchInfo,
        })
    ),
    /**
     * An extrinsic failed.
     */
    v604: new EventType(
        'System.ExtrinsicFailed',
        sts.struct({
            dispatchError: v604.DispatchError,
            dispatchInfo: v604.DispatchInfo,
        })
    ),
}

export const codeUpdated =  {
    name: 'System.CodeUpdated',
    /**
     * `:code` was updated.
     */
    matrixEnjinV603: new EventType(
        'System.CodeUpdated',
        sts.unit()
    ),
}

export const newAccount =  {
    name: 'System.NewAccount',
    /**
     * A new account was created.
     */
    matrixEnjinV603: new EventType(
        'System.NewAccount',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const killedAccount =  {
    name: 'System.KilledAccount',
    /**
     * An account was reaped.
     */
    matrixEnjinV603: new EventType(
        'System.KilledAccount',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
        })
    ),
}

export const remarked =  {
    name: 'System.Remarked',
    /**
     * On on-chain remark happened.
     */
    matrixEnjinV603: new EventType(
        'System.Remarked',
        sts.struct({
            sender: matrixEnjinV603.AccountId32,
            hash: matrixEnjinV603.H256,
        })
    ),
}
