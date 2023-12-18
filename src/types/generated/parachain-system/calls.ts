import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v602 from '../v602'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const setValidationData =  {
    name: 'ParachainSystem.set_validation_data',
    /**
     * Set the current validation data.
     * 
     * This should be invoked exactly once per block. It will panic at the finalization
     * phase if the call was not invoked.
     * 
     * The dispatch origin for this call must be `Inherent`
     * 
     * As a side effect, this function upgrades the current validation function
     * if the appropriate time has come.
     */
    matrixEnjinV603: new CallType(
        'ParachainSystem.set_validation_data',
        sts.struct({
            data: matrixEnjinV603.ParachainInherentData,
        })
    ),
}

export const sudoSendUpwardMessage =  {
    name: 'ParachainSystem.sudo_send_upward_message',
    matrixEnjinV603: new CallType(
        'ParachainSystem.sudo_send_upward_message',
        sts.struct({
            message: sts.bytes(),
        })
    ),
}

export const authorizeUpgrade =  {
    name: 'ParachainSystem.authorize_upgrade',
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    matrixEnjinV603: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: matrixEnjinV603.H256,
            checkVersion: sts.boolean(),
        })
    ),
    v500: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v500.H256,
        })
    ),
    /**
     * Authorize an upgrade to a given `code_hash` for the runtime. The runtime can be supplied
     * later.
     * 
     * The `check_version` parameter sets a boolean flag for whether or not the runtime's spec
     * version and name should be verified on upgrade. Since the authorization only has a hash,
     * it cannot actually perform the verification.
     * 
     * This call requires Root origin.
     */
    v602: new CallType(
        'ParachainSystem.authorize_upgrade',
        sts.struct({
            codeHash: v602.H256,
            checkVersion: sts.boolean(),
        })
    ),
}

export const enactAuthorizedUpgrade =  {
    name: 'ParachainSystem.enact_authorized_upgrade',
    /**
     * Provide the preimage (runtime binary) `code` for an upgrade that has been authorized.
     * 
     * If the authorization required a version check, this call will ensure the spec name
     * remains unchanged and that the spec version has increased.
     * 
     * Note that this function will not apply the new `code`, but only attempt to schedule the
     * upgrade with the Relay Chain.
     * 
     * All origins are allowed.
     */
    matrixEnjinV603: new CallType(
        'ParachainSystem.enact_authorized_upgrade',
        sts.struct({
            code: sts.bytes(),
        })
    ),
}
