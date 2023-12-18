import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const mutatePools =  {
    name: 'Pools.mutate_pools',
    /**
     * Mutate the pools. Can only be called by root.
     * 
     * # Errors
     * 
     * - [`Error::InvalidFeeShares`] if the fee shares do not add up to 100%
     */
    matrixEnjinV603: new CallType(
        'Pools.mutate_pools',
        sts.struct({
            mutation: matrixEnjinV603.PoolsMutation,
        })
    ),
}
