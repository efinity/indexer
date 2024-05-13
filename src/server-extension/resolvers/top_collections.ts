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
    ALL = 'ALL',
}

const timeFrameMap = {
    HOUR: { c: '1 hour', p: '2 hours' },
    HOUR_6: { c: '6 hours', p: '12 hours' },
    HOUR_24: { c: '24 hours', p: '48 hours' },
    WEEK: { c: '7 days', p: '14 days' },
    MONTH: { c: '30 days', p: '60 days' },
    YEAR: { c: '365 days', p: '730 days' },
    ALL: { c: '0', p: '0' },
}

enum TopCollectionOrderBy {
    VOLUME = 'volume',
    SALES = 'sales',
    VOLUME_CHANGE = 'volume_change',
    USERS = 'users',
    CATEGORY = 'category',
}

enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

registerEnumType(Timeframe, {
    name: 'Timeframe',
})

registerEnumType(TopCollectionOrderBy, {
    name: 'TopCollectionOrderBy',
})

registerEnumType(Order, {
    name: 'TopCollectionOrder',
})

@ObjectType()
export class CollectionRow {
    @Field(() => ID, { nullable: false })
    id!: string

    @Field(() => Json, { nullable: true })
    metadata!: typeof Json

    @Field({ nullable: true })
    category!: string

    @Field(() => Json, { nullable: true })
    stats!: typeof JSON

    @Field({ nullable: true })
    volume_change!: string

    @Field({ nullable: false })
    volume!: string

    @Field(() => Int, { nullable: false })
    sales!: number

    @Field(() => Int, { nullable: false })
    users!: number

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
        @Arg('orderBy', () => TopCollectionOrderBy) orderBy: TopCollectionOrderBy,
        @Arg('category', () => [String], { nullable: true, defaultValue: [] }) category: string[],
        @Arg('query', { nullable: true, description: 'Search by collection name' }) query: string,
        @Arg('order', () => Order) order: Order,
        @Arg('offset', () => Int) offset: number = 0,
        @Arg('limit', () => Int) limit: number = 10
    ): Promise<CollectionRow[]> {
        const manager = await this.tx()

        const builder = manager
            .createQueryBuilder()
            .addSelect('collectionId AS id')
            .addSelect('(SELECT COUNT(*)::int FROM collection_account a where a.collection_id = l.collectionId) AS users')
            .addSelect('metadata AS metadata')
            .addSelect('stats AS stats')
            .addSelect('volume_last_duration AS volume')
            .addSelect('sales_last_duration AS sales')
            .addSelect('category AS category')
            .addSelect(
                'CASE WHEN volume_previous_duration != 0 THEN ROUND((volume_last_duration - volume_previous_duration) * 100 / volume_previous_duration, 2) ELSE null END AS volume_change'
            )
            .from((qb) => {
                const inBuilder = qb
                    .select('collection.id AS collectionId')
                    .addSelect('collection.metadata AS metadata')
                    .addSelect('collection.stats AS stats')
                    .addSelect('collection.category AS category')
                if (timeFrame === Timeframe.ALL) {
                    inBuilder
                        .addSelect(`SUM(sale.amount * sale.price) AS volume_last_duration`)
                        .addSelect(`COUNT(sale.id)::int AS sales_last_duration`)
                        .addSelect(`0 AS volume_previous_duration`)
                } else {
                    inBuilder
                        .addSelect(
                            `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_last_duration`
                        )
                        .addSelect(
                            `SUM(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}' AND sale.created_at <= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.amount * sale.price ELSE 0 END) AS volume_previous_duration`
                        )
                        .addSelect(
                            `COUNT(CASE WHEN sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].c}' THEN sale.id ELSE NULL END)::int AS sales_last_duration`
                        )
                        .where(`sale.created_at >= NOW() - INTERVAL '${timeFrameMap[timeFrame].p}'`)
                }

                if (category.length > 0) {
                    inBuilder.andWhere('collection.category IN (:...category)', { category })
                }

                if (query) {
                    inBuilder.andWhere(`collection.metadata->>'name' ILIKE :query`, { query: `%${query}%` })
                }

                inBuilder
                    .from(ListingSale, 'sale')
                    .innerJoin(Listing, 'listing', 'listing.id = sale.listing')
                    .innerJoin(Token, 'token', 'listing.make_asset_id_id = token.id')
                    .innerJoin(Collection, 'collection', 'token.collection = collection.id')
                    .leftJoin(ListingStatus, 'status', `listing.id = status.listing AND status.type = 'Finalized'`)
                    .addGroupBy('collection.id')

                return inBuilder
            }, 'l')
            .orderBy(orderBy, order, 'NULLS LAST')
            .addOrderBy('id', 'DESC')
            .limit(limit)
            .offset(offset)

        return builder.getRawMany()
    }
}
