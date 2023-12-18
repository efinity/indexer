import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as v1003 from '../v1003'

export const createCollection =  {
    name: 'MultiTokens.create_collection',
    /**
     * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
     * 
     * # Errors
     * 
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.create_collection',
        sts.struct({
            descriptor: matrixEnjinV603.DefaultCollectionDescriptor,
        })
    ),
}

export const destroyCollection =  {
    name: 'MultiTokens.destroy_collection',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.destroy_collection',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const mutateCollection =  {
    name: 'MultiTokens.mutate_collection',
    /**
     * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
     * 
     * # Errors
     * 
     * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
     * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
}

export const mutateToken =  {
    name: 'MultiTokens.mutate_token',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.mutate_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            mutation: matrixEnjinV603.DefaultTokenMutation,
        })
    ),
}

export const mint =  {
    name: 'MultiTokens.mint',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultMintParams,
        })
    ),
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
    v500: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v500.MultiAddress,
            collectionId: sts.bigint(),
            params: v500.DefaultMintParams,
        })
    ),
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
    v600: new CallType(
        'MultiTokens.mint',
        sts.struct({
            recipient: v600.MultiAddress,
            collectionId: sts.bigint(),
            params: v600.DefaultMintParams,
        })
    ),
}

export const burn =  {
    name: 'MultiTokens.burn',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.burn',
        sts.struct({
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultBurnParams,
        })
    ),
}

export const transfer =  {
    name: 'MultiTokens.transfer',
    /**
     * `operator` transfers to `recipient` for `collection_id` with `params`
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.transfer',
        sts.struct({
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultTransferParams,
        })
    ),
}

export const freeze =  {
    name: 'MultiTokens.freeze',
    /**
     * Freeze collection, token or account
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.freeze',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const thaw =  {
    name: 'MultiTokens.thaw',
    /**
     * Thaw collection, token or account
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.thaw',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const setAttribute =  {
    name: 'MultiTokens.set_attribute',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.bytes(),
        })
    ),
}

export const removeAttribute =  {
    name: 'MultiTokens.remove_attribute',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.remove_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
        })
    ),
}

export const removeAllAttributes =  {
    name: 'MultiTokens.remove_all_attributes',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.remove_all_attributes',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributeCount: sts.number(),
        })
    ),
}

export const batchTransfer =  {
    name: 'MultiTokens.batch_transfer',
    /**
     * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
     * account. A single failure will fail all transfers.
     * 
     * # Errors
     * 
     * - [`Error::AmountZero`] if `amount == 0`.
     * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_transfer',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV603.Recipient),
        })
    ),
}

export const batchMint =  {
    name: 'MultiTokens.batch_mint',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => matrixEnjinV603.Type_395),
        })
    ),
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
    v500: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v500.Type_380),
        })
    ),
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
    v600: new CallType(
        'MultiTokens.batch_mint',
        sts.struct({
            collectionId: sts.bigint(),
            recipients: sts.array(() => v600.Type_380),
        })
    ),
}

export const batchSetAttribute =  {
    name: 'MultiTokens.batch_set_attribute',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.batch_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            attributes: sts.array(() => matrixEnjinV603.AttributeKeyValuePair),
        })
    ),
}

export const approveCollection =  {
    name: 'MultiTokens.approve_collection',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.approve_collection',
        sts.struct({
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const unapproveCollection =  {
    name: 'MultiTokens.unapprove_collection',
    /**
     * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
     * 
     * # Errors
     * 
     * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.unapprove_collection',
        sts.struct({
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const approveToken =  {
    name: 'MultiTokens.approve_token',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.approve_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            amount: sts.bigint(),
            expiration: sts.option(() => sts.number()),
            currentAmount: sts.bigint(),
        })
    ),
}

export const unapproveToken =  {
    name: 'MultiTokens.unapprove_token',
    /**
     * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
     * 
     * # Errors
     * 
     * - [`Error::TokenAccountNotFound`] if the token account does not exist
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.unapprove_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const claimCollections =  {
    name: 'MultiTokens.claim_collections',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
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
    matrixEnjinV1000: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumSignature: matrixEnjinV1000.Signature,
            ethereumAddress: matrixEnjinV1000.H160,
            collectionCount: sts.number(),
        })
    ),
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
    v604: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: v604.AccountId32,
            ethereumSignature: v604.Signature,
            ethereumAddress: v604.H160,
        })
    ),
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
    v1000: new CallType(
        'MultiTokens.claim_collections',
        sts.struct({
            destination: v1000.AccountId32,
            ethereumSignature: v1000.Signature,
            ethereumAddress: v1000.H160,
            collectionCount: sts.number(),
        })
    ),
}

export const claimTokens =  {
    name: 'MultiTokens.claim_tokens',
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
    matrixEnjinV603: new CallType(
        'MultiTokens.claim_tokens',
        sts.struct({
            destination: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
}

export const forceMutateCollection =  {
    name: 'MultiTokens.force_mutate_collection',
    /**
     * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
     * root and the `caller` account should be specified.
     * 
     * # Errors
     * 
     * Same as [`mutate_collection`](Self::mutate_collection)
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_mutate_collection',
        sts.struct({
            collectionId: sts.bigint(),
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
}

export const forceTransfer =  {
    name: 'MultiTokens.force_transfer',
    /**
     * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
     * account should be specified.
     * 
     * # Errors
     * 
     * Same as [`transfer`](Self::transfer)
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_transfer',
        sts.struct({
            source: matrixEnjinV603.MultiAddress,
            destination: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultTransferParams,
        })
    ),
}

export const forceSetCollection =  {
    name: 'MultiTokens.force_set_collection',
    /**
     * Set the Collections storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_collection',
        sts.struct({
            collectionId: sts.bigint(),
            value: sts.option(() => matrixEnjinV603.Collection),
        })
    ),
}

export const forceSetToken =  {
    name: 'MultiTokens.force_set_token',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => matrixEnjinV603.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v500: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v500.Token),
        })
    ),
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    v600: new CallType(
        'MultiTokens.force_set_token',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            value: sts.option(() => v600.Token),
        })
    ),
}

export const forceSetAttribute =  {
    name: 'MultiTokens.force_set_attribute',
    /**
     * Set the Tokens storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_attribute',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.option(() => sts.bigint()),
            key: sts.bytes(),
            value: sts.option(() => matrixEnjinV603.Attribute),
        })
    ),
}

export const forceSetCollectionAccount =  {
    name: 'MultiTokens.force_set_collection_account',
    /**
     * Set the CollectionAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_collection_account',
        sts.struct({
            collectionId: sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: sts.option(() => matrixEnjinV603.CollectionAccount),
        })
    ),
}

export const forceSetTokenAccount =  {
    name: 'MultiTokens.force_set_token_account',
    /**
     * Set the TokenAccounts storage to the given `value`, origin must be root
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_token_account',
        sts.struct({
            collectionId: sts.bigint(),
            tokenId: sts.bigint(),
            accountId: matrixEnjinV603.MultiAddress,
            value: sts.option(() => matrixEnjinV603.TokenAccount),
        })
    ),
}

export const forceCreateCollection =  {
    name: 'MultiTokens.force_create_collection',
    /**
     * Creates a new collection from `descriptor` at `collection_id`, origin must be root
     * 
     * # Errors
     * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
     * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_create_collection',
        sts.struct({
            owner: matrixEnjinV603.AccountId32,
            collectionId: sts.bigint(),
            descriptor: matrixEnjinV603.DefaultCollectionDescriptor,
        })
    ),
}

export const forceMint =  {
    name: 'MultiTokens.force_mint',
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            recipient: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultMintParams,
            depositBacker: sts.option(() => matrixEnjinV603.MultiAddress),
        })
    ),
    /**
     * Same as [`mint`](Self::mint), but it is callable by
     * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
     * owner. If `depositor` is `Some`, they will pay the deposit for minting.
     */
    v1003: new CallType(
        'MultiTokens.force_mint',
        sts.struct({
            caller: sts.option(() => v1003.MultiAddress),
            recipient: v1003.MultiAddress,
            collectionId: sts.bigint(),
            params: v1003.FlexibleMintParams,
            depositor: sts.option(() => v1003.MultiAddress),
        })
    ),
}

export const forceBurn =  {
    name: 'MultiTokens.force_burn',
    /**
     * Same as [`burn`](Self::burn), but it is only callable by
     * [`Config::ForceOrigin`]. Executes the burn by `caller`.
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_burn',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            params: matrixEnjinV603.DefaultBurnParams,
        })
    ),
}

export const forceApproveCollection =  {
    name: 'MultiTokens.force_approve_collection',
    /**
     * Same as [`approve_collection`](Self::approve_collection), but it is callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_approve_collection',
        sts.struct({
            caller: matrixEnjinV603.MultiAddress,
            collectionId: sts.bigint(),
            operator: matrixEnjinV603.AccountId32,
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const forceFreeze =  {
    name: 'MultiTokens.force_freeze',
    /**
     * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_freeze',
        sts.struct({
            info: matrixEnjinV603.Freeze,
        })
    ),
}

export const forceSetNextCollectionId =  {
    name: 'MultiTokens.force_set_next_collection_id',
    /**
     * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV603: new CallType(
        'MultiTokens.force_set_next_collection_id',
        sts.struct({
            value: sts.bigint(),
        })
    ),
}

export const finishClaimTokens =  {
    name: 'MultiTokens.finish_claim_tokens',
    /**
     * Sends an event that signifies claiming the tokens was completed. Only callable by
     * [`Config::EthereumMigrationOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.finish_claim_tokens',
        sts.struct({
            destination: matrixEnjinV1000.AccountId32,
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}

export const forceSetEthereumAccount =  {
    name: 'MultiTokens.force_set_ethereum_account',
    /**
     * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_account',
        sts.struct({
            address: matrixEnjinV1000.H160,
            value: sts.option(() => sts.array(() => sts.bigint())),
        })
    ),
}

export const forceSetEthereumCollectionId =  {
    name: 'MultiTokens.force_set_ethereum_collection_id',
    /**
     * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_collection_id',
        sts.struct({
            ethereumCollectionId: sts.bigint(),
            nativeCollectionId: sts.option(() => sts.bigint()),
        })
    ),
}

export const forceSetUnmintableTokenIds =  {
    name: 'MultiTokens.force_set_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] storage. Only callable by
     * [`Config::ForceOrigin`].
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_unmintable_token_ids',
        sts.struct({
            collectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        })
    ),
}

export const forceCreateEthereumCollection =  {
    name: 'MultiTokens.force_create_ethereum_collection',
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
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_create_ethereum_collection',
        sts.struct({
            owner: matrixEnjinV1000.AccountId32,
            claimer: matrixEnjinV1000.H160,
            ethereumCollectionId: sts.bigint(),
            descriptor: matrixEnjinV1000.DefaultCollectionDescriptor,
        })
    ),
}

export const forceSetEthereumUnmintableTokenIds =  {
    name: 'MultiTokens.force_set_ethereum_unmintable_token_ids',
    /**
     * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
     * ethereum_collection_id is invalid
     */
    matrixEnjinV1000: new CallType(
        'MultiTokens.force_set_ethereum_unmintable_token_ids',
        sts.struct({
            ethereumCollectionId: sts.bigint(),
            baseTokenId: sts.bigint(),
            tokenIndex: sts.bigint(),
        })
    ),
}
