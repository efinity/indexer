import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const migrateCollections =  {
    name: 'MultiTokensMigration.migrate_collections',
    /**
     * Migrates [`Collections`] by setting values for the given collections
     */
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.migrate_collections',
        sts.struct({
            collections: sts.array(() => sts.tuple(() => [sts.bigint(), matrixEnjinV603.Collection])),
        })
    ),
}

export const migrateTokens =  {
    name: 'MultiTokensMigration.migrate_tokens',
    /**
     * Migrates [`Tokens`] by setting values for the given tokens
     */
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.migrate_tokens',
        sts.struct({
            tokens: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint(), matrixEnjinV603.Token])),
        })
    ),
}

export const migrateCollectionAccounts =  {
    name: 'MultiTokensMigration.migrate_collection_accounts',
    /**
     * Migrates [`CollectionAccounts`] by setting values for the given accounts
     */
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.migrate_collection_accounts',
        sts.struct({
            accounts: sts.array(() => sts.tuple(() => [sts.bigint(), matrixEnjinV603.AccountId32, matrixEnjinV603.CollectionAccount])),
        })
    ),
}

export const migrateTokenAccounts =  {
    name: 'MultiTokensMigration.migrate_token_accounts',
    /**
     * Migrates [`TokenAccounts`] by setting values for the given accounts
     */
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.migrate_token_accounts',
        sts.struct({
            accounts: sts.array(() => sts.tuple(() => [sts.bigint(), sts.bigint(), matrixEnjinV603.AccountId32, matrixEnjinV603.TokenAccount])),
        })
    ),
}

export const migrateAttributes =  {
    name: 'MultiTokensMigration.migrate_attributes',
    /**
     * Migrates [`Attributes`] by setting attribute values for the specified list of attributes
     */
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.migrate_attributes',
        sts.struct({
            attributes: sts.array(() => sts.tuple(() => [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes(), matrixEnjinV603.Attribute])),
        })
    ),
}

export const finalize =  {
    name: 'MultiTokensMigration.finalize',
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
    matrixEnjinV603: new CallType(
        'MultiTokensMigration.finalize',
        sts.struct({
            nextCollectionId: sts.bigint(),
        })
    ),
}
