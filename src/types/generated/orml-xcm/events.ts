import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const sent =  {
    name: 'OrmlXcm.Sent',
    /**
     * XCM message sent. \[to, message\]
     */
    matrixEnjinV603: new EventType(
        'OrmlXcm.Sent',
        sts.struct({
            to: matrixEnjinV603.V3MultiLocation,
            message: sts.array(() => matrixEnjinV603.V3Instruction),
        })
    ),
}
