import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const validationFunctionStored =  {
    name: 'ParachainSystem.ValidationFunctionStored',
    /**
     * The validation function has been scheduled to apply.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.ValidationFunctionStored',
        sts.unit()
    ),
}

export const validationFunctionApplied =  {
    name: 'ParachainSystem.ValidationFunctionApplied',
    /**
     * The validation function was applied as of the contained relay chain block number.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.ValidationFunctionApplied',
        sts.struct({
            relayChainBlockNum: sts.number(),
        })
    ),
}

export const validationFunctionDiscarded =  {
    name: 'ParachainSystem.ValidationFunctionDiscarded',
    /**
     * The relay-chain aborted the upgrade process.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.ValidationFunctionDiscarded',
        sts.unit()
    ),
}

export const upgradeAuthorized =  {
    name: 'ParachainSystem.UpgradeAuthorized',
    /**
     * An upgrade has been authorized.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.UpgradeAuthorized',
        sts.struct({
            codeHash: matrixEnjinV603.H256,
        })
    ),
}

export const downwardMessagesReceived =  {
    name: 'ParachainSystem.DownwardMessagesReceived',
    /**
     * Some downward messages have been received and will be processed.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.DownwardMessagesReceived',
        sts.struct({
            count: sts.number(),
        })
    ),
}

export const downwardMessagesProcessed =  {
    name: 'ParachainSystem.DownwardMessagesProcessed',
    /**
     * Downward messages were processed using the given weight.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.DownwardMessagesProcessed',
        sts.struct({
            weightUsed: matrixEnjinV603.Weight,
            dmqHead: matrixEnjinV603.H256,
        })
    ),
}

export const upwardMessageSent =  {
    name: 'ParachainSystem.UpwardMessageSent',
    /**
     * An upward message was sent to the relay chain.
     */
    matrixEnjinV603: new EventType(
        'ParachainSystem.UpwardMessageSent',
        sts.struct({
            messageHash: sts.option(() => sts.bytes()),
        })
    ),
}
