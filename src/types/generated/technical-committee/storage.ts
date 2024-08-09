import {sts, Block, Bytes, Option, Result, StorageType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as matrixEnjinV1003 from '../matrixEnjinV1003'
import * as v1003 from '../v1003'
import * as matrixEnjinV1004 from '../matrixEnjinV1004'
import * as v1004 from '../v1004'
import * as matrixEnjinV1005 from '../matrixEnjinV1005'
import * as v1005 from '../v1005'
import * as v1010 from '../v1010'
import * as v1011 from '../v1011'

export const proposals =  {
    /**
     *  The hashes of the active proposals.
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.Proposals', 'Default', [], sts.array(() => matrixEnjinV603.H256)) as ProposalsMatrixEnjinV603,
}

/**
 *  The hashes of the active proposals.
 */
export interface ProposalsMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.H256[]
    get(block: Block): Promise<(matrixEnjinV603.H256[] | undefined)>
}

export const proposalOf =  {
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [matrixEnjinV603.H256], matrixEnjinV603.Call) as ProposalOfMatrixEnjinV603,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [matrixEnjinV1000.H256], matrixEnjinV1000.Call) as ProposalOfMatrixEnjinV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1003: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [matrixEnjinV1003.H256], matrixEnjinV1003.Call) as ProposalOfMatrixEnjinV1003,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1004: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [matrixEnjinV1004.H256], matrixEnjinV1004.Call) as ProposalOfMatrixEnjinV1004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    matrixEnjinV1005: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [matrixEnjinV1005.H256], matrixEnjinV1005.Call) as ProposalOfMatrixEnjinV1005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v500: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v500.H256], v500.Call) as ProposalOfV500,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v600: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v600.H256], v600.Call) as ProposalOfV600,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v601: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v601.H256], v601.Call) as ProposalOfV601,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v602: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v602.H256], v602.Call) as ProposalOfV602,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v604: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v604.H256], v604.Call) as ProposalOfV604,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1000: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1000.H256], v1000.Call) as ProposalOfV1000,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1003: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1003.H256], v1003.Call) as ProposalOfV1003,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1004: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1004.H256], v1004.Call) as ProposalOfV1004,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1005: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1005.H256], v1005.Call) as ProposalOfV1005,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1010: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1010.H256], v1010.Call) as ProposalOfV1010,
    /**
     *  Actual proposal for a given hash, if it's current.
     */
    v1011: new StorageType('TechnicalCommittee.ProposalOf', 'Optional', [v1011.H256], v1011.Call) as ProposalOfV1011,
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(matrixEnjinV603.Call | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Call | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1000.H256): Promise<(matrixEnjinV1000.Call | undefined)>
    getMany(block: Block, keys: matrixEnjinV1000.H256[]): Promise<(matrixEnjinV1000.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1000.H256[]>
    getKeys(block: Block, key: matrixEnjinV1000.H256): Promise<matrixEnjinV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H256): AsyncIterable<matrixEnjinV1000.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1000.H256, v: (matrixEnjinV1000.Call | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1000.H256): Promise<[k: matrixEnjinV1000.H256, v: (matrixEnjinV1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1000.H256, v: (matrixEnjinV1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1000.H256): AsyncIterable<[k: matrixEnjinV1000.H256, v: (matrixEnjinV1000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1003  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1003.H256): Promise<(matrixEnjinV1003.Call | undefined)>
    getMany(block: Block, keys: matrixEnjinV1003.H256[]): Promise<(matrixEnjinV1003.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1003.H256[]>
    getKeys(block: Block, key: matrixEnjinV1003.H256): Promise<matrixEnjinV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1003.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1003.H256): AsyncIterable<matrixEnjinV1003.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1003.H256, v: (matrixEnjinV1003.Call | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1003.H256): Promise<[k: matrixEnjinV1003.H256, v: (matrixEnjinV1003.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1003.H256, v: (matrixEnjinV1003.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1003.H256): AsyncIterable<[k: matrixEnjinV1003.H256, v: (matrixEnjinV1003.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1004.H256): Promise<(matrixEnjinV1004.Call | undefined)>
    getMany(block: Block, keys: matrixEnjinV1004.H256[]): Promise<(matrixEnjinV1004.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1004.H256[]>
    getKeys(block: Block, key: matrixEnjinV1004.H256): Promise<matrixEnjinV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1004.H256): AsyncIterable<matrixEnjinV1004.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1004.H256, v: (matrixEnjinV1004.Call | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1004.H256): Promise<[k: matrixEnjinV1004.H256, v: (matrixEnjinV1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1004.H256, v: (matrixEnjinV1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1004.H256): AsyncIterable<[k: matrixEnjinV1004.H256, v: (matrixEnjinV1004.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfMatrixEnjinV1005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV1005.H256): Promise<(matrixEnjinV1005.Call | undefined)>
    getMany(block: Block, keys: matrixEnjinV1005.H256[]): Promise<(matrixEnjinV1005.Call | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV1005.H256[]>
    getKeys(block: Block, key: matrixEnjinV1005.H256): Promise<matrixEnjinV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV1005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV1005.H256): AsyncIterable<matrixEnjinV1005.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV1005.H256, v: (matrixEnjinV1005.Call | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV1005.H256): Promise<[k: matrixEnjinV1005.H256, v: (matrixEnjinV1005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV1005.H256, v: (matrixEnjinV1005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV1005.H256): AsyncIterable<[k: matrixEnjinV1005.H256, v: (matrixEnjinV1005.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV500  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v500.H256): Promise<(v500.Call | undefined)>
    getMany(block: Block, keys: v500.H256[]): Promise<(v500.Call | undefined)[]>
    getKeys(block: Block): Promise<v500.H256[]>
    getKeys(block: Block, key: v500.H256): Promise<v500.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v500.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v500.H256): AsyncIterable<v500.H256[]>
    getPairs(block: Block): Promise<[k: v500.H256, v: (v500.Call | undefined)][]>
    getPairs(block: Block, key: v500.H256): Promise<[k: v500.H256, v: (v500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v500.H256, v: (v500.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v500.H256): AsyncIterable<[k: v500.H256, v: (v500.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV600  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v600.H256): Promise<(v600.Call | undefined)>
    getMany(block: Block, keys: v600.H256[]): Promise<(v600.Call | undefined)[]>
    getKeys(block: Block): Promise<v600.H256[]>
    getKeys(block: Block, key: v600.H256): Promise<v600.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v600.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v600.H256): AsyncIterable<v600.H256[]>
    getPairs(block: Block): Promise<[k: v600.H256, v: (v600.Call | undefined)][]>
    getPairs(block: Block, key: v600.H256): Promise<[k: v600.H256, v: (v600.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v600.H256, v: (v600.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v600.H256): AsyncIterable<[k: v600.H256, v: (v600.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV601  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v601.H256): Promise<(v601.Call | undefined)>
    getMany(block: Block, keys: v601.H256[]): Promise<(v601.Call | undefined)[]>
    getKeys(block: Block): Promise<v601.H256[]>
    getKeys(block: Block, key: v601.H256): Promise<v601.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v601.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v601.H256): AsyncIterable<v601.H256[]>
    getPairs(block: Block): Promise<[k: v601.H256, v: (v601.Call | undefined)][]>
    getPairs(block: Block, key: v601.H256): Promise<[k: v601.H256, v: (v601.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v601.H256, v: (v601.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v601.H256): AsyncIterable<[k: v601.H256, v: (v601.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV602  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v602.H256): Promise<(v602.Call | undefined)>
    getMany(block: Block, keys: v602.H256[]): Promise<(v602.Call | undefined)[]>
    getKeys(block: Block): Promise<v602.H256[]>
    getKeys(block: Block, key: v602.H256): Promise<v602.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v602.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v602.H256): AsyncIterable<v602.H256[]>
    getPairs(block: Block): Promise<[k: v602.H256, v: (v602.Call | undefined)][]>
    getPairs(block: Block, key: v602.H256): Promise<[k: v602.H256, v: (v602.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v602.H256, v: (v602.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v602.H256): AsyncIterable<[k: v602.H256, v: (v602.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV604  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v604.H256): Promise<(v604.Call | undefined)>
    getMany(block: Block, keys: v604.H256[]): Promise<(v604.Call | undefined)[]>
    getKeys(block: Block): Promise<v604.H256[]>
    getKeys(block: Block, key: v604.H256): Promise<v604.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v604.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v604.H256): AsyncIterable<v604.H256[]>
    getPairs(block: Block): Promise<[k: v604.H256, v: (v604.Call | undefined)][]>
    getPairs(block: Block, key: v604.H256): Promise<[k: v604.H256, v: (v604.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v604.H256, v: (v604.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v604.H256): AsyncIterable<[k: v604.H256, v: (v604.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1000  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1000.H256): Promise<(v1000.Call | undefined)>
    getMany(block: Block, keys: v1000.H256[]): Promise<(v1000.Call | undefined)[]>
    getKeys(block: Block): Promise<v1000.H256[]>
    getKeys(block: Block, key: v1000.H256): Promise<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1000.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<v1000.H256[]>
    getPairs(block: Block): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairs(block: Block, key: v1000.H256): Promise<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1000.H256): AsyncIterable<[k: v1000.H256, v: (v1000.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1003  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1003.H256): Promise<(v1003.Call | undefined)>
    getMany(block: Block, keys: v1003.H256[]): Promise<(v1003.Call | undefined)[]>
    getKeys(block: Block): Promise<v1003.H256[]>
    getKeys(block: Block, key: v1003.H256): Promise<v1003.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1003.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1003.H256): AsyncIterable<v1003.H256[]>
    getPairs(block: Block): Promise<[k: v1003.H256, v: (v1003.Call | undefined)][]>
    getPairs(block: Block, key: v1003.H256): Promise<[k: v1003.H256, v: (v1003.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1003.H256, v: (v1003.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1003.H256): AsyncIterable<[k: v1003.H256, v: (v1003.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1004  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1004.H256): Promise<(v1004.Call | undefined)>
    getMany(block: Block, keys: v1004.H256[]): Promise<(v1004.Call | undefined)[]>
    getKeys(block: Block): Promise<v1004.H256[]>
    getKeys(block: Block, key: v1004.H256): Promise<v1004.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1004.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1004.H256): AsyncIterable<v1004.H256[]>
    getPairs(block: Block): Promise<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairs(block: Block, key: v1004.H256): Promise<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1004.H256, v: (v1004.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1004.H256): AsyncIterable<[k: v1004.H256, v: (v1004.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1005  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1005.H256): Promise<(v1005.Call | undefined)>
    getMany(block: Block, keys: v1005.H256[]): Promise<(v1005.Call | undefined)[]>
    getKeys(block: Block): Promise<v1005.H256[]>
    getKeys(block: Block, key: v1005.H256): Promise<v1005.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1005.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1005.H256): AsyncIterable<v1005.H256[]>
    getPairs(block: Block): Promise<[k: v1005.H256, v: (v1005.Call | undefined)][]>
    getPairs(block: Block, key: v1005.H256): Promise<[k: v1005.H256, v: (v1005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1005.H256, v: (v1005.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1005.H256): AsyncIterable<[k: v1005.H256, v: (v1005.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1010  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1010.H256): Promise<(v1010.Call | undefined)>
    getMany(block: Block, keys: v1010.H256[]): Promise<(v1010.Call | undefined)[]>
    getKeys(block: Block): Promise<v1010.H256[]>
    getKeys(block: Block, key: v1010.H256): Promise<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1010.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<v1010.H256[]>
    getPairs(block: Block): Promise<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairs(block: Block, key: v1010.H256): Promise<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1010.H256, v: (v1010.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1010.H256): AsyncIterable<[k: v1010.H256, v: (v1010.Call | undefined)][]>
}

/**
 *  Actual proposal for a given hash, if it's current.
 */
export interface ProposalOfV1011  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: v1011.H256): Promise<(v1011.Call | undefined)>
    getMany(block: Block, keys: v1011.H256[]): Promise<(v1011.Call | undefined)[]>
    getKeys(block: Block): Promise<v1011.H256[]>
    getKeys(block: Block, key: v1011.H256): Promise<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<v1011.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<v1011.H256[]>
    getPairs(block: Block): Promise<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairs(block: Block, key: v1011.H256): Promise<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: v1011.H256, v: (v1011.Call | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: v1011.H256): AsyncIterable<[k: v1011.H256, v: (v1011.Call | undefined)][]>
}

export const voting =  {
    /**
     *  Votes on a given proposal, if it is ongoing.
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.Voting', 'Optional', [matrixEnjinV603.H256], matrixEnjinV603.Votes) as VotingMatrixEnjinV603,
}

/**
 *  Votes on a given proposal, if it is ongoing.
 */
export interface VotingMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block, key: matrixEnjinV603.H256): Promise<(matrixEnjinV603.Votes | undefined)>
    getMany(block: Block, keys: matrixEnjinV603.H256[]): Promise<(matrixEnjinV603.Votes | undefined)[]>
    getKeys(block: Block): Promise<matrixEnjinV603.H256[]>
    getKeys(block: Block, key: matrixEnjinV603.H256): Promise<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block): AsyncIterable<matrixEnjinV603.H256[]>
    getKeysPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<matrixEnjinV603.H256[]>
    getPairs(block: Block): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Votes | undefined)][]>
    getPairs(block: Block, key: matrixEnjinV603.H256): Promise<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Votes | undefined)][]>
    getPairsPaged(pageSize: number, block: Block, key: matrixEnjinV603.H256): AsyncIterable<[k: matrixEnjinV603.H256, v: (matrixEnjinV603.Votes | undefined)][]>
}

export const proposalCount =  {
    /**
     *  Proposals so far.
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.ProposalCount', 'Default', [], sts.number()) as ProposalCountMatrixEnjinV603,
}

/**
 *  Proposals so far.
 */
export interface ProposalCountMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): number
    get(block: Block): Promise<(number | undefined)>
}

export const members =  {
    /**
     *  The current members of the collective. This is stored sorted (just by value).
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.Members', 'Default', [], sts.array(() => matrixEnjinV603.AccountId32)) as MembersMatrixEnjinV603,
}

/**
 *  The current members of the collective. This is stored sorted (just by value).
 */
export interface MembersMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    getDefault(block: Block): matrixEnjinV603.AccountId32[]
    get(block: Block): Promise<(matrixEnjinV603.AccountId32[] | undefined)>
}

export const prime =  {
    /**
     *  The prime member that helps determine the default vote behavior in case of absentations.
     */
    matrixEnjinV603: new StorageType('TechnicalCommittee.Prime', 'Optional', [], matrixEnjinV603.AccountId32) as PrimeMatrixEnjinV603,
}

/**
 *  The prime member that helps determine the default vote behavior in case of absentations.
 */
export interface PrimeMatrixEnjinV603  {
    is(block: RuntimeCtx): boolean
    get(block: Block): Promise<(matrixEnjinV603.AccountId32 | undefined)>
}
