import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const migratedCollections =  {
    name: 'MultiTokensMigration.MigratedCollections',
    /**
     * Number of collections that have been migrated
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigratedCollections',
        sts.number()
    ),
}

export const migratedTokens =  {
    name: 'MultiTokensMigration.MigratedTokens',
    /**
     * Number of tokens have been migrated
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigratedTokens',
        sts.number()
    ),
}

export const migratedCollectionAccounts =  {
    name: 'MultiTokensMigration.MigratedCollectionAccounts',
    /**
     * Number of collection accounts have been migrated
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigratedCollectionAccounts',
        sts.number()
    ),
}

export const migratedTokenAccounts =  {
    name: 'MultiTokensMigration.MigratedTokenAccounts',
    /**
     * Number of token accounts have been migrated
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigratedTokenAccounts',
        sts.number()
    ),
}

export const migratedAttributes =  {
    name: 'MultiTokensMigration.MigratedAttributes',
    /**
     * Number of attributes have been migrated
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigratedAttributes',
        sts.number()
    ),
}

export const migrationFinished =  {
    name: 'MultiTokensMigration.MigrationFinished',
    /**
     * Indicates that the migration is finished
     */
    matrixEnjinV603: new EventType(
        'MultiTokensMigration.MigrationFinished',
        sts.unit()
    ),
}
