/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { throwError, UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionTransferredEvent } from '../../../types/generated/events'
import { Collection, Event as EventModel, Extrinsic, MultiTokensCollectionTransferred } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensCollectionTransferredEvent(ctx, event)

    if (data.isMatrixEnjinV1004) {
        const { collectionId, newOwner } = data.asMatrixEnjinV1004

        return {
            collectionId,
            owner: newOwner,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.CollectionTransferred', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionTransferred({
            collectionId: data.collectionId,
            owner: u8aToHex(data.owner),
        }),
    })
}

export async function collectionTransferred(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionTransferred', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionTransferred] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return getEvent(item, data)
    }

    collection.owner = await getOrCreateAccount(ctx, data.owner)

    await ctx.store.save(collection)

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                owner: u8aToHex(data.owner),
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
