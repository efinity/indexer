import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'

export const minimumWeightUpdated =  {
    name: 'EfinityXcm.MinimumWeightUpdated',
    /**
     * Xcm fee and weight updated
     */
    v500: new EventType(
        'EfinityXcm.MinimumWeightUpdated',
        v500.MinimumWeightFeePair
    ),
}

export const xcmTransferFailed =  {
    name: 'EfinityXcm.XcmTransferFailed',
    /**
     * XCM transfer failed
     */
    v500: new EventType(
        'EfinityXcm.XcmTransferFailed',
        v500.DispatchError
    ),
    /**
     * XCM transfer failed
     */
    v602: new EventType(
        'EfinityXcm.XcmTransferFailed',
        v602.DispatchError
    ),
}
