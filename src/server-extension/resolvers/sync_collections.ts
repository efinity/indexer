/* eslint-disable max-classes-per-file */
import { Query, Resolver } from 'type-graphql'
import 'reflect-metadata'
import { EntityManager, IsNull } from 'typeorm'
import { syncAllCollections } from '../../jobs/collection-stats'
import { Token } from '../../model'
import { processMetadata } from '../../jobs/process-metadata'

const mins10 = 1000 * 60 * 10
let rateLimit: number | null = null

@Resolver()
export class SyncCollectionsResolver {
    constructor(private tx: () => Promise<EntityManager>) {}

    @Query(() => Boolean)
    async syncCollections(): Promise<boolean> {
        const manager = await this.tx()
        if (rateLimit) {
            const timeLeft = Math.ceil((rateLimit + mins10 - Date.now()) / 1000)

            if (timeLeft > 0) {
                return false
            }
        }

        rateLimit = Date.now()

        const tokens = await manager.find(Token, {
            where: { metadata: IsNull() },
            select: ['id'],
            order: { id: 'ASC' },
        })

        tokens.forEach((token) => {
            processMetadata(token.id, 'token', true)
        })

        await syncAllCollections()

        return true
    }
}
