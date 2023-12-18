import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const serviceOverweight =  {
    name: 'DmpQueue.service_overweight',
    /**
     * Service a single overweight message.
     */
    matrixEnjinV603: new CallType(
        'DmpQueue.service_overweight',
        sts.struct({
            index: sts.bigint(),
            weightLimit: matrixEnjinV603.Weight,
        })
    ),
}
