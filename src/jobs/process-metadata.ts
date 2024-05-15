import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { resourceId: string; type: 'token' | 'collection'; force: boolean; allTokens: boolean }

export const metadataQueue = new Queue<JobData>('metadataQueue', {
    defaultJobOptions: {
        delay: 1000,
        attempts: 3,
        backoff: {
            type: 'exponential',
            delay: 3000,
        },
        removeOnComplete: true,
    },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const processMetadata = async (resourceId: string, type: JobData['type'], force = false, allTokens = false) => {
    metadataQueue.add({ resourceId, type, force, allTokens }, { jobId: `${type}-${resourceId}` }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        metadataQueue.close(true)
    })
}
