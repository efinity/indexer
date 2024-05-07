import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError, throwError } from '../../../common/errors'
import {
    CollectionAccount,
    TokenAccount,
    TokenApproval,
    CollectionApproval,
    Event as EventModel,
    MultiTokensApproved,
    Extrinsic,
} from '../../../model'
import { encodeId } from '../../../common/tools'
import { Event } from '../../../types/generated/support'
import { MultiTokensApprovedEvent } from '../../../types/generated/events'
import { CommonContext } from '../../types/contexts'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new MultiTokensApprovedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getEvent(
    item: EventItem<'MultiTokens.Approved', { event: { args: true; extrinsic: true } }>,
    data: ReturnType<typeof getEventData>
) {
    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensApproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: u8aToHex(data.owner),
            operator: u8aToHex(data.operator),
            amount: data.amount,
            expiration: data.expiration,
        }),
    })
}

export async function approved(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Approved', { event: { args: true; extrinsic: true } }>,
    skipSave: boolean
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    if (skipSave) return getEvent(item, data)

    const address = u8aToHex(data.owner)

    if (data.tokenId !== undefined) {
        const tokenAccount = await ctx.store.findOne<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

        if (!tokenAccount) {
            throwError(`[Approved] We have not found token account ${address}-${data.collectionId}-${data.tokenId}.`, 'fatal')
            return getEvent(item, data)
        }

        const approvals = tokenAccount.approvals ?? []
        approvals.push(
            new TokenApproval({
                account: encodeId(data.operator),
                amount: data.amount,
                expiration: data.expiration,
            })
        )

        tokenAccount.approvals = approvals
        tokenAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(tokenAccount)
    } else {
        const collectionAccount = await ctx.store.findOne<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

        if (!collectionAccount) {
            throwError(`[Approved] We have not found collection account ${data.collectionId}-${address}.`, 'fatal')
            return getEvent(item, data)
        }

        const approvals = collectionAccount.approvals ?? []
        approvals.push(
            new CollectionApproval({
                account: encodeId(data.operator),
                expiration: data.expiration,
            })
        )

        collectionAccount.approvals = approvals
        collectionAccount.updatedAt = new Date(block.timestamp)
        await ctx.store.save(collectionAccount)
    }

    if (item.event.extrinsic) {
        await Sns.getInstance().send({
            id: item.event.id,
            name: item.event.name,
            body: {
                collectionId: data.collectionId,
                tokenId: data.tokenId,
                owner: u8aToHex(data.owner),
                operator: u8aToHex(data.operator),
                amount: data.amount,
                expiration: data.expiration,
                extrinsic: item.event.extrinsic.id,
            },
        })
    }

    return getEvent(item, data)
}
