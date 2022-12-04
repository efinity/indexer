import { BatchProcessorEventItem, SubstrateBlock, SubstrateCall } from '@subsquid/substrate-processor'
import { CallItem, EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import { MultiTokensCreateCollectionCall } from '../../../types/generated/calls'
import {
    Collection,
    CollectionStats,
    MultiTokensCollectionCreated,
    Extrinsic,
    MarketPolicy,
    MintPolicy,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../../model'
import { CommonHandlerContext, EventHandlerContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { AssetId, DefaultRoyalty } from '../../../types/generated/v6'
import { ChainContext, Event, Call } from '../../../types/generated/support'
// eslint-disable-next-line import/no-cycle
import { Context, getAccount } from '../../../processor'

interface CallData {
    maxTokenCount: bigint | undefined
    maxTokenSupply: bigint | undefined
    forceSingleMint: boolean
    market: MarketPolicy | null
    explicitRoyaltyCurrencies: AssetId[]
}

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

async function getMarket(ctx: Context, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const account = await getAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

async function getCallData(ctx: Context, call: Call): Promise<CallData> {
    const data = new MultiTokensCreateCollectionCall(ctx, call)

    if (data.isEfinityV2) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asEfinityV2.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
            explicitRoyaltyCurrencies: [{ collectionId: 0n, tokenId: 0n }],
        }
    }
    if (data.isV6) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV6.descriptor.policy.mint
        const royalty = data.asV6.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(ctx, royalty) : null
        const { explicitRoyaltyCurrencies } = data.asV6.descriptor

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market,
            explicitRoyaltyCurrencies,
        }
    }
    if (data.isV5) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV5.descriptor.policy.mint

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market: null,
            explicitRoyaltyCurrencies: [{ collectionId: 0n, tokenId: 0n }],
        }
    }
    if (data.isEfinityV3000) {
        const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asEfinityV3000.descriptor.policy.mint
        const royalty = data.asEfinityV3000.descriptor.policy.market?.royalty
        const market = royalty ? await getMarket(ctx, royalty) : null
        const { explicitRoyaltyCurrencies } = data.asEfinityV3000.descriptor

        return {
            maxTokenCount,
            maxTokenSupply,
            forceSingleMint,
            market,
            explicitRoyaltyCurrencies,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEventData(ctx: Context, event: Event): EventData {
    const data = new MultiTokensCollectionCreatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, owner } = data.asEfinityV2
        return { collectionId, owner }
    }
    throw new UnknownVersionError(event.constructor.name)
}

export async function collectionCreated(
    ctx: Context,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; extrinsic: true; call: true } }>
) {
    if (!item.event.call) return

    const eventData = getEventData(ctx, item.event)
    const callData = await getCallData(ctx, item.event.call)

    if (!eventData || !callData) return

    const account = await getAccount(ctx, eventData.owner)
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
        stats: new CollectionStats({
            lastSale: null,
            floorPrice: null,
            highestSale: null,
            tokenCount: 0,
            salesCount: 0,
            rank: 0,
            marketCap: 0n,
            volume: 0n,
        }),
        burnPolicy: null,
        attributePolicy: null,
        attributeCount: 0,
        totalDeposit: 0n, // TODO
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.insert(collection)

    // const extrinsic = await ctx.store.findOneBy(Extrinsic, { id: event.event })
    // const event = new Event({
    //     id: ctx.event.id,
    //     extrinsic,
    //     collection,
    //     token: null,
    //     data: new MultiTokensCollectionCreated({
    //         collectionId: eventData.collectionId,
    //         owner: account.id,
    //     }),
    // })
    // await ctx.store.insert(Event, event as any)
    //
    // // eslint-disable-next-line no-restricted-syntax
    // for (const currency of callData.explicitRoyaltyCurrencies) {
    //     // eslint-disable-next-line no-await-in-loop
    //     const token = await ctx.store.findOneOrFail<Token>(Token, {
    //         where: { id: `${currency.collectionId.toString()}-${currency.tokenId.toString()}` },
    //     })
    //     const royaltyCurrency = new RoyaltyCurrency({
    //         id: `${collection.id}-${token.id}`,
    //         collection,
    //         token,
    //     })
    //     // eslint-disable-next-line no-await-in-loop
    //     await ctx.store.insert(RoyaltyCurrency, royaltyCurrency as any)
    // }
}
