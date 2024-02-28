import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as matrixEnjinV603 from './matrixEnjinV603'
import * as v500 from './v500'
import * as v600 from './v600'
import * as v601 from './v601'
import * as v602 from './v602'
import * as matrixEnjinV1000 from './matrixEnjinV1000'
import * as matrixEnjinV1003 from './matrixEnjinV1003'
import * as v604 from './v604'
import * as matrixEnjinV1004 from './matrixEnjinV1004'
import * as v1000 from './v1000'
import * as v1003 from './v1003'
import * as v1004 from './v1004'

export class BalancesForceSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.force_set_balance') === 'd0f1dc28aeba8805f92a7e983d0fba2621912dc1665264dd9c38cd3c0c912737'
    }

    /**
     * Set the regular balance of a given account.
     * 
     * The dispatch origin for this call is `root`.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress, newFree: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as `transfer_allow_death`, except the origin must be root and the source account
     * may be specified.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
    }

    /**
     * Exactly as `transfer_allow_death`, except the origin must be root and the source account
     * may be specified.
     */
    get asMatrixEnjinV603(): {source: matrixEnjinV603.MultiAddress, dest: matrixEnjinV603.MultiAddress, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesForceUnreserveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.force_unreserve')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
    }

    /**
     * Unreserve some balance from a user by force.
     * 
     * Can only be called by ROOT.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
    }

    /**
     * Set the balances of a given account.
     * 
     * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
     * also alter the total issuance of the system (`TotalIssuance`) appropriately.
     * If the new free or reserved balance is below the existential deposit,
     * it will reset the account nonce (`frame_system::AccountNonce`).
     * 
     * The dispatch origin for this call is `root`.
     */
    get asV500(): {who: v500.MultiAddress, newFree: bigint, newReserved: bigint} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesSetBalanceDeprecatedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.set_balance_deprecated')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.set_balance_deprecated') === 'cd8eaf83a985e64a94900c5c58bbc2bbd20e03f5d571cf6065020f1a4281ff19'
    }

    /**
     * Set the regular balance of a given account; it also takes a reserved balance but this
     * must be the same as the account's current reserved balance.
     * 
     * The dispatch origin for this call is `root`.
     * 
     * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress, newFree: bigint, oldReserved: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
     * 
     * WARNING: DEPRECATED! Will be released in approximately 3 months.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
     * 
     * WARNING: DEPRECATED! Will be released in approximately 3 months.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.MultiAddress, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
    }

    /**
     * Transfer the entire transferable balance from the caller account.
     * 
     * NOTE: This function only attempts to transfer _transferable_ balances. This means that
     * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
     * transferred by this function. To ensure that this function results in a killed account,
     * you might need to prepare the account by removing any reference counters, storage
     * deposits, etc...
     * 
     * The dispatch origin of this call must be Signed.
     * 
     * - `dest`: The recipient of the transfer.
     * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
     *   of the funds the account has, causing the sender account to be killed (false), or
     *   transfer everything except at least the existential deposit, which will guarantee to
     *   keep the sender account alive (true).
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.MultiAddress, keepAlive: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferAllowDeathCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_allow_death')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.transfer_allow_death') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Transfer some liquid free balance to another account.
     * 
     * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
     * If the sender's account is below the existential deposit as a result
     * of the transfer, the account will be reaped.
     * 
     * The dispatch origin for this call must be `Signed` by the transactor.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.MultiAddress, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
     * kill the origin account.
     * 
     * 99% of the time you want [`transfer_allow_death`] instead.
     * 
     * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
     * kill the origin account.
     * 
     * 99% of the time you want [`transfer_allow_death`] instead.
     * 
     * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.MultiAddress, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BalancesUpgradeAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.upgrade_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Balances.upgrade_accounts') === 'e074d5a93414f189b47fbb5d94c57b62cfb9e63808a3c94665eeb2cfe53be8df'
    }

    /**
     * Upgrade a specified account.
     * 
     * - `origin`: Must be `Signed`.
     * - `who`: The account to be upgraded.
     * 
     * This will waive the transaction fee if at least all but 10% of the accounts needed to
     * be upgraded. (We let some not have to be upgraded just in order to allow for the
     * possibililty of churn).
     */
    get asMatrixEnjinV603(): {who: Uint8Array[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAcceptCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.accept_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Accept the curator role for a bounty.
     * A deposit will be reserved from curator and refund upon successful payout.
     * 
     * May only be called from the curator.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesApproveBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.approve_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Approve a bounty proposal. At a later time, the bounty will be funded and become active
     * and the original deposit will be returned.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesAwardBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.award_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.award_bounty') === 'cfa73dafdcbe89b3b4e24bfc41cf4f3b1fcd9527b052ecc6549b6ac07b965606'
    }

    /**
     * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
     * after a delay.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to award.
     * - `beneficiary`: The beneficiary account whom will receive the payout.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number, beneficiary: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesClaimBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.claim_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Claim the payout from an awarded bounty after payout delay.
     * 
     * The dispatch origin for this call must be the beneficiary of this bounty.
     * 
     * - `bounty_id`: Bounty ID to claim.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesCloseBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.close_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.close_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Cancel a proposed or active bounty. All the funds will be sent to treasury and
     * the curator deposit will be unreserved if possible.
     * 
     * Only `T::RejectOrigin` is able to cancel a bounty.
     * 
     * - `bounty_id`: Bounty ID to cancel.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesExtendBountyExpiryCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.extend_bounty_expiry')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.extend_bounty_expiry') === '710d6b76ffcee45bd9bffc1f299fa0b621450769559963379fa259c0f427f1bb'
    }

    /**
     * Extend the expiry time of an active bounty.
     * 
     * The dispatch origin for this call must be the curator of this bounty.
     * 
     * - `bounty_id`: Bounty ID to extend.
     * - `remark`: additional information.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number, remark: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeBountyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_bounty')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.propose_bounty') === '6a012b4069a991972d0d3268cb20dfba3163919c325c7ebbe980b2dc15f1b1f5'
    }

    /**
     * Propose a new bounty.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
     * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
     * or slashed when rejected.
     * 
     * - `curator`: The curator account whom will manage this bounty.
     * - `fee`: The curator fee.
     * - `value`: The total payment amount of this bounty, curator fee included.
     * - `description`: The description of this bounty.
     */
    get asMatrixEnjinV603(): {value: bigint, description: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesProposeCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.propose_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.propose_curator') === 'db115713847ce9db3eac62037c4aefcca595bcd9aa876776d8fba64491d881d3'
    }

    /**
     * Assign a curator to a funded bounty.
     * 
     * May only be called from `T::SpendOrigin`.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number, curator: matrixEnjinV603.MultiAddress, fee: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class BountiesUnassignCuratorCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Bounties.unassign_curator')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Bounties.unassign_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
    }

    /**
     * Unassign curator from a bounty.
     * 
     * This function can only be called by the `RejectOrigin` a signed origin.
     * 
     * If this function is called by the `RejectOrigin`, we assume that the curator is
     * malicious or inactive. As a result, we will slash the curator when possible.
     * 
     * If the origin is the curator, we take this as a sign they are unable to do their job and
     * they willingly give up. We could slash them, but for now we allow them to recover their
     * deposit and exit without issue. (We may want to change this if it is abused.)
     * 
     * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
     * anyone in the community to call out that a curator is not doing their due diligence, and
     * we should pick a new curator. In this case the curator should also be slashed.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {bountyId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsApproveClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.approve_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * It takes a list of transaction hashes and approves the claims for those transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of the Latest ETH block of Approver
     * * `batch_data`: This is a vector of transaction hashes.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And approve the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.approve_claims') === 'bfe7af9c4d6496e02e0b9c2f94b1a9e975d6fd5be09fcbf5a33329375e20c7cf'
    }

    /**
     * It takes a list of transaction hashes and approves the claims for those transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of the Latest ETH block of Approver
     * * `batch_data`: This is a vector of transaction hashes.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And approve the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {blockNumber: number, batchData: [Uint8Array, (number | undefined)][], chain: v500.Chain} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.claim') === 'c6d14dccc555713bdf44b4d352cbee9695186c0e43c78a2f17735b65bbc25426'
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asMatrixEnjinV603(): {dest: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.claim') === '46f6fbe643b51ee7e3a08e102493b6291f118e76145971a19fb90446b9af7251'
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV500(): {dest: Uint8Array, ethereumSignature: Uint8Array} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Claims.claim') === 'c6d14dccc555713bdf44b4d352cbee9695186c0e43c78a2f17735b65bbc25426'
    }

    /**
     * Make a claim to collect your EFI.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `dest` account.
     * 
     * Parameters:
     * - `dest`: The destination account to payout the claim.
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV604(): {dest: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsClaimFromEfinityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.claim_from_efinity')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Claim Enjin that was burned on the Efinity Parachain.
     * Optionally provide an alternate destination.
     * 
     * Caller must be the same as the account that burned the EFI.
     * 
     * Parameters:
     * - `origin`: The account that burned the EFI.
     * - `dest`: The destination account to payout the claim. If None, the caller is used.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.claim_from_efinity') === '668e91341797bf94bb751499e22a0ac0612a896d75f159be357f45d7cf102c1a'
    }

    /**
     * Claim Enjin that was burned on the Efinity Parachain.
     * Optionally provide an alternate destination.
     * 
     * Caller must be the same as the account that burned the EFI.
     * 
     * Parameters:
     * - `origin`: The account that burned the EFI.
     * - `dest`: The destination account to payout the claim. If None, the caller is used.
     */
    get asV500(): {dest: (Uint8Array | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMintClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.mint_claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mint a new claim to collect EFIs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of EFIs that will be claimed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.mint_claim') === 'bd93629e146aeda1b31bc7c1c194470feee46b9e4aed4d426ce152fe4c633fce'
    }

    /**
     * Mint a new claim to collect EFIs.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * Parameters:
     * - `who`: The Ethereum address allowed to collect this claim.
     * - `value`: The number of EFIs that will be claimed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asMatrixEnjinV603(): {who: Uint8Array, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMintEnjFromNativeEfiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.mint_enj_from_native_efi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     * 
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.mint_enj_from_native_efi') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
    }

    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     * 
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    get asV500(): {amount: bigint} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsMoveClaimCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.move_claim')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === '391b7a792248e7221ffbf77c01942251d2928a4e2b37c8103704237e0d5f69b6'
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get asMatrixEnjinV603(): {old: Uint8Array, new: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * Returns:
     * 
     * DispatchResultWithPostInfo
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === 'cd849edba2cd433399c9d865ac4e953cb579c5080c4dc0941d23eedd023327fa'
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * Returns:
     * 
     * DispatchResultWithPostInfo
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    get asV500(): {old: v500.Account, new: v500.Account} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Claims.move_claim') === '391b7a792248e7221ffbf77c01942251d2928a4e2b37c8103704237e0d5f69b6'
    }

    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get asV604(): {old: Uint8Array, new: Uint8Array} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsRejectClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.reject_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.reject_claims') === 'ba8c7423005b3c776672afeea4787184e35d7635ce8a807d29ad34a56bb3ec3a'
    }

    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get asMatrixEnjinV603(): {batchData: matrixEnjinV603.RejectData[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `reject_claims` is a function that allows the `Approver` to reject a batch of claims
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `batch_data`: A vector of transaction hashes.
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.reject_claims') === '601314ffd448dede3ecc3d0eef396fdd3e6a0ffa494fcc8c06361853d804a633'
    }

    /**
     * `reject_claims` is a function that allows the `Approver` to reject a batch of claims
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `batch_data`: A vector of transaction hashes.
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {batchData: [Uint8Array, (number | undefined)][]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Claims.reject_claims') === 'ba8c7423005b3c776672afeea4787184e35d7635ce8a807d29ad34a56bb3ec3a'
    }

    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get asV604(): {batchData: v604.RejectData[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsRequestClaimsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.request_claims')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.request_claims') === '8651d50612fce74f8dc56916ca34482bfbf847715d78b6a5abe3e656171b63d0'
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get asMatrixEnjinV603(): {blockNumber: number, batchData: matrixEnjinV603.Claim[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Claims.request_claims') === '4223f850613b41b0a74ade8d6509f976b14ee2e5f9aff9bd0f9c686581eceec7'
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    get asV500(): {blockNumber: number, batchData: v500.Claim[], chain: v500.Chain} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Claims.request_claims') === '8651d50612fce74f8dc56916ca34482bfbf847715d78b6a5abe3e656171b63d0'
    }

    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    get asV604(): {blockNumber: number, batchData: v604.Claim[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsSetDelayTimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.set_delay_time')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * This function sets a delay time for claims and requires a governance origin to execute.
     * 
     * Arguments:
     * 
     * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
     * certain action can be taken. In this case, it is being used to set the delay time for
     * claims in the governance pallet.
     * 
     * Returns:
     * 
     * either `Ok(())` if the delay time is successfully set, or an `Err` with a
     * `DispatchError` if the delay time is less than 24 hours.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.set_delay_time') === '9919843de279df806342c680fb041fef5bf53146b6b6c11827b8297e977076c8'
    }

    /**
     * This function sets a delay time for claims and requires a governance origin to execute.
     * 
     * Arguments:
     * 
     * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
     * certain action can be taken. In this case, it is being used to set the delay time for
     * claims in the governance pallet.
     * 
     * Returns:
     * 
     * either `Ok(())` if the delay time is successfully set, or an `Err` with a
     * `DispatchError` if the delay time is less than 24 hours.
     */
    get asMatrixEnjinV603(): {delayTime: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ClaimsSetExchangeRateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Claims.set_exchange_rate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `set_exchange_rate` is a function that can be called by ForceOrigin and
     * it sets the exchange rate
     * 
     * Parameters:
     * 
     * * `numerator`: u128,
     * * `denominator`: u128,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Claims.set_exchange_rate') === 'da214b06a2cf61183fd833c1552f319c06e2eddcf08a00a207b203ca34682446'
    }

    /**
     * `set_exchange_rate` is a function that can be called by ForceOrigin and
     * it sets the exchange rate
     * 
     * Parameters:
     * 
     * * `numerator`: u128,
     * * `denominator`: u128,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    get asMatrixEnjinV603(): {numerator: bigint, denominator: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingForceSetCurrentMaxCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.force_set_current_max_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current max candidates, must be within 0 and
     * [`MaxCandidates`](Config::MaxCandidates)
     * 
     * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
     * 
     * # Errors
     * 
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.force_set_current_max_candidates') === '310ae211a2124713dfde4d9d728ef98d0b24b616c3e5410d3181c5ef2e8ddade'
    }

    /**
     * Set the current max candidates, must be within 0 and
     * [`MaxCandidates`](Config::MaxCandidates)
     * 
     * Only [`ForceOrigin`](Config::ForceOrigin) can call this function.
     * 
     * # Errors
     * 
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    get asMatrixEnjinV603(): {maxCandidates: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingForceSetMinCollatorStakeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.force_set_min_collator_stake')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the minimum collator stake amount
     * 
     * [`T::ForceOrigin`](Config::ForceOrigin) call only
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.force_set_min_collator_stake') === '06eff2469bc17d7aebdedd42c10947459c1f0d4fae809ce8e19728d9c971339c'
    }

    /**
     * Set the minimum collator stake amount
     * 
     * [`T::ForceOrigin`](Config::ForceOrigin) call only
     */
    get asMatrixEnjinV603(): {minCollatorStake: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingJoinCandidatesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.join_candidates')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Join the list of candidates for collation.
     * 
     * # Errors
     * 
     * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
     * - [`Error::NominationExists`] if nomination already exists.
     * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
     * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.join_candidates') === 'f6b28a93d2ad8a91812f4261c4e03231091780b2314de37559af3b8f507099bc'
    }

    /**
     * Join the list of candidates for collation.
     * 
     * # Errors
     * 
     * - [`Error::BelowMinStakeAmount`] if `amount` is below the minimum required amount.
     * - [`Error::NominationExists`] if nomination already exists.
     * - [`Error::AccountIdNotRegistered`] if `AccountId` is not registered as a collator.
     * - [`Error::NoAssociatedValidatorId`] if no associated validator ID for `AccountId`.
     * - [`Error::TooManyCandidates`] if the number of candidates is already at the maximum.
     */
    get asMatrixEnjinV603(): {amount: bigint, rewardsCut: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingNominateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.nominate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Nominate a specific candidate to be selected for collation and block production.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationExists`] if the nomination already exists.
     * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
     *   minimum.
     * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.nominate') === '30f29e64cc7b4f99f08cb48567ffb4af918d57fe9455b7152205397218f72966'
    }

    /**
     * Nominate a specific candidate to be selected for collation and block production.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationExists`] if the nomination already exists.
     * - [`Error::BelowMinNominationStakeAmount`] if the nomination amount is below the
     *   minimum.
     * - [`Error::TooManyNominations`] if there are too many nominations for the candidate.
     */
    get asMatrixEnjinV603(): {collatorId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingRemoveNominationCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.remove_nomination')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a nomination previously registered for a specific collator candidate.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
     * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.remove_nomination') === '850c9ad9685e8b8f2587b1f9106e128c780b5d96e4560a40cf7d75d51543f181'
    }

    /**
     * Remove a nomination previously registered for a specific collator candidate.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if the candidate does not exist.
     * - [`Error::NominationDoesNotExist`] if the nomination does not exist.
     * - [`Error::TooManyCandidates`] if there are too many candidates in the set.
     */
    get asMatrixEnjinV603(): {collatorId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingSetInvulnerablesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.set_invulnerables')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force set the invulnerables.
     * 
     * [`ForceOrigin`](Config::ForceOrigin) call only.
     * 
     * # Errors
     * 
     * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.set_invulnerables') === 'f991968966792a125cac7c888dc7194239a215e624de7c15edbe7afe0e683c8a'
    }

    /**
     * Force set the invulnerables.
     * 
     * [`ForceOrigin`](Config::ForceOrigin) call only.
     * 
     * # Errors
     * 
     * - [`Error::TooManyInvulnerables`] if the number of invulnerables exceeds the maximum
     */
    get asMatrixEnjinV603(): {accounts: Uint8Array[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CollatorStakingUnbondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CollatorStaking.unbond')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Leave the collator set of this parachain.
     * 
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
     * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
     * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CollatorStaking.unbond') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Leave the collator set of this parachain.
     * 
     * In this case, if the calling account is already a collator, an exit
     * is registered so that this account is not selected for the next set of collators.
     * Otherwise, if the account is only a candidate, this candidate will be removed
     * and the nominations would be freed up.
     * 
     * # Errors
     * 
     * - [`Error::CandidateDoesNotExist`] if candidate does not exist.
     * - [`Error::CannotUnbondInvulnerable`] cannot unbond an invulnerable collator.
     * - [`Error::ExitInProgress`] if unbonding for collator already in progress.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolApproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.approve_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * ## Complexity
     *  - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CommunityPool.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     * and the original deposit will be returned.
     * 
     * May only be called from `T::ApproveOrigin`.
     * 
     * ## Complexity
     *  - O(1).
     */
    get asMatrixEnjinV603(): {proposalId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolProposeSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.propose_spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * ## Complexity
     * - O(1)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CommunityPool.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * ## Complexity
     * - O(1)
     */
    get asMatrixEnjinV603(): {value: bigint, beneficiary: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * ## Complexity
     * - O(1)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CommunityPool.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Reject a proposed spend. The original deposit will be slashed.
     * 
     * May only be called from `T::RejectOrigin`.
     * 
     * ## Complexity
     * - O(1)
     */
    get asMatrixEnjinV603(): {proposalId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolRemoveApprovalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.remove_approval')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * ## Complexity
     * - O(A) where `A` is the number of approvals
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CommunityPool.remove_approval') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     * Force a previously approved proposal to be removed from the approval queue.
     * The original deposit will no longer be returned.
     * 
     * May only be called from `T::RejectOrigin`.
     * - `proposal_id`: The index of a proposal
     * 
     * ## Complexity
     * - O(A) where `A` is the number of approvals
     * 
     * Errors:
     * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
     * i.e., the proposal has not been approved. This could also mean the proposal does not
     * exist altogether, thus there is no way it would have been approved in the first place.
     */
    get asMatrixEnjinV603(): {proposalId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CommunityPoolSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'CommunityPool.spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('CommunityPool.spend') === '18a5bcfd718b2b225ac128952f0fc34fff8371520e0ab5bac3a0ab20286b496d'
    }

    /**
     * Propose and approve a spend of treasury funds.
     * 
     * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
     * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
     * - `beneficiary`: The destination account for the transfer.
     * 
     * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
     * beneficiary.
     */
    get asMatrixEnjinV603(): {amount: bigint, beneficiary: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * ## Complexity
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * ## Complexity
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, index: number, proposalWeightBound: matrixEnjinV603.Weight, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Council.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV500(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * ## Complexity
     * O(P) where P is the number of max proposals
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * ## Complexity
     * O(P) where P is the number of max proposals
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.execute') === '42e02516da5b061d1088373ba15312fb75350b4c460c86553b77632c49a1bfff'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Council.execute') === '0528eb882b25dbc861bdb3dd23bf719192247ea0286b4ba762894271e9b24340'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV1000(): {proposal: matrixEnjinV1000.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Council.execute') === '8436778e072de5fd031e538ef23b88424ea15c5d94208a400f13f01159fbfb00'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV1003(): {proposal: matrixEnjinV1003.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::execute`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Council.execute') === 'e633d49269837529f129474119662469bb21f8c2c63f10dcf44f4e913f0dfc1b'
    }

    /**
     * See [`Pallet::execute`].
     */
    get asMatrixEnjinV1004(): {proposal: matrixEnjinV1004.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b1684a10f9b4cbd7534a667396ce6712277f00f197eb4426bdcfed491ee864b7'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV500(): {proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Council.execute') === 'd6901228f970a7ae2b377b38ce7fcbcc5ca8e570b8bb8a9074c730eb13c496e3'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV600(): {proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Council.execute') === 'b28b68a3dd66badc21cb53ab1687c9791a0b29bd28740e3160ea03bcf21db8de'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV601(): {proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Council.execute') === '42200a96ca0ad3184e9591f0d7f5892aff66f9f12198fcb806e1d22b72d800bc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV602(): {proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Council.execute') === '42e02516da5b061d1088373ba15312fb75350b4c460c86553b77632c49a1bfff'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV604(): {proposal: v604.Call, lengthBound: number} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Council.execute') === '81af7dea60315777f8bec229a835af081d1a048e0c634fb8cba2e99e2c2f47df'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV1000(): {proposal: v1000.Call, lengthBound: number} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Council.execute') === '9de811c39530414adcd3368d446d2e212bfa5ab901203473176cb3fa0bebfa75'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV1003(): {proposal: v1003.Call, lengthBound: number} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::execute`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Council.execute') === 'c07708a971f426afb0b353296223662e62d412b29f35431934376052ab430b96'
    }

    /**
     * See [`Pallet::execute`].
     */
    get asV1004(): {proposal: v1004.Call, lengthBound: number} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.propose') === 'ad8e807bb31ab0d0a1cc9796c09abc6d953cde11f68353038cb230910f45f5a9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV603(): {threshold: number, proposal: matrixEnjinV603.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Council.propose') === '23bce148208de1a3e941cab0a9183111169beffd2c4b17fa55c77063a17ed2db'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV1000(): {threshold: number, proposal: matrixEnjinV1000.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Council.propose') === '0318441ab0a9bd4ab2b6e923b6c88985852689b516a4d2084ccf14caa5f03be6'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV1003(): {threshold: number, proposal: matrixEnjinV1003.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::propose`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Council.propose') === '2f617d0b3991e38ad03abe45e87522e45b8b0c331c88237b7cd713911c1a6759'
    }

    /**
     * See [`Pallet::propose`].
     */
    get asMatrixEnjinV1004(): {threshold: number, proposal: matrixEnjinV1004.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Council.propose') === '0421aa3212da1f969a95c3e263147e221be170c3d71c5640351252a233116229'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV500(): {threshold: number, proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Council.propose') === '01c6baaf53b5331d0c41f0159db307f3aee5c6491ecfe4c33f046483b348303b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV600(): {threshold: number, proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Council.propose') === '4b61433e884dffa8d3067b5a199d91ba1d8ca839a709c084cf267410834076a1'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV601(): {threshold: number, proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Council.propose') === '76cf450a5e2cc8f4a9da4604e748109d1a44da950b89749a9b498ecc46913f7c'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV602(): {threshold: number, proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Council.propose') === 'ad8e807bb31ab0d0a1cc9796c09abc6d953cde11f68353038cb230910f45f5a9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV604(): {threshold: number, proposal: v604.Call, lengthBound: number} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Council.propose') === 'c9def943b81a72581eaa55a42fa97a30131ff314a5cc2458ad46de9664a43780'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV1000(): {threshold: number, proposal: v1000.Call, lengthBound: number} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Council.propose') === '22dc7bee22aa4eda8ff75dbd66f5ec6597086c5275c7dae9b99b98cfce675db9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV1003(): {threshold: number, proposal: v1003.Call, lengthBound: number} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::propose`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Council.propose') === '3e0ae74604312666aca6316d80304ce22a129d81804542a6568fbc5ad75e7d42'
    }

    /**
     * See [`Pallet::propose`].
     */
    get asV1004(): {threshold: number, proposal: v1004.Call, lengthBound: number} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * The dispatch of this call must be `SetMembersOrigin`.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * ## Complexity:
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * The dispatch of this call must be `SetMembersOrigin`.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * ## Complexity:
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     */
    get asMatrixEnjinV603(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class CouncilVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Council.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * ## Complexity
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Council.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * ## Complexity
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     */
    get asMatrixEnjinV603(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyBlacklistCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.blacklist')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.blacklist') === '8d8922c0775adfb1df719211ab4fc6fb40b6cc8864038bcb1b544d9cf039b30a'
    }

    /**
     * Permanently place a proposal into the blacklist. This prevents it from ever being
     * proposed again.
     * 
     * If called on a queued public or external proposal, then this will result in it being
     * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
     * then it will be cancelled.
     * 
     * The dispatch origin of this call must be `BlacklistOrigin`.
     * 
     * - `proposal_hash`: The proposal hash to blacklist permanently.
     * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
     * cancelled.
     * 
     * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
     *   reasonable value).
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, maybeRefIndex: (number | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.cancel_proposal') === '0e50c7564a4a7f4e6a09a0abcc8022f4445c064144d2318ed086e6080bee800d'
    }

    /**
     * Remove a proposal.
     * 
     * The dispatch origin of this call must be `CancelProposalOrigin`.
     * 
     * - `prop_index`: The index of the proposal to cancel.
     * 
     * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
     */
    get asMatrixEnjinV603(): {propIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyCancelReferendumCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.cancel_referendum')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.cancel_referendum') === 'efe4ecff834678ca8b73ea6e2f38e514997eb402e82da2ce4cf036008844a857'
    }

    /**
     * Remove a referendum.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * - `ref_index`: The index of the referendum to cancel.
     * 
     * # Weight: `O(1)`.
     */
    get asMatrixEnjinV603(): {refIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyClearPublicProposalsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.clear_public_proposals')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Clears all public proposals.
     * 
     * The dispatch origin of this call must be _Root_.
     * 
     * Weight: `O(1)`.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyDelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.delegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.delegate') === '789db36a1c43e1ffdad52288f8573a492f529890632f51821e7bd1d74ba6cffc'
    }

    /**
     * Delegate the voting power (with some given conviction) of the sending account.
     * 
     * The balance delegated is locked for as long as it's delegated, and thereafter for the
     * time appropriate for the conviction's lock period.
     * 
     * The dispatch origin of this call must be _Signed_, and the signing account must either:
     *   - be delegating already; or
     *   - have no voting activity (if there is, then it will need to be removed/consolidated
     *     through `reap_vote` or `unvote`).
     * 
     * - `to`: The account whose voting the `target` account's voting power will follow.
     * - `conviction`: The conviction that will be attached to the delegated votes. When the
     *   account is undelegated, the funds will be locked for the corresponding period.
     * - `balance`: The amount of the account's balance to be used in delegating. This must not
     *   be more than the account's current balance.
     * 
     * Emits `Delegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asMatrixEnjinV603(): {to: matrixEnjinV603.MultiAddress, conviction: matrixEnjinV603.Conviction, balance: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyEmergencyCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.emergency_cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.emergency_cancel') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
    }

    /**
     * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
     * referendum.
     * 
     * The dispatch origin of this call must be `CancellationOrigin`.
     * 
     * -`ref_index`: The index of the referendum to cancel.
     * 
     * Weight: `O(1)`.
     */
    get asMatrixEnjinV603(): {refIndex: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.external_propose') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a referendum to be tabled once it is legal to schedule an external
     * referendum.
     * 
     * The dispatch origin of this call must be `ExternalOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Bounded} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeDefaultCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_default')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_default') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
     * schedule an external referendum.
     * 
     * The dispatch of this call must be `ExternalDefaultOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Bounded} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyExternalProposeMajorityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.external_propose_majority')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.external_propose_majority') === 'e44fb402f80afe0e08cb6de5a4ed457a1a66e080379319fd281acd81eaf457ac'
    }

    /**
     * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
     * an external referendum.
     * 
     * The dispatch of this call must be `ExternalMajorityOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal.
     * 
     * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
     * pre-scheduled `external_propose` call.
     * 
     * Weight: `O(1)`
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Bounded} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyFastTrackCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.fast_track')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.fast_track') === '27cb200e922e485b41e3150b3d7bf5e8624346f6ff1d78601373ba3d80689c89'
    }

    /**
     * Schedule the currently externally-proposed majority-carries referendum to be tabled
     * immediately. If there is no externally-proposed referendum currently, or if there is one
     * but it is not a majority-carries referendum then it fails.
     * 
     * The dispatch of this call must be `FastTrackOrigin`.
     * 
     * - `proposal_hash`: The hash of the current external proposal.
     * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
     * 	Must be always greater than zero.
     * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
     * - `delay`: The number of block after voting has ended in approval and this should be
     *   enacted. This doesn't have a minimum amount.
     * 
     * Emits `Started`.
     * 
     * Weight: `O(1)`
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, votingPeriod: number, delay: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.propose') === 'db924825c9fd40cb04a839b510db55dcdd425c7b06116ccd22d4834d1201e8db'
    }

    /**
     * Propose a sensitive action to be taken.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender must
     * have funds to cover the deposit.
     * 
     * - `proposal_hash`: The hash of the proposal preimage.
     * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
     * 
     * Emits `Proposed`.
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Bounded, value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveOtherVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_other_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.remove_other_vote') === '43d317508cc3ba04dcadb411eb6499f25532d64ab5a169b27410116c72f40a26'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If the `target` is equal to the signer, then this function is exactly equivalent to
     * `remove_vote`. If not equal to the signer, then the vote must have expired,
     * either because the referendum was cancelled, because the voter lost the referendum or
     * because the conviction period is over.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account of the vote to be removed; this account must have voted for
     *   referendum `index`.
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asMatrixEnjinV603(): {target: matrixEnjinV603.MultiAddress, index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyRemoveVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.remove_vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.remove_vote') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Remove a vote for a referendum.
     * 
     * If:
     * - the referendum was cancelled, or
     * - the referendum is ongoing, or
     * - the referendum has ended such that
     *   - the vote of the account was in opposition to the result; or
     *   - there was no conviction to the account's vote; or
     *   - the account made a split vote
     * ...then the vote is removed cleanly and a following call to `unlock` may result in more
     * funds being available.
     * 
     * If, however, the referendum has ended and:
     * - it finished corresponding to the vote of the account, and
     * - the account made a standard vote with conviction, and
     * - the lock period of the conviction is not over
     * ...then the lock will be aggregated into the overall account's lock, which may involve
     * *overlocking* (where the two locks are combined into a single lock that is the maximum
     * of both the amount locked and the time is it locked for).
     * 
     * The dispatch origin of this call must be _Signed_, and the signer must have a vote
     * registered for referendum `index`.
     * 
     * - `index`: The index of referendum of the vote to be removed.
     * 
     * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
     *   Weight is calculated for the maximum number of vote.
     */
    get asMatrixEnjinV603(): {index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySecondCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.second')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.second') === '7ac80a800d6686f21181e7b5b45c8949dc5b807bc6ec111188c7c6850a21b898'
    }

    /**
     * Signals agreement with a particular proposal.
     * 
     * The dispatch origin of this call must be _Signed_ and the sender
     * must have funds to cover the deposit, equal to the original deposit.
     * 
     * - `proposal`: The index of the proposal to second.
     */
    get asMatrixEnjinV603(): {proposal: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracySetMetadataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.set_metadata')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set or clear a metadata of a proposal or a referendum.
     * 
     * Parameters:
     * - `origin`: Must correspond to the `MetadataOwner`.
     *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
     *       threshold.
     *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
     *       threshold.
     *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
     *       threshold.
     *     - `Signed` by a creator for a public proposal.
     *     - `Signed` to clear a metadata for a finished referendum.
     *     - `Root` to set a metadata for an ongoing referendum.
     * - `owner`: an identifier of a metadata owner.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.set_metadata') === '8a33eb55343342fba9c677650a4010c3766a354183990db37b268b1fef0c72fe'
    }

    /**
     * Set or clear a metadata of a proposal or a referendum.
     * 
     * Parameters:
     * - `origin`: Must correspond to the `MetadataOwner`.
     *     - `ExternalOrigin` for an external proposal with the `SuperMajorityApprove`
     *       threshold.
     *     - `ExternalDefaultOrigin` for an external proposal with the `SuperMajorityAgainst`
     *       threshold.
     *     - `ExternalMajorityOrigin` for an external proposal with the `SimpleMajority`
     *       threshold.
     *     - `Signed` by a creator for a public proposal.
     *     - `Signed` to clear a metadata for a finished referendum.
     *     - `Root` to set a metadata for an ongoing referendum.
     * - `owner`: an identifier of a metadata owner.
     * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
     */
    get asMatrixEnjinV603(): {owner: matrixEnjinV603.MetadataOwner, maybeHash: (Uint8Array | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUndelegateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.undelegate')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.undelegate') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Undelegate the voting power of the sending account.
     * 
     * Tokens may be unlocked following once an amount of time consistent with the lock period
     * of the conviction with which the delegation was issued.
     * 
     * The dispatch origin of this call must be _Signed_ and the signing account must be
     * currently delegating.
     * 
     * Emits `Undelegated`.
     * 
     * Weight: `O(R)` where R is the number of referendums the voter delegating to has
     *   voted on. Weight is charged as if maximum votes.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyUnlockCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.unlock')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.unlock') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

    /**
     * Unlock tokens that have an expired lock.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `target`: The account to remove the lock on.
     * 
     * Weight: `O(R)` with R number of vote of target.
     */
    get asMatrixEnjinV603(): {target: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVetoExternalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.veto_external')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.veto_external') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Veto and blacklist the external proposal hash.
     * 
     * The dispatch origin of this call must be `VetoOrigin`.
     * 
     * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
     * 
     * Emits `Vetoed`.
     * 
     * Weight: `O(V + log(V))` where V is number of `existing vetoers`
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DemocracyVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Democracy.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
    }

    /**
     * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
     * otherwise it is a vote to keep the status quo.
     * 
     * The dispatch origin of this call must be _Signed_.
     * 
     * - `ref_index`: The index of the referendum to vote for.
     * - `vote`: The vote configuration.
     */
    get asMatrixEnjinV603(): {refIndex: number, vote: matrixEnjinV603.AccountVote} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class DmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'DmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Service a single overweight message.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('DmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
    }

    /**
     * Service a single overweight message.
     */
    get asMatrixEnjinV603(): {index: bigint, weightLimit: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityUtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityUtility.batch')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === '222373d64cf1eada55d5fb98c3cdc449919dd4025d049d20c587ed0764b4380c'
    }

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
    get asV500(): {calls: v500.Call[], continueOnFailure: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

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
    get isV600(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === '99e2a6c6410b697d79064ade2c3db43ff848c3fd40cb46b5028b79e34ce8e894'
    }

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
    get asV600(): {calls: v600.Call[], continueOnFailure: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

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
    get isV601(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'd95d104b78102649e6953ef939c20300f8c36c6708491ef89af765114cef5f02'
    }

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
    get asV601(): {calls: v601.Call[], continueOnFailure: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

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
    get isV602(): boolean {
        return this._chain.getCallHash('EfinityUtility.batch') === 'dd2a066a0172c7756e255e30b3d0481350b34530bd3695fa8f8f50cd672dc33a'
    }

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
    get asV602(): {calls: v602.Call[], continueOnFailure: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmForceSetMinimumWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.force_set_minimum_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.force_set_minimum_weight') === '4c92aee9cd2c92a06e50e7ae691000178c9980b7f9c4e035739e193479d9f615'
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get asV500(): {xcmCall: v500.XcmOperation, xcmWeightFeeMisc: v500.MinimumWeightFeePair} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferAssetToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_asset_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_asset_to_parachain') === '6e0995af8a1271406f286250994b7e96ef4e950ec17addde0aa13d7dcf06db7e'
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get asV500(): {paraId: v500.ParachainId, beneficiary: v500.Account, currencyId: v500.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferAssetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_asset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_asset_with_fee') === '253afe02afbaf582b39ed2b492eb0493066e690147b56578b4e8b20fb470b444'
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asV500(): {assetPair: v500.CurrencyIdAmountPair, feePair: v500.CurrencyIdAmountPair, paraId: v500.ParachainId, beneficiary: v500.Account, destWeight: (bigint | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class EfinityXcmTransferToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'EfinityXcm.transfer_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isV500(): boolean {
        return this._chain.getCallHash('EfinityXcm.transfer_to_parachain') === 'b78bfbeb395c8dfe84788045085ed4230266e12ad40559a5ed1fdf518db02770'
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asV500(): {paraId: v500.ParachainId, beneficiary: v500.Account, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class ExtrinsicPausePauseExtrinsicCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ExtrinsicPause.pause_extrinsic')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'c5ca046c3e628825c4f962ecee1fb8f169fc9ec1170abc23027691646568f362'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asMatrixEnjinV603(): {call: matrixEnjinV603.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'dfdc85c4bce39de3c59558df6914b9e6c165ee6a0c4fe5fcfaf34dedd3b3cc02'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asMatrixEnjinV1000(): {call: matrixEnjinV1000.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'd6954ca3e8c613f063c1cc4cb8a1427954836cf9b43c22a2085ff35970df2b19'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asMatrixEnjinV1003(): {call: matrixEnjinV1003.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::pause_extrinsic`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '03e53d1a9f9ddc70c3b8f71998353a27dd851bbb6d06ace5fec64065ffb8c574'
    }

    /**
     * See [`Pallet::pause_extrinsic`].
     */
    get asMatrixEnjinV1004(): {call: matrixEnjinV1004.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '0af39b1686ce411113718180a54f1772da531d4bc731f731597729aba3694beb'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV500(): {call: v500.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '4897a0ef7b113f6bf936cbfcbee3cb6fe6f782bf9a5a5c186cc0b506d4536dec'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV600(): {call: v600.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '454008567728b06c3d19b326c93ff0969da986eb0d8d3c79b78760b59eb0eea2'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV601(): {call: v601.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'e639aa3f54af8bd93376fd3ad9cd38feab86a31aded929c4e4539f869dc7b524'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV602(): {call: v602.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'c5ca046c3e628825c4f962ecee1fb8f169fc9ec1170abc23027691646568f362'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV604(): {call: v604.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '158bf7a51055dda6458210cc7ed4a4ea1b22e133fdd6df57d9b0e224a3eef99e'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV1000(): {call: v1000.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === 'cad7f1ab9361829a1386efdeadaae5841bf7d7ea89678e7970ba3d2647bc7982'
    }

    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    get asV1003(): {call: v1003.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::pause_extrinsic`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.pause_extrinsic') === '398c2ea7cc12d6460dc891c1bf11f38b10b5555c141942d736df7ed53b86ae27'
    }

    /**
     * See [`Pallet::pause_extrinsic`].
     */
    get asV1004(): {call: v1004.Call, pauseOnlyExtrinsic: boolean} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class ExtrinsicPauseResumeExtrinsicCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ExtrinsicPause.resume_extrinsic')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '1d150745e6ed925df16c2c548e329b7a5e8069f57fe385c83b6f156a72d9ab69'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asMatrixEnjinV603(): {call: matrixEnjinV603.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'd2e9cff4a1017eda50c75e870e039fac02110ee75edcc7c36272bba0f9e53572'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asMatrixEnjinV1000(): {call: matrixEnjinV1000.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '2868d2f123fb7eb424d929b21b8898623752bf6cb09d15597ed65811eea81c36'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asMatrixEnjinV1003(): {call: matrixEnjinV1003.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::resume_extrinsic`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '8271ed8e0318150f8d4bc526411689b1cd4e0c1f435b2fbe3a671d3dec09d9b8'
    }

    /**
     * See [`Pallet::resume_extrinsic`].
     */
    get asMatrixEnjinV1004(): {call: matrixEnjinV1004.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '11ff68736a7d4fd2445620971a06eee53707f8e93687aba6c9324b8abe3cae67'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV500(): {call: v500.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '67dffb9d3fe304fa8cc899616105f644f4bfaca90ae1e92390030903a6c3c896'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV600(): {call: v600.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '11a49786b673dfab243c2c0bd817f8814a9c5f6ea21d734469cedd237d71807c'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV601(): {call: v601.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '56baa24c62d8a1ba4fb71f41a348b0e33e0806f0cb9ec4ce7db3293338e8299c'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV602(): {call: v602.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '1d150745e6ed925df16c2c548e329b7a5e8069f57fe385c83b6f156a72d9ab69'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV604(): {call: v604.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === '346310c2b10fb2778dd58710d751500386e7662784caeb109b79ceb914ac4a23'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV1000(): {call: v1000.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'aa602da4153efcd3a7c3d5e73661a0cbd102b4215330589223daa9928e94e02b'
    }

    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    get asV1003(): {call: v1003.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::resume_extrinsic`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('ExtrinsicPause.resume_extrinsic') === 'a09d54a9ee6c2deeb4558f900b18eb1afbf3e03a7210feeff722792386f5b56e'
    }

    /**
     * See [`Pallet::resume_extrinsic`].
     */
    get asV1004(): {call: v1004.Call, resumeOnlyExtrinsic: boolean} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksAddAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.add_account')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.add_account') === '6b49a9c6d7cc4fec142fc02f8f252f4fa0bd06e832d1e877b43f77b3d8ef27b3'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userId: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksBatchAddAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.batch_add_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Similar to add_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_add_account') === 'e548a21f55c9e5bef7a56196dab640774174a939562687e1e6e32b377168ebb5'
    }

    /**
     * Similar to add_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
     */
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userIds: matrixEnjinV603.MultiAddress[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksBatchRemoveAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.batch_remove_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Similar to remove_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.batch_remove_account') === 'e548a21f55c9e5bef7a56196dab640774174a939562687e1e6e32b377168ebb5'
    }

    /**
     * Similar to remove_account but takes a list of
     * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
     * ### Errors
     * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
     * - [`Error::NoPermission`] if `origin` does not have permission to add an account
     * - [`Error::AccountNotFound`] if account at `user_id` does not exist
     */
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userIds: matrixEnjinV603.MultiAddress[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksCreateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.create_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '8a1d177d2d41d4dc5f95b0ef3afadb00553286606fe1f54f6189ca2f15550b1c'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asMatrixEnjinV603(): {descriptor: matrixEnjinV603.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '5cefe5fffba120b9986d54e5643f1824a36f86540473854c6f573344866921f5'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asMatrixEnjinV1000(): {descriptor: matrixEnjinV1000.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'f453906e5ec08546019022707066080f5eabb1da54f0e905dec948830c860350'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asMatrixEnjinV1003(): {descriptor: matrixEnjinV1003.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_fuel_tank`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '08f1a8d7f543e3d0992f9ef6434cad97a971e56ac3892042142b3b9377f87829'
    }

    /**
     * See [`Pallet::create_fuel_tank`].
     */
    get asMatrixEnjinV1004(): {descriptor: matrixEnjinV1004.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '7ec8cf7f4479591fa8d8df81a83204729676ec97ce9d3fdd6908a443056cd0dc'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV500(): {descriptor: v500.FuelTankDescriptor} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'da330f1f88996f57d435c67b491fb932b02ecfe8034bc55c42af256dc1e582ae'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV600(): {descriptor: v600.FuelTankDescriptor} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '3e3ac599e23537bde5e89f9fe09e243762fba2eb4fbf6f4407875f25399ad188'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV601(): {descriptor: v601.FuelTankDescriptor} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === 'd52b14b52799457965a0bb0bc8cce79ae30c8cb95cc1fac2a41ea56b1d169147'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV602(): {descriptor: v602.FuelTankDescriptor} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV604(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '8a1d177d2d41d4dc5f95b0ef3afadb00553286606fe1f54f6189ca2f15550b1c'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV604(): {descriptor: v604.FuelTankDescriptor} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '9526721cb6cd5baafefaba7937946c6949b3af2586bf673648d0352aa7028ca3'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV1000(): {descriptor: v1000.FuelTankDescriptor} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '5f291f1a298f05cbb0a9c8cef5013f5784b69ae954ebb7c05e2db721799e8679'
    }

    /**
     * Creates a fuel tank, given a descriptor
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
     */
    get asV1003(): {descriptor: v1003.FuelTankDescriptor} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_fuel_tank`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.create_fuel_tank') === '205166fbe664839d9c0fadd6590d5e9e1ed1fc1dda4368e69ef9df58848e897c'
    }

    /**
     * See [`Pallet::create_fuel_tank`].
     */
    get asV1004(): {descriptor: v1004.FuelTankDescriptor} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDestroyFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.destroy_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.destroy_fuel_tank') === '2b9b490c0171de9f8a3f945d1457a9a08933564a71b77cb634db2aa898e91e63'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDispatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.dispatch')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'b677705c3bf454beffbb1db35ce5a5c1eedf672d0e2a8fb60318fc872fdf9185'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, ruleSetId: number, call: matrixEnjinV603.Call, settings: (matrixEnjinV603.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '6a2e47ee4408602a7d3c9f5c665771e29bb8d4a3953bd40d5c7ab596b076f5a0'
    }

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
    get asMatrixEnjinV1000(): {tankId: matrixEnjinV1000.MultiAddress, ruleSetId: number, call: matrixEnjinV1000.Call, settings: (matrixEnjinV1000.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'b5bd8d4fd9f72fa240f91055db86aca70c41eba635451dcda30eb392907442b5'
    }

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
    get asMatrixEnjinV1003(): {tankId: matrixEnjinV1003.MultiAddress, ruleSetId: number, call: matrixEnjinV1003.Call, settings: (matrixEnjinV1003.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'bda3d12ce1af39ebdec399b391d8d6792f12a4cb341275ba255608b8e95bfc54'
    }

    /**
     * See [`Pallet::dispatch`].
     */
    get asMatrixEnjinV1004(): {tankId: matrixEnjinV1004.MultiAddress, ruleSetId: number, call: matrixEnjinV1004.Call, settings: (matrixEnjinV1004.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

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
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'dcc80be694c3cf26e67023f951da7862390eda86a944795bd4b5fa9fa37f1a1b'
    }

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
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, call: v500.Call, paysRemainingFee: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

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
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'cfaa28808a6c787caf418b03415b24d3d9b7c7ffdfa48439a15bc9cb3b936b67'
    }

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
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, call: v600.Call, paysRemainingFee: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

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
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '33c3dea7e41ee95ee38dc5f9da10e787ce4fe8eafd493e2244c878e62bf696a2'
    }

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
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, call: v601.Call, paysRemainingFee: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

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
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '9ec0b4d6b3bc8cf6c2a46cb688669119f38ecbdb89add4439b95091fc49c8055'
    }

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
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, call: v602.Call, paysRemainingFee: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

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
    get isV604(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'b677705c3bf454beffbb1db35ce5a5c1eedf672d0e2a8fb60318fc872fdf9185'
    }

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
    get asV604(): {tankId: v604.MultiAddress, ruleSetId: number, call: v604.Call, settings: (v604.DispatchSettings | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === 'b0e66db3718b1ecbddf8075f71ea98c1db327ac5043a7e424081c03601329eb7'
    }

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
    get asV1000(): {tankId: v1000.MultiAddress, ruleSetId: number, call: v1000.Call, settings: (v1000.DispatchSettings | undefined)} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '22f49eeb50716920f03da0320aa286d7f67c1183c87e93f41e8e60d410981eb8'
    }

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
    get asV1003(): {tankId: v1003.MultiAddress, ruleSetId: number, call: v1003.Call, settings: (v1003.DispatchSettings | undefined)} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch') === '6d54fbbc2d8f5e7a660190bf7bd71a14093dc4e3d21847cabffba87994033f4f'
    }

    /**
     * See [`Pallet::dispatch`].
     */
    get asV1004(): {tankId: v1004.MultiAddress, ruleSetId: number, call: v1004.Call, settings: (v1004.DispatchSettings | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksDispatchAndTouchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.dispatch_and_touch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'b677705c3bf454beffbb1db35ce5a5c1eedf672d0e2a8fb60318fc872fdf9185'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, ruleSetId: number, call: matrixEnjinV603.Call, settings: (matrixEnjinV603.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '6a2e47ee4408602a7d3c9f5c665771e29bb8d4a3953bd40d5c7ab596b076f5a0'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asMatrixEnjinV1000(): {tankId: matrixEnjinV1000.MultiAddress, ruleSetId: number, call: matrixEnjinV1000.Call, settings: (matrixEnjinV1000.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'b5bd8d4fd9f72fa240f91055db86aca70c41eba635451dcda30eb392907442b5'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asMatrixEnjinV1003(): {tankId: matrixEnjinV1003.MultiAddress, ruleSetId: number, call: matrixEnjinV1003.Call, settings: (matrixEnjinV1003.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'bda3d12ce1af39ebdec399b391d8d6792f12a4cb341275ba255608b8e95bfc54'
    }

    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    get asMatrixEnjinV1004(): {tankId: matrixEnjinV1004.MultiAddress, ruleSetId: number, call: matrixEnjinV1004.Call, settings: (matrixEnjinV1004.DispatchSettings | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'dcc80be694c3cf26e67023f951da7862390eda86a944795bd4b5fa9fa37f1a1b'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, call: v500.Call, paysRemainingFee: boolean} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'cfaa28808a6c787caf418b03415b24d3d9b7c7ffdfa48439a15bc9cb3b936b67'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, call: v600.Call, paysRemainingFee: boolean} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '33c3dea7e41ee95ee38dc5f9da10e787ce4fe8eafd493e2244c878e62bf696a2'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, call: v601.Call, paysRemainingFee: boolean} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '9ec0b4d6b3bc8cf6c2a46cb688669119f38ecbdb89add4439b95091fc49c8055'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, call: v602.Call, paysRemainingFee: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'b677705c3bf454beffbb1db35ce5a5c1eedf672d0e2a8fb60318fc872fdf9185'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV604(): {tankId: v604.MultiAddress, ruleSetId: number, call: v604.Call, settings: (v604.DispatchSettings | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === 'b0e66db3718b1ecbddf8075f71ea98c1db327ac5043a7e424081c03601329eb7'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV1000(): {tankId: v1000.MultiAddress, ruleSetId: number, call: v1000.Call, settings: (v1000.DispatchSettings | undefined)} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '22f49eeb50716920f03da0320aa286d7f67c1183c87e93f41e8e60d410981eb8'
    }

    /**
     * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
     * exist and is allowed by the fuel tank's `user_account_management` settings.
     * 
     * # Errors
     * 
     * Returns the same errors as [dispatch](Self::dispatch) and
     * [add_account](Self::add_account)
     */
    get asV1003(): {tankId: v1003.MultiAddress, ruleSetId: number, call: v1003.Call, settings: (v1003.DispatchSettings | undefined)} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.dispatch_and_touch') === '6d54fbbc2d8f5e7a660190bf7bd71a14093dc4e3d21847cabffba87994033f4f'
    }

    /**
     * See [`Pallet::dispatch_and_touch`].
     */
    get asV1004(): {tankId: v1004.MultiAddress, ruleSetId: number, call: v1004.Call, settings: (v1004.DispatchSettings | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksForceBatchAddAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.force_batch_add_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the account storage for give tank_id and account
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.force_batch_add_account') === '273995af5a1f02d81e273bca153f6c53d34f81cabdebda6175f6bd071a905efe'
    }

    /**
     * Sets the account storage for give tank_id and account
     */
    get asMatrixEnjinV603(): {owner: matrixEnjinV603.MultiAddress, tankId: matrixEnjinV603.MultiAddress, userIds: matrixEnjinV603.MultiAddress[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksForceCreateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.force_create_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '9fba66045ffe9823498216d94cdbc8a05b718af3834bbcff41bb4664bc9ca23e'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asMatrixEnjinV603(): {owner: matrixEnjinV603.MultiAddress, descriptor: matrixEnjinV603.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '65b2820862588bf26febbe661faafddc4727b819473e3749928112987ca8e04c'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asMatrixEnjinV1000(): {owner: matrixEnjinV1000.MultiAddress, descriptor: matrixEnjinV1000.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '2cd125920335ca612acd514a7052f6fe65e2b6123a2f4abeb4a8bdd647d6f58c'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asMatrixEnjinV1003(): {owner: matrixEnjinV1003.MultiAddress, descriptor: matrixEnjinV1003.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '4620b872ec4e104461df31ac78376fcb68690f5248d3a0f50ded12cef5ef86df'
    }

    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    get asMatrixEnjinV1004(): {owner: matrixEnjinV1004.MultiAddress, descriptor: matrixEnjinV1004.FuelTankDescriptor} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isV604(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '9fba66045ffe9823498216d94cdbc8a05b718af3834bbcff41bb4664bc9ca23e'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asV604(): {owner: v604.MultiAddress, descriptor: v604.FuelTankDescriptor} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '33d0ab48b2ea4db1b6d1798549454562768433203f7f8b4a1feb31f72545acb9'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asV1000(): {owner: v1000.MultiAddress, descriptor: v1000.FuelTankDescriptor} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '73ed62dc306ad76a32cb55eb2b9ef95956a7858180da2f2e7e1f9e908d0e501f'
    }

    /**
     * Force creates a fuel tank
     * 
     * # Errors
     * 
     * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
     */
    get asV1003(): {owner: v1003.MultiAddress, descriptor: v1003.FuelTankDescriptor} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.force_create_fuel_tank') === '23f0f9234af0cb0d82fbc47e2b72a11e0e394f0366f827d1cebbf9883dbf8ee3'
    }

    /**
     * See [`Pallet::force_create_fuel_tank`].
     */
    get asV1004(): {owner: v1004.MultiAddress, descriptor: v1004.FuelTankDescriptor} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksForceSetConsumptionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.force_set_consumption')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.force_set_consumption') === '465df72f8d1b6dcfdd1b6a3bc9673a492b029ff7adea01f798ff0b1ae3e8dca4'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userId: (matrixEnjinV603.MultiAddress | undefined), ruleSetId: number, consumption: matrixEnjinV603.Consumption} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksInsertRuleSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.insert_rule_set')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'df466f1c352194eb6e359ca229653c38d60917ad9c95b61fd8a70f0b1a53b65e'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, ruleSetId: number, rules: matrixEnjinV603.DispatchRuleDescriptor[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'e070f883d392ab1ce0c1d354817e6119ec0353f4c49435f6481055a1a1155fb6'
    }

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
    get asMatrixEnjinV1000(): {tankId: matrixEnjinV1000.MultiAddress, ruleSetId: number, rules: matrixEnjinV1000.DispatchRuleDescriptor[]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '26b1fc4d62a36de9033bc84a5073e53cb066a1b1f1c06d4cabdf36fb1bb8d850'
    }

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
    get asMatrixEnjinV1003(): {tankId: matrixEnjinV1003.MultiAddress, ruleSetId: number, rules: matrixEnjinV1003.DispatchRuleDescriptor[]} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::insert_rule_set`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '615ba6c0ecd1c0742ff52b3c2e01aa8a7b635c7385df82d4ffddcc75d7b6517d'
    }

    /**
     * See [`Pallet::insert_rule_set`].
     */
    get asMatrixEnjinV1004(): {tankId: matrixEnjinV1004.MultiAddress, ruleSetId: number, rules: matrixEnjinV1004.DispatchRuleDescriptor[]} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

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
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '6c9324dc7fe32a89e904c65892c535ff8c0fe6a8d810975b6afe1ce3d32ba738'
    }

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
    get asV500(): {tankId: v500.MultiAddress, ruleSetId: number, rules: v500.DispatchRuleDescriptor[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

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
    get isV600(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'afaa710b1a55ecf9550d3c02fc816f7de9199ed5aa025a2a7cb521e19ddd01d2'
    }

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
    get asV600(): {tankId: v600.MultiAddress, ruleSetId: number, rules: v600.DispatchRuleDescriptor[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

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
    get isV601(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '721235e6cb4eba79cba31829b4f5245a89ad23649a9c67179937314f2288b2a4'
    }

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
    get asV601(): {tankId: v601.MultiAddress, ruleSetId: number, rules: v601.DispatchRuleDescriptor[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

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
    get isV602(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '7f35a41099a46811e66683a36960c6bf7beb366563fb09ee6df173036827f357'
    }

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
    get asV602(): {tankId: v602.MultiAddress, ruleSetId: number, rules: v602.DispatchRuleDescriptor[]} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

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
    get isV604(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === 'df466f1c352194eb6e359ca229653c38d60917ad9c95b61fd8a70f0b1a53b65e'
    }

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
    get asV604(): {tankId: v604.MultiAddress, ruleSetId: number, rules: v604.DispatchRuleDescriptor[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '080f01387f368567bfa085f42a8a96970bfd3df98c5d4b5fd552939e2c67b027'
    }

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
    get asV1000(): {tankId: v1000.MultiAddress, ruleSetId: number, rules: v1000.DispatchRuleDescriptor[]} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1003(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '14fe2179e727b95fc268d59ddb32418d9d802c601e19d5adf236de73835c39db'
    }

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
    get asV1003(): {tankId: v1003.MultiAddress, ruleSetId: number, rules: v1003.DispatchRuleDescriptor[]} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::insert_rule_set`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('FuelTanks.insert_rule_set') === '55a7c66d1634395db74f7ecfb5c8a455ad5526f9ff0d8fda2f36d46d8016d44e'
    }

    /**
     * See [`Pallet::insert_rule_set`].
     */
    get asV1004(): {tankId: v1004.MultiAddress, ruleSetId: number, rules: v1004.DispatchRuleDescriptor[]} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksMutateFreezeStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.mutate_freeze_state')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.mutate_freeze_state') === '400d585823f6a5fce567d3e438bd1ddac0b7cc3662931a51424df14279fde426'
    }

    /**
     * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
     * 
     * # Errors
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if caller is not a fuel tank owner
     */
    get asMatrixEnjinV1000(): {tankId: matrixEnjinV1000.MultiAddress, ruleSetId: (number | undefined), isFrozen: boolean} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksMutateFuelTankCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.mutate_fuel_tank')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * 
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.mutate_fuel_tank') === '9c5fe3d87288410aa8a3827d63434bb6999ebb57c48bba28556304535ab68ca6'
    }

    /**
     * Apply `mutation` to fuel tank with `tank_id`.
     * 
     * # Errors
     * 
     * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
     */
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, mutation: matrixEnjinV603.DefaultTankMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_account')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account') === '6b49a9c6d7cc4fec142fc02f8f252f4fa0bd06e832d1e877b43f77b3d8ef27b3'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userId: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveAccountRuleDataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_account_rule_data')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === 'd62fe8a27ba66b6d7b8ed9f74f289bdc41bebf234c0df25965f0147b92569176'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, userId: matrixEnjinV603.MultiAddress, ruleSetId: number, ruleKind: matrixEnjinV603.DispatchRuleKind} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === '73f11459363469dcd8d6653808d665b035e40c7f501c5c20f873dca721350eef'
    }

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
    get asMatrixEnjinV1000(): {tankId: matrixEnjinV1000.MultiAddress, userId: matrixEnjinV1000.MultiAddress, ruleSetId: number, ruleKind: matrixEnjinV1000.DispatchRuleKind} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isV500(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === 'd62fe8a27ba66b6d7b8ed9f74f289bdc41bebf234c0df25965f0147b92569176'
    }

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
    get asV500(): {tankId: v500.MultiAddress, userId: v500.MultiAddress, ruleSetId: number, ruleKind: v500.DispatchRuleKind} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1000(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_account_rule_data') === '73f11459363469dcd8d6653808d665b035e40c7f501c5c20f873dca721350eef'
    }

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
    get asV1000(): {tankId: v1000.MultiAddress, userId: v1000.MultiAddress, ruleSetId: number, ruleKind: v1000.DispatchRuleKind} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksRemoveRuleSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.remove_rule_set')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.remove_rule_set') === 'f09ae45a5e0ac6e1a34b392a13e3d81deefc3581926451813030e95e15c397fb'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, ruleSetId: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class FuelTanksScheduleMutateFreezeStateCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'FuelTanks.schedule_mutate_freeze_state')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('FuelTanks.schedule_mutate_freeze_state') === '400d585823f6a5fce567d3e438bd1ddac0b7cc3662931a51424df14279fde426'
    }

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
    get asMatrixEnjinV603(): {tankId: matrixEnjinV603.MultiAddress, ruleSetId: (number | undefined), isFrozen: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddRegistrarCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_registrar')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.add_registrar') === '2842be90a4599435dbefe83c28be9576bf64e6ff14aa9fa87c5fdb6255ef27b2'
    }

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
    get asMatrixEnjinV1000(): {account: matrixEnjinV1000.MultiAddress} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityAddSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.add_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.add_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Add the given account to the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asMatrixEnjinV1000(): {sub: matrixEnjinV1000.MultiAddress, data: matrixEnjinV1000.Data} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityCancelRequestCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.cancel_request')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.cancel_request') === '89d659d6a17ba36d0dfc7c90a7f043581d7fe980043895169d7dda1416ff7e5b'
    }

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
    get asMatrixEnjinV1000(): {regIndex: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityClearIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.clear_identity')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.clear_identity') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

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
    get asMatrixEnjinV1000(): null {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityKillIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.kill_identity')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.kill_identity') === '8142da248a3023c20f65ce8f6287f9eaf75336ab8815cb15537149abcdd0c20c'
    }

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
    get asMatrixEnjinV1000(): {target: matrixEnjinV1000.MultiAddress} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityProvideJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.provide_judgement')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.provide_judgement') === '293a16f5e8f521553f92204e3de7063fafc7905d71ca7812337b8bc6e200bcf9'
    }

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
    get asMatrixEnjinV1000(): {regIndex: number, target: matrixEnjinV1000.MultiAddress, judgement: matrixEnjinV1000.Judgement, identity: Uint8Array} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityQuitSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.quit_sub')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.quit_sub') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

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
    get asMatrixEnjinV1000(): null {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRemoveSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.remove_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.remove_sub') === 'e2fd2e12228143db75d1c9482d7788894e6f224b6c362b650b73ac996f701805'
    }

    /**
     * Remove the given account from the sender's subs.
     * 
     * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
     * to the sender.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asMatrixEnjinV1000(): {sub: matrixEnjinV1000.MultiAddress} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRenameSubCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.rename_sub')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.rename_sub') === 'b7d02496580d984a1a588630bfbf580f423f08a761006f8706b057ac73069a38'
    }

    /**
     * Alter the associated name of the given sub-account.
     * 
     * The dispatch origin for this call must be _Signed_ and the sender must have a registered
     * sub identity of `sub`.
     */
    get asMatrixEnjinV1000(): {sub: matrixEnjinV1000.MultiAddress, data: matrixEnjinV1000.Data} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentityRequestJudgementCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.request_judgement')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.request_judgement') === 'c6336282cbe5b8ccf3769cc13c92f532be2499335e3d52ebf566a888e92b5b7c'
    }

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
    get asMatrixEnjinV1000(): {regIndex: number, maxFee: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetAccountIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_account_id')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.set_account_id') === '7c569a09ae3438c742df387f66c9e012ebdf2af1dfe1befa9aba3df316cee1aa'
    }

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
    get asMatrixEnjinV1000(): {index: number, new: matrixEnjinV1000.MultiAddress} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fee')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.set_fee') === '6418458414c3cef3d5c80c88232d781e76733c675303b2937b9cd30ae58d0fe4'
    }

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
    get asMatrixEnjinV1000(): {index: number, fee: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetFieldsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_fields')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.set_fields') === 'b2c8998acd304e28e4f4a78e6a07f5bf7caf587532734dbd94b85c01a31c3e13'
    }

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
    get asMatrixEnjinV1000(): {index: number, fields: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetIdentityCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_identity')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.set_identity') === 'ab457704fd8cda5fee32e84ab7782778f4117cd54400c364cf7597eee5bc60ca'
    }

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
    get asMatrixEnjinV1000(): {info: matrixEnjinV1000.IdentityInfo} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class IdentitySetSubsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Identity.set_subs')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Identity.set_subs') === 'f156a100857e71b9e1eab839801795e8569b63b49f6c30333c5bf12811cbbe73'
    }

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
    get asMatrixEnjinV1000(): {subs: [Uint8Array, matrixEnjinV1000.Data][]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceCancelListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.cancel_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancels the listing with `listing_id`. Only callable by the seller.
     * 
     * # Parameters
     * 
     * - `listing_id`: The ID of the listing to cancel
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
     * - [`Error::NoPermission`] if the listing seller is not the caller, `origin`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.cancel_listing') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
    }

    /**
     * Cancels the listing with `listing_id`. Only callable by the seller.
     * 
     * # Parameters
     * 
     * - `listing_id`: The ID of the listing to cancel
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
     * - [`Error::NoPermission`] if the listing seller is not the caller, `origin`
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceCreateListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.create_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
     * The id for the listing is generated by hashing the encoded bytes of the listing.
     * 
     * # Parameters
     * 
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * 
     * # Errors
     * 
     * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
     *   `T::ListingActiveDelay`
     * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
     * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
     * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
     * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
     * - [`Error::LowTokenBalance`] token balance is too low for reserve
     * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.create_listing') === '78b7a393701f9f95d8413f0683f9a8071358025ff047a772b81cffc1c315d7b4'
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
     * The id for the listing is generated by hashing the encoded bytes of the listing.
     * 
     * # Parameters
     * 
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * 
     * # Errors
     * 
     * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
     *   `T::ListingActiveDelay`
     * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
     * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
     * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
     * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
     * - [`Error::LowTokenBalance`] token balance is too low for reserve
     * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
     */
    get asMatrixEnjinV603(): {makeAssetId: matrixEnjinV603.AssetId, takeAssetId: matrixEnjinV603.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (matrixEnjinV603.AuctionData | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_listing`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Marketplace.create_listing') === 'c34da99a6410e7e5ec8d2be8016d60760313945813250b1da2d500b389647e97'
    }

    /**
     * See [`Pallet::create_listing`].
     */
    get asMatrixEnjinV1004(): {makeAssetId: matrixEnjinV1004.AssetId, takeAssetId: matrixEnjinV1004.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (matrixEnjinV1004.AuctionData | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
     * The id for the listing is generated by hashing the encoded bytes of the listing.
     * 
     * # Parameters
     * 
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * 
     * # Errors
     * 
     * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
     *   `T::ListingActiveDelay`
     * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
     * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
     * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
     * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
     * - [`Error::LowTokenBalance`] token balance is too low for reserve
     * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Marketplace.create_listing') === '78b7a393701f9f95d8413f0683f9a8071358025ff047a772b81cffc1c315d7b4'
    }

    /**
     * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
     * The id for the listing is generated by hashing the encoded bytes of the listing.
     * 
     * # Parameters
     * 
     * - `make_asset_id`: The id of the asset being sold
     * - `take_asset_id`: The id of the asset being requested
     * - `amount`: The number of units being sold
     * - `price`: The requested price for each unit. If it's an auction, this is the minimum
     *   bid
     * - `salt`: Can be used to differentiate listings
     * - `auction_data`: Including this makes the listing an auction
     * 
     * # Errors
     * 
     * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
     *   `T::ListingActiveDelay`
     * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
     * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
     * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
     * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
     * - [`Error::LowTokenBalance`] token balance is too low for reserve
     * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
     */
    get asV500(): {makeAssetId: v500.AssetId, takeAssetId: v500.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (v500.AuctionData | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_listing`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Marketplace.create_listing') === 'c34da99a6410e7e5ec8d2be8016d60760313945813250b1da2d500b389647e97'
    }

    /**
     * See [`Pallet::create_listing`].
     */
    get asV1004(): {makeAssetId: v1004.AssetId, takeAssetId: v1004.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (v1004.AuctionData | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceFillListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.fill_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Fills a fixed price listing. This will execute immediately.
     * # Parameters
     * 
     * - `listing_id`: The id for the listing to buy from
     * - `amount`: The number of units purchased
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
     * - [`Error::BuyerIsSeller`] if the buyer is the seller of the listing
     * - [`Error::ListingIsWrongType`] if the listing is not under auction
     * - [`Error::InvalidAmount`] if the amount that still needs to be filled is greater than
     *   `amount`
     * - [`Error::ListingNotActive`] if the listing has not passed the `ListingActiveDelay` yet
     * - [`Error::TakeValueUnderMinimum`] if the listings `take` value is under the minimum
     *   required
     * - [`Error::LowTokenBalance`] if the buyer does not have enough tokens for reserve
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.fill_listing') === 'e370d131ef17581bf77299b58dd556c1a78d367f937bce7f44e290d100f7ed4d'
    }

    /**
     * Fills a fixed price listing. This will execute immediately.
     * # Parameters
     * 
     * - `listing_id`: The id for the listing to buy from
     * - `amount`: The number of units purchased
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
     * - [`Error::BuyerIsSeller`] if the buyer is the seller of the listing
     * - [`Error::ListingIsWrongType`] if the listing is not under auction
     * - [`Error::InvalidAmount`] if the amount that still needs to be filled is greater than
     *   `amount`
     * - [`Error::ListingNotActive`] if the listing has not passed the `ListingActiveDelay` yet
     * - [`Error::TakeValueUnderMinimum`] if the listings `take` value is under the minimum
     *   required
     * - [`Error::LowTokenBalance`] if the buyer does not have enough tokens for reserve
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, amount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceFinalizeAuctionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.finalize_auction')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalize the auction with id: `listing_id`. This will end the auction and transfer
     * funds. It fails if the auction is not over.
     * 
     * # Parameters
     * 
     * - `listing_id`: The ID for the listing to finalize
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
     * - [`Error::ListingIsWrongType`] if listing is not an auction
     * - [`Error::AuctionNotOver`] if the auction has not finished yet
     * - [`Error::TakeValueUnderMinimum`] if the take value is less than the minimum required
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.finalize_auction') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
    }

    /**
     * Finalize the auction with id: `listing_id`. This will end the auction and transfer
     * funds. It fails if the auction is not over.
     * 
     * # Parameters
     * 
     * - `listing_id`: The ID for the listing to finalize
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
     * - [`Error::ListingIsWrongType`] if listing is not an auction
     * - [`Error::AuctionNotOver`] if the auction has not finished yet
     * - [`Error::TakeValueUnderMinimum`] if the take value is less than the minimum required
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceForceCreateListingCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.force_create_listing')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
     * 
     * # Parameters
     * 
     * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
     * a deposit if `seller` does not have enough.
     * 
     * # Errors
     * 
     * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
     * [`Config::ForceOrigin`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.force_create_listing') === '740d5c8aa6c755cb69b094d1cae70ff2f50500c1d18fd8c66c8e1fd05539a640'
    }

    /**
     * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
     * 
     * # Parameters
     * 
     * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
     * a deposit if `seller` does not have enough.
     * 
     * # Errors
     * 
     * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
     * [`Config::ForceOrigin`]
     */
    get asMatrixEnjinV603(): {seller: matrixEnjinV603.MultiAddress, makeAssetId: matrixEnjinV603.AssetId, takeAssetId: matrixEnjinV603.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (matrixEnjinV603.AuctionData | undefined), depositBacker: (matrixEnjinV603.MultiAddress | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_listing`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Marketplace.force_create_listing') === '9b5e149713c897ad0b50bcfb0d24c9d0210c44698a1ce5b1b2b4805f68e47026'
    }

    /**
     * See [`Pallet::force_create_listing`].
     */
    get asMatrixEnjinV1004(): {seller: matrixEnjinV1004.MultiAddress, makeAssetId: matrixEnjinV1004.AssetId, takeAssetId: matrixEnjinV1004.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (matrixEnjinV1004.AuctionData | undefined), depositBacker: (matrixEnjinV1004.MultiAddress | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
     * 
     * # Parameters
     * 
     * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
     * a deposit if `seller` does not have enough.
     * 
     * # Errors
     * 
     * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
     * [`Config::ForceOrigin`]
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Marketplace.force_create_listing') === '740d5c8aa6c755cb69b094d1cae70ff2f50500c1d18fd8c66c8e1fd05539a640'
    }

    /**
     * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
     * 
     * # Parameters
     * 
     * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
     * a deposit if `seller` does not have enough.
     * 
     * # Errors
     * 
     * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
     * [`Config::ForceOrigin`]
     */
    get asV604(): {seller: v604.MultiAddress, makeAssetId: v604.AssetId, takeAssetId: v604.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (v604.AuctionData | undefined), depositBacker: (v604.MultiAddress | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_listing`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Marketplace.force_create_listing') === '9b5e149713c897ad0b50bcfb0d24c9d0210c44698a1ce5b1b2b4805f68e47026'
    }

    /**
     * See [`Pallet::force_create_listing`].
     */
    get asV1004(): {seller: v1004.MultiAddress, makeAssetId: v1004.AssetId, takeAssetId: v1004.AssetId, amount: bigint, price: bigint, salt: Uint8Array, auctionData: (v1004.AuctionData | undefined), depositBacker: (v1004.MultiAddress | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceForcePlaceBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.force_place_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [create_listing](Self::place_bid), but allows specifying the `bidder` and can
     * place a bid in an inactive auction. Only callable by [`Config::ForceOrigin`]. If
     * `funds_backer` is `Some`, it will transfer balance if `bidder` does not have enough.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.force_place_bid') === 'f038fdae96c9c9a8410db371543e140cca23088d4bf30a7098c7f7b58efc2ae5'
    }

    /**
     * Same as [create_listing](Self::place_bid), but allows specifying the `bidder` and can
     * place a bid in an inactive auction. Only callable by [`Config::ForceOrigin`]. If
     * `funds_backer` is `Some`, it will transfer balance if `bidder` does not have enough.
     */
    get asMatrixEnjinV603(): {bidder: matrixEnjinV603.MultiAddress, listingId: Uint8Array, price: bigint, fundsBacker: (matrixEnjinV603.MultiAddress | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplacePlaceBidCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.place_bid')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Places a bid on a listing. The listing must be an auction, and it must be currently
     * active.
     * 
     * # Parameters
     * 
     * - `listing_id`: The id for the listing to buy from
     * - `price`: The price for a single unit
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
     * - [`Error::BuyerIsSeller`] if the bidder is the seller of the listing
     * - [`Error::InactiveAuction`] if listing operates outside of specified start and end
     *   block
     * - [`Error::InvalidPrice`] if price is less than minimum_price for a bid
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.place_bid') === 'ef3821a4c9f8f54d06f376b33812844522af03669204d7f987e47edffe72dcf3'
    }

    /**
     * Places a bid on a listing. The listing must be an auction, and it must be currently
     * active.
     * 
     * # Parameters
     * 
     * - `listing_id`: The id for the listing to buy from
     * - `price`: The price for a single unit
     * 
     * # Errors
     * 
     * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
     * - [`Error::BuyerIsSeller`] if the bidder is the seller of the listing
     * - [`Error::InactiveAuction`] if listing operates outside of specified start and end
     *   block
     * - [`Error::InvalidPrice`] if price is less than minimum_price for a bid
     */
    get asMatrixEnjinV603(): {listingId: Uint8Array, price: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MarketplaceSetProtocolFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Marketplace.set_protocol_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
     * 
     * #Parameters
     * 
     * - `protocol_fee`: Percentage of fee to set
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Marketplace.set_protocol_fee') === '164c71fe8ee3317ae364f8c5528ba44b7eddb84e7a9a394e59bb344ad0ec2293'
    }

    /**
     * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
     * 
     * #Parameters
     * 
     * - `protocol_fee`: Percentage of fee to set
     */
    get asMatrixEnjinV603(): {protocolFee: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MatrixUtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MatrixUtility.batch')
        this._chain = ctx._chain
        this.call = call
    }

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
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === 'd62ee8112ec3c60241093b56ae224901f16f92caeeede499a20acae888ba7ab7'
    }

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
    get asMatrixEnjinV603(): {calls: matrixEnjinV603.Call[], continueOnFailure: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === '23e1d0c44dc6fefd566bf76e808f1efa03bf46b8a0a01e772a935c95b805d0c4'
    }

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
    get asMatrixEnjinV1000(): {calls: matrixEnjinV1000.Call[], continueOnFailure: boolean} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === 'cbf196d8ae488a10641203463a6e6089ac1f0b390593be56b3680556cce374d5'
    }

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
    get asMatrixEnjinV1003(): {calls: matrixEnjinV1003.Call[], continueOnFailure: boolean} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === 'd936e5b930cfe5f3e5f39553b8581b21be1ab3e716af75656b0fab30c16cf0a6'
    }

    /**
     * See [`Pallet::batch`].
     */
    get asMatrixEnjinV1004(): {calls: matrixEnjinV1004.Call[], continueOnFailure: boolean} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

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
    get isV604(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === 'd62ee8112ec3c60241093b56ae224901f16f92caeeede499a20acae888ba7ab7'
    }

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
    get asV604(): {calls: v604.Call[], continueOnFailure: boolean} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1000(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === 'b11ab22623c73a47d750c89e0e89285a056f26b2ef2c01e05994a769d7f4c811'
    }

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
    get asV1000(): {calls: v1000.Call[], continueOnFailure: boolean} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

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
    get isV1003(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === '5f38aa958cc41bb0b89b12399759f390c909300ec1191497f7c52d926766c4cf'
    }

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
    get asV1003(): {calls: v1003.Call[], continueOnFailure: boolean} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MatrixUtility.batch') === '88c57b60abc9b9517eda4a09cfe9f72576e0a3581003d5699264647a47bb1b01'
    }

    /**
     * See [`Pallet::batch`].
     */
    get asV1004(): {calls: v1004.Call[], continueOnFailure: boolean} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MatrixXcmForceSetMinimumWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MatrixXcm.force_set_minimum_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MatrixXcm.force_set_minimum_weight') === '4c92aee9cd2c92a06e50e7ae691000178c9980b7f9c4e035739e193479d9f615'
    }

    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    get asMatrixEnjinV603(): {xcmCall: matrixEnjinV603.XcmOperation, xcmWeightFeeMisc: matrixEnjinV603.MinimumWeightFeePair} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MatrixXcmTransferAssetToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MatrixXcm.transfer_asset_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_to_parachain') === '6e0995af8a1271406f286250994b7e96ef4e950ec17addde0aa13d7dcf06db7e'
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get asMatrixEnjinV603(): {paraId: matrixEnjinV603.ParachainId, beneficiary: matrixEnjinV603.Account, currencyId: matrixEnjinV603.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_asset_to_parachain`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_to_parachain') === '64d83d3dfcc1c73c1e40a16b9e3b5b0f5e5e1f1312495decd1d364d3b8dea30a'
    }

    /**
     * See [`Pallet::transfer_asset_to_parachain`].
     */
    get asMatrixEnjinV1004(): {paraId: matrixEnjinV1004.ParachainId, beneficiary: matrixEnjinV1004.Account, currencyId: matrixEnjinV1004.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_to_parachain') === '6e0995af8a1271406f286250994b7e96ef4e950ec17addde0aa13d7dcf06db7e'
    }

    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    get asV604(): {paraId: v604.ParachainId, beneficiary: v604.Account, currencyId: v604.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_asset_to_parachain`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_to_parachain') === '64d83d3dfcc1c73c1e40a16b9e3b5b0f5e5e1f1312495decd1d364d3b8dea30a'
    }

    /**
     * See [`Pallet::transfer_asset_to_parachain`].
     */
    get asV1004(): {paraId: v1004.ParachainId, beneficiary: v1004.Account, currencyId: v1004.AssetId, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MatrixXcmTransferAssetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MatrixXcm.transfer_asset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_with_fee') === '253afe02afbaf582b39ed2b492eb0493066e690147b56578b4e8b20fb470b444'
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asMatrixEnjinV603(): {assetPair: matrixEnjinV603.CurrencyIdAmountPair, feePair: matrixEnjinV603.CurrencyIdAmountPair, paraId: matrixEnjinV603.ParachainId, beneficiary: matrixEnjinV603.Account, destWeight: (bigint | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_asset_with_fee`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_with_fee') === 'bf007b6eeb78ba821aeb31f2063942080ea4b3a094be87d931913bbda741f72c'
    }

    /**
     * See [`Pallet::transfer_asset_with_fee`].
     */
    get asMatrixEnjinV1004(): {assetPair: matrixEnjinV1004.CurrencyIdAmountPair, feePair: matrixEnjinV1004.CurrencyIdAmountPair, paraId: matrixEnjinV1004.ParachainId, beneficiary: matrixEnjinV1004.Account, destWeight: (bigint | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isV604(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_with_fee') === '253afe02afbaf582b39ed2b492eb0493066e690147b56578b4e8b20fb470b444'
    }

    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asV604(): {assetPair: v604.CurrencyIdAmountPair, feePair: v604.CurrencyIdAmountPair, paraId: v604.ParachainId, beneficiary: v604.Account, destWeight: (bigint | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_asset_with_fee`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_asset_with_fee') === 'bf007b6eeb78ba821aeb31f2063942080ea4b3a094be87d931913bbda741f72c'
    }

    /**
     * See [`Pallet::transfer_asset_with_fee`].
     */
    get asV1004(): {assetPair: v1004.CurrencyIdAmountPair, feePair: v1004.CurrencyIdAmountPair, paraId: v1004.ParachainId, beneficiary: v1004.Account, destWeight: (bigint | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MatrixXcmTransferToParachainCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MatrixXcm.transfer_to_parachain')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MatrixXcm.transfer_to_parachain') === 'b78bfbeb395c8dfe84788045085ed4230266e12ad40559a5ed1fdf518db02770'
    }

    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    get asMatrixEnjinV603(): {paraId: matrixEnjinV603.ParachainId, beneficiary: matrixEnjinV603.Account, amount: bigint, destWeight: (bigint | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensAcceptCollectionTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.accept_collection_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * See [`Pallet::accept_collection_transfer`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.accept_collection_transfer') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
    }

    /**
     * See [`Pallet::accept_collection_transfer`].
     */
    get asMatrixEnjinV1004(): {collectionId: bigint} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensApproveCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.approve_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
     * If an `expiration` is provided, the approval will end when it expires.
     * 
     * # Errors
     * 
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.approve_collection') === '488accbd8a7ccff93c1ce6b5609ef67874c52cc8fc80b3b48a2cad226450c092'
    }

    /**
     * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
     * If an `expiration` is provided, the approval will end when it expires.
     * 
     * # Errors
     * 
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     */
    get asMatrixEnjinV603(): {collectionId: bigint, operator: Uint8Array, expiration: (number | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensApproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.approve_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
     * `collection_id`. An `expiration` can be provided. `current_amount` must match the
     * current approved amount.
     * 
     * # Errors
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
     *   approval amount
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.approve_token') === '7266369f860222731cfac3b4dc9f7b3eb8550de09ee165a184b933efc53cd27a'
    }

    /**
     * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
     * `collection_id`. An `expiration` can be provided. `current_amount` must match the
     * current approved amount.
     * 
     * # Errors
     * - [`Error::CannotApproveSelf`] if `origin == operator`
     * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
     * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
     * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
     *   approval amount
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array, amount: bigint, expiration: (number | undefined), currentAmount: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === 'a16058ed34379e8771cf8a93bddd3cb8d2085ccd127fa7774deb7e52dcd8575d'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     */
    get asMatrixEnjinV603(): {collectionId: bigint, recipients: matrixEnjinV603.Type_395[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === '29da27258672c2da5f2de8b8556bdcc1d50aabfa348c95bc373b6e0ab30fc41d'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get asV500(): {collectionId: bigint, recipients: v500.Type_380[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_mint') === 'a16058ed34379e8771cf8a93bddd3cb8d2085ccd127fa7774deb7e52dcd8575d'
    }

    /**
     * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
     * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
     * will fail all of them in the batch.
     * 
     * # Errors
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     */
    get asV600(): {collectionId: bigint, recipients: v600.Type_380[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Collection owner sets `attributes` to `collection_id`
     * 
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * 
     * # Errors
     * 
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_set_attribute') === '4cfb7f21da2d822f4ecafcb406f87d73d214d01ed04db425fb85b84a776512f4'
    }

    /**
     * Collection owner sets `attributes` to `collection_id`
     * 
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * 
     * # Errors
     * 
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), attributes: matrixEnjinV603.AttributeKeyValuePair[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBatchTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.batch_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.batch_transfer') === 'b19d3917f5096e2cef3e73752e8a3bd0b5e30cadfc6a4ff16c68ce84082c1ce5'
    }

    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, recipients: matrixEnjinV603.Recipient[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     * 
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.burn') === '5e518fd41f2e62474b4a1bae295d7c2b0bec3f70f20ccbfeb4517ee9e7984bc3'
    }

    /**
     * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
     * It also updates the total supply of `collection_id`.
     * 
     * # Errors
     * - [`Error::CollectionNotFound`] if `collection` does not exist.
     * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
     *   `tokens` of `collection`.
     * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
     *   unreserve
     * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
     *   attribute count is greater than zero
     */
    get asMatrixEnjinV603(): {collectionId: bigint, params: matrixEnjinV603.DefaultBurnParams} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensCancelCollectionTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.cancel_collection_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * See [`Pallet::cancel_collection_transfer`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.cancel_collection_transfer') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
    }

    /**
     * See [`Pallet::cancel_collection_transfer`].
     */
    get asMatrixEnjinV1004(): {collectionId: bigint} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensClaimCollectionsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.claim_collections')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.claim_collections') === 'c2c9b14cf1920e63e88bb0ed4e4d7d24b7214a83d084075fadcc9df9fa04f151'
    }

    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get asMatrixEnjinV603(): {destination: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `destination` account.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.claim_collections') === '1bb643643b1ec60049721f86e49d9cb8b2a620ba60b14cdc22f7dcf5b0746b99'
    }

    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `destination` account.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    get asMatrixEnjinV1000(): {destination: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array, collectionCount: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('MultiTokens.claim_collections') === 'c2c9b14cf1920e63e88bb0ed4e4d7d24b7214a83d084075fadcc9df9fa04f151'
    }

    /**
     * Transfers ownership of collections to `destination` if the signature matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get asV604(): {destination: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `destination` account.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.claim_collections') === '1bb643643b1ec60049721f86e49d9cb8b2a620ba60b14cdc22f7dcf5b0746b99'
    }

    /**
     * Transfers ownership of collections to `destination` if the signature and
     * `collection_count` matches.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address)
     * 
     * and `address` matches the `destination` account.
     * 
     * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
     * and it will reimburse weight for collections under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive ownership of the collections
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address`: The Ethereum address from which the message is signed.
     * - `collection_count`: The number of collections that will be claimed. It can also be
     *   higher than the actual number, but if it's lower it will fail.
     */
    get asV1000(): {destination: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array, collectionCount: number} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensClaimTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.claim_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfers balances of tokens to `destination` if the signature matches. Mints tokens if
     * needed.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableTokensPerCall`]
     * and it will reimburse weight for tokens under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive token balances
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.claim_tokens') === 'c2c9b14cf1920e63e88bb0ed4e4d7d24b7214a83d084075fadcc9df9fa04f151'
    }

    /**
     * Transfers balances of tokens to `destination` if the signature matches. Mints tokens if
     * needed.
     * 
     * The dispatch origin for this call must be _None_.
     * 
     * Unsigned Validation:
     * A call to claim is deemed valid if the signature provided matches
     * the expected signed message of:
     * 
     * > Ethereum Signed Message:
     * > (configured prefix string)(address) with nonce:{nonce}
     * 
     * and `address` matches the `destination` account. The nonce must also match.
     * 
     * This will always execute with weight of [`Config::MaxClaimableTokensPerCall`]
     * and it will reimburse weight for tokens under that number.
     * 
     * ### Parameters:
     * - `destination`: The account that will receive token balances
     * - `ethereum_signature`: The signature of an ethereum signed message matching the format
     *   described above.
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     */
    get asMatrixEnjinV603(): {destination: Uint8Array, ethereumSignature: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensCreateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.create_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '2c5ffb5fc94633dce91583fb29da64fdda08ce309e89734aab20a62a8cbb3250'
    }

    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    get asMatrixEnjinV603(): {descriptor: matrixEnjinV603.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '8154370c0b10838c7ac98f63f8ae9d0eda5eba26430c9562a2e115ea2db522ea'
    }

    /**
     * See [`Pallet::create_collection`].
     */
    get asMatrixEnjinV1004(): {descriptor: matrixEnjinV1004.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '2c5ffb5fc94633dce91583fb29da64fdda08ce309e89734aab20a62a8cbb3250'
    }

    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    get asV500(): {descriptor: v500.DefaultCollectionDescriptor} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::create_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.create_collection') === '8154370c0b10838c7ac98f63f8ae9d0eda5eba26430c9562a2e115ea2db522ea'
    }

    /**
     * See [`Pallet::create_collection`].
     */
    get asV1004(): {descriptor: v1004.DefaultCollectionDescriptor} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensDestroyCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.destroy_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
     * owner of the [`Collection`](ep_multi_tokens::Collection).
     * 
     * # Errors
     * 
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
     * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
     *   collection's destruction
     * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
     *   destroying
     * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
     *   destroying
     * current number of collection attributes.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.destroy_collection') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
    }

    /**
     * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
     * owner of the [`Collection`](ep_multi_tokens::Collection).
     * 
     * # Errors
     * 
     * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
     * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
     * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
     *   collection's destruction
     * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
     *   destroying
     * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
     *   destroying
     * current number of collection attributes.
     */
    get asMatrixEnjinV603(): {collectionId: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensFinishClaimTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.finish_claim_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sends an event that signifies claiming the tokens was completed. Only callable by
     * [`Config::EthereumMigrationOrigin`].
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.finish_claim_tokens') === 'e963b546ce52b3e105e5a29f2e7743ca6496e8a40e036e98f057e74fa36bca75'
    }

    /**
     * Sends an event that signifies claiming the tokens was completed. Only callable by
     * [`Config::EthereumMigrationOrigin`].
     */
    get asMatrixEnjinV1000(): {destination: Uint8Array, ethereumAddress: Uint8Array} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceApproveCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_approve_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [`approve_collection`](Self::approve_collection), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_approve_collection') === 'f65c0957959ad4ec841c3b60acfb570fb88ffcd77dcd55ff3a2274029b09f9a1'
    }

    /**
     * Same as [`approve_collection`](Self::approve_collection), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV603(): {caller: matrixEnjinV603.MultiAddress, collectionId: bigint, operator: Uint8Array, expiration: (number | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceBurnCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_burn')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_burn') === '7a5ae3200088a96708870831e59af4cf200480d821ce966c8b150a4623315305'
    }

    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    get asMatrixEnjinV603(): {caller: matrixEnjinV603.MultiAddress, collectionId: bigint, params: matrixEnjinV603.DefaultBurnParams} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceCreateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_create_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '64f054ecc6931474221d23bfcfed0b8f345cfbdab3115fd062d513a374ecf698'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get asMatrixEnjinV603(): {owner: Uint8Array, collectionId: bigint, descriptor: matrixEnjinV603.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '347697a1f472b5a7cc6753457e35779081f844bff6ad05c2c9c1951e594392d7'
    }

    /**
     * See [`Pallet::force_create_collection`].
     */
    get asMatrixEnjinV1004(): {owner: Uint8Array, collectionId: bigint, descriptor: matrixEnjinV1004.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '64f054ecc6931474221d23bfcfed0b8f345cfbdab3115fd062d513a374ecf698'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get asV500(): {owner: Uint8Array, collectionId: bigint, descriptor: v500.DefaultCollectionDescriptor} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_collection') === '347697a1f472b5a7cc6753457e35779081f844bff6ad05c2c9c1951e594392d7'
    }

    /**
     * See [`Pallet::force_create_collection`].
     */
    get asV1004(): {owner: Uint8Array, collectionId: bigint, descriptor: v1004.DefaultCollectionDescriptor} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceCreateEthereumCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_create_ethereum_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     * 
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_ethereum_collection') === 'e0b68803545526e7819b718982de46e39b26d56c26ea0debdb7b2d4189045018'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     * 
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get asMatrixEnjinV1000(): {owner: Uint8Array, claimer: Uint8Array, ethereumCollectionId: bigint, descriptor: matrixEnjinV1000.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_ethereum_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_ethereum_collection') === 'f98b10cec6469eb9a3776cc629bc1acaf2ad4d6135cea3017a6d4946cb3338ea'
    }

    /**
     * See [`Pallet::force_create_ethereum_collection`].
     */
    get asMatrixEnjinV1004(): {owner: Uint8Array, claimer: Uint8Array, ethereumCollectionId: bigint, descriptor: matrixEnjinV1004.DefaultCollectionDescriptor} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     * 
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_ethereum_collection') === 'e0b68803545526e7819b718982de46e39b26d56c26ea0debdb7b2d4189045018'
    }

    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be
     * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
     * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
     * 
     * # Params
     * - `owner` - the account that will own the new collection
     * - `claimer` - the ethereum address that will be able to claim the collection
     * - `ethereum_collection_id` - the collection id on ethereum
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    get asV1000(): {owner: Uint8Array, claimer: Uint8Array, ethereumCollectionId: bigint, descriptor: v1000.DefaultCollectionDescriptor} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_create_ethereum_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_create_ethereum_collection') === 'f98b10cec6469eb9a3776cc629bc1acaf2ad4d6135cea3017a6d4946cb3338ea'
    }

    /**
     * See [`Pallet::force_create_ethereum_collection`].
     */
    get asV1004(): {owner: Uint8Array, claimer: Uint8Array, ethereumCollectionId: bigint, descriptor: v1004.DefaultCollectionDescriptor} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_freeze') === '91882af67a1b185551af07d0e9518d72ab08e8c353579842070f87fc1e425820'
    }

    /**
     * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
     */
    get asMatrixEnjinV603(): {info: matrixEnjinV603.Freeze} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mint') === '6cf5f25d480cadca047bd92075c889f51eadee05fb17808aab0dbf485d3bcd38'
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV603(): {caller: matrixEnjinV603.MultiAddress, recipient: matrixEnjinV603.MultiAddress, collectionId: bigint, params: matrixEnjinV603.DefaultMintParams, depositBacker: (matrixEnjinV603.MultiAddress | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mint') === '2f7b04c898012e70b44c3bd6644576e341733b54a7d1c169fe60ae594e72ad1a'
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    get asMatrixEnjinV1003(): {caller: (matrixEnjinV1003.MultiAddress | undefined), recipient: matrixEnjinV1003.MultiAddress, collectionId: bigint, params: matrixEnjinV1003.FlexibleMintParams, depositor: (matrixEnjinV1003.MultiAddress | undefined)} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get isV604(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mint') === '6cf5f25d480cadca047bd92075c889f51eadee05fb17808aab0dbf485d3bcd38'
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    get asV604(): {caller: v604.MultiAddress, recipient: v604.MultiAddress, collectionId: bigint, params: v604.DefaultMintParams, depositBacker: (v604.MultiAddress | undefined)} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mint') === '2f7b04c898012e70b44c3bd6644576e341733b54a7d1c169fe60ae594e72ad1a'
    }

    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    get asV1003(): {caller: (v1003.MultiAddress | undefined), recipient: v1003.MultiAddress, collectionId: bigint, params: v1003.FlexibleMintParams, depositor: (v1003.MultiAddress | undefined)} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceMutateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_mutate_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    get asMatrixEnjinV603(): {collectionId: bigint, mutation: matrixEnjinV603.DefaultCollectionMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_mutate_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === '23cd20710f8d223ef152621412c9f6a52c8a8b941403cd849901cc7af9f0279d'
    }

    /**
     * See [`Pallet::force_mutate_collection`].
     */
    get asMatrixEnjinV1004(): {collectionId: bigint, mutation: matrixEnjinV1004.DefaultCollectionMutation} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    get asV500(): {collectionId: bigint, mutation: v500.DefaultCollectionMutation} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_mutate_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_mutate_collection') === '23cd20710f8d223ef152621412c9f6a52c8a8b941403cd849901cc7af9f0279d'
    }

    /**
     * See [`Pallet::force_mutate_collection`].
     */
    get asV1004(): {collectionId: bigint, mutation: v1004.DefaultCollectionMutation} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_attribute') === '0c376373bedc267e8526ef4acf5c6c81f9faf25c7d1d5e610d39748132d3507f'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: (matrixEnjinV603.Attribute | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === 'd75af3c3c47bd7f1909045c69b61ffb4bbd68459ef76923bcdbd9203caeb90d5'
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    get asMatrixEnjinV603(): {collectionId: bigint, value: (matrixEnjinV603.Collection | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_set_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === 'a321074300af0707d2d183ea497fd6b1aae8773b8b3f533a3ada4e8d789fc491'
    }

    /**
     * See [`Pallet::force_set_collection`].
     */
    get asMatrixEnjinV1004(): {collectionId: bigint, value: (matrixEnjinV1004.Collection | undefined)} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === 'd75af3c3c47bd7f1909045c69b61ffb4bbd68459ef76923bcdbd9203caeb90d5'
    }

    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    get asV500(): {collectionId: bigint, value: (v500.Collection | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_set_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection') === 'a321074300af0707d2d183ea497fd6b1aae8773b8b3f533a3ada4e8d789fc491'
    }

    /**
     * See [`Pallet::force_set_collection`].
     */
    get asV1004(): {collectionId: bigint, value: (v1004.Collection | undefined)} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetCollectionAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_collection_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_collection_account') === '9d50ec94aed5d50147723e89e22a9b159311680f9492c74e81d60a9d8c141683'
    }

    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     */
    get asMatrixEnjinV603(): {collectionId: bigint, accountId: matrixEnjinV603.MultiAddress, value: (matrixEnjinV603.CollectionAccount | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetEthereumAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_ethereum_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_ethereum_account') === 'ff39e28724b48d3e7b31b93aab174ada0abe695b6ea73e0f94a52337f5829a1c'
    }

    /**
     * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV1000(): {address: Uint8Array, value: (bigint[] | undefined)} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetEthereumCollectionIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_ethereum_collection_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
     * [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_ethereum_collection_id') === 'f48ee641ff9ee90f113b54e9bf6a09acf4be545da1603777abbb8d2945397349'
    }

    /**
     * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
     * [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV1000(): {ethereumCollectionId: bigint, nativeCollectionId: (bigint | undefined)} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetEthereumUnmintableTokenIdsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_ethereum_unmintable_token_ids')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
     * ethereum_collection_id is invalid
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_ethereum_unmintable_token_ids') === 'd3533d64c4a0a399674b15f4d56c2085c48613cfb421afc25b3253751b764a0b'
    }

    /**
     * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
     * ethereum_collection_id is invalid
     */
    get asMatrixEnjinV1000(): {ethereumCollectionId: bigint, baseTokenId: bigint, tokenIndex: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetNextCollectionIdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_next_collection_id')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_next_collection_id') === 'd13cb91c3f61510beece366e7f7c2d0705f01d70f9bc28721d2437cd210a3372'
    }

    /**
     * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV603(): {value: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '6b0347ff9d005a8b25bcce6f0402078cf4f797f3978343bdd92c89b66bcd5dc9'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, value: (matrixEnjinV603.Token | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '6e309a6623c66424fa2b051393f739db30a442cb48712f14fef0c24db32bf0bc'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asV500(): {collectionId: bigint, tokenId: bigint, value: (v500.Token | undefined)} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token') === '6b0347ff9d005a8b25bcce6f0402078cf4f797f3978343bdd92c89b66bcd5dc9'
    }

    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    get asV600(): {collectionId: bigint, tokenId: bigint, value: (v600.Token | undefined)} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetTokenAccountCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_token_account')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_token_account') === 'bf35663d50dd3916b43afdc084f9827ad9764b0cd317f3ca102ce9251a909dad'
    }

    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, accountId: matrixEnjinV603.MultiAddress, value: (matrixEnjinV603.TokenAccount | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceSetUnmintableTokenIdsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_set_unmintable_token_ids')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('MultiTokens.force_set_unmintable_token_ids') === '95443d79e8d4c0d2b00a3cfc3b7df355b8bdc4ec3bf48bf00b18e2eea5609764'
    }

    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    get asMatrixEnjinV1000(): {collectionId: bigint, baseTokenId: bigint, tokenIndex: bigint} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensForceTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.force_transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     * 
     * # Errors
     * 
     * Same as [`transfer`](Self::transfer)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.force_transfer') === '7eb6f59738c54c66d88f77215603bab748b9d4ed2bc404e7a6627743e91b27f6'
    }

    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     * 
     * # Errors
     * 
     * Same as [`transfer`](Self::transfer)
     */
    get asMatrixEnjinV603(): {source: matrixEnjinV603.MultiAddress, destination: matrixEnjinV603.MultiAddress, collectionId: bigint, params: matrixEnjinV603.DefaultTransferParams} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensFreezeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.freeze')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Freeze collection, token or account
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.freeze') === '91882af67a1b185551af07d0e9518d72ab08e8c353579842070f87fc1e425820'
    }

    /**
     * Freeze collection, token or account
     */
    get asMatrixEnjinV603(): {info: matrixEnjinV603.Freeze} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMintCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mint')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '17e3c370d4720b5760710bed81f54d7f476ae6c39d3849de9837b9f718be4f32'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get asMatrixEnjinV603(): {recipient: matrixEnjinV603.MultiAddress, collectionId: bigint, params: matrixEnjinV603.DefaultMintParams} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '77fe7100fc7c7f01a60ba86298be60e67d2083b3b69c7b7178ef6e5c51c15ffc'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get asV500(): {recipient: v500.MultiAddress, collectionId: bigint, params: v500.DefaultMintParams} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get isV600(): boolean {
        return this._chain.getCallHash('MultiTokens.mint') === '17e3c370d4720b5760710bed81f54d7f476ae6c39d3849de9837b9f718be4f32'
    }

    /**
     * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
     * [`MintPolicy`](traits::CollectionPolicy::Mint).
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::CollectionNotFound`] if `Collection` does not exist.
     * - [`Error::TokenNotFound`] if `Token` does not exist.
     * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
     * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
     * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
     * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
     * - [`Error::DepositReserveFailed`] if the issuer does not have sufficent balance for
     *   token deposit
     * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
     *   mapped to another asset in `AssetIdsByLocation`
     */
    get asV600(): {recipient: v600.MultiAddress, collectionId: bigint, params: v600.DefaultMintParams} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMutateCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mutate_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, mutation: matrixEnjinV603.DefaultCollectionMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::mutate_collection`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '23cd20710f8d223ef152621412c9f6a52c8a8b941403cd849901cc7af9f0279d'
    }

    /**
     * See [`Pallet::mutate_collection`].
     */
    get asMatrixEnjinV1004(): {collectionId: bigint, mutation: matrixEnjinV1004.DefaultCollectionMutation} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '14654b078d9899c1c298781a09e325690f44d4eb607d8c69ff2f94e1c6b31069'
    }

    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    get asV500(): {collectionId: bigint, mutation: v500.DefaultCollectionMutation} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::mutate_collection`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_collection') === '23cd20710f8d223ef152621412c9f6a52c8a8b941403cd849901cc7af9f0279d'
    }

    /**
     * See [`Pallet::mutate_collection`].
     */
    get asV1004(): {collectionId: bigint, mutation: v1004.DefaultCollectionMutation} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMutateTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.mutate_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.mutate_token') === 'b1df46e912bd6082a6796b61e3d5451b698e752c5aa782392bb97d3c78d81f3c'
    }

    /**
     * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
     * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
     *   assigned a royalty
     * - [`Error::NoPermission`] if not the collection owner
     * - [`Error::TokenNotFound`] if Token does not exist
     * - [`Error::ConflictingLocation`] if the new location is already occupied
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, mutation: matrixEnjinV603.DefaultTokenMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensRemoveAllAttributesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.remove_all_attributes')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes all attributes from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
     * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
     * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
     *   Token
     * - other errors from `remove_attribute`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.remove_all_attributes') === '721a13a18dab7748d2990b3b2edd4c1c6fbca833c064e8ae31bb2cec0c3aed84'
    }

    /**
     * Removes all attributes from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
     * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
     * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
     *   Token
     * - other errors from `remove_attribute`
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), attributeCount: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensRemoveAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.remove_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes the `key` attribute from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
     * - `Underflow` if an attribute counter underflows
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.remove_attribute') === '5e8dda41d19b04f7e051283b9b20aed0a83222ef4bc596239942a512d10e143c'
    }

    /**
     * Removes the `key` attribute from the given `collection_id` or `token_id`.
     * 
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
     * - `Underflow` if an attribute counter underflows
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensSetAttributeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.set_attribute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * 
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.set_attribute') === '1442e960b51ef446ff50fc6d27284693378495f9905ed8fbc35811b81dcf7c7b'
    }

    /**
     * Sets the attribute `key` to `value` for `collection_id`.
     * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
     * the attribute is added to the token.
     * 
     * # Errors
     * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
     * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
     * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
     *   storage.
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensThawCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.thaw')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Thaw collection, token or account
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.thaw') === '91882af67a1b185551af07d0e9518d72ab08e8c353579842070f87fc1e425820'
    }

    /**
     * Thaw collection, token or account
     */
    get asMatrixEnjinV603(): {info: matrixEnjinV603.Freeze} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.transfer') === '3a904597294b52262716ac476178f413a640c58c5df5fdee9d6a42b369dab12a'
    }

    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    get asMatrixEnjinV603(): {recipient: matrixEnjinV603.MultiAddress, collectionId: bigint, params: matrixEnjinV603.DefaultTransferParams} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensUnapproveCollectionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.unapprove_collection')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     * 
     * # Errors
     * 
     * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.unapprove_collection') === 'e5170bfdb3c4351aa216ff597896abe5ecc75ec89c47b522a97790870cc3b5ef'
    }

    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     * 
     * # Errors
     * 
     * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
     */
    get asMatrixEnjinV603(): {collectionId: bigint, operator: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensUnapproveTokenCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokens.unapprove_token')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
     * 
     * # Errors
     * 
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokens.unapprove_token') === 'bf808826dcdafcc9b31e08b287969eda26c2a350dbd9b501129943a436ab8854'
    }

    /**
     * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
     * 
     * # Errors
     * 
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     */
    get asMatrixEnjinV603(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationFinalizeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.finalize')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Finalizes the migration process by unpausing all related pallets, setting the next
     * collection ID, updating the migration status, and emitting a `MigrationFinished` event.
     * 
     * # Arguments
     * 
     * * `origin` - The origin of the transaction.
     * * `next_collection_id` - The ID of the next collection.
     * 
     * # Errors
     * - [`Error::OnlyFinalizeOngoing`] if auction is not ongoing.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.finalize') === '137977a56f38380f8d4ccd77b98084830ccd66df180fbb23d13a738621ab87b8'
    }

    /**
     * Finalizes the migration process by unpausing all related pallets, setting the next
     * collection ID, updating the migration status, and emitting a `MigrationFinished` event.
     * 
     * # Arguments
     * 
     * * `origin` - The origin of the transaction.
     * * `next_collection_id` - The ID of the next collection.
     * 
     * # Errors
     * - [`Error::OnlyFinalizeOngoing`] if auction is not ongoing.
     */
    get asMatrixEnjinV603(): {nextCollectionId: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateAttributesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_attributes')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_attributes') === '38678b38b1093dceec6ad9eb431127466c58af938a8150a8c7ad7c37e5072de9'
    }

    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    get asMatrixEnjinV603(): {attributes: [bigint, (bigint | undefined), Uint8Array, matrixEnjinV603.Attribute][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateCollectionAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_collection_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_collection_accounts') === '813084e51cd54ab7bfef8bf7e5059f31e0d2b9c12322cf69ce76a95e9699cac1'
    }

    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    get asMatrixEnjinV603(): {accounts: [bigint, Uint8Array, matrixEnjinV603.CollectionAccount][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateCollectionsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_collections')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_collections') === '37cd3868d6f3f9dbe259cd581888f07612dc8dd99faeda8210d75e8fac60889e'
    }

    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    get asMatrixEnjinV603(): {collections: [bigint, matrixEnjinV603.Collection][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateTokenAccountsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_token_accounts')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_token_accounts') === 'a8273c032ee74f21d24abe2440c005682abdfed982744ce56f3d7dbb682df9d1'
    }

    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    get asMatrixEnjinV603(): {accounts: [bigint, bigint, Uint8Array, matrixEnjinV603.TokenAccount][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultiTokensMigrationMigrateTokensCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'MultiTokensMigration.migrate_tokens')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('MultiTokensMigration.migrate_tokens') === '5a462e1cc4608c0590c2a56f5ea8ac6910e1ace1b917bfe39df97eff05101008'
    }

    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    get asMatrixEnjinV603(): {tokens: [bigint, bigint, matrixEnjinV603.Token][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigApproveAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.approve_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Multisig.approve_as_multi') === '88561668497d8fdee3be21d28e6e68bc1cd9568f418501a4b294fe2b9803acb4'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * NOTE: If this is the final approval, you will want to use `as_multi` instead.
     * 
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asMatrixEnjinV603(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (matrixEnjinV603.Timepoint | undefined), callHash: Uint8Array, maxWeight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '753de76e027798fb10ef412018689caa169a5d49a8566d63b558955b6df0eb69'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asMatrixEnjinV603(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (matrixEnjinV603.Timepoint | undefined), call: matrixEnjinV603.Call, maxWeight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'd5d43d2ca8e7b61a07adf062e8a76be0ee7a4d980db5fb6472d262ccc53a38c4'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asMatrixEnjinV1000(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (matrixEnjinV1000.Timepoint | undefined), call: matrixEnjinV1000.Call, maxWeight: matrixEnjinV1000.Weight} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '9343c637a3889667ccbf558238e261cd733cdb7ab6298b83d656366afdbc01b2'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asMatrixEnjinV1003(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (matrixEnjinV1003.Timepoint | undefined), call: matrixEnjinV1003.Call, maxWeight: matrixEnjinV1003.Weight} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '2c25c537199e08e6b4bd026b07d31ca1b6c9b6b6666e3be46ae7d9cfc07ea8ff'
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get asMatrixEnjinV1004(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (matrixEnjinV1004.Timepoint | undefined), call: matrixEnjinV1004.Call, maxWeight: matrixEnjinV1004.Weight} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '371d05f5e4e07f488e5d3155644987faec0f8d7bd75a674a65f957283b3d81be'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV500(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v500.Timepoint | undefined), call: v500.Call, maxWeight: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'c7815718fcc26012c650c6a1c650866f2b8d9974629ec1bc977d515a2c006f01'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV600(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v600.Timepoint | undefined), call: v600.Call, maxWeight: v600.Weight} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '89e1a5611f269f661a5d2ff7986a904e3b1f6f29bf5c37bfa287def921138b41'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * # <weight>
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     * -------------------------------
     * - DB Weight:
     *     - Reads: Multisig Storage, [Caller Account]
     *     - Writes: Multisig Storage, [Caller Account]
     * - Plus Call Weight
     * # </weight>
     */
    get asV601(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v601.Timepoint | undefined), call: v601.Call, maxWeight: v601.Weight} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '1b8740cfcd16e554ca178a25cf7f6cee719d835f6afe16edd07ba004907fb0be'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asV602(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v602.Timepoint | undefined), call: v602.Call, maxWeight: v602.Weight} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '753de76e027798fb10ef412018689caa169a5d49a8566d63b558955b6df0eb69'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asV604(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v604.Timepoint | undefined), call: v604.Call, maxWeight: v604.Weight} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '064f8a81284200ad3584c180884f3159b49477b68f4e0eb4f7d5d0d2bdfedd68'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asV1000(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1000.Timepoint | undefined), call: v1000.Call, maxWeight: v1000.Weight} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === '04e202dc2fdd7984c6573299b41f16b4780a1d86adf2f1a329713b621196f98a'
    }

    /**
     * Register approval for a dispatch to be made from a deterministic composite account if
     * approved by a total of `threshold - 1` of `other_signatories`.
     * 
     * If there are enough, then dispatch the call.
     * 
     * Payment: `DepositBase` will be reserved if this is the first approval, plus
     * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
     * is cancelled.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
     * not the first approval, then it must be `Some`, with the timepoint (block number and
     * transaction index) of the first approval transaction.
     * - `call`: The call to be executed.
     * 
     * NOTE: Unless this is the final approval, you will generally want to use
     * `approve_as_multi` instead, since it only requires a hash of the call.
     * 
     * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
     * on success, result is `Ok` and the result from the interior call, if it was executed,
     * may be found in the deposited `MultisigExecuted` event.
     * 
     * ## Complexity
     * - `O(S + Z + Call)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
     * - One encode & hash, both of complexity `O(S)`.
     * - Up to one binary search and insert (`O(logS + S)`).
     * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
     * - One event.
     * - The weight of the `call`.
     * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
     *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
     */
    get asV1003(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1003.Timepoint | undefined), call: v1003.Call, maxWeight: v1003.Weight} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Multisig.as_multi') === 'a25f8a837d7cb4d25a3120639f29a8bbedb0e5c5c6a0f00d3354be4dd5a6816c'
    }

    /**
     * See [`Pallet::as_multi`].
     */
    get asV1004(): {threshold: number, otherSignatories: Uint8Array[], maybeTimepoint: (v1004.Timepoint | undefined), call: v1004.Call, maxWeight: v1004.Weight} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigAsMultiThreshold1Call {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.as_multi_threshold_1')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '2272d53de8645af097228f5c68da02f4c6eb7cfbbd2865623e12152ca56b023c'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asMatrixEnjinV603(): {otherSignatories: Uint8Array[], call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c3b6d9437c60856a9842e05d38dd4e8fdd95b2d7604ea35401a95956b50f90cf'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asMatrixEnjinV1000(): {otherSignatories: Uint8Array[], call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '3cc1715f4f1185cd2d87bb033c331287195799ed30e78489a170032d305a9521'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asMatrixEnjinV1003(): {otherSignatories: Uint8Array[], call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'c7660733940126fab2ead286912516fa3a9f886fc81b854cc2ec6d1e5de37d77'
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get asMatrixEnjinV1004(): {otherSignatories: Uint8Array[], call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1464000ac9e2b89ca25c526bb2b352230fc2811890ca7fb640c05a3557a8ffdd'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV500(): {otherSignatories: Uint8Array[], call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'abae266d775e2c38098b2d0ad1af143c5827224567f09dc6c96c0e5b985d03bc'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV600(): {otherSignatories: Uint8Array[], call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '1df05f9c21384080a8652ca61c90547f8e933b72535b3f47f3b8b634f1b3885c'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * # <weight>
     * O(Z + C) where Z is the length of the call and C its execution weight.
     * -------------------------------
     * - DB Weight: None
     * - Plus Call Weight
     * # </weight>
     */
    get asV601(): {otherSignatories: Uint8Array[], call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'a1890c4cc7893697a8c420d4a1acb1292f666ac5f0efe066ec3259f873621d2e'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV602(): {otherSignatories: Uint8Array[], call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '2272d53de8645af097228f5c68da02f4c6eb7cfbbd2865623e12152ca56b023c'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV604(): {otherSignatories: Uint8Array[], call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '7b360bfa89d48274e15dc6ef181682deb5a9927166fa33c486e6e75eb72de7b2'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV1000(): {otherSignatories: Uint8Array[], call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '48e48c6da8db93f98b38f56536c96012a67dd6522a64299bae686208db37388b'
    }

    /**
     * Immediately dispatch a multi-signature call using a single approval from the caller.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `other_signatories`: The accounts (other than the sender) who are part of the
     * multi-signature, but do not participate in the approval process.
     * - `call`: The call to be executed.
     * 
     * Result is equivalent to the dispatched result.
     * 
     * ## Complexity
     * O(Z + C) where Z is the length of the call and C its execution weight.
     */
    get asV1003(): {otherSignatories: Uint8Array[], call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'eb3e48e401a952f910a85ab471f5c45aaa2117cacf47b823b3e9f5941bb3746c'
    }

    /**
     * See [`Pallet::as_multi_threshold_1`].
     */
    get asV1004(): {otherSignatories: Uint8Array[], call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class MultisigCancelAsMultiCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Multisig.cancel_as_multi')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Multisig.cancel_as_multi') === '4ccc75a4f739c659f177e3df98fba2ea59ddade74c4ebccd51b2fc4c52e923af'
    }

    /**
     * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
     * for this operation will be unreserved on success.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * - `threshold`: The total number of approvals for this dispatch before it is executed.
     * - `other_signatories`: The accounts (other than the sender) who can approve this
     * dispatch. May not be empty.
     * - `timepoint`: The timepoint (block number and transaction index) of the first approval
     * transaction for this dispatch.
     * - `call_hash`: The hash of the call to be executed.
     * 
     * ## Complexity
     * - `O(S)`.
     * - Up to one balance-reserve or unreserve operation.
     * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
     *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
     * - One encode & hash, both of complexity `O(S)`.
     * - One event.
     * - I/O: 1 read `O(S)`, one remove.
     * - Storage: removes one item.
     */
    get asMatrixEnjinV603(): {threshold: number, otherSignatories: Uint8Array[], timepoint: matrixEnjinV603.Timepoint, callHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class OrmlXcmSendAsSovereignCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'OrmlXcm.send_as_sovereign')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '9c814457e6c06e355f17d8e2e59924a734ef38dfc7852490ba89fd5b845b6f48'
    }

    /**
     * Send an XCM message as parachain sovereign.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, message: matrixEnjinV603.VersionedXcm} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemAuthorizeUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.authorize_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '5c55d10848d503323d2e442c7afe37bb9673cbd625584442853911cb797f840c'
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get asMatrixEnjinV603(): {codeHash: Uint8Array, checkVersion: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    get isV500(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
    }

    get asV500(): {codeHash: Uint8Array} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '5c55d10848d503323d2e442c7afe37bb9673cbd625584442853911cb797f840c'
    }

    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    get asV602(): {codeHash: Uint8Array, checkVersion: boolean} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemEnactAuthorizedUpgradeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.enact_authorized_upgrade')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     * 
     * If the authorization required a version check, this call will ensure the spec name
     * remains unchanged and that the spec version has increased.
     * 
     * Note that this function will not apply the new `code`, but only attempt to schedule the
     * upgrade with the Relay Chain.
     * 
     * All origins are allowed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     * 
     * If the authorization required a version check, this call will ensure the spec name
     * remains unchanged and that the spec version has increased.
     * 
     * Note that this function will not apply the new `code`, but only attempt to schedule the
     * upgrade with the Relay Chain.
     * 
     * All origins are allowed.
     */
    get asMatrixEnjinV603(): {code: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSetValidationDataCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.set_validation_data')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ParachainSystem.set_validation_data') === 'df843f97e4c625e033541d5f205c5889f3131bdb4549570310e924d96769c1cd'
    }

    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    get asMatrixEnjinV603(): {data: matrixEnjinV603.ParachainInherentData} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class ParachainSystemSudoSendUpwardMessageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'ParachainSystem.sudo_send_upward_message')
        this._chain = ctx._chain
        this.call = call
    }

    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
    }

    get asMatrixEnjinV603(): {message: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.execute') === 'a1da862b5d9db8fd6f3072da00ea4e66052f97b5dcfb87e58d49ca1fd1f1ef90'
    }

    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    get asMatrixEnjinV603(): {message: matrixEnjinV603.Type_353, maxWeight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceDefaultXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_default_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
    }

    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    get asMatrixEnjinV603(): {maybeXcmVersion: (number | undefined)} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_subscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    get asMatrixEnjinV603(): {location: matrixEnjinV603.VersionedMultiLocation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceSuspensionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_suspension')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_suspension') === '8ed7e51efeeeccee1e0e2e2dca71da38a9e5bdab470452a56d790711652babc1'
    }

    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    get asMatrixEnjinV603(): {suspended: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceUnsubscribeVersionNotifyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_unsubscribe_version_notify')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === '0448b7eed1a6d9cd0a489ea792df94cc3ce5a37e203f19b1a5a0c4516a8d696c'
    }

    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    get asMatrixEnjinV603(): {location: matrixEnjinV603.VersionedMultiLocation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmForceXcmVersionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.force_xcm_version')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '998b5a56e7662d76955b41c2526c2219fe8304fec6501afa115db1bd705e7ff6'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asMatrixEnjinV603(): {location: matrixEnjinV603.V3MultiLocation, xcmVersion: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '33e59692e1de10110f93243ea23af786f87880b56e0ff4d528e142455c6b1bd9'
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get asMatrixEnjinV1004(): {location: matrixEnjinV1004.V3MultiLocation, version: number} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '998b5a56e7662d76955b41c2526c2219fe8304fec6501afa115db1bd705e7ff6'
    }

    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be Root.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    get asV500(): {location: v500.V3MultiLocation, xcmVersion: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '33e59692e1de10110f93243ea23af786f87880b56e0ff4d528e142455c6b1bd9'
    }

    /**
     * See [`Pallet::force_xcm_version`].
     */
    get asV1004(): {location: v1004.V3MultiLocation, version: number} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, beneficiary: matrixEnjinV603.VersionedMultiLocation, assets: matrixEnjinV603.VersionedMultiAssets, feeAssetItem: number, weightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmLimitedTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.limited_teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === 'c5f45c1775bd92c7b425f46c92a6891334f7df5ae2518cd2c0a106447da3bbd9'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, beneficiary: matrixEnjinV603.VersionedMultiLocation, assets: matrixEnjinV603.VersionedMultiAssets, feeAssetItem: number, weightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmReserveTransferAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.reserve_transfer_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, beneficiary: matrixEnjinV603.VersionedMultiLocation, assets: matrixEnjinV603.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmSendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.send')
        this._chain = ctx._chain
        this.call = call
    }

    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.send') === '9c814457e6c06e355f17d8e2e59924a734ef38dfc7852490ba89fd5b845b6f48'
    }

    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, message: matrixEnjinV603.VersionedXcm} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PolkadotXcmTeleportAssetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'PolkadotXcm.teleport_assets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('PolkadotXcm.teleport_assets') === 'ebd99cece75c1b0fc48830527bc513cf672b8d0c6c0c505498bba5c8c5e1617c'
    }

    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    get asMatrixEnjinV603(): {dest: matrixEnjinV603.VersionedMultiLocation, beneficiary: matrixEnjinV603.VersionedMultiLocation, assets: matrixEnjinV603.VersionedMultiAssets, feeAssetItem: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PoolsMutatePoolsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Pools.mutate_pools')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Mutate the pools. Can only be called by root.
     * 
     * # Errors
     * 
     * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Pools.mutate_pools') === '59397bde495bc4bf6e9ce90d9d117f187d090806cb3f83eb4b3669141aabffed'
    }

    /**
     * Mutate the pools. Can only be called by root.
     * 
     * # Errors
     * 
     * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
     */
    get asMatrixEnjinV603(): {mutation: matrixEnjinV603.PoolsMutation} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asMatrixEnjinV603(): {bytes: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnnotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unnote_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     * 
     * If `len` is provided, then it will be a much cheaper operation.
     * 
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear an unrequested preimage from the runtime storage.
     * 
     * If `len` is provided, then it will be a much cheaper operation.
     * 
     * - `hash`: The hash of the preimage to be removed from the store.
     * - `len`: The length of the preimage of `hash`.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageUnrequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.unrequest_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Clear a previously made request for a preimage.
     * 
     * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
     */
    get asMatrixEnjinV603(): {hash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
    }

    /**
     * Cancel an anonymously scheduled task.
     */
    get asMatrixEnjinV603(): {when: number, index: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerCancelNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.cancel_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel a named scheduled task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.cancel_named') === '2a01c4c05d6bf45e0dc267bd7f6e27df3b3e4b23af7982734357c4de87ef690c'
    }

    /**
     * Cancel a named scheduled task.
     */
    get asMatrixEnjinV603(): {id: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '9ead51e8789a3137eb65ffd312030d985839acb65959af94d041ddb3641c275e'
    }

    /**
     * Anonymously schedule a task.
     */
    get asMatrixEnjinV603(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '7f329625ae623fd003651acd6bf08e3d31050b1cecbf2408f0d4433724f9a9d1'
    }

    /**
     * Anonymously schedule a task.
     */
    get asMatrixEnjinV1000(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === 'fc09eddb6d91c7b8bad72f7a6375412a4e833c2ad298540e721a84c11d3ef09e'
    }

    /**
     * Anonymously schedule a task.
     */
    get asMatrixEnjinV1003(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '01521ef93b16536d992eaec53cf1ea85625ec234d60bc0672da1181c7a89a370'
    }

    /**
     * See [`Pallet::schedule`].
     */
    get asMatrixEnjinV1004(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '6b5b00362b6e8ab49ccce9efed96fa17584732dae6bf66e4c0002de6ddccbdbf'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV500(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '937ede4d532becdf78680b0a2aad5c5ae0a9f8e015181140900c26530883e0e4'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV600(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '274e0ddf3b350286fb916d8a27bb459cdd43a7e9cd94f8af3e4bf5fc38928281'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV601(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '4341d2e25d51b16df59944be395bc67a56b8903ec5e8d9482e3bca6569fc0272'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV602(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '9ead51e8789a3137eb65ffd312030d985839acb65959af94d041ddb3641c275e'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV604(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '60cb5c00a4d06cbe0fe792b254c2fb080758bcc28dfb4860011965a3ca435ca2'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV1000(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '3e97b01723c3ebc01f40e6c3a105c01e499d416980cd50aedbccdfe1fac83db3'
    }

    /**
     * Anonymously schedule a task.
     */
    get asV1003(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule') === '7d44d1a1e3c8c1e50b36d6b71865f4428fbc376a4a1d9df2fd687f0d4becfd61'
    }

    /**
     * See [`Pallet::schedule`].
     */
    get asV1004(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'db1dd1a974333e3537ef8a7e9be7a7b3dff3645ba0fa5fec6f24a4abb9fb13d2'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asMatrixEnjinV603(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'e527e6948e1df4546798e8df19338e0b5ad5ee39729c2030b0770a7e1a457a98'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asMatrixEnjinV1000(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'cf6f15e7b1ad9ca1aaabd41aab7e4a9ba187b98441ebcf6803ecd6542f5de498'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asMatrixEnjinV1003(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_after`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'a1bb0f6c5477220c7fcf22c173466327ce9e17302bbc7fd25a856d5140cd3650'
    }

    /**
     * See [`Pallet::schedule_after`].
     */
    get asMatrixEnjinV1004(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'd7c2bd45ed135abbcb449f7d587b5e33a97cf60617a3186310d4fede20de17f3'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV500(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'c9d112c0db88d4e54c5ad790f9bc634de26644846f185a1576298b984e66e4bd'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV600(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'db5a422a240b35f05e86e99d3597fca715d3ed4fbcd1479473e19fe22123e87a'
    }

    /**
     * Anonymously schedule a task after a delay.
     * 
     * # <weight>
     * Same as [`schedule`].
     * # </weight>
     */
    get asV601(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '01602d72688debf53ae292218fab46efbd0b5ee1643f4e82371323753a065a58'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asV602(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'db1dd1a974333e3537ef8a7e9be7a7b3dff3645ba0fa5fec6f24a4abb9fb13d2'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asV604(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '6d696c8c4c3da27f5eb8af14d1fda4fa4569a1b587a483ed45ba249b7daf3517'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asV1000(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === '7927529f4489056e5eedcef109ffa4c801545c086f6f008eef5c20599a13031c'
    }

    /**
     * Anonymously schedule a task after a delay.
     */
    get asV1003(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_after`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_after') === 'ab1361c40bf41a04854c3c6373a153b3fa6707be4fdb39c9f50e89e6cde1040c'
    }

    /**
     * See [`Pallet::schedule_after`].
     */
    get asV1004(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'ff2f6192f36378a16f209b59270981bff1b4af822548f815e44f8059cf8d13cf'
    }

    /**
     * Schedule a named task.
     */
    get asMatrixEnjinV603(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'beddeee68109fc77fb091809eaa3317ca0ca597596687065c3da1f76eca3becb'
    }

    /**
     * Schedule a named task.
     */
    get asMatrixEnjinV1000(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '58cb9ac696f6224c3105520f25368eababad88f8e30a2b3dffdc34f276480446'
    }

    /**
     * Schedule a named task.
     */
    get asMatrixEnjinV1003(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_named`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'b9eb8ceb34d33ca18af5d5f09987ef2a557d345e1428819d2ce1d97bf74cf23f'
    }

    /**
     * See [`Pallet::schedule_named`].
     */
    get asMatrixEnjinV1004(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'a769574b7ca2ea2e82898d0ba8c54e1ed628ecc5e784f7372c06644f51be4911'
    }

    /**
     * Schedule a named task.
     */
    get asV500(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '1f1f0b701922d8f559cb7b7000bd51de0c3431b92f1e5d4e10c8e041301b4268'
    }

    /**
     * Schedule a named task.
     */
    get asV600(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '5a7ebcffc466dda19795055512f20e3e1e2e39b1ef67d72625c7932fe5366c59'
    }

    /**
     * Schedule a named task.
     */
    get asV601(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '4bc1685061026102f1434d99fff5d061999e935ccc51cfcdd6cb7bf2dfaf76b1'
    }

    /**
     * Schedule a named task.
     */
    get asV602(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'ff2f6192f36378a16f209b59270981bff1b4af822548f815e44f8059cf8d13cf'
    }

    /**
     * Schedule a named task.
     */
    get asV604(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'eb176bf4c8ea9fe98286e5a219e5571429969521f54fa5cc46a00efd763f7254'
    }

    /**
     * Schedule a named task.
     */
    get asV1000(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === '350214c8f28dd4d694b7c1ba23392aaae194062d0076273d5a1e474863216b9c'
    }

    /**
     * Schedule a named task.
     */
    get asV1003(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_named`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named') === 'ea3c5699460c0c8181b8b2b122067a9d1f85055ed3f7e65159a439fca6d5cd72'
    }

    /**
     * See [`Pallet::schedule_named`].
     */
    get asV1004(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SchedulerScheduleNamedAfterCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Scheduler.schedule_named_after')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Schedule a named task after a delay.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'e23744413dedb66d248707e0bb955cda96bc3ce3724aaaf5270aa6ee579c2cca'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asMatrixEnjinV603(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '1c40a76f1d411f5e9af26ecc978d89eb1e5ab76c848f75ef69d272a2ed2c4c72'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asMatrixEnjinV1000(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '587e593dc28540a462370349b9b8ce58c19fbe122202f60b635f7caba1fc6c99'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asMatrixEnjinV1003(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_named_after`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '7c35badf773b349d79f06e4b2e494691f7202f9e0e39fc1257039ccbcf098b64'
    }

    /**
     * See [`Pallet::schedule_named_after`].
     */
    get asMatrixEnjinV1004(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'f0daa779f3a8b736abee47f049b9ca1f41fdcefdaf18bc6c52854d3f3d39f315'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV500(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '5ae8c3cc677a001e7274aae46557c405a44f8cbcc8623107fee478b36c004642'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV600(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '46bf91ec8f35d4d8216223c8db0e82ee4eb726b0418d9b850eb627f6c2e4ca07'
    }

    /**
     * Schedule a named task after a delay.
     * 
     * # <weight>
     * Same as [`schedule_named`](Self::schedule_named).
     * # </weight>
     */
    get asV601(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '74eb740d000b4b8829f6658865b2000ed9d0823a4f44082c2ac72378ce19fca3'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asV602(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'e23744413dedb66d248707e0bb955cda96bc3ce3724aaaf5270aa6ee579c2cca'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asV604(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === '2b83a75682fb1e9525fce9c22bcb598b82c0b42a9390f259b2ec4f7ca5158763'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asV1000(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Schedule a named task after a delay.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'b9700654477363ca6c216c428ab76525482b57a91dce95d4c6768b47362fbdc4'
    }

    /**
     * Schedule a named task after a delay.
     */
    get asV1003(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::schedule_named_after`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Scheduler.schedule_named_after') === 'e39253cc7a4173d10af1fc9fc3d6bef197e90234ba41c96b43e0e247657953ee'
    }

    /**
     * See [`Pallet::schedule_named_after`].
     */
    get asV1004(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionPurgeKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.purge_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * ## Complexity
     * - `O(1)` in number of key types. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Session.purge_keys') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Removes any session key(s) of the function caller.
     * 
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be Signed and the account must be either be
     * convertible to a validator ID using the chain's typical addressing system (this usually
     * means being a controller account) or directly convertible into a validator ID (which
     * usually means being a stash account).
     * 
     * ## Complexity
     * - `O(1)` in number of key types. Actual cost depends on the number of length of
     *   `T::Keys::key_ids()` which is fixed.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SessionSetKeysCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Session.set_keys')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * ## Complexity
     * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
     *   fixed.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Session.set_keys') === 'addd7c626f9aa937cd1834dc66bd024e3ceb303e43e64ebf3d8d267053cff2b5'
    }

    /**
     * Sets the session key(s) of the function caller to `keys`.
     * Allows an account to set its session key prior to becoming a validator.
     * This doesn't take effect until the next session.
     * 
     * The dispatch origin of this function must be signed.
     * 
     * ## Complexity
     * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
     *   fixed.
     */
    get asMatrixEnjinV603(): {keys: matrixEnjinV603.SessionKeys, proof: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSetKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.set_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.set_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
     * key.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB change.
     * # </weight>
     */
    get asV500(): {new: v500.MultiAddress} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'dc6a960e485548d27a1905ecd7699e6e72ce591ec0211a03a455e8ac78006198'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV500(): {call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '34015a629e6ca020d2f9645cc017ec5ce3c7c25c2bf5b589826a2a2592dff26c'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV600(): {call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'ea350d4ed27fd053d26a50a70d9c6c3f428ca20cdf1858ee0b34ab93dfe62bec'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV601(): {call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === 'f2b9b4f3f2e8201567112690b1bb594f3e2ec38535701b4aa70351c8e1dc0a0b'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '12106f9ed1f5248258270db7211d53c625198b8ca6bb01aeb84217318f035864'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1000(): {call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '5b5a617cbc5ac8e40912ee9028df183479eb0fb170ff840dfc627e81f3a8edb7'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1003(): {call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Sudo.sudo') === '6815de3537400b65a003f5cdae18149ad353b8db40d8b47ed589350426bf07c3'
    }

    /**
     * See [`Pallet::sudo`].
     */
    get asV1004(): {call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '1d36d1ca78fd4b0b832eacf54f1bb1947723a6ab5601b863a49b289bdc0e9fe3'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV500(): {who: v500.MultiAddress, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '5de48594210248660cb6358aa0e5a62ab51858e25c1589a7e3ddf614da6afec0'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV600(): {who: v600.MultiAddress, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '62ac10da47d3f5018c9e380b05c897e8e0917d4f2aac08ebd23efc2916a8de07'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + 10,000.
     * # </weight>
     */
    get asV601(): {who: v601.MultiAddress, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '049919f288320607463893e5c6bddca5fd01295fdc6fd664b9b16c7adc001953'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {who: v602.MultiAddress, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === 'ea47c5a52a696d5599287acf910e31ed703eecdd6962b57dab4308ae314e48ae'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1000(): {who: v1000.MultiAddress, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '3d753fdeb1b5a3ff139caafb72ca27debfe5fe1c464672ee1af7979fe17d0dcb'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1003(): {who: v1003.MultiAddress, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo_as`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Sudo.sudo_as') === '47c59476ba1b4dd0062d98b7f17391a30793056be09aeac74f6ca8fcc804e991'
    }

    /**
     * See [`Pallet::sudo_as`].
     */
    get asV1004(): {who: v1004.MultiAddress, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SudoSudoUncheckedWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Sudo.sudo_unchecked_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '15b86c403edea0d4d0985082b714f1ef80d8d68858c939cc34cb14ab43e96f0a'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV500(): {call: v500.Call, weight: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'b07e895ad1405b4f44d26aa90ee79296b038768c876f98f7c0529835566ff9bc'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV600(): {call: v600.Call, weight: v600.Weight} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '43efb9f5a3014ebfbd711fdca91967e5843c81504ab5e18cbc2a2b5b6e869973'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * # <weight>
     * - O(1).
     * - The weight of this call is defined by the caller.
     * # </weight>
     */
    get asV601(): {call: v601.Call, weight: v601.Weight} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '7eb0ab00c2f612a07bb7e31c065ec4cce63666967eecd7b73baddf70dcc17adf'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {call: v602.Call, weight: v602.Weight} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'cfc16698d47584af87d3ec954d1d0b9689c20ce105b42079dd74f97ba8e5d628'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1000(): {call: v1000.Call, weight: v1000.Weight} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'faa7e558ad7dd37c34b0b9d3e28b364f50b3229e8a8489e3300c0892d6e52b3f'
    }

    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * This function does not check the weight of the call, and instead allows the
     * Sudo user to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1003(): {call: v1003.Call, weight: v1003.Weight} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '4f6535e3afc80564afce51a0a0ed31a035fb405bffe13574b0664a94d625d996'
    }

    /**
     * See [`Pallet::sudo_unchecked_weight`].
     */
    get asV1004(): {call: v1004.Call, weight: v1004.Weight} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillPrefixCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_prefix')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
    }

    /**
     * Kill all storage items with a key that starts with the given prefix.
     * 
     * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
     * the prefix we are removing to accurately calculate the weight of this function.
     */
    get asMatrixEnjinV603(): {prefix: Uint8Array, subkeys: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemKillStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.kill_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Kill some items from storage.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
    }

    /**
     * Kill some items from storage.
     */
    get asMatrixEnjinV603(): {keys: Uint8Array[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark.
     * 
     * - `O(1)`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark.
     * 
     * - `O(1)`
     */
    get asMatrixEnjinV603(): {remark: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemRemarkWithEventCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.remark_with_event')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
    }

    /**
     * Make some on-chain remark and emit event.
     */
    get asMatrixEnjinV603(): {remark: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code.
     */
    get asMatrixEnjinV603(): {code: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetCodeWithoutChecksCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_code_without_checks')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
    }

    /**
     * Set the new runtime code without doing any checks of the given `code`.
     */
    get asMatrixEnjinV603(): {code: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetHeapPagesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_heap_pages')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
    }

    /**
     * Set the number of pages in the WebAssembly environment's heap.
     */
    get asMatrixEnjinV603(): {pages: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class SystemSetStorageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'System.set_storage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set some items of storage.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
    }

    /**
     * Set some items of storage.
     */
    get asMatrixEnjinV603(): {items: [Uint8Array, Uint8Array][]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * ## Complexity
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close') === 'a88911953f51bddf0f0aeafa7caa7ca904d30cdb24f940ff177d2acf7088d3bd'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * ## Complexity
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array, index: number, proposalWeightBound: matrixEnjinV603.Weight, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeCloseOldWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.close_old_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.close_old_weight') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
    }

    /**
     * Close a vote that is either approved, disapproved or whose voting period has ended.
     * 
     * May be called by any signed account in order to finish voting and close the proposal.
     * 
     * If called before the end of the voting period it will only close the vote if it is
     * has enough votes to be approved or disapproved.
     * 
     * If called after the end of the voting period abstentions are counted as rejections
     * unless there is a prime member set and the prime member cast an approval.
     * 
     * If the close operation completes successfully with disapproval, the transaction fee will
     * be waived. Otherwise execution of the approved operation will be charged to the caller.
     * 
     * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
     * proposal.
     * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
     * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1 + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - `P1` is the complexity of `proposal` preimage.
     *   - `P2` is proposal-count (code-bounded)
     * - DB:
     *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
     *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
     *    `O(P2)`)
     *  - any mutations done while executing `proposal` (`P1`)
     * - up to 3 events
     * # </weight>
     */
    get asV500(): {proposalHash: Uint8Array, index: number, proposalWeightBound: bigint, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeDisapproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.disapprove_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * ## Complexity
     * O(P) where P is the number of max proposals
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.disapprove_proposal') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
    }

    /**
     * Disapprove a proposal, close, and remove it from the system, regardless of its current
     * state.
     * 
     * Must be called by the Root origin.
     * 
     * Parameters:
     * * `proposal_hash`: The hash of the proposal that should be disapproved.
     * 
     * ## Complexity
     * O(P) where P is the number of max proposals
     */
    get asMatrixEnjinV603(): {proposalHash: Uint8Array} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeExecuteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.execute')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '42e02516da5b061d1088373ba15312fb75350b4c460c86553b77632c49a1bfff'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV603(): {proposal: matrixEnjinV603.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '0528eb882b25dbc861bdb3dd23bf719192247ea0286b4ba762894271e9b24340'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV1000(): {proposal: matrixEnjinV1000.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '8436778e072de5fd031e538ef23b88424ea15c5d94208a400f13f01159fbfb00'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asMatrixEnjinV1003(): {proposal: matrixEnjinV1003.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::execute`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'e633d49269837529f129474119662469bb21f8c2c63f10dcf44f4e913f0dfc1b'
    }

    /**
     * See [`Pallet::execute`].
     */
    get asMatrixEnjinV1004(): {proposal: matrixEnjinV1004.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b1684a10f9b4cbd7534a667396ce6712277f00f197eb4426bdcfed491ee864b7'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV500(): {proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'd6901228f970a7ae2b377b38ce7fcbcc5ca8e570b8bb8a9074c730eb13c496e3'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV600(): {proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'b28b68a3dd66badc21cb53ab1687c9791a0b29bd28740e3160ea03bcf21db8de'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * # <weight>
     * ## Weight
     * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
     *   `proposal`
     * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
     * - 1 event
     * # </weight>
     */
    get asV601(): {proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV602(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '42200a96ca0ad3184e9591f0d7f5892aff66f9f12198fcb806e1d22b72d800bc'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV602(): {proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV604(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '42e02516da5b061d1088373ba15312fb75350b4c460c86553b77632c49a1bfff'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV604(): {proposal: v604.Call, lengthBound: number} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '81af7dea60315777f8bec229a835af081d1a048e0c634fb8cba2e99e2c2f47df'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV1000(): {proposal: v1000.Call, lengthBound: number} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === '9de811c39530414adcd3368d446d2e212bfa5ab901203473176cb3fa0bebfa75'
    }

    /**
     * Dispatch a proposal from a member using the `Member` origin.
     * 
     * Origin must be a member of the collective.
     * 
     * ## Complexity:
     * - `O(B + M + P)` where:
     * - `B` is `proposal` size in bytes (length-fee-bounded)
     * - `M` members-count (code-bounded)
     * - `P` complexity of dispatching `proposal`
     */
    get asV1003(): {proposal: v1003.Call, lengthBound: number} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::execute`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.execute') === 'c07708a971f426afb0b353296223662e62d412b29f35431934376052ab430b96'
    }

    /**
     * See [`Pallet::execute`].
     */
    get asV1004(): {proposal: v1004.Call, lengthBound: number} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeProposeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.propose')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'ad8e807bb31ab0d0a1cc9796c09abc6d953cde11f68353038cb230910f45f5a9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV603(): {threshold: number, proposal: matrixEnjinV603.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '23bce148208de1a3e941cab0a9183111169beffd2c4b17fa55c77063a17ed2db'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV1000(): {threshold: number, proposal: matrixEnjinV1000.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '0318441ab0a9bd4ab2b6e923b6c88985852689b516a4d2084ccf14caa5f03be6'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asMatrixEnjinV1003(): {threshold: number, proposal: matrixEnjinV1003.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::propose`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '2f617d0b3991e38ad03abe45e87522e45b8b0c331c88237b7cd713911c1a6759'
    }

    /**
     * See [`Pallet::propose`].
     */
    get asMatrixEnjinV1004(): {threshold: number, proposal: matrixEnjinV1004.Call, lengthBound: number} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '0421aa3212da1f969a95c3e263147e221be170c3d71c5640351252a233116229'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV500(): {threshold: number, proposal: v500.Call, lengthBound: number} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '01c6baaf53b5331d0c41f0159db307f3aee5c6491ecfe4c33f046483b348303b'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV600(): {threshold: number, proposal: v600.Call, lengthBound: number} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '4b61433e884dffa8d3067b5a199d91ba1d8ca839a709c084cf267410834076a1'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * # <weight>
     * ## Weight
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     * - DB:
     *   - 1 storage read `is_member` (codec `O(M)`)
     *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
     *   - DB accesses influenced by `threshold`:
     *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
     *     - OR proposal insertion (`threshold <= 2`)
     *       - 1 storage mutation `Proposals` (codec `O(P2)`)
     *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
     *       - 1 storage write `ProposalOf` (codec `O(B)`)
     *       - 1 storage write `Voting` (codec `O(M)`)
     *   - 1 event
     * # </weight>
     */
    get asV601(): {threshold: number, proposal: v601.Call, lengthBound: number} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV602(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '76cf450a5e2cc8f4a9da4604e748109d1a44da950b89749a9b498ecc46913f7c'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV602(): {threshold: number, proposal: v602.Call, lengthBound: number} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV604(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'ad8e807bb31ab0d0a1cc9796c09abc6d953cde11f68353038cb230910f45f5a9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV604(): {threshold: number, proposal: v604.Call, lengthBound: number} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === 'c9def943b81a72581eaa55a42fa97a30131ff314a5cc2458ad46de9664a43780'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV1000(): {threshold: number, proposal: v1000.Call, lengthBound: number} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '22dc7bee22aa4eda8ff75dbd66f5ec6597086c5275c7dae9b99b98cfce675db9'
    }

    /**
     * Add a new proposal to either be voted on or executed directly.
     * 
     * Requires the sender to be member.
     * 
     * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
     * or put up for voting.
     * 
     * ## Complexity
     * - `O(B + M + P1)` or `O(B + M + P2)` where:
     *   - `B` is `proposal` size in bytes (length-fee-bounded)
     *   - `M` is members-count (code- and governance-bounded)
     *   - branching is influenced by `threshold` where:
     *     - `P1` is proposal execution complexity (`threshold < 2`)
     *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
     */
    get asV1003(): {threshold: number, proposal: v1003.Call, lengthBound: number} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::propose`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.propose') === '3e0ae74604312666aca6316d80304ce22a129d81804542a6568fbc5ad75e7d42'
    }

    /**
     * See [`Pallet::propose`].
     */
    get asV1004(): {threshold: number, proposal: v1004.Call, lengthBound: number} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeSetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.set_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * The dispatch of this call must be `SetMembersOrigin`.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * ## Complexity:
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.set_members') === '71b7fcb1d8a62eff96a9ef006517578ce9189e6d931948a256a04ca75ff68d4a'
    }

    /**
     * Set the collective's membership.
     * 
     * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
     * - `prime`: The prime member whose vote sets the default.
     * - `old_count`: The upper bound for the previous number of members in storage. Used for
     *   weight estimation.
     * 
     * The dispatch of this call must be `SetMembersOrigin`.
     * 
     * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
     *       the weight estimations rely on it to estimate dispatchable weight.
     * 
     * # WARNING:
     * 
     * The `pallet-collective` can also be managed by logic outside of the pallet through the
     * implementation of the trait [`ChangeMembers`].
     * Any call to `set_members` must be careful that the member set doesn't get out of sync
     * with other logic managing the member set.
     * 
     * ## Complexity:
     * - `O(MP + N)` where:
     *   - `M` old-members-count (code- and governance-bounded)
     *   - `N` new-members-count (code- and governance-bounded)
     *   - `P` proposals-count (code-bounded)
     */
    get asMatrixEnjinV603(): {newMembers: Uint8Array[], prime: (Uint8Array | undefined), oldCount: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalCommitteeVoteCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalCommittee.vote')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * ## Complexity
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalCommittee.vote') === 'f8a1069a57f7b721f47c086d08b6838ae1a0c08f58caddb82428ba5f1407540f'
    }

    /**
     * Add an aye or nay vote for the sender to the given proposal.
     * 
     * Requires the sender to be a member.
     * 
     * Transaction fees will be waived if the member is voting on any particular proposal
     * for the first time and the call is successful. Subsequent vote changes will charge a
     * fee.
     * ## Complexity
     * - `O(M)` where `M` is members-count (code- and governance-bounded)
     */
    get asMatrixEnjinV603(): {proposal: Uint8Array, index: number, approve: boolean} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipAddMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.add_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.add_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Add a member `who` to the set.
     * 
     * May only be called from `T::AddOrigin`.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipChangeKeyCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.change_key')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.change_key') === 'e634aac3331d47a56ff572c52ad90a648769dfbf2c00d7bd44498b4ee41f6ac7'
    }

    /**
     * Swap out the sending member for some other key `new`.
     * 
     * May only be called from `Signed` origin of a current member.
     * 
     * Prime membership is passed from the origin account to `new`, if extant.
     */
    get asMatrixEnjinV603(): {new: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipClearPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.clear_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Remove the prime member if it exists.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipRemoveMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.remove_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.remove_member') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Remove a member `who` from the set.
     * 
     * May only be called from `T::RemoveOrigin`.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipResetMembersCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.reset_members')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
    }

    /**
     * Change the membership to a new set, disregarding the existing membership. Be nice and
     * pass `members` pre-sorted.
     * 
     * May only be called from `T::ResetOrigin`.
     */
    get asMatrixEnjinV603(): {members: Uint8Array[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSetPrimeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.set_prime')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.set_prime') === '1642934df325db16ad3ad3f83bb2200cdde93b508c653dc7b78049e7e8d67223'
    }

    /**
     * Set the prime member. Must be a current member.
     * 
     * May only be called from `T::PrimeOrigin`.
     */
    get asMatrixEnjinV603(): {who: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TechnicalMembershipSwapMemberCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'TechnicalMembership.swap_member')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('TechnicalMembership.swap_member') === '5efd724fae29eef6393e039bf2dbfd2d5a3081770cc9cc8a80a1475fd6b40cf4'
    }

    /**
     * Swap out one member `remove` for another `add`.
     * 
     * May only be called from `T::SwapOrigin`.
     * 
     * Prime membership is *not* passed from `remove` to `add`, if extant.
     */
    get asMatrixEnjinV603(): {remove: matrixEnjinV603.MultiAddress, add: matrixEnjinV603.MultiAddress} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class TimestampSetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Timestamp.set')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * ## Complexity
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Timestamp.set') === '6a8b8ba2be107f0853b674eec0026cc440b314db44d0e2c59b36e353355aed14'
    }

    /**
     * Set the current time.
     * 
     * This call should be invoked exactly once per block. It will panic at the finalization
     * phase, if this call hasn't been invoked by that time.
     * 
     * The timestamp should be greater than the previous one by the amount specified by
     * `MinimumPeriod`.
     * 
     * The dispatch origin for this call must be `Inherent`.
     * 
     * ## Complexity
     * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
     * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
     *   `on_finalize`)
     * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
     */
    get asMatrixEnjinV603(): {now: bigint} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityAsDerivativeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.as_derivative')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'a6ae93fcb456424eefc936c15801ab836f49a590a3d77b87ecdb3c6024840134'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asMatrixEnjinV603(): {index: number, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '487f4870b0fda45284651efd6ea18d1bcacdc401105e906a0d9e8bb4c5165898'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asMatrixEnjinV1000(): {index: number, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '96918109d90c288af1063d682c608fa1af280c82d7800a83673f69e78fadcf30'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asMatrixEnjinV1003(): {index: number, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '32f3d17aa65298627ef5e97c7502a859c5b4a1b079bb027d50bbaa6e208bba7b'
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get asMatrixEnjinV1004(): {index: number, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '8228a867ebef820abe86288abff2f2e9d268d9dccb2584ea45bd75d68bfe4bc6'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV500(): {index: number, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '1147bd5154a11c00b937d0fca1a2b3acb0c06adcb00fda9223a70bb4e8cb6e6b'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV600(): {index: number, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '41703a82485ae02a56541e3acba156cae26fe3522e64e72826e528de96dd5e74'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV601(): {index: number, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '777c66328007a5bd1015c953dd7e098af367a050f49bd831a747761a3150de2b'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV602(): {index: number, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'a6ae93fcb456424eefc936c15801ab836f49a590a3d77b87ecdb3c6024840134'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV604(): {index: number, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '59243ca3633142fbecca5f7a0c52bc96e43269beae54899f03a33c968127e261'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV1000(): {index: number, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === '510bf6455d65c1172d35d949113aec100486f423dcdca0478f889fae8bd83a0b'
    }

    /**
     * Send a call through an indexed pseudonym of the sender.
     * 
     * Filter from origin are passed along. The call will be dispatched with an origin which
     * use the same filter as the origin of this call.
     * 
     * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
     * because you expect `proxy` to have been used prior in the call stack and you do not want
     * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
     * in the Multisig pallet instead.
     * 
     * NOTE: Prior to version *12, this was called `as_limited_sub`.
     * 
     * The dispatch origin for this call must be _Signed_.
     */
    get asV1003(): {index: number, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.as_derivative') === 'a924065b472ce01a6be2dc79efb33d6599f7d529c67d9bf60f19940d88815508'
    }

    /**
     * See [`Pallet::as_derivative`].
     */
    get asV1004(): {index: number, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asMatrixEnjinV603(): {calls: matrixEnjinV603.Call[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.batch') === '6943cec7e7f8904c41fe228dd3d064d18021f19c2eaf3bbacbf2c98a8725d94b'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asMatrixEnjinV1000(): {calls: matrixEnjinV1000.Call[]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a3efd343b618281196a70a4fcc7d78e60971f46d785bc24380c11d8d0f09f714'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asMatrixEnjinV1003(): {calls: matrixEnjinV1003.Call[]} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'aa322012eca841f80de303f7d17dd9fd2f432bd77d48be35db772f07247bc955'
    }

    /**
     * See [`Pallet::batch`].
     */
    get asMatrixEnjinV1004(): {calls: matrixEnjinV1004.Call[]} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.batch') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV604(): {calls: v604.Call[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'b438a23b9d4bcebb894e3fd2a1680c649be50f42f539b7df44717365aa74b535'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV1000(): {calls: v1000.Call[]} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'c880364f919640484ef43e6c6025d5b4defc9a50b0630057e10645b9179fdc2f'
    }

    /**
     * Send a batch of dispatch calls.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     * 
     * This will return `Ok` in all circumstances. To determine the success of the batch, an
     * event is deposited. If a call failed and the batch was interrupted, then the
     * `BatchInterrupted` event is deposited, along with the number of successful calls made
     * and the error of the failed call. If all were successful, then the `BatchCompleted`
     * event is deposited.
     */
    get asV1003(): {calls: v1003.Call[]} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.batch') === 'bb55919c71f9bea55a2a86b1bc1d5d7cbe3600d9597ad71f7724c4f8658a5a24'
    }

    /**
     * See [`Pallet::batch`].
     */
    get asV1004(): {calls: v1004.Call[]} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityBatchAllCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.batch_all')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV603(): {calls: matrixEnjinV603.Call[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '6943cec7e7f8904c41fe228dd3d064d18021f19c2eaf3bbacbf2c98a8725d94b'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV1000(): {calls: matrixEnjinV1000.Call[]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a3efd343b618281196a70a4fcc7d78e60971f46d785bc24380c11d8d0f09f714'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV1003(): {calls: matrixEnjinV1003.Call[]} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'aa322012eca841f80de303f7d17dd9fd2f432bd77d48be35db772f07247bc955'
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get asMatrixEnjinV1004(): {calls: matrixEnjinV1004.Call[]} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV604(): {calls: v604.Call[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'b438a23b9d4bcebb894e3fd2a1680c649be50f42f539b7df44717365aa74b535'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV1000(): {calls: v1000.Call[]} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'c880364f919640484ef43e6c6025d5b4defc9a50b0630057e10645b9179fdc2f'
    }

    /**
     * Send a batch of dispatch calls and atomically execute them.
     * The whole transaction will rollback and fail if any of the calls failed.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatched without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV1003(): {calls: v1003.Call[]} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.batch_all') === 'bb55919c71f9bea55a2a86b1bc1d5d7cbe3600d9597ad71f7724c4f8658a5a24'
    }

    /**
     * See [`Pallet::batch_all`].
     */
    get asV1004(): {calls: v1004.Call[]} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityDispatchAsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.dispatch_as')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '53c74e412a2c7715329a8d9a5a1b15e10305868b02d52458849757df55fbd0d0'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV603(): {asOrigin: matrixEnjinV603.OriginCaller, call: matrixEnjinV603.Call} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '7bd527143d49a84cc55caba5507dd4046a89deaf09fe49ff28f2578c919e81be'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV1000(): {asOrigin: matrixEnjinV1000.OriginCaller, call: matrixEnjinV1000.Call} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'fae8b5d3311100f29264cf1593e7fe321d6cece7fd42232993589743245bb052'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asMatrixEnjinV1003(): {asOrigin: matrixEnjinV1003.OriginCaller, call: matrixEnjinV1003.Call} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'f1782e8b5fc4efc4b9797f6a28913bf083eb2b9d42e2ce250b28eda131770445'
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get asMatrixEnjinV1004(): {asOrigin: matrixEnjinV1004.OriginCaller, call: matrixEnjinV1004.Call} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '5646f15c4842be20985720c8c98d33539a96ec7ab1c96cebbd015f55bfe5284e'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV500(): {asOrigin: v500.OriginCaller, call: v500.Call} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c2215b8c58688b20c5c816cb0e425ae942d19e380097162505663cef6c3460fc'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV600(): {asOrigin: v600.OriginCaller, call: v600.Call} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '22172f67822fd04f3d24cfb58e0fffe21b278c6b5cfcce8c228488d1afe6f262'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * # <weight>
     * - O(1).
     * - Limited storage reads.
     * - One DB write (event).
     * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
     * # </weight>
     */
    get asV601(): {asOrigin: v601.OriginCaller, call: v601.Call} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '355e70d82fd1df9fe280bfd74a101b21b8620758f893c035034549df11ca4147'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV602(): {asOrigin: v602.OriginCaller, call: v602.Call} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '53c74e412a2c7715329a8d9a5a1b15e10305868b02d52458849757df55fbd0d0'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV604(): {asOrigin: v604.OriginCaller, call: v604.Call} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '540449618c69e43ad5b7f23d990ec7ba3ab66dd03a17f9743bb7581836ffbd03'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1000(): {asOrigin: v1000.OriginCaller, call: v1000.Call} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === '628079658e057249b17fb4f071f4db2b0fd4048fb28499a301b1f36a654f3a01'
    }

    /**
     * Dispatches a function call with a provided origin.
     * 
     * The dispatch origin for this call must be _Root_.
     * 
     * ## Complexity
     * - O(1).
     */
    get asV1003(): {asOrigin: v1003.OriginCaller, call: v1003.Call} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.dispatch_as') === 'c06a83abab321c237d08c0808c395f438fe7864ae6d1694e1679d500ea818e1f'
    }

    /**
     * See [`Pallet::dispatch_as`].
     */
    get asV1004(): {asOrigin: v1004.OriginCaller, call: v1004.Call} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityForceBatchCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.force_batch')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV603(): {calls: matrixEnjinV603.Call[]} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '6943cec7e7f8904c41fe228dd3d064d18021f19c2eaf3bbacbf2c98a8725d94b'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV1000(): {calls: matrixEnjinV1000.Call[]} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'a3efd343b618281196a70a4fcc7d78e60971f46d785bc24380c11d8d0f09f714'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asMatrixEnjinV1003(): {calls: matrixEnjinV1003.Call[]} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'aa322012eca841f80de303f7d17dd9fd2f432bd77d48be35db772f07247bc955'
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get asMatrixEnjinV1004(): {calls: matrixEnjinV1004.Call[]} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === '77b6387abaaa673a066a11d3d46131e65b783f9a461b86ffea319e50d3cc682c'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV500(): {calls: v500.Call[]} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'a36148a440a88395c9642f65ca9e63d795550ab21b598a88a66327bc41865bcd'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV600(): {calls: v600.Call[]} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'eb21e1c13388f4c532d8f59a1d531280aa72fd3f27c906d0558cec63d6e94380'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * # <weight>
     * - Complexity: O(C) where C is the number of calls to be batched.
     * # </weight>
     */
    get asV601(): {calls: v601.Call[]} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'df0d2425faf8eea0424c70a79ce2869335e38bfeec9c28c3ec2db8b6d60ce3cb'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV602(): {calls: v602.Call[]} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'eb3ad78843bf54214839c3f44256e037b4e4403e22a9563f61476f89d61b709a'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV604(): {calls: v604.Call[]} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'b438a23b9d4bcebb894e3fd2a1680c649be50f42f539b7df44717365aa74b535'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV1000(): {calls: v1000.Call[]} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'c880364f919640484ef43e6c6025d5b4defc9a50b0630057e10645b9179fdc2f'
    }

    /**
     * Send a batch of dispatch calls.
     * Unlike `batch`, it allows errors and won't interrupt.
     * 
     * May be called from any origin except `None`.
     * 
     * - `calls`: The calls to be dispatched from the same origin. The number of call must not
     *   exceed the constant: `batched_calls_limit` (available in constant metadata).
     * 
     * If origin is root then the calls are dispatch without checking origin filter. (This
     * includes bypassing `frame_system::Config::BaseCallFilter`).
     * 
     * ## Complexity
     * - O(C) where C is the number of calls to be batched.
     */
    get asV1003(): {calls: v1003.Call[]} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.force_batch') === 'bb55919c71f9bea55a2a86b1bc1d5d7cbe3600d9597ad71f7724c4f8658a5a24'
    }

    /**
     * See [`Pallet::force_batch`].
     */
    get asV1004(): {calls: v1004.Call[]} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class UtilityWithWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Utility.with_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '6b8fa0c31b033249e6762551824f0cbd1bf3f0ff2a66b52380d09a37c08d8c7e'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asMatrixEnjinV603(): {call: matrixEnjinV603.Call, weight: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isMatrixEnjinV1000(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '2f30217ca1d179414298d09a9d5e229de416ac54977604de88ba6b64fa10c0d7'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asMatrixEnjinV1000(): {call: matrixEnjinV1000.Call, weight: matrixEnjinV1000.Weight} {
        assert(this.isMatrixEnjinV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isMatrixEnjinV1003(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '4a72a559f78e0d3adfb1681bcb1cd024d2325e9744d712bdf2fc95b8bad7caee'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asMatrixEnjinV1003(): {call: matrixEnjinV1003.Call, weight: matrixEnjinV1003.Weight} {
        assert(this.isMatrixEnjinV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'bf39577586ea5ee2ca60417aaa6c0cf9f3375f7983112710b0b20bf770cf14ab'
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get asMatrixEnjinV1004(): {call: matrixEnjinV1004.Call, weight: matrixEnjinV1004.Weight} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '15b86c403edea0d4d0985082b714f1ef80d8d68858c939cc34cb14ab43e96f0a'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV500(): {call: v500.Call, weight: v500.Weight} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV600(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'b07e895ad1405b4f44d26aa90ee79296b038768c876f98f7c0529835566ff9bc'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV600(): {call: v600.Call, weight: v600.Weight} {
        assert(this.isV600)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV601(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '43efb9f5a3014ebfbd711fdca91967e5843c81504ab5e18cbc2a2b5b6e869973'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV601(): {call: v601.Call, weight: v601.Weight} {
        assert(this.isV601)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV602(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '7eb0ab00c2f612a07bb7e31c065ec4cce63666967eecd7b73baddf70dcc17adf'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV602(): {call: v602.Call, weight: v602.Weight} {
        assert(this.isV602)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV604(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '6b8fa0c31b033249e6762551824f0cbd1bf3f0ff2a66b52380d09a37c08d8c7e'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV604(): {call: v604.Call, weight: v604.Weight} {
        assert(this.isV604)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV1000(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'cfc16698d47584af87d3ec954d1d0b9689c20ce105b42079dd74f97ba8e5d628'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV1000(): {call: v1000.Call, weight: v1000.Weight} {
        assert(this.isV1000)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get isV1003(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === 'faa7e558ad7dd37c34b0b9d3e28b364f50b3229e8a8489e3300c0892d6e52b3f'
    }

    /**
     * Dispatch a function call with a specified weight.
     * 
     * This function does not check the weight of the call, and instead allows the
     * Root origin to specify the weight of the call.
     * 
     * The dispatch origin for this call must be _Root_.
     */
    get asV1003(): {call: v1003.Call, weight: v1003.Weight} {
        assert(this.isV1003)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('Utility.with_weight') === '4f6535e3afc80564afce51a0a0ed31a035fb405bffe13574b0664a94d625d996'
    }

    /**
     * See [`Pallet::with_weight`].
     */
    get asV1004(): {call: v1004.Call, weight: v1004.Weight} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '26df7f19916781e6746694066c0d24f7fef9a20367132a192147dc6c414af64c'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {currencyId: matrixEnjinV603.AssetId, amount: bigint, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '280991d74b9dea974ca6c189aa06fca6e43a619e25db1bcf990fe586f90e671f'
    }

    /**
     * See [`Pallet::transfer`].
     */
    get asMatrixEnjinV1004(): {currencyId: matrixEnjinV1004.AssetId, amount: bigint, dest: matrixEnjinV1004.VersionedMultiLocation, destWeightLimit: matrixEnjinV1004.V3WeightLimit} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '26df7f19916781e6746694066c0d24f7fef9a20367132a192147dc6c414af64c'
    }

    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV500(): {currencyId: v500.AssetId, amount: bigint, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer') === '280991d74b9dea974ca6c189aa06fca6e43a619e25db1bcf990fe586f90e671f'
    }

    /**
     * See [`Pallet::transfer`].
     */
    get asV1004(): {currencyId: v1004.AssetId, amount: bigint, dest: v1004.VersionedMultiLocation, destWeightLimit: v1004.V3WeightLimit} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset') === 'a87b2931a2da31f4548173df0d164afbd7f9413f0b0a9373582011906fdc8ac9'
    }

    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {asset: matrixEnjinV603.VersionedMultiAsset, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiasset_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiasset_with_fee') === 'e1673c048436ca84c1278f4f2f8a12456b25e4911f3ec72d0295b843ed7a4c7f'
    }

    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {asset: matrixEnjinV603.VersionedMultiAsset, fee: matrixEnjinV603.VersionedMultiAsset, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMultiassetsCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multiassets')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multiassets') === 'b49a1a3bce05ffe02f0ac5efca4907e6bf7f963113419870a760a3013dc86495'
    }

    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {assets: matrixEnjinV603.VersionedMultiAssets, feeItem: number, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferMulticurrenciesCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_multicurrencies')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'fa576588d6b62b5cf4c7bdd8bee764e1be7fc0c2fbe730e805ffd89ad1a3b1e6'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {currencies: [matrixEnjinV603.AssetId, bigint][], feeItem: number, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '18821dfd0374a56d3dc79d8654499c563af88e724c53d159f9c0c3efe9e4f717'
    }

    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    get asMatrixEnjinV1004(): {currencies: [matrixEnjinV1004.AssetId, bigint][], feeItem: number, dest: matrixEnjinV1004.VersionedMultiLocation, destWeightLimit: matrixEnjinV1004.V3WeightLimit} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === 'fa576588d6b62b5cf4c7bdd8bee764e1be7fc0c2fbe730e805ffd89ad1a3b1e6'
    }

    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV500(): {currencies: [v500.AssetId, bigint][], feeItem: number, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer_multicurrencies') === '18821dfd0374a56d3dc79d8654499c563af88e724c53d159f9c0c3efe9e4f717'
    }

    /**
     * See [`Pallet::transfer_multicurrencies`].
     */
    get asV1004(): {currencies: [v1004.AssetId, bigint][], feeItem: number, dest: v1004.VersionedMultiLocation, destWeightLimit: v1004.V3WeightLimit} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class XTokensTransferWithFeeCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XTokens.transfer_with_fee')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === 'c05a522029f57db9f9e4ceeff8427cc674dd992c069c7798b3625e3d55e588cb'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asMatrixEnjinV603(): {currencyId: matrixEnjinV603.AssetId, amount: bigint, fee: bigint, dest: matrixEnjinV603.VersionedMultiLocation, destWeightLimit: matrixEnjinV603.V3WeightLimit} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_with_fee`].
     */
    get isMatrixEnjinV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '98f2a5917e42498a4c3dfabd5045afc045214f69e02d41401b232b52e0c1c595'
    }

    /**
     * See [`Pallet::transfer_with_fee`].
     */
    get asMatrixEnjinV1004(): {currencyId: matrixEnjinV1004.AssetId, amount: bigint, fee: bigint, dest: matrixEnjinV1004.VersionedMultiLocation, destWeightLimit: matrixEnjinV1004.V3WeightLimit} {
        assert(this.isMatrixEnjinV1004)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get isV500(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === 'c05a522029f57db9f9e4ceeff8427cc674dd992c069c7798b3625e3d55e588cb'
    }

    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    get asV500(): {currencyId: v500.AssetId, amount: bigint, fee: bigint, dest: v500.VersionedMultiLocation, destWeightLimit: v500.V3WeightLimit} {
        assert(this.isV500)
        return this._chain.decodeCall(this.call)
    }

    /**
     * See [`Pallet::transfer_with_fee`].
     */
    get isV1004(): boolean {
        return this._chain.getCallHash('XTokens.transfer_with_fee') === '98f2a5917e42498a4c3dfabd5045afc045214f69e02d41401b232b52e0c1c595'
    }

    /**
     * See [`Pallet::transfer_with_fee`].
     */
    get asV1004(): {currencyId: v1004.AssetId, amount: bigint, fee: bigint, dest: v1004.VersionedMultiLocation, destWeightLimit: v1004.V3WeightLimit} {
        assert(this.isV1004)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueResumeXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.resume_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Resumes all XCM executions for the XCMP queue.
     * 
     * Note that this function doesn't change the status of the in/out bound channels.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueServiceOverweightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.service_overweight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.service_overweight') === '80fae8875bf513efc1e06b7dac547fccfc1e5fc45888cc8afd9b43812cf51bf5'
    }

    /**
     * Services a single overweight XCM.
     * 
     * - `origin`: Must pass `ExecuteOverweightOrigin`.
     * - `index`: The index of the overweight XCM to service
     * - `weight_limit`: The amount of weight that XCM execution may take.
     * 
     * Errors:
     * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
     * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
     * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
     * 
     * Events:
     * - `OverweightServiced`: On success.
     */
    get asMatrixEnjinV603(): {index: bigint, weightLimit: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueSuspendXcmExecutionCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.suspend_xcm_execution')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
    }

    /**
     * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
     * 
     * - `origin`: Must pass `ControllerOrigin`.
     */
    get asMatrixEnjinV603(): null {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateDropThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_drop_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue after which we drop any further
     * messages from the channel.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.drop_threshold`
     */
    get asMatrixEnjinV603(): {new: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateResumeThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_resume_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
     * message sending may recommence after it has been suspended.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.resume_threshold`
     */
    get asMatrixEnjinV603(): {new: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateSuspendThresholdCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_suspend_threshold')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
    }

    /**
     * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
     * suspend their sending.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.suspend_value`
     */
    get asMatrixEnjinV603(): {new: number} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateThresholdWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_threshold_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the amount of remaining weight under which we stop processing messages.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.threshold_weight`
     */
    get asMatrixEnjinV603(): {new: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateWeightRestrictDecayCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_weight_restrict_decay')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrites the speed to which the available weight approaches the maximum weight.
     * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
     */
    get asMatrixEnjinV603(): {new: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}

export class XcmpQueueUpdateXcmpMaxIndividualWeightCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'XcmpQueue.update_xcmp_max_individual_weight')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get isMatrixEnjinV603(): boolean {
        return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '75eef6f2cd3523e44f50db837d1610f4db03539037986ac2704c4a043d58ba81'
    }

    /**
     * Overwrite the maximum amount of weight any individual message may consume.
     * Messages above this weight go into the overweight queue and may only be serviced explicitly.
     * 
     * - `origin`: Must pass `Root`.
     * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
     */
    get asMatrixEnjinV603(): {new: matrixEnjinV603.Weight} {
        assert(this.isMatrixEnjinV603)
        return this._chain.decodeCall(this.call)
    }
}
