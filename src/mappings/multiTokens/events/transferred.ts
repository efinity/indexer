import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensTransferredEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensTransferred,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTransferredEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Transferred', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>,
    token: Token | null
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTransferred({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            operator: u8aToHex(data.operator),
            from: u8aToHex(data.from),
            to: u8aToHex(data.to),
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            from: new Account({ id: u8aToHex(data.from) }),
            to: new Account({ id: u8aToHex(data.to) }),
            event,
            token,
        }),
    ]
}

export async function transferred(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Transferred', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        getOrCreateAccount(ctx, data.from)
        getOrCreateAccount(ctx, data.to)
        return getEvent(item, data, token)
    }

    if (!token) {
        throwError(`[Transferred] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data, token)
    }

    const fromAddress = u8aToHex(data.from)
    const toAddress = u8aToHex(data.to)

    const [fromTokenAccount, toTokenAccount] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
        }),
    ])

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.totalBalance -= data.amount
        fromTokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(fromTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${fromAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(toTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${toAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    syncCollectionStats(data.collectionId.toString())

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                operator: u8aToHex(data.operator),
                from: u8aToHex(data.from),
                to: u8aToHex(data.to),
                amount: data.amount,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, token)
}
