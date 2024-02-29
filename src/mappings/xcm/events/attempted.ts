import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { hexToU8a } from '@polkadot/util'
import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { Event as EventModel, Extrinsic, TeleportBalanceWithdrawn } from '../../../model'
import { Call } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import {
    FuelTanksDispatchAndTouchCall,
    FuelTanksDispatchCall,
    PolkadotXcmLimitedReserveTransferAssetsCall,
    PolkadotXcmLimitedTeleportAssetsCall,
    PolkadotXcmTeleportAssetsCall,
} from '../../../types/generated/calls'
import config from '../../../config'

async function getCallData(ctx: CommonContext, call: Call) {
    if (call.name === 'PolkadotXcm.limited_teleport_assets') {
        const data = new PolkadotXcmLimitedTeleportAssetsCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    if (call.name === 'PolkadotXcm.teleport_assets') {
        const data = new PolkadotXcmTeleportAssetsCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    if (call.name === 'PolkadotXcm.limited_reserve_transfer_assets') {
        const data = new PolkadotXcmLimitedReserveTransferAssetsCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            return data.asMatrixEnjinV603
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    if (call.name === 'FuelTanks.dispatch_and_touch' || call.name === 'FuelTanks.dispatch') {
        const data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall =
            call.name === 'FuelTanks.dispatch'
                ? new FuelTanksDispatchCall(ctx, call)
                : new FuelTanksDispatchAndTouchCall(ctx, call)

        let callData: any = null

        if (data.isMatrixEnjinV1004) {
            callData = data.asMatrixEnjinV1004
        }

        if (data.isMatrixEnjinV1003) {
            callData = data.asMatrixEnjinV1003
        }

        if (data.isMatrixEnjinV1000) {
            callData = data.asMatrixEnjinV1000
        }

        if (data.isMatrixEnjinV603) {
            callData = data.asMatrixEnjinV603
        }

        if (data.isV1004) {
            callData = data.asV1004
        }

        if (data.isV1003) {
            callData = data.asV1003
        }

        if (data.isV1000) {
            callData = data.asV1000
        }

        if (data.isV604) {
            callData = data.asV604
        }

        if (data.isV602) {
            callData = data.asV602
        }

        if (data.isV601) {
            callData = data.asV601
        }

        if (data.isV600) {
            callData = data.asV600
        }

        if (data.isV500) {
            callData = data.asV500
        }

        if (
            callData?.call.__kind === 'PolkadotXcm' &&
            callData?.call.value.__kind in ['teleport_assets', 'limited_teleport_assets']
        ) {
            return callData!.call.value
        }

        return undefined
    }

    throw new UnsupportedCallError(call.name)
}

export async function attempted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'PolkadotXcm.Attempted', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const callData = await getCallData(ctx, item.event.call)
    if (!callData || !('dest' in callData) || !('beneficiary' in callData) || !('assets' in callData)) {
        return new EventModel({
            id: item.event.id,
            extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
            data: null,
        })
    }
    let destination: string | null = null
    let beneficiary: Uint8Array | null = null
    let amount: bigint | null = null

    const destInterior = callData.dest.value.interior
    const beneficiaryInterior = callData.beneficiary.value.interior
    const assetInterior = callData.assets.value.at(0)

    if (destInterior.__kind === 'Here') {
        destination = config.chainName.startsWith('canary') ? 'canary-relaychain' : 'enjin-relaychain'
    }

    if (beneficiaryInterior.__kind === 'X1' && beneficiaryInterior.value.__kind === 'AccountId32') {
        beneficiary = beneficiaryInterior.value.id
    }

    if (
        assetInterior &&
        assetInterior.fun.__kind === 'Fungible' &&
        assetInterior.id.__kind === 'Concrete' &&
        assetInterior.id.value.interior.__kind === 'Here'
    ) {
        amount = assetInterior.fun.value
    }

    if (destination === null || beneficiary === null || amount === null) {
        return undefined
    }

    const account = await getOrCreateAccount(ctx, hexToU8a(item.event.extrinsic.signature?.address.value))
    const beneficiaryAccount = await getOrCreateAccount(ctx, beneficiary)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new TeleportBalanceWithdrawn({
            beneficiary: beneficiaryAccount.id,
            destination,
            amount,
            account: account.id,
        }),
    })
}
