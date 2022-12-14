import { u8aToHex } from '@polkadot/util'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { UnknownVersionError } from '../../../common/errors'
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
import { CommonHandlerContext } from '../../types/contexts'

interface EventData {
    collectionId: bigint
    tokenId: bigint | undefined
    owner: Uint8Array
    operator: Uint8Array
    amount: bigint | undefined
    expiration: number | undefined
}

function getEventData(ctx: CommonHandlerContext, event: Event): EventData {
    const data = new MultiTokensApprovedEvent(ctx, event)

    if (data.isEfinityV2) {
        const { collectionId, tokenId, owner, operator, amount, expiration } = data.asEfinityV2
        return {
            collectionId,
            tokenId,
            owner,
            operator,
            amount,
            expiration,
        }
    }
    throw new UnknownVersionError(data.constructor.name)
}

export async function approved(
    ctx: CommonHandlerContext,
    block: SubstrateBlock,
    item: EventItem<'MultiTokens.Approved', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const data = getEventData(ctx, item.event)
    if (!data) return undefined

    const address = u8aToHex(data.owner)

    if (data.tokenId) {
        const tokenAccount = await ctx.store.findOneOrFail<TokenAccount>(TokenAccount, {
            where: { id: `${address}-${data.collectionId}-${data.tokenId}` },
        })

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
        const collectionAccount = await ctx.store.findOneOrFail<CollectionAccount>(CollectionAccount, {
            where: { id: `${data.collectionId}-${address}` },
        })

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

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        collectionId: data.collectionId.toString(),
        tokenId: data.tokenId ? `${data.collectionId}-${data.tokenId}` : null,
        data: new MultiTokensApproved({
            collectionId: data.collectionId,
            tokenId: data.tokenId,
            owner: address,
            operator: u8aToHex(data.operator),
            amount: data.amount,
            expiration: data.expiration,
        }),
    })
}
