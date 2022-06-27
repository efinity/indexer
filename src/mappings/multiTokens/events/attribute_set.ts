import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensAttributeSetEvent } from '../../../types/generated/events'
import { Attribute, Collection, Token } from '../../../model'
import { EventHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    key: Uint8Array
    value: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensAttributeSetEvent(ctx)

    if (event.isV2) {
        const { collectionId, tokenId, key, value } = event.asV2
        return { collectionId, tokenId, key, value }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAttributeSet(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
        relations: {
            owner: true,
        },
    })

    let token = null
    if (data.tokenId) {
        token = await ctx.store.findOneOrFail<Token>(Token, {
            where: { id: `${data.collectionId}-${data.tokenId}` },
            relations: {
                collection: true,
            },
        })
    }

    const key = Buffer.from(data.key).toString()
    const value = Buffer.from(data.value).toString()
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
        attribute.value = value
        attribute.updatedAt = new Date(ctx.block.timestamp)
        await ctx.store.save(attribute)
    } else {
        const attribute = new Attribute({
            id: attributeId,
            key: key,
            value: value,
            deposit: 0n, // TODO: Change fixed for now
            collection: collection,
            token: token,
            createdAt: new Date(ctx.block.timestamp),
            updatedAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(attribute)
    }

    if (key === 'name') {
        if (token) {
            console.log(token)
            token.name = value
            await ctx.store.save(token)
        } else if (collection) {
            collection.name = value
            await ctx.store.save(collection)
        }
    }
}
