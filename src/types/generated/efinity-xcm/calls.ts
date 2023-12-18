import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'

export const transferToParachain =  {
    name: 'EfinityXcm.transfer_to_parachain',
    /**
     * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
     * 
     * Note: EFI needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive EFI in destination parachain
     * - `amount`: amount of EFI to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    v500: new CallType(
        'EfinityXcm.transfer_to_parachain',
        sts.struct({
            paraId: v500.ParachainId,
            beneficiary: v500.Account,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const transferAssetToParachain =  {
    name: 'EfinityXcm.transfer_asset_to_parachain',
    /**
     * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
     * 
     * Note: `asset` needs to be registered as foreign token in destination parachain
     * 
     * - `para_id`: destination parachain
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `asset`: asset to transfer
     * - `amount`: amount of `asset` to transfer
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     *   `None`
     * 
     * # Errors
     * 
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     * - [`Error::NotTransferable`]: A corresponding multilocation could not be converted for
     *   the asset.
     */
    v500: new CallType(
        'EfinityXcm.transfer_asset_to_parachain',
        sts.struct({
            paraId: v500.ParachainId,
            beneficiary: v500.Account,
            currencyId: v500.AssetId,
            amount: sts.bigint(),
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const transferAssetWithFee =  {
    name: 'EfinityXcm.transfer_asset_with_fee',
    /**
     * `origin` transfers `asset` to `beneficiary` at `parachain` using `fee_asset` for
     * the fee. This allows the transfer of custom assets like a non-fungible which
     * cannot be used to pay fees.
     * 
     * Note: each [`MultiAsset`] must be registered as a foreign asset at the destination
     * parachain.
     * 
     * - `asset`: asset to transfer
     * - `fee_asset`: asset to be used as fee
     * - `beneficiary`: account to receive `asset` in destination parachain
     * - `para_id`: destination parachain
     * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
     * 
     * # Errors
     * - [`Error::InvalidAddress`]: `beneficiary` is invalid, i.e could not be converted to
     *   [`MultiLocation`]
     */
    v500: new CallType(
        'EfinityXcm.transfer_asset_with_fee',
        sts.struct({
            assetPair: v500.CurrencyIdAmountPair,
            feePair: v500.CurrencyIdAmountPair,
            paraId: v500.ParachainId,
            beneficiary: v500.Account,
            destWeight: sts.option(() => sts.bigint()),
        })
    ),
}

export const forceSetMinimumWeight =  {
    name: 'EfinityXcm.force_set_minimum_weight',
    /**
     * Update xcm fees amount to be used in xcm.Withdraw message
     */
    v500: new CallType(
        'EfinityXcm.force_set_minimum_weight',
        sts.struct({
            xcmCall: v500.XcmOperation,
            xcmWeightFeeMisc: v500.MinimumWeightFeePair,
        })
    ),
}
