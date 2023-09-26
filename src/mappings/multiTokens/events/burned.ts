import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
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
import { CollectionService } from '../../../job-handlers/collection-stats'
import { getOrCreateAccount } from '../../util/entities'

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
    token?: Token
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

    if (token) {
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

    return event
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

    if (skipSave) {
        getOrCreateAccount(ctx, data.accountId)
        return getEvent(item, data)
    }

    const [tokenAccount, token] = await Promise.all([
        ctx.store.findOne(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
            relations: { account: true },
        }),
        ctx.store.findOne(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        }),
    ])

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp)
        ctx.store.save(tokenAccount)
    }

    if (token) {
        token.supply -= data.amount

        if (token.metadata?.attributes) {
            computeTraits(data.collectionId.toString())
        }
        ctx.store.save(token)
        new CollectionService(ctx.store).sync(data.collectionId.toString())
    }

    if (tokenAccount && token) {
        const { account } = tokenAccount
        account.tokenValues -= data.amount * (token.unitPrice ?? 10_000_000_000_000n)
        ctx.store.save(account)
    }

    return getEvent(item, data)
}
