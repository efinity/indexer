import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const send =  {
    name: 'PolkadotXcm.send',
    matrixEnjinV603: new CallType(
        'PolkadotXcm.send',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            message: matrixEnjinV603.VersionedXcm,
        })
    ),
}

export const teleportAssets =  {
    name: 'PolkadotXcm.teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.teleport_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const reserveTransferAssets =  {
    name: 'PolkadotXcm.reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
     * with all fees taken as needed from the asset.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
        })
    ),
}

export const execute =  {
    name: 'PolkadotXcm.execute',
    /**
     * Execute an XCM message from a local, signed, origin.
     * 
     * An event is deposited indicating whether `msg` could be executed completely or only
     * partially.
     * 
     * No more than `max_weight` will be used in its attempted execution. If this is less than the
     * maximum amount of weight that the message could take to be executed, then no execution
     * attempt will be made.
     * 
     * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
     * to completion; only that *some* of it was executed.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.execute',
        sts.struct({
            message: matrixEnjinV603.Type_353,
            maxWeight: matrixEnjinV603.Weight,
        })
    ),
}

export const forceXcmVersion =  {
    name: 'PolkadotXcm.force_xcm_version',
    /**
     * Extoll that a particular destination can be communicated with through a particular
     * version of XCM.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The destination that is being described.
     * - `xcm_version`: The latest version of XCM that `location` supports.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_xcm_version',
        sts.struct({
            location: matrixEnjinV603.V3MultiLocation,
            xcmVersion: sts.number(),
        })
    ),
}

export const forceDefaultXcmVersion =  {
    name: 'PolkadotXcm.force_default_xcm_version',
    /**
     * Set a safe XCM version (the version that XCM should be encoded with if the most recent
     * version a destination can accept is unknown).
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_default_xcm_version',
        sts.struct({
            maybeXcmVersion: sts.option(() => sts.number()),
        })
    ),
}

export const forceSubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_subscribe_version_notify',
    /**
     * Ask a location to notify us regarding their XCM version and any changes to it.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we should subscribe for XCM version notifications.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_subscribe_version_notify',
        sts.struct({
            location: matrixEnjinV603.VersionedMultiLocation,
        })
    ),
}

export const forceUnsubscribeVersionNotify =  {
    name: 'PolkadotXcm.force_unsubscribe_version_notify',
    /**
     * Require that a particular destination should no longer notify us regarding any XCM
     * version changes.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `location`: The location to which we are currently subscribed for XCM version
     *   notifications which we no longer desire.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_unsubscribe_version_notify',
        sts.struct({
            location: matrixEnjinV603.VersionedMultiLocation,
        })
    ),
}

export const limitedReserveTransferAssets =  {
    name: 'PolkadotXcm.limited_reserve_transfer_assets',
    /**
     * Transfer some assets from the local chain to the sovereign account of a destination
     * chain and forward a notification XCM.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
     *   `dest` side.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.limited_reserve_transfer_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const limitedTeleportAssets =  {
    name: 'PolkadotXcm.limited_teleport_assets',
    /**
     * Teleport some assets from the local chain to some destination chain.
     * 
     * Fee payment on the destination side is made from the asset in the `assets` vector of
     * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
     * is needed than `weight_limit`, then the operation will fail and the assets send may be
     * at risk.
     * 
     * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
     * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
     *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
     * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
     *   an `AccountId32` value.
     * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
     *   `dest` side. May not be empty.
     * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
     *   fees.
     * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.limited_teleport_assets',
        sts.struct({
            dest: matrixEnjinV603.VersionedMultiLocation,
            beneficiary: matrixEnjinV603.VersionedMultiLocation,
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeAssetItem: sts.number(),
            weightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const forceSuspension =  {
    name: 'PolkadotXcm.force_suspension',
    /**
     * Set or unset the global suspension state of the XCM executor.
     * 
     * - `origin`: Must be an origin specified by AdminOrigin.
     * - `suspended`: `true` to suspend, `false` to resume.
     */
    matrixEnjinV603: new CallType(
        'PolkadotXcm.force_suspension',
        sts.struct({
            suspended: sts.boolean(),
        })
    ),
}
