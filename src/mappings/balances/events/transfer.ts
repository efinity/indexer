import { BlockHeader } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { balances } from '../../../types/generated/events'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { CommonContext, Event } from '../../types/contexts'
import { Sns } from '../../../common/sns'

function getEventData(ctx: CommonContext, event: Event) {
    if (balances.transfer.matrixEnjinV603.is(event)) {
        const { from, to, amount } = balances.transfer.matrixEnjinV603.decode(event)
        return { from, to, amount }
    }

    throw new UnknownVersionError(balances.transfer.name)
}

export async function transfer(ctx: CommonContext, block: BlockHeader, item: Event): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item)
    if (!eventData) return undefined

    if (item.extrinsic) {
        await Sns.getInstance().send({
            id: item.id,
            name: item.name,
            body: {
                from: eventData.from,
                to: eventData.to,
                amount: eventData.amount,
                extrinsic: item.extrinsic.id,
            },
        })
    }

    return new EventModel({
        id: item.id,
        extrinsic: item.extrinsic?.id ? new Extrinsic({ id: item.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: eventData.from,
            to: eventData.to,
            amount: eventData.amount,
        }),
    })
}
