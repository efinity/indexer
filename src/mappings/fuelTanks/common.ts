import { u8aToHex } from '@polkadot/util'
import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../types/generated/v602'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV601 } from '../../types/generated/v601'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV600 } from '../../types/generated/v600'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1000 } from '../../types/generated/v1000'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1003 } from '../../types/generated/v1003'
import {
    MaxFuelBurnPerTransaction,
    UserFuelBudget,
    TankFuelBudget,
    RequireToken,
    PermittedExtrinsics,
    FuelTankRuleSet,
} from '../../model'
import { Call } from '../../types/generated/support'
import { CommonContext } from '../types/contexts'
import { UnknownVersionError } from '../../common/errors'

export function rulesToMap(
    ruleId: string,
    rules:
        | DispatchRuleDescriptor[]
        | DispatchRuleDescriptorV602[]
        | DispatchRuleDescriptorV601[]
        | DispatchRuleDescriptorV600[]
        | DispatchRuleDescriptorv1000[]
        | DispatchRuleDescriptorv1003[]
) {
    let whitelistedCallers: string[] | undefined
    let whitelistedCollections: string[] | undefined
    let maxFuelBurnPerTransaction: MaxFuelBurnPerTransaction | undefined
    let userFuelBudget: UserFuelBudget | undefined
    let tankFuelBudget: TankFuelBudget | undefined
    let requireToken: RequireToken | undefined
    let permittedCalls: string[] | undefined
    let permittedExtrinsics: PermittedExtrinsics[] | undefined
    let whitelistedPallets: string[] | undefined

    rules.forEach((rule, index) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = rule.value.map((account) => u8aToHex(account))
        } else if (rule.__kind === 'WhitelistedCollections') {
            whitelistedCollections = rule.value.map((c) => c.toString())
        } else if (rule.__kind === 'MaxFuelBurnPerTransaction') {
            maxFuelBurnPerTransaction = new MaxFuelBurnPerTransaction({ value: rule.value })
        } else if (rule.__kind === 'UserFuelBudget') {
            userFuelBudget = new UserFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
        } else if (rule.__kind === 'TankFuelBudget') {
            tankFuelBudget = new TankFuelBudget({ amount: rule.value.amount, resetPeriod: BigInt(rule.value.resetPeriod) })
        } else if (rule.__kind === 'RequireToken') {
            requireToken = new RequireToken({
                tokenId: rule.value.tokenId,
                collectionId: rule.value.collectionId,
            })
        } else if (rule.__kind === 'PermittedCalls') {
            permittedCalls = rule.value.map((call) => u8aToHex(call))
        } else if (rule.__kind === 'PermittedExtrinsics') {
            permittedExtrinsics = rule.value.map(
                (r, i) =>
                    new PermittedExtrinsics({
                        id: `${ruleId}-${index}-${i}`,
                        ruleSet: new FuelTankRuleSet({ id: ruleId }),
                        palletName: r.__kind,
                        extrinsicName: r.value.__kind,
                    })
            )
        } else if (rule.__kind === 'WhitelistedPallets') {
            whitelistedPallets = rule.value.map((p) => p.toString())
        }
    })

    return {
        whitelistedCallers,
        whitelistedCollections,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
        whitelistedPallets,
    }
}

export function getTankDataFromCall(ctx: CommonContext, call: Call) {
    let data: FuelTanksDispatchCall | FuelTanksDispatchAndTouchCall
    if (call.name === 'FuelTanks.dispatch') {
        data = new FuelTanksDispatchCall(ctx, call)
    } else {
        data = new FuelTanksDispatchAndTouchCall(ctx, call)
    }

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV1003) {
        return data.asV1003
    }

    if (data.isV1000) {
        return data.asV1000
    }

    if (data.isV604) {
        return data.asV604
    }

    if (data.isV602) {
        return data.asV602
    }

    if (data.isV601) {
        return data.asV601
    }
    if (data.isV600) {
        return data.asV600
    }

    if (data.isV500) {
        return data.asV500
    }

    throw new UnknownVersionError(data.constructor.name)
}
