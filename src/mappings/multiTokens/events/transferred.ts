import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTransferredEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { AccountId32, Approval } from '../../../types/generated/v4'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

interface StorageData {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTransferredEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, operator, from, to, amount } = event.asV2
        return { collectionId, tokenId, operator, from, to, amount }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getStorageData(
    ctx: CommonHandlerContext,
    account: Uint8Array,
    collectionId: bigint,
    tokenId: bigint
): Promise<StorageData | undefined> {
    const storage = new MultiTokensTokenAccountsStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV2) {
        const data = await storage.getAsV2(account, collectionId, tokenId)

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
    } else if (storage.isV4) {
        const data = await storage.getAsV4(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handleTransferred(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const fromAddress = encodeId(data.from)
    const fromTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${fromAddress}-${data.collectionId}-${data.tokenId}` },
        relations: {
            account: true,
            collection: true,
            token: true,
        },
    })

    if (fromTokenAccount) {
        const fromStorage = await getStorageData(ctx, data.from, data.collectionId, data.tokenId)
        if (fromStorage) {
            fromTokenAccount.balance = fromStorage.balance
            fromTokenAccount.reservedBalance = fromStorage.reservedBalance
            fromTokenAccount.lockedBalance = fromStorage.lockedBalance
            fromTokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(fromTokenAccount)
        }
    }

    const toAddress = encodeId(data.to)
    const toTokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${toAddress}-${data.collectionId}-${data.tokenId}` },
        relations: {
            account: true,
            collection: true,
            token: true,
        },
    })

    if (toTokenAccount) {
        const toStorage = await getStorageData(ctx, data.to, data.collectionId, data.tokenId)
        if (toStorage) {
            toTokenAccount.balance = toStorage.balance
            toTokenAccount.reservedBalance = toStorage.reservedBalance
            toTokenAccount.lockedBalance = toStorage.lockedBalance
            toTokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(toTokenAccount)
        }
    }
}
