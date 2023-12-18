import { BlockHeader, Event as EventItem } from '@subsquid/substrate-processor'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { ClaimsClaimedEvent } from '../../../types/generated/events'
import { ClaimsDelayClaimsPeriodStorage } from '../../../types/generated/storage'
import {
    AccountClaimType,
    ClaimDetails,
    Event as EventModel,
    Extrinsic,
    ClaimRequest,
    Claim,
    ClaimsClaimed,
} from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'
import { getOrCreateAccount } from '../../util/entities'
import { getTotalUnclaimedAmount } from '../common'

function getEventData(ctx: CommonContext, event: Event) {
    const data = new ClaimsClaimedEvent(ctx, event)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603
    }

    throw new UnknownVersionError(data.constructor.name)
}

function getDelayPeriod(ctx: CommonContext, block: BlockHeader) {
    const data = new ClaimsDelayClaimsPeriodStorage(ctx, block)

    if (data.isMatrixEnjinV603) {
        return data.asMatrixEnjinV603.get()
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function claimed(ctx: CommonContext, block: BlockHeader, item: EventItem): Promise<EventModel | undefined> {
    if (!item.extrinsic) return undefined

    const eventData = getEventData(ctx, item)

    if (!eventData) return undefined

    const account = await getOrCreateAccount(ctx, eventData.who)

    const claimAccount = u8aToHex(eventData.ethereumAddress).toLowerCase()

    const claimDetails = await ctx.store.findOneByOrFail(ClaimDetails, { id: '0' })
    const period = claimDetails.delayClaimsPeriod || (await getDelayPeriod(ctx, block))

    if (!period) {
        throw new Error('Delay period is not set')
    }

    const [totalUnclaimedAmount, claimRequests, claim] = await Promise.all([
        getTotalUnclaimedAmount(ctx, block),
        ctx.store
            .getRepository(ClaimRequest)
            .createQueryBuilder('request')
            .where('request.account ::jsonb @> :account', {
                account: { type: AccountClaimType.EVM, account: claimAccount },
            })
            .andWhere('request.isClaimed = false')
            .andWhere('request.createdBlock < :block', { block: block.height - period })
            .getMany(),
        ctx.store.findOneBy(Claim, { account: { id: account.id } }),
    ])
    claimDetails.totalUnclaimedAmount = totalUnclaimedAmount

    if (claimRequests.length === 0) {
        throw new Error(`No claim requests found for ${claimAccount}`)
    }

    const efiSum = claimRequests
        .filter((request) => request.isEfiToken)
        .reduce((sum, request) => sum + request.amountClaimable, 0n)

    const enjSum = claimRequests
        .filter((request) => !request.isEfiToken)
        .reduce((sum, request) => sum + request.amountClaimable, 0n)

    const efiBurned = claimRequests
        .filter((request) => request.isEfiToken)
        .reduce((sum, request) => sum + request.amountBurned, 0n)

    let updatedClaim: Claim

    if (!claim) {
        updatedClaim = new Claim({
            id: account.id,
            account,
            enjSum: 0n,
            efiSum: 0n,
            amount: 0n,
            count: 0,
        })
    } else {
        updatedClaim = claim
    }

    updatedClaim.efiSum += efiSum
    updatedClaim.enjSum += enjSum
    updatedClaim.amount += eventData.amount
    updatedClaim.count += 1

    await Promise.all([
        ctx.store.save(updatedClaim),
        ctx.store.save(claimDetails),
        ctx.store.save(
            ClaimRequest,
            claimRequests.map((request) => ({ ...request, isClaimed: true }))
        ),
    ])

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new ClaimsClaimed({
            account: account.id,
            ethAccount: claimAccount,
            amount: eventData.amount,
            efiSum,
            enjSum,
            efiBurned,
        }),
    })
}
