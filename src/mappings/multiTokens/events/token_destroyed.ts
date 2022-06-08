import { EventHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenDestroyedEvent } from '../../../types/generated/events'
import { Token } from '../../../model'

interface EventData {
    collectionId: bigint
    tokenId: bigint
    caller: Uint8Array
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenDestroyedEvent(ctx)

    if (event.isV4) {
        const { collectionId, tokenId, caller } = event.asV4
        return { collectionId, tokenId, caller }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenDestroyed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    if (!data) return

    const token = await ctx.store.findOne<Token>(Token, `${data.collectionId}-${data.tokenId}`)
    if (token) {
        await ctx.store.delete(Token, { id: token.id })
    }
}
