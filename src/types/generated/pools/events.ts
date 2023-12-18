import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const poolsMutated =  {
    name: 'Pools.PoolsMutated',
    /**
     * Pools storage was modified by [`PoolsMutation`]
     */
    matrixEnjinV603: new EventType(
        'Pools.PoolsMutated',
        matrixEnjinV603.PoolsMutation
    ),
}
