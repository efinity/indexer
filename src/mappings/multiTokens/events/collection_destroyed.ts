import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionDestroyedEvent } from '../../../types/generated/events'
import {
    Attribute,
    Collection,
    Event as EventModel,
    Extrinsic,
    MultiTokensCollectionDestroyed,
    RoyaltyCurrency,
    Trait,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { Sns } from '../../../common/sns'

interface EventData {
    collectionId: bigint
    caller: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionDestroyedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, caller } = data.asMatrixEnjinV603
        return { collectionId, caller }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.CollectionDestroyed', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionDestroyed({
            collectionId: data.collectionId,
            caller: u8aToHex(data.caller),
        }),
    })
}

export async function collectionDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionDestroyed', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collectionId = data.collectionId.toString()

    await Promise.all([
        ctx.store.delete(Trait, { collection: { id: collectionId } }),
        ctx.store.delete(RoyaltyCurrency, { collection: { id: collectionId } }),
        ctx.store.delete(Attribute, { collection: { id: collectionId } }),
    ])

    await ctx.store.delete(Collection, { id: collectionId })

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                caller: u8aToHex(data.caller),
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
