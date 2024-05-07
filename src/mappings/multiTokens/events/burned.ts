import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensBurned,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { computeTraits } from '../../../jobs/compute-traits'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensBurnedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Burned', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>,
    token: Token | null
): [EventModel, AccountTokenEvent] | undefined | EventModel {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            account: u8aToHex(data.accountId),
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token,
            from: new Account({ id: u8aToHex(data.accountId) }),
            event,
        }),
    ]
}

export async function burned(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Burned', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | undefined | EventModel> {
    const data = getEventData(ctx, item.event)
    if (!data || data.amount === 0n) return undefined

    const address = u8aToHex(data.accountId)

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        await getOrCreateAccount(ctx, data.accountId)
        return getEvent(item, data, token)
    }

    const tokenAccount = await ctx.store.findOne(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.totalBalance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else {
        throwError(`[Burned] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`, 'log')
    }

    if (token) {
        token.supply -= data.amount
        computeTraits(data.collectionId.toString())
        await ctx.store.save(token)
        syncCollectionStats(data.collectionId.toString())
    } else {
        throwError(`[Burned] We have not found token ${data.collectionId}-${data.tokenId}.`, 'log')
    }

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                account: u8aToHex(data.accountId),
                amount: data.amount,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, token)
}
