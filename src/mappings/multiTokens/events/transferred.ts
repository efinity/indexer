import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
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

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTransferredEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Transferred', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
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
            token: new Token({ id: event.tokenId as string }),
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

    if (skipSave) return getEvent(item, data)

    const fromAddress = u8aToHex(data.from)
    const toAddress = u8aToHex(data.to)

    const [fromTokenAccount, toTokenAccount] = await Promise.all([
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true, token: true },
        }),
        ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true, token: true },
        }),
    ])

    if (fromTokenAccount) {
        fromTokenAccount.balance -= data.amount
        fromTokenAccount.updatedAt = new Date(block.timestamp)
        ctx.store.save(fromTokenAccount)

        const { account, token } = fromTokenAccount
        account.tokenValues -= data.amount * (token.unitPrice ?? 10_000_000_000_000n)
        ctx.store.save(account)
    }

    if (toTokenAccount) {
        toTokenAccount.balance += data.amount
        toTokenAccount.updatedAt = new Date(block.timestamp)
        ctx.store.save(toTokenAccount)

        const { account, token } = toTokenAccount
        account.tokenValues += data.amount * (token.unitPrice ?? 10_000_000_000_000n)
        ctx.store.save(account)
    }

    return getEvent(item, data)
}
