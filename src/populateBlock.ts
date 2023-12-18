/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */
import { u8aToHex, u8aToString } from '@polkadot/util'
import { encodeAddress } from '@polkadot/util-crypto'
import { In } from 'typeorm'
import ora from 'ora'
import axios from 'axios'
import { BlockHeader } from '@subsquid/substrate-processor'
import { CommonContext } from './mappings/types/contexts'
import * as Storage from './types/generated/storage'
import config from './config'
import {
    Collection,
    MintPolicy,
    TransferPolicy,
    CollectionStats,
    MarketPolicy,
    Royalty,
    Account,
    Balance,
    CollectionAccount,
    Token,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenBehaviorHasRoyalty,
    TokenAccount,
    TokenNamedReserve,
    TokenLock,
    TokenApproval,
    Attribute,
    Listing,
    FeeSide,
    FixedPriceData,
    ListingType,
    AuctionData,
    AuctionState,
    FixedPriceState,
    ListingStatusType,
    ListingStatus,
    CollectionFlags,
    CollectionSocials,
    CollectionApproval,
} from './model'
import { getCapType, getFreezeState, isTokenFrozen } from './mappings/multiTokens/events'
import { isNonFungible } from './mappings/multiTokens/utils/helpers'
import { safeString } from './common/tools'
import { addAccountsToSet, saveAccounts } from './mappings/balances/processor'
import { UnknownVersionError } from './common/errors'
import { processMetadata } from './jobs/process-metadata'

const BATCH_SIZE = 1000

const spinner = ora()

class Errors {
    public static accountNotFound() {
        return new Error('account not found.')
    }
}

async function getAccountsMap(
    ctx: CommonContext,
    accounts: (Uint8Array | null | undefined)[] | (Uint8Array | null | undefined)[][]
) {
    const uniqueAccounts = new Set<string>(
        accounts
            .flat()
            .filter((a) => a !== null && a !== undefined)
            .map((a) => u8aToHex(a))
    )
    const map = new Map<string, Account>()
    const existingAccounts = await ctx.store.findBy(Account, { id: In([...uniqueAccounts]) })
    existingAccounts.forEach((a: Account) => map.set(a.id, a))
    const accountsPromise = Array.from(uniqueAccounts).map(async (a) => {
        const mapHasaccount = map.get(a)
        if (mapHasaccount) {
            return mapHasaccount
        }
        const account = new Account({
            id: a,
            address: encodeAddress(a, config.prefix as number),
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            nonce: 0,
        })

        await ctx.store.insert(account)
        return account
    })

    const accountsArr = await Promise.all(accountsPromise)
    accountsArr.forEach((a) => map.set(a.id, a))

    return map
}

async function getBlock(height: number) {
    const query = `query Block($height: Int){
        result: batch( fromBlock:$height, limit:1, includeAllBlocks:true){
          header{
            id
            height
            hash
            specId
            stateRoot
            parentHash
            timestamp
          }
        }
      }`

    const { data } = await axios.post<{ data: { result: { header: BlockHeader }[] } }>(config.dataSource.archive as string, {
        query,
        variables: {
            height,
        },
    })

    if (data.data.result.length === 0) {
        throw new Error(`Can not start processor because block:${height} is not present in archive db, Please sync ingest first.`)
    }

    return data.data.result[0].header
}

function getCollectionStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MultiTokensCollectionsStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getCollectionAccountsStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MultiTokensCollectionAccountsStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getTokensStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MultiTokensTokensStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV600) {
        return data.asV600
    }

    if (data.isV500) {
        return data.asV500
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getTokenAccountsStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MultiTokensTokenAccountsStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getAttributeStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MultiTokensAttributesStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getListingStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.MarketplaceListingsStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getAccountsStorage(ctx: CommonContext, block: BlockHeader) {
    const data = new Storage.SystemAccountStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    if (data.isV602) {
        return data.asV602
    }

    if (data.isV500) {
        return data.asV500
    }

    throw new UnknownVersionError(data.constructor.name)
}

async function syncCollection(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const collectionPairs of getCollectionStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            collectionPairs.map(([, data]) => [
                data.owner,
                'market' in data.policy ? data.policy.market?.royalty?.beneficiary : null,
            ])
        )
        const collectionsPromise = collectionPairs.map(async ([id, data]) => {
            const owner = accountMap.get(u8aToHex(data.owner))
            let market = null
            if ('market' in data.policy && data.policy.market.royalty) {
                const account = accountMap.get(u8aToHex(data.policy.market.royalty.beneficiary))

                if (!account) throw Errors.accountNotFound()

                market = new MarketPolicy({
                    royalty: new Royalty({
                        beneficiary: account.id,
                        percentage: data.policy.market.royalty.percentage,
                    }),
                })
            }

            return new Collection({
                id: id.toString(),
                owner,
                mintPolicy: new MintPolicy({
                    maxTokenCount: data.policy.mint.maxTokenCount,
                    maxTokenSupply: data.policy.mint.maxTokenSupply,
                    forceSingleMint: data.policy.mint.forceSingleMint,
                }),
                marketPolicy: market,
                transferPolicy: new TransferPolicy({
                    isFrozen: data.policy.transfer.isFrozen,
                }),
                stats: new CollectionStats({
                    lastSale: null,
                    floorPrice: null,
                    highestSale: null,
                    tokenCount: Number(data.tokenCount),
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
                attributeCount: data.attributeCount,
                totalDeposit: data.totalDeposit,
                createdAt: new Date(block.timestamp ?? 0),
                collectionId: id,
            })
        })

        await Promise.all(collectionsPromise)
            .then((collections) => ctx.store.insert(Collection, collections as any))
            .then((r) => {
                r.identifiers.forEach((t: { id: string }) => {
                    processMetadata(t.id, 'collection')
                })
            })
    }
}

async function syncCollectionAccounts(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const pairs of getCollectionAccountsStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            pairs.map(([k]) => k[1])
        )

        const collectionAccounts = pairs.map(([k, data]) => {
            const collectionId = k[0].toString()
            const accountId = u8aToHex(k[1])
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            let approvals = null

            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new CollectionApproval({
                        account: u8aToHex(approval[0]),
                        expiration: approval[1],
                    })
                })
            }

            return new CollectionAccount({
                id: `${collectionId}-${accountId}`,
                isFrozen: data.isFrozen,
                approvals,
                accountCount: data.accountCount,
                account,
                collection: new Collection({ id: collectionId }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(CollectionAccount, collectionAccounts as any)
    }

    return true
}

async function syncTokens(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const pairs of getTokensStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        await getAccountsMap(
            ctx,
            pairs.map(([, d]: [any, any]) => d?.marketBehavior?.value?.beneficiary)
        )
        const tokensPromise = pairs.map(async ([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const collection = await ctx.store.findOneOrFail(Collection, { where: { id: collectionId.toString() } })

            let behavior = null

            if ('marketBehavior' in data && data.marketBehavior) {
                if (data.marketBehavior.__kind === TokenBehaviorType.IsCurrency) {
                    behavior = new TokenBehaviorIsCurrency({
                        type: TokenBehaviorType.IsCurrency,
                    })
                } else {
                    behavior = new TokenBehaviorHasRoyalty({
                        type: TokenBehaviorType.HasRoyalty,
                        royalty: new Royalty({
                            beneficiary: u8aToHex(data.marketBehavior.value.beneficiary),
                            percentage: data.marketBehavior.value.percentage,
                        }),
                    })
                }
            }

            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (data.sufficiency.__kind === 'Insufficient') {
                unitPrice = data.sufficiency.unitPrice
                minimumBalance = BigInt(Math.max(1, Number(10n ** 16n / unitPrice)))
            }

            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : undefined

            const token = new Token({
                id: `${collectionId}-${tokenId}`,
                tokenId,
                collection,
                attributeCount: data.attributeCount,
                supply: data.supply,
                isFrozen: isTokenFrozen(freezeState),
                cap: data.cap ? getCapType(data.cap) : null,
                behavior,
                freezeState,
                listingForbidden: 'listingForbidden' in data ? data.listingForbidden : false,
                minimumBalance,
                unitPrice,
                createdAt: new Date(block.timestamp ?? 0),
                mintDeposit: data.mintDeposit,
            })

            token.nonFungible = isNonFungible(token)

            return token
        })

        await Promise.all(tokensPromise)
            .then((tokens) => ctx.store.insert(Token, tokens as any))
            .then((r) => {
                r.identifiers.forEach((t: { id: string }) => {
                    processMetadata(t.id, 'token')
                })
            })
    }
}

async function syncTokenAccounts(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const pairs of getTokenAccountsStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const accountMap = await getAccountsMap(
            ctx,
            pairs.map(([k]) => k[2])
        )

        const tokenAccounts = pairs.map(([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const accountId = u8aToHex(k[2])
            const account = accountMap.get(accountId)

            if (!account) throw Errors.accountNotFound()

            let namedReserves = null
            if (data.namedReserves && data.namedReserves.length > 0) {
                namedReserves = data.namedReserves.map((namedReserve) => {
                    return new TokenNamedReserve({
                        pallet: u8aToString(namedReserve[0]),
                        amount: namedReserve[1],
                    })
                })
            }

            let locks = null
            if (data.locks && data.locks.length > 0) {
                locks = data.locks.map((lock) => {
                    return new TokenLock({
                        pallet: u8aToString(lock[0]),
                        amount: lock[1],
                    })
                })
            }

            let approvals = null
            if (data.approvals && data.approvals.length > 0) {
                approvals = data.approvals.map((approval) => {
                    return new TokenApproval({
                        account: u8aToHex(approval[0]),
                        amount: approval[1].amount,
                        expiration: approval[1].expiration,
                    })
                })
            }

            return new TokenAccount({
                id: `${accountId}-${collectionId}-${tokenId}`,
                balance: data.balance,
                reservedBalance: data.reservedBalance,
                totalBalance: data.balance + data.reservedBalance,
                lockedBalance: data.lockedBalance,
                namedReserves,
                locks,
                approvals,
                isFrozen: data.isFrozen,
                account,
                collection: new Collection({ id: collectionId.toString() }),
                token: new Token({ id: `${collectionId}-${tokenId}` }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })
        })

        await ctx.store.insert(TokenAccount, tokenAccounts as any)
    }

    return true
}

async function syncAttributes(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const pairs of getAttributeStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        const attributePromise = pairs.map(async ([k, data]) => {
            const collectionId = k[0]
            const tokenId = k[1]
            const key = safeString(Buffer.from(k[2]).toString())
            const value = safeString(Buffer.from(data.value).toString())
            const id = tokenId !== undefined ? `${collectionId}-${tokenId}` : collectionId.toString()

            const attributeId = `${id}-${Buffer.from(key).toString('hex')}`

            if (tokenId !== undefined) {
                const attribute = new Attribute({
                    id: attributeId,
                    token: new Token({ id }),
                    key,
                    value,
                    deposit: data.deposit,
                    collection: new Collection({ id: collectionId.toString() }),
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                })

                return attribute
            }

            const attribute = new Attribute({
                id: attributeId,
                key,
                value,
                deposit: data.deposit,
                collection: new Collection({ id }),
                createdAt: new Date(block.timestamp ?? 0),
                updatedAt: new Date(block.timestamp ?? 0),
            })

            return attribute
        })

        await Promise.all(attributePromise).then((attributes) => ctx.store.insert(Attribute, attributes as any))
    }

    return true
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function syncListings(ctx: CommonContext, block: BlockHeader<{ block: { timestamp: true } }>) {
    for await (const pairs of getListingStorage(ctx, block).getPairsPaged(BATCH_SIZE)) {
        await getAccountsMap(
            ctx,
            pairs.map(([, data]) => data.seller)
        )

        const listings = pairs.map(([id, data]) => {
            const listingData =
                data.data.__kind === ListingType.FixedPrice
                    ? new FixedPriceData({ listingType: ListingType.FixedPrice })
                    : new AuctionData({
                          listingType: ListingType.Auction,
                          startHeight: data.data.value.startBlock,
                          endHeight: data.data.value.endBlock,
                      })

            const listingState =
                data.state.__kind === ListingType.FixedPrice
                    ? new FixedPriceState({ listingType: ListingType.FixedPrice, amountFilled: 0n })
                    : new AuctionState({ listingType: ListingType.Auction })

            const listingId = Buffer.from(id).toString('hex')

            return [
                new Listing({
                    id: listingId,
                    price: data.price,
                    amount: data.amount,
                    highestPrice: data.price,
                    minTakeValue: data.minTakeValue,
                    feeSide: FeeSide[data.feeSide.__kind],
                    seller: new Account({ id: u8aToHex(data.seller) }),
                    makeAssetId: new Token({ id: `${data.makeAssetId.collectionId}-${data.makeAssetId.tokenId}` }),
                    takeAssetId: new Token({ id: `${data.takeAssetId.collectionId}-${data.takeAssetId.tokenId}` }),
                    height: 0,
                    deposit: data.deposit,
                    salt: Buffer.from(data.salt).toString('hex'),
                    data: listingData,
                    state: listingState,
                    deadListing: true,
                    createdAt: new Date(block.timestamp ?? 0),
                    updatedAt: new Date(block.timestamp ?? 0),
                }),
                new ListingStatus({
                    id: `${listingId}-0`,
                    type: ListingStatusType.Active,
                    listing: new Listing({ id: listingId }),
                    height: 0,
                    createdAt: new Date(block.timestamp ?? 0),
                }),
            ]
        })

        await ctx.store.insert(Listing, listings.map((l) => l[0]) as any)
        await ctx.store.insert(ListingStatus, listings.map((l) => l[1]) as any)
    }
}

async function syncBalance(ctx: CommonContext, block: BlockHeader) {
    const batchSize = 100
    for await (const keys of getAccountsStorage(ctx, block).getKeysPaged(batchSize)) {
        await getAccountsMap(ctx, keys)
        addAccountsToSet(keys.map((a) => u8aToHex(a)))
        await saveAccounts(ctx, block)
    }

    return true
}

async function populateBlockInternal(ctx: CommonContext, block: BlockHeader) {
    console.time('populateGenesis')
    spinner.start('Syncing collections...')
    await syncCollection(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Collection)} collections`)

    spinner.start('Syncing tokens...')
    await syncTokens(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(Token)} tokens`)

    spinner.start('Syncing token accounts...')
    await syncTokenAccounts(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(TokenAccount)} token accounts`)

    spinner.start('Syncing collection accounts...')
    await syncCollectionAccounts(ctx, block)
    spinner.succeed(`Successfully imported ${await ctx.store.count(CollectionAccount)} collection accounts`)

    spinner.start('Syncing attributes...')
    spinner.text = 'Syncing attributes... (can take a while)'
    await Promise.all([syncAttributes(ctx, block), syncBalance(ctx, block)])
    spinner.succeed(`Successfully imported ${await ctx.store.count(Attribute)} attributes`)
    spinner.succeed(`Successfully synced balances of ${await ctx.store.count(Account)} accounts`)

    console.timeEnd('populateGenesis')
}

export async function populateBlock(ctx: CommonContext, block: number) {
    const substrateBlock = await getBlock(block)
    spinner.info(`Syncing block ${block} with hash ${substrateBlock.hash}`)
    await populateBlockInternal(ctx, substrateBlock)
}
