import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError, throwError } from '../../../common/errors'
import { MultiTokensTokenCreatedEvent } from '../../../types/generated/events'
import {
    CapType,
    Collection,
    Event as EventModel,
    Extrinsic,
    FreezeState,
    MultiTokensTokenCreated,
    Royalty,
    Token,
    TokenBehaviorHasRoyalty,
    TokenBehaviorIsCurrency,
    TokenBehaviorType,
    TokenCapSingleMint,
    TokenCapSupply,
} from '../../../model'
import { Call, Event } from '../../../types/generated/support'
import {
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v500,
    FreezeState as FreezeState_v500,
    SufficiencyParam_Sufficient,
    TokenMarketBehavior,
} from '../../../types/generated/v500'
import { DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_v600 } from '../../../types/generated/v600'
import {
    TokenCap,
    DefaultMintParams_CreateToken as DefaultMintParamsCreateToken_Enjin_v603,
} from '../../../types/generated/matrixEnjinV603'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { MultiTokensBatchMintCall, MultiTokensForceMintCall, MultiTokensMintCall } from '../../../types/generated/calls'
import { processMetadata } from '../../../jobs/process-metadata'
import { MultiTokensTokensStorage } from '../../../types/generated/storage'
import { Sns } from '../../../common/sns'

export function getCapType(cap: TokenCap) {
    if (cap.__kind === CapType.Supply) {
        return new TokenCapSupply({
            type: CapType.Supply,
            supply: cap.value,
        })
    }

    // TODO: add collapsing
    return new TokenCapSingleMint({
        type: CapType.SingleMint,
    })
}

export function getFreezeState(state: FreezeState_v500): FreezeState | null {
    switch (state.__kind) {
        case 'Permanent':
            return FreezeState.Permanent
        case 'Temporary':
            return FreezeState.Temporary
        case 'Never':
            return FreezeState.Never
        default:
            return null
    }
}

export function isTokenFrozen(freezeState: FreezeState | null | undefined): boolean {
    return freezeState === FreezeState.Permanent || freezeState === FreezeState.Temporary
}

async function getBehavior(
    ctx: CommonContext,
    behavior: TokenMarketBehavior
): Promise<TokenBehaviorIsCurrency | TokenBehaviorHasRoyalty> {
    if (behavior.__kind === TokenBehaviorType.IsCurrency) {
        return new TokenBehaviorIsCurrency({
            type: TokenBehaviorType.IsCurrency,
        })
    }

    const account = await getOrCreateAccount(ctx, behavior.value.beneficiary)
    return new TokenBehaviorHasRoyalty({
        type: TokenBehaviorType.HasRoyalty,
        royalty: new Royalty({
            beneficiary: account.id,
            percentage: behavior.value.percentage,
        }),
    })
}

async function getCallData(ctx: CommonContext, call: Call, event: ReturnType<typeof getEventData>) {
    if (
        call.name === 'MatrixUtility.batch' ||
        call.name === 'Utility.batch' ||
        call.name === 'Utility.batch_all' ||
        call.name === 'FuelTanks.dispatch_and_touch' ||
        call.name === 'FuelTanks.dispatch'
    ) {
        return undefined
    }

    if (call.name === 'MultiTokens.batch_mint') {
        const data = new MultiTokensBatchMintCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { collectionId, recipients } = data.asMatrixEnjinV603
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_Enjin_v603
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV600) {
            const { collectionId, recipients } = data.asV600
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_v600
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        if (data.isV500) {
            const { collectionId, recipients } = data.asV500
            const recipientCall = recipients.find((r) => r.params.tokenId === event.tokenId && r.params.__kind === 'CreateToken')

            if (recipientCall) {
                const params = recipientCall.params as DefaultMintParamsCreateToken_v500
                const cap = params.cap ? getCapType(params.cap) : null
                const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
                const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
                let unitPrice: bigint | null = 10_000_000_000_000_000n
                let minimumBalance = 1n

                if (params.sufficiency.__kind === 'Sufficient') {
                    minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                    unitPrice = null
                }

                return {
                    collectionId,
                    tokenId: params.tokenId,
                    initialSupply: params.initialSupply,
                    minimumBalance,
                    unitPrice,
                    cap,
                    behavior,
                    freezeState,
                    listingForbidden: params.listingForbidden ?? false,
                }
            }
        }

        throw new UnknownVersionError(data.constructor.name)
    }

    let data: MultiTokensMintCall | MultiTokensForceMintCall
    if (call.name === 'MultiTokens.force_mint') {
        data = new MultiTokensForceMintCall(ctx, call)

        if (data.isMatrixEnjinV1003) {
            const { collectionId } = data.asMatrixEnjinV1003
            const params = data.asMatrixEnjinV1003.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isMatrixEnjinV603) {
            const { collectionId } = data.asMatrixEnjinV603
            const params = data.asMatrixEnjinV603.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV1003) {
            const { collectionId } = data.asV1003
            const params = data.asV1003.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV604) {
            const { collectionId } = data.asV604
            const params = data.asV604.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }
    } else {
        data = new MultiTokensMintCall(ctx, call)

        if (data.isMatrixEnjinV603) {
            const { collectionId } = data.asMatrixEnjinV603
            const params = data.asMatrixEnjinV603.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV600) {
            const { collectionId } = data.asV600
            const params = data.asV600.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }

        if (data.isV500) {
            const { collectionId } = data.asV500
            const params = data.asV500.params as DefaultMintParamsCreateToken_v500
            const cap = params.cap ? getCapType(params.cap) : null
            const behavior = params.behavior ? await getBehavior(ctx, params.behavior) : null
            const freezeState = params.freezeState ? getFreezeState(params.freezeState) : null
            let unitPrice: bigint | null = 10_000_000_000_000_000n
            let minimumBalance = 1n

            if (params.sufficiency.__kind === 'Sufficient') {
                minimumBalance = (params.sufficiency as SufficiencyParam_Sufficient).minimumBalance
                unitPrice = null
            }

            return {
                collectionId,
                tokenId: params.tokenId,
                initialSupply: params.initialSupply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: params.listingForbidden ?? false,
            }
        }
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensTokenCreatedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        const { collectionId, tokenId, issuer, initialSupply } = data.asMatrixEnjinV603
        if (issuer.__kind === 'Signed') {
            return { collectionId, tokenId, issuer: issuer.value, initialSupply }
        }
        return { collectionId, tokenId, issuer: new Uint8Array(32).fill(0), initialSupply }
    }
    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: `${data.collectionId}-${data.tokenId}`,
        data: new MultiTokensTokenCreated({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            issuer: u8aToHex(data.issuer),
            initialSupply: data.initialSupply,
        }),
    })
}

async function getTokenId(ctx: CommonContext, block: SubstrateBlock, collectionId: bigint, tokenId: bigint) {
    const storage = new MultiTokensTokensStorage(ctx, block)

    if (storage.isExists) {
        const data = await storage.asMatrixEnjinV603.get(collectionId, tokenId)

        if (data) {
            const cap = data.cap ? getCapType(data.cap) : null
            const behavior = data.marketBehavior ? await getBehavior(ctx, data.marketBehavior) : null
            const freezeState = data.freezeState ? getFreezeState(data.freezeState) : null
            const unitPrice: bigint | null =
                data.sufficiency.__kind === 'Insufficient' ? data.sufficiency.unitPrice : 10_000_000_000_000_000n
            const { minimumBalance } = data

            return {
                collectionId,
                tokenId,
                initialSupply: data.supply,
                minimumBalance,
                unitPrice,
                cap,
                behavior,
                freezeState,
                listingForbidden: data.listingForbidden ?? false,
            }
        }
    }

    return {
        collectionId,
        tokenId,
        initialSupply: 0n,
        minimumBalance: 1n,
        unitPrice: 10_000_000_000_000_000n,
        cap: null,
        behavior: null,
        freezeState: null,
        listingForbidden: false,
    }
}

export async function tokenCreated(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.TokenCreated', { event: { args: true; call: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    if (skipSave && item.event.call) {
        const token = await ctx.store.findOne(Token, {
            where: { id: `${eventData.collectionId}-${eventData.tokenId}` },
        })

        if (token) {
            token.createdAt = new Date(block.timestamp)
            ctx.store.save(token)
        }

        return getEvent(item, eventData)
    }

    if (item.event.call) {
        const collection = await ctx.store.findOne(Collection, {
            where: { id: eventData.collectionId.toString() },
        })

        if (collection === null) {
            throwError(`[TokenCreated] We have not found collection ${eventData.collectionId.toString()}.`, 'fatal')
            return getEvent(item, eventData)
        }

        let callData = await getCallData(ctx, item.event.call, eventData)

        if (callData === undefined) {
            callData = await getTokenId(ctx, block, eventData.collectionId, eventData.tokenId)
        }

        const token = new Token({
            id: `${eventData.collectionId}-${eventData.tokenId}`,
            tokenId: eventData.tokenId,
            supply: 0n, // Supply is updated on Mint/Burn events
            cap: callData.cap,
            behavior: callData.behavior,
            isFrozen: isTokenFrozen(callData.freezeState),
            freezeState: callData.freezeState,
            minimumBalance: callData.minimumBalance,
            unitPrice: callData.unitPrice,
            mintDeposit: 0n, // TODO: Fixed for now
            attributeCount: 0,
            collection,
            metadata: null,
            nonFungible: false,
            listingForbidden: callData.listingForbidden,
            createdAt: new Date(block.timestamp),
        })

        await ctx.store.save(Token, token as any)
        processMetadata(token.id, 'token')
    }

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: eventData.collectionId,
                tokenId: eventData.tokenId,
                issuer: u8aToHex(eventData.issuer),
                initialSupply: eventData.initialSupply,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, eventData)
}
