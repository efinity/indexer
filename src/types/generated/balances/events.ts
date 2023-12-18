import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const endowed =  {
    name: 'Balances.Endowed',
    /**
     * An account was created with some free balance.
     */
    matrixEnjinV603: new EventType(
        'Balances.Endowed',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
            freeBalance: sts.bigint(),
        })
    ),
}

export const dustLost =  {
    name: 'Balances.DustLost',
    /**
     * An account was removed whose balance was non-zero but below ExistentialDeposit,
     * resulting in an outright loss.
     */
    matrixEnjinV603: new EventType(
        'Balances.DustLost',
        sts.struct({
            account: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const transfer =  {
    name: 'Balances.Transfer',
    /**
     * Transfer succeeded.
     */
    matrixEnjinV603: new EventType(
        'Balances.Transfer',
        sts.struct({
            from: matrixEnjinV603.AccountId32,
            to: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const balanceSet =  {
    name: 'Balances.BalanceSet',
    /**
     * A balance was set by root.
     */
    matrixEnjinV603: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            free: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v500: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v500.AccountId32,
            free: sts.bigint(),
            reserved: sts.bigint(),
        })
    ),
    /**
     * A balance was set by root.
     */
    v602: new EventType(
        'Balances.BalanceSet',
        sts.struct({
            who: v602.AccountId32,
            free: sts.bigint(),
        })
    ),
}

export const reserved =  {
    name: 'Balances.Reserved',
    /**
     * Some balance was reserved (moved from free to reserved).
     */
    matrixEnjinV603: new EventType(
        'Balances.Reserved',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unreserved =  {
    name: 'Balances.Unreserved',
    /**
     * Some balance was unreserved (moved from reserved to free).
     */
    matrixEnjinV603: new EventType(
        'Balances.Unreserved',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'Balances.ReserveRepatriated',
    /**
     * Some balance was moved from the reserve of the first account to the second account.
     * Final argument indicates the destination balance type.
     */
    matrixEnjinV603: new EventType(
        'Balances.ReserveRepatriated',
        sts.struct({
            from: matrixEnjinV603.AccountId32,
            to: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
            destinationStatus: matrixEnjinV603.BalanceStatus,
        })
    ),
}

export const deposit =  {
    name: 'Balances.Deposit',
    /**
     * Some amount was deposited (e.g. for transaction fees).
     */
    matrixEnjinV603: new EventType(
        'Balances.Deposit',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'Balances.Withdraw',
    /**
     * Some amount was withdrawn from the account (e.g. for transaction fees).
     */
    matrixEnjinV603: new EventType(
        'Balances.Withdraw',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'Balances.Slashed',
    /**
     * Some amount was removed from the account (e.g. for misbehavior).
     */
    matrixEnjinV603: new EventType(
        'Balances.Slashed',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const minted =  {
    name: 'Balances.Minted',
    /**
     * Some amount was minted into an account.
     */
    matrixEnjinV603: new EventType(
        'Balances.Minted',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const burned =  {
    name: 'Balances.Burned',
    /**
     * Some amount was burned from an account.
     */
    matrixEnjinV603: new EventType(
        'Balances.Burned',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const suspended =  {
    name: 'Balances.Suspended',
    /**
     * Some amount was suspended from an account (it can be restored later).
     */
    matrixEnjinV603: new EventType(
        'Balances.Suspended',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const restored =  {
    name: 'Balances.Restored',
    /**
     * Some amount was restored into an account.
     */
    matrixEnjinV603: new EventType(
        'Balances.Restored',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const upgraded =  {
    name: 'Balances.Upgraded',
    /**
     * An account was upgraded.
     */
    matrixEnjinV603: new EventType(
        'Balances.Upgraded',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
        })
    ),
}

export const issued =  {
    name: 'Balances.Issued',
    /**
     * Total issuance was increased by `amount`, creating a credit to be balanced.
     */
    matrixEnjinV603: new EventType(
        'Balances.Issued',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const rescinded =  {
    name: 'Balances.Rescinded',
    /**
     * Total issuance was decreased by `amount`, creating a debt to be balanced.
     */
    matrixEnjinV603: new EventType(
        'Balances.Rescinded',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const locked =  {
    name: 'Balances.Locked',
    /**
     * Some balance was locked.
     */
    matrixEnjinV603: new EventType(
        'Balances.Locked',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const unlocked =  {
    name: 'Balances.Unlocked',
    /**
     * Some balance was unlocked.
     */
    matrixEnjinV603: new EventType(
        'Balances.Unlocked',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'Balances.Frozen',
    /**
     * Some balance was frozen.
     */
    matrixEnjinV603: new EventType(
        'Balances.Frozen',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}

export const thawed =  {
    name: 'Balances.Thawed',
    /**
     * Some balance was thawed.
     */
    matrixEnjinV603: new EventType(
        'Balances.Thawed',
        sts.struct({
            who: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
        })
    ),
}
