import { DispatchRuleDescriptor } from '../../types/generated/matrixEnjinV603'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV602 } from '../../types/generated/v602'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV601 } from '../../types/generated/v601'
import { DispatchRuleDescriptor as DispatchRuleDescriptorV600 } from '../../types/generated/v600'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1000 } from '../../types/generated/v1000'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1003 } from '../../types/generated/v1003'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1004 } from '../../types/generated/v1004'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1005 } from '../../types/generated/v1005'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1010 } from '../../types/generated/v1010'
import { DispatchRuleDescriptor as DispatchRuleDescriptorv1011 } from '../../types/generated/v1011'

import {
    MaxFuelBurnPerTransaction,
    UserFuelBudget,
    TankFuelBudget,
    RequireToken,
    PermittedExtrinsics,
    FuelTankRuleSet,
} from '../../model'
import { CommonContext, CallItem } from '../types/contexts'
import { fuelTanks } from '../../types/generated/calls'
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
        | DispatchRuleDescriptorv1004[]
        | DispatchRuleDescriptorv1005[]
        | DispatchRuleDescriptorv1010[]
        | DispatchRuleDescriptorv1011[]
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
    let requireSignature: string | undefined

    rules.forEach((rule, index) => {
        if (rule.__kind === 'WhitelistedCallers') {
            whitelistedCallers = rule.value.map((account) => account)
        } else if (rule.__kind === 'WhitelistedCollections') {
            whitelistedCollections = rule.value.map((c) => c.toString())
        } else if (rule.__kind === 'WhitelistedPallets') {
            whitelistedPallets = rule.value.map((p) => `${p.__kind}:${p.value.__kind}`)
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
        } else if (rule.__kind === 'RequireSignature') {
            requireSignature = rule.value
        } else if (rule.__kind === 'PermittedCalls') {
            permittedCalls = rule.value.map((call) => call)
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
        }
    })

    return {
        whitelistedCallers,
        whitelistedCollections,
        whitelistedPallets,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
        permittedExtrinsics,
        requireSignature,
    }
}

export function getTankDataFromCall(ctx: CommonContext, call: CallItem) {
    if (call.name === 'FuelTanks.dispatch') {
        if (fuelTanks.dispatch.matrixEnjinV1005.is(call)) {
            return fuelTanks.dispatch.matrixEnjinV1005.decode(call)
        }

        if (fuelTanks.dispatch.matrixEnjinV1004.is(call)) {
            return fuelTanks.dispatch.matrixEnjinV1004.decode(call)
        }

        if (fuelTanks.dispatch.matrixEnjinV1003.is(call)) {
            return fuelTanks.dispatch.matrixEnjinV1003.decode(call)
        }

        if (fuelTanks.dispatch.matrixEnjinV1000.is(call)) {
            return fuelTanks.dispatch.matrixEnjinV1000.decode(call)
        }

        if (fuelTanks.dispatch.matrixEnjinV603.is(call)) {
            return fuelTanks.dispatch.matrixEnjinV603.decode(call)
        }

        if (fuelTanks.dispatch.v1011.is(call)) {
            return fuelTanks.dispatch.v1011.decode(call)
        }

        if (fuelTanks.dispatch.v1010.is(call)) {
            return fuelTanks.dispatch.v1010.decode(call)
        }

        if (fuelTanks.dispatch.v1005.is(call)) {
            return fuelTanks.dispatch.v1005.decode(call)
        }

        if (fuelTanks.dispatch.v1004.is(call)) {
            return fuelTanks.dispatch.v1004.decode(call)
        }

        if (fuelTanks.dispatch.v1003.is(call)) {
            return fuelTanks.dispatch.v1003.decode(call)
        }

        if (fuelTanks.dispatch.v1000.is(call)) {
            return fuelTanks.dispatch.v1000.decode(call)
        }

        if (fuelTanks.dispatch.v604.is(call)) {
            return fuelTanks.dispatch.v604.decode(call)
        }

        if (fuelTanks.dispatch.v602.is(call)) {
            return fuelTanks.dispatch.v602.decode(call)
        }

        if (fuelTanks.dispatch.v601.is(call)) {
            return fuelTanks.dispatch.v601.decode(call)
        }

        if (fuelTanks.dispatch.v600.is(call)) {
            return fuelTanks.dispatch.v600.decode(call)
        }

        if (fuelTanks.dispatch.v500.is(call)) {
            return fuelTanks.dispatch.v500.decode(call)
        }

        throw new UnknownVersionError(fuelTanks.dispatch.name)
    }

    if (fuelTanks.dispatchAndTouch.matrixEnjinV1005.is(call)) {
        return fuelTanks.dispatchAndTouch.matrixEnjinV1005.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.matrixEnjinV1004.is(call)) {
        return fuelTanks.dispatchAndTouch.matrixEnjinV1004.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.matrixEnjinV1003.is(call)) {
        return fuelTanks.dispatchAndTouch.matrixEnjinV1003.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.matrixEnjinV1000.is(call)) {
        return fuelTanks.dispatchAndTouch.matrixEnjinV1000.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.matrixEnjinV603.is(call)) {
        return fuelTanks.dispatchAndTouch.matrixEnjinV603.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1011.is(call)) {
        return fuelTanks.dispatchAndTouch.v1011.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1010.is(call)) {
        return fuelTanks.dispatchAndTouch.v1010.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1005.is(call)) {
        return fuelTanks.dispatchAndTouch.v1005.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1004.is(call)) {
        return fuelTanks.dispatchAndTouch.v1004.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1003.is(call)) {
        return fuelTanks.dispatchAndTouch.v1003.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v1000.is(call)) {
        return fuelTanks.dispatchAndTouch.v1000.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v604.is(call)) {
        return fuelTanks.dispatchAndTouch.v604.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v602.is(call)) {
        return fuelTanks.dispatchAndTouch.v602.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v601.is(call)) {
        return fuelTanks.dispatchAndTouch.v601.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v600.is(call)) {
        return fuelTanks.dispatchAndTouch.v600.decode(call)
    }

    if (fuelTanks.dispatchAndTouch.v500.is(call)) {
        return fuelTanks.dispatchAndTouch.v500.decode(call)
    }

    throw new UnknownVersionError(fuelTanks.dispatchAndTouch.name)
}
