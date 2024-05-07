import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensMintedEvent } from '../../../types/generated/events'
import {
    Account,
    AccountTokenEvent,
    Event as EventModel,
    Extrinsic,
    MultiTokensMinted,
    Token,
    TokenAccount,
} from '../../../model'
import { isNonFungible } from '../utils/helpers'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { computeTraits } from '../../../jobs/compute-traits'
import { getOrCreateAccount } from '../../util/entities'
import { syncCollectionStats } from '../../../jobs/collection-stats'
import { Sns } from '../../../common/sns'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    recipient: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensMintedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, tokenId, issuer, recipient, amount } = data.asMatrixEnjinV603
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, recipient, amount }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), recipient, amount }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Minted', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>,
    token: Token | null
): [EventModel, AccountTokenEvent] | EventModel | undefined {
    const event = new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensMinted({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            token: `${data.collectionId}-${data.tokenId}`,
            issuer: u8aToHex(data.issuer),
            recipient: u8aToHex(data.recipient),
            amount: data.amount,
        }),
    })

    return [
        event,
        new AccountTokenEvent({
            id: item.event.id,
            token,
            from: new Account({ id: u8aToHex(data.issuer) }),
            to: new Account({ id: u8aToHex(data.recipient) }),
            event,
        }),
    ]
}

export async function minted(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Minted', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<[EventModel, AccountTokenEvent] | EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const promises: Promise<any>[] = []

    const token = await ctx.store.findOne(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })

    if (skipSave) {
        await Promise.all([getOrCreateAccount(ctx, data.recipient), getOrCreateAccount(ctx, data.issuer)])
        return getEvent(item, data, token)
    }

    if (!token) {
        throwError(`[Minted] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
        return getEvent(item, data, token)
    }

    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    promises.push(ctx.store.save(token))

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${u8aToHex(data.recipient)}-${data.collectionId}-${data.tokenId}` },
    })

    if (!tokenAccount) {
        throwError(
            `[Minted] We have not found token account ${u8aToHex(data.recipient)}-${data.collectionId}-${data.tokenId}.`,
            'fatal'
        )

        await Promise.all(promises)
        return getEvent(item, data, token)
    }

    tokenAccount.balance += data.amount
    tokenAccount.totalBalance += data.amount
    tokenAccount.updatedAt = new Date(block.timestamp)
    promises.push(ctx.store.save(tokenAccount))

    await Promise.all(promises)

    computeTraits(data.collectionId.toString())
    syncCollectionStats(data.collectionId.toString())

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                token: `${data.collectionId}-${data.tokenId}`,
                issuer: u8aToHex(data.issuer),
                recipient: u8aToHex(data.recipient),
                amount: data.amount,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data, token)
}
