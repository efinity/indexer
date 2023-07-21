/* eslint-disable max-classes-per-file */

import { Field, ObjectType, Query, Resolver, Arg, registerEnumType, ID, Int } from 'type-graphql'
import { Json } from '@subsquid/graphql-server'
import 'reflect-metadata'
import type { EntityManager } from 'typeorm'
import { Collection, Listing, ListingSale, ListingStatus, Token } from '../../model'

enum Timeframe {
    HOUR = 'HOUR',
    HOUR_6 = 'HOUR_6',
    HOUR_24 = 'HOUR_24',
    WEEK = 'WEEK',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
}

const timeFrameMap = {
    HOUR: { c: '1 hour', p: '2 hours' },
    HOUR_6: { c: '6 hours', p: '12 hours' },
    HOUR_24: { c: '24 hours', p: '48 hours' },
    WEEK: { c: '7 days', p: '14 days' },
    MONTH: { c: '30 days', p: '60 days' },
    YEAR: { c: '365 days', p: '730 days' },
}

enum OrderBy {
    VOLUME = 'volume',
    SALES = 'sales',
    VOLUME_CHANGE = 'volume_change',
}

enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(Timeframe, {
    name: 'Timeframe',
})

registerEnumType(OrderBy, {
    name: 'OrderBy',
})

registerEnumType(Order, {
    name: 'Order',
})

@ObjectType()
export class CollectionRow {
    @Field(() => ID, { nullable: false })
    id!: string

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field(() => Json, { nullable: true })
    stats!: typeof JSON

    @Field({ nullable: false })
    volume_change!: string

    @Field({ nullable: false })
    volume!: string

    @Field(() => Int, { nullable: false })
    sales!: number

    constructor(props: Partial<CollectionRow>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class TopCollectionResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => [CollectionRow])
    async topCollection(
        @Arg('timeFrame', () => Timeframe) timeFrame: Timeframe,
        @Arg('orderBy', () => OrderBy) orderBy: OrderBy,
        @Arg('order', () => Order) order: Order,
        @Arg('offset', () => Int) offset: number = 0,
        @Arg('limit', () => Int) limit: number = 10
    ): Promise<CollectionRow[]> {
        const manager = await this.tx()

        const builder = manager
            .createQueryBuilder()
            .addSelect('collectionId AS id')
            .addSelect('metadata AS metadata')
            .addSelect('stats AS stats')
            .addSelect('volume_last_duration AS volume')
            .addSelect('sales_last_duration AS sales')
            .addSelect(
                'CASE WHEN volume_previous_duration != 0 THEN ROUND((volume_last_duration - volume_previous_duration) * 100 / volume_previous_duration, 2) ELSE 100 END AS volume_change'
            )
            .from((qb) => {
                return qb
                    .select('collection.id AS collectionId')
                    .addSelect('collection.metadata AS metadata')
                    .addSelect('collection.stats AS stats')
                    .addSelect(
                        `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_last_duration`
                    )
                    .addSelect(
                        `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}' AND sale.created_at <= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_previous_duration`
                    )
                    .addSelect(
                        `COUNT(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.id ELSE NULL END)::int AS sales_last_duration`
                    )
                    .from(ListingSale, 'sale')
                    .innerJoin(Listing, 'listing', 'listing.id = sale.listing')
                    .innerJoin(Token, 'token', 'listing.make_asset_id_id = token.id')
                    .innerJoin(Collection, 'collection', 'token.collection = collection.id')
                    .leftJoin(ListingStatus, 'status', `listing.id = status.listing AND status.type = 'Finalized'`)
                    .where(`sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}'`)
                    .addGroupBy('collection.id')
            }, 'l')
            .orderBy(orderBy, order)
            .limit(limit)
            .offset(offset)

        return builder.getRawMany()
    }
}
