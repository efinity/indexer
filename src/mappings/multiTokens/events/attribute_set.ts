import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import {
    Attribute,
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    Metadata,
    MintPolicy,
    MultiTokensAttributeSet,
    Token,
} from '../../../model'
import { CommonContext } from '../../types/contexts'
import { Event } from '../../../types/generated/support'
import { getOrCreateAccount } from '../../util/entities'
import { safeString } from '../../../common/tools'
import { computeTraits } from '../../../jobs/compute-traits'
import { processMetadata } from '../../../jobs/process-metadata'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensAttributeSetEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.AttributeSet', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensAttributeSet({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            key: safeString(Buffer.from(data.key).toString()),
            value: safeString(Buffer.from(data.value).toString()),
        }),
    })
}

export async function attributeSet(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.AttributeSet', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const key = safeString(Buffer.from(data.key).toString())
    const value = safeString(Buffer.from(data.value).toString())
    const id = data.tokenId !== undefined ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`

    let [attribute, collection] = await Promise.all([
        ctx.store.findOne<Attribute>(Attribute, {
            where: { id: attributeId },
        }),
        ctx.store.findOne<Collection>(Collection, {
            where: { id: data.collectionId.toString() },
        }),
    ])
    if (!collection) {
        collection = new Collection({
            id: data.collectionId.toString(),
            collectionId: data.collectionId,
            owner: await getOrCreateAccount(ctx, new Uint8Array(32).fill(0)),
            mintPolicy: new MintPolicy({
                forceSingleMint: false,
            }),
            stats: new CollectionStats({
                lastSale: null,
                floorPrice: null,
                highestSale: null,
                tokenCount: 0,
                salesCount: 0,
                supply: 0n,
                marketCap: 0n,
                volume: 0n,
            }),
            flags: new CollectionFlags({
                featured: false,
                hiddenForLegalReasons: false,
            }),
            verifiedAt: null,
            socials: new CollectionSocials({
                discord: null,
                twitter: null,
                instagram: null,
                medium: null,
                tiktok: null,
                website: null,
            }),
            hidden: false,
            attributeCount: 0,
            totalDeposit: 0n,
            createdAt: new Date(block.timestamp),
        })
        await ctx.store.save(collection)
    }

    let token: Token | null = null
    if (data.tokenId !== undefined) {
        token = await ctx.store.findOne<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
        })

        if (!token) {
            throwError(`[AttributeSet] We have not found token ${data.collectionId}-${data.tokenId}.`, 'fatal')
            return getEvent(item, data)
        }
    }

    if (attribute) {
        attribute.value = value
        attribute.updatedAt = new Date(block.timestamp)
        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            await ctx.store.save(token)
            processMetadata(token.id, 'token', true)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            await ctx.store.save(collection)
            processMetadata(collection.id, 'collection', true, true)
        }
        await ctx.store.save(attribute)
    } else {
        attribute = new Attribute({
            id: attributeId,
            key,
            value,
            deposit: 0n, // TODO: Change fixed for now
            collection,
            token,
            createdAt: new Date(block.timestamp),
            updatedAt: new Date(block.timestamp),
        })

        await ctx.store.insert(Attribute, attribute as any)

        if (token) {
            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.attributeCount += 1
            await ctx.store.save(token)
            processMetadata(token.id, 'token', true)
        } else if (collection) {
            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.attributeCount += 1
            await ctx.store.save(collection)
            processMetadata(collection.id, 'collection', true, true)
        }
    }
    if (token) {
        computeTraits(collection.id)
    }

    return getEvent(item, data)
}
