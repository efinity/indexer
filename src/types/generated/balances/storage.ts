import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const totalIssuance =  {
    /**
     *  The total units issued in the system.
     */
    matrixEnjinV603: new StorageType('Balances.TotalIssuance', 'Default', [], sts.bigint()) as TotalIssuanceMatrixEnjinV603,
}

/**
 *  The total units issued in the system.
 */
export interface TotalIssuanceMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const inactiveIssuance =  {
    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    matrixEnjinV603: new StorageType('Balances.InactiveIssuance', 'Default', [], sts.bigint()) as InactiveIssuanceMatrixEnjinV603,
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface InactiveIssuanceMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): bigint
    get(block: Block): Promise<(bigint | undefined)>
}

export const account =  {
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    matrixEnjinV603: new StorageType('Balances.Account', 'Default', [matrixEnjinV603.AccountId32], matrixEnjinV603.AccountData) as AccountMatrixEnjinV603,
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v500: new StorageType('Balances.Account', 'Default', [v500.AccountId32], v500.AccountData) as AccountV500,
    /**
     *  The Balances pallet example of storing the balance of an account.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
     *   }
     *  ```
     * 
     *  You can also store the balance of an account in the `System` pallet.
     * 
     *  # Example
     * 
     *  ```nocompile
     *   impl pallet_balances::Config for Runtime {
     *    type AccountStore = System
     *   }
     *  ```
     * 
     *  But this comes with tradeoffs, storing account balances in the system pallet stores
     *  `frame_system` data alongside the account data contrary to storing account balances in the
     *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
     *  NOTE: This is only used in the case that this pallet is used to store balances.
     */
    v602: new StorageType('Balances.Account', 'Default', [v602.AccountId32], v602.AccountData) as AccountV602,
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountData
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.AccountData | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.AccountData | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountData | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.AccountData | undefined)][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV500  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v500.AccountData
    get(block: Block, key: v500.AccountId32): Promise<(v500.AccountData | undefined)>
    getMany(block: Block, keys: v500.AccountId32[]): Promise<(v500.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v500.AccountId32[]>
    getKeys(block: Block, key: v500.AccountId32): Promise<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<v500.AccountId32[]>
    getPairs(block: Block): Promise<[k: v500.AccountId32, v: (v500.AccountData | undefined)][]>
    getPairs(block: Block, key: v500.AccountId32): Promise<[k: v500.AccountId32, v: (v500.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.AccountId32, v: (v500.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.AccountId32): AsyncIterable<[k: v500.AccountId32, v: (v500.AccountData | undefined)][]>
}

/**
 *  The Balances pallet example of storing the balance of an account.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *     type AccountStore = StorageMapShim<Self::Account<Runtime>, frame_system::Provider<Runtime>, AccountId, Self::AccountData<Balance>>
 *   }
 *  ```
 * 
 *  You can also store the balance of an account in the `System` pallet.
 * 
 *  # Example
 * 
 *  ```nocompile
 *   impl pallet_balances::Config for Runtime {
 *    type AccountStore = System
 *   }
 *  ```
 * 
 *  But this comes with tradeoffs, storing account balances in the system pallet stores
 *  `frame_system` data alongside the account data contrary to storing account balances in the
 *  `Balances` pallet, which uses a `StorageMap` to store balances data only.
 *  NOTE: This is only used in the case that this pallet is used to store balances.
 */
export interface AccountV602  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): v602.AccountData
    get(block: Block, key: v602.AccountId32): Promise<(v602.AccountData | undefined)>
    getMany(block: Block, keys: v602.AccountId32[]): Promise<(v602.AccountData | undefined)[]>
    getKeys(block: Block): Promise<v602.AccountId32[]>
    getKeys(block: Block, key: v602.AccountId32): Promise<v602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v602.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: v602.AccountId32): AsyncIterable<v602.AccountId32[]>
    getPairs(block: Block): Promise<[k: v602.AccountId32, v: (v602.AccountData | undefined)][]>
    getPairs(block: Block, key: v602.AccountId32): Promise<[k: v602.AccountId32, v: (v602.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v602.AccountId32, v: (v602.AccountData | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v602.AccountId32): AsyncIterable<[k: v602.AccountId32, v: (v602.AccountData | undefined)][]>
}

export const locks =  {
    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    matrixEnjinV603: new StorageType('Balances.Locks', 'Default', [matrixEnjinV603.AccountId32], sts.array(() => matrixEnjinV603.BalanceLock)) as LocksMatrixEnjinV603,
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface LocksMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.BalanceLock[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.BalanceLock[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.BalanceLock[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.BalanceLock[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.BalanceLock[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.BalanceLock[] | undefined)][]>
}

export const reserves =  {
    /**
     *  Named reserves on some account balances.
     */
    matrixEnjinV603: new StorageType('Balances.Reserves', 'Default', [matrixEnjinV603.AccountId32], sts.array(() => matrixEnjinV603.ReserveData)) as ReservesMatrixEnjinV603,
}

/**
 *  Named reserves on some account balances.
 */
export interface ReservesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.ReserveData[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.ReserveData[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.ReserveData[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.ReserveData[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.ReserveData[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.ReserveData[] | undefined)][]>
}

export const holds =  {
    /**
     *  Holds on account balances.
     */
    matrixEnjinV603: new StorageType('Balances.Holds', 'Default', [matrixEnjinV603.AccountId32], sts.array(() => matrixEnjinV603.IdAmount)) as HoldsMatrixEnjinV603,
}

/**
 *  Holds on account balances.
 */
export interface HoldsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.IdAmount[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.IdAmount[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
}

export const freezes =  {
    /**
     *  Freeze locks on account balances.
     */
    matrixEnjinV603: new StorageType('Balances.Freezes', 'Default', [matrixEnjinV603.AccountId32], sts.array(() => matrixEnjinV603.IdAmount)) as FreezesMatrixEnjinV603,
}

/**
 *  Freeze locks on account balances.
 */
export interface FreezesMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.IdAmount[]
    get(block: Block, key: matrixEnjinV603.AccountId32): Promise<(matrixEnjinV603.IdAmount[] | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.AccountId32[]): Promise<(matrixEnjinV603.IdAmount[] | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.AccountId32[]>
    getKeys(block: Block, key: matrixEnjinV603.AccountId32): Promise<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<matrixEnjinV603.AccountId32[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.AccountId32): Promise<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.AccountId32): AsyncIterable<[k: matrixEnjinV603.AccountId32, v: (matrixEnjinV603.IdAmount[] | undefined)][]>
}
