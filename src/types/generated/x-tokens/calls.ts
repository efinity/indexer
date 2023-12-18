import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV603 from '../matrixEnjinV603'

export const transfer =  {
    name: 'XTokens.transfer',
    /**
     * Transfer native currencies.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer',
        sts.struct({
            currencyId: matrixEnjinV603.AssetId,
            amount: sts.bigint(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const transferMultiasset =  {
    name: 'XTokens.transfer_multiasset',
    /**
     * Transfer `MultiAsset`.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer_multiasset',
        sts.struct({
            asset: matrixEnjinV603.VersionedMultiAsset,
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const transferWithFee =  {
    name: 'XTokens.transfer_with_fee',
    /**
     * Transfer native currencies specifying the fee and amount as
     * separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the amount to be spent to pay for execution in destination
     * chain. Both fee and amount will be subtracted form the callers
     * balance.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer_with_fee',
        sts.struct({
            currencyId: matrixEnjinV603.AssetId,
            amount: sts.bigint(),
            fee: sts.bigint(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const transferMultiassetWithFee =  {
    name: 'XTokens.transfer_multiasset_with_fee',
    /**
     * Transfer `MultiAsset` specifying the fee and amount as separate.
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee` is the multiasset to be spent to pay for execution in
     * destination chain. Both fee and amount will be subtracted form the
     * callers balance For now we only accept fee and asset having the same
     * `MultiLocation` id.
     * 
     * If `fee` is not high enough to cover for the execution costs in the
     * destination chain, then the assets will be trapped in the
     * destination chain
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer_multiasset_with_fee',
        sts.struct({
            asset: matrixEnjinV603.VersionedMultiAsset,
            fee: matrixEnjinV603.VersionedMultiAsset,
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const transferMulticurrencies =  {
    name: 'XTokens.transfer_multicurrencies',
    /**
     * Transfer several currencies specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the currencies tuple that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer_multicurrencies',
        sts.struct({
            currencies: sts.array(() => sts.tuple(() => [matrixEnjinV603.AssetId, sts.bigint()])),
            feeItem: sts.number(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}

export const transferMultiassets =  {
    name: 'XTokens.transfer_multiassets',
    /**
     * Transfer several `MultiAsset` specifying the item to be used as fee
     * 
     * `dest_weight_limit` is the weight for XCM execution on the dest
     * chain, and it would be charged from the transferred assets. If set
     * below requirements, the execution may fail and assets wouldn't be
     * received.
     * 
     * `fee_item` is index of the MultiAssets that we want to use for
     * payment
     * 
     * It's a no-op if any error on local XCM execution or message sending.
     * Note sending assets out per se doesn't guarantee they would be
     * received. Receiving depends on if the XCM message could be delivered
     * by the network, and if the receiving chain would handle
     * messages correctly.
     */
    matrixEnjinV603: new CallType(
        'XTokens.transfer_multiassets',
        sts.struct({
            assets: matrixEnjinV603.VersionedMultiAssets,
            feeItem: sts.number(),
            dest: matrixEnjinV603.VersionedMultiLocation,
            destWeightLimit: matrixEnjinV603.V3WeightLimit,
        })
    ),
}
