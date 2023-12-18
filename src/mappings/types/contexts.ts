import { DataHandlerContext, SubstrateBatchProcessorFields, Event as EventItem } from '@subsquid/substrate-processor'
import { Store } from '@subsquid/typeorm-store'
import { processor } from '../../processor'

type Fields = SubstrateBatchProcessorFields<typeof processor>
export type CommonContext = DataHandlerContext<Store, Fields>
export type Event = EventItem<Fields>
