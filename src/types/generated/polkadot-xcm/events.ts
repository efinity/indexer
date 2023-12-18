import {sts, Block, Bytes, Option, Result, EventType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const attempted =  {
    name: 'PolkadotXcm.Attempted',
    /**
     * Execution of an XCM message was attempted.
     * 
     * \[ outcome \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Attempted',
        matrixEnjinV603.V3Outcome
    ),
}

export const sent =  {
    name: 'PolkadotXcm.Sent',
    /**
     * A XCM message was sent.
     * 
     * \[ origin, destination, message \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Sent',
        sts.tuple([matrixEnjinV603.V3MultiLocation, matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3Instruction)])
    ),
}

export const unexpectedResponse =  {
    name: 'PolkadotXcm.UnexpectedResponse',
    /**
     * Query response received which does not match a registered query. This may be because a
     * matching query was never registered, it may be because it is a duplicate response, or
     * because the query timed out.
     * 
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.UnexpectedResponse',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
}

export const responseReady =  {
    name: 'PolkadotXcm.ResponseReady',
    /**
     * Query response has been received and is ready for taking with `take_response`. There is
     * no registered notification call.
     * 
     * \[ id, response \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.ResponseReady',
        sts.tuple([sts.bigint(), matrixEnjinV603.V3Response])
    ),
}

export const notified =  {
    name: 'PolkadotXcm.Notified',
    /**
     * Query response has been received and query is removed. The registered notification has
     * been dispatched and executed successfully.
     * 
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.Notified',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const notifyOverweight =  {
    name: 'PolkadotXcm.NotifyOverweight',
    /**
     * Query response has been received and query is removed. The registered notification could
     * not be dispatched because the dispatch weight is greater than the maximum weight
     * originally budgeted by this runtime for the query result.
     * 
     * \[ id, pallet index, call index, actual weight, max budgeted weight \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyOverweight',
        sts.tuple([sts.bigint(), sts.number(), sts.number(), matrixEnjinV603.Weight, matrixEnjinV603.Weight])
    ),
}

export const notifyDispatchError =  {
    name: 'PolkadotXcm.NotifyDispatchError',
    /**
     * Query response has been received and query is removed. There was a general error with
     * dispatching the notification call.
     * 
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyDispatchError',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const notifyDecodeFailed =  {
    name: 'PolkadotXcm.NotifyDecodeFailed',
    /**
     * Query response has been received and query is removed. The dispatch was unable to be
     * decoded into a `Call`; this might be due to dispatch function having a signature which
     * is not `(origin, QueryId, Response)`.
     * 
     * \[ id, pallet index, call index \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyDecodeFailed',
        sts.tuple([sts.bigint(), sts.number(), sts.number()])
    ),
}

export const invalidResponder =  {
    name: 'PolkadotXcm.InvalidResponder',
    /**
     * Expected query response has been received but the origin location of the response does
     * not match that expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected location \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidResponder',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), sts.option(() => matrixEnjinV603.V3MultiLocation)])
    ),
}

export const invalidResponderVersion =  {
    name: 'PolkadotXcm.InvalidResponderVersion',
    /**
     * Expected query response has been received but the expected origin location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidResponderVersion',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
}

export const responseTaken =  {
    name: 'PolkadotXcm.ResponseTaken',
    /**
     * Received query response has been read and removed.
     * 
     * \[ id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.ResponseTaken',
        sts.bigint()
    ),
}

export const assetsTrapped =  {
    name: 'PolkadotXcm.AssetsTrapped',
    /**
     * Some assets have been placed in an asset trap.
     * 
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.AssetsTrapped',
        sts.tuple([matrixEnjinV603.H256, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets])
    ),
}

export const versionChangeNotified =  {
    name: 'PolkadotXcm.VersionChangeNotified',
    /**
     * An XCM version change notification message has been attempted to be sent.
     * 
     * The cost of sending it (borne by the chain) is included.
     * 
     * \[ destination, result, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionChangeNotified',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.number(), sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
}

export const supportedVersionChanged =  {
    name: 'PolkadotXcm.SupportedVersionChanged',
    /**
     * The supported version of a location has been changed. This might be through an
     * automatic notification or a manual intervention.
     * 
     * \[ location, XCM version \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.SupportedVersionChanged',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.number()])
    ),
}

export const notifyTargetSendFail =  {
    name: 'PolkadotXcm.NotifyTargetSendFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * sending the notification to it.
     * 
     * \[ location, query ID, error \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyTargetSendFail',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), matrixEnjinV603.V3Error])
    ),
}

export const notifyTargetMigrationFail =  {
    name: 'PolkadotXcm.NotifyTargetMigrationFail',
    /**
     * A given location which had a version change subscription was dropped owing to an error
     * migrating the location to our new XCM format.
     * 
     * \[ location, query ID \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.NotifyTargetMigrationFail',
        sts.tuple([matrixEnjinV603.VersionedMultiLocation, sts.bigint()])
    ),
}

export const invalidQuerierVersion =  {
    name: 'PolkadotXcm.InvalidQuerierVersion',
    /**
     * Expected query response has been received but the expected querier location placed in
     * storage by this runtime previously cannot be decoded. The query remains registered.
     * 
     * This is unexpected (since a location placed in storage in a previously executing
     * runtime should be readable prior to query timeout) and dangerous since the possibly
     * valid response will be dropped. Manual governance intervention is probably going to be
     * needed.
     * 
     * \[ origin location, id \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidQuerierVersion',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint()])
    ),
}

export const invalidQuerier =  {
    name: 'PolkadotXcm.InvalidQuerier',
    /**
     * Expected query response has been received but the querier location of the response does
     * not match the expected. The query remains registered for a later, valid, response to
     * be received and acted upon.
     * 
     * \[ origin location, id, expected querier, maybe actual querier \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.InvalidQuerier',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.bigint(), matrixEnjinV603.V3MultiLocation, sts.option(() => matrixEnjinV603.V3MultiLocation)])
    ),
}

export const versionNotifyStarted =  {
    name: 'PolkadotXcm.VersionNotifyStarted',
    /**
     * A remote has requested XCM version change notification from us and we have honored it.
     * A version information message is sent to them and its cost is included.
     * 
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyStarted',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
}

export const versionNotifyRequested =  {
    name: 'PolkadotXcm.VersionNotifyRequested',
    /**
     * We have requested that a remote chain sends us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyRequested',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
}

export const versionNotifyUnrequested =  {
    name: 'PolkadotXcm.VersionNotifyUnrequested',
    /**
     * We have requested that a remote chain stops sending us XCM version change notifications.
     * 
     * \[ destination location, cost \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.VersionNotifyUnrequested',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
}

export const feesPaid =  {
    name: 'PolkadotXcm.FeesPaid',
    /**
     * Fees were paid from a location for an operation (often for using `SendXcm`).
     * 
     * \[ paying location, fees \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.FeesPaid',
        sts.tuple([matrixEnjinV603.V3MultiLocation, sts.array(() => matrixEnjinV603.V3MultiAsset)])
    ),
}

export const assetsClaimed =  {
    name: 'PolkadotXcm.AssetsClaimed',
    /**
     * Some assets have been claimed from an asset trap
     * 
     * \[ hash, origin, assets \]
     */
    matrixEnjinV603: new EventType(
        'PolkadotXcm.AssetsClaimed',
        sts.tuple([matrixEnjinV603.H256, matrixEnjinV603.V3MultiLocation, matrixEnjinV603.VersionedMultiAssets])
    ),
}
