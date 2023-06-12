import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionAccountCreatedEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensCollectionAccountCreated,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'

interface EventData {
    collectionId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionAccountCreatedEvent(ctx, event)

    if (data.isEfinityV3014) {
        return data.asEfinityV3014
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function collectionAccountCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionAccountCreated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    const account = await getOrCreateAccount(ctx, data.accountId)

    let collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
        where: { id: `${data.collectionId}-${u8aToHex(data.accountId)}` },
    })

    if (!collectionAccount) {
        collectionAccount = new CollectionAccount({
            id: `${data.collectionId}-${u8aToHex(data.accountId)}`,
            isFrozen: false,
            approvals: null,
            accountCount: 0,
            account,
            collection,
            createdAt: new Date(block.timestamp),
            updatedAt: new Date(block.timestamp),
        })
        await ctx.store.insert(CollectionAccount, collectionAccount as any)
    }

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionAccountCreated({
            collectionId: data.collectionId,
            account: account.id,
        }),
    })
}
