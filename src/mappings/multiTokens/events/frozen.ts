import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensFrozenEvent } from '../../../types/generated/events'
import {
    Collection,
    CollectionAccount,
    Event as EventModel,
    Extrinsic,
    MultiTokensFrozen,
    Token,
    TokenAccount,
    TransferPolicy,
    FreezeState,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { isTokenFrozen } from './token_created'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensFrozenEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, freezeType } = data.asMatrixEnjinV603

        if (freezeType.__kind === 'Collection') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                tokenId: undefined,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'CollectionAccount') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: undefined,
                collectionAccount: freezeType.value,
                tokenId: undefined,
                tokenAccount: undefined,
            }
        }

        if (freezeType.__kind === 'Token') {
            return {
                collectionId,
                freezeType: freezeType.__kind,
                freezeState: freezeType.freezeState,
                tokenId: freezeType.tokenId,
                collectionAccount: undefined,
                tokenAccount: undefined,
            }
        }

        return {
            collectionId,
            freezeType: freezeType.__kind,
            freezeState: undefined,
            tokenId: freezeType.tokenId,
            tokenAccount: freezeType.accountId,
            collectionAccount: undefined,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Frozen', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensFrozen(),
    })
}

export async function frozen(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Frozen', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    if (data.tokenAccount) {
        const address = u8aToHex(data.tokenAccount)
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(`[Frozen] We have not found collection ${address}-${data.collectionId}-${data.tokenId}`, 'fatal')
            return getEvent(item, data)
        }

        tokenAccount.isFrozen = true
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else if (data.collectionAccount) {
        const address = u8aToHex(data.collectionAccount)
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Frozen] We have not found collection ${data.collectionId}-${address}`, 'fatal')
            return getEvent(item, data)
        }

        collectionAccount.isFrozen = true
        collectionAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(collectionAccount)
    } else if (data.tokenId !== undefined) {
        const token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[Frozen] We have not found collection ${data.collectionId}-${data.tokenId}`, 'fatal')
            return getEvent(item, data)
        }

        switch (data.freezeState?.__kind) {
            case 'Permanent':
                token.freezeState = FreezeState.Permanent
                break
            case 'Temporary':
                token.freezeState = FreezeState.Temporary
                break
            case 'Never':
                token.freezeState = FreezeState.Never
                break
            default:
                token.freezeState = null
                break
        }

        token.isFrozen = isTokenFrozen(token.freezeState)

        await ctx.store.save(token)
    } else {
        const collection = await ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        })

        if (!collection) {
            throwError(`[Frozen] We have not found collection ${data.collectionId.toString()}`, 'fatal')
            return getEvent(item, data)
        }

        collection.transferPolicy = new TransferPolicy({ isFrozen: true })
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
