import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensBurnedEvent } from '../../../types/generated/events'
import { TokenAccount } from '../../../model'
import { encodeId } from '../../../common/tools'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { AccountId32, Approval } from '../../../types/generated/v4'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'

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
    approvals: [AccountId32, Approval][]
    isFrozen: boolean
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensBurnedEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, accountId, amount } = event.asV2
        return { collectionId, tokenId, accountId, amount }
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

export async function handleBurned(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const address = encodeId(data.accountId)
    const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
        where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
            token: true,
            account: true,
        },
    })

    if (tokenAccount) {
        const storage = await getStorageData(ctx, data.accountId, data.collectionId, data.tokenId)
        if (storage) {
            tokenAccount.balance = storage.balance
            tokenAccount.reservedBalance = storage.reservedBalance
            tokenAccount.lockedBalance = storage.lockedBalance
            tokenAccount.updatedAt = new Date(ctx.block.timestamp)

            await ctx.store.save(tokenAccount)
        }
    }
}
