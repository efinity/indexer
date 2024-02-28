import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as matrixEnjinV603 from './matrixEnjinV603'
import * as v500 from './v500'
import * as v600 from './v600'
import * as v601 from './v601'
import * as v602 from './v602'
import * as matrixEnjinV1000 from './matrixEnjinV1000'
import * as matrixEnjinV1003 from './matrixEnjinV1003'
import * as v604 from './v604'
import * as matrixEnjinV1004 from './matrixEnjinV1004'
import * as v1000 from './v1000'
import * as v1003 from './v1003'
import * as v1004 from './v1004'

export class AuthorshipAuthorStorage extends StorageBase {
    protected getPrefix() {
        return 'Authorship'
    }

    protected getName() {
        return 'Author'
    }

    /**
     *  Author of current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  Author of current block.
     */
    get asMatrixEnjinV603(): AuthorshipAuthorStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Author of current block.
 */
export interface AuthorshipAuthorStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
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
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
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
    get asMatrixEnjinV603(): BalancesAccountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
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
    get isV500(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
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
    get asV500(): BalancesAccountStorageV500 {
        assert(this.isV500)
        return this as any
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
    get isV602(): boolean {
        return this.getTypeHash() === '12d9e780c790f66e9c340b94cabd98da447e1087819d4acb4b1fe22bbb2783fb'
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
    get asV602(): BalancesAccountStorageV602 {
        assert(this.isV602)
        return this as any
    }
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
export interface BalancesAccountStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.AccountData>
    getAll(): Promise<matrixEnjinV603.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountData][]>
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
export interface BalancesAccountStorageV500 {
    get(key: Uint8Array): Promise<v500.AccountData>
    getAll(): Promise<v500.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v500.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.AccountData][]>
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
export interface BalancesAccountStorageV602 {
    get(key: Uint8Array): Promise<v602.AccountData>
    getAll(): Promise<v602.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v602.AccountData[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.AccountData][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.AccountData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.AccountData][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.AccountData][]>
}

export class BalancesFreezesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Freezes'
    }

    /**
     *  Freeze locks on account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Freeze locks on account balances.
     */
    get asMatrixEnjinV603(): BalancesFreezesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Freeze locks on account balances.
 */
export interface BalancesFreezesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.IdAmount[]>
    getAll(): Promise<matrixEnjinV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
}

export class BalancesHoldsStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Holds'
    }

    /**
     *  Holds on account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '687d129c824d7b23d1f21a471b19c3fed952e35b64e5de19f549851d1c3f7f91'
    }

    /**
     *  Holds on account balances.
     */
    get asMatrixEnjinV603(): BalancesHoldsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Holds on account balances.
 */
export interface BalancesHoldsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.IdAmount[]>
    getAll(): Promise<matrixEnjinV603.IdAmount[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.IdAmount[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.IdAmount[]][]>
}

export class BalancesInactiveIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'InactiveIssuance'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units of outstanding deactivated balance in the system.
     */
    get asMatrixEnjinV603(): BalancesInactiveIssuanceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The total units of outstanding deactivated balance in the system.
 */
export interface BalancesInactiveIssuanceStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class BalancesLocksStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Locks'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e393b3a20a6d47aee703c898fda1db02fffe128e4692a5861f416ecc67b13a86'
    }

    /**
     *  Any liquidity locks on some account balances.
     *  NOTE: Should only be accessed when setting, changing and freeing a lock.
     */
    get asMatrixEnjinV603(): BalancesLocksStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Any liquidity locks on some account balances.
 *  NOTE: Should only be accessed when setting, changing and freeing a lock.
 */
export interface BalancesLocksStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.BalanceLock[]>
    getAll(): Promise<matrixEnjinV603.BalanceLock[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.BalanceLock[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.BalanceLock[]][]>
}

export class BalancesReservesStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Reserves'
    }

    /**
     *  Named reserves on some account balances.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '474ab364918936227f04514c303c572bb070961f30f593f2cbb3e25426aba37a'
    }

    /**
     *  Named reserves on some account balances.
     */
    get asMatrixEnjinV603(): BalancesReservesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Named reserves on some account balances.
 */
export interface BalancesReservesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.ReserveData[]>
    getAll(): Promise<matrixEnjinV603.ReserveData[][]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.ReserveData[][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ReserveData[]][]>
}

export class BalancesTotalIssuanceStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'TotalIssuance'
    }

    /**
     *  The total units issued in the system.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The total units issued in the system.
     */
    get asMatrixEnjinV603(): BalancesTotalIssuanceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The total units issued in the system.
 */
export interface BalancesTotalIssuanceStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class BountiesBountiesStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'Bounties'
    }

    /**
     *  Bounties that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
    }

    /**
     *  Bounties that have been made.
     */
    get asMatrixEnjinV603(): BountiesBountiesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Bounties that have been made.
 */
export interface BountiesBountiesStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Bounty | undefined)>
    getAll(): Promise<matrixEnjinV603.Bounty[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Bounty | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.Bounty][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.Bounty][]>
}

export class BountiesBountyApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyApprovals'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Bounty indices that have been approved but not yet funded.
     */
    get asMatrixEnjinV603(): BountiesBountyApprovalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Bounty indices that have been approved but not yet funded.
 */
export interface BountiesBountyApprovalsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class BountiesBountyCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyCount'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of bounty proposals that have been made.
     */
    get asMatrixEnjinV603(): BountiesBountyCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of bounty proposals that have been made.
 */
export interface BountiesBountyCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class BountiesBountyDescriptionsStorage extends StorageBase {
    protected getPrefix() {
        return 'Bounties'
    }

    protected getName() {
        return 'BountyDescriptions'
    }

    /**
     *  The description of each bounty.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8aa11675e28f46f0e4b233018893c1979e42c43f64a290aecd81221cbc7f6e92'
    }

    /**
     *  The description of each bounty.
     */
    get asMatrixEnjinV603(): BountiesBountyDescriptionsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The description of each bounty.
 */
export interface BountiesBountyDescriptionsStorageMatrixEnjinV603 {
    get(key: number): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class ClaimsAccountNonceStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'AccountNonce'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b66e643893eeb22eb47e70e5963130466a65d7fdc06d6f4fefd82f3ba4c900bd'
    }

    /**
     *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
     *  claimed.
     */
    get asMatrixEnjinV603(): ClaimsAccountNonceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  This stores nonce for each Ethereum account, which will increment every time when ENJ2 are
 *  claimed.
 */
export interface ClaimsAccountNonceStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class ClaimsApprovedBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ApprovedBlockNumber'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block number on Ethereum for which requested claims have been approved.
     */
    get asV500(): ClaimsApprovedBlockNumberStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Latest block number on Ethereum for which requested claims have been approved.
 */
export interface ClaimsApprovedBlockNumberStorageV500 {
    get(): Promise<(v500.TrackedBlockNumbers | undefined)>
}

export class ClaimsClaimsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Claims'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b59addc95e4ad12f850fe4129a0ee964077180ad25eacf666dc124f2f5e0f166'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asMatrixEnjinV603(): ClaimsClaimsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '898502079a98d13674aa6970cae6fc0555ae0d655f2e253a6707c38bf183d8e6'
    }

    /**
     *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
     *  claim for.
     */
    get asV500(): ClaimsClaimsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get isV604(): boolean {
        return this.getTypeHash() === 'b59addc95e4ad12f850fe4129a0ee964077180ad25eacf666dc124f2f5e0f166'
    }

    /**
     *  This stores claims. Maps an ethereum address to the vec of claim data.
     */
    get asV604(): ClaimsClaimsStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.ClaimData[] | undefined)>
    getAll(): Promise<matrixEnjinV603.ClaimData[][]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.ClaimData[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.ClaimData[]][]>
}

/**
 *  This stores approved claims. Maps an ethereum address to the amount it is eligible to make a
 *  claim for.
 */
export interface ClaimsClaimsStorageV500 {
    get(key: v500.Account): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: v500.Account[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<v500.Account[]>
    getKeys(key: v500.Account): Promise<v500.Account[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.Account[]>
    getKeysPaged(pageSize: number, key: v500.Account): AsyncIterable<v500.Account[]>
    getPairs(): Promise<[k: v500.Account, v: bigint][]>
    getPairs(key: v500.Account): Promise<[k: v500.Account, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.Account, v: bigint][]>
    getPairsPaged(pageSize: number, key: v500.Account): AsyncIterable<[k: v500.Account, v: bigint][]>
}

/**
 *  This stores claims. Maps an ethereum address to the vec of claim data.
 */
export interface ClaimsClaimsStorageV604 {
    get(key: Uint8Array): Promise<(v604.ClaimData[] | undefined)>
    getAll(): Promise<v604.ClaimData[][]>
    getMany(keys: Uint8Array[]): Promise<(v604.ClaimData[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v604.ClaimData[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v604.ClaimData[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v604.ClaimData[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v604.ClaimData[]][]>
}

export class ClaimsDelayClaimsPeriodStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'DelayClaimsPeriod'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Delay time in block numbers before the user could claim
     */
    get asMatrixEnjinV603(): ClaimsDelayClaimsPeriodStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Delay time in block numbers before the user could claim
 */
export interface ClaimsDelayClaimsPeriodStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class ClaimsExchangeRateStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'ExchangeRate'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asMatrixEnjinV603(): ClaimsExchangeRateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8339208fdff8cc2cbfb9fe1daa9bd886d23b8951771ccf6b00d8cb68da55bcc5'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV500(): ClaimsExchangeRateStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get isV604(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Amount in ENJ equivalent to 1 EFI.
     */
    get asV604(): ClaimsExchangeRateStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV500 {
    get(): Promise<(bigint | undefined)>
}

/**
 *  Amount in ENJ equivalent to 1 EFI.
 */
export interface ClaimsExchangeRateStorageV604 {
    get(): Promise<(number | undefined)>
}

export class ClaimsLatestBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'LatestBlockNumber'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get asMatrixEnjinV603(): ClaimsLatestBlockNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '9a5c57c0fba14b65d0c87c39b55c2a918905695f933da9b666d5ccdfa9c3b77f'
    }

    /**
     *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
     *  relayer.
     */
    get asV500(): ClaimsLatestBlockNumberStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get isV604(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Latest block numbers for Ethereum for which requests claim has been made by the
     *  relayer.
     */
    get asV604(): ClaimsLatestBlockNumberStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

/**
 *  Latest block numbers for Ethereum/Efinity for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV500 {
    get(): Promise<(v500.TrackedBlockNumbers | undefined)>
}

/**
 *  Latest block numbers for Ethereum for which requests claim has been made by the
 *  relayer.
 */
export interface ClaimsLatestBlockNumberStorageV604 {
    get(): Promise<(number | undefined)>
}

export class ClaimsPendingApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'PendingApprovals'
    }

    get isV500(): boolean {
        return this.getTypeHash() === 'ec33c23b52f19052c2b84430adf5ca0d4d679518203eba4b8e7ec684b4532785'
    }

    get asV500(): ClaimsPendingApprovalsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

export interface ClaimsPendingApprovalsStorageV500 {
    get(key: [Uint8Array, (number | undefined)]): Promise<(v500.TransactionData | undefined)>
    getAll(): Promise<v500.TransactionData[]>
    getMany(keys: [Uint8Array, (number | undefined)][]): Promise<(v500.TransactionData | undefined)[]>
    getKeys(): Promise<[Uint8Array, (number | undefined)][]>
    getKeys(key: [Uint8Array, (number | undefined)]): Promise<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[Uint8Array, (number | undefined)][]>
    getPairs(): Promise<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairs(key: [Uint8Array, (number | undefined)]): Promise<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, (number | undefined)]): AsyncIterable<[k: [Uint8Array, (number | undefined)], v: v500.TransactionData][]>
}

export class ClaimsTotalStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'Total'
    }

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been approved and are not yet claimed.
     */
    get asV500(): ClaimsTotalStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been approved and are not yet claimed.
 */
export interface ClaimsTotalStorageV500 {
    get(): Promise<bigint>
}

export class ClaimsTotalUnclaimedAmountStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TotalUnclaimedAmount'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  This is the total amount for which claims have been requested and are not yet claimed.
     */
    get asMatrixEnjinV603(): ClaimsTotalUnclaimedAmountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  This is the total amount for which claims have been requested and are not yet claimed.
 */
export interface ClaimsTotalUnclaimedAmountStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class ClaimsTransactionHashLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Claims'
    }

    protected getName() {
        return 'TransactionHashLookup'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '29735300dba5135be0e1e53d771089aba86ed92479018d68d31c9d66cb9816e3'
    }

    /**
     *  This stores transaction hash. Is used to check if transaction hash is already present
     */
    get asMatrixEnjinV603(): ClaimsTransactionHashLookupStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  This stores transaction hash. Is used to check if transaction hash is already present
 */
export interface ClaimsTransactionHashLookupStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: Uint8Array[]): Promise<(null | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: null][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: null][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: null][]>
}

export class CollatorStakingCandidatesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Candidates'
    }

    /**
     *  The current set of candidates for collation.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of candidates for collation.
     */
    get asMatrixEnjinV603(): CollatorStakingCandidatesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of candidates for collation.
 */
export interface CollatorStakingCandidatesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingCollatorExitsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CollatorExits'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc1fabbf37ff4a03bb9bd2d05fd2211c29428d60c37ffa71e74ce64db501eb06'
    }

    /**
     *  The list of collators who requested an exit.
     */
    get asMatrixEnjinV603(): CollatorStakingCollatorExitsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The list of collators who requested an exit.
 */
export interface CollatorStakingCollatorExitsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<(number | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class CollatorStakingCollatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Collators'
    }

    /**
     *  The current set of collators
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The current set of collators
     */
    get asMatrixEnjinV603(): CollatorStakingCollatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of collators
 */
export interface CollatorStakingCollatorsStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingCurrentRoundStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'CurrentRound'
    }

    /**
     *  The current round information.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '55f635cb275994673c2b749928c20c824098d354b6ce574fd0854fccb2dfd74e'
    }

    /**
     *  The current round information.
     */
    get asMatrixEnjinV603(): CollatorStakingCurrentRoundStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current round information.
 */
export interface CollatorStakingCurrentRoundStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Round>
}

export class CollatorStakingDesiredCandidatesCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'DesiredCandidatesCount'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
     */
    get asMatrixEnjinV603(): CollatorStakingDesiredCandidatesCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current candidate limit, must be within 0 and [`MaxCandidates`](Config::MaxCandidates)
 */
export interface CollatorStakingDesiredCandidatesCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CollatorStakingInvulnerablesStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Invulnerables'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '35c5711ece77e8bf668805f5771fb7a2fac84ca2d4e88fa1475f8e8f5f814787'
    }

    /**
     *  The invulnerable collators
     * 
     *  This is the list of collators who are invulnerable to being ejected from collation
     *  either by unbonding or by having less stake.
     */
    get asMatrixEnjinV603(): CollatorStakingInvulnerablesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The invulnerable collators
 * 
 *  This is the list of collators who are invulnerable to being ejected from collation
 *  either by unbonding or by having less stake.
 */
export interface CollatorStakingInvulnerablesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Collator[]>
}

export class CollatorStakingMinCollatorStakeStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'MinCollatorStake'
    }

    /**
     *  The min stake amount for collators
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The min stake amount for collators
     */
    get asMatrixEnjinV603(): CollatorStakingMinCollatorStakeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The min stake amount for collators
 */
export interface CollatorStakingMinCollatorStakeStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class CollatorStakingNominatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'Nominators'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '11643981c5f057df403241a3175aad7384102829be78567ad40af375e54362df'
    }

    /**
     *  The current set of nominators.
     * 
     *  Each nominator is allowed to nominate one collator.
     */
    get asMatrixEnjinV603(): CollatorStakingNominatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of nominators.
 * 
 *  Each nominator is allowed to nominate one collator.
 */
export interface CollatorStakingNominatorsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Nomination | undefined)>
    getAll(): Promise<matrixEnjinV603.Nomination[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Nomination | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Nomination][]>
}

export class CollatorStakingSessionInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'CollatorStaking'
    }

    protected getName() {
        return 'SessionInfo'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '158926fcec32bbcafd0b7803e082429e4e807c32a63362ded7d2c8c3c9e95edb'
    }

    /**
     *  The session info of collators including produced blocks and uptime
     */
    get asMatrixEnjinV603(): CollatorStakingSessionInfoStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The session info of collators including produced blocks and uptime
 */
export interface CollatorStakingSessionInfoStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: number): Promise<matrixEnjinV603.CollatorSessionInfo>
    getAll(): Promise<matrixEnjinV603.CollatorSessionInfo[]>
    getMany(keys: [Uint8Array, number][]): Promise<matrixEnjinV603.CollatorSessionInfo[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, number][]>
    getKeys(key1: Uint8Array, key2: number): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairs(key1: Uint8Array, key2: number): Promise<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: number): AsyncIterable<[k: [Uint8Array, number], v: matrixEnjinV603.CollatorSessionInfo][]>
}

export class CommunityPoolApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asMatrixEnjinV603(): CommunityPoolApprovalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface CommunityPoolApprovalsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class CommunityPoolDeactivatedStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Deactivated'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  The amount which has been reported as inactive to Currency.
     */
    get asMatrixEnjinV603(): CommunityPoolDeactivatedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The amount which has been reported as inactive to Currency.
 */
export interface CommunityPoolDeactivatedStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class CommunityPoolProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Number of proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of proposals that have been made.
     */
    get asMatrixEnjinV603(): CommunityPoolProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of proposals that have been made.
 */
export interface CommunityPoolProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CommunityPoolProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'CommunityPool'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asMatrixEnjinV603(): CommunityPoolProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface CommunityPoolProposalsStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Proposal | undefined)>
    getAll(): Promise<matrixEnjinV603.Proposal[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Proposal | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.Proposal][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.Proposal][]>
}

export class CouncilMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixEnjinV603(): CouncilMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface CouncilMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class CouncilPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixEnjinV603(): CouncilPrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface CouncilPrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class CouncilProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixEnjinV603(): CouncilProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface CouncilProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class CouncilProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV603(): CouncilProposalOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '8c127c77fbad28fe03cea74e3dc13593f4abc6334ac06ebee57fced2ba801c79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1000(): CouncilProposalOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1003(): boolean {
        return this.getTypeHash() === '7e38c81de9998b7ee5c1f6e2e1600141fe0b26a1eaa70c1e65ce1f8a2af3a057'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1003(): CouncilProposalOfStorageMatrixEnjinV1003 {
        assert(this.isMatrixEnjinV1003)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === '70cfd1bde559f52b5196f52f1bf511f746603865cbf1f6d5d98b23fd21c09087'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1004(): CouncilProposalOfStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '6cde8e9630d410c635d38d4e132dcdeddc5fd40211867012e22267dd19cd2cf1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV500(): CouncilProposalOfStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === 'd0a200fac2f9993d848c3a7287da92f026ee7ee2a194fed9e6f2d9eb76c9ab57'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): CouncilProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV601(): boolean {
        return this.getTypeHash() === 'cc79ccb140126aa785dace5b0d26db51b8387db5f6cbb6917faa59383367df1d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV601(): CouncilProposalOfStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '89559d3fb6f541bdf5075d1f4863bb5ac0e0acfed89282c2e8067b09a3b99f23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV602(): CouncilProposalOfStorageV602 {
        assert(this.isV602)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV604(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV604(): CouncilProposalOfStorageV604 {
        assert(this.isV604)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'dfe5df22cb4c381943ebfa829caeea5c49e6730cde220ed8deff3a17d702aa5a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1000(): CouncilProposalOfStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1003(): boolean {
        return this.getTypeHash() === 'c012e19996ab8837de134875f9a1ab2da00d981db255bf3a3508f22b7bde216a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1003(): CouncilProposalOfStorageV1003 {
        assert(this.isV1003)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1004(): boolean {
        return this.getTypeHash() === '69e6d13666e3451d4f2dee8c1f72397c4d6f9e99223bb91ffe671c3c7b090d47'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1004(): CouncilProposalOfStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Call | undefined)>
    getAll(): Promise<matrixEnjinV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Call | undefined)>
    getAll(): Promise<matrixEnjinV1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV1003 {
    get(key: Uint8Array): Promise<(matrixEnjinV1003.Call | undefined)>
    getAll(): Promise<matrixEnjinV1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageMatrixEnjinV1004 {
    get(key: Uint8Array): Promise<(matrixEnjinV1004.Call | undefined)>
    getAll(): Promise<matrixEnjinV1004.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1004.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV500 {
    get(key: Uint8Array): Promise<(v500.Call | undefined)>
    getAll(): Promise<v500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Call | undefined)>
    getAll(): Promise<v600.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV601 {
    get(key: Uint8Array): Promise<(v601.Call | undefined)>
    getAll(): Promise<v601.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v601.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV602 {
    get(key: Uint8Array): Promise<(v602.Call | undefined)>
    getAll(): Promise<v602.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v602.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV604 {
    get(key: Uint8Array): Promise<(v604.Call | undefined)>
    getAll(): Promise<v604.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v604.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v604.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v604.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v604.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v604.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.Call | undefined)>
    getAll(): Promise<v1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1003 {
    get(key: Uint8Array): Promise<(v1003.Call | undefined)>
    getAll(): Promise<v1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1003.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface CouncilProposalOfStorageV1004 {
    get(key: Uint8Array): Promise<(v1004.Call | undefined)>
    getAll(): Promise<v1004.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1004.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
}

export class CouncilProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixEnjinV603(): CouncilProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface CouncilProposalsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class CouncilVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'Council'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixEnjinV603(): CouncilVotingStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface CouncilVotingStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Votes | undefined)>
    getAll(): Promise<matrixEnjinV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
}

export class DemocracyBlacklistStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Blacklist'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '4662be06b687a34e496fd51dc08b342dcaf96f230c937bc993b5e44373a90d1c'
    }

    /**
     *  A record of who vetoed what. Maps proposal hash to a possible existent block number
     *  (until when it may not be resubmitted) and who vetoed it.
     */
    get asMatrixEnjinV603(): DemocracyBlacklistStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  A record of who vetoed what. Maps proposal hash to a possible existent block number
 *  (until when it may not be resubmitted) and who vetoed it.
 */
export interface DemocracyBlacklistStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([number, Uint8Array[]] | undefined)>
    getAll(): Promise<[number, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<([number, Uint8Array[]] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, Uint8Array[]]][]>
}

export class DemocracyCancellationsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'Cancellations'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'ab0be9e2464670e9cf9991160d40979b3c2b03b59072e7d5023129d90356f1f4'
    }

    /**
     *  Record of all proposals that have been subject to emergency cancellation.
     */
    get asMatrixEnjinV603(): DemocracyCancellationsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Record of all proposals that have been subject to emergency cancellation.
 */
export interface DemocracyCancellationsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<boolean>
    getAll(): Promise<boolean[]>
    getMany(keys: Uint8Array[]): Promise<boolean[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: boolean][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: boolean][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: boolean][]>
}

export class DemocracyDepositOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'DepositOf'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '103e29949f153721c94022e4909ca1a4e147451b6be4f1cf605cbc601e16f4fb'
    }

    /**
     *  Those who have locked a deposit.
     * 
     *  TWOX-NOTE: Safe, as increasing integer keys are safe.
     */
    get asMatrixEnjinV603(): DemocracyDepositOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Those who have locked a deposit.
 * 
 *  TWOX-NOTE: Safe, as increasing integer keys are safe.
 */
export interface DemocracyDepositOfStorageMatrixEnjinV603 {
    get(key: number): Promise<([Uint8Array[], bigint] | undefined)>
    getAll(): Promise<[Uint8Array[], bigint][]>
    getMany(keys: number[]): Promise<([Uint8Array[], bigint] | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairs(key: number): Promise<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [Uint8Array[], bigint]][]>
}

export class DemocracyLastTabledWasExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LastTabledWasExternal'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the last referendum tabled was submitted externally. False if it was a public
     *  proposal.
     */
    get asMatrixEnjinV603(): DemocracyLastTabledWasExternalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if the last referendum tabled was submitted externally. False if it was a public
 *  proposal.
 */
export interface DemocracyLastTabledWasExternalStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class DemocracyLowestUnbakedStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'LowestUnbaked'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The lowest referendum index representing an unbaked referendum. Equal to
     *  `ReferendumCount` if there isn't a unbaked referendum.
     */
    get asMatrixEnjinV603(): DemocracyLowestUnbakedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The lowest referendum index representing an unbaked referendum. Equal to
 *  `ReferendumCount` if there isn't a unbaked referendum.
 */
export interface DemocracyLowestUnbakedStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyMetadataOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'MetadataOf'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a67a07e9fffcce1c75e0f4b23d9fdf10851d6031a73b67c731af0a1b8e2197e2'
    }

    /**
     *  General information concerning any proposal or referendum.
     *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
     *  dump or IPFS hash of a JSON file.
     * 
     *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
     *  large preimages.
     */
    get asMatrixEnjinV603(): DemocracyMetadataOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  General information concerning any proposal or referendum.
 *  The `PreimageHash` refers to the preimage of the `Preimages` provider which can be a JSON
 *  dump or IPFS hash of a JSON file.
 * 
 *  Consider a garbage collection for a metadata of finished referendums to `unrequest` (remove)
 *  large preimages.
 */
export interface DemocracyMetadataOfStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.MetadataOwner): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: matrixEnjinV603.MetadataOwner[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeys(key: matrixEnjinV603.MetadataOwner): Promise<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.MetadataOwner): AsyncIterable<matrixEnjinV603.MetadataOwner[]>
    getPairs(): Promise<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairs(key: matrixEnjinV603.MetadataOwner): Promise<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.MetadataOwner): AsyncIterable<[k: matrixEnjinV603.MetadataOwner, v: Uint8Array][]>
}

export class DemocracyNextExternalStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'NextExternal'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '5ae273b3f6176aae8ebabb6d92e749499c9e5de5bc8e85ade788f86e508314ea'
    }

    /**
     *  The referendum to be tabled whenever it would be valid to table an external proposal.
     *  This happens when a referendum needs to be tabled and one of two conditions are met:
     *  - `LastTabledWasExternal` is `false`; or
     *  - `PublicProps` is empty.
     */
    get asMatrixEnjinV603(): DemocracyNextExternalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The referendum to be tabled whenever it would be valid to table an external proposal.
 *  This happens when a referendum needs to be tabled and one of two conditions are met:
 *  - `LastTabledWasExternal` is `false`; or
 *  - `PublicProps` is empty.
 */
export interface DemocracyNextExternalStorageMatrixEnjinV603 {
    get(): Promise<([matrixEnjinV603.Bounded, matrixEnjinV603.VoteThreshold] | undefined)>
}

export class DemocracyPublicPropCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicPropCount'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of (public) proposals that have been made so far.
     */
    get asMatrixEnjinV603(): DemocracyPublicPropCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of (public) proposals that have been made so far.
 */
export interface DemocracyPublicPropCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyPublicPropsStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'PublicProps'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '3472d1c9441381a2b9709395dfc47ee60b049d41fbd71ce557eb1a61ef656bec'
    }

    /**
     *  The public proposals. Unsorted. The second item is the proposal.
     */
    get asMatrixEnjinV603(): DemocracyPublicPropsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The public proposals. Unsorted. The second item is the proposal.
 */
export interface DemocracyPublicPropsStorageMatrixEnjinV603 {
    get(): Promise<[number, matrixEnjinV603.Bounded, Uint8Array][]>
}

export class DemocracyReferendumCountStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumCount'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The next free referendum index, aka the number of referenda started so far.
     */
    get asMatrixEnjinV603(): DemocracyReferendumCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The next free referendum index, aka the number of referenda started so far.
 */
export interface DemocracyReferendumCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DemocracyReferendumInfoOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'ReferendumInfoOf'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'ba926738202889ee118b1f40d70a1edbd71f0893c703c708a73330af6ca468e1'
    }

    /**
     *  Information concerning any given referendum.
     * 
     *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
     */
    get asMatrixEnjinV603(): DemocracyReferendumInfoOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 * 
 *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
 */
export interface DemocracyReferendumInfoOfStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.ReferendumInfo | undefined)>
    getAll(): Promise<matrixEnjinV603.ReferendumInfo[]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.ReferendumInfo | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairs(key: number): Promise<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: matrixEnjinV603.ReferendumInfo][]>
}

export class DemocracyVotingOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Democracy'
    }

    protected getName() {
        return 'VotingOf'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95f82dfc66c624a327b91f77d863a0608d8641c62fc61b1c0067319d4045fc77'
    }

    /**
     *  All votes for a particular voter. We store the balance for the number of votes that we
     *  have recorded. The second item is the total amount of delegations, that will be added.
     * 
     *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
     */
    get asMatrixEnjinV603(): DemocracyVotingOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  All votes for a particular voter. We store the balance for the number of votes that we
 *  have recorded. The second item is the total amount of delegations, that will be added.
 * 
 *  TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
 */
export interface DemocracyVotingOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.Voting>
    getAll(): Promise<matrixEnjinV603.Voting[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.Voting[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Voting][]>
}

export class DmpQueueConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Configuration'
    }

    /**
     *  The configuration.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd4ff4c68d7b5a5db6603b6449fa2fc5fa9ccb53292dd0c03e9b6a4920c6e75f9'
    }

    /**
     *  The configuration.
     */
    get asMatrixEnjinV603(): DmpQueueConfigurationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The configuration.
 */
export interface DmpQueueConfigurationStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.ConfigData>
}

export class DmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixEnjinV603(): DmpQueueCounterForOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface DmpQueueCounterForOverweightStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class DmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The overweight messages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '02b70c9350fc19f8edcf45c5eb6332933141453267579d97f6eece480cbaa4d4'
    }

    /**
     *  The overweight messages.
     */
    get asMatrixEnjinV603(): DmpQueueOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The overweight messages.
 */
export interface DmpQueueOverweightStorageMatrixEnjinV603 {
    get(key: bigint): Promise<([number, Uint8Array] | undefined)>
    getAll(): Promise<[number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, Uint8Array]][]>
}

export class DmpQueuePageIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'PageIndex'
    }

    /**
     *  The page index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'cad43146ccd742f66da886b2f77b13d96d2c4de637fbb965a7493a2f16c99189'
    }

    /**
     *  The page index.
     */
    get asMatrixEnjinV603(): DmpQueuePageIndexStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The page index.
 */
export interface DmpQueuePageIndexStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.PageIndexData>
}

export class DmpQueuePagesStorage extends StorageBase {
    protected getPrefix() {
        return 'DmpQueue'
    }

    protected getName() {
        return 'Pages'
    }

    /**
     *  The queue pages.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0b9460c8234ca1e6341c95066d20ac8d7e79e3a9b2def20c9450f88ef0ab1b1d'
    }

    /**
     *  The queue pages.
     */
    get asMatrixEnjinV603(): DmpQueuePagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The queue pages.
 */
export interface DmpQueuePagesStorageMatrixEnjinV603 {
    get(key: number): Promise<[number, Uint8Array][]>
    getAll(): Promise<[number, Uint8Array][][]>
    getMany(keys: number[]): Promise<[number, Uint8Array][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, Uint8Array][]][]>
}

export class EfinityXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'EfinityXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isV500(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asV500(): EfinityXcmMinimumWeightsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by efinityXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface EfinityXcmMinimumWeightsStorageV500 {
    get(key: v500.XcmOperation): Promise<v500.MinimumWeightFeePair>
    getAll(): Promise<v500.MinimumWeightFeePair[]>
    getMany(keys: v500.XcmOperation[]): Promise<v500.MinimumWeightFeePair[]>
    getKeys(): Promise<v500.XcmOperation[]>
    getKeys(key: v500.XcmOperation): Promise<v500.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.XcmOperation[]>
    getKeysPaged(pageSize: number, key: v500.XcmOperation): AsyncIterable<v500.XcmOperation[]>
    getPairs(): Promise<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairs(key: v500.XcmOperation): Promise<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: v500.XcmOperation): AsyncIterable<[k: v500.XcmOperation, v: v500.MinimumWeightFeePair][]>
}

export class ExtrinsicPausePausedExtrinsicsStorage extends StorageBase {
    protected getPrefix() {
        return 'ExtrinsicPause'
    }

    protected getName() {
        return 'PausedExtrinsics'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9914d71a2b43fa7da00c957184ae8b79abfcf4e6a63fb1b814680e322156164c'
    }

    /**
     *  Paused extrinsics map
     * 
     *  The key is tuple with the name of the pallet and the extrinsic name and value is
     *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
     */
    get asMatrixEnjinV603(): ExtrinsicPausePausedExtrinsicsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Paused extrinsics map
 * 
 *  The key is tuple with the name of the pallet and the extrinsic name and value is
 *  an Option<()> which is None if the extrinsic is not paused and Some(()) if it is.
 */
export interface ExtrinsicPausePausedExtrinsicsStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.ExtrinsicInfo): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: matrixEnjinV603.ExtrinsicInfo[]): Promise<(null | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeys(key: matrixEnjinV603.ExtrinsicInfo): Promise<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<matrixEnjinV603.ExtrinsicInfo[]>
    getPairs(): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairs(key: matrixEnjinV603.ExtrinsicInfo): Promise<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.ExtrinsicInfo): AsyncIterable<[k: matrixEnjinV603.ExtrinsicInfo, v: null][]>
}

export class FuelTanksAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Accounts'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asMatrixEnjinV603(): FuelTanksAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'd14766567f5c29c282b272050ea78a1a1a9f3ee86b48cb7caf97fb5e4d4d4cd7'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asMatrixEnjinV1000(): FuelTanksAccountsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isV500(): boolean {
        return this.getTypeHash() === '01245446ad097e0a27bc7d677ff4084b3e43dd7bf1f408c6295b2c4b9b742aa1'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asV500(): FuelTanksAccountsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'd14766567f5c29c282b272050ea78a1a1a9f3ee86b48cb7caf97fb5e4d4d4cd7'
    }

    /**
     *  Mapping of Fuel Tanks and their user Accounts to account data
     */
    get asV1000(): FuelTanksAccountsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV603.UserAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV603.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageMatrixEnjinV1000 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV1000.UserAccount | undefined)>
    getAll(): Promise<matrixEnjinV1000.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV1000.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV1000.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageV500 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v500.UserAccount | undefined)>
    getAll(): Promise<v500.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v500.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v500.UserAccount][]>
}

/**
 *  Mapping of Fuel Tanks and their user Accounts to account data
 */
export interface FuelTanksAccountsStorageV1000 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(v1000.UserAccount | undefined)>
    getAll(): Promise<v1000.UserAccount[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(v1000.UserAccount | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: v1000.UserAccount][]>
}

export class FuelTanksFreezeQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'FreezeQueue'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6417b6c5aebb64849792349d17be222d1c212c6254e5517ec62f89a5e5e14ddc'
    }

    /**
     *  The queue for fuel tank and rule set freezing
     *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
     */
    get asMatrixEnjinV603(): FuelTanksFreezeQueueStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The queue for fuel tank and rule set freezing
 *  Composed of (`tank_id`, `rule_set_id`, new `is_frozen` value)
 */
export interface FuelTanksFreezeQueueStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.FreezeQueueItem[]>
}

export class FuelTanksTanksStorage extends StorageBase {
    protected getPrefix() {
        return 'FuelTanks'
    }

    protected getName() {
        return 'Tanks'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asMatrixEnjinV603(): FuelTanksTanksStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'cc21aa9f97b2a2a9d5d8eec8eff3577d3167eb091b5cc8ac45d30f96fa9b0197'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asMatrixEnjinV1000(): FuelTanksTanksStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isV500(): boolean {
        return this.getTypeHash() === '170c8c92a3afd2eb9f5df09f52871255ecd25233f0e5b53f9e504a5d16ca3478'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asV500(): FuelTanksTanksStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'cc21aa9f97b2a2a9d5d8eec8eff3577d3167eb091b5cc8ac45d30f96fa9b0197'
    }

    /**
     *  Mapping of Fuel Tanks accounts to their data
     */
    get asV1000(): FuelTanksTanksStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.FuelTank | undefined)>
    getAll(): Promise<matrixEnjinV603.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.FuelTank | undefined)>
    getAll(): Promise<matrixEnjinV1000.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageV500 {
    get(key: Uint8Array): Promise<(v500.FuelTank | undefined)>
    getAll(): Promise<v500.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(v500.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.FuelTank][]>
}

/**
 *  Mapping of Fuel Tanks accounts to their data
 */
export interface FuelTanksTanksStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.FuelTank | undefined)>
    getAll(): Promise<v1000.FuelTank[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.FuelTank | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.FuelTank][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.FuelTank][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.FuelTank][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.FuelTank][]>
}

export class IdentityIdentityOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'IdentityOf'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'eee9529c5197f7a5f8200e155d78bab0a612de49bd6c8941e539265edf54c3aa'
    }

    /**
     *  Information that is pertinent to identify the entity behind an account.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asMatrixEnjinV1000(): IdentityIdentityOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Information that is pertinent to identify the entity behind an account.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentityIdentityOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Registration | undefined)>
    getAll(): Promise<matrixEnjinV1000.Registration[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Registration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Registration][]>
}

export class IdentityRegistrarsStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'Registrars'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'd53feea500c88336983c65706eeb51794b1fc991a17d6d33663d49aeb47b12b6'
    }

    /**
     *  The set of registrars. Not expected to get very big as can only be added through a
     *  special origin (likely a council motion).
     * 
     *  The index into this can be cast to `RegistrarIndex` to get a valid value.
     */
    get asMatrixEnjinV1000(): IdentityRegistrarsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  The set of registrars. Not expected to get very big as can only be added through a
 *  special origin (likely a council motion).
 * 
 *  The index into this can be cast to `RegistrarIndex` to get a valid value.
 */
export interface IdentityRegistrarsStorageMatrixEnjinV1000 {
    get(): Promise<(matrixEnjinV1000.RegistrarInfo | undefined)[]>
}

export class IdentitySubsOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SubsOf'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '925d8593182dee4b16701bef694e42944c6fa6f1d20d0a7b05fb8ed6b451f6b7'
    }

    /**
     *  Alternative "sub" identities of this account.
     * 
     *  The first item is the deposit, the second is a vector of the accounts.
     * 
     *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
     */
    get asMatrixEnjinV1000(): IdentitySubsOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Alternative "sub" identities of this account.
 * 
 *  The first item is the deposit, the second is a vector of the accounts.
 * 
 *  TWOX-NOTE: OK ― `AccountId` is a secure hash.
 */
export interface IdentitySubsOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<[bigint, Uint8Array[]]>
    getAll(): Promise<[bigint, Uint8Array[]][]>
    getMany(keys: Uint8Array[]): Promise<[bigint, Uint8Array[]][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, Uint8Array[]]][]>
}

export class IdentitySuperOfStorage extends StorageBase {
    protected getPrefix() {
        return 'Identity'
    }

    protected getName() {
        return 'SuperOf'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '3e2404306f316847b5946856f8222df193ecb9ace5e509cd9f8808145fd9b792'
    }

    /**
     *  The super-identity of an alternative "sub" identity together with its name, within that
     *  context. If the account is not some other account's sub-identity, then just `None`.
     */
    get asMatrixEnjinV1000(): IdentitySuperOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  The super-identity of an alternative "sub" identity together with its name, within that
 *  context. If the account is not some other account's sub-identity, then just `None`.
 */
export interface IdentitySuperOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<([Uint8Array, matrixEnjinV1000.Data] | undefined)>
    getAll(): Promise<[Uint8Array, matrixEnjinV1000.Data][]>
    getMany(keys: Uint8Array[]): Promise<([Uint8Array, matrixEnjinV1000.Data] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [Uint8Array, matrixEnjinV1000.Data]][]>
}

export class MarketplaceInfoStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Info'
    }

    /**
     *  Stores information about the marketplace
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'cf0eb405cb6ed3bb6861e38a8d936f67fa9f71862d7c3c2be2ca3f90d3ad8b3d'
    }

    /**
     *  Stores information about the marketplace
     */
    get asMatrixEnjinV603(): MarketplaceInfoStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Stores information about the marketplace
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8f3079a34bccec98eddaa087299c671597b9b6c0401ca8c900734ef257151b13'
    }

    /**
     *  Stores information about the marketplace
     */
    get asV500(): MarketplaceInfoStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Stores information about the marketplace
     */
    get isV604(): boolean {
        return this.getTypeHash() === 'cf0eb405cb6ed3bb6861e38a8d936f67fa9f71862d7c3c2be2ca3f90d3ad8b3d'
    }

    /**
     *  Stores information about the marketplace
     */
    get asV604(): MarketplaceInfoStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.MarketPlaceInfo>
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageV500 {
    get(): Promise<v500.MarketPlaceInfo>
}

/**
 *  Stores information about the marketplace
 */
export interface MarketplaceInfoStorageV604 {
    get(): Promise<v604.MarketPlaceInfo>
}

export class MarketplaceListingIdsByAccountIdStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByAccountId'
    }

    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    get isV500(): boolean {
        return this.getTypeHash() === '33e12ad309c02112b5ea505c6e3e739ba83921bfe6bed7e5eb08d21907895180'
    }

    /**
     *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
     */
    get asV500(): MarketplaceListingIdsByAccountIdStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Listing Ids by [`AccountId`](frame_system::Config::AccountId)
 */
export interface MarketplaceListingIdsByAccountIdStorageV500 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(null | undefined)>
    getAll(): Promise<null[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(null | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: null][]>
}

export class MarketplaceListingIdsByMakeAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByMakeAsset'
    }

    /**
     *  Listing Ids by make asset's collection id and token id
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by make asset's collection id and token id
     */
    get asV500(): MarketplaceListingIdsByMakeAssetStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Listing Ids by make asset's collection id and token id
 */
export interface MarketplaceListingIdsByMakeAssetStorageV500 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
}

export class MarketplaceListingIdsByTakeAssetStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'ListingIdsByTakeAsset'
    }

    /**
     *  Listing Ids by take asset's collection id and token id
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'cc5df187f7a6ddcd474c0c1e410e8d72bd71954d4b2ad06da5882588a225356a'
    }

    /**
     *  Listing Ids by take asset's collection id and token id
     */
    get asV500(): MarketplaceListingIdsByTakeAssetStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Listing Ids by take asset's collection id and token id
 */
export interface MarketplaceListingIdsByTakeAssetStorageV500 {
    get(key1: bigint, key2: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [bigint, bigint][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: Uint8Array][]>
}

export class MarketplaceListingsStorage extends StorageBase {
    protected getPrefix() {
        return 'Marketplace'
    }

    protected getName() {
        return 'Listings'
    }

    /**
     *  Listings by ID
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asMatrixEnjinV603(): MarketplaceListingsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Listings by ID
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === 'd68709a03fe5f2e12d10e48ae2c964da6dd14fd99878c95b4381605a9ab2f7da'
    }

    /**
     *  Listings by ID
     */
    get asMatrixEnjinV1004(): MarketplaceListingsStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  Listings by ID
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'e51936bd4e8b63920dc0b1c10bbd1672cd077197cb65f17e9eba1f1a57c36335'
    }

    /**
     *  Listings by ID
     */
    get asV500(): MarketplaceListingsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Listings by ID
     */
    get isV1004(): boolean {
        return this.getTypeHash() === 'd68709a03fe5f2e12d10e48ae2c964da6dd14fd99878c95b4381605a9ab2f7da'
    }

    /**
     *  Listings by ID
     */
    get asV1004(): MarketplaceListingsStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Listing | undefined)>
    getAll(): Promise<matrixEnjinV603.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Listing][]>
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageMatrixEnjinV1004 {
    get(key: Uint8Array): Promise<(matrixEnjinV1004.Listing | undefined)>
    getAll(): Promise<matrixEnjinV1004.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1004.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1004.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1004.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Listing][]>
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageV500 {
    get(key: Uint8Array): Promise<(v500.Listing | undefined)>
    getAll(): Promise<v500.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Listing][]>
}

/**
 *  Listings by ID
 */
export interface MarketplaceListingsStorageV1004 {
    get(key: Uint8Array): Promise<(v1004.Listing | undefined)>
    getAll(): Promise<v1004.Listing[]>
    getMany(keys: Uint8Array[]): Promise<(v1004.Listing | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1004.Listing][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1004.Listing][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1004.Listing][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1004.Listing][]>
}

export class MatrixXcmMinimumWeightsStorage extends StorageBase {
    protected getPrefix() {
        return 'MatrixXcm'
    }

    protected getName() {
        return 'MinimumWeights'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '54746c8f01b687fecc1a895c1db7ce3ffd9db2d7ab532bd2488b343309741009'
    }

    /**
     *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
     *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
     *  used for setting the minimum fee (in DOT) for statemint.
     * 
     *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
     */
    get asMatrixEnjinV603(): MatrixXcmMinimumWeightsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The `dest_weight` limit and fee for executing XCM msg sent by matrixXcm. Must be
 *  sufficient, otherwise the execution of XCM msg on relaychain will fail. For example it is
 *  used for setting the minimum fee (in DOT) for statemint.
 * 
 *  XcmWeightFee: map: XcmOperation => MinimumWeightFeePair
 */
export interface MatrixXcmMinimumWeightsStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.MinimumWeightFeePair>
    getAll(): Promise<matrixEnjinV603.MinimumWeightFeePair[]>
    getMany(keys: matrixEnjinV603.XcmOperation[]): Promise<matrixEnjinV603.MinimumWeightFeePair[]>
    getKeys(): Promise<matrixEnjinV603.XcmOperation[]>
    getKeys(key: matrixEnjinV603.XcmOperation): Promise<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.XcmOperation): AsyncIterable<matrixEnjinV603.XcmOperation[]>
    getPairs(): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairs(key: matrixEnjinV603.XcmOperation): Promise<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.XcmOperation): AsyncIterable<[k: matrixEnjinV603.XcmOperation, v: matrixEnjinV603.MinimumWeightFeePair][]>
}

export class MultiTokensAssetIdsByLocationStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'AssetIdsByLocation'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asMatrixEnjinV603(): MultiTokensAssetIdsByLocationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === '23158e49032a03fad1648e5c112d1685a37907dd0691ffa46a5e439e5a9d5bea'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asMatrixEnjinV1004(): MultiTokensAssetIdsByLocationStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isV500(): boolean {
        return this.getTypeHash() === '7920f1b519a7f965b522a230108d367f65586e4e31d2aa9d94778fd4f0aab869'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asV500(): MultiTokensAssetIdsByLocationStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get isV1004(): boolean {
        return this.getTypeHash() === '23158e49032a03fad1648e5c112d1685a37907dd0691ffa46a5e439e5a9d5bea'
    }

    /**
     *  Map of Locations to AssetIds of Foreign Tokens
     */
    get asV1004(): MultiTokensAssetIdsByLocationStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageMatrixEnjinV603 {
    get(key: matrixEnjinV603.V3MultiLocation): Promise<(matrixEnjinV603.AssetId | undefined)>
    getAll(): Promise<matrixEnjinV603.AssetId[]>
    getMany(keys: matrixEnjinV603.V3MultiLocation[]): Promise<(matrixEnjinV603.AssetId | undefined)[]>
    getKeys(): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeys(key: matrixEnjinV603.V3MultiLocation): Promise<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<matrixEnjinV603.V3MultiLocation[]>
    getPairs(): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairs(key: matrixEnjinV603.V3MultiLocation): Promise<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV603.V3MultiLocation): AsyncIterable<[k: matrixEnjinV603.V3MultiLocation, v: matrixEnjinV603.AssetId][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageMatrixEnjinV1004 {
    get(key: matrixEnjinV1004.V3MultiLocation): Promise<(matrixEnjinV1004.AssetId | undefined)>
    getAll(): Promise<matrixEnjinV1004.AssetId[]>
    getMany(keys: matrixEnjinV1004.V3MultiLocation[]): Promise<(matrixEnjinV1004.AssetId | undefined)[]>
    getKeys(): Promise<matrixEnjinV1004.V3MultiLocation[]>
    getKeys(key: matrixEnjinV1004.V3MultiLocation): Promise<matrixEnjinV1004.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<matrixEnjinV1004.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: matrixEnjinV1004.V3MultiLocation): AsyncIterable<matrixEnjinV1004.V3MultiLocation[]>
    getPairs(): Promise<[k: matrixEnjinV1004.V3MultiLocation, v: matrixEnjinV1004.AssetId][]>
    getPairs(key: matrixEnjinV1004.V3MultiLocation): Promise<[k: matrixEnjinV1004.V3MultiLocation, v: matrixEnjinV1004.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: matrixEnjinV1004.V3MultiLocation, v: matrixEnjinV1004.AssetId][]>
    getPairsPaged(pageSize: number, key: matrixEnjinV1004.V3MultiLocation): AsyncIterable<[k: matrixEnjinV1004.V3MultiLocation, v: matrixEnjinV1004.AssetId][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageV500 {
    get(key: v500.V3MultiLocation): Promise<(v500.AssetId | undefined)>
    getAll(): Promise<v500.AssetId[]>
    getMany(keys: v500.V3MultiLocation[]): Promise<(v500.AssetId | undefined)[]>
    getKeys(): Promise<v500.V3MultiLocation[]>
    getKeys(key: v500.V3MultiLocation): Promise<v500.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v500.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: v500.V3MultiLocation): AsyncIterable<v500.V3MultiLocation[]>
    getPairs(): Promise<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairs(key: v500.V3MultiLocation): Promise<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v500.V3MultiLocation, v: v500.AssetId][]>
    getPairsPaged(pageSize: number, key: v500.V3MultiLocation): AsyncIterable<[k: v500.V3MultiLocation, v: v500.AssetId][]>
}

/**
 *  Map of Locations to AssetIds of Foreign Tokens
 */
export interface MultiTokensAssetIdsByLocationStorageV1004 {
    get(key: v1004.V3MultiLocation): Promise<(v1004.AssetId | undefined)>
    getAll(): Promise<v1004.AssetId[]>
    getMany(keys: v1004.V3MultiLocation[]): Promise<(v1004.AssetId | undefined)[]>
    getKeys(): Promise<v1004.V3MultiLocation[]>
    getKeys(key: v1004.V3MultiLocation): Promise<v1004.V3MultiLocation[]>
    getKeysPaged(pageSize: number): AsyncIterable<v1004.V3MultiLocation[]>
    getKeysPaged(pageSize: number, key: v1004.V3MultiLocation): AsyncIterable<v1004.V3MultiLocation[]>
    getPairs(): Promise<[k: v1004.V3MultiLocation, v: v1004.AssetId][]>
    getPairs(key: v1004.V3MultiLocation): Promise<[k: v1004.V3MultiLocation, v: v1004.AssetId][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: v1004.V3MultiLocation, v: v1004.AssetId][]>
    getPairsPaged(pageSize: number, key: v1004.V3MultiLocation): AsyncIterable<[k: v1004.V3MultiLocation, v: v1004.AssetId][]>
}

export class MultiTokensAttributesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Attributes'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a746a93405e250d7e804277de85e59649a8d0f26dcdbc38249cee2190785886d'
    }

    /**
     *  Metadata of collections and tokens.
     */
    get asMatrixEnjinV603(): MultiTokensAttributesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Metadata of collections and tokens.
 */
export interface MultiTokensAttributesStorageMatrixEnjinV603 {
    get(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<(matrixEnjinV603.Attribute | undefined)>
    getAll(): Promise<matrixEnjinV603.Attribute[]>
    getMany(keys: [bigint, (bigint | undefined), Uint8Array][]): Promise<(matrixEnjinV603.Attribute | undefined)[]>
    getKeys(): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined)): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeys(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[bigint, (bigint | undefined), Uint8Array][]>
    getPairs(): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined)): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairs(key1: bigint, key2: (bigint | undefined), key3: Uint8Array): Promise<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined)): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: (bigint | undefined), key3: Uint8Array): AsyncIterable<[k: [bigint, (bigint | undefined), Uint8Array], v: matrixEnjinV603.Attribute][]>
}

export class MultiTokensClaimableCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'ClaimableCollectionIds'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'fdfff90ed5af79ee1858a1d55d303d04b33fc21c6c879b2ea5fbb5725ee9ca02'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asMatrixEnjinV1000(): MultiTokensClaimableCollectionIdsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensClaimableCollectionIdsStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(bigint[] | undefined)>
    getAll(): Promise<bigint[][]>
    getMany(keys: Uint8Array[]): Promise<(bigint[] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: bigint[]][]>
}

export class MultiTokensCollectionAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'CollectionAccounts'
    }

    /**
     *  Stores information for an account per collection
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b46672e82d7bfd0dfb77b459f54edcb3814fab36fcd1e60c5702769a7fd5b155'
    }

    /**
     *  Stores information for an account per collection
     */
    get asMatrixEnjinV603(): MultiTokensCollectionAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores information for an account per collection
 */
export interface MultiTokensCollectionAccountsStorageMatrixEnjinV603 {
    get(key1: bigint, key2: Uint8Array): Promise<(matrixEnjinV603.CollectionAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.CollectionAccount[]>
    getMany(keys: [bigint, Uint8Array][]): Promise<(matrixEnjinV603.CollectionAccount | undefined)[]>
    getKeys(): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: Uint8Array): Promise<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairs(key1: bigint, key2: Uint8Array): Promise<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: Uint8Array): AsyncIterable<[k: [bigint, Uint8Array], v: matrixEnjinV603.CollectionAccount][]>
}

export class MultiTokensCollectionsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Collections'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asMatrixEnjinV603(): MultiTokensCollectionsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === 'e81ecf325e9651b60bcaa24863dcc5844480dc00dcbf5f1ab90447fc88a94dd4'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asMatrixEnjinV1004(): MultiTokensCollectionsStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'e505bb38c2f05501278271d4d92422c32c38f8976d079eddae5a656ea2e00d3e'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asV500(): MultiTokensCollectionsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get isV1004(): boolean {
        return this.getTypeHash() === 'e81ecf325e9651b60bcaa24863dcc5844480dc00dcbf5f1ab90447fc88a94dd4'
    }

    /**
     *  The collections in existence and their ownership details.
     */
    get asV1004(): MultiTokensCollectionsStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.Collection | undefined)>
    getAll(): Promise<matrixEnjinV603.Collection[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.Collection][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageMatrixEnjinV1004 {
    get(key: bigint): Promise<(matrixEnjinV1004.Collection | undefined)>
    getAll(): Promise<matrixEnjinV1004.Collection[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV1004.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV1004.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV1004.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV1004.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV1004.Collection][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageV500 {
    get(key: bigint): Promise<(v500.Collection | undefined)>
    getAll(): Promise<v500.Collection[]>
    getMany(keys: bigint[]): Promise<(v500.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v500.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v500.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v500.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v500.Collection][]>
}

/**
 *  The collections in existence and their ownership details.
 */
export interface MultiTokensCollectionsStorageV1004 {
    get(key: bigint): Promise<(v1004.Collection | undefined)>
    getAll(): Promise<v1004.Collection[]>
    getMany(keys: bigint[]): Promise<(v1004.Collection | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v1004.Collection][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v1004.Collection][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v1004.Collection][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v1004.Collection][]>
}

export class MultiTokensEthereumAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumAccounts'
    }

    /**
     *  Stores data for an ethereum address
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7cc397680e440faaf2a40fafae4d9fde6957423c8489984029cd2e04818a92f7'
    }

    /**
     *  Stores data for an ethereum address
     */
    get asMatrixEnjinV603(): MultiTokensEthereumAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores data for an ethereum address
 */
export interface MultiTokensEthereumAccountsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.EthereumAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.EthereumAccount[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.EthereumAccount | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.EthereumAccount][]>
}

export class MultiTokensEthereumBalancesStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumBalances'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c6d469a2bb1159ba1b3bfd48909f40e09449e74f982e2dee969f83c6e45d4ea9'
    }

    /**
     *  Holds the ethereum balance for each token
     */
    get asMatrixEnjinV603(): MultiTokensEthereumBalancesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Holds the ethereum balance for each token
 */
export interface MultiTokensEthereumBalancesStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: bigint, key3: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [Uint8Array, bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeys(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[Uint8Array, bigint, bigint][]>
    getPairs(): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairs(key1: Uint8Array, key2: bigint, key3: bigint): Promise<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: bigint, key3: bigint): AsyncIterable<[k: [Uint8Array, bigint, bigint], v: bigint][]>
}

export class MultiTokensEthereumTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'EthereumTokens'
    }

    /**
     *  The token assets from ethereum
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8862d6dd197aaeee063a1d9f6b6879d6d08545ad6f66ce3d357775bbceb00bc9'
    }

    /**
     *  The token assets from ethereum
     */
    get asMatrixEnjinV603(): MultiTokensEthereumTokensStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The token assets from ethereum
 */
export interface MultiTokensEthereumTokensStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixEnjinV603.EthereumToken | undefined)>
    getAll(): Promise<matrixEnjinV603.EthereumToken[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixEnjinV603.EthereumToken | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.EthereumToken][]>
}

export class MultiTokensIdleOperationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'IdleOperations'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'ec6db42c13dba4897e1ce4c4d70fe8bb97c8e9d28f3b74c9fb0c50aa25ec55e1'
    }

    /**
     *  Pending operations to be executed on [`Hooks::on_idle`].
     */
    get asV500(): MultiTokensIdleOperationsStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  Pending operations to be executed on [`Hooks::on_idle`].
 */
export interface MultiTokensIdleOperationsStorageV500 {
    get(): Promise<v500.WeightedIdleOperation[]>
}

export class MultiTokensMigrationStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'MigrationStatus'
    }

    /**
     *  Status of the current multi-block migration
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b774eae9b764e58709b24f1cf13f47feebc5721c1a9d4e0ed22e4d0aaff8a169'
    }

    /**
     *  Status of the current multi-block migration
     */
    get asMatrixEnjinV603(): MultiTokensMigrationStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Status of the current multi-block migration
 */
export interface MultiTokensMigrationStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.MigrationStage>
}

export class MultiTokensMigrationsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Migrations'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '63315d583f765c75d71965bc03cd236f3e328b0d0c36349716dd7e18cb40721d'
    }

    /**
     *  Stores last iterated keys for migrations. Used by multi block migrations
     *  to resume from the last iterated key.
     * 
     *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
     *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
     */
    get asMatrixEnjinV603(): MultiTokensMigrationsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores last iterated keys for migrations. Used by multi block migrations
 *  to resume from the last iterated key.
 * 
 *  Key is the storage prefix, value is the status of migration and last iterated key, if any.
 *  i.e `["MultiTokens", "TokenAccounts"] -> (collection_id, token_id, account_id)`
 */
export interface MultiTokensMigrationsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Migration | undefined)>
    getAll(): Promise<matrixEnjinV603.Migration[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Migration | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Migration][]>
}

export class MultiTokensNativeCollectionIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NativeCollectionIds'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '03ac0b80fdf641bd511733299fc9539a6f79a9c134c3b7d7af44cad8d25fa71a'
    }

    /**
     *  Map of ethereum collection id to the native collection id
     */
    get asMatrixEnjinV603(): MultiTokensNativeCollectionIdsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Map of ethereum collection id to the native collection id
 */
export interface MultiTokensNativeCollectionIdsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: bigint[]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: bigint][]>
    getPairs(key: bigint): Promise<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: bigint][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: bigint][]>
}

export class MultiTokensNextCollectionIdStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'NextCollectionId'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    /**
     *  Sequencer for collectionID generators.
     */
    get asMatrixEnjinV603(): MultiTokensNextCollectionIdStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Sequencer for collectionID generators.
 */
export interface MultiTokensNextCollectionIdStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class MultiTokensPendingCollectionTransfersStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'PendingCollectionTransfers'
    }

    /**
     *  Collections waiting to be transferred
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === '1ae81dc228a0aee115c68cc8e3dc1fae8a27bd060e1562a6b62981f4b1d5ff20'
    }

    /**
     *  Collections waiting to be transferred
     */
    get asMatrixEnjinV1004(): MultiTokensPendingCollectionTransfersStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }
}

/**
 *  Collections waiting to be transferred
 */
export interface MultiTokensPendingCollectionTransfersStorageMatrixEnjinV1004 {
    get(key: bigint): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: bigint[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: Uint8Array][]>
    getPairs(key: bigint): Promise<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: Uint8Array][]>
}

export class MultiTokensTokenAccountsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'TokenAccounts'
    }

    /**
     *  Accounts per token
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '022fd18d40c53146908df260f1461b3e2a5e157129bb9cf34fd0207c0910c0a9'
    }

    /**
     *  Accounts per token
     */
    get asMatrixEnjinV603(): MultiTokensTokenAccountsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Accounts per token
 */
export interface MultiTokensTokenAccountsStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint, key3: Uint8Array): Promise<(matrixEnjinV603.TokenAccount | undefined)>
    getAll(): Promise<matrixEnjinV603.TokenAccount[]>
    getMany(keys: [bigint, bigint, Uint8Array][]): Promise<(matrixEnjinV603.TokenAccount | undefined)[]>
    getKeys(): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint, Uint8Array][]>
    getKeys(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[bigint, bigint, Uint8Array][]>
    getPairs(): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairs(key1: bigint, key2: bigint, key3: Uint8Array): Promise<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint, key3: Uint8Array): AsyncIterable<[k: [bigint, bigint, Uint8Array], v: matrixEnjinV603.TokenAccount][]>
}

export class MultiTokensTokensStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'Tokens'
    }

    /**
     *  Tokens storage
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asMatrixEnjinV603(): MultiTokensTokensStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV500(): boolean {
        return this.getTypeHash() === '4a69c75f61a970937687e30fb5e813537829154fe6e4cd7a99f23a9b880ca004'
    }

    /**
     *  Tokens storage
     */
    get asV500(): MultiTokensTokensStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Tokens storage
     */
    get isV600(): boolean {
        return this.getTypeHash() === '459387852b7c4d57e0769b6472defe27e00a6384a006f2d282c25b921828e149'
    }

    /**
     *  Tokens storage
     */
    get asV600(): MultiTokensTokensStorageV600 {
        assert(this.isV600)
        return this as any
    }
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageMatrixEnjinV603 {
    get(key1: bigint, key2: bigint): Promise<(matrixEnjinV603.Token | undefined)>
    getAll(): Promise<matrixEnjinV603.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(matrixEnjinV603.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: matrixEnjinV603.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV500 {
    get(key1: bigint, key2: bigint): Promise<(v500.Token | undefined)>
    getAll(): Promise<v500.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v500.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v500.Token][]>
}

/**
 *  Tokens storage
 */
export interface MultiTokensTokensStorageV600 {
    get(key1: bigint, key2: bigint): Promise<(v600.Token | undefined)>
    getAll(): Promise<v600.Token[]>
    getMany(keys: [bigint, bigint][]): Promise<(v600.Token | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: v600.Token][]>
}

export class MultiTokensUnmintableTokenIdsStorage extends StorageBase {
    protected getPrefix() {
        return 'MultiTokens'
    }

    protected getName() {
        return 'UnmintableTokenIds'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0d4d9ebe1fd4a49e1a98cae9e4f2da1f4465c6dbdbc2902d364eefd30c55ef87'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get asMatrixEnjinV603(): MultiTokensUnmintableTokenIdsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'c6dd1e5d786cc8c920e7ae514edddfde5ec30f29c3eae8b4826005bc74c2fc57'
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get asMatrixEnjinV1000(): MultiTokensUnmintableTokenIdsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get isV604(): boolean {
        return this.getTypeHash() === '0d4d9ebe1fd4a49e1a98cae9e4f2da1f4465c6dbdbc2902d364eefd30c55ef87'
    }

    /**
     *  These token ids can only be minted by calling `claim_token`
     */
    get asV604(): MultiTokensUnmintableTokenIdsStorageV604 {
        assert(this.isV604)
        return this as any
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'c6dd1e5d786cc8c920e7ae514edddfde5ec30f29c3eae8b4826005bc74c2fc57'
    }

    /**
     *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
     *  base token id, and the value is the highest token index that cannot be minted. All token
     *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
     */
    get asV1000(): MultiTokensUnmintableTokenIdsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface MultiTokensUnmintableTokenIdsStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.RangeInclusive | undefined)>
    getAll(): Promise<matrixEnjinV603.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.RangeInclusive | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.RangeInclusive][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface MultiTokensUnmintableTokenIdsStorageMatrixEnjinV1000 {
    get(key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
}

/**
 *  These token ids can only be minted by calling `claim_token`
 */
export interface MultiTokensUnmintableTokenIdsStorageV604 {
    get(key: bigint): Promise<(v604.RangeInclusive | undefined)>
    getAll(): Promise<v604.RangeInclusive[]>
    getMany(keys: bigint[]): Promise<(v604.RangeInclusive | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: v604.RangeInclusive][]>
    getPairs(key: bigint): Promise<[k: bigint, v: v604.RangeInclusive][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: v604.RangeInclusive][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: v604.RangeInclusive][]>
}

/**
 *  These token ids can only be minted by calling `force_mint`. The second key is an ethereum
 *  base token id, and the value is the highest token index that cannot be minted. All token
 *  indexes start from 1, so effectively it blocks token indexes from 1 to the value.
 */
export interface MultiTokensUnmintableTokenIdsStorageV1000 {
    get(key1: bigint, key2: bigint): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [bigint, bigint][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[bigint, bigint][]>
    getKeys(key1: bigint): Promise<[bigint, bigint][]>
    getKeys(key1: bigint, key2: bigint): Promise<[bigint, bigint][]>
    getKeysPaged(pageSize: number): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint): AsyncIterable<[bigint, bigint][]>
    getKeysPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[bigint, bigint][]>
    getPairs(): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairs(key1: bigint, key2: bigint): Promise<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
    getPairsPaged(pageSize: number, key1: bigint, key2: bigint): AsyncIterable<[k: [bigint, bigint], v: bigint][]>
}

export class MultisigMultisigsStorage extends StorageBase {
    protected getPrefix() {
        return 'Multisig'
    }

    protected getName() {
        return 'Multisigs'
    }

    /**
     *  The set of open multisig operations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'b65d340f044c1216d5b13f831064204fe7a82b1bb66e6bf6cc01b1b5a3f1606a'
    }

    /**
     *  The set of open multisig operations.
     */
    get asMatrixEnjinV603(): MultisigMultisigsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The set of open multisig operations.
 */
export interface MultisigMultisigsStorageMatrixEnjinV603 {
    get(key1: Uint8Array, key2: Uint8Array): Promise<(matrixEnjinV603.Multisig | undefined)>
    getAll(): Promise<matrixEnjinV603.Multisig[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(matrixEnjinV603.Multisig | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key1: Uint8Array, key2: Uint8Array): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairs(key1: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairs(key1: Uint8Array, key2: Uint8Array): Promise<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
    getPairsPaged(pageSize: number, key1: Uint8Array, key2: Uint8Array): AsyncIterable<[k: [Uint8Array, Uint8Array], v: matrixEnjinV603.Multisig][]>
}

export class ParachainInfoParachainIdStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainInfo'
    }

    protected getName() {
        return 'ParachainId'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    get asMatrixEnjinV603(): ParachainInfoParachainIdStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface ParachainInfoParachainIdStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemAnnouncedHrmpMessagesPerCandidateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AnnouncedHrmpMessagesPerCandidate'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
     *  announcing the weight of `on_initialize` and `on_finalize`.
     */
    get asMatrixEnjinV603(): ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of HRMP messages we observed in `on_initialize` and thus used that number for
 *  announcing the weight of `on_initialize` and `on_finalize`.
 */
export interface ParachainSystemAnnouncedHrmpMessagesPerCandidateStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemAuthorizedUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'AuthorizedUpgrade'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asMatrixEnjinV603(): ParachainSystemAuthorizedUpgradeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV500(): ParachainSystemAuthorizedUpgradeStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '901f6f87c9fafe3d3f61c36b45b24a63a90d51ae151f2b4a361d3c5611ffb723'
    }

    /**
     *  The next authorized upgrade, if there is one.
     */
    get asV602(): ParachainSystemAuthorizedUpgradeStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.CodeUpgradeAuthorization | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV500 {
    get(): Promise<(Uint8Array | undefined)>
}

/**
 *  The next authorized upgrade, if there is one.
 */
export interface ParachainSystemAuthorizedUpgradeStorageV602 {
    get(): Promise<(v602.CodeUpgradeAuthorization | undefined)>
}

export class ParachainSystemCustomValidationHeadDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'CustomValidationHeadData'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  A custom head data that should be returned as result of `validate_block`.
     * 
     *  See [`Pallet::set_custom_validation_head_data`] for more information.
     */
    get asMatrixEnjinV603(): ParachainSystemCustomValidationHeadDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  A custom head data that should be returned as result of `validate_block`.
 * 
 *  See [`Pallet::set_custom_validation_head_data`] for more information.
 */
export interface ParachainSystemCustomValidationHeadDataStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemDidSetValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'DidSetValidationCode'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Were the validation data set to notify the relay chain?
     */
    get asMatrixEnjinV603(): ParachainSystemDidSetValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Were the validation data set to notify the relay chain?
 */
export interface ParachainSystemDidSetValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class ParachainSystemHostConfigurationStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HostConfiguration'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '76792d33ff147d490bc5f8e4454e476c4ef71aae7021fd1a44f96974f263af9b'
    }

    /**
     *  The parachain host configuration that was obtained from the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemHostConfigurationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The parachain host configuration that was obtained from the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemHostConfigurationStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4AbridgedHostConfiguration | undefined)>
}

export class ParachainSystemHrmpOutboundMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpOutboundMessages'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0330a7423804895204dc06607d196d45bbec59edfd3f4f38c868daa9e880928c'
    }

    /**
     *  HRMP messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemHrmpOutboundMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  HRMP messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpOutboundMessagesStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.OutboundHrmpMessage[]>
}

export class ParachainSystemHrmpWatermarkStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'HrmpWatermark'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  HRMP watermark that was set in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemHrmpWatermarkStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  HRMP watermark that was set in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemHrmpWatermarkStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemLastDmqMqcHeadStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastDmqMqcHead'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  The last downward message queue chain head we have observed.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemLastDmqMqcHeadStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The last downward message queue chain head we have observed.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastDmqMqcHeadStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemLastHrmpMqcHeadsStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastHrmpMqcHeads'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '26057692e067e44d8eec686a8711f8b87a11679701c3afa133f7b9da8f327999'
    }

    /**
     *  The message queue chain heads we have observed per each channel incoming channel.
     * 
     *  This value is loaded before and saved after processing inbound downward messages carried
     *  by the system inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemLastHrmpMqcHeadsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The message queue chain heads we have observed per each channel incoming channel.
 * 
 *  This value is loaded before and saved after processing inbound downward messages carried
 *  by the system inherent.
 */
export interface ParachainSystemLastHrmpMqcHeadsStorageMatrixEnjinV603 {
    get(): Promise<[number, Uint8Array][]>
}

export class ParachainSystemLastRelayChainBlockNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'LastRelayChainBlockNumber'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The relay chain block number associated with the last parachain block.
     */
    get asMatrixEnjinV603(): ParachainSystemLastRelayChainBlockNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The relay chain block number associated with the last parachain block.
 */
export interface ParachainSystemLastRelayChainBlockNumberStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemNewValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'NewValidationCode'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9d37db61fb40fc6c377391f52a7b349395407634d45b47a8943ab5ccf47e31e4'
    }

    /**
     *  Validation code that is set by the parachain and is to be communicated to collator and
     *  consequently the relay-chain.
     * 
     *  This will be cleared in `on_initialize` of each new block if no other pallet already set
     *  the value.
     */
    get asMatrixEnjinV603(): ParachainSystemNewValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Validation code that is set by the parachain and is to be communicated to collator and
 *  consequently the relay-chain.
 * 
 *  This will be cleared in `on_initialize` of each new block if no other pallet already set
 *  the value.
 */
export interface ParachainSystemNewValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class ParachainSystemPendingUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingUpwardMessages'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that are still pending and not yet send to the relay chain.
     */
    get asMatrixEnjinV603(): ParachainSystemPendingUpwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Upward messages that are still pending and not yet send to the relay chain.
 */
export interface ParachainSystemPendingUpwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemPendingValidationCodeStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'PendingValidationCode'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8199405308c9981e32f632f64a8758ba69af0e625da26ff6d6670b81cc1f1647'
    }

    /**
     *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
     * 
     *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
     *  which will result the next block process with the new validation code. This concludes the upgrade process.
     * 
     *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
     */
    get asMatrixEnjinV603(): ParachainSystemPendingValidationCodeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  In case of a scheduled upgrade, this storage field contains the validation code to be applied.
 * 
 *  As soon as the relay chain gives us the go-ahead signal, we will overwrite the [`:code`][well_known_keys::CODE]
 *  which will result the next block process with the new validation code. This concludes the upgrade process.
 * 
 *  [well_known_keys::CODE]: sp_core::storage::well_known_keys::CODE
 */
export interface ParachainSystemPendingValidationCodeStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class ParachainSystemProcessedDownwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ProcessedDownwardMessages'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Number of downward messages processed in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemProcessedDownwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Number of downward messages processed in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemProcessedDownwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class ParachainSystemRelayStateProofStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelayStateProof'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '38f79414b788123884c7cc1e6c6ca89331d3264f4bdcf6dff4501d6b20966908'
    }

    /**
     *  The state proof for the last relay parent block.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemRelayStateProofStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The state proof for the last relay parent block.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelayStateProofStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.StorageProof | undefined)>
}

export class ParachainSystemRelevantMessagingStateStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'RelevantMessagingState'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asMatrixEnjinV603(): ParachainSystemRelevantMessagingStateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '24e0311e0ec9634d6acff6e06aa83b4bd4c57957b8f7525bf0dd22f0a73d7b09'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV500(): ParachainSystemRelevantMessagingStateStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get isV604(): boolean {
        return this.getTypeHash() === '2e08e09c21eea176bfd53411112b867efc3c3d71f51431e11288adfb3e3ede6f'
    }

    /**
     *  The snapshot of some state related to messaging relevant to the current parachain as per
     *  the relay parent.
     * 
     *  This field is meant to be updated each block with the validation data inherent. Therefore,
     *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
     * 
     *  This data is also absent from the genesis.
     */
    get asV604(): ParachainSystemRelevantMessagingStateStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV500 {
    get(): Promise<(v500.MessagingStateSnapshot | undefined)>
}

/**
 *  The snapshot of some state related to messaging relevant to the current parachain as per
 *  the relay parent.
 * 
 *  This field is meant to be updated each block with the validation data inherent. Therefore,
 *  before processing of the inherent, e.g. in `on_initialize` this data may be stale.
 * 
 *  This data is also absent from the genesis.
 */
export interface ParachainSystemRelevantMessagingStateStorageV604 {
    get(): Promise<(v604.MessagingStateSnapshot | undefined)>
}

export class ParachainSystemReservedDmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedDmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing DMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixEnjinV603(): ParachainSystemReservedDmpWeightOverrideStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing DMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedDmpWeightOverrideStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Weight | undefined)>
}

export class ParachainSystemReservedXcmpWeightOverrideStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ReservedXcmpWeightOverride'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'dc2423472ad10592a09d90b772d976445ca94322bfee920a1f8332063411718c'
    }

    /**
     *  The weight we reserve at the beginning of the block for processing XCMP messages. This
     *  overrides the amount set in the Config trait.
     */
    get asMatrixEnjinV603(): ParachainSystemReservedXcmpWeightOverrideStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The weight we reserve at the beginning of the block for processing XCMP messages. This
 *  overrides the amount set in the Config trait.
 */
export interface ParachainSystemReservedXcmpWeightOverrideStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Weight | undefined)>
}

export class ParachainSystemUpgradeRestrictionSignalStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpgradeRestrictionSignal'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2236db14165f1386be95c2e72a22524bdd6b93f6d64e4b0b39d54e03f1f1bee2'
    }

    /**
     *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
     *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
     *  candidate will be invalid.
     * 
     *  This storage item is a mirror of the corresponding value for the current parachain from the
     *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
     *  set after the inherent.
     */
    get asMatrixEnjinV603(): ParachainSystemUpgradeRestrictionSignalStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  An option which indicates if the relay-chain restricts signalling a validation code upgrade.
 *  In other words, if this is `Some` and [`NewValidationCode`] is `Some` then the produced
 *  candidate will be invalid.
 * 
 *  This storage item is a mirror of the corresponding value for the current parachain from the
 *  relay-chain. This value is ephemeral which means it doesn't hit the storage. This value is
 *  set after the inherent.
 */
export interface ParachainSystemUpgradeRestrictionSignalStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4UpgradeRestriction | undefined)>
}

export class ParachainSystemUpwardMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'UpwardMessages'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '69b64a98b95b35e85f746389396240a8c70e1dca686229dc8d8a0812c030037a'
    }

    /**
     *  Upward messages that were sent in a block.
     * 
     *  This will be cleared in `on_initialize` of each new block.
     */
    get asMatrixEnjinV603(): ParachainSystemUpwardMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Upward messages that were sent in a block.
 * 
 *  This will be cleared in `on_initialize` of each new block.
 */
export interface ParachainSystemUpwardMessagesStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class ParachainSystemValidationDataStorage extends StorageBase {
    protected getPrefix() {
        return 'ParachainSystem'
    }

    protected getName() {
        return 'ValidationData'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'fb37759067a991bce599d3fbe39ee38b99d63716a96357c3a39bf04c66e2579d'
    }

    /**
     *  The [`PersistedValidationData`] set for this block.
     *  This value is expected to be set only once per block and it's never stored
     *  in the trie.
     */
    get asMatrixEnjinV603(): ParachainSystemValidationDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The [`PersistedValidationData`] set for this block.
 *  This value is expected to be set only once per block and it's never stored
 *  in the trie.
 */
export interface ParachainSystemValidationDataStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.V4PersistedValidationData | undefined)>
}

export class PolkadotXcmAssetTrapsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'AssetTraps'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '25f0d63900988134e6767c7fe398885c0448fd3bd7a0d8ff90cf6b33a482cebd'
    }

    /**
     *  The existing asset traps.
     * 
     *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
     *  times this pair has been trapped (usually just 1 if it exists at all).
     */
    get asMatrixEnjinV603(): PolkadotXcmAssetTrapsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The existing asset traps.
 * 
 *  Key is the blake2 256 hash of (origin, versioned `MultiAssets`) pair. Value is the number of
 *  times this pair has been trapped (usually just 1 if it exists at all).
 */
export interface PolkadotXcmAssetTrapsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<number>
    getAll(): Promise<number[]>
    getMany(keys: Uint8Array[]): Promise<number[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: number][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: number][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: number][]>
}

export class PolkadotXcmCurrentMigrationStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'CurrentMigration'
    }

    /**
     *  The current migration's stage, if any.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '59e487b7d451459fc1f76b51279b7db0b09ff9d3906a0cafa428954a73be0c50'
    }

    /**
     *  The current migration's stage, if any.
     */
    get asMatrixEnjinV603(): PolkadotXcmCurrentMigrationStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current migration's stage, if any.
 */
export interface PolkadotXcmCurrentMigrationStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.VersionMigrationStage | undefined)>
}

export class PolkadotXcmLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'LockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '83620d989e5dd77ea5cdf77e62586d64ad0b7ace0ba3b24d7f207643583d77cc'
    }

    /**
     *  Fungible assets which we know are locked on this chain.
     */
    get asMatrixEnjinV603(): PolkadotXcmLockedFungiblesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on this chain.
 */
export interface PolkadotXcmLockedFungiblesStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)>
    getAll(): Promise<[bigint, matrixEnjinV603.VersionedMultiLocation][][]>
    getMany(keys: Uint8Array[]): Promise<([bigint, matrixEnjinV603.VersionedMultiLocation][] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [bigint, matrixEnjinV603.VersionedMultiLocation][]][]>
}

export class PolkadotXcmQueriesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'Queries'
    }

    /**
     *  The ongoing queries.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c33614a63099009a42799d8206979c61fd1a7b5d142259a57bdcbc726105e8f1'
    }

    /**
     *  The ongoing queries.
     */
    get asMatrixEnjinV603(): PolkadotXcmQueriesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The ongoing queries.
 */
export interface PolkadotXcmQueriesStorageMatrixEnjinV603 {
    get(key: bigint): Promise<(matrixEnjinV603.QueryStatus | undefined)>
    getAll(): Promise<matrixEnjinV603.QueryStatus[]>
    getMany(keys: bigint[]): Promise<(matrixEnjinV603.QueryStatus | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairs(key: bigint): Promise<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: matrixEnjinV603.QueryStatus][]>
}

export class PolkadotXcmQueryCounterStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'QueryCounter'
    }

    /**
     *  The latest available query index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The latest available query index.
     */
    get asMatrixEnjinV603(): PolkadotXcmQueryCounterStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The latest available query index.
 */
export interface PolkadotXcmQueryCounterStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class PolkadotXcmRemoteLockedFungiblesStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'RemoteLockedFungibles'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asMatrixEnjinV603(): PolkadotXcmRemoteLockedFungiblesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '32350375a3f683ddfbcb5dbc0bc4773d1d5aa9c2f1f2e358dced4492be76a541'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV500(): PolkadotXcmRemoteLockedFungiblesStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get isV604(): boolean {
        return this.getTypeHash() === '1149837e63a49b75805a12d31afe81a1d8d4392ee13be03404f08d002d1c9928'
    }

    /**
     *  Fungible assets which we know are locked on a remote chain.
     */
    get asV604(): PolkadotXcmRemoteLockedFungiblesStorageV604 {
        assert(this.isV604)
        return this as any
    }
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageMatrixEnjinV603 {
    get(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<matrixEnjinV603.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, matrixEnjinV603.VersionedAssetId][]): Promise<(matrixEnjinV603.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[number, Uint8Array, matrixEnjinV603.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): Promise<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: matrixEnjinV603.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, matrixEnjinV603.VersionedAssetId], v: matrixEnjinV603.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV500 {
    get(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<(v500.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v500.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v500.VersionedAssetId][]): Promise<(v500.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): AsyncIterable<[number, Uint8Array, v500.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): Promise<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v500.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v500.VersionedAssetId], v: v500.RemoteLockedFungibleRecord][]>
}

/**
 *  Fungible assets which we know are locked on a remote chain.
 */
export interface PolkadotXcmRemoteLockedFungiblesStorageV604 {
    get(key1: number, key2: Uint8Array, key3: v604.VersionedAssetId): Promise<(v604.RemoteLockedFungibleRecord | undefined)>
    getAll(): Promise<v604.RemoteLockedFungibleRecord[]>
    getMany(keys: [number, Uint8Array, v604.VersionedAssetId][]): Promise<(v604.RemoteLockedFungibleRecord | undefined)[]>
    getKeys(): Promise<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeys(key1: number): Promise<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array): Promise<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeys(key1: number, key2: Uint8Array, key3: v604.VersionedAssetId): Promise<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[number, Uint8Array, v604.VersionedAssetId][]>
    getKeysPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v604.VersionedAssetId): AsyncIterable<[number, Uint8Array, v604.VersionedAssetId][]>
    getPairs(): Promise<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairs(key1: number): Promise<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array): Promise<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairs(key1: number, key2: Uint8Array, key3: v604.VersionedAssetId): Promise<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array): AsyncIterable<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
    getPairsPaged(pageSize: number, key1: number, key2: Uint8Array, key3: v604.VersionedAssetId): AsyncIterable<[k: [number, Uint8Array, v604.VersionedAssetId], v: v604.RemoteLockedFungibleRecord][]>
}

export class PolkadotXcmSafeXcmVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SafeXcmVersion'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Default version to encode XCM when latest version of destination is unknown. If `None`,
     *  then the destinations whose XCM version is unknown are considered unreachable.
     */
    get asMatrixEnjinV603(): PolkadotXcmSafeXcmVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Default version to encode XCM when latest version of destination is unknown. If `None`,
 *  then the destinations whose XCM version is unknown are considered unreachable.
 */
export interface PolkadotXcmSafeXcmVersionStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class PolkadotXcmSupportedVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'SupportedVersion'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0e2aec9a2da85831b6c7f06cf2ebb00fa3489433254df2ecc1d89a9f142d7859'
    }

    /**
     *  The Latest versions that we know various locations support.
     */
    get asMatrixEnjinV603(): PolkadotXcmSupportedVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The Latest versions that we know various locations support.
 */
export interface PolkadotXcmSupportedVersionStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(number | undefined)>
    getAll(): Promise<number[]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(number | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: number][]>
}

export class PolkadotXcmVersionDiscoveryQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionDiscoveryQueue'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1861bd13354557dc519a64b8d53a95cd897ff993484c969af972f15ebe14ed22'
    }

    /**
     *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
     *  the `u32` counter is the number of times that a send to the destination has been attempted,
     *  which is used as a prioritization.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionDiscoveryQueueStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Destinations whose latest XCM version we would like to know. Duplicates not allowed, and
 *  the `u32` counter is the number of times that a send to the destination has been attempted,
 *  which is used as a prioritization.
 */
export interface PolkadotXcmVersionDiscoveryQueueStorageMatrixEnjinV603 {
    get(): Promise<[matrixEnjinV603.VersionedMultiLocation, number][]>
}

export class PolkadotXcmVersionNotifiersStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifiers'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2e570d6a39a9644e69bdccf883c25d1723f752493a252d530fc3667560486716'
    }

    /**
     *  All locations that we have requested version notifications from.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionNotifiersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  All locations that we have requested version notifications from.
 */
export interface PolkadotXcmVersionNotifiersStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<(bigint | undefined)>
    getAll(): Promise<bigint[]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<(bigint | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: bigint][]>
}

export class PolkadotXcmVersionNotifyTargetsStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'VersionNotifyTargets'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '080bdd3fd57ea1cba05e6b46642e4860965e8f150a64cc9d5bafc6eebd6207fb'
    }

    /**
     *  The target locations that are subscribed to our version changes, as well as the most recent
     *  of our versions we informed them of.
     */
    get asMatrixEnjinV603(): PolkadotXcmVersionNotifyTargetsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The target locations that are subscribed to our version changes, as well as the most recent
 *  of our versions we informed them of.
 */
export interface PolkadotXcmVersionNotifyTargetsStorageMatrixEnjinV603 {
    get(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)>
    getAll(): Promise<[bigint, matrixEnjinV603.Weight, number][]>
    getMany(keys: [number, matrixEnjinV603.VersionedMultiLocation][]): Promise<([bigint, matrixEnjinV603.Weight, number] | undefined)[]>
    getKeys(): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeys(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getKeysPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[number, matrixEnjinV603.VersionedMultiLocation][]>
    getPairs(): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairs(key1: number): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairs(key1: number, key2: matrixEnjinV603.VersionedMultiLocation): Promise<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
    getPairsPaged(pageSize: number, key1: number, key2: matrixEnjinV603.VersionedMultiLocation): AsyncIterable<[k: [number, matrixEnjinV603.VersionedMultiLocation], v: [bigint, matrixEnjinV603.Weight, number]][]>
}

export class PolkadotXcmXcmExecutionSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'PolkadotXcm'
    }

    protected getName() {
        return 'XcmExecutionSuspended'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Global suspension state of the XCM executor.
     */
    get asMatrixEnjinV603(): PolkadotXcmXcmExecutionSuspendedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Global suspension state of the XCM executor.
 */
export interface PolkadotXcmXcmExecutionSuspendedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class PoolsPoolsStorage extends StorageBase {
    protected getPrefix() {
        return 'Pools'
    }

    protected getName() {
        return 'Pools'
    }

    /**
     *  Information about the pools
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'c34074cd3c393bbbf499a52d01b17aab7f4b9ef8d114a6f1153dba4c76f48632'
    }

    /**
     *  Information about the pools
     */
    get asMatrixEnjinV603(): PoolsPoolsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Information about the pools
 */
export interface PoolsPoolsStorageMatrixEnjinV603 {
    get(): Promise<[Uint8Array, matrixEnjinV603.Pool][]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asMatrixEnjinV603(): PreimagePreimageForStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface PreimagePreimageForStorageMatrixEnjinV603 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asMatrixEnjinV603(): PreimageStatusForStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.RequestStatus | undefined)>
    getAll(): Promise<matrixEnjinV603.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.RequestStatus][]>
}

export class SchedulerAgendaStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Agenda'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6fe031a319b530f979b7d99af729c9762ca4fc70785d6631d8088992a71ae701'
    }

    /**
     *  Items to be executed, indexed by the block number that they should be executed on.
     */
    get asMatrixEnjinV603(): SchedulerAgendaStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Items to be executed, indexed by the block number that they should be executed on.
 */
export interface SchedulerAgendaStorageMatrixEnjinV603 {
    get(key: number): Promise<(matrixEnjinV603.Scheduled | undefined)[]>
    getAll(): Promise<(matrixEnjinV603.Scheduled | undefined)[][]>
    getMany(keys: number[]): Promise<(matrixEnjinV603.Scheduled | undefined)[][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairs(key: number): Promise<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: (matrixEnjinV603.Scheduled | undefined)[]][]>
}

export class SchedulerIncompleteSinceStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'IncompleteSince'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    get asMatrixEnjinV603(): SchedulerIncompleteSinceStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface SchedulerIncompleteSinceStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SchedulerLookupStorage extends StorageBase {
    protected getPrefix() {
        return 'Scheduler'
    }

    protected getName() {
        return 'Lookup'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2072b6dc95511eafaaa8d3c8e8abab0becedb083c12e24f0be979006686149cd'
    }

    /**
     *  Lookup from a name to the block number and index of the task.
     * 
     *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
     *  identities.
     */
    get asMatrixEnjinV603(): SchedulerLookupStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Lookup from a name to the block number and index of the task.
 * 
 *  For v3 -> v4 the previously unbounded identities are Blake2-256 hashed to form the v4
 *  identities.
 */
export interface SchedulerLookupStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<([number, number] | undefined)>
    getAll(): Promise<[number, number][]>
    getMany(keys: Uint8Array[]): Promise<([number, number] | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number]][]>
}

export class SessionCurrentIndexStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'CurrentIndex'
    }

    /**
     *  Current index of the session.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Current index of the session.
     */
    get asMatrixEnjinV603(): SessionCurrentIndexStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Current index of the session.
 */
export interface SessionCurrentIndexStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SessionDisabledValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'DisabledValidators'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Indices of disabled validators.
     * 
     *  The vec is always kept sorted so that we can find whether a given validator is
     *  disabled using binary search. It gets cleared when `on_session_ending` returns
     *  a new set of identities.
     */
    get asMatrixEnjinV603(): SessionDisabledValidatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Indices of disabled validators.
 * 
 *  The vec is always kept sorted so that we can find whether a given validator is
 *  disabled using binary search. It gets cleared when `on_session_ending` returns
 *  a new set of identities.
 */
export interface SessionDisabledValidatorsStorageMatrixEnjinV603 {
    get(): Promise<number[]>
}

export class SessionKeyOwnerStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'KeyOwner'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '20cf09ea865a34d19d79cca4e3df7a5a719547bdf984f5ab8eb811d55da822e5'
    }

    /**
     *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
     */
    get asMatrixEnjinV603(): SessionKeyOwnerStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The owner of a key. The key is the `KeyTypeId` + the encoded key.
 */
export interface SessionKeyOwnerStorageMatrixEnjinV603 {
    get(key: [Uint8Array, Uint8Array]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, Uint8Array][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, Uint8Array][]>
    getKeys(key: [Uint8Array, Uint8Array]): Promise<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, Uint8Array][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[Uint8Array, Uint8Array][]>
    getPairs(): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairs(key: [Uint8Array, Uint8Array]): Promise<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, Uint8Array]): AsyncIterable<[k: [Uint8Array, Uint8Array], v: Uint8Array][]>
}

export class SessionNextKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'NextKeys'
    }

    /**
     *  The next session keys for a validator.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2f670cd584e15d58095cb717f2ec5413369ec61a1d09b68212a36ac0523e456b'
    }

    /**
     *  The next session keys for a validator.
     */
    get asMatrixEnjinV603(): SessionNextKeysStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The next session keys for a validator.
 */
export interface SessionNextKeysStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.SessionKeys | undefined)>
    getAll(): Promise<matrixEnjinV603.SessionKeys[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.SessionKeys | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.SessionKeys][]>
}

export class SessionQueuedChangedStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedChanged'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if the underlying economic identities or weighting behind the validators
     *  has changed in the queued validator set.
     */
    get asMatrixEnjinV603(): SessionQueuedChangedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if the underlying economic identities or weighting behind the validators
 *  has changed in the queued validator set.
 */
export interface SessionQueuedChangedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class SessionQueuedKeysStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'QueuedKeys'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '932bfec933e0f3e31ccbf8c6fe92f26e726dddd47f6a44fd88e96d56054aa98a'
    }

    /**
     *  The queued keys for the next session. When the next session begins, these keys
     *  will be used to determine the validator's session keys.
     */
    get asMatrixEnjinV603(): SessionQueuedKeysStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The queued keys for the next session. When the next session begins, these keys
 *  will be used to determine the validator's session keys.
 */
export interface SessionQueuedKeysStorageMatrixEnjinV603 {
    get(): Promise<[Uint8Array, matrixEnjinV603.SessionKeys][]>
}

export class SessionValidatorsStorage extends StorageBase {
    protected getPrefix() {
        return 'Session'
    }

    protected getName() {
        return 'Validators'
    }

    /**
     *  The current set of validators.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current set of validators.
     */
    get asMatrixEnjinV603(): SessionValidatorsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current set of validators.
 */
export interface SessionValidatorsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class SudoKeyStorage extends StorageBase {
    protected getPrefix() {
        return 'Sudo'
    }

    protected getName() {
        return 'Key'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The `AccountId` of the sudo key.
     */
    get asV500(): SudoKeyStorageV500 {
        assert(this.isV500)
        return this as any
    }
}

/**
 *  The `AccountId` of the sudo key.
 */
export interface SudoKeyStorageV500 {
    get(): Promise<(Uint8Array | undefined)>
}

export class SystemAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asMatrixEnjinV603(): SystemAccountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '1ddc7ade926221442c388ee4405a71c9428e548fab037445aaf4b3a78f4735c1'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV500(): SystemAccountStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  The full account information for a particular account ID.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'd6b7a816e0cf6dc8f60cb2bd55c5c5ae7ad928521a6e98aafbe6e954f5c54878'
    }

    /**
     *  The full account information for a particular account ID.
     */
    get asV602(): SystemAccountStorageV602 {
        assert(this.isV602)
        return this as any
    }
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<matrixEnjinV603.AccountInfo>
    getAll(): Promise<matrixEnjinV603.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<matrixEnjinV603.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV500 {
    get(key: Uint8Array): Promise<v500.AccountInfo>
    getAll(): Promise<v500.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v500.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.AccountInfo][]>
}

/**
 *  The full account information for a particular account ID.
 */
export interface SystemAccountStorageV602 {
    get(key: Uint8Array): Promise<v602.AccountInfo>
    getAll(): Promise<v602.AccountInfo[]>
    getMany(keys: Uint8Array[]): Promise<v602.AccountInfo[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.AccountInfo][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.AccountInfo][]>
}

export class SystemAllExtrinsicsLenStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'AllExtrinsicsLen'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total length (in bytes) for all extrinsics put together, for the current block.
     */
    get asMatrixEnjinV603(): SystemAllExtrinsicsLenStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Total length (in bytes) for all extrinsics put together, for the current block.
 */
export interface SystemAllExtrinsicsLenStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SystemBlockHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockHash'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '06f5703796027f4b198d4ffd50b721273430d8ff663660646793873168f9df17'
    }

    /**
     *  Map of block numbers to block hashes.
     */
    get asMatrixEnjinV603(): SystemBlockHashStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Map of block numbers to block hashes.
 */
export interface SystemBlockHashStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemBlockWeightStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'BlockWeight'
    }

    /**
     *  The current weight for the block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b5ecb31f1f780ce8b20535384ce7b3159da495c9f1cbf13a2f253ccb02ae175'
    }

    /**
     *  The current weight for the block.
     */
    get asMatrixEnjinV603(): SystemBlockWeightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current weight for the block.
 */
export interface SystemBlockWeightStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.PerDispatchClass>
}

export class SystemDigestStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Digest'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '6edb48fd53810bda6cc1015d69e4aacd63966970836398edb4a47cec0bf3fa85'
    }

    /**
     *  Digest of the current block, also part of the block header.
     */
    get asMatrixEnjinV603(): SystemDigestStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Digest of the current block, also part of the block header.
 */
export interface SystemDigestStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Digest>
}

export class SystemEventCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventCount'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The number of events in the `Events<T>` list.
     */
    get asMatrixEnjinV603(): SystemEventCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of events in the `Events<T>` list.
 */
export interface SystemEventCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SystemEventTopicsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'EventTopics'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'd5ef37ba3daec264a9dcba5a29bf5b2ff23eb80b912936f924f44a8db557c58d'
    }

    /**
     *  Mapping between a topic (represented by T::Hash) and a vector of indexes
     *  of events in the `<Events<T>>` list.
     * 
     *  All topic vectors have deterministic storage locations depending on the topic. This
     *  allows light-clients to leverage the changes trie storage tracking mechanism and
     *  in case of changes fetch the list of events of interest.
     * 
     *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
     *  the `EventIndex` then in case if the topic has the same contents on the next block
     *  no notification will be triggered thus the event might be lost.
     */
    get asMatrixEnjinV603(): SystemEventTopicsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Mapping between a topic (represented by T::Hash) and a vector of indexes
 *  of events in the `<Events<T>>` list.
 * 
 *  All topic vectors have deterministic storage locations depending on the topic. This
 *  allows light-clients to leverage the changes trie storage tracking mechanism and
 *  in case of changes fetch the list of events of interest.
 * 
 *  The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
 *  the `EventIndex` then in case if the topic has the same contents on the next block
 *  no notification will be triggered thus the event might be lost.
 */
export interface SystemEventTopicsStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<[number, number][]>
    getAll(): Promise<[number, number][][]>
    getMany(keys: Uint8Array[]): Promise<[number, number][][]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: [number, number][]][]>
}

export class SystemEventsStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Events'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a57dd21e7aeaa4b8e9f0e55f1f48c7e44e142ba9a66bb9c49a3cdf88a9cc9c46'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asMatrixEnjinV603(): SystemEventsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === 'ccb08bdde54ca78439622595397d717ed012b142e923d7ceaede19fb7fe0b412'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asMatrixEnjinV1000(): SystemEventsStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === '63eed1b8c6a3171ede25403c0474ea20a8e92902c8968abf909d3464d2f86bb3'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asMatrixEnjinV1004(): SystemEventsStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV500(): boolean {
        return this.getTypeHash() === 'c2bf473ffa588f7b22c332d1777f77f07e6c74d8e4e536160007c88d1615f6f6'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV500(): SystemEventsStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV600(): boolean {
        return this.getTypeHash() === '492eab1b45057659ac7e26547dd44eb8c72ec589d897ca0d65f3e57f6618a78e'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV600(): SystemEventsStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV601(): boolean {
        return this.getTypeHash() === '9a12903bc922139b71e2eb8cb38b73727f3896ca3de80e5d1bdd0519dd921f9b'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV601(): SystemEventsStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV602(): boolean {
        return this.getTypeHash() === 'e1ee78d27d2150e8a2f93ff7bf8eecec264eabf963316e9e980901ba7fab01b2'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV602(): SystemEventsStorageV602 {
        assert(this.isV602)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV604(): boolean {
        return this.getTypeHash() === 'a57dd21e7aeaa4b8e9f0e55f1f48c7e44e142ba9a66bb9c49a3cdf88a9cc9c46'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV604(): SystemEventsStorageV604 {
        assert(this.isV604)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'ec3c3167a0241988192f35df6a83cda2f8672188c594ea3647ff6c8244d0dd17'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1000(): SystemEventsStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get isV1004(): boolean {
        return this.getTypeHash() === '0861f9e0b39c155f23d8c7abb375289d8bda537f1940becbdd79cf9f34a3da24'
    }

    /**
     *  Events deposited for the current block.
     * 
     *  NOTE: The item is unbound and should therefore never be read on chain.
     *  It could otherwise inflate the PoV size of a block.
     * 
     *  Events have a large in-memory size. Box the events to not go out-of-memory
     *  just in case someone still reads them from within the runtime.
     */
    get asV1004(): SystemEventsStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageMatrixEnjinV1000 {
    get(): Promise<matrixEnjinV1000.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageMatrixEnjinV1004 {
    get(): Promise<matrixEnjinV1004.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV500 {
    get(): Promise<v500.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV600 {
    get(): Promise<v600.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV601 {
    get(): Promise<v601.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV602 {
    get(): Promise<v602.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV604 {
    get(): Promise<v604.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1000 {
    get(): Promise<v1000.EventRecord[]>
}

/**
 *  Events deposited for the current block.
 * 
 *  NOTE: The item is unbound and should therefore never be read on chain.
 *  It could otherwise inflate the PoV size of a block.
 * 
 *  Events have a large in-memory size. Box the events to not go out-of-memory
 *  just in case someone still reads them from within the runtime.
 */
export interface SystemEventsStorageV1004 {
    get(): Promise<v1004.EventRecord[]>
}

export class SystemExecutionPhaseStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExecutionPhase'
    }

    /**
     *  The execution phase of the block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0ad1e323fa21971add5b3b0cc709a6e02dc7c64db7d344c1a67ec0227969ae75'
    }

    /**
     *  The execution phase of the block.
     */
    get asMatrixEnjinV603(): SystemExecutionPhaseStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The execution phase of the block.
 */
export interface SystemExecutionPhaseStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.Phase | undefined)>
}

export class SystemExtrinsicCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicCount'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'a926ad48d1a07d1162c5fdb99f3f6cef39c7c5a115a92ff9ccf0357bae4bf2ed'
    }

    /**
     *  Total extrinsics count for the current block.
     */
    get asMatrixEnjinV603(): SystemExtrinsicCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Total extrinsics count for the current block.
 */
export interface SystemExtrinsicCountStorageMatrixEnjinV603 {
    get(): Promise<(number | undefined)>
}

export class SystemExtrinsicDataStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ExtrinsicData'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Extrinsics data for the current block (maps an extrinsic's index to its data).
     */
    get asMatrixEnjinV603(): SystemExtrinsicDataStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export interface SystemExtrinsicDataStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}

export class SystemLastRuntimeUpgradeStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'LastRuntimeUpgrade'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'e03e445e7a7694163bede3a772a8a347abf7a3a00424fbafec75f819d6173a17'
    }

    /**
     *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
     */
    get asMatrixEnjinV603(): SystemLastRuntimeUpgradeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export interface SystemLastRuntimeUpgradeStorageMatrixEnjinV603 {
    get(): Promise<(matrixEnjinV603.LastRuntimeUpgradeInfo | undefined)>
}

export class SystemNumberStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'Number'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  The current block number being processed. Set by `execute_block`.
     */
    get asMatrixEnjinV603(): SystemNumberStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current block number being processed. Set by `execute_block`.
 */
export interface SystemNumberStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class SystemParentHashStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'ParentHash'
    }

    /**
     *  Hash of the previous block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '146c0d1dce070e2a43f497c479248a882f4ed48937203ea336e85dcf2fa0ec6c'
    }

    /**
     *  Hash of the previous block.
     */
    get asMatrixEnjinV603(): SystemParentHashStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Hash of the previous block.
 */
export interface SystemParentHashStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array>
}

export class SystemUpgradedToTripleRefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToTripleRefCount'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
     *  (default) if not.
     */
    get asMatrixEnjinV603(): SystemUpgradedToTripleRefCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 *  (default) if not.
 */
export interface SystemUpgradedToTripleRefCountStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class SystemUpgradedToU32RefCountStorage extends StorageBase {
    protected getPrefix() {
        return 'System'
    }

    protected getName() {
        return 'UpgradedToU32RefCount'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
     */
    get asMatrixEnjinV603(): SystemUpgradedToU32RefCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export interface SystemUpgradedToU32RefCountStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class TechnicalCommitteeMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    get asMatrixEnjinV603(): TechnicalCommitteeMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface TechnicalCommitteeMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteePrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    get asMatrixEnjinV603(): TechnicalCommitteePrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface TechnicalCommitteePrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TechnicalCommitteeProposalCountStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalCount'
    }

    /**
     *  Proposals so far.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     *  Proposals so far.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Proposals so far.
 */
export interface TechnicalCommitteeProposalCountStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class TechnicalCommitteeProposalOfStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'ProposalOf'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalOfStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1000(): boolean {
        return this.getTypeHash() === '8c127c77fbad28fe03cea74e3dc13593f4abc6334ac06ebee57fced2ba801c79'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1000(): TechnicalCommitteeProposalOfStorageMatrixEnjinV1000 {
        assert(this.isMatrixEnjinV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1003(): boolean {
        return this.getTypeHash() === '7e38c81de9998b7ee5c1f6e2e1600141fe0b26a1eaa70c1e65ce1f8a2af3a057'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1003(): TechnicalCommitteeProposalOfStorageMatrixEnjinV1003 {
        assert(this.isMatrixEnjinV1003)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isMatrixEnjinV1004(): boolean {
        return this.getTypeHash() === '70cfd1bde559f52b5196f52f1bf511f746603865cbf1f6d5d98b23fd21c09087'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asMatrixEnjinV1004(): TechnicalCommitteeProposalOfStorageMatrixEnjinV1004 {
        assert(this.isMatrixEnjinV1004)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV500(): boolean {
        return this.getTypeHash() === '6cde8e9630d410c635d38d4e132dcdeddc5fd40211867012e22267dd19cd2cf1'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV500(): TechnicalCommitteeProposalOfStorageV500 {
        assert(this.isV500)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV600(): boolean {
        return this.getTypeHash() === 'd0a200fac2f9993d848c3a7287da92f026ee7ee2a194fed9e6f2d9eb76c9ab57'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV600(): TechnicalCommitteeProposalOfStorageV600 {
        assert(this.isV600)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV601(): boolean {
        return this.getTypeHash() === 'cc79ccb140126aa785dace5b0d26db51b8387db5f6cbb6917faa59383367df1d'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV601(): TechnicalCommitteeProposalOfStorageV601 {
        assert(this.isV601)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV602(): boolean {
        return this.getTypeHash() === '89559d3fb6f541bdf5075d1f4863bb5ac0e0acfed89282c2e8067b09a3b99f23'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV602(): TechnicalCommitteeProposalOfStorageV602 {
        assert(this.isV602)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV604(): boolean {
        return this.getTypeHash() === '0680d52b00893a9eee04d808550083d1825242f42b231ff4d1db8b8e4c2be611'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV604(): TechnicalCommitteeProposalOfStorageV604 {
        assert(this.isV604)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1000(): boolean {
        return this.getTypeHash() === 'dfe5df22cb4c381943ebfa829caeea5c49e6730cde220ed8deff3a17d702aa5a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1000(): TechnicalCommitteeProposalOfStorageV1000 {
        assert(this.isV1000)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1003(): boolean {
        return this.getTypeHash() === 'c012e19996ab8837de134875f9a1ab2da00d981db255bf3a3508f22b7bde216a'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1003(): TechnicalCommitteeProposalOfStorageV1003 {
        assert(this.isV1003)
        return this as any
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get isV1004(): boolean {
        return this.getTypeHash() === '69e6d13666e3451d4f2dee8c1f72397c4d6f9e99223bb91ffe671c3c7b090d47'
    }

    /**
     *  Actual proposal for a given hash, if it's current.
     */
    get asV1004(): TechnicalCommitteeProposalOfStorageV1004 {
        assert(this.isV1004)
        return this as any
    }
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Call | undefined)>
    getAll(): Promise<matrixEnjinV603.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV1000 {
    get(key: Uint8Array): Promise<(matrixEnjinV1000.Call | undefined)>
    getAll(): Promise<matrixEnjinV1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV1003 {
    get(key: Uint8Array): Promise<(matrixEnjinV1003.Call | undefined)>
    getAll(): Promise<matrixEnjinV1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1003.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageMatrixEnjinV1004 {
    get(key: Uint8Array): Promise<(matrixEnjinV1004.Call | undefined)>
    getAll(): Promise<matrixEnjinV1004.Call[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV1004.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV1004.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV500 {
    get(key: Uint8Array): Promise<(v500.Call | undefined)>
    getAll(): Promise<v500.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v500.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v500.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV600 {
    get(key: Uint8Array): Promise<(v600.Call | undefined)>
    getAll(): Promise<v600.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v600.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v600.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV601 {
    get(key: Uint8Array): Promise<(v601.Call | undefined)>
    getAll(): Promise<v601.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v601.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v601.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV602 {
    get(key: Uint8Array): Promise<(v602.Call | undefined)>
    getAll(): Promise<v602.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v602.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v602.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV604 {
    get(key: Uint8Array): Promise<(v604.Call | undefined)>
    getAll(): Promise<v604.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v604.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v604.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v604.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v604.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v604.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV1000 {
    get(key: Uint8Array): Promise<(v1000.Call | undefined)>
    getAll(): Promise<v1000.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1000.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1000.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV1003 {
    get(key: Uint8Array): Promise<(v1003.Call | undefined)>
    getAll(): Promise<v1003.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1003.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1003.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1003.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1003.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1003.Call][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface TechnicalCommitteeProposalOfStorageV1004 {
    get(key: Uint8Array): Promise<(v1004.Call | undefined)>
    getAll(): Promise<v1004.Call[]>
    getMany(keys: Uint8Array[]): Promise<(v1004.Call | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v1004.Call][]>
}

export class TechnicalCommitteeProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  The hashes of the active proposals.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The hashes of the active proposals.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeProposalsStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The hashes of the active proposals.
 */
export interface TechnicalCommitteeProposalsStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalCommitteeVotingStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalCommittee'
    }

    protected getName() {
        return 'Voting'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8674aeb71b725705ae08d0cc723a5b29396e1f9ed56e4adcf4602c361e693cd7'
    }

    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    get asMatrixEnjinV603(): TechnicalCommitteeVotingStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface TechnicalCommitteeVotingStorageMatrixEnjinV603 {
    get(key: Uint8Array): Promise<(matrixEnjinV603.Votes | undefined)>
    getAll(): Promise<matrixEnjinV603.Votes[]>
    getMany(keys: Uint8Array[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: matrixEnjinV603.Votes][]>
}

export class TechnicalMembershipMembersStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Members'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
    }

    /**
     *  The current membership, stored as an ordered Vec.
     */
    get asMatrixEnjinV603(): TechnicalMembershipMembersStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current membership, stored as an ordered Vec.
 */
export interface TechnicalMembershipMembersStorageMatrixEnjinV603 {
    get(): Promise<Uint8Array[]>
}

export class TechnicalMembershipPrimeStorage extends StorageBase {
    protected getPrefix() {
        return 'TechnicalMembership'
    }

    protected getName() {
        return 'Prime'
    }

    /**
     *  The current prime member, if one exists.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '8620bdc4f360add1f8e58e488bdba4fa9b6dab86ecdd1c942b8d9de43ede38e5'
    }

    /**
     *  The current prime member, if one exists.
     */
    get asMatrixEnjinV603(): TechnicalMembershipPrimeStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The current prime member, if one exists.
 */
export interface TechnicalMembershipPrimeStorageMatrixEnjinV603 {
    get(): Promise<(Uint8Array | undefined)>
}

export class TimestampDidUpdateStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'DidUpdate'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Did the timestamp get updated in this block?
     */
    get asMatrixEnjinV603(): TimestampDidUpdateStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Did the timestamp get updated in this block?
 */
export interface TimestampDidUpdateStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class TimestampNowStorage extends StorageBase {
    protected getPrefix() {
        return 'Timestamp'
    }

    protected getName() {
        return 'Now'
    }

    /**
     *  Current time for the current block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  Current time for the current block.
     */
    get asMatrixEnjinV603(): TimestampNowStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Current time for the current block.
 */
export interface TimestampNowStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentNextFeeMultiplierStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'NextFeeMultiplier'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
    }

    get asMatrixEnjinV603(): TransactionPaymentNextFeeMultiplierStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface TransactionPaymentNextFeeMultiplierStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class TransactionPaymentStorageVersionStorage extends StorageBase {
    protected getPrefix() {
        return 'TransactionPayment'
    }

    protected getName() {
        return 'StorageVersion'
    }

    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7a0b9b43fb3e876cfa92bb4b00e569ef9a82972b0600c8a8570e064c7e3890fd'
    }

    get asMatrixEnjinV603(): TransactionPaymentStorageVersionStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

export interface TransactionPaymentStorageVersionStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.Releases>
}

export class XcmpQueueCounterForOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'CounterForOverweight'
    }

    /**
     * Counter for the related counted storage map
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
    }

    /**
     * Counter for the related counted storage map
     */
    get asMatrixEnjinV603(): XcmpQueueCounterForOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 * Counter for the related counted storage map
 */
export interface XcmpQueueCounterForOverweightStorageMatrixEnjinV603 {
    get(): Promise<number>
}

export class XcmpQueueInboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpMessages'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '7bf0d83d361216e18f7bca971cbf4fbd433158d3be6ac33fe278fb6d9bfb0469'
    }

    /**
     *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
     */
    get asMatrixEnjinV603(): XcmpQueueInboundXcmpMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Inbound aggregate XCMP messages. It can only be one per ParaId/block.
 */
export interface XcmpQueueInboundXcmpMessagesStorageMatrixEnjinV603 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueInboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'InboundXcmpStatus'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '9463adeec55c62de9270b726721d07d1258e861fc23bcadc753e06286f1e9d94'
    }

    /**
     *  Status of the inbound XCMP channels.
     */
    get asMatrixEnjinV603(): XcmpQueueInboundXcmpStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Status of the inbound XCMP channels.
 */
export interface XcmpQueueInboundXcmpStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.InboundChannelDetails[]>
}

export class XcmpQueueOutboundXcmpMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpMessages'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f8f791196403322746e9b911cdffc1dfb7880ff624b4765b5515d8264f7df7b2'
    }

    /**
     *  The messages outbound in a given XCMP channel.
     */
    get asMatrixEnjinV603(): XcmpQueueOutboundXcmpMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The messages outbound in a given XCMP channel.
 */
export interface XcmpQueueOutboundXcmpMessagesStorageMatrixEnjinV603 {
    get(key1: number, key2: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [number, number][]): Promise<Uint8Array[]>
    getKeys(): Promise<[number, number][]>
    getKeys(key1: number): Promise<[number, number][]>
    getKeys(key1: number, key2: number): Promise<[number, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number): AsyncIterable<[number, number][]>
    getKeysPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[number, number][]>
    getPairs(): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairs(key1: number, key2: number): Promise<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key1: number, key2: number): AsyncIterable<[k: [number, number], v: Uint8Array][]>
}

export class XcmpQueueOutboundXcmpStatusStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OutboundXcmpStatus'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '0803a0634571a8cfdaa8b16757a06e235664ceb84c144cf0d5953fd2dd0f7f3a'
    }

    /**
     *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
     *  and last outbound message. If the two indices are equal, then it indicates an empty
     *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
     *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
     *  case of the need to send a high-priority signal message this block.
     *  The bool is true if there is a signal message waiting to be sent.
     */
    get asMatrixEnjinV603(): XcmpQueueOutboundXcmpStatusStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The non-empty XCMP channels in order of becoming non-empty, and the index of the first
 *  and last outbound message. If the two indices are equal, then it indicates an empty
 *  queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
 *  than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
 *  case of the need to send a high-priority signal message this block.
 *  The bool is true if there is a signal message waiting to be sent.
 */
export interface XcmpQueueOutboundXcmpStatusStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.OutboundChannelDetails[]>
}

export class XcmpQueueOverweightStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'Overweight'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2eb096a3f66cc2d3a7f63f9f097c63bad7d960c4949a759a34865c7919f65122'
    }

    /**
     *  The messages that exceeded max individual message weight budget.
     * 
     *  These message stay in this storage map until they are manually dispatched via
     *  `service_overweight`.
     */
    get asMatrixEnjinV603(): XcmpQueueOverweightStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The messages that exceeded max individual message weight budget.
 * 
 *  These message stay in this storage map until they are manually dispatched via
 *  `service_overweight`.
 */
export interface XcmpQueueOverweightStorageMatrixEnjinV603 {
    get(key: bigint): Promise<([number, number, Uint8Array] | undefined)>
    getAll(): Promise<[number, number, Uint8Array][]>
    getMany(keys: bigint[]): Promise<([number, number, Uint8Array] | undefined)[]>
    getKeys(): Promise<bigint[]>
    getKeys(key: bigint): Promise<bigint[]>
    getKeysPaged(pageSize: number): AsyncIterable<bigint[]>
    getKeysPaged(pageSize: number, key: bigint): AsyncIterable<bigint[]>
    getPairs(): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairs(key: bigint): Promise<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
    getPairsPaged(pageSize: number, key: bigint): AsyncIterable<[k: bigint, v: [number, number, Uint8Array]][]>
}

export class XcmpQueueOverweightCountStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'OverweightCount'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '95ff4f914f08e149ddbe1ae2dcb1743bbf9aaae69d04c486e1a398cacfcca06a'
    }

    /**
     *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
     *  available free overweight index.
     */
    get asMatrixEnjinV603(): XcmpQueueOverweightCountStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The number of overweight messages ever recorded in `Overweight`. Also doubles as the next
 *  available free overweight index.
 */
export interface XcmpQueueOverweightCountStorageMatrixEnjinV603 {
    get(): Promise<bigint>
}

export class XcmpQueueQueueConfigStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueConfig'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '2a88389b0d97d3253b6e1cdc0a2e938907eda23917d9d2a7dcb76b96b945d7c1'
    }

    /**
     *  The configuration which controls the dynamics of the outbound queue.
     */
    get asMatrixEnjinV603(): XcmpQueueQueueConfigStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  The configuration which controls the dynamics of the outbound queue.
 */
export interface XcmpQueueQueueConfigStorageMatrixEnjinV603 {
    get(): Promise<matrixEnjinV603.QueueConfigData>
}

export class XcmpQueueQueueSuspendedStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'QueueSuspended'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === '1b6fbf1674d189f761a7ac63093bf5c755bf073dd9d9f0dbe657289f92575db5'
    }

    /**
     *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
     */
    get asMatrixEnjinV603(): XcmpQueueQueueSuspendedStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Whether or not the XCMP queue is suspended from executing incoming XCMs or not.
 */
export interface XcmpQueueQueueSuspendedStorageMatrixEnjinV603 {
    get(): Promise<boolean>
}

export class XcmpQueueSignalMessagesStorage extends StorageBase {
    protected getPrefix() {
        return 'XcmpQueue'
    }

    protected getName() {
        return 'SignalMessages'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get isMatrixEnjinV603(): boolean {
        return this.getTypeHash() === 'f278d7d239e9ac4cbb0509cc885124fd45c3f5b75452aba0391701e1a886debb'
    }

    /**
     *  Any signal messages waiting to be sent.
     */
    get asMatrixEnjinV603(): XcmpQueueSignalMessagesStorageMatrixEnjinV603 {
        assert(this.isMatrixEnjinV603)
        return this as any
    }
}

/**
 *  Any signal messages waiting to be sent.
 */
export interface XcmpQueueSignalMessagesStorageMatrixEnjinV603 {
    get(key: number): Promise<Uint8Array>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: number[]): Promise<Uint8Array[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: Uint8Array][]>
    getPairs(key: number): Promise<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: Uint8Array][]>
}
