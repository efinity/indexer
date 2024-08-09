import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'

export const info =  {
    /**
     *  Stores information about the marketplace
     */
    matrixEnjinV603: new StorageType('Marketplace.Info', 'Default', [], matrixEnjinV603.MarketPlaceInfo) as InfoMatrixEnjinV603,
    /**
     *  Stores information about the marketplace
     */
    v500: new StorageType('Marketplace.Info', 'Default', [], v500.MarketPlaceInfo) as InfoV500,
    /**
     *  Stores information about the marketplace
     */
    v604: new StorageType('Marketplace.Info', 'Default', [], v604.MarketPlaceInfo) as InfoV604,
}

/**
 *  Stores information about the marketplace
 */
export interface InfoMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.MarketPlaceInfo
    get(block: Block): Promise<(matrixEnjinV603.MarketPlaceInfo | undefined)>
}

/**
 *  Stores information about the marketplace
 */
export interface InfoV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.MarketPlaceInfo
    get(block: Block): Promise<(v500.MarketPlaceInfo | undefined)>
}

/**
 *  Stores information about the marketplace
 */
export interface InfoV604  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v604.MarketPlaceInfo
    get(block: Block): Promise<(v604.MarketPlaceInfo | undefined)>
}

export const listings =  {
    /**
     *  Listings by ID
     */
    matrixEnjinV603: new StorageType('Marketplace.Listings', 'Optional', [matrixEnjinV603.H256], matrixEnjinV603.Listing) as ListingsMatrixEnjinV603,
    /**
     *  Listings by ID
     */
    v1010: new StorageType('Marketplace.Listings', 'Optional', [v1010.H256], v1010.Listing) as ListingsV1010,
    /**
     *  Listings by ID
     */
    v1011: new StorageType('Marketplace.Listings', 'Optional', [v1011.H256], v1011.Listing) as ListingsV1011,
}

/**
 *  Listings by ID
 */
export interface ListingsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(matrixEnjinV603.Listing | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Listing | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Listing | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Listing | undefined)][]>
}

/**
 *  Listings by ID
 */
export interface ListingsV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.H256): Promise<(v1010.Listing | undefined)>
    getMany(block: Block, keys: v1010.H256[]): Promise<(v1010.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1010.H256[]>
    getKeys(block: Block, key: v1010.H256): Promise<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<v1010.H256[]>
    getPairs(block: Block): Promise<[k: v1010.H256, v: (v1010.Listing | undefined)][]>
    getPairs(block: Block, key: v1010.H256): Promise<[k: v1010.H256, v: (v1010.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.H256, v: (v1010.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<[k: v1010.H256, v: (v1010.Listing | undefined)][]>
}

/**
 *  Listings by ID
 */
export interface ListingsV1011  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1011.H256): Promise<(v1011.Listing | undefined)>
    getMany(block: Block, keys: v1011.H256[]): Promise<(v1011.Listing | undefined)[]>
    getKeys(block: Block): Promise<v1011.H256[]>
    getKeys(block: Block, key: v1011.H256): Promise<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<v1011.H256[]>
    getPairs(block: Block): Promise<[k: v1011.H256, v: (v1011.Listing | undefined)][]>
    getPairs(block: Block, key: v1011.H256): Promise<[k: v1011.H256, v: (v1011.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1011.H256, v: (v1011.Listing | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<[k: v1011.H256, v: (v1011.Listing | undefined)][]>
}

export const listingIdsByMakeAsset =  {
    /**
     *  Listing Ids by make asset's collection id and token id
     */
    v500: new StorageType('Marketplace.ListingIdsByMakeAsset', 'Optional', [sts.bigint(), sts.bigint()], v500.H256) as ListingIdsByMakeAssetV500,
}

/**
 *  Listing Ids by make asset's collection id and token id
 */
export interface ListingIdsByMakeAssetV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v500.H256 | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v500.H256 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
}

export const listingIdsByTakeAsset =  {
    /**
     *  Listing Ids by take asset's collection id and token id
     */
    v500: new StorageType('Marketplace.ListingIdsByTakeAsset', 'Optional', [sts.bigint(), sts.bigint()], v500.H256) as ListingIdsByTakeAssetV500,
}

/**
 *  Listing Ids by take asset's collection id and token id
 */
export interface ListingIdsByTakeAssetV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: bigint, key2: bigint): Promise<(v500.H256 | undefined)>
    getMany(block: Block, keys: [bigint, bigint][]): Promise<(v500.H256 | undefined)[]>
    getKeys(block: Block): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint): Promise<[bigint, bigint][]>
    getKeys(block: Block, key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(block: Block): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairs(block: Block, key1: bigint): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairs(block: Block, key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: (v500.H256 | undefined)][]>
}

export const listingIdsByAccountId =  {
    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    v500: new StorageType('Marketplace.ListingIdsByAccountId', 'Optional', [v500.AccountId32, v500.H256], sts.unit()) as ListingIdsByAccountIdV500,
}

/**
 *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
 */
export interface ListingIdsByAccountIdV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v500.AccountId32, key2: v500.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: [v500.AccountId32, v500.H256][]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<[v500.AccountId32, v500.H256][]>
    getKeys(block: Block, key1: v500.AccountId32): Promise<[v500.AccountId32, v500.H256][]>
    getKeys(block: Block, key1: v500.AccountId32, key2: v500.H256): Promise<[v500.AccountId32, v500.H256][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v500.AccountId32, v500.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v500.AccountId32): AsyncIterable<[v500.AccountId32, v500.H256][]>
    getKeysPaged(pageSize: number, block: Block, key1: v500.AccountId32, key2: v500.H256): AsyncIterable<[v500.AccountId32, v500.H256][]>
    getPairs(block: Block): Promise<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
    getPairs(block: Block, key1: v500.AccountId32): Promise<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
    getPairs(block: Block, key1: v500.AccountId32, key2: v500.H256): Promise<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v500.AccountId32): AsyncIterable<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v500.AccountId32, key2: v500.H256): AsyncIterable<[k: [v500.AccountId32, v500.H256], v: (null | undefined)][]>
}

export const nextListingIdInput =  {
    /**
     *  Used to generate the next listing id. Increments by one every time a listing is created.
     */
    v1010: new StorageType('Marketplace.NextListingIdInput', 'Default', [], sts.bigint()) as NextListingIdInputV1010,
}

/**
 *  Used to generate the next listing id. Increments by one every time a listing is created.
 */
export interface NextListingIdInputV1010  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const counterOffers =  {
    /**
     *  Counter offers by listing id and account
     */
    v1011: new StorageType('Marketplace.CounterOffers', 'Optional', [v1011.H256, v1011.AccountId32], v1011.CounterOffer) as CounterOffersV1011,
}

/**
 *  Counter offers by listing id and account
 */
export interface CounterOffersV1011  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key1: v1011.H256, key2: v1011.AccountId32): Promise<(v1011.CounterOffer | undefined)>
    getMany(block: Block, keys: [v1011.H256, v1011.AccountId32][]): Promise<(v1011.CounterOffer | undefined)[]>
    getKeys(block: Block): Promise<[v1011.H256, v1011.AccountId32][]>
    getKeys(block: Block, key1: v1011.H256): Promise<[v1011.H256, v1011.AccountId32][]>
    getKeys(block: Block, key1: v1011.H256, key2: v1011.AccountId32): Promise<[v1011.H256, v1011.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v1011.H256, v1011.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1011.H256): AsyncIterable<[v1011.H256, v1011.AccountId32][]>
    getKeysPaged(pageSize: number, block: Block, key1: v1011.H256, key2: v1011.AccountId32): AsyncIterable<[v1011.H256, v1011.AccountId32][]>
    getPairs(block: Block): Promise<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
    getPairs(block: Block, key1: v1011.H256): Promise<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
    getPairs(block: Block, key1: v1011.H256, key2: v1011.AccountId32): Promise<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1011.H256): AsyncIterable<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key1: v1011.H256, key2: v1011.AccountId32): AsyncIterable<[k: [v1011.H256, v1011.AccountId32], v: (v1011.CounterOffer | undefined)][]>
}

export const pendingListingIds =  {
    /**
     *  Listing ids that will be processed in on idle
     */
    v1011: new StorageType('Marketplace.PendingListingIds', 'Default', [], sts.array(() => v1011.H256)) as PendingListingIdsV1011,
}

/**
 *  Listing ids that will be processed in on idle
 */
export interface PendingListingIdsV1011  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v1011.H256[]
    get(block: Block): Promise<(v1011.H256[] | undefined)>
}
