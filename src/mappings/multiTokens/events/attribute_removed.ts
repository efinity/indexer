import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeRemovedEvent } from '../../../types/generated/events'
import { Attribute, Collection, Metadata, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
}

function metadataParser(metadata: Metadata, attribute: Attribute) {
    if (attribute.key === 'name') {
        metadata.name = null
    } else if (attribute.key === 'description') {
        metadata.description = null
    } else if (attribute.key === 'fallback_image') {
        metadata.fallbackImage = null
    } else if (attribute.key === 'external_url') {
        metadata.externalUrl = null
    } else if (['image', 'imageUrl', 'media', 'mediaUrl'].includes(attribute.key)) {
        metadata.media = null
    }
    return metadata
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensAttributeRemovedEvent(ctx)

    if (event.isEfinityV2) {
        const { collectionId, tokenId, key } = event.asEfinityV2
        return { collectionId, tokenId, key }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function handleAttributeRemoved(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const id = data.tokenId ? `${data.collectionId}-${data.tokenId}` : data.collectionId.toString()
    const attributeId = `${id}-${Buffer.from(data.key).toString('hex')}`
    const attribute = await ctx.store.findOne<Attribute>(Attribute, {
        where: { id: attributeId },
        relations: {
            collection: true,
            token: true,
        },
    })

    if (attribute) {
        if (attribute.token) {
            const token = await ctx.store.findOneOrFail<Token>(Token, {
                where: { id: `${data.collectionId}-${data.tokenId}` },
            })

            if (!token.metadata) {
                token.metadata = new Metadata()
            }
            token.metadata = metadataParser(token.metadata, attribute)
            token.attributeCount -= 1
            await ctx.store.save(token)
        } else if (attribute.collection) {
            const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
                where: { id: data.collectionId.toString() },
            })

            if (!collection.metadata) {
                collection.metadata = new Metadata()
            }
            collection.metadata = metadataParser(collection.metadata, attribute)
            collection.attributeCount -= 1
            await ctx.store.save(collection)
        }

        await ctx.store.remove(attribute)
    }
}
