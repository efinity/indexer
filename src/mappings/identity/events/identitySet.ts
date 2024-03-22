import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex, u8aToString } from '@polkadot/util'
import { CallNotDefinedError, UnknownVersionError } from '../../../common/errors'
import { IdentityIdentitySetEvent } from '../../../types/generated/events'
import { Event as EventModel, Identity, JudgementType, Registration } from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { IdentitySetIdentityCall } from '../../../types/generated/calls'
import { Data } from '../../../types/generated/v1003'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentityIdentitySetEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCallData(ctx: CommonContext, call: Call) {
    const data = new IdentitySetIdentityCall(ctx, call)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

const dataToValue = (raw: Data) => {
    if (raw.__kind !== 'None') {
        return u8aToString(raw.value)
    }

    return null
}

export async function identitySet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.IdentitySet', { event: { args: true; call: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    if (!item.event.call) throw new CallNotDefinedError()

    const eventData = getEventData(ctx, item.event)
    const callData = getCallData(ctx, item.event.call)

    const account = await getOrCreateAccount(ctx, eventData.who)
    let additional: { key: string | null; value: string | null }[] = []
    if (callData.info.additional.length) {
        additional = callData.info.additional.map((i) => {
            return {
                key: dataToValue(i[0]),
                value: dataToValue(i[1]),
            }
        })
    }

    const registeration = new Registration({
        id: account.id,
        account,
        additional,
        display: dataToValue(callData.info.display),
        legal: dataToValue(callData.info.legal),
        web: dataToValue(callData.info.web),
        riot: dataToValue(callData.info.riot),
        email: dataToValue(callData.info.email),
        twitter: dataToValue(callData.info.twitter),
        image: dataToValue(callData.info.image),
        pgpFingerprint: u8aToHex(callData.info.pgpFingerprint),
        currentJudgement: JudgementType.Unknown,
        judgements: [],
        deposit: 0n,
        createdAt: new Date(block.timestamp),
    })

    const identity = new Identity({
        id: account.id,
        account,
        isSub: false,
        name: dataToValue(callData.info.display) || dataToValue(callData.info.legal),
        info: registeration,
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(registeration)
    await ctx.store.save(identity)

    return undefined
}
