/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
import { MultiTokensCollectionMutatedEvent } from '../../../types/generated/events'
import {
    Collection,
    Event as EventModel,
    Extrinsic,
    MarketPolicy,
    MultiTokensCollectionMutated,
    Royalty,
    RoyaltyCurrency,
    Token,
} from '../../../model'
import { AssetId, DefaultRoyalty } from '../../../types/generated/efinityV3000'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { ShouldMutate } from '../../../types/generated/efinityV3012'

interface EventData {
    collectionId: bigint
    owner: Uint8Array | undefined
    royalty: ShouldMutate
    explicitRoyaltyCurrencies: AssetId[] | undefined
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new MultiTokensCollectionMutatedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, mutation } = data.asEfinityV2
        return {
            collectionId,
            owner: mutation.owner,
            royalty: { __kind: 'NoMutation' },
            explicitRoyaltyCurrencies: undefined,
        }
    }
    if (data.isEfinityV3000) {
        const { collectionId, mutation } = data.asEfinityV3000

        const royalty: ShouldMutate =
            mutation.royalty.__kind === 'None'
                ? {
                      __kind: 'NoMutation',
                  }
                : {
                      __kind: 'SomeMutation',
                      value: mutation.royalty.value,
                  }

        return {
            collectionId,
            owner: mutation.owner,
            royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    if (data.isEfinityV3012) {
        const { collectionId, mutation } = data.asEfinityV3012
        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

async function getMarket(ctx: CommonContext, royalty: DefaultRoyalty): Promise<MarketPolicy> {
    const account = await getOrCreateAccount(ctx, royalty.beneficiary)
    return new MarketPolicy({
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: royalty.percentage,
        }),
    })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function collectionMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionMutated', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const collection = await ctx.store.findOneOrFail<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (data.owner) {
        collection.owner = await getOrCreateAccount(ctx, data.owner)
    }

    if (data.royalty.__kind === 'SomeMutation') {
        if (data.royalty.value === undefined) {
            collection.marketPolicy = null
        } else {
            collection.marketPolicy = await getMarket(ctx, data.royalty.value)
        }
    }

    if (data.explicitRoyaltyCurrencies !== undefined) {
        const royaltyCurrencies = await ctx.store.find<RoyaltyCurrency>(RoyaltyCurrency, {
            where: { collection: { id: collection.id } },
        })

        if (data.explicitRoyaltyCurrencies.length === 0) {
            await ctx.store.remove(royaltyCurrencies)
        } else {
            for (const currency of data.explicitRoyaltyCurrencies) {
                const rc = royaltyCurrencies.find(
                    (_rc) => _rc.id === `${collection.id}-${currency.collectionId}-${currency.tokenId}`
                )
                if (rc) {
                    royaltyCurrencies.splice(royaltyCurrencies.indexOf(rc), 1)
                    // eslint-disable-next-line no-continue
                    continue
                }

                // eslint-disable-next-line no-await-in-loop
                const token = await ctx.store.findOneOrFail<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                const royaltyCurrency = new RoyaltyCurrency({
                    id: `${collection.id}-${token.id}`,
                    collection,
                    token,
                })

                // eslint-disable-next-line no-await-in-loop
                await ctx.store.insert(RoyaltyCurrency, royaltyCurrency as any)
            }
            await ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionMutated(),
    })
}
