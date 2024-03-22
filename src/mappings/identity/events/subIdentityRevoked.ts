import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { IdentitySubIdentityRevokedEvent } from '../../../types/generated/events'
import { Event as EventModel, Identity } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new IdentitySubIdentityRevokedEvent(ctx, event)

    if (data.isMatrixEnjinV1000) {
        return data.asMatrixEnjinV1000
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function subIdentityRevoked(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Identity.SubIdentityRevoked', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)

    const account = await getOrCreateAccount(ctx, eventData.sub)
    const identity = await ctx.store.findOneOrFail(Identity, {
        where: { id: account.id },
        relations: {
            info: true,
        },
    })

    if (!identity.isSub) {
        identity.super = null
        identity.name = identity.info.display || identity.info.legal
        await ctx.store.save(identity)
    } else {
        await ctx.store.remove(identity)
    }

    return undefined
}
