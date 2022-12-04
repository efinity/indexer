import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import { Event as EventModel, MultiTokensBurned, Token, TokenAccount } from '../../../model'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { Approval } from '../../../types/generated/efinityV3'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    accountId: Uint8Array
    amount: bigint
}

interface StorageData {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensBurnedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, accountId, amount } = data.asEfinityV2
        return { collectionId, tokenId, accountId, amount }
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getStorageData(
    ctx: Context,
    block: SubstrateBlock,
    account: Uint8Array,
    collectionId: bigint,
    tokenId: bigint
): Promise<StorageData | undefined> {
    const storage = new MultiTokensTokenAccountsStorage(ctx, block)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV2) {
        const data = await storage.getAsEfinityV2(account, collectionId, tokenId)

        if (!data) return undefined

        return {
            balance: data.balance,
            reservedBalance: data.reserved,
            lockedBalance: 0n,
            namedReserves: data.namedReserves,
            locks: [],
            approvals: data.approvals,
            isFrozen: data.isFrozen,
        }
    }
    if (storage.isEfinityV3) {
        const data = await storage.getAsEfinityV3(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    }
    throw new UnknownVersionError(storage.constructor.name)
}

export async function burned(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Burned', { event: { args: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const address = u8aToHex(data.accountId)

    const token = await ctx.store.findOne<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
    })
    if (token) {
        token.supply -= data.amount
        await ctx.store.save(token)
    }

    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    if (tokenAccount) {
        tokenAccount.balance -= data.amount
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
        // new EventService(ctx, new Token({ id: `${data.collectionId}-${data.tokenId}` })).MultiTokenBurn(
        //     tokenAccount.account,
        //     data.amount
        // )
    }

    return new EventModel({
        id: item.event.id,
        data: new MultiTokensBurned({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            account: address,
            amount: data.amount,
        }),
    })
}
