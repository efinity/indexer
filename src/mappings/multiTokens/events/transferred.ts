import { UnknownVersionError, throwError } from '../../../common/errors'
import { events } from '../../../types/generated'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensTransferred,
    Token,
    TokenAccount,
} from '../../../model'
import { CommonContext, BlockHeader, EventItem } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

function getEventData(event: EventItem) {
    if (events.multiTokens.transferred.matrixEnjinV603.is(event)) {
        return events.multiTokens.transferred.matrixEnjinV603.decode(event)
    }

    throw new UnknownVersionError(events.multiTokens.transferred.name)
}

function getEvent(
    item: EventItem,
    data: ReturnType<typeof getEventData>,
    token?: Token
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.id,
        name: MultiTokensTransferred.name,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTransferred({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            operator: data.operator,
            from: data.from,
            to: data.to,
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.id,
            from: new Account({ id: data.from }),
            to: new Account({ id: data.to }),
            event,
            token,
        }),
    ]
}

export async function transferred(
    ctx: CommonContext,
    block: BlockHeader,
    item: EventItem,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = getEventData(item)
    if (!data) return undefined

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.from), getOrCreateAccount(ctx, data.to)])

        return getEvent(item, data, token)
    }

    if (!token) {
        throwError(`[Transferred] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data, token)
    }

    const fromAddress = data.from
    const toAddress = data.to

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
        fromTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(fromTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${fromAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.totalBalance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp ?? 0)
        await ctx.store.save(toTokenAccount)
    } else {
        throwError(`[Transferred] We have not found token account ${toAddress}-${data.collectionId}-${data.tokenId}.`, 'fatal')
    }

    syncCollectionStats(data.collectionId.toString())

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                operator: data.operator,
                from: data.from,
                to: data.to,
                amount: data.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, token)
}
