import { SubstrateBlock } from '@subsquid/substrate-processor'
import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { u8aToHex } from '@polkadot/util'
import { UnknownVersionError } from '../../../common/errors'
import { BalancesTransferEvent } from '../../../types/generated/events'
import { BalancesTransfer, Event as EventModel, Extrinsic } from '../../../model'
import { Event } from '../../../types/generated/support'
import { CommonContext } from '../../types/contexts'

interface EventData {
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

function getEventData(ctx: CommonContext, event: Event): EventData {
    const data = new BalancesTransferEvent(ctx, event)

    if (data.isMatrixV603) {
        const { from, to, amount } = data.asMatrixV603
        return { from, to, amount }
    }

    throw new UnknownVersionError(data.constructor.name)
}

export async function transfer(
    ctx: CommonContext,
    block: SubstrateBlock,
    item: EventItem<'Balances.Transfer', { event: { args: true; extrinsic: true } }>
): Promise<EventModel | undefined> {
    const eventData = getEventData(ctx, item.event)
    if (!eventData) return undefined

    return new EventModel({
        id: item.event.id,
        extrinsic: item.event.extrinsic?.id ? new Extrinsic({ id: item.event.extrinsic.id }) : null,
        data: new BalancesTransfer({
            from: u8aToHex(eventData.from),
            to: u8aToHex(eventData.to),
            amount: eventData.amount,
        }),
    })
}
