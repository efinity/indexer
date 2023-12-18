import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'

export const newMultisig =  {
    name: 'Multisig.NewMultisig',
    /**
     * A new multisig operation has begun.
     */
    matrixEnjinV603: new EventType(
        'Multisig.NewMultisig',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigApproval =  {
    name: 'Multisig.MultisigApproval',
    /**
     * A multisig operation has been approved by someone.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigApproval',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}

export const multisigExecuted =  {
    name: 'Multisig.MultisigExecuted',
    /**
     * A multisig operation has been executed.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => matrixEnjinV603.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v500: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v500.AccountId32,
            timepoint: v500.Timepoint,
            multisig: v500.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v500.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v602: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v602.AccountId32,
            timepoint: v602.Timepoint,
            multisig: v602.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v602.DispatchError),
        })
    ),
    /**
     * A multisig operation has been executed.
     */
    v604: new EventType(
        'Multisig.MultisigExecuted',
        sts.struct({
            approving: v604.AccountId32,
            timepoint: v604.Timepoint,
            multisig: v604.AccountId32,
            callHash: sts.bytes(),
            result: sts.result(() => sts.unit(), () => v604.DispatchError),
        })
    ),
}

export const multisigCancelled =  {
    name: 'Multisig.MultisigCancelled',
    /**
     * A multisig operation has been cancelled.
     */
    matrixEnjinV603: new EventType(
        'Multisig.MultisigCancelled',
        sts.struct({
            cancelling: matrixEnjinV603.AccountId32,
            timepoint: matrixEnjinV603.Timepoint,
            multisig: matrixEnjinV603.AccountId32,
            callHash: sts.bytes(),
        })
    ),
}
