import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensThawedEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensThawed,
    Token,
    TokenAccount,
    TransferPolicy,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { FreezeType_Token as FreezeTypeToken_v500 } from '../../../types/generated/v500'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensThawedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, freezeType } = data.asMatrixEnjinV603

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                tokenId: (freezeType as FreezeTypeToken_v500).tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Thawed', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensThawed(),
    })
}

export async function thawed(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Thawed', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    if (data.tokenAccount) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${u8aToHex(data.tokenAccount)}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(
                `[Thawed] We have not found token account ${u8aToHex(data.tokenAccount)}-${data.collectionId}-${data.tokenId}.`,
                'fatal'
            )
            return getEvent(item, data)
        }

        tokenAccount.isFrozen = false
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = u8aToHex(data.collectionAccount)
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
            return getEvent(item, data)
        }

        collectionAccount.isFrozen = false
        collectionAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId !== undefined) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[Thawed] We have not found collection account ${data.collectionId}-${data.tokenId}.`, 'fatal')
            return getEvent(item, data)
        }

        token.isFrozen = false
        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Thawed] We have not found collection ${data.collectionId.toString()}.`, 'fatal')
            return getEvent(item, data)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: false })
        await ctx.store.save(collection)
    }

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId.toString(),
                tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
