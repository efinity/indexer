/* eslint-disable no-restricted-syntax */
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
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
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { DefaultRoyalty } from '../../../types/generated/v500'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensCollectionMutatedEvent(ctx, event)

    if (data.isMatrixEnjinV1004) {
        const { collectionId, mutation } = data.asMatrixEnjinV1004

        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }

    if (data.isMatrixEnjinV603) {
        const { collectionId, mutation } = data.asMatrixEnjinV603

        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }

    if (data.isV1005) {
        const { collectionId, mutation } = data.asV1005

        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }

    if (data.isV1004) {
        const { collectionId, mutation } = data.asV1004

        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }

    if (data.isV500) {
        const { collectionId, mutation } = data.asV500

        return {
            collectionId,
            owner: mutation.owner,
            royalty: mutation.royalty,
            explicitRoyaltyCurrencies: mutation.explicitRoyaltyCurrencies,
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(item: EventItem<'MultiTokens.CollectionMutated', { event: { args: true; extrinsic: true } }>) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new MultiTokensCollectionMutated(),
    })
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

export async function collectionMutated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.CollectionMutated', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item)

    const collection = await ctx.store.findOne<Collection>(Collection, {
        where: { id: data.collectionId.toString() },
    })

    if (!collection) {
        throwError(`[CollectionMutated] We have not found collection ${data.collectionId.toString()}`, 'fatal')
        return getEvent(item)
    }

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
            ctx.store.remove(royaltyCurrencies)
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
                const token = await ctx.store.findOne<Token>(Token, {
                    where: { id: `${currency.collectionId}-${currency.tokenId}` },
                })

                if (!token) {
                    throwError(
                        `[CollectionMutated] We have not found token ${currency.collectionId}-${currency.tokenId}`,
                        'fatal'
                    )
                } else {
                    const royaltyCurrency = new RoyaltyCurrency({
                        id: `${collection.id}-${token.id}`,
                        collection,
                        token,
                    })

                    // eslint-disable-next-line no-await-in-loop
                    await ctx.store.insert(RoyaltyCurrency, royaltyCurrency as any)
                }
            }
            ctx.store.remove(royaltyCurrencies)
        }
    }

    await ctx.store.save(collection)

    return getEvent(item)
}
