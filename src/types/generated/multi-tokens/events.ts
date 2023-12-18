import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'

export const collectionCreated =  {
    name: 'MultiTokens.CollectionCreated',
    /**
     * A new collection was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionCreated',
        sts.struct({
            /**
             * The id of the [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The owner of the [`Collection`](ep_multi_tokens::Collection)
             */
            owner: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionDestroyed =  {
    name: 'MultiTokens.CollectionDestroyed',
    /**
     * A collection was destroyed.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionDestroyed',
        sts.struct({
            /**
             * id of collection destroyed
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionMutated =  {
    name: 'MultiTokens.CollectionMutated',
    /**
     * A collection was mutated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionMutated',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of the
             * [`Collection`](ep_multi_tokens::Collection)
             */
            collectionId: sts.bigint(),
            /**
             * The mutation that was applied to the collection
             */
            mutation: matrixEnjinV603.DefaultCollectionMutation,
        })
    ),
}

export const minted =  {
    name: 'MultiTokens.Minted',
    /**
     * Units of a token were minted
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Minted',
        sts.struct({
            /**
             * [`CollectionId`](Config::CollectionId) of minted token
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: sts.bigint(),
            /**
             * issuer of minted token
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * The receiver of the token
             */
            recipient: matrixEnjinV603.AccountId32,
            /**
             * the amount of units minted
             */
            amount: sts.bigint(),
        })
    ),
}

export const tokenCreated =  {
    name: 'MultiTokens.TokenCreated',
    /**
     * A token was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) minted
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) minted
             */
            tokenId: sts.bigint(),
            /**
             * issuer of minted [`Token`](ep_multi_tokens::Token)
             */
            issuer: matrixEnjinV603.RootOrSigned,
            /**
             * the initial supply of the [`Token`](ep_multi_tokens::Token)
             */
            initialSupply: sts.bigint(),
        })
    ),
}

export const tokenMutated =  {
    name: 'MultiTokens.TokenMutated',
    /**
     * A token was mutated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenMutated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
             * belongs to
             */
            collectionId: sts.bigint(),
            /**
             * Id of the [`Token`](ep_multi_tokens::Token) mutated
             */
            tokenId: sts.bigint(),
            /**
             * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
             */
            mutation: matrixEnjinV603.DefaultTokenMutation,
        })
    ),
}

export const burned =  {
    name: 'MultiTokens.Burned',
    /**
     * Units of a token were burned
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Burned',
        sts.struct({
            /**
             * collection id of tokens burned
             */
            collectionId: sts.bigint(),
            /**
             * the token id that was burned
             */
            tokenId: sts.bigint(),
            /**
             * the account the tokens were burned from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was burned for each token_id
             */
            amount: sts.bigint(),
        })
    ),
}

export const tokenDestroyed =  {
    name: 'MultiTokens.TokenDestroyed',
    /**
     * A token was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) destroyed
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) destroyed
             */
            tokenId: sts.bigint(),
            /**
             * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
             * [`Token`](ep_multi_tokens::Token)
             */
            caller: matrixEnjinV603.AccountId32,
        })
    ),
}

export const transferred =  {
    name: 'MultiTokens.Transferred',
    /**
     * Units of a token were transferred
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Transferred',
        sts.struct({
            /**
             * collection_id of transferred collection
             */
            collectionId: sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) transferred
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * transaction sender
             */
            from: matrixEnjinV603.AccountId32,
            /**
             * transaction recipient
             */
            to: matrixEnjinV603.AccountId32,
            /**
             * number of units transferred
             */
            amount: sts.bigint(),
        })
    ),
}

export const frozen =  {
    name: 'MultiTokens.Frozen',
    /**
     * Collection, token or account was frozen
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Frozen',
        matrixEnjinV603.Freeze
    ),
}

export const thawed =  {
    name: 'MultiTokens.Thawed',
    /**
     * Collection, token or account was unfrozen
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Thawed',
        matrixEnjinV603.Freeze
    ),
}

export const attributeSet =  {
    name: 'MultiTokens.AttributeSet',
    /**
     * New attribute has been set
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.AttributeSet',
        sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: sts.bigint(),
            /**
             * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * key of attribute set
             */
            key: sts.bytes(),
            /**
             * value of attribute set
             */
            value: sts.bytes(),
        })
    ),
}

export const attributeRemoved =  {
    name: 'MultiTokens.AttributeRemoved',
    /**
     * An attribute has been removed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.AttributeRemoved',
        sts.struct({
            /**
             * collectionId of collection modified
             */
            collectionId: sts.bigint(),
            /**
             * tokenid of token modified
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * key of attribute cleared
             */
            key: sts.bytes(),
        })
    ),
}

export const approved =  {
    name: 'MultiTokens.Approved',
    /**
     * An approval took place. If `token_id` is `None`, it applies to the whole collection.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Approved',
        sts.struct({
            /**
             * The collection that was approved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was approved
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * The account that made the approval
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was approved to operate
             */
            operator: matrixEnjinV603.AccountId32,
            /**
             * The amount approved for
             */
            amount: sts.option(() => sts.bigint()),
            /**
             * The expiration of the approval
             */
            expiration: sts.option(() => sts.number()),
        })
    ),
}

export const unapproved =  {
    name: 'MultiTokens.Unapproved',
    /**
     * An unapproval took place. If `token_id` is `None`, it applies to the collection.
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Unapproved',
        sts.struct({
            /**
             * The collection that was unapproved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was unapproved
             */
            tokenId: sts.option(() => sts.bigint()),
            /**
             * The account that `operator` was unapproved for
             */
            owner: matrixEnjinV603.AccountId32,
            /**
             * The account that was unapproved to operate
             */
            operator: matrixEnjinV603.AccountId32,
        })
    ),
}

export const collectionAccountCreated =  {
    name: 'MultiTokens.CollectionAccountCreated',
    /**
     * A new collection account was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const tokenAccountCreated =  {
    name: 'MultiTokens.TokenAccountCreated',
    /**
     * A new token account was created
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountCreated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the account is created
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance that this account holds
             */
            balance: sts.bigint(),
        })
    ),
}

export const collectionAccountDestroyed =  {
    name: 'MultiTokens.CollectionAccountDestroyed',
    /**
     * A collection account was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the destroyed account
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const tokenAccountDestroyed =  {
    name: 'MultiTokens.TokenAccountDestroyed',
    /**
     * A token account was destroyed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountDestroyed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the account is created
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) fof the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
             */
            accountId: matrixEnjinV603.AccountId32,
        })
    ),
}

export const reserved =  {
    name: 'MultiTokens.Reserved',
    /**
     * Token units were reserved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Reserved',
        sts.struct({
            /**
             * The collection in which token was reserved
             */
            collectionId: sts.bigint(),
            /**
             * The token that was reserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was reserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
}

export const unreserved =  {
    name: 'MultiTokens.Unreserved',
    /**
     * Token units were unreserved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Unreserved',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was unreserved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was unreserved
             */
            tokenId: sts.bigint(),
            /**
             * The account that unreserved the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount that was unreserved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the unreserved tokens
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
}

export const movedReserves =  {
    name: 'MultiTokens.MovedReserves',
    /**
     * Reserved token units were moved
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.MovedReserves',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
}

export const reserveRepatriated =  {
    name: 'MultiTokens.ReserveRepatriated',
    /**
     * Reserved token units were transferred
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ReserveRepatriated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) in which token was moved
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) that was moved
             */
            tokenId: sts.bigint(),
            /**
             * The account that reserves were moved from
             */
            source: matrixEnjinV603.AccountId32,
            /**
             * The account that received the moved reserves
             */
            destination: matrixEnjinV603.AccountId32,
            /**
             * The amount that was moved
             */
            amount: sts.bigint(),
            /**
             * The identifier of the moved reserves
             */
            reserveId: sts.option(() => sts.bytes()),
        })
    ),
}

export const balanceSet =  {
    name: 'MultiTokens.BalanceSet',
    /**
     * The balance of an account was set
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.BalanceSet',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which balance was set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which balance was set
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The balance of the account
             */
            balance: sts.bigint(),
            /**
             * The reserved balance of the account
             */
            reservedBalance: sts.bigint(),
        })
    ),
}

export const withdraw =  {
    name: 'MultiTokens.Withdraw',
    /**
     * Token units were withdrawn
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Withdraw',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens withdrawn
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens withdrawn
             */
            amount: sts.bigint(),
        })
    ),
}

export const deposit =  {
    name: 'MultiTokens.Deposit',
    /**
     * Token units were deposited
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Deposit',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens deposited
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens deposited
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) deposited to
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens deposited
             */
            amount: sts.bigint(),
        })
    ),
}

export const slashed =  {
    name: 'MultiTokens.Slashed',
    /**
     * An amount of tokens were slashed from account
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.Slashed',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) of the tokens slashed
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the tokens slashed
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) slashed
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The amount of tokens slashed
             */
            amount: sts.bigint(),
        })
    ),
}

export const collectionUpdated =  {
    name: 'MultiTokens.CollectionUpdated',
    /**
     * Collection storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * new value of Collection storage
             */
            value: sts.option(() => matrixEnjinV603.Collection),
        })
    ),
}

export const tokenUpdated =  {
    name: 'MultiTokens.TokenUpdated',
    /**
     * Token storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => matrixEnjinV603.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v500: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v500.Token),
        })
    ),
    /**
     * Token storage was set to `value`
     */
    v600: new EventType(
        'MultiTokens.TokenUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) for which the value is set
             */
            tokenId: sts.bigint(),
            /**
             * new value of Token storage
             */
            value: sts.option(() => v600.Token),
        })
    ),
}

export const nextCollectionIdUpdated =  {
    name: 'MultiTokens.NextCollectionIdUpdated',
    /**
     * NextCollectionId storage was set to `collection_id`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.NextCollectionIdUpdated',
        sts.struct({
            collectionId: sts.bigint(),
        })
    ),
}

export const collectionAccountUpdated =  {
    name: 'MultiTokens.CollectionAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.CollectionAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV603.CollectionAccount),
        })
    ),
}

export const tokenAccountUpdated =  {
    name: 'MultiTokens.TokenAccountUpdated',
    /**
     * TokenAccount storage was set to `value`
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.TokenAccountUpdated',
        sts.struct({
            /**
             * The [`CollectionId`](Config::CollectionId) for which the value is set
             */
            collectionId: sts.bigint(),
            /**
             * The [`TokenId`](Config::TokenId) of the destroyed account
             */
            tokenId: sts.bigint(),
            /**
             * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * new value of TokenAccount storage
             */
            value: sts.option(() => matrixEnjinV603.TokenAccount),
        })
    ),
}

export const migrationStatusUpdated =  {
    name: 'MultiTokens.MigrationStatusUpdated',
    /**
     * Migration stage updated
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.MigrationStatusUpdated',
        sts.struct({
            stage: matrixEnjinV603.MigrationStage,
        })
    ),
}

export const claimedCollections =  {
    name: 'MultiTokens.ClaimedCollections',
    /**
     * Collections were claimed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => matrixEnjinV603.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
    /**
     * Collections were claimed
     */
    v604: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v604.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v604.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => v604.CollectionIdPair),
        })
    ),
    /**
     * Collections were claimed
     */
    v1000: new EventType(
        'MultiTokens.ClaimedCollections',
        sts.struct({
            /**
             * The account that received the claim
             */
            accountId: v1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: v1000.H160,
            /**
             * The collection ids that were claimed
             */
            collectionIds: sts.array(() => sts.bigint()),
        })
    ),
}

export const claimedTokens =  {
    name: 'MultiTokens.ClaimedTokens',
    /**
     * Tokens were claimed
     */
    matrixEnjinV603: new EventType(
        'MultiTokens.ClaimedTokens',
        sts.struct({
            /**
             * The account that received the tokens
             */
            accountId: matrixEnjinV603.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV603.H160,
            /**
             * The asset ids that were claimed
             */
            assetIds: sts.array(() => matrixEnjinV603.AssetIdWithEth),
            /**
             * This is true if there are still more tokens to claim
             */
            moreTokensRemain: sts.boolean(),
        })
    ),
}

export const claimTokensInitiated =  {
    name: 'MultiTokens.ClaimTokensInitiated',
    /**
     * Claims tokens initiated
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimTokensInitiated',
        sts.struct({
            /**
             * The account that will receive the tokens
             */
            accountId: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}

export const claimTokensCompleted =  {
    name: 'MultiTokens.ClaimTokensCompleted',
    /**
     * Finished claiming the tokens
     */
    matrixEnjinV1000: new EventType(
        'MultiTokens.ClaimTokensCompleted',
        sts.struct({
            /**
             * The account that received the tokens
             */
            destination: matrixEnjinV1000.AccountId32,
            /**
             * The ethereum address that initiated the claim
             */
            ethereumAddress: matrixEnjinV1000.H160,
        })
    ),
}
