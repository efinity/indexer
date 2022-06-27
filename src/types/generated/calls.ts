import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v1 from './v1'
import * as v2 from './v2'

export class BalancesForceTransferCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.forceTransfer' || this.ctx.extrinsic.name === 'balances.force_transfer')
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
    return this.ctx._chain.getCallHash('balances.force_transfer') === 'e5944fbe8224a17fe49f9c1d1d01efaf87fb1778fd39618512af54c9ba6f9dff'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): {source: v1.MultiAddress, dest: v1.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV1
  }
}

export class BalancesTransferCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transfer')
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
    return this.ctx._chain.getCallHash('balances.transfer') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): {dest: v1.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV1
  }
}

export class BalancesTransferAllCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transferAll' || this.ctx.extrinsic.name === 'balances.transfer_all')
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
    return this.ctx._chain.getCallHash('balances.transfer_all') === '9c94c2ca9979f6551af6e123fb6b6ba14d026f862f9a023706f8f88c556b355f'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): {dest: v1.MultiAddress, keepAlive: boolean} {
    deprecateLatest()
    return this.asV1
  }
}

export class BalancesTransferKeepAliveCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'balances.transferKeepAlive' || this.ctx.extrinsic.name === 'balances.transfer_keep_alive')
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
    return this.ctx._chain.getCallHash('balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1
  }

  get asLatest(): {dest: v1.MultiAddress, value: bigint} {
    deprecateLatest()
    return this.asV1
  }
}

export class MultiTokensApproveCollectionCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.approveCollection' || this.ctx.extrinsic.name === 'multiTokens.approve_collection')
  }

  /**
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.approve_collection') === '488accbd8a7ccff93c1ce6b5609ef67874c52cc8fc80b3b48a2cad226450c092'
  }

  /**
   * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get asV2(): {collectionId: bigint, operator: v2.AccountId32, expiration: (number | undefined)} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, operator: v2.AccountId32, expiration: (number | undefined)} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensApproveTokenCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.approveToken' || this.ctx.extrinsic.name === 'multiTokens.approve_token')
  }

  /**
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.approve_token') === '7266369f860222731cfac3b4dc9f7b3eb8550de09ee165a184b933efc53cd27a'
  }

  /**
   * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, amount: bigint, expiration: (number | undefined), currentAmount: bigint} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32, amount: bigint, expiration: (number | undefined), currentAmount: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensBurnCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.burn')
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
    return this.ctx._chain.getCallHash('multiTokens.burn') === '5e518fd41f2e62474b4a1bae295d7c2b0bec3f70f20ccbfeb4517ee9e7984bc3'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, params: v2.DefaultBurnParams} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensCreateCollectionCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.createCollection' || this.ctx.extrinsic.name === 'multiTokens.create_collection')
  }

  /**
   * Creates a new collection from `descriptor`
   * 
   * # Errors
   * - `DepositReserveFailed` if the deposit cannot be reserved
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.create_collection') === 'c93ec84acdd32c46f33bfe2493efe0a285c1491f6e3d72c98d705a6ac5165146'
  }

  /**
   * Creates a new collection from `descriptor`
   * 
   * # Errors
   * - `DepositReserveFailed` if the deposit cannot be reserved
   */
  get asV2(): {descriptor: v2.DefaultCollectionDescriptor} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {descriptor: v2.DefaultCollectionDescriptor} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensDestroyCollectionCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.destroyCollection' || this.ctx.extrinsic.name === 'multiTokens.destroy_collection')
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
    return this.ctx._chain.getCallHash('multiTokens.destroy_collection') === '5213672185bfcdfd14c0e7c97d6a1d1c6244ef0903db4317a9b0bd4a1ab10375'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensFreezeCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.freeze')
  }

  /**
   * Freeze collection, token or account
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.freeze') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
  }

  /**
   * Freeze collection, token or account
   */
  get asV2(): {info: v2.Freeze} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {info: v2.Freeze} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensMintCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.mint')
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
    return this.ctx._chain.getCallHash('multiTokens.mint') === 'eaebb17dc952303dfd16624a15d2cde22e3b66a7f91ca95f2f92cd3104cb2499'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {recipient: v2.MultiAddress, collectionId: bigint, params: v2.DefaultMintParams} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensRemoveAttributeCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.removeAttribute' || this.ctx.extrinsic.name === 'multiTokens.remove_attribute')
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
    return this.ctx._chain.getCallHash('multiTokens.remove_attribute') === '5e8dda41d19b04f7e051283b9b20aed0a83222ef4bc596239942a512d10e143c'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensSetAttributeCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.setAttribute' || this.ctx.extrinsic.name === 'multiTokens.set_attribute')
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
    return this.ctx._chain.getCallHash('multiTokens.set_attribute') === '1442e960b51ef446ff50fc6d27284693378495f9905ed8fbc35811b81dcf7c7b'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensThawCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.thaw')
  }

  /**
   * Thaw collection, token or account
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.thaw') === '019c3973873981e43338b40ff63c8765c270b4956d51a9937f393b0e8e31d9a7'
  }

  /**
   * Thaw collection, token or account
   */
  get asV2(): {info: v2.Freeze} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {info: v2.Freeze} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensTransferCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.transfer')
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
    return this.ctx._chain.getCallHash('multiTokens.transfer') === '3a904597294b52262716ac476178f413a640c58c5df5fdee9d6a42b369dab12a'
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
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {recipient: v2.MultiAddress, collectionId: bigint, params: v2.DefaultTransferParams} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensUnapproveCollectionCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.unapproveCollection' || this.ctx.extrinsic.name === 'multiTokens.unapprove_collection')
  }

  /**
   * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.unapprove_collection') === 'e5170bfdb3c4351aa216ff597896abe5ecc75ec89c47b522a97790870cc3b5ef'
  }

  /**
   * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
   */
  get asV2(): {collectionId: bigint, operator: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, operator: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}

export class MultiTokensUnapproveTokenCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'multiTokens.unapproveToken' || this.ctx.extrinsic.name === 'multiTokens.unapprove_token')
  }

  /**
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get isV2(): boolean {
    return this.ctx._chain.getCallHash('multiTokens.unapprove_token') === 'bf808826dcdafcc9b31e08b287969eda26c2a350dbd9b501129943a436ab8854'
  }

  /**
   * Unapprove `operator` to transfer `origin`'s `token`s
   */
  get asV2(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32} {
    assert(this.isV2)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2
  }

  get asLatest(): {collectionId: bigint, tokenId: bigint, operator: v2.AccountId32} {
    deprecateLatest()
    return this.asV2
  }
}
