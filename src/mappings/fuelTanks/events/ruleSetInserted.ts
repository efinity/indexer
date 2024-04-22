import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { events, calls } from '../../../types/generated'
import { Event as EventModel, FuelTank, FuelTankRuleSet, PermittedExtrinsics } from '../../../model'
import { CommonContext, EventItem, BlockHeader, CallItem } from '../../types/contexts'
import { rulesToMap } from '../common'

function getEventData(event: EventItem) {
    if (events.fuelTanks.ruleSetInserted.matrixEnjinV603.is(event)) {
        return events.fuelTanks.ruleSetInserted.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.fuelTanks.ruleSetInserted.name)
}

function getCallData(call: CallItem) {
    if (calls.fuelTanks.insertRuleSet.matrixEnjinV1005.is(call)) {
        return calls.fuelTanks.insertRuleSet.matrixEnjinV1005.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.matrixEnjinV1004.is(call)) {
        return calls.fuelTanks.insertRuleSet.matrixEnjinV1004.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.matrixEnjinV1003.is(call)) {
        return calls.fuelTanks.insertRuleSet.matrixEnjinV1003.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.matrixEnjinV1000.is(call)) {
        return calls.fuelTanks.insertRuleSet.matrixEnjinV1000.decode(call)
    }

    if (calls.fuelTanks.insertRuleSet.matrixEnjinV603.is(call)) {
        return calls.fuelTanks.insertRuleSet.matrixEnjinV603.decode(call)
    }

    throw new UnknownVersionError(calls.fuelTanks.insertRuleSet.name)
}

export async function ruleSetInserted(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.call) throw new CallNotDefinedError()

    const eventData = getEventData(item)

    const callData = getCallData(item.call)
    if (!eventData || !callData) return undefined

    const { tankId } = eventData
    const ruleSetId = `${tankId}-${eventData.ruleSetId}`

    const [pE, rS] = await Promise.all([
        ctx.store.find(PermittedExtrinsics, { where: { ruleSet: { id: ruleSetId } } }),
        ctx.store.find(FuelTankRuleSet, { where: { id: ruleSetId } }),
    ])

    await Promise.all([ctx.store.remove(pE), ctx.store.remove(rS)])

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
    } = rulesToMap(ruleSetId, callData.rules)

    const ruleSet = new FuelTankRuleSet({
        id: ruleSetId,
        index: eventData.ruleSetId,
        isPermittedExtrinsicsEmpty: permittedExtrinsics === undefined || permittedExtrinsics.length === 0,
        isPermittedExtrinsicsNull: permittedExtrinsics === undefined,
        tank: new FuelTank({ id: tankId }),
        isFrozen: false,
        whitelistedCallers,
        whitelistedCollections,
        whitelistedPallets,
        maxFuelBurnPerTransaction,
        userFuelBudget,
        tankFuelBudget,
        requireToken,
        permittedCalls,
    })
    await ctx.store.save(ruleSet)

    if (permittedExtrinsics && permittedExtrinsics.length > 0) {
        ctx.store.save(permittedExtrinsics)
    }

    return undefined
}
