import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensFrozenEvent } from '../../../types/generated/events'
import { Collection, CollectionAccount, Token, TokenAccount, TransferPolicy } from '../../../model'
import { encodeId } from '../../../common/tools'
import { FreezeType_CollectionAccount, FreezeType_Token, FreezeType_TokenAccount } from '../../../types/generated/v2'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    freezeType: string
    tokenId: bigint | undefined
    collectionAccount: Uint8Array | undefined
    tokenAccount: Uint8Array | undefined
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensFrozenEvent(ctx)

    if (event.isV2) {
        const { collectionId, freezeType } = event.asV2

        if (freezeType.__kind == 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind == 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                collectionAccount: (freezeType as FreezeType_CollectionAccount).value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind == 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: (freezeType as FreezeType_Token).value,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            tokenId: (freezeType as FreezeType_TokenAccount).tokenId,
            tokenAccount: (freezeType as FreezeType_TokenAccount).accountId,
            collectionAccount: undefined,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleFrozen(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    if (data.tokenAccount) {
        const address = encodeId(data.tokenAccount)
        const tokenAccount = await ctx.store.findOne<TokenAccount>(
            TokenAccount,
            `${address}-${data.collectionId}-${data.tokenId}`
        )

        if (!tokenAccount) return
        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = encodeId(data.collectionAccount)
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(
            CollectionAccount,
            `${data.collectionId}-${address}`
        )

        if (!collectionAccount) return
        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId) {
        const token = await ctx.store.findOne<Token>(Token, `${data.collectionId}-${data.tokenId}`)

        if (!token) return
        token.isFrozen = true
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, data.collectionId.toString())

        if (!collection) return
        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
        await ctx.store.save(collection)
    }
}
