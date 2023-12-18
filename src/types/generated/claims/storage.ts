import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'

export const claims =  {
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    matrixEnjinV603: new StorageType('Claims.Claims', 'Optional', [matrixEnjinV603.H160], sts.array(() => matrixEnjinV603.ClaimData)) as ClaimsMatrixEnjinV603,
    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    v500: new StorageType('Claims.Claims', 'Optional', [v500.Account], sts.bigint()) as ClaimsV500,
    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    v604: new StorageType('Claims.Claims', 'Optional', [v604.H160], sts.array(() => v604.ClaimData)) as ClaimsV604,
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<(matrixEnjinV603.ClaimData[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(matrixEnjinV603.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.ClaimData[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H160): Promise<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.ClaimData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.ClaimData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<[k: matrixEnjinV603.H160, v: (matrixEnjinV603.ClaimData[] | undefined)][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v500.Account): Promise<(bigint | undefined)>
    getMany(block: Block, keys: v500.Account[]): Promise<(bigint | undefined)[]>
    getKeys(block: Block): Promise<v500.Account[]>
    getKeys(block: Block, key: v500.Account): Promise<v500.Account[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.Account[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.Account): AsyncIterable<v500.Account[]>
    getPairs(block: Block): Promise<[k: v500.Account, v: (bigint | undefined)][]>
    getPairs(block: Block, key: v500.Account): Promise<[k: v500.Account, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.Account, v: (bigint | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.Account): AsyncIterable<[k: v500.Account, v: (bigint | undefined)][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v604.H160): Promise<(v604.ClaimData[] | undefined)>
    getMany(block: Block, keys: v604.H160[]): Promise<(v604.ClaimData[] | undefined)[]>
    getKeys(block: Block): Promise<v604.H160[]>
    getKeys(block: Block, key: v604.H160): Promise<v604.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v604.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: v604.H160): AsyncIterable<v604.H160[]>
    getPairs(block: Block): Promise<[k: v604.H160, v: (v604.ClaimData[] | undefined)][]>
    getPairs(block: Block, key: v604.H160): Promise<[k: v604.H160, v: (v604.ClaimData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v604.H160, v: (v604.ClaimData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v604.H160): AsyncIterable<[k: v604.H160, v: (v604.ClaimData[] | undefined)][]>
}

export const transactionHashLookup =  {
    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    matrixEnjinV603: new StorageType('Claims.TransactionHashLookup', 'Optional', [matrixEnjinV603.H256], sts.unit()) as TransactionHashLookupMatrixEnjinV603,
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface TransactionHashLookupMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(null | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(null | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (null | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (null | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (null | undefined)][]>
}

export const totalUnclaimedAmount =  {
    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    matrixEnjinV603: new StorageType('Claims.TotalUnclaimedAmount', 'Default', [], sts.bigint()) as TotalUnclaimedAmountMatrixEnjinV603,
}

/**
 *  This is the total amount for which claims have been requested and are not yet claimed.
 */
export interface TotalUnclaimedAmountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const delayClaimsPeriod =  {
    /**
     *  Delay time in block numbers before the user could claim
     */
    matrixEnjinV603: new StorageType('Claims.DelayClaimsPeriod', 'Optional', [], sts.number()) as DelayClaimsPeriodMatrixEnjinV603,
}

/**
 *  Delay time in block numbers before the user could claim
 */
export interface DelayClaimsPeriodMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const latestBlockNumber =  {
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    matrixEnjinV603: new StorageType('Claims.LatestBlockNumber', 'Optional', [], sts.number()) as LatestBlockNumberMatrixEnjinV603,
    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    v500: new StorageType('Claims.LatestBlockNumber', 'Optional', [], v500.TrackedBlockNumbers) as LatestBlockNumberV500,
    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    v604: new StorageType('Claims.LatestBlockNumber', 'Optional', [], sts.number()) as LatestBlockNumberV604,
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v500.TrackedBlockNumbers | undefined)>
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface LatestBlockNumberV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(number | undefined)>
}

export const exchangeRate =  {
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    matrixEnjinV603: new StorageType('Claims.ExchangeRate', 'Optional', [], matrixEnjinV603.Perbill) as ExchangeRateMatrixEnjinV603,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v500: new StorageType('Claims.ExchangeRate', 'Optional', [], v500.FixedU128) as ExchangeRateV500,
    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    v604: new StorageType('Claims.ExchangeRate', 'Optional', [], v604.Perbill) as ExchangeRateV604,
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.Perbill | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v500.FixedU128 | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ExchangeRateV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v604.Perbill | undefined)>
}

export const accountNonce =  {
    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    matrixEnjinV603: new StorageType('Claims.AccountNonce', 'Optional', [matrixEnjinV603.H160], sts.number()) as AccountNonceMatrixEnjinV603,
}

/**
 *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
 *  claimed.
 */
export interface AccountNonceMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H160): Promise<(number | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H160[]): Promise<(number | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H160[]>
    getKeys(block: Block, key: matrixEnjinV603.H160): Promise<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H160[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<matrixEnjinV603.H160[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H160, v: (number | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H160): Promise<[k: matrixEnjinV603.H160, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H160, v: (number | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H160): AsyncIterable<[k: matrixEnjinV603.H160, v: (number | undefined)][]>
}

export const total =  {
    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    v500: new StorageType('Claims.Total', 'Default', [], sts.bigint()) as TotalV500,
}

/**
 *  This is the total amount for which claims have been approved and are not yet claimed.
 */
export interface TotalV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const pendingApprovals =  {
    v500: new StorageType('Claims.PendingApprovals', 'Optional', [sts.tuple(() => [v500.H256, sts.option(() => sts.number())])], v500.TransactionData) as PendingApprovalsV500,
}

export interface PendingApprovalsV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: [v500.H256, (number | undefined)]): Promise<(v500.TransactionData | undefined)>
    getMany(block: Block, keys: [v500.H256, (number | undefined)][]): Promise<(v500.TransactionData | undefined)[]>
    getKeys(block: Block): Promise<[v500.H256, (number | undefined)][]>
    getKeys(block: Block, key: [v500.H256, (number | undefined)]): Promise<[v500.H256, (number | undefined)][]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<[v500.H256, (number | undefined)][]>
    getKeysPaged(pageSize: number, block: Block, key: [v500.H256, (number | undefined)]): AsyncIterable<[v500.H256, (number | undefined)][]>
    getPairs(block: Block): Promise<[k: [v500.H256, (number | undefined)], v: (v500.TransactionData | undefined)][]>
    getPairs(block: Block, key: [v500.H256, (number | undefined)]): Promise<[k: [v500.H256, (number | undefined)], v: (v500.TransactionData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: [v500.H256, (number | undefined)], v: (v500.TransactionData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: [v500.H256, (number | undefined)]): AsyncIterable<[k: [v500.H256, (number | undefined)], v: (v500.TransactionData | undefined)][]>
}

export const approvedBlockNumber =  {
    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    v500: new StorageType('Claims.ApprovedBlockNumber', 'Optional', [], v500.TrackedBlockNumbers) as ApprovedBlockNumberV500,
}

/**
 *  Latest block number on Ethereum for which requested claims have been approved.
 */
export interface ApprovedBlockNumberV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(v500.TrackedBlockNumbers | undefined)>
}
