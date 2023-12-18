import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const transferredMultiAssets =  {
    name: 'XTokens.TransferredMultiAssets',
    /**
     * Transferred `MultiAsset` with fee.
     */
    matrixEnjinV603: new EventType(
        'XTokens.TransferredMultiAssets',
        sts.struct({
            sender: matrixEnjinV603.AccountId32,
            assets: sts.array(() => matrixEnjinV603.V3MultiAsset),
            fee: matrixEnjinV603.V3MultiAsset,
            dest: matrixEnjinV603.V3MultiLocation,
        })
    ),
}
