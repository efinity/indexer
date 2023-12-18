import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as v1003 from '../v1003'

export const createFuelTank =  {
    name: 'FuelTanks.create_fuel_tank',
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixEnjinV603.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: matrixEnjinV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v500: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v500.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v600: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v600.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v601: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v601.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v602: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v602.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v604: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v604.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1000: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v1000.FuelTankDescriptor,
        })
    ),
    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    v1003: new CallType(
        'FuelTanks.create_fuel_tank',
        sts.struct({
            descriptor: v1003.FuelTankDescriptor,
        })
    ),
}

export const mutateFuelTank =  {
    name: 'FuelTanks.mutate_fuel_tank',
    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * 
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.mutate_fuel_tank',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            mutation: matrixEnjinV603.DefaultTankMutation,
        })
    ),
}

export const addAccount =  {
    name: 'FuelTanks.add_account',
    /**
     * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
     * required to dispatch calls. A deposit is required, and may be paid by
     * the user or the fuel tank, depending on the settings.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.add_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const removeAccount =  {
    name: 'FuelTanks.remove_account',
    /**
     * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
     * are returned.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const removeAccountRuleData =  {
    name: 'FuelTanks.remove_account_rule_data',
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: matrixEnjinV603.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            userId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: matrixEnjinV1000.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v500: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v500.MultiAddress,
            userId: v500.MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: v500.DispatchRuleKind,
        })
    ),
    /**
     * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
     * the fuel tank or the rule set to be frozen.
     * 
     * ### Errors
     * 
     * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
     * - [`Error::NoPermission`] if called by non-owner
     * - [`Error::AccountNotFound`] if account does not exist for `user_id`
     * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
     */
    v1000: new CallType(
        'FuelTanks.remove_account_rule_data',
        sts.struct({
            tankId: v1000.MultiAddress,
            userId: v1000.MultiAddress,
            ruleSetId: sts.number(),
            ruleKind: v1000.DispatchRuleKind,
        })
    ),
}

export const dispatch =  {
    name: 'FuelTanks.dispatch',
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV603.Call,
            settings: sts.option(() => matrixEnjinV603.DispatchSettings),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1000.Call,
            settings: sts.option(() => matrixEnjinV1000.DispatchSettings),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v500: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v500.MultiAddress,
            ruleSetId: sts.number(),
            call: v500.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v600: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v600.MultiAddress,
            ruleSetId: sts.number(),
            call: v600.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v601: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v601.MultiAddress,
            ruleSetId: sts.number(),
            call: v601.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v602: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v602.MultiAddress,
            ruleSetId: sts.number(),
            call: v602.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v604: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v604.MultiAddress,
            ruleSetId: sts.number(),
            call: v604.Call,
            settings: sts.option(() => v604.DispatchSettings),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1000: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1000.MultiAddress,
            ruleSetId: sts.number(),
            call: v1000.Call,
            settings: sts.option(() => v1000.DispatchSettings),
        })
    ),
    /**
     * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
     * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
     *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
     * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
     */
    v1003: new CallType(
        'FuelTanks.dispatch',
        sts.struct({
            tankId: v1003.MultiAddress,
            ruleSetId: sts.number(),
            call: v1003.Call,
            settings: sts.option(() => v1003.DispatchSettings),
        })
    ),
}

export const dispatchAndTouch =  {
    name: 'FuelTanks.dispatch_and_touch',
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV603.Call,
            settings: sts.option(() => matrixEnjinV603.DispatchSettings),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            call: matrixEnjinV1000.Call,
            settings: sts.option(() => matrixEnjinV1000.DispatchSettings),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v500: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v500.MultiAddress,
            ruleSetId: sts.number(),
            call: v500.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v600: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v600.MultiAddress,
            ruleSetId: sts.number(),
            call: v600.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v601: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v601.MultiAddress,
            ruleSetId: sts.number(),
            call: v601.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v602: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v602.MultiAddress,
            ruleSetId: sts.number(),
            call: v602.Call,
            paysRemainingFee: sts.boolean(),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v604: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v604.MultiAddress,
            ruleSetId: sts.number(),
            call: v604.Call,
            settings: sts.option(() => v604.DispatchSettings),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1000: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1000.MultiAddress,
            ruleSetId: sts.number(),
            call: v1000.Call,
            settings: sts.option(() => v1000.DispatchSettings),
        })
    ),
    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    v1003: new CallType(
        'FuelTanks.dispatch_and_touch',
        sts.struct({
            tankId: v1003.MultiAddress,
            ruleSetId: sts.number(),
            call: v1003.Call,
            settings: sts.option(() => v1003.DispatchSettings),
        })
    ),
}

export const scheduleMutateFreezeState =  {
    name: 'FuelTanks.schedule_mutate_freeze_state',
    /**
     * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
     * used
     * 
     * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     * - [`Error::FreezeQueueFull`] if the queue is full
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.schedule_mutate_freeze_state',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        })
    ),
}

export const insertRuleSet =  {
    name: 'FuelTanks.insert_rule_set',
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV603.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => matrixEnjinV1000.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v500: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v500.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v500.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v600: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v600.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v600.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v601: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v601.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v601.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v602: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v602.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v602.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v604: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v604.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v604.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1000: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1000.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1000.DispatchRuleDescriptor),
        })
    ),
    /**
     * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
     * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
     * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
     * the data first. If a rule is being replaced, it will be mutated with the new parameters,
     * and it will maintain any persistent data it already has.
     * 
     * This is only callable by the fuel tank's owner.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
     * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
     *   kind
     */
    v1003: new CallType(
        'FuelTanks.insert_rule_set',
        sts.struct({
            tankId: v1003.MultiAddress,
            ruleSetId: sts.number(),
            rules: sts.array(() => v1003.DispatchRuleDescriptor),
        })
    ),
}

export const removeRuleSet =  {
    name: 'FuelTanks.remove_rule_set',
    /**
     * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
     * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
     * data first. This is only callable by the fuel tank's owner.
     * # Errors
     * 
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not the fuel tank owner
     * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
     * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
     *   account data
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.remove_rule_set',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            ruleSetId: sts.number(),
        })
    ),
}

export const batchAddAccount =  {
    name: 'FuelTanks.batch_add_account',
    /**
     * Similar to add_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.batch_add_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const batchRemoveAccount =  {
    name: 'FuelTanks.batch_remove_account',
    /**
     * Similar to remove_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.batch_remove_account',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const forceSetConsumption =  {
    name: 'FuelTanks.force_set_consumption',
    /**
     * Force set the fuel tank consumption
     * If `user_id` is [`Some`], it sets the consumption for that account.
     * If it is [`None`], it sets the consumption on the fuel tank directly.
     * 
     * # Errors
     * 
     * - [`Error::AccountNotFound`] if `user_id` is `Some` and account does not exist
     * - [`Error::FuelTankNotFound`] if tank_id does not exist
     * - [`Error::NoPermission`] if caller is not ForceOrigin or fuel tank owner
     * - [`Error::InvalidRuleSet`] if `rule_set_id` does not exist
     * - [`Error::MissingRequiredRule`] if `rule_set_id` does not have the required role
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.force_set_consumption',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
            userId: sts.option(() => matrixEnjinV603.MultiAddress),
            ruleSetId: sts.number(),
            consumption: matrixEnjinV603.Consumption,
        })
    ),
}

export const destroyFuelTank =  {
    name: 'FuelTanks.destroy_fuel_tank',
    /**
     * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
     * Only callable by owner
     * The fuel tank must be frozen
     * Can only be destroyed if all accounts are removed
     * 
     * # Errors
     * 
     * - [`Error::FuelTankNotFound`] if tank_id does not exist
     * - [`Error::NoPermission`] if caller is not owner
     * - [`Error::DestroyUnfrozenTank`] if tank is not frozen
     * - [`Error::DestroyWithExistingAccounts`] if there are still accounts on the tank
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.destroy_fuel_tank',
        sts.struct({
            tankId: matrixEnjinV603.MultiAddress,
        })
    ),
}

export const forceCreateFuelTank =  {
    name: 'FuelTanks.force_create_fuel_tank',
    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixEnjinV603.MultiAddress,
            descriptor: matrixEnjinV603.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: matrixEnjinV1000.MultiAddress,
            descriptor: matrixEnjinV1000.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v604: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: v604.MultiAddress,
            descriptor: v604.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1000: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: v1000.MultiAddress,
            descriptor: v1000.FuelTankDescriptor,
        })
    ),
    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    v1003: new CallType(
        'FuelTanks.force_create_fuel_tank',
        sts.struct({
            owner: v1003.MultiAddress,
            descriptor: v1003.FuelTankDescriptor,
        })
    ),
}

export const forceBatchAddAccount =  {
    name: 'FuelTanks.force_batch_add_account',
    /**
     * Sets the account storage for give tank_id and account
     */
    matrixEnjinV603: new CallType(
        'FuelTanks.force_batch_add_account',
        sts.struct({
            owner: matrixEnjinV603.MultiAddress,
            tankId: matrixEnjinV603.MultiAddress,
            userIds: sts.array(() => matrixEnjinV603.MultiAddress),
        })
    ),
}

export const mutateFreezeState =  {
    name: 'FuelTanks.mutate_freeze_state',
    /**
     * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     */
    matrixEnjinV1000: new CallType(
        'FuelTanks.mutate_freeze_state',
        sts.struct({
            tankId: matrixEnjinV1000.MultiAddress,
            ruleSetId: sts.option(() => sts.number()),
            isFrozen: sts.boolean(),
        })
    ),
}
