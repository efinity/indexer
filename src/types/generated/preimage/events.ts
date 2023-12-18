import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const noted =  {
    name: 'Preimage.Noted',
    /**
     * A preimage has been noted.
     */
    matrixEnjinV603: new EventType(
        'Preimage.Noted',
        sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}

export const requested =  {
    name: 'Preimage.Requested',
    /**
     * A preimage has been requested.
     */
    matrixEnjinV603: new EventType(
        'Preimage.Requested',
        sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}

export const cleared =  {
    name: 'Preimage.Cleared',
    /**
     * A preimage has ben cleared.
     */
    matrixEnjinV603: new EventType(
        'Preimage.Cleared',
        sts.struct({
            hash: matrixEnjinV603.H256,
        })
    ),
}
