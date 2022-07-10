import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result} from './support'
import * as v1 from './v1'
import * as v2 from './v2'
import * as v3 from './v3'

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
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account may be
   * specified.
   * # <weight>
   * - Same as transfer, but additional read and write because the source account is not
   *   assumed to be in the overlay.
   * # </weight>
   */
  get asV1(): {source: v1.MultiAddress, dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
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
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.force_unreserve') === '30bc48977e2a7ad3fc8ac014948ded50fc54886bad9a1f65b02bb64f27d8a6be'
  }

  /**
   * Unreserve some balance from a user by force.
   * 
   * Can only be called by ROOT.
   */
  get asV1(): {who: v1.MultiAddress, amount: bigint} {
    assert(this.isV1)
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
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.set_balance') === 'beb82909d38c015bc075ff8b107e47a02f8772bf5cf681d6cd84ef685e448a8f'
  }

  /**
   * Set the balances of a given account.
   * 
   * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
   * also decrease the total issuance of the system (`TotalIssuance`).
   * If the new free or reserved balance is below the existential deposit,
   * it will reset the account nonce (`frame_system::AccountNonce`).
   * 
   * The dispatch origin for this call is `root`.
   * 
   * # <weight>
   * - Independent of the arguments.
   * - Contains a limited number of reads and writes.
   * ---------------------
   * - Base Weight:
   *     - Creating: 27.56 µs
   *     - Killing: 35.11 µs
   * - DB Weight: 1 Read, 1 Write to `who`
   * # </weight>
   */
  get asV1(): {who: v1.MultiAddress, newFree: bigint, newReserved: bigint} {
    assert(this.isV1)
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
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Transfer some liquid free balance to another account.
   * 
   * `transfer` will set the `FreeBalance` of the sender and receiver.
   * It will decrease the total issuance of the system by the `TransferFee`.
   * If the sender's account is below the existential deposit as a result
   * of the transfer, the account will be reaped.
   * 
   * The dispatch origin for this call must be `Signed` by the transactor.
   * 
   * # <weight>
   * - Dependent on arguments but not critical, given proper implementations for input config
   *   types. See related functions below.
   * - It contains a limited number of reads and writes internally and no complex
   *   computation.
   * 
   * Related functions:
   * 
   *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
   *   - Transferring balances to accounts that did not exist before will cause
   *     `T::OnNewAccount::on_new_account` to be called.
   *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
   *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
   *     that the transfer will not kill the origin account.
   * ---------------------------------
   * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
   * - DB Weight: 1 Read and 1 Write to destination account
   * - Origin account is already in memory, so no DB operations for them.
   * # </weight>
   */
  get asV1(): {dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
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
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get isV1(): boolean {
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
   *   keep the sender account alive (true). # <weight>
   * - O(1). Just like transfer, but reading the user's transferable balance first.
   *   #</weight>
   */
  get asV1(): {dest: v1.MultiAddress, keepAlive: boolean} {
    assert(this.isV1)
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
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
  }

  /**
   * Same as the [`transfer`] call, but with a check that the transfer will not kill the
   * origin account.
   * 
   * 99% of the time you want [`transfer`] instead.
   * 
   * [`transfer`]: struct.Pallet.html#method.transfer
   * # <weight>
   * - Cheaper than transfer because account cannot be killed.
   * - Base Weight: 51.4 µs
   * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
   * #</weight>
   */
  get asV1(): {dest: v1.MultiAddress, value: bigint} {
    assert(this.isV1)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Bounties.accept_curator') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   * Accept the curator role for a bounty.
   * A deposit will be reserved from curator and refund upon successful payout.
   * 
   * May only be called from the curator.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number} {
    assert(this.isV2)
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
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Bounties.approve_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   * Approve a bounty proposal. At a later time, the bounty will be funded and become active
   * and the original deposit will be returned.
   * 
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number} {
    assert(this.isV2)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number, beneficiary: v2.MultiAddress} {
    assert(this.isV2)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Bounties.claim_bounty') === '77b779cfa161e4e6eeffa4c35f55ae2bd68aba06e4b5d48766892991c97064c9'
  }

  /**
   * Claim the payout from an awarded bounty after payout delay.
   * 
   * The dispatch origin for this call must be the beneficiary of this bounty.
   * 
   * - `bounty_id`: Bounty ID to claim.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number} {
    assert(this.isV2)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number} {
    assert(this.isV2)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number, remark: Uint8Array} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {value: bigint, description: Uint8Array} {
    assert(this.isV2)
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
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Bounties.propose_curator') === 'db115713847ce9db3eac62037c4aefcca595bcd9aa876776d8fba64491d881d3'
  }

  /**
   * Assign a curator to a funded bounty.
   * 
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number, curator: v2.MultiAddress, fee: bigint} {
    assert(this.isV2)
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - O(1).
   * # </weight>
   */
  get asV2(): {bountyId: number} {
    assert(this.isV2)
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
   * - `ethereum_signature`: The signature of an ethereum signed message
   *    matching the format described above.
   * 
   * <weight>
   * The weight of this call is invariant over the input parameters.
   * Weight includes logic to validate unsigned `claim` call.
   * 
   * Total Complexity: O(1)
   * </weight>
   */
  get isV1(): boolean {
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
   * - `ethereum_signature`: The signature of an ethereum signed message
   *    matching the format described above.
   * 
   * <weight>
   * The weight of this call is invariant over the input parameters.
   * Weight includes logic to validate unsigned `claim` call.
   * 
   * Total Complexity: O(1)
   * </weight>
   */
  get asV1(): {dest: v1.AccountId32, ethereumSignature: Uint8Array} {
    assert(this.isV1)
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
  get isV1(): boolean {
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
  get asV1(): {who: v1.H160, value: bigint} {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getCallHash('Claims.move_claim') === '141d7420c9fafec5c9c80590a2dc9e528311f92ec2465a0dfc29eb44c0c7f2c5'
  }

  get asV1(): {old: v1.H160, new: v1.H160, maybePreclaim: (v1.AccountId32 | undefined)} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  get isV2(): boolean {
    return this._chain.getCallHash('Claims.move_claim') === 'f6ca004c519bffb9d3e43365a3d6810f9f443ead5407fe14deb41c7ab92c1336'
  }

  get asV2(): {old: v2.H160, new: v2.H160, preclaim: (v2.AccountId32 | undefined)} {
    assert(this.isV2)
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
   * Set the current max candidates, must be within 0 and `T::MaxCandidates`
   * Sudo call only
   */
  get isV3(): boolean {
    return this._chain.getCallHash('CollatorStaking.force_set_current_max_candidates') === '310ae211a2124713dfde4d9d728ef98d0b24b616c3e5410d3181c5ef2e8ddade'
  }

  /**
   * Set the current max candidates, must be within 0 and `T::MaxCandidates`
   * Sudo call only
   */
  get asV3(): {maxCandidates: number} {
    assert(this.isV3)
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
   */
  get isV1(): boolean {
    return this._chain.getCallHash('CollatorStaking.join_candidates') === 'a3bdd43eed59e7b65720eef9b2dfe72389ca71ac9dbe7fe2874438aae4f18886'
  }

  /**
   * Join the list of candidates for collation.
   */
  get asV1(): {amount: bigint} {
    assert(this.isV1)
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
   */
  get isV1(): boolean {
    return this._chain.getCallHash('CollatorStaking.nominate') === '30f29e64cc7b4f99f08cb48567ffb4af918d57fe9455b7152205397218f72966'
  }

  /**
   * Nominate a specific candidate to be selected for collation and block production.
   */
  get asV1(): {collatorId: v1.AccountId32, amount: bigint} {
    assert(this.isV1)
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
   */
  get isV1(): boolean {
    return this._chain.getCallHash('CollatorStaking.remove_nomination') === '850c9ad9685e8b8f2587b1f9106e128c780b5d96e4560a40cf7d75d51543f181'
  }

  /**
   * Remove a nomination previously registered for a specific collator candidate.
   */
  get asV1(): {collatorId: v1.AccountId32} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class CollatorStakingSetBlockProducerCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'CollatorStaking.set_block_producer')
    this._chain = ctx._chain
    this.call = call
  }

  get isV1(): boolean {
    return this._chain.getCallHash('CollatorStaking.set_block_producer') === '67f88a22ebfbd8ee828d23cd78f4ee4ef5fe097d8e8b73cb87772e81f42726af'
  }

  get asV1(): {producer: v1.AccountId32} {
    assert(this.isV1)
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
   * Join the list of candidates for collation.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('CollatorStaking.set_invulnerables') === 'f991968966792a125cac7c888dc7194239a215e624de7c15edbe7afe0e683c8a'
  }

  /**
   * Join the list of candidates for collation.
   */
  get asV2(): {accounts: v2.AccountId32[]} {
    assert(this.isV2)
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
   */
  get isV1(): boolean {
    return this._chain.getCallHash('CollatorStaking.unbond') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Leave the collator set of this parachain.
   * 
   * In this case, if the calling account is already a collator, an exit
   * is registered so that this account is not selected for the next set of collators.
   * Otherwise, if the account is only a candidate, this candidate will be removed
   * and the nominations would be freed up.
   */
  get asV1(): null {
    assert(this.isV1)
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
   * # <weight>
   * - Complexity: O(1).
   * - DbReads: `Proposals`, `Approvals`
   * - DbWrite: `Approvals`
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('CommunityPool.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
  }

  /**
   * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
   * and the original deposit will be returned.
   * 
   * May only be called from `T::ApproveOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1).
   * - DbReads: `Proposals`, `Approvals`
   * - DbWrite: `Approvals`
   * # </weight>
   */
  get asV2(): {proposalId: number} {
    assert(this.isV2)
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
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `ProposalCount`, `origin account`
   * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('CommunityPool.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
  }

  /**
   * Put forward a suggestion for spending. A deposit proportional to the value
   * is reserved and slashed if the proposal is rejected. It is returned once the
   * proposal is awarded.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `ProposalCount`, `origin account`
   * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
   * # </weight>
   */
  get asV2(): {value: bigint, beneficiary: v2.MultiAddress} {
    assert(this.isV2)
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
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `Proposals`, `rejected proposer account`
   * - DbWrites: `Proposals`, `rejected proposer account`
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('CommunityPool.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
  }

  /**
   * Reject a proposed spend. The original deposit will be slashed.
   * 
   * May only be called from `T::RejectOrigin`.
   * 
   * # <weight>
   * - Complexity: O(1)
   * - DbReads: `Proposals`, `rejected proposer account`
   * - DbWrites: `Proposals`, `rejected proposer account`
   * # </weight>
   */
  get asV2(): {proposalId: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Council.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV2(): {proposalHash: v2.H256, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV2)
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
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Council.execute') === '27b06bc13c982bedf4c22df3e328c551dacfa2d0aa0b2db963e55d27aaac23ac'
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
  get asV2(): {proposal: v2.Call, lengthBound: number} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Council.execute') === '66fffa1ff650edb25b908c2b043acf71553670c63c283f14cd88ca2ca47dc52a'
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
  get asV3(): {proposal: v3.Call, lengthBound: number} {
    assert(this.isV3)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Council.propose') === '714fdb75fa52c393afe5497690f80b50f8b451534183c14d396acc789a52f66a'
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
  get asV2(): {threshold: number, proposal: v2.Call, lengthBound: number} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Council.propose') === 'cdf7d19b893f28f26424698248ad1b2f03188005aa449f0092d7c707cdefda8a'
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
  get asV3(): {threshold: number, proposal: v3.Call, lengthBound: number} {
    assert(this.isV3)
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
   * Requires root origin.
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
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get isV2(): boolean {
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
   * Requires root origin.
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
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get asV2(): {newMembers: v2.AccountId32[], prime: (v2.AccountId32 | undefined), oldCount: number} {
    assert(this.isV2)
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
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get asV2(): {proposal: v2.H256, index: number, approve: boolean} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {proposalHash: v2.H256, maybeRefIndex: (number | undefined)} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {propIndex: number} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyCancelQueuedCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.cancel_queued')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Cancel a proposal queued for enactment.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `which`: The index of the referendum to cancel.
   * 
   * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.cancel_queued') === '60780274011857b5305b5413b2b4742e5d41eb58a0948049d0672e81af198cb7'
  }

  /**
   * Cancel a proposal queued for enactment.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * - `which`: The index of the referendum to cancel.
   * 
   * Weight: `O(D)` where `D` is the items in the dispatch queue. Weighted as `D = 10`.
   */
  get asV2(): {which: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {refIndex: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.clear_public_proposals') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Clears all public proposals.
   * 
   * The dispatch origin of this call must be _Root_.
   * 
   * Weight: `O(1)`.
   */
  get asV2(): null {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.delegate') === '719d303e364256b757876a8d1b18c8d62a96223d68ffc6f6c1bf18240e8d9793'
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
  get asV2(): {to: v2.AccountId32, conviction: v2.Conviction, balance: bigint} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {refIndex: number} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyEnactProposalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.enact_proposal')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.enact_proposal') === 'de192ab0f058d1fb7eacc523bf0e05128d16509ec21bf445f0eefa47c89e60bf'
  }

  /**
   * Enact a proposal from a referendum. For now we just make the weight be the maximum.
   */
  get asV2(): {proposalHash: v2.H256, index: number} {
    assert(this.isV2)
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
   * 
   * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
   *   Decoding vec of length V. Charged as maximum
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.external_propose') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * Schedule a referendum to be tabled once it is legal to schedule an external
   * referendum.
   * 
   * The dispatch origin of this call must be `ExternalOrigin`.
   * 
   * - `proposal_hash`: The preimage hash of the proposal.
   * 
   * Weight: `O(V)` with V number of vetoers in the blacklist of proposal.
   *   Decoding vec of length V. Charged as maximum
   */
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_default') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.external_propose_majority') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
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
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
   *   `FastTrackVotingPeriod` if too low.
   * - `delay`: The number of block after voting has ended in approval and this should be
   *   enacted. This doesn't have a minimum amount.
   * 
   * Emits `Started`.
   * 
   * Weight: `O(1)`
   */
  get isV2(): boolean {
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
   *   `FastTrackVotingPeriod` if too low.
   * - `delay`: The number of block after voting has ended in approval and this should be
   *   enacted. This doesn't have a minimum amount.
   * 
   * Emits `Started`.
   * 
   * Weight: `O(1)`
   */
  get asV2(): {proposalHash: v2.H256, votingPeriod: number, delay: number} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register the preimage for an upcoming proposal. This requires the proposal to be
   * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
   * the preimage has not been uploaded before and matches some imminent proposal,
   * no fee is paid.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Register the preimage for an upcoming proposal. This requires the proposal to be
   * in the dispatch queue. No deposit is needed. When this call is successful, i.e.
   * the preimage has not been uploaded before and matches some imminent proposal,
   * no fee is paid.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get asV2(): {encodedProposal: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNoteImminentPreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_imminent_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.note_imminent_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_imminent_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV2(): {encodedProposal: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
   * in the dispatch queue but does require a deposit, returned once enacted.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Register the preimage for an upcoming proposal. This doesn't require the proposal to be
   * in the dispatch queue but does require a deposit, returned once enacted.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `encoded_proposal`: The preimage of a proposal.
   * 
   * Emits `PreimageNoted`.
   * 
   * Weight: `O(E)` with E size of `encoded_proposal` (protected by a required deposit).
   */
  get asV2(): {encodedProposal: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyNotePreimageOperationalCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.note_preimage_operational')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.note_preimage_operational') === 'bc60303cdd91077cf965a8aec4728ff7f49fea4055259a274e22145314e7c9eb'
  }

  /**
   * Same as `note_preimage` but origin is `OperationalPreimageOrigin`.
   */
  get asV2(): {encodedProposal: Uint8Array} {
    assert(this.isV2)
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
   * 
   * Weight: `O(p)`
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.propose') === '99f964e94c86db2029fab3e54a9230e36fe7533d252b5ecbc36f16c06e11f18b'
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
   * 
   * Weight: `O(p)`
   */
  get asV2(): {proposalHash: v2.H256, value: bigint} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class DemocracyReapPreimageCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Democracy.reap_preimage')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Remove an expired proposal preimage and collect the deposit.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `proposal_hash`: The preimage hash of a proposal.
   * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
   *   weighted according to this value with no refund.
   * 
   * This will only work after `VotingPeriod` blocks from the time that the preimage was
   * noted, if it's the same account doing it. If it's a different account, then it'll only
   * work an additional `EnactmentPeriod` later.
   * 
   * Emits `PreimageReaped`.
   * 
   * Weight: `O(D)` where D is length of proposal.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.reap_preimage') === '23573ffc912e8a31889875352d3543e4538e2f3beb6a89ef86d10cf1cb8b7aca'
  }

  /**
   * Remove an expired proposal preimage and collect the deposit.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `proposal_hash`: The preimage hash of a proposal.
   * - `proposal_length_upper_bound`: an upper bound on length of the proposal. Extrinsic is
   *   weighted according to this value with no refund.
   * 
   * This will only work after `VotingPeriod` blocks from the time that the preimage was
   * noted, if it's the same account doing it. If it's a different account, then it'll only
   * work an additional `EnactmentPeriod` later.
   * 
   * Emits `PreimageReaped`.
   * 
   * Weight: `O(D)` where D is length of proposal.
   */
  get asV2(): {proposalHash: v2.H256, proposalLenUpperBound: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.remove_other_vote') === '57db819150acc73e380a9908a05d4f777cd3af825527d7ad88560426e1d0f652'
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
  get asV2(): {target: v2.AccountId32, index: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {index: number} {
    assert(this.isV2)
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
   * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
   *   proposal. Extrinsic is weighted according to this value with no refund.
   * 
   * Weight: `O(S)` where S is the number of seconds a proposal already has.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.second') === 'abe1357aae784eefd21f6999076deb6cfbc92fcb9e80c21e93a944ceb739423c'
  }

  /**
   * Signals agreement with a particular proposal.
   * 
   * The dispatch origin of this call must be _Signed_ and the sender
   * must have funds to cover the deposit, equal to the original deposit.
   * 
   * - `proposal`: The index of the proposal to second.
   * - `seconds_upper_bound`: an upper bound on the current number of seconds on this
   *   proposal. Extrinsic is weighted according to this value with no refund.
   * 
   * Weight: `O(S)` where S is the number of seconds a proposal already has.
   */
  get asV2(): {proposal: number, secondsUpperBound: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): null {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Democracy.unlock') === '66d8abf7976ff596d8d614948b9d84cb24f0b898d88d24eb2cc035ae5e93c7b8'
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
  get asV2(): {target: v2.AccountId32} {
    assert(this.isV2)
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
  get isV2(): boolean {
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
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV2(): boolean {
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
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV2(): {refIndex: number, vote: v2.AccountVote} {
    assert(this.isV2)
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
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('DmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
  }

  /**
   * Service a single overweight message.
   * 
   * - `origin`: Must pass `ExecuteOverweightOrigin`.
   * - `index`: The index of the overweight message to service.
   * - `weight_limit`: The amount of weight that message execution may take.
   * 
   * Errors:
   * - `Unknown`: Message of `index` is unknown.
   * - `OverLimit`: Message execution may use greater than `weight_limit`.
   * 
   * Events:
   * - `OverweightServiced`: On success.
   */
  get asV1(): {index: bigint, weightLimit: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBatchMultiTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.batch_multi_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfers an amount of tokens for a specific Asset to a given `recipient` from `source` account
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.batch_multi_transfer') === '914f10beec5bd65ea351457ca9b6b6f748c23d4c75a051252e15776e869fb606'
  }

  /**
   * Transfers an amount of tokens for a specific Asset to a given `recipient` from `source` account
   */
  get asV1(): {recipients: v1.RecipientWithAsset[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBatchTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.batch_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfers the specific amount of tokens of given `recipients` of `asset` from
   * `source` account.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.batch_transfer') === '456577a22159d13a26684641ae5c76c4cba13f06ce341444a1ee3c6c9025b388'
  }

  /**
   * Transfers the specific amount of tokens of given `recipients` of `asset` from
   * `source` account.
   */
  get asV1(): {asset: v1.UUAID, recipients: v1.Recipient[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBatchTransferByChunkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.batch_transfer_by_chunk')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * # TODO
   * - `recipients_by_chunk` must be bounded.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.batch_transfer_by_chunk') === 'aff0983d45fafc37e93000940213d7bb0cdd4f98ef32aff3d45b0fcf15777987'
  }

  /**
   * # TODO
   * - `recipients_by_chunk` must be bounded.
   */
  get asV1(): {asset: v1.UUAID, recipientsByChunk: v1.RecipientsByChunk[]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBurnCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.burn')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Destroys a given `amount` of `token` belonged to `asset`.
   * 
   * See `Pallet::do_burn_by_chunk`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.burn') === '89e2bbfd58aaf8e4e4b34e50f0b6a36823f59c189c929cf627fd21805abaff88'
  }

  /**
   * Destroys a given `amount` of `token` belonged to `asset`.
   * 
   * See `Pallet::do_burn_by_chunk`.
   */
  get asV1(): {asset: v1.UUAID, token: number, amount: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBurnAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.burn_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes the given `asset`.
   * 
   * See `Pallet::do_burn_asset`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.burn_asset') === '6fd47e6c95eb24f766a5048e47cccda4b627923b95609599662394187c43719a'
  }

  /**
   * Removes the given `asset`.
   * 
   * See `Pallet::do_burn_asset`.
   */
  get asV1(): {asset: v1.UUAID, assetAttributeCount: number, nextTokenId: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsBurnByChunkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.burn_by_chunk')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Optimized `burn` by chunks.
   * 
   * See `Pallet::do_burn_by_chunk`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.burn_by_chunk') === 'f77759d89c0a33d577578902c89dda877d88ab351d4de2049445426214fe91c3'
  }

  /**
   * Optimized `burn` by chunks.
   * 
   * See `Pallet::do_burn_by_chunk`.
   */
  get asV1(): {asset: v1.UUAID, tokens: v1.Chunk} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsClearAssetAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.clear_asset_attribute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes the `key` attribute from the given `asset`.
   * 
   * See `Pallet::do_set_asset_attribute`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.clear_asset_attribute') === 'f22ac865e73aaa67c80a5ec4c91b784905ddc2621a6a06c7b39bc2eef9be129b'
  }

  /**
   * Removes the `key` attribute from the given `asset`.
   * 
   * See `Pallet::do_set_asset_attribute`.
   */
  get asV1(): {asset: v1.UUAID, key: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsClearTokenAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.clear_token_attribute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes attribute `key` of the `token` of `asset`.
   * 
   * See `Pallet::do_set_token_attribute`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.clear_token_attribute') === '64afec1b6eff34d57f20408472851a2f2b8c53aa4f4f5769b77f30e88ae05d94'
  }

  /**
   * Removes attribute `key` of the `token` of `asset`.
   * 
   * See `Pallet::do_set_token_attribute`.
   */
  get asV1(): {asset: v1.UUAID, token: number, key: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsCreateAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.create_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Creates a new asset using the given `fungibility` policy where `origin` will be the
   * owner.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.create_asset') === '430c714d88289b17f9be8d9d96b9075678817d13381069273a4e4e832ce859fe'
  }

  /**
   * Creates a new asset using the given `fungibility` policy where `origin` will be the
   * owner.
   */
  get asV1(): {policy: v1.AssetPolicy} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsMintCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.mint')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Mints new `amount` of `asset` and transfer to `origin` account.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.mint') === '50349db6705298bb8eaa32167b7bc80bcd141b573a0ffe5816fe5815d45c9048'
  }

  /**
   * Mints new `amount` of `asset` and transfer to `origin` account.
   */
  get asV1(): {asset: v1.UUAID, amount: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsSetAssetAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.set_asset_attribute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Updates the asset attribute `key` to `value` for the given `asset`.
   * 
   * See `Pallet::do_set_asset_attribute`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.set_asset_attribute') === '6c4de0867e652d759d38b12002fbf4f996d0502639c4affa0fb990ccda3976bf'
  }

  /**
   * Updates the asset attribute `key` to `value` for the given `asset`.
   * 
   * See `Pallet::do_set_asset_attribute`.
   */
  get asV1(): {asset: v1.UUAID, key: Uint8Array, value: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsSetTokenAttributeCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.set_token_attribute')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Updates attribute `key` of the `token` of `asset` using the given `value`.
   * 
   * See `Pallet::do_set_token_attribute`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.set_token_attribute') === 'b86220f609f1dfa1a8d558f3a138299881e17f1803eaad4ed7811cdd9acb46e0'
  }

  /**
   * Updates attribute `key` of the `token` of `asset` using the given `value`.
   * 
   * See `Pallet::do_set_token_attribute`.
   */
  get asV1(): {asset: v1.UUAID, token: number, key: Uint8Array, value: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.transfer')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfers `amount` of `token` from `asset` from `origin` account to `target` account.
   * See `chunks::do_transfer`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.transfer') === '1cf329fd44dd643eec80e1891fa55a8593573c4fd8be3899927d729651beaa70'
  }

  /**
   * Transfers `amount` of `token` from `asset` from `origin` account to `target` account.
   * See `chunks::do_transfer`.
   */
  get asV1(): {target: v1.MultiAddress, asset: v1.UUAID, token: number, amount: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsTransferByChunkCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.transfer_by_chunk')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfers the `tokens` of `asset` from `origin` to `target`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.transfer_by_chunk') === 'e5bdb32e4d697848a3d8ada464a7f155bb4ee92e9a38a2cfd4c18c9d06f3ffac'
  }

  /**
   * Transfers the `tokens` of `asset` from `origin` to `target`.
   */
  get asV1(): {target: v1.MultiAddress, asset: v1.UUAID, tokens: v1.Chunk} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssets.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer the ownership of `asset` from `origin` to `target`.
   * 
   * # TODO
   * - Weight based on number of chunks instead of number or elements of tokens.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssets.transfer_ownership') === '4fc84afad542edaeaf16d474863437eda6cfe37592a3f0c79fe25b5f6692834a'
  }

  /**
   * Transfer the ownership of `asset` from `origin` to `target`.
   * 
   * # TODO
   * - Weight based on number of chunks instead of number or elements of tokens.
   */
  get asV1(): {target: v1.MultiAddress, asset: v1.UUAID} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtApproveAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.approve_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `asset`
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.approve_asset') === 'db55dc4b03c8ef12022496ae990420a14eccdd3d872d9d794a5fb7fdb3de7f17'
  }

  /**
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `asset`
   */
  get asV1(): {operator: v1.AccountId32, asset: v1.UUAID, expiration: v1.Expiration} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtApproveForAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.approve_for_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve `operator` to manage all the `origin`'s assets.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.approve_for_all') === '0af30968868cefa5e7db1f582d32bef581d5db30f30249d1b22231ef95d46ce4'
  }

  /**
   * Approve `operator` to manage all the `origin`'s assets.
   */
  get asV1(): {operator: v1.AccountId32, expiration: v1.Expiration} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtApproveTokenCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.approve_token')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.approve_token') === 'e2f7d1fc75bb209b73d09e9b85a55e01a597344dd6ad55c10be6783d21a74fb6'
  }

  /**
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get asV1(): {operator: v1.AccountId32, asset: v1.UUAID, token: number, amount: bigint, expiration: v1.Expiration} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtTransferFromCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.transfer_from')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfers `amount` of `tokens` from account `from` to address `to` if `origin` has enough allowance
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.transfer_from') === 'd2b913d3a3a5ae008034a9f518424b2d005761c4c7a1e4ccb9ba10bdfe9e0fcf'
  }

  /**
   * Transfers `amount` of `tokens` from account `from` to address `to` if `origin` has enough allowance
   */
  get asV1(): {from: v1.AccountId32, to: v1.AccountId32, asset: v1.UUAID, token: number, amount: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtUnapproveAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.unapprove_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `asset`
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_asset') === '71c184bcd95e12e5934c981796e88b2c153fd83bad3068dedf7f1b4813574758'
  }

  /**
   * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `asset`
   */
  get asV1(): {operator: v1.AccountId32, asset: v1.UUAID} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtUnapproveForAllCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.unapprove_for_all')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unapprove `operator` to manage `origin's` assets
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_for_all') === '1e2713efb65114597ed1c5d791da173e5bb427cca368815c69e1f8390525f949'
  }

  /**
   * Unapprove `operator` to manage `origin's` assets
   */
  get asV1(): {operator: v1.AccountId32} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class MultiAssetsOperatorExtUnapproveTokenCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'MultiAssetsOperatorExt.unapprove_token')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get isV1(): boolean {
    return this._chain.getCallHash('MultiAssetsOperatorExt.unapprove_token') === 'be9956cdf9e200b2a3af02d09578cc79f1b5939b74da917ba4a30d5b943da1d9'
  }

  /**
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get asV1(): {operator: v1.AccountId32, asset: v1.UUAID, token: number} {
    assert(this.isV1)
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
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.approve_collection') === '488accbd8a7ccff93c1ce6b5609ef67874c52cc8fc80b3b48a2cad226450c092'
  }

  /**
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get asV2(): {collectionId: bigint, operator: v2.AccountId32, expiration: (number | undefined)} {
    assert(this.isV2)
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
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.approve_token') === '7266369f860222731cfac3b4dc9f7b3eb8550de09ee165a184b933efc53cd27a'
  }

  /**
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, amount: bigint, expiration: (number | undefined), currentAmount: bigint} {
    assert(this.isV2)
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
   * Collection owner mints tokens of `collection_id` to `recipients` consisting of an `AccountId` and `MintParams`
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `NotFound` if `collection` does **not** exist.
   * - `NoPermission` if `caller` is not allowed to mint the `collection`.
   * - `MintForbidden` if the policy disallows the operation
   * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
   * - `TokenCountOverflow` if the token_count overflows
   * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
   * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
   * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.batch_mint') === '084d61eb68c7be95ad054eb3343b987f9d956254a27444db9f5e8c124cd1674c'
  }

  /**
   * Collection owner mints tokens of `collection_id` to `recipients` consisting of an `AccountId` and `MintParams`
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `NotFound` if `collection` does **not** exist.
   * - `NoPermission` if `caller` is not allowed to mint the `collection`.
   * - `MintForbidden` if the policy disallows the operation
   * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
   * - `TokenCountOverflow` if the token_count overflows
   * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
   * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
   * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
   */
  get asV2(): {collectionId: bigint, recipients: v2.Recipient_274[]} {
    assert(this.isV2)
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
   * Transfers the specific amount of tokens of `collection` to `recipients` from `origin` account.
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `InvalidTargetAccount` if `source == target`.
   * - `BalanceLow` if `source` does not own enough amount of `collection`.
   * - `BalanceOverflow` if `target` balance of `collection` overflows.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.batch_transfer') === 'b19d3917f5096e2cef3e73752e8a3bd0b5e30cadfc6a4ff16c68ce84082c1ce5'
  }

  /**
   * Transfers the specific amount of tokens of `collection` to `recipients` from `origin` account.
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `InvalidTargetAccount` if `source == target`.
   * - `BalanceLow` if `source` does not own enough amount of `collection`.
   * - `BalanceOverflow` if `target` balance of `collection` overflows.
   */
  get asV2(): {collectionId: bigint, recipients: v2.Recipient_271[]} {
    assert(this.isV2)
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
   * - `NotFound` if `collection` does not exist.
   * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
   * of `collection`.
   * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
   * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
   * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count to
   * overflow.
   * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.burn') === '5e518fd41f2e62474b4a1bae295d7c2b0bec3f70f20ccbfeb4517ee9e7984bc3'
  }

  /**
   * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
   * It also updates the total supply of `collection_id`.
   * 
   * # Errors
   * - `NotFound` if `collection` does not exist.
   * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
   * of `collection`.
   * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
   * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
   * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count to
   * overflow.
   * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
   */
  get asV2(): {collectionId: bigint, params: v2.DefaultBurnParams} {
    assert(this.isV2)
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
   * Creates a new collection from `descriptor`
   * 
   * # Errors
   * - `DepositReserveFailed` if the deposit cannot be reserved
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.create_collection') === '7cf4fe3885361ce6eb79e4db2f2b1f99352c2e5697d2c8b7df956148e7c0f2c6'
  }

  /**
   * Creates a new collection from `descriptor`
   * 
   * # Errors
   * - `DepositReserveFailed` if the deposit cannot be reserved
   */
  get asV2(): {descriptor: v2.DefaultCollectionDescriptor} {
    assert(this.isV2)
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
   * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
   * 
   * The `attribute_count` parameter is used to evaluate the cost of this operation. It
   * must match the value in storage.
   * 
   * # Errors
   * - `NoPermission` if `origin` is not the owner of the collection.
   * - `NotFound` if `Collection` with `id` does not exist.
   * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's destruction
   * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
   * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
   * current number of collection attributes.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.destroy_collection') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
  }

  /**
   * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
   * 
   * The `attribute_count` parameter is used to evaluate the cost of this operation. It
   * must match the value in storage.
   * 
   * # Errors
   * - `NoPermission` if `origin` is not the owner of the collection.
   * - `NotFound` if `Collection` with `id` does not exist.
   * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's destruction
   * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
   * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
   * current number of collection attributes.
   */
  get asV2(): {collectionId: bigint} {
    assert(this.isV2)
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
   * Exactly as `mutate_collection`, except the origin must be root and the `caller` account should be
   * specified.
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   * - Same as mutate_collection
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_mutate_collection') === 'b24a11f1bb3034565515518d4293039de8c701ec744f5c5e6b41a17b3c4d2288'
  }

  /**
   * Exactly as `mutate_collection`, except the origin must be root and the `caller` account should be
   * specified.
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   * - Same as mutate_collection
   */
  get asV2(): {collectionId: bigint, mutation: v2.DefaultCollectionMutation} {
    assert(this.isV2)
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
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_attribute') === '0c376373bedc267e8526ef4acf5c6c81f9faf25c7d1d5e610d39748132d3507f'
  }

  /**
   * Set the Tokens storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: (v2.Attribute | undefined)} {
    assert(this.isV2)
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
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_collection') === '8a2a5df1ba028f33f223ac8859e40a2d653dca55be6db52bec414a455e53cbe0'
  }

  /**
   * Set the Collections storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint, value: (v2.Collection | undefined)} {
    assert(this.isV2)
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
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_collection_account') === '9d50ec94aed5d50147723e89e22a9b159311680f9492c74e81d60a9d8c141683'
  }

  /**
   * Set the CollectionAccounts storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint, accountId: v2.MultiAddress, value: (v2.CollectionAccount | undefined)} {
    assert(this.isV2)
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
   * Set the NextCollectionId storage to the given `id`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_next_collection_id') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
  }

  /**
   * Set the NextCollectionId storage to the given `id`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint} {
    assert(this.isV2)
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
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_token') === 'f7628acc76287fdc2bac39c228d23045fc6e92b88bc282b64abd6bf3e2b8a24d'
  }

  /**
   * Set the Tokens storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, value: (v2.Token | undefined)} {
    assert(this.isV2)
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
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_token_account') === '3956dd5ae16d635be29c566c6993a198d1279172b65acbab6e7805ff05d8f65d'
  }

  /**
   * Set the TokenAccounts storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, accountId: v2.MultiAddress, value: (v2.TokenAccount | undefined)} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Set the TokenAccounts storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get isV3(): boolean {
    return this._chain.getCallHash('MultiTokens.force_set_token_account') === 'bf35663d50dd3916b43afdc084f9827ad9764b0cd317f3ca102ce9251a909dad'
  }

  /**
   * Set the TokenAccounts storage to the given `value`, origin must be root
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   */
  get asV3(): {collectionId: bigint, tokenId: bigint, accountId: v3.MultiAddress, value: (v3.TokenAccount | undefined)} {
    assert(this.isV3)
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
   * Exactly as `transfer`, except the origin must be root and the source account should be
   * specified.
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   * - Same as transfer
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.force_transfer') === '7eb6f59738c54c66d88f77215603bab748b9d4ed2bc404e7a6627743e91b27f6'
  }

  /**
   * Exactly as `transfer`, except the origin must be root and the source account should be
   * specified.
   * 
   * # Errors
   * - `BadOrigin` if origin != root
   * - Same as transfer
   */
  get asV2(): {source: v2.MultiAddress, destination: v2.MultiAddress, collectionId: bigint, params: v2.DefaultTransferParams} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.freeze') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
  }

  /**
   * Freeze collection, token or account
   */
  get asV2(): {info: v2.Freeze} {
    assert(this.isV2)
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
   * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's `MintPolicy`.
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `CollectionNotFound` if `Collection` does not exist.
   * - `TokenNotFound` if `Token` does not exist.
   * - `TokenAlreadyExists` if attempting to create a token that already exists
   * - `NoPermission` if `caller` is not allowed to mint the `collection`.
   * - `Overflow` if `amount + current_total_supply` overflows its type, or if the token_count
   * overflows.
   * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
   * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
   * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.mint') === 'eaebb17dc952303dfd16624a15d2cde22e3b66a7f91ca95f2f92cd3104cb2499'
  }

  /**
   * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's `MintPolicy`.
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `CollectionNotFound` if `Collection` does not exist.
   * - `TokenNotFound` if `Token` does not exist.
   * - `TokenAlreadyExists` if attempting to create a token that already exists
   * - `NoPermission` if `caller` is not allowed to mint the `collection`.
   * - `Overflow` if `amount + current_total_supply` overflows its type, or if the token_count
   * overflows.
   * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
   * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
   * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
   */
  get asV2(): {recipient: v2.MultiAddress, collectionId: bigint, params: v2.DefaultMintParams} {
    assert(this.isV2)
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
   * Modify `Collection` with `id` by applying `mutation`
   * 
   * # Errors
   * - `NotFound`, if `collection_id` does not exist.
   * - `NoPermission`, if `origin` is not the owner of `collection`.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.mutate_collection') === 'b24a11f1bb3034565515518d4293039de8c701ec744f5c5e6b41a17b3c4d2288'
  }

  /**
   * Modify `Collection` with `id` by applying `mutation`
   * 
   * # Errors
   * - `NotFound`, if `collection_id` does not exist.
   * - `NoPermission`, if `origin` is not the owner of `collection`.
   */
  get asV2(): {collectionId: bigint, mutation: v2.DefaultCollectionMutation} {
    assert(this.isV2)
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
   * - `BadAttributeKey` if `key.len() == 0`
   * - `TokenNotFound` if `collection` does not exist.
   * - `NoPermission` if `source` account is not the owner of the collection.
   * - `AttributeCounterOverflow` if the Collection's attribute counter overflows.
   * - `AttributeStorageOverflow` if the attribute key and value total bytes exceeds the limit.
   * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.remove_attribute') === '5e8dda41d19b04f7e051283b9b20aed0a83222ef4bc596239942a512d10e143c'
  }

  /**
   * Removes the `key` attribute from the given `collection_id` or `token_id`.
   * 
   * # Errors
   * - `BadAttributeKey` if `key.len() == 0`
   * - `TokenNotFound` if `collection` does not exist.
   * - `NoPermission` if `source` account is not the owner of the collection.
   * - `AttributeCounterOverflow` if the Collection's attribute counter overflows.
   * - `AttributeStorageOverflow` if the attribute key and value total bytes exceeds the limit.
   * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    assert(this.isV2)
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
   * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the attribute
   * is added to the token.
   * 
   * # Errors
   * - `InvalidAttributeKey` if `key.len() == 0`
   * - `TokenNotFound` if `collection` does not exist.
   * - `NoPermission` if `source` account is not the owner of the collection.
   * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key and value
   * total bytes exceeds the limit.
   * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.set_attribute') === '1442e960b51ef446ff50fc6d27284693378495f9905ed8fbc35811b81dcf7c7b'
  }

  /**
   * Sets the attribute `key` to `value` for `collection_id`.
   * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the attribute
   * is added to the token.
   * 
   * # Errors
   * - `InvalidAttributeKey` if `key.len() == 0`
   * - `TokenNotFound` if `collection` does not exist.
   * - `NoPermission` if `source` account is not the owner of the collection.
   * - `Overflow` if the Collection's attribute counter overflows, or if the attribute key and value
   * total bytes exceeds the limit.
   * - `DepositReserveFailed` if unable to reserve the depposit for the attribute storage.
   */
  get asV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.thaw') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
  }

  /**
   * Thaw collection, token or account
   */
  get asV2(): {info: v2.Freeze} {
    assert(this.isV2)
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
   * - `AmountZero` if `amount == 0`.
   * - `InvalidTargetAccount` if `source == target`.
   * - `BalanceLow` if `source` does not own enough amount of `collection`.
   * - `Overflow` if `target` balance of `collection` overflows.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.transfer') === '3a904597294b52262716ac476178f413a640c58c5df5fdee9d6a42b369dab12a'
  }

  /**
   * `operator` transfers to `recipient` for `collection_id` with `params`
   * 
   * # Errors
   * - `AmountZero` if `amount == 0`.
   * - `InvalidTargetAccount` if `source == target`.
   * - `BalanceLow` if `source` does not own enough amount of `collection`.
   * - `Overflow` if `target` balance of `collection` overflows.
   */
  get asV2(): {recipient: v2.MultiAddress, collectionId: bigint, params: v2.DefaultTransferParams} {
    assert(this.isV2)
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
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.unapprove_collection') === 'e5170bfdb3c4351aa216ff597896abe5ecc75ec89c47b522a97790870cc3b5ef'
  }

  /**
   * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get asV2(): {collectionId: bigint, operator: v2.AccountId32} {
    assert(this.isV2)
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
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get isV2(): boolean {
    return this._chain.getCallHash('MultiTokens.unapprove_token') === 'bf808826dcdafcc9b31e08b287969eda26c2a350dbd9b501129943a436ab8854'
  }

  /**
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32} {
    assert(this.isV2)
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
   * # <weight>
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
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account]
   *     - Write: Multisig Storage, [Caller Account]
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Multisig.approve_as_multi') === '615a5baaaa889f9e30839c70485b8c752e5eb050a85a23102b2f9f4c301be63a'
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
   * # <weight>
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
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account]
   *     - Write: Multisig Storage, [Caller Account]
   * # </weight>
   */
  get asV2(): {threshold: number, otherSignatories: v2.AccountId32[], maybeTimepoint: (v2.Timepoint | undefined), callHash: Uint8Array, maxWeight: bigint} {
    assert(this.isV2)
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
   *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
   *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
   * - Plus Call Weight
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Multisig.as_multi') === '548dea53ff79fe99438cf591950a533c93f9772d03a3995ec72a80376fcae222'
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
   *     - Reads: Multisig Storage, [Caller Account], Calls (if `store_call`)
   *     - Writes: Multisig Storage, [Caller Account], Calls (if `store_call`)
   * - Plus Call Weight
   * # </weight>
   */
  get asV2(): {threshold: number, otherSignatories: v2.AccountId32[], maybeTimepoint: (v2.Timepoint | undefined), call: Uint8Array, storeCall: boolean, maxWeight: bigint} {
    assert(this.isV2)
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
   * # <weight>
   * O(Z + C) where Z is the length of the call and C its execution weight.
   * -------------------------------
   * - DB Weight: None
   * - Plus Call Weight
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === '4c3b8ac4e9c1b0330f472a0df753a7bf3a6126f1a021498f1573bcc3829e75a5'
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
  get asV2(): {otherSignatories: v2.AccountId32[], call: v2.Call} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Multisig.as_multi_threshold_1') === 'ab9c08020581417787114df994f378c8f60be5e3ab555d074b02c41a339cd10a'
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
  get asV3(): {otherSignatories: v3.AccountId32[], call: v3.Call} {
    assert(this.isV3)
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
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - One event.
   * - I/O: 1 read `O(S)`, one remove.
   * - Storage: removes one item.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
   *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - `O(S)`.
   * - Up to one balance-reserve or unreserve operation.
   * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
   *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
   * - One encode & hash, both of complexity `O(S)`.
   * - One event.
   * - I/O: 1 read `O(S)`, one remove.
   * - Storage: removes one item.
   * ----------------------------------
   * - DB Weight:
   *     - Read: Multisig Storage, [Caller Account], Refund Account, Calls
   *     - Write: Multisig Storage, [Caller Account], Refund Account, Calls
   * # </weight>
   */
  get asV2(): {threshold: number, otherSignatories: v2.AccountId32[], timepoint: v2.Timepoint, callHash: Uint8Array} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('OrmlXcm.send_as_sovereign') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  /**
   * Send an XCM message as parachain sovereign.
   */
  get asV3(): {dest: v3.VersionedMultiLocation, message: v3.VersionedXcm_241} {
    assert(this.isV3)
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

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.authorize_upgrade') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  get asV1(): {codeHash: v1.H256} {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.enact_authorized_upgrade') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class ParachainSystemSetUpgradeBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'ParachainSystem.set_upgrade_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.set_upgrade_block') === '4552b4c9a331e27653dd826226a620c7ef63c4af553ba86f11cdfd63fb1b1028'
  }

  /**
   * Force an already scheduled validation function upgrade to happen on a particular block.
   * 
   * Note that coordinating this block for the upgrade has to happen independently on the
   * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
   * and this bypasses all checks and and normal protocols. Very easy to brick your chain
   * if done wrong.
   */
  get asV1(): {relayChainBlock: number} {
    assert(this.isV1)
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
  get isV1(): boolean {
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
  get asV1(): {data: v1.ParachainInherentData} {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getCallHash('ParachainSystem.sudo_send_upward_message') === '34457b6daded32ddc4ec3a5a21e34b9af8dcd7d190a5a7833fa8a7ed53b31206'
  }

  get asV1(): {message: Uint8Array} {
    assert(this.isV1)
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
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === '41f7d0295efed5db73229cbd1e9f1fdc0e7f9e159af3b17a10880e74bcdb3ad4'
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
  get asV1(): {message: v1.VersionedXcm_178, maxWeight: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
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
  get isV2(): boolean {
    return this._chain.getCallHash('PolkadotXcm.execute') === 'c6251691ab3319ecee95442d381c308f9ada155e423798c908cbd6b063aa26b4'
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
  get asV2(): {message: v2.VersionedXcm_244, maxWeight: bigint} {
    assert(this.isV2)
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
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_default_xcm_version') === 'd4bcd64cc4c940eafd14296ec6cbfb7d27e4ca42a4c7dab4c0b89f6c8102257e'
  }

  /**
   * Set a safe XCM version (the version that XCM should be encoded with if the most recent
   * version a destination can accept is unknown).
   * 
   * - `origin`: Must be Root.
   * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
   */
  get asV1(): {maybeXcmVersion: (number | undefined)} {
    assert(this.isV1)
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
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_subscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Ask a location to notify us regarding their XCM version and any changes to it.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we should subscribe for XCM version notifications.
   */
  get asV1(): {location: v1.VersionedMultiLocation} {
    assert(this.isV1)
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
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_unsubscribe_version_notify') === 'f3f38b2278743e50bfd76c0f778560fb38a60c931275e9df42f2b9ce08c1d6fc'
  }

  /**
   * Require that a particular destination should no longer notify us regarding any XCM
   * version changes.
   * 
   * - `origin`: Must be Root.
   * - `location`: The location to which we are currently subscribed for XCM version
   *   notifications which we no longer desire.
   */
  get asV1(): {location: v1.VersionedMultiLocation} {
    assert(this.isV1)
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
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.force_xcm_version') === '3bdd3ba3db54facd962462ff1c2c0ede1b428cf9119b36a4e96fa86916145f75'
  }

  /**
   * Extoll that a particular destination can be communicated with through a particular
   * version of XCM.
   * 
   * - `origin`: Must be Root.
   * - `location`: The destination that is being described.
   * - `xcm_version`: The latest version of XCM that `location` supports.
   */
  get asV1(): {location: v1.V1MultiLocation, xcmVersion: number} {
    assert(this.isV1)
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
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
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
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_reserve_transfer_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
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
  get asV1(): {dest: v1.VersionedMultiLocation, beneficiary: v1.VersionedMultiLocation, assets: v1.VersionedMultiAssets, feeAssetItem: number, weightLimit: v1.V2WeightLimit} {
    assert(this.isV1)
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
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.limited_teleport_assets') === '3c203a3f95b9fe53b8c376802c4fe60fa6077815af7432dcd2a3e458169a5d2a'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
   */
  get asV1(): {dest: v1.VersionedMultiLocation, beneficiary: v1.VersionedMultiLocation, assets: v1.VersionedMultiAssets, feeAssetItem: number, weightLimit: v1.V2WeightLimit} {
    assert(this.isV1)
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
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
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
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.reserve_transfer_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
   * a notification XCM.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
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
  get asV1(): {dest: v1.VersionedMultiLocation, beneficiary: v1.VersionedMultiLocation, assets: v1.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV1)
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

  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '9ec4149ae6cee6240a6e2aa06a8ef90285e68be29dd0de109b35af7922311609'
  }

  get asV1(): {dest: v1.VersionedMultiLocation, message: v1.VersionedXcm_167} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }

  get isV2(): boolean {
    return this._chain.getCallHash('PolkadotXcm.send') === '3ca4beb317aeed3e0a00ae870ffd3bef841bb6f4e766db0b286c7fc5d8eef886'
  }

  get asV2(): {dest: v2.VersionedMultiLocation, message: v2.VersionedXcm_233} {
    assert(this.isV2)
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
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('PolkadotXcm.teleport_assets') === '123b8170fa49ede01f38623e457f4e4d417c90cff5b93ced45a9eb8fe8e6ca2e'
  }

  /**
   * Teleport some assets from the local chain to some destination chain.
   * 
   * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
   * fee-weight is calculated locally and thus remote weights are assumed to be equal to
   * local weights.
   * 
   * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
   * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
   *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
   * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
   *   an `AccountId32` value.
   * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
   *   `dest` side. May not be empty.
   * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
   *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
   */
  get asV1(): {dest: v1.VersionedMultiLocation, beneficiary: v1.VersionedMultiLocation, assets: v1.VersionedMultiAssets, feeAssetItem: number} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class PoolsCreateFuelTankCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Pools.create_fuel_tank')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create a new pool with type of Fuel.
   * 
   * Fuel tanks are allowed to be created by anyone who can allocate
   * funds so that these fuel tanks can be used for their own purposes.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Pools.create_fuel_tank') === '3dd0f1893ec5786064608ae93b19dda0c2796e066c34ddb233b18ebf2a5a7a63'
  }

  /**
   * Create a new pool with type of Fuel.
   * 
   * Fuel tanks are allowed to be created by anyone who can allocate
   * funds so that these fuel tanks can be used for their own purposes.
   */
  get asV1(): {fundAccount: v1.MultiAddress} {
    assert(this.isV1)
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
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Pools.mutate_pools') === 'b6e16c50ea323b82f6ed539c6ec342660e4b39ca7192a157a54536b69eaf5a62'
  }

  /**
   * Mutate the pools. Can only be called by root.
   */
  get asV3(): {mutation: v3.PoolsMutation} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }
}

export class PoolsTransferOwnershipCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Pools.transfer_ownership')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Transfer ownership of a pool to new account.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Pools.transfer_ownership') === '2d479f81acac3188d6668e91281a0ffa1cf7ec942881627b2a225cdbe798ec5f'
  }

  /**
   * Transfer ownership of a pool to new account.
   */
  get asV1(): {poolId: bigint, newOwner: v1.MultiAddress} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class PoolsWithdrawFromPoolCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Pools.withdraw_from_pool')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Withdraw funds from pool to the pool owner's account.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Pools.withdraw_from_pool') === '0bb9eac6a341f00fb460184b1547b63758423c38c309e493601881eec6b68897'
  }

  /**
   * Withdraw funds from pool to the pool owner's account.
   */
  get asV1(): {poolId: bigint, amount: bigint} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
  }

  /**
   * Register a preimage on-chain.
   * 
   * If the preimage was previously requested, no fees or deposits are taken for providing
   * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
   */
  get asV2(): {bytes: Uint8Array} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Request a preimage be uploaded to the chain without paying any fees or deposits.
   * 
   * If the preimage requests has already been provided on-chain, we unreserve any deposit
   * a user may have paid, and take the control of the preimage out of their hands.
   */
  get asV2(): {hash: v2.H256} {
    assert(this.isV2)
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
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Preimage.unnote_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear an unrequested preimage from the runtime storage.
   */
  get asV2(): {hash: v2.H256} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Preimage.unrequest_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * Clear a previously made request for a preimage.
   * 
   * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
   */
  get asV2(): {hash: v2.H256} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.cancel') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Cancel an anonymously scheduled task.
   */
  get asV2(): {when: number, index: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.cancel_named') === 'a0b847240e1232c10a62578340a2af6708e760669b06344b70c15e6370b514cf'
  }

  /**
   * Cancel a named scheduled task.
   */
  get asV2(): {id: Uint8Array} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '6fb5a7e00a9e049113f7b263473adc25d7f5038efa76ee5171b9acfad3a5f2ef'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV2(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v2.MaybeHashed} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task.
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Scheduler.schedule') === '7dd515ec8bf6d740b940ae6ebfa2ebec9985aad95756902bfe1dfdb707df4b3a'
  }

  /**
   * Anonymously schedule a task.
   */
  get asV3(): {when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.MaybeHashed} {
    assert(this.isV3)
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
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === 'dc982576607c8a0b94fd05e69d9c94455cf27ad5ec7ce46dfdf18e3a23b80f09'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV2(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v2.MaybeHashed} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_after') === '5a3e0c229f51c1b1c4da42c68c0eb639ede3de9b41dbe4cfc77b8fb77ea182df'
  }

  /**
   * Anonymously schedule a task after a delay.
   * 
   * # <weight>
   * Same as [`schedule`].
   * # </weight>
   */
  get asV3(): {after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.MaybeHashed} {
    assert(this.isV3)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '02d5fd88a810ae003279c1c62e9df3f754cbf2bb85f83ae7676f7a04d6d89ec3'
  }

  /**
   * Schedule a named task.
   */
  get asV2(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v2.MaybeHashed} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task.
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named') === '4e51ecbcd53e88e46cb18dc26c56784156382e564af6a6d2556f7d39c997453c'
  }

  /**
   * Schedule a named task.
   */
  get asV3(): {id: Uint8Array, when: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.MaybeHashed} {
    assert(this.isV3)
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
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'c7951700c99812a8a459440e8b977e1594cafd686b06897209c80cf1ce13b5c6'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV2(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v2.MaybeHashed} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Scheduler.schedule_named_after') === 'fb6574f7d5f42cbe56595bd781db43f2abfb5c1e8c13fc8d8eb7915bdf09fbc6'
  }

  /**
   * Schedule a named task after a delay.
   * 
   * # <weight>
   * Same as [`schedule_named`](Self::schedule_named).
   * # </weight>
   */
  get asV3(): {id: Uint8Array, after: number, maybePeriodic: ([number, number] | undefined), priority: number, call: v3.MaybeHashed} {
    assert(this.isV3)
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
   * # <weight>
   * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
   *   of `T::Keys::key_ids()` which is fixed.
   * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
   * - DbWrites: `NextKeys`, `origin account`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
   *   of `T::Keys::key_ids()` which is fixed.
   * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
   * - DbWrites: `NextKeys`, `origin account`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get asV2(): null {
    assert(this.isV2)
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
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Session.set_keys') === '24d5f61fc8b687e89719b9274a302989634bb654ef0d77997e56dfd9b20ccbf6'
  }

  /**
   * Sets the session key(s) of the function caller to `keys`.
   * Allows an account to set its session key prior to becoming a validator.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get asV2(): {keys: v2.SessionKeys, proof: Uint8Array} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Sets the session key(s) of the function caller to `keys`.
   * Allows an account to set its session key prior to becoming a validator.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Session.set_keys') === 'addd7c626f9aa937cd1834dc66bd024e3ceb303e43e64ebf3d8d267053cff2b5'
  }

  /**
   * Sets the session key(s) of the function caller to `keys`.
   * Allows an account to set its session key prior to becoming a validator.
   * This doesn't take effect until the next session.
   * 
   * The dispatch origin of this function must be signed.
   * 
   * # <weight>
   * - Complexity: `O(1)`. Actual cost depends on the number of length of
   *   `T::Keys::key_ids()` which is fixed.
   * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
   * - DbWrites: `origin account`, `NextKeys`
   * - DbReads per key id: `KeyOwner`
   * - DbWrites per key id: `KeyOwner`
   * # </weight>
   */
  get asV3(): {keys: v3.SessionKeys, proof: Uint8Array} {
    assert(this.isV3)
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
  get isV1(): boolean {
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
  get asV1(): {new: v1.MultiAddress} {
    assert(this.isV1)
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
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'd2b78287df37e2ce6a606d4e2dee9d4b7ff25dcb98d93d875d5b118d1fe2082f'
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
  get asV1(): {call: v1.Call} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === '8ac56a6c1268cb03d83017cb68a68bfed38080c57913c092eadf66b866a29a0c'
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
  get asV2(): {call: v2.Call} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo') === 'f769581b601e45c4e8c2234dc7fb3735b28ab739e0920351a8fb33a8467f2660'
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
  get asV3(): {call: v3.Call} {
    assert(this.isV3)
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
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'f4ea003b546fc535bd54de3b960e082931ec3b7affad049efd579b5bdf4a9d42'
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
  get asV1(): {who: v1.MultiAddress, call: v1.Call} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === 'a77e5ba3ef95dc3f3a988e6839c7b5dc31b71fe5c6b5f5286dbce01640f8b9c8'
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
  get asV2(): {who: v2.MultiAddress, call: v2.Call} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo_as') === '5e596c11637f9bee4df056daea0e979d7ddbf6fca274f87d9b933ea9718c0542'
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
  get asV3(): {who: v3.MultiAddress, call: v3.Call} {
    assert(this.isV3)
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
  get isV1(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === '139c29f9d292e00dc7e4942cb8c766ce9daa053645d6b561ddc5dfb5bde24eec'
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
  get asV1(): {call: v1.Call, weight: bigint} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'ec6327608b218b24996345debebc9640465718b45e82ad6ffc538fa8f6212b40'
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
  get asV2(): {call: v2.Call, weight: bigint} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Sudo.sudo_unchecked_weight') === 'cb1598fd7ece9eccf204c0f2617b853f11428881447c35ebdacf232119be87d5'
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
  get asV3(): {call: v3.Call, weight: bigint} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemFillBlockCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.fill_block')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.fill_block') === '41c1841312db092642508be699e4a3f54d52efe2dcaa8101ca9518398fb70c49'
  }

  /**
   * A dispatch that will fill the block weight up to the given ratio.
   */
  get asV1(): {ratio: v1.Perbill} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_prefix') === 'dfbadd42bee8b18fc81cf78683511061181cffbf7a8ebfd3e5719c389b373d93'
  }

  /**
   * Kill all storage items with a key that starts with the given prefix.
   * 
   * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
   * the prefix we are removing to accurately calculate the weight of this function.
   * 
   * # <weight>
   * - `O(P)` where `P` amount of keys with prefix `prefix`
   * - `P` storage deletions.
   * - Base Weight: 0.834 * P µs
   * - Writes: Number of subkeys + 1
   * # </weight>
   */
  get asV1(): {prefix: Uint8Array, subkeys: number} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.kill_storage') === 'eac21dc14e927c003d9c634fb019d04128f71f8529d2914b10a56b85289c2c11'
  }

  /**
   * Kill some items from storage.
   * 
   * # <weight>
   * - `O(IK)` where `I` length of `keys` and `K` length of one key
   * - `I` storage deletions.
   * - Base Weight: .378 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV1(): {keys: Uint8Array[]} {
    assert(this.isV1)
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
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.remark') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark.
   * 
   * # <weight>
   * - `O(1)`
   * # </weight>
   */
  get asV1(): {remark: Uint8Array} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.remark_with_event') === 'f4e9b5b7572eeae92978087ece9b4f57cb5cab4f16baf5625bb9ec4a432bad63'
  }

  /**
   * Make some on-chain remark and emit event.
   * 
   * # <weight>
   * - `O(b)` where b is the length of the remark.
   * - 1 event.
   * # </weight>
   */
  get asV1(): {remark: Uint8Array} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class SystemSetChangesTrieConfigCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'System.set_changes_trie_config')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_changes_trie_config') === 'ced137e2f8792ce87e1f2b20f97e1de9a31001f9c44069dc6e73b9e4c061c311'
  }

  /**
   * Set the new changes trie configuration.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write or delete (codec `O(1)`).
   * - 1 call to `deposit_log`: Uses `append` API, so O(1)
   * - Base Weight: 7.218 µs
   * - DB Weight:
   *     - Writes: Changes Trie, System Digest
   * # </weight>
   */
  get asV1(): {changesTrieConfig: (v1.ChangesTrieConfiguration | undefined)} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code.
   * 
   * # <weight>
   * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
   * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
   *   expensive).
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime, but generally this is very
   * expensive. We will treat this as a full block.
   * # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_code_without_checks') === '7bf3d4785d9be7a4872f39cbd3702a66e16f7ee01e4446fb4a05624dc0ec4c93'
  }

  /**
   * Set the new runtime code without doing any checks of the given `code`.
   * 
   * # <weight>
   * - `O(C)` where `C` length of `code`
   * - 1 storage write (codec `O(C)`).
   * - 1 digest item.
   * - 1 event.
   * The weight of this function is dependent on the runtime. We will treat this as a full
   * block. # </weight>
   */
  get asV1(): {code: Uint8Array} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_heap_pages') === '130172e47c5e517627712b4d084768b98489d920284223ea8ef9c462339b5808'
  }

  /**
   * Set the number of pages in the WebAssembly environment's heap.
   * 
   * # <weight>
   * - `O(1)`
   * - 1 storage write.
   * - Base Weight: 1.405 µs
   * - 1 write to HEAP_PAGES
   * - 1 digest item
   * # </weight>
   */
  get asV1(): {pages: bigint} {
    assert(this.isV1)
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
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get isV1(): boolean {
    return this._chain.getCallHash('System.set_storage') === 'a4fb507615d69849afb1b2ee654006f9be48bb6e960a4674624d6e46e4382083'
  }

  /**
   * Set some items of storage.
   * 
   * # <weight>
   * - `O(I)` where `I` length of `items`
   * - `I` storage writes (`O(1)`).
   * - Base Weight: 0.568 * i µs
   * - Writes: Number of items
   * # </weight>
   */
  get asV1(): {items: [Uint8Array, Uint8Array][]} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class TagsCreateTagCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tags.create_tag')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Create a tag
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Tags.create_tag') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Create a tag
   */
  get asV1(): null {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class TagsTagAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tags.tag_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Adds `tag_id` to `asset_id`. `origin` must own the asset and tag.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Tags.tag_asset') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
  }

  /**
   * Adds `tag_id` to `asset_id`. `origin` must own the asset and tag.
   */
  get asV1(): {assetId: v1.UUAID, tagId: bigint} {
    assert(this.isV1)
    return this._chain.decodeCall(this.call)
  }
}

export class TagsUntagAssetCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Tags.untag_asset')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Removes `tag_id` from `asset_id`. `origin` must own the asset and tag.
   */
  get isV1(): boolean {
    return this._chain.getCallHash('Tags.untag_asset') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
  }

  /**
   * Removes `tag_id` from `asset_id`. `origin` must own the asset and tag.
   */
  get asV1(): {assetId: v1.UUAID, tagId: bigint} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.close') === '45a5978a11ceb5a8b2c51f7152abaa939cd8bd4bcdc5e1162029cedba4b598ea'
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
  get asV2(): {proposalHash: v2.H256, index: number, proposalWeightBound: bigint, lengthBound: number} {
    assert(this.isV2)
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
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * Complexity: O(P) where P is the number of max proposals
   * DB Weight:
   * * Reads: Proposals
   * * Writes: Voting, Proposals, ProposalOf
   * # </weight>
   */
  get asV2(): {proposalHash: v2.H256} {
    assert(this.isV2)
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
   * # <weight>
   * ## Weight
   * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
   *   `proposal`
   * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
   * - 1 event
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '27b06bc13c982bedf4c22df3e328c551dacfa2d0aa0b2db963e55d27aaac23ac'
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
  get asV2(): {proposal: v2.Call, lengthBound: number} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.execute') === '66fffa1ff650edb25b908c2b043acf71553670c63c283f14cd88ca2ca47dc52a'
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
  get asV3(): {proposal: v3.Call, lengthBound: number} {
    assert(this.isV3)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === '714fdb75fa52c393afe5497690f80b50f8b451534183c14d396acc789a52f66a'
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
  get asV2(): {threshold: number, proposal: v2.Call, lengthBound: number} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('TechnicalCommittee.propose') === 'cdf7d19b893f28f26424698248ad1b2f03188005aa449f0092d7c707cdefda8a'
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
  get asV3(): {threshold: number, proposal: v3.Call, lengthBound: number} {
    assert(this.isV3)
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
   * Requires root origin.
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
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get isV2(): boolean {
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
   * Requires root origin.
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
   * # <weight>
   * ## Weight
   * - `O(MP + N)` where:
   *   - `M` old-members-count (code- and governance-bounded)
   *   - `N` new-members-count (code- and governance-bounded)
   *   - `P` proposals-count (code-bounded)
   * - DB:
   *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
   *     members
   *   - 1 storage read (codec `O(P)`) for reading the proposals
   *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
   *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
   * # </weight>
   */
  get asV2(): {newMembers: v2.AccountId32[], prime: (v2.AccountId32 | undefined), oldCount: number} {
    assert(this.isV2)
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
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get isV2(): boolean {
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
   * # <weight>
   * ## Weight
   * - `O(M)` where `M` is members-count (code- and governance-bounded)
   * - DB:
   *   - 1 storage read `Members` (codec `O(M)`)
   *   - 1 storage mutation `Voting` (codec `O(M)`)
   * - 1 event
   * # </weight>
   */
  get asV2(): {proposal: v2.H256, index: number, approve: boolean} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.add_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Add a member `who` to the set.
   * 
   * May only be called from `T::AddOrigin`.
   */
  get asV2(): {who: v2.AccountId32} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.change_key') === 'f866dcb3e8857987a2d21e57c13216c10bb21546a718b81d5e2c0989d6e95df7'
  }

  /**
   * Swap out the sending member for some other key `new`.
   * 
   * May only be called from `Signed` origin of a current member.
   * 
   * Prime membership is passed from the origin account to `new`, if extant.
   */
  get asV2(): {new: v2.AccountId32} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.clear_prime') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Remove the prime member if it exists.
   * 
   * May only be called from `T::PrimeOrigin`.
   */
  get asV2(): null {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.remove_member') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Remove a member `who` from the set.
   * 
   * May only be called from `T::RemoveOrigin`.
   */
  get asV2(): {who: v2.AccountId32} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.reset_members') === 'd8adca14f9b9cadeaf2b2e6dd47991d05cb423ce3a00dccbb9efa35e36f5a65a'
  }

  /**
   * Change the membership to a new set, disregarding the existing membership. Be nice and
   * pass `members` pre-sorted.
   * 
   * May only be called from `T::ResetOrigin`.
   */
  get asV2(): {members: v2.AccountId32[]} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.set_prime') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Set the prime member. Must be a current member.
   * 
   * May only be called from `T::PrimeOrigin`.
   */
  get asV2(): {who: v2.AccountId32} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('TechnicalMembership.swap_member') === 'f9cf5ef851567c52b54f359126b80e6fa967b49f082dd77310b8461819cd13df'
  }

  /**
   * Swap out one member `remove` for another `add`.
   * 
   * May only be called from `T::SwapOrigin`.
   * 
   * Prime membership is *not* passed from `remove` to `add`, if extant.
   */
  get asV2(): {remove: v2.AccountId32, add: v2.AccountId32} {
    assert(this.isV2)
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
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get isV1(): boolean {
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
   * # <weight>
   * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
   * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
   *   `on_finalize`)
   * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
   * # </weight>
   */
  get asV1(): {now: bigint} {
    assert(this.isV1)
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
  get isV2(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '7ff669989eeb730f18e1dbefbf5a64f7c9e2a52c7de9438c471ba2656ee6dd04'
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
  get asV2(): {index: number, call: v2.Call} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.as_derivative') === '372d5898f4bcd5ad2160d1b2b710938400d6a7d7f01f37da58ee22c6e13fa7d0'
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
  get asV3(): {index: number, call: v3.Call} {
    assert(this.isV3)
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
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
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
  get isV2(): boolean {
    return this._chain.getCallHash('Utility.batch') === 'a437b3b71bdfc64c3b0d1174450cd1c80da46c0d3e6474273f2a019b5039571f'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
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
  get asV2(): {calls: v2.Call[]} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
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
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.batch') === '9d7fe5e4c746f82073a3773ab3b7a6e5f8922a4ea8dad6e7909da9a5df1cadfa'
  }

  /**
   * Send a batch of dispatch calls.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
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
  get asV3(): {calls: v3.Call[]} {
    assert(this.isV3)
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
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === 'a437b3b71bdfc64c3b0d1174450cd1c80da46c0d3e6474273f2a019b5039571f'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV2(): {calls: v2.Call[]} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.batch_all') === '9d7fe5e4c746f82073a3773ab3b7a6e5f8922a4ea8dad6e7909da9a5df1cadfa'
  }

  /**
   * Send a batch of dispatch calls and atomically execute them.
   * The whole transaction will rollback and fail if any of the calls failed.
   * 
   * May be called from any origin.
   * 
   * - `calls`: The calls to be dispatched from the same origin. The number of call must not
   *   exceed the constant: `batched_calls_limit` (available in constant metadata).
   * 
   * If origin is root then call are dispatch without checking origin filter. (This includes
   * bypassing `frame_system::Config::BaseCallFilter`).
   * 
   * # <weight>
   * - Complexity: O(C) where C is the number of calls to be batched.
   * # </weight>
   */
  get asV3(): {calls: v3.Call[]} {
    assert(this.isV3)
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
   * # <weight>
   * - O(1).
   * - Limited storage reads.
   * - One DB write (event).
   * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
   * # </weight>
   */
  get isV2(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '73e96fc69c1f27b676ab93125136237acf055551df3075f3d3b8d65d0f7217dd'
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
  get asV2(): {asOrigin: v2.OriginCaller, call: v2.Call} {
    assert(this.isV2)
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
  get isV3(): boolean {
    return this._chain.getCallHash('Utility.dispatch_as') === '7ae8c51eff672854c3de137262979b24be3a0ca30efd66f5a305b85c41649f2a'
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
  get asV3(): {asOrigin: v3.OriginCaller, call: v3.Call} {
    assert(this.isV3)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingClaimCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.claim')
    this._chain = ctx._chain
    this.call = call
  }

  get isV2(): boolean {
    return this._chain.getCallHash('Vesting.claim') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  get asV2(): null {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingClaimForCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.claim_for')
    this._chain = ctx._chain
    this.call = call
  }

  get isV2(): boolean {
    return this._chain.getCallHash('Vesting.claim_for') === 'b1b9d2bb9f2a27d3dfcb795f19a6625638978d1474d5d4dd34d918f46415e1e9'
  }

  get asV2(): {dest: v2.MultiAddress} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingUpdateVestingSchedulesCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.update_vesting_schedules')
    this._chain = ctx._chain
    this.call = call
  }

  get isV2(): boolean {
    return this._chain.getCallHash('Vesting.update_vesting_schedules') === '5cf5b6a09a9387300d4c3c69374c4045d3ca2a2794fa169a86fec9d8e1f3920c'
  }

  get asV2(): {who: v2.MultiAddress, vestingSchedules: v2.VestingSchedule[]} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingVestedTransferCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'Vesting.vested_transfer')
    this._chain = ctx._chain
    this.call = call
  }

  get isV2(): boolean {
    return this._chain.getCallHash('Vesting.vested_transfer') === 'f1e312a24c806adf72eb68877c2620386cbfc53664014b14338b9491e044cb0d'
  }

  get asV2(): {dest: v2.MultiAddress, schedule: v2.VestingSchedule} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingRegistrarClaimBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'VestingRegistrar.claim_batch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Batch claim for vested accounts
   */
  get isV2(): boolean {
    return this._chain.getCallHash('VestingRegistrar.claim_batch') === '12886a7697ff37821fd3068ef982fe5fe78bd390b2f49b4ad09eb1856aa01e23'
  }

  /**
   * Batch claim for vested accounts
   */
  get asV2(): {accounts: v2.VestedAccount[]} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}

export class VestingRegistrarRegisterBatchCall {
  private readonly _chain: Chain
  private readonly call: Call

  constructor(ctx: CallContext)
  constructor(ctx: ChainContext, call: Call)
  constructor(ctx: CallContext, call?: Call) {
    call = call || ctx.call
    assert(call.name === 'VestingRegistrar.register_batch')
    this._chain = ctx._chain
    this.call = call
  }

  /**
   * Register a batch of accounts and their vesting amounts.
   */
  get isV2(): boolean {
    return this._chain.getCallHash('VestingRegistrar.register_batch') === '5a91bb5342005787ddd27073836bcb94df9d7da26d615824a05b79bb0149a662'
  }

  /**
   * Register a batch of accounts and their vesting amounts.
   */
  get asV2(): {accounts: v2.VestedAccount[], startBlockNumber: number, period: number, periodCount: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.resume_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Resumes all XCM executions for the XCMP queue.
   * 
   * Note that this function doesn't change the status of the in/out bound channels.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get asV2(): null {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.service_overweight') === 'f6b281f58290b6af96ac2dda36163d81223f37d0a8a100877e2526969a57d772'
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
  get asV2(): {index: bigint, weightLimit: bigint} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.suspend_xcm_execution') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
   * 
   * - `origin`: Must pass `ControllerOrigin`.
   */
  get asV2(): null {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_drop_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue after which we drop any further
   * messages from the channel.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.drop_threshold`
   */
  get asV2(): {new: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_resume_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
   * message sending may recommence after it has been suspended.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.resume_threshold`
   */
  get asV2(): {new: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_suspend_threshold') === '56549a8e90ef70438b73ca659a6b72776495b4c60df84463168d148f5c52d05d'
  }

  /**
   * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
   * suspend their sending.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.suspend_value`
   */
  get asV2(): {new: number} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_threshold_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrites the amount of remaining weight under which we stop processing messages.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.threshold_weight`
   */
  get asV2(): {new: bigint} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_weight_restrict_decay') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrites the speed to which the available weight approaches the maximum weight.
   * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
   */
  get asV2(): {new: bigint} {
    assert(this.isV2)
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
  get isV2(): boolean {
    return this._chain.getCallHash('XcmpQueue.update_xcmp_max_individual_weight') === '8768ae636c927ffed8b3cb5f0df1e15afb0921835e5bc84b9495f4b39ea663b7'
  }

  /**
   * Overwrite the maximum amount of weight any individual message may consume.
   * Messages above this weight go into the overweight queue and may only be serviced explicitly.
   * 
   * - `origin`: Must pass `Root`.
   * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
   */
  get asV2(): {new: bigint} {
    assert(this.isV2)
    return this._chain.decodeCall(this.call)
  }
}
