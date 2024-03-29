import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensTokenAccountDestroyedEvent } from '../../../types/generated/events'
import { CollectionAccount, Event as EventModel, Extrinsic, MultiTokensTokenAccountDestroyed, TokenAccount } from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensTokenAccountDestroyedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.TokenAccountDestroyed', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensTokenAccountDestroyed({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            accountId: u8aToHex(data.accountId),
        }),
    })
}

export async function tokenAccountDestroyed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenAccountDestroyed', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)

    if (skipSave) return getEvent(item, data)

    const collectionAccount = await ctx.store.findOneBy<CollectionAccount>(CollectionAccount, {
        id: `${data.collectionId}-${u8aToHex(data.accountId)}`,
    })

    if (collectionAccount === null) {
        throwError(
            `[TokenAccountDestroyed] We have not found collection account ${data.collectionId}-${u8aToHex(data.accountId)}.`,
            'fatal'
        )

        return getEvent(item, data)
    }

    collectionAccount.accountCount -= 1
    await ctx.store.save(collectionAccount)

    const tokenAccount = await ctx.store.findOneBy<TokenAccount>(TokenAccount, {
        id: `${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}`,
    })

    if (tokenAccount === null) {
        throwError(
            `[TokenAccountDestroyed] We have not found token account ${u8aToHex(data.accountId)}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )
    }

    await ctx.store.remove(tokenAccount)

    return getEvent(item, data)
}
