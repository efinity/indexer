import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'
import * as matrixEnjinV1000 from '../matrixEnjinV1000'
import * as v1000 from '../v1000'
import * as v1003 from '../v1003'

export const pauseExtrinsic =  {
    name: 'ExtrinsicPause.pause_extrinsic',
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV603: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV603.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    matrixEnjinV1000: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: matrixEnjinV1000.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v500: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v500.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v600: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v600.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v601: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v601.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v602: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v602.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v604: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v604.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1000: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1000.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Pause execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is paused, else the entire pallet is paused.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
     */
    v1003: new CallType(
        'ExtrinsicPause.pause_extrinsic',
        sts.struct({
            call: v1003.Call,
            pauseOnlyExtrinsic: sts.boolean(),
        })
    ),
}

export const resumeExtrinsic =  {
    name: 'ExtrinsicPause.resume_extrinsic',
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV603: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV603.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    matrixEnjinV1000: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: matrixEnjinV1000.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v500: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v500.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v600: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v600.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v601: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v601.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v602: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v602.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v604: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v604.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1000: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1000.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
    /**
     * Resume execution of extrinsic(s)
     * 
     * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
     * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
     * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
     * is resumed, else the entire pallet is resumed.
     * 
     * # Errors
     * 
     * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
     */
    v1003: new CallType(
        'ExtrinsicPause.resume_extrinsic',
        sts.struct({
            call: v1003.Call,
            resumeOnlyExtrinsic: sts.boolean(),
        })
    ),
}
