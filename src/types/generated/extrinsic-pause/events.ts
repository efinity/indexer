import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'

export const palletPaused =  {
    name: 'ExtrinsicPause.PalletPaused',
    /**
     * All pallet extrinsics are paused.
     */
    matrixEnjinV603: new EventType(
        'ExtrinsicPause.PalletPaused',
        sts.struct({
            palletName: sts.bytes(),
        })
    ),
}

export const palletResumed =  {
    name: 'ExtrinsicPause.PalletResumed',
    /**
     * All pallet extrinsics are resumed.
     */
    matrixEnjinV603: new EventType(
        'ExtrinsicPause.PalletResumed',
        sts.struct({
            palletName: sts.bytes(),
        })
    ),
}

export const extrinsicPaused =  {
    name: 'ExtrinsicPause.ExtrinsicPaused',
    /**
     * Extrinsic is paused.
     */
    matrixEnjinV603: new EventType(
        'ExtrinsicPause.ExtrinsicPaused',
        sts.struct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        })
    ),
}

export const extrinsicResumed =  {
    name: 'ExtrinsicPause.ExtrinsicResumed',
    /**
     * Extrinsic is resumed
     */
    matrixEnjinV603: new EventType(
        'ExtrinsicPause.ExtrinsicResumed',
        sts.struct({
            palletName: sts.bytes(),
            extrinsicName: sts.bytes(),
        })
    ),
}
