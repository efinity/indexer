import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as v1000 from '../v1000'

export const sudid =  {
    name: 'Sudo.Sudid',
    /**
     * A sudo just took place. \[result\]
     */
    v500: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v500.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v602: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v602.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v1000: new EventType(
        'Sudo.Sudid',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v1000.DispatchError),
        })
    ),
}

export const keyChanged =  {
    name: 'Sudo.KeyChanged',
    /**
     * The \[sudoer\] just switched identity; the old key is supplied if one existed.
     */
    v500: new EventType(
        'Sudo.KeyChanged',
        sts.struct({
            oldSudoer: sts.option(() => v500.AccountId32),
        })
    ),
}

export const sudoAsDone =  {
    name: 'Sudo.SudoAsDone',
    /**
     * A sudo just took place. \[result\]
     */
    v500: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v500.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v602: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v602.DispatchError),
        })
    ),
    /**
     * A sudo just took place. \[result\]
     */
    v1000: new EventType(
        'Sudo.SudoAsDone',
        sts.struct({
            sudoResult: sts.result(() => sts.unit(), () => v1000.DispatchError),
        })
    ),
}
