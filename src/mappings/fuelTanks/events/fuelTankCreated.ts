import { hexToString } from '@polkadot/util'
import { randomBytes } from 'crypto'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { calls, events } from '../../../types/generated'
import {
    CoveragePolicy,
    Event as EventModel,
    Extrinsic,
    FuelTank,
    FuelTankAccountRules,
    FuelTankCreated,
    FuelTankRuleSet,
    FuelTankUserAccountManagement,
    RequireToken,
    WhitelistedCallers,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem, CallItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { rulesToMap } from '../common'
import { safeJsonString } from '../../../common/tools'

function getEventData(event: EventItem) {
    if (events.fuelTanks.fuelTankCreated.matrixEnjinV603.is(event)) {
        return events.fuelTanks.fuelTankCreated.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.fuelTankCreated.name)
}

function getCallData(ctx: CommonContext, call: CallItem) {
    if (call.name === 'FuelTanks.force_create_fuel_tank') {
        if (calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1005.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1004.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1003.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.matrixEnjinV1000.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.matrixEnjinV603.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1011.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1011.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1010.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1010.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1005.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1005.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1004.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1004.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1003.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1003.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v1000.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v1000.decode(call)
        }

        if (calls.fuelTanks.forceCreateFuelTank.v604.is(call)) {
            return calls.fuelTanks.forceCreateFuelTank.v604.decode(call)
        }

        throw new UnknownVersionError(calls.fuelTanks.forceCreateFuelTank.name)
    }

    if (calls.fuelTanks.createFuelTank.matrixEnjinV1005.is(call)) {
        return calls.fuelTanks.createFuelTank.matrixEnjinV1005.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.matrixEnjinV1004.is(call)) {
        return calls.fuelTanks.createFuelTank.matrixEnjinV1004.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.matrixEnjinV1003.is(call)) {
        return calls.fuelTanks.createFuelTank.matrixEnjinV1003.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.matrixEnjinV1000.is(call)) {
        return calls.fuelTanks.createFuelTank.matrixEnjinV1000.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.matrixEnjinV603.is(call)) {
        return calls.fuelTanks.createFuelTank.matrixEnjinV603.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1011.is(call)) {
        return calls.fuelTanks.createFuelTank.v1011.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1010.is(call)) {
        return calls.fuelTanks.createFuelTank.v1010.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1005.is(call)) {
        return calls.fuelTanks.createFuelTank.v1005.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1004.is(call)) {
        return calls.fuelTanks.createFuelTank.v1004.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1003.is(call)) {
        return calls.fuelTanks.createFuelTank.v1003.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v1000.is(call)) {
        return calls.fuelTanks.createFuelTank.v1000.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v604.is(call)) {
        return calls.fuelTanks.createFuelTank.v604.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v602.is(call)) {
        return calls.fuelTanks.createFuelTank.v602.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v601.is(call)) {
        return calls.fuelTanks.createFuelTank.v601.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v600.is(call)) {
        return calls.fuelTanks.createFuelTank.v600.decode(call)
    }

    if (calls.fuelTanks.createFuelTank.v500.is(call)) {
        return calls.fuelTanks.createFuelTank.v500.decode(call)
    }

    throw new UnknownVersionError(calls.fuelTanks.createFuelTank.name)
}

export async function fuelTankCreated(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)

    const callData = getCallData(ctx, item.call)

    if (!eventData || !callData) return undefined

    const [tankAccount, owner] = await Promise.all([
        getOrCreateAccount(ctx, eventData.tankId),
        getOrCreateAccount(ctx, eventData.owner),
    ])

    let userAccountManagement: FuelTankUserAccountManagement | undefined
    if (callData.descriptor.userAccountManagement) {
        userAccountManagement = new FuelTankUserAccountManagement({
            tankReservesAccountCreationDeposit: callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
            tankReservesExistentialDeposit:
                'tankReservesExistentialDeposit' in callData.descriptor.userAccountManagement
                    ? callData.descriptor.userAccountManagement.tankReservesExistentialDeposit
                    : callData.descriptor.userAccountManagement.tankReservesAccountCreationDeposit,
        })
    }

    const fuelTank = new FuelTank({
        id: tankAccount.id,
        tankAccount,
        name: hexToString(eventData.name),
        owner,
        isFrozen: false,
        accountCount: 0,
        providesDeposit: 'providesDeposit' in callData.descriptor ? callData.descriptor.providesDeposit : false,
        coveragePolicy:
            'coveragePolicy' in callData.descriptor ? CoveragePolicy[callData.descriptor.coveragePolicy.__kind] : null,
        userAccountManagement,
    })

    await ctx.store.save(fuelTank)

    if (callData.descriptor.accountRules.length > 0) {
        callData.descriptor.accountRules.forEach(async (rule) => {
            let accountRule: WhitelistedCallers | RequireToken
            if (rule.__kind === 'WhitelistedCallers') {
                accountRule = new WhitelistedCallers({
                    value: rule.value.map((account) => account),
                })
            } else if (rule.__kind === 'RequireToken') {
                accountRule = new RequireToken({
                    tokenId: rule.value.tokenId,
                    collectionId: rule.value.collectionId,
                })
            } else {
                throw new Error(`Unknown rule type :${safeJsonString(rule)}`)
            }

            const accountRuleModel = new FuelTankAccountRules({
                tank: fuelTank,
                rule: accountRule,
                id: `${fuelTank.id}-${accountRule.constructor.name}-${randomBytes(5).toString('hex')}`,
            })

            ctx.store.save(accountRuleModel)
        })
    }

    if (callData.descriptor.ruleSets.length > 0) {
        callData.descriptor.ruleSets.forEach(async (ruleSet) => {
            const index = ruleSet[0]
            let rules = ruleSet[1] as any

            if (!Array.isArray(rules)) {
                rules = rules.rules
            }

            const {
                whitelistedCallers,
                whitelistedCollections,
                whitelistedPallets,
                maxFuelBurnPerTransaction,
                userFuelBudget,
                tankFuelBudget,
                requireToken,
                permittedCalls,
                permittedExtrinsics,
            } = rulesToMap(`${fuelTank.id}-${index}`, rules)

            const ruleSetModel = new FuelTankRuleSet({
                id: `${fuelTank.id}-${index}`,
                tank: fuelTank,
                index,
                isFrozen: false,
                isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
                isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
                whitelistedCallers,
                whitelistedCollections,
                whitelistedPallets,
                maxFuelBurnPerTransaction,
                userFuelBudget,
                tankFuelBudget,
                requireToken,
                permittedCalls,
            })

            await ctx.store.save(ruleSetModel)

            if (permittedExtrinsics && permittedExtrinsics.length > 0) {
                ctx.store.save(permittedExtrinsics)
            }
        })
    }

    return new EventModel({
        id: item.id,
        name: FuelTankCreated.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new FuelTankCreated({
            tank: fuelTank.id,
            owner: owner.id,
            name: hexToString(eventData.name),
        }),
    })
}
