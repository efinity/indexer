import { EventHandlerContext, ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import { CapType, Collection, Token } from '../../../model'
import { MultiTokensMintCall } from '../../../types/generated/calls'
import { DefaultMintParams_CreateToken, TokenCap_Supply } from '../../../types/generated/v4'

interface CallData {
    recipient: Uint8Array
    collectionId: bigint
    tokenId: bigint
    initialSupply: bigint
    unitPrice: bigint
    capType: CapType | undefined
    capSupply: bigint | undefined
}

interface EventData {
    collectionId: bigint
    tokenId: bigint
    issuer: Uint8Array
    initialSupply: bigint
}

function getCallData(ctx: ExtrinsicHandlerContext): CallData {
    const call = new MultiTokensMintCall(ctx)
    if (call.isV4) {
        const collectionId = call.asV4.collectionId
        const recipient = call.asV4.recipient.value as Uint8Array
        const params = call.asV4.params as DefaultMintParams_CreateToken
        const capType = params.cap?.__kind as CapType

        return {
            recipient,
            collectionId,
            tokenId: params.tokenId,
            initialSupply: params.initialSupply,
            unitPrice: params.unitPrice,
            capType: capType,
            capSupply: (params.cap as TokenCap_Supply)?.value,
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

function getEventData(ctx: EventHandlerContext): EventData {
    console.log(ctx.event.name)
    const event = new MultiTokensTokenCreatedEvent(ctx)

    if (event.isV4) {
        const { collectionId, tokenId, issuer, initialSupply } = event.asV4
        return { collectionId, tokenId, issuer, initialSupply }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleTokenCreated(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx)
    const callData = getCallData(ctx as ExtrinsicHandlerContext)

    if (!eventData || !callData) return

    const collection = await ctx.store.findOne<Collection>(Collection, eventData.collectionId.toString())

    const token = new Token({
        id: `${eventData.collectionId}-${eventData.tokenId}`,
        supply: eventData.initialSupply,
        capType: callData.capType,
        capSupply: callData.capSupply,
        isFrozen: false,
        minimumBalance: 0n, // TODO: Fixed for now
        unitPrice: callData.unitPrice,
        mintDeposit: 0n, // TODO: Fixed for now
        attributeCount: 0,
        collection: collection,
        // accounts: [],
        createdAt: new Date(ctx.block.timestamp),
    })

    await ctx.store.insert(Token, token)
}
