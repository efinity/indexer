import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError, UnsupportedCallError } from '../../../common/errors'
import { MultiTokensCollectionCreatedEvent } from '../../../types/generated/events'
import {
    MultiTokensCreateCollectionCall,
    MultiTokensForceCreateCollectionCall,
    MultiTokensForceCreateEthereumCollectionCall,
} from '../../../types/generated/calls'
import {
    Collection,
    CollectionFlags,
    CollectionSocials,
    CollectionStats,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MintPolicy,
    MultiTokensCollectionCreated,
    Royalty,
    RoyaltyCurrency,
    Token,
    TransferPolicy,
} from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty } from '../../../types/generated/v500'
import { MultiTokensCollectionsStorage } from '../../../types/generated/storage'
import { AssetId } from '../../../types/generated/matrixEnjinV603'
import { Sns } from '../../../common/sns'

interface EventData {
    collectionId: bigint
    owner: Uint8Array
}

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty) {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

async function getCallData(ctx: CommonContext, call: Call) {
    if (
        call.name === 'MatrixUtility.batch' ||
        call.name === 'Utility.batch' ||
        call.name === 'Utility.batch_all' ||
        call.name === 'FuelTanks.dispatch_and_touch' ||
        call.name === 'FuelTanks.dispatch'
    ) {
        return undefined
    }

    if (call.name === 'MultiTokens.force_create_collection') {
        const data = new MultiTokensForceCreateCollectionCall(ctx, call)

        if (data.isMatrixEnjinV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1005.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1004.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1004.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV603) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV603.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV603.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV603.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1005.descriptor.policy.mint
            const royalty = data.asV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1004.descriptor.policy.mint
            const royalty = data.asV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1004.descriptor

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

    if (call.name === 'MultiTokens.create_collection') {
        const data = new MultiTokensCreateCollectionCall(ctx, call)

        if (data.isMatrixEnjinV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1005.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1004.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1004.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV603) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV603.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV603.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV603.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1005.descriptor.policy.mint
            const royalty = data.asV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1004.descriptor.policy.mint
            const royalty = data.asV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1004.descriptor

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

    if (call.name === 'MultiTokens.force_create_ethereum_collection') {
        const data = new MultiTokensForceCreateEthereumCollectionCall(ctx, call)

        if (data.isMatrixEnjinV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1005.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1004.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1004.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isMatrixEnjinV1000) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asMatrixEnjinV1000.descriptor.policy.mint
            const royalty = data.asMatrixEnjinV1000.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asMatrixEnjinV1000.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1005) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1005.descriptor.policy.mint
            const royalty = data.asV1005.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1005.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }

        if (data.isV1004) {
            const { maxTokenCount, maxTokenSupply, forceSingleMint } = data.asV1004.descriptor.policy.mint
            const royalty = data.asV1004.descriptor.policy.market?.royalty
            const market = royalty ? await getMarket(ctx, royalty) : null
            const { explicitRoyaltyCurrencies } = data.asV1004.descriptor

            return {
                maxTokenCount,
                maxTokenSupply,
                forceSingleMint,
                market,
                explicitRoyaltyCurrencies,
            }
        }
    }

    throw new UnsupportedCallError(call.name)
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }
    throw new UnknownVersionError(event.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; call: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionCreated({
            collectionId: data.collectionId,
            owner: u8aToHex(data.owner),
        }),
    })
}

async function getCollectionId(ctx: CommonContext, block: SubstrateBlock, collectionId: bigint) {
    const storage = new MultiTokensCollectionsStorage(ctx, block)

    if (storage.isExists) {
        const data = await storage.asMatrixEnjinV603.get(collectionId)
        const currencies: [AssetId, any][] | undefined = data?.explicitRoyaltyCurrencies
        // eslint-disable-line @typescript-eslint/no-unused-vars
        const assets = currencies?.map(([assetId, _]) => assetId)

        if (data) {
            const market = data.policy.market.royalty ? await getMarket(ctx, data.policy.market.royalty) : null
            return {
                maxTokenCount: data.policy.mint.maxTokenCount,
                maxTokenSupply: data.policy.mint.maxTokenSupply,
                forceSingleMint: data.policy.mint.forceSingleMint,
                market,
                explicitRoyaltyCurrencies: assets ?? [], // Check
            }
        }
    }

    return {
        maxTokenCount: 0n,
        maxTokenSupply: 0n,
        forceSingleMint: false,
        market: null,
        explicitRoyaltyCurrencies: [],
    }
}

export async function collectionCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionCreated', { event: { args: true; call: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (!item.event.call) return undefined

    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    if (skipSave) {
        const collection = await ctx.store.findOne(Collection, { where: { id: eventData.collectionId.toString() } })

        if (collection) {
            collection.createdAt = new Date(block.timestamp)
            ctx.store.save(collection)
        }

        return getEvent(item, eventData)
    }

    // Using promise.all here results in an error where this whole class could be called twice
    // And getOrCreateAccount would be called twice in parallel, and we would get an exception
    // If the second query of finding the account was run before the insert of the first
    let callData = await getCallData(ctx, item.event.call)

    if (callData === undefined) {
        callData = await getCollectionId(ctx, block, eventData.collectionId)
    }

    const account = await getOrCreateAccount(ctx, eventData.owner)
    const collection = new Collection({
        id: eventData.collectionId.toString(),
        collectionId: eventData.collectionId,
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
            supply: 0n,
            marketCap: 0n,
            volume: 0n,
        }),
        flags: new CollectionFlags({
            featured: false,
            hiddenForLegalReasons: false,
            verified: false,
        }),
        socials: new CollectionSocials({
            discord: null,
            twitter: null,
            instagram: null,
            medium: null,
            tiktok: null,
            website: null,
        }),
        hidden: false,
        burnPolicy: null,
        attributePolicy: null,
        attributeCount: 0,
        totalDeposit: 0n, // TODO
        createdAt: new Date(block.timestamp),
    })

    await ctx.store.save(collection)

    const royaltyPromises = callData.explicitRoyaltyCurrencies
        .map((currency: any) => {
            const tokenId = `${currency.collectionId.toString()}-${currency.tokenId.toString()}`
            return new RoyaltyCurrency({
                id: `${collection.id}-${tokenId}`,
                collection,
                token: new Token({ id: tokenId }),
            })
        })
        .map((rc: any) => ctx.store.save(RoyaltyCurrency, rc as any))

    await Promise.all(royaltyPromises)

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: eventData.collectionId,
                owner: u8aToHex(eventData.owner),
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
