import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import {
    Collection,
    MarketPolicy,
    MintPolicy, Royalty,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency, TokenBehaviorType,
    TransferPolicy,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import {
    CommonHandlerContext,
    EventHandlerContext,
} from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { ChainContext } from '../../../types/generated/support'
import { SubstrateCall } from '@subsquid/substrate-processor'
import { DefaultRoyalty, TokenMarketBehavior, TokenMarketBehavior_HasRoyalty } from '../../../types/generated/v6'

interface CallData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
    market: MarketPolicy | null
}

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

async function getCallData(ctx: ChainContext, subcall: SubstrateCall): Promise<CallData> {
    const call = new MultiTokensCreateCollectionCall(ctx, subcall)

    if (call.isEfinityV2) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asEfinityV2.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
        }
    } else if (call.isV6) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV6.descriptor.policy.mint
        const royalty = call.asV6.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(royalty, ctx) : null

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market
        }
    } else if (call.isV5) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV5.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
        }
    } else if (call.isEfinityV3000) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = call.asV6.descriptor.policy.mint
        const royalty = call.asV6.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(royalty, ctx) : null

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market
        }
    } else {
        throw new UnknownVersionError(call.constructor.name)
    }
}

function getEventData(ctx: EventHandlerContext): EventData {
    const event = new MultiTokensCollectionCreatedEvent(ctx)
    console.log(`Block: ${ctx.block.height}, event: ${ctx.event.name}`)

    if (event.isEfinityV2) {
        const { collectionId, owner } = event.asEfinityV2
        console.log(`collectionId: ${collectionId}`)
        return { collectionId, owner }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

async function getMarket(royalty: DefaultRoyalty, ctx: ChainContext): Promise<MarketPolicy> {
    const address = encodeId(royalty.beneficiary)
    const account = await getOrCreateAccount((ctx as CommonHandlerContext), address)

    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        })
    })
}

export async function handleCollectionCreated(ctx: EventHandlerContext) {
    const eventData = getEventData(ctx)

    if (ctx.event.call) {
        const callData = await getCallData(ctx, ctx.event.call)

        if (!eventData || !callData) return

        const account = await getOrCreateAccount(ctx, encodeId(eventData.owner))
        const collection = new Collection({
            id: eventData.collectionId.toString(),
            owner: account,
            mintPolicy: new MintPolicy({
                maxTokenCount: callData.maxTokenCount,
                maxTokenSupply: callData.maxTokenSupply,
                forceSingleMint: callData.forceSingleMint,
            }),
            marketPolicy: callData.market,
            transferPolicy: new TransferPolicy({
                isFrozen: false,
            }),
            burnPolicy: null,
            attributePolicy: null,
            tokenCount: 0,
            attributeCount: 0,
            totalDeposit: 0n, // TODO
            createdAt: new Date(ctx.block.timestamp),
        })

        await ctx.store.insert(collection)
    }
}
