import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'

export const fuelTankCreated =  {
    name: 'FuelTanks.FuelTankCreated',
    /**
     * A new [`FuelTank`] was created.
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankCreated',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The name of the [`FuelTank`]
             */
            name: sts.bytes(),
            /**
             * The account id of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const fuelTankMutated =  {
    name: 'FuelTanks.FuelTankMutated',
    /**
     * A [`FuelTank`] was mutated
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankMutated',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The mutation that was applied
             */
            mutation: matrixEnjinV603.DefaultTankMutation,
        })
    ),
}

export const fuelTankDestroyed =  {
    name: 'FuelTanks.FuelTankDestroyed',
    /**
     * A [`FuelTank`] was destroyed
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FuelTankDestroyed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const callDispatched =  {
    name: 'FuelTanks.CallDispatched',
    /**
     * A call was dispatched through a [`FuelTank`].
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.CallDispatched',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const accountAdded =  {
    name: 'FuelTanks.AccountAdded',
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixEnjinV603.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    matrixEnjinV1000: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: matrixEnjinV1000.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v500: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: v500.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
        })
    ),
    /**
     * An account was added to a [`FuelTank`]
     */
    v1000: new EventType(
        'FuelTanks.AccountAdded',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was added
             */
            userId: v1000.AccountId32,
            /**
             * The deposit reserved by the [`FuelTank`] for this account
             */
            tankDeposit: sts.bigint(),
            /**
             * The deposit reserved by the user for this account
             */
            userDeposit: sts.bigint(),
            /**
             * The amount the fuel tank has transferred to this account
             */
            totalReceived: sts.bigint(),
        })
    ),
}

export const accountRemoved =  {
    name: 'FuelTanks.AccountRemoved',
    /**
     * An account was removed from a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const accountRuleDataRemoved =  {
    name: 'FuelTanks.AccountRuleDataRemoved',
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixEnjinV603.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    matrixEnjinV1000: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: matrixEnjinV1000.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: matrixEnjinV1000.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v500: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v500.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v500.DispatchRuleKind,
        })
    ),
    /**
     * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
     * [`RuleSetId`](Config::RuleSetId)
     */
    v1000: new EventType(
        'FuelTanks.AccountRuleDataRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v1000.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that was removed
             */
            userId: v1000.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
            /**
             * The [`DispatchRuleKind`] that was removed
             */
            ruleKind: v1000.DispatchRuleKind,
        })
    ),
}

export const ruleSetInserted =  {
    name: 'FuelTanks.RuleSetInserted',
    /**
     * A new rule set was added to [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.RuleSetInserted',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was added
             */
            ruleSetId: sts.number(),
        })
    ),
}

export const ruleSetRemoved =  {
    name: 'FuelTanks.RuleSetRemoved',
    /**
     * A rule set was removed from [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.RuleSetRemoved',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The id of the rule set that was removed
             */
            ruleSetId: sts.number(),
        })
    ),
}

export const mutateFreezeStateScheduled =  {
    name: 'FuelTanks.MutateFreezeStateScheduled',
    /**
     * The freeze state mutation for fuel tank or its rule set was scheduled
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.MutateFreezeStateScheduled',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
        })
    ),
}

export const freezeStateMutated =  {
    name: 'FuelTanks.FreezeStateMutated',
    /**
     * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.FreezeStateMutated',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
        })
    ),
}

export const scheduleMutateFreezeStateFailed =  {
    name: 'FuelTanks.ScheduleMutateFreezeStateFailed',
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v500: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v500.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v500.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v602: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v602.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v602.DispatchError,
        })
    ),
    /**
     * The freeze state change for fuel tank or its rule set failed in `on_finalize`
     */
    v604: new EventType(
        'FuelTanks.ScheduleMutateFreezeStateFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v604.AccountId32,
            /**
             * The possible [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.option(() => sts.number()),
            /**
             * The new `is_frozen` state
             */
            isFrozen: sts.boolean(),
            /**
             * The error
             */
            error: v604.DispatchError,
        })
    ),
}

export const dispatchFailed =  {
    name: 'FuelTanks.DispatchFailed',
    /**
     * The dispatch of a call has failed
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: matrixEnjinV603.AccountId32,
            /**
             * The error
             */
            error: matrixEnjinV603.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v500: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v500.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v500.AccountId32,
            /**
             * The error
             */
            error: v500.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v602: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v602.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v602.AccountId32,
            /**
             * The error
             */
            error: v602.DispatchError,
        })
    ),
    /**
     * The dispatch of a call has failed
     */
    v604: new EventType(
        'FuelTanks.DispatchFailed',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: v604.AccountId32,
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
             */
            caller: v604.AccountId32,
            /**
             * The error
             */
            error: v604.DispatchError,
        })
    ),
}

export const consumptionSet =  {
    name: 'FuelTanks.ConsumptionSet',
    /**
     * The consumption for an account was set for a rule set on a [`FuelTank`]
     */
    matrixEnjinV603: new EventType(
        'FuelTanks.ConsumptionSet',
        sts.struct({
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
             */
            tankId: matrixEnjinV603.AccountId32,
            /**
             * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
             * was set
             */
            userId: sts.option(() => matrixEnjinV603.AccountId32),
            /**
             * The [`RuleSetId`](Config::RuleSetId)
             */
            ruleSetId: sts.number(),
            /**
             * The new [`Consumption`](crate::Consumption)
             */
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}
