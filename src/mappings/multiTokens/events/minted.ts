import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensMintedEvent } from '../../../types/generated/events'
import { Token, TokenAccount } from '../../../model'
import { EventService } from '../../../services'
import { MultiTokensTokenAccountsStorage } from '../../../types/generated/storage'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { Approval } from '../../../types/generated/v6'
import { isNonFungible } from '../utils/helpers'
import { Context } from '../../../processor'
import { Event } from '../../../types/generated/support'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    recipient: Uint8Array
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
    const data = new MultiTokensMintedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, issuer, recipient, amount } = data.asEfinityV2
        return { collectionId, tokenId, issuer, recipient, amount }
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
            namedReserves: data.namedReserves,
            approvals: data.approvals,
            isFrozen: data.isFrozen,
            lockedBalance: 0n,
            locks: [],
        }
    }
    if (storage.isEfinityV3) {
        const data = await storage.getAsEfinityV3(account, collectionId, tokenId)

        if (!data) return undefined
        return data
    }
    throw new UnknownVersionError(storage.constructor.name)
}

export async function minted(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Minted', { event: { args: true; extrinsic: true; call: true } }>
) {
    const data = getEventData(ctx, item.event)
    if (!data) return

    const token = await ctx.store.findOneOrFail<Token>(Token, {
        where: { id: `${data.collectionId}-${data.tokenId}` },
        relations: {
            collection: true,
        },
    })
    token.supply += data.amount
    token.nonFungible = isNonFungible(token)
    await ctx.store.save(token)

    const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
        where: { id: `${u8aToHex(data.recipient)}-${data.collectionId}-${data.tokenId}` },
        relations: { account: true },
    })

    const storage = await getStorageData(ctx, block, data.recipient, data.collectionId, data.tokenId)
    if (storage) {
        tokenAccount.balance = storage.balance
        tokenAccount.reservedBalance = storage.reservedBalance
        tokenAccount.lockedBalance = storage.lockedBalance
        tokenAccount.updatedAt = new Date(block.timestamp)

        await ctx.store.save(tokenAccount)
    }

    // new EventService(ctx, new Token({ id: `${data.collectionId}-${data.tokenId}` })).MultiTokenMint(
    //     tokenAccount.account,
    //     data.amount
    // )
}
