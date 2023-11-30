import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v1000 from '../v1000'

export const addRegistrar =  {
    name: 'Identity.add_registrar',
    /**
     * Add a registrar to the system.
     * 
     * The dispatch origin for this call must be `T::RegistrarOrigin`.
     * 
     * - `account`: the account of the registrar.
     * 
     * Emits `RegistrarAdded` if successful.
     * 
     * ## Complexity
     * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.add_registrar',
        sts.struct({
            account: v1000.MultiAddress,
        })
    ),
}

export const setIdentity =  {
    name: 'Identity.set_identity',
    /**
     * Set an account's identity information and reserve the appropriate deposit.
     * 
     * If the account already has identity information, the deposit is taken as part payment
     * for the new deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `info`: The identity information.
     * 
     * Emits `IdentitySet` if successful.
     * 
     * ## Complexity
     * - `O(X + X' + R)`
     *   - where `X` additional-field-count (deposit-bounded and code-bounded)
     *   - where `R` judgements-count (registrar-count-bounded)
     */
    v1000: new CallType(
        'Identity.set_identity',
        sts.struct({
            info: v1000.IdentityInfo,
        })
    ),
}

export const setSubs =  {
    name: 'Identity.set_subs',
    /**
     * Set the sub-accounts of the sender.
     * 
     * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
     * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * - `subs`: The identity's (new) sub-accounts.
     * 
     * ## Complexity
     * - `O(P + S)`
     *   - where `P` old-subs-count (hard- and deposit-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     */
    v1000: new CallType(
        'Identity.set_subs',
        sts.struct({
            subs: sts.array(() => sts.tuple(() => [v1000.AccountId32, v1000.Data])),
        })
    ),
}

export const clearIdentity =  {
    name: 'Identity.clear_identity',
    /**
     * Clear an account's identity info and all sub-accounts and return all deposits.
     * 
     * Payment: All reserved balances on the account are returned.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * identity.
     * 
     * Emits `IdentityCleared` if successful.
     * 
     * ## Complexity
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.clear_identity',
        sts.unit()
    ),
}

export const requestJudgement =  {
    name: 'Identity.request_judgement',
    /**
     * Request a judgement from a registrar.
     * 
     * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
     * given.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is requested.
     * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
     * 
     * ```nocompile
     * Self::registrars().get(reg_index).unwrap().fee
     * ```
     * 
     * Emits `JudgementRequested` if successful.
     * 
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.request_judgement',
        sts.struct({
            regIndex: sts.number(),
            maxFee: sts.bigint(),
        })
    ),
}

export const cancelRequest =  {
    name: 'Identity.cancel_request',
    /**
     * Cancel a previous request.
     * 
     * Payment: A previously reserved deposit is returned on success.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a
     * registered identity.
     * 
     * - `reg_index`: The index of the registrar whose judgement is no longer requested.
     * 
     * Emits `JudgementUnrequested` if successful.
     * 
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.cancel_request',
        sts.struct({
            regIndex: sts.number(),
        })
    ),
}

export const setFee =  {
    name: 'Identity.set_fee',
    /**
     * Set the fee required for a judgement to be requested from a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fee`: the new fee.
     * 
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    v1000: new CallType(
        'Identity.set_fee',
        sts.struct({
            index: sts.number(),
            fee: sts.bigint(),
        })
    ),
}

export const setAccountId =  {
    name: 'Identity.set_account_id',
    /**
     * Change the account associated with a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `new`: the new account ID.
     * 
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    v1000: new CallType(
        'Identity.set_account_id',
        sts.struct({
            index: sts.number(),
            new: v1000.MultiAddress,
        })
    ),
}

export const setFields =  {
    name: 'Identity.set_fields',
    /**
     * Set the field information for a registrar.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `index`.
     * 
     * - `index`: the index of the registrar whose fee is to be set.
     * - `fields`: the fields that the registrar concerns themselves with.
     * 
     * ## Complexity
     * - `O(R)`.
     *   - where `R` registrar-count (governance-bounded).
     */
    v1000: new CallType(
        'Identity.set_fields',
        sts.struct({
            index: sts.number(),
            fields: v1000.BitFlags,
        })
    ),
}

export const provideJudgement =  {
    name: 'Identity.provide_judgement',
    /**
     * Provide a judgement for an account's identity.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must be the account
     * of the registrar whose index is `reg_index`.
     * 
     * - `reg_index`: the index of the registrar whose judgement is being made.
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
     * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
     * 
     * Emits `JudgementGiven` if successful.
     * 
     * ## Complexity
     * - `O(R + X)`.
     *   - where `R` registrar-count (governance-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.provide_judgement',
        sts.struct({
            regIndex: sts.number(),
            target: v1000.MultiAddress,
            judgement: v1000.Judgement,
            identity: v1000.H256,
        })
    ),
}

export const killIdentity =  {
    name: 'Identity.kill_identity',
    /**
     * Remove an account's identity and sub-account information and slash the deposits.
     * 
     * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
     * `Slash`. Verification request deposits are not returned; they should be cancelled
     * manually using `cancel_request`.
     * 
     * The dispatch origin for this call must match `T::ForceOrigin`.
     * 
     * - `target`: the account whose identity the judgement is upon. This must be an account
     *   with a registered identity.
     * 
     * Emits `IdentityKilled` if successful.
     * 
     * ## Complexity
     * - `O(R + S + X)`
     *   - where `R` registrar-count (governance-bounded).
     *   - where `S` subs-count (hard- and deposit-bounded).
     *   - where `X` additional-field-count (deposit-bounded and code-bounded).
     */
    v1000: new CallType(
        'Identity.kill_identity',
        sts.struct({
            target: v1000.MultiAddress,
        })
    ),
}

export const addSub =  {
    name: 'Identity.add_sub',
    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    v1000: new CallType(
        'Identity.add_sub',
        sts.struct({
            sub: v1000.MultiAddress,
            data: v1000.Data,
        })
    ),
}

export const renameSub =  {
    name: 'Identity.rename_sub',
    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    v1000: new CallType(
        'Identity.rename_sub',
        sts.struct({
            sub: v1000.MultiAddress,
            data: v1000.Data,
        })
    ),
}

export const removeSub =  {
    name: 'Identity.remove_sub',
    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    v1000: new CallType(
        'Identity.remove_sub',
        sts.struct({
            sub: v1000.MultiAddress,
        })
    ),
}

export const quitSub =  {
    name: 'Identity.quit_sub',
    /**
     * Remove the sender as a sub-account.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender (*not* the original depositor).
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * super-identity.
     * 
     * NOTE: This should not normally be used, but is provided in the case that the non-
     * controller of an account is maliciously registered as a sub-account.
     */
    v1000: new CallType(
        'Identity.quit_sub',
        sts.unit()
    ),
}
