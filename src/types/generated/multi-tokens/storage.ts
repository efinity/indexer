import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'

export const tokenAccounts =  {
    /**
     *  Accounts per token
     */
    matrixEnjinV603: new StorageType('MultiTokens.TokenAccounts', 'Optional', [sts.bigint(), sts.bigint(), matrixEnjinV603.AccountId32], matrixEnjinV603.TokenAccount) as TokenAccountsMatrixEnjinV603,
}

/**
 *  Accounts per token
 */
export interface TokenAccountsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint, key3: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.TokenAccount | undefined)>
    getMany(block: Block, keys: [bigint, bigint, matrixEnjinV603.AccountId32][]): Promise<(matrixEnjinV603.TokenAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: bigint, key3: matrixEnjinV603.AccountId32): Promise<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint, key3: matrixEnjinV603.AccountId32): AsyncIterable<[bigint, bigint, matrixEnjinV603.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint, key3: matrixEnjinV603.AccountId32): Promise<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint, key3: matrixEnjinV603.AccountId32): AsyncIterable<[k: [bigint, bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.TokenAccount | undefined)][]>
}

export const collections =  {
    /**
     *  The collections in existence and their ownership details.
     */
    matrixEnjinV603: new StorageType('MultiTokens.Collections', 'Optional', [sts.bigint()], matrixEnjinV603.Collection) as CollectionsMatrixEnjinV603,
}

/**
 *  The collections in existence and their ownership details.
 */
export interface CollectionsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(matrixEnjinV603.Collection | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV603.Collection | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (matrixEnjinV603.Collection | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (matrixEnjinV603.Collection | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (matrixEnjinV603.Collection | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (matrixEnjinV603.Collection | undefined)][]>
}

export const tokens =  {
    /**
     *  Tokens storage
     */
    matrixEnjinV603: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], matrixEnjinV603.Token) as TokensMatrixEnjinV603,
    /**
     *  Tokens storage
     */
    v500: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v500.Token) as TokensV500,
    /**
     *  Tokens storage
     */
    v600: new StorageType('MultiTokens.Tokens', 'Optional', [sts.bigint(), sts.bigint()], v600.Token) as TokensV600,
}

/**
 *  Tokens storage
 */
export interface TokensMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(matrixEnjinV603.Token | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV603.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.Token | undefined)][]>
}

/**
 *  Tokens storage
 */
export interface TokensV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v500.Token | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v500.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.Token | undefined)][]>
}

/**
 *  Tokens storage
 */
export interface TokensV600  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v600.Token | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v600.Token | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v600.Token | undefined)][]>
}

export const nextCollectionId =  {
    /**
     *  Sequencer for collectionID generators.
     */
    matrixEnjinV603: new StorageType('MultiTokens.NextCollectionId', 'Default', [], sts.bigint()) as NextCollectionIdMatrixEnjinV603,
}

/**
 *  Sequencer for collectionID generators.
 */
export interface NextCollectionIdMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const collectionAccounts =  {
    /**
     *  Stores information for an account per collection
     */
    matrixEnjinV603: new StorageType('MultiTokens.CollectionAccounts', 'Optional', [sts.bigint(), matrixEnjinV603.AccountId32], matrixEnjinV603.CollectionAccount) as CollectionAccountsMatrixEnjinV603,
}

/**
 *  Stores information for an account per collection
 */
export interface CollectionAccountsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.CollectionAccount | undefined)>
    getMany(block: Block, keys: [bigint, matrixEnjinV603.AccountId32][]): Promise<(matrixEnjinV603.CollectionAccount | undefined)[]>
    getKeys(block: Block): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeys(block: Block, key1: bigint, key2: matrixEnjinV603.AccountId32): Promise<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: matrixEnjinV603.AccountId32): AsyncIterable<[bigint, matrixEnjinV603.AccountId32][]>
    getPairs(block: Block): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: matrixEnjinV603.AccountId32): Promise<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: matrixEnjinV603.AccountId32): AsyncIterable<[k: [bigint, matrixEnjinV603.AccountId32], v: (matrixEnjinV603.CollectionAccount | undefined)][]>
}

export const attributes =  {
    /**
     *  Metadata of collections and tokens.
     */
    matrixEnjinV603: new StorageType('MultiTokens.Attributes', 'Optional', [sts.bigint(), sts.option(() => sts.bigint()), sts.bytes()], matrixEnjinV603.Attribute) as AttributesMatrixEnjinV603,
}

/**
 *  Metadata of collections and tokens.
 */
export interface AttributesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: (bigint | undefined), key3: Bytes): Promise<(matrixEnjinV603.Attribute | undefined)>
    getMany(block: Block, keys: [bigint, (bigint | undefined), Bytes][]): Promise<(matrixEnjinV603.Attribute | undefined)[]>
    getKeys(block: Block): Promise<[bigint, (bigint | undefined), Bytes][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, (bigint | undefined), Bytes][]>
    getKeys(block: Block, key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Bytes][]>
    getKeys(block: Block, key1: bigint, key2: (bigint | undefined), key3: Bytes): Promise<[bigint, (bigint | undefined), Bytes][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, (bigint | undefined), Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Bytes][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: (bigint | undefined), key3: Bytes): AsyncIterable<[bigint, (bigint | undefined), Bytes][]>
    getPairs(block: Block): Promise<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: (bigint | undefined), key3: Bytes): Promise<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: (bigint | undefined), key3: Bytes): AsyncIterable<[k: [bigint, (bigint | undefined), Bytes], v: (matrixEnjinV603.Attribute | undefined)][]>
}

export const assetIdsByLocation =  {
    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    matrixEnjinV603: new StorageType('MultiTokens.AssetIdsByLocation', 'Optional', [matrixEnjinV603.V3MultiLocation], matrixEnjinV603.AssetId) as AssetIdsByLocationMatrixEnjinV603,
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface AssetIdsByLocationMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.V3MultiLocation): Promise<(matrixEnjinV603.AssetId | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.V3MultiLocation[]): Promise<(matrixEnjinV603.AssetId | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeys(block: Block, key: matrixEnjinV603.V3MultiLocation): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.V3MultiLocation, v: (matrixEnjinV603.AssetId | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.V3MultiLocation): Promise<[k: matrixEnjinV603.V3MultiLocation, v: (matrixEnjinV603.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: (matrixEnjinV603.AssetId | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: (matrixEnjinV603.AssetId | undefined)][]>
}

export const migrations =  {
    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    matrixEnjinV603: new StorageType('MultiTokens.Migrations', 'Optional', [sts.bytes()], matrixEnjinV603.Migration) as MigrationsMatrixEnjinV603,
}

/**
 *  Stores last iterated keys for migrations. Used by multi block migrations
 *  to resume from the last iterated key.
 * 
 *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
 *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
 */
export interface MigrationsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: Bytes): Promise<(matrixEnjinV603.Migration | undefined)>
    getMany(block: Block, keys: Bytes[]): Promise<(matrixEnjinV603.Migration | undefined)[]>
    getKeys(block: Block): Promise<Bytes[]>
    getKeys(block: Block, key: Bytes): Promise<Bytes[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<Bytes[]>
    getKeysPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<Bytes[]>
    getPairs(block: Block): Promise<[k: Bytes, v: (matrixEnjinV603.Migration | undefined)][]>
    getPairs(block: Block, key: Bytes): Promise<[k: Bytes, v: (matrixEnjinV603.Migration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: Bytes, v: (matrixEnjinV603.Migration | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: Bytes): AsyncIterable<[k: Bytes, v: (matrixEnjinV603.Migration | undefined)][]>
}

export const migrationStatus =  {
    /**
     *  Status of the current multi-block migration
     */
    matrixEnjinV603: new StorageType('MultiTokens.MigrationStatus', 'Default', [], matrixEnjinV603.MigrationStage) as MigrationStatusMatrixEnjinV603,
}

/**
 *  Status of the current multi-block migration
 */
export interface MigrationStatusMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MigrationStage
    get(block: Block): Promise<(matrixEnjinV603.MigrationStage | undefined)>
}

export const ethereumTokens =  {
    /**
     *  The token assets from ethereum
     */
    matrixEnjinV603: new StorageType('MultiTokens.EthereumTokens', 'Optional', [sts.bigint(), sts.bigint()], matrixEnjinV603.EthereumToken) as EthereumTokensMatrixEnjinV603,
}

/**
 *  The token assets from ethereum
 */
export interface EthereumTokensMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(matrixEnjinV603.EthereumToken | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(matrixEnjinV603.EthereumToken | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (matrixEnjinV603.EthereumToken | undefined)][]>
}

export const ethereumBalances =  {
    /**
     *  Holds the ethereum balance for each token
     */
    matrixEnjinV603: new StorageType('MultiTokens.EthereumBalances', 'Optional', [matrixEnjinV603.H160, sts.bigint(), sts.bigint()], sts.bigint()) as EthereumBalancesMatrixEnjinV603,
}

/**
 *  Holds the ethereum balance for each token
 */
export interface EthereumBalancesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [matrixEnjinV603.H160, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(block: Block, key1: matrixEnjinV603.H160): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(block: Block, key1: matrixEnjinV603.H160, key2: bigint): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeys(block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): Promise<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160, key2: bigint): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): AsyncIterable<[matrixEnjinV603.H160, bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.H160): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.H160, key2: bigint): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): Promise<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160, key2: bigint): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: matrixEnjinV603.H160, key2: bigint, key3: bigint): AsyncIterable<[k: [matrixEnjinV603.H160, bigint, bigint], v: (bigint | undefined)][]>
}

export const ethereumAccounts =  {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV603: new StorageType('MultiTokens.EthereumAccounts', 'Optional', [matrixEnjinV603.H160], matrixEnjinV603.EthereumAccount) as EthereumAccountsMatrixEnjinV603,
}

/**
 *  Stores data for an ethereum address
 */
export interface EthereumAccountsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<(matrixEnjinV603.EthereumAccount | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(matrixEnjinV603.EthereumAccount | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.EthereumAccount | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H160): Promise<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.EthereumAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.EthereumAccount | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.EthereumAccount | undefined)][]>
}

export const unmintableTokenIds =  {
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    matrixEnjinV603: new StorageType('MultiTokens.UnmintableTokenIds', 'Optional', [sts.bigint()], matrixEnjinV603.RangeInclusive) as UnmintableTokenIdsMatrixEnjinV603,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    matrixEnjinV1000: new StorageType('MultiTokens.UnmintableTokenIds', 'Optional', [sts.bigint(), sts.bigint()], sts.bigint()) as UnmintableTokenIdsMatrixEnjinV1000,
    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    v604: new StorageType('MultiTokens.UnmintableTokenIds', 'Optional', [sts.bigint()], v604.RangeInclusive) as UnmintableTokenIdsV604,
    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    v1000: new StorageType('MultiTokens.UnmintableTokenIds', 'Optional', [sts.bigint(), sts.bigint()], sts.bigint()) as UnmintableTokenIdsV1000,
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(matrixEnjinV603.RangeInclusive | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(matrixEnjinV603.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (matrixEnjinV603.RangeInclusive | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (matrixEnjinV603.RangeInclusive | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (matrixEnjinV603.RangeInclusive | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (matrixEnjinV603.RangeInclusive | undefined)][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface UnmintableTokenIdsV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(v604.RangeInclusive | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(v604.RangeInclusive | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (v604.RangeInclusive | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (v604.RangeInclusive | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (v604.RangeInclusive | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (v604.RangeInclusive | undefined)][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface UnmintableTokenIdsV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (bigint | undefined)][]>
}

export const nativeCollectionIds =  {
    /**
     *  Map of ethereum collection id to the native collection id
     */
    matrixEnjinV603: new StorageType('MultiTokens.NativeCollectionIds', 'Optional', [sts.bigint()], sts.bigint()) as NativeCollectionIdsMatrixEnjinV603,
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface NativeCollectionIdsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: bigint): Promise<(bigint | undefined)>
    getMany(block: Block, keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<bigint[]>
    getKeys(block: Block, key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<bigint[]>
    getPairs(block: Block): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairs(block: Block, key: bigint): Promise<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: bigint): AsyncIterable<[k: bigint, v: (bigint | undefined)][]>
}

export const claimableCollectionIds =  {
    /**
     *  Stores data for an ethereum address
     */
    matrixEnjinV1000: new StorageType('MultiTokens.ClaimableCollectionIds', 'Optional', [matrixEnjinV1000.H160], sts.array(() => sts.bigint())) as ClaimableCollectionIdsMatrixEnjinV1000,
}

/**
 *  Stores data for an ethereum address
 */
export interface ClaimableCollectionIdsMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.H160): Promise<(bigint[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.H160[]): Promise<(bigint[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.H160[]>
    getKeys(block: Block, key: matrixEnjinV1000.H160): Promise<matrixEnjinV1000.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H160): AsyncIterable<matrixEnjinV1000.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.H160, v: (bigint[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.H160): Promise<[k: matrixEnjinV1000.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.H160, v: (bigint[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H160): AsyncIterable<[k: matrixEnjinV1000.H160, v: (bigint[] | undefined)][]>
}

export const idleOperations =  {
    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    v500: new StorageType('MultiTokens.IdleOperations', 'Default', [], sts.array(() => v500.WeightedIdleOperation)) as IdleOperationsV500,
}

/**
 *  Pending operations to be executed on [`Hooks::on_idle`].
 */
export interface IdleOperationsV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.WeightedIdleOperation[]
    get(block: Block): Promise<(v500.WeightedIdleOperation[] | undefined)>
}
