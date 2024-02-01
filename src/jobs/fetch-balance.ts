import Queue from 'bull'
import { redisConfig } from './common'

export type JobData = { ids: `0x${string}`[] }

export const fetchBalanceQueue = new Queue<JobData>('fetchBalanceQueue', {
    defaultJobOptions: { attempts: 3, removeOnComplete: 50 },
    redis: redisConfig,
    settings: {
        maxStalledCount: 2,
    },
})

export const fetchBalances = async (ids: `0x${string}`[]) => {
    fetchBalanceQueue.add({ ids }).catch(() => {
        // eslint-disable-next-line no-console
        console.log('Closing connection as Redis is not available')
        fetchBalanceQueue.close(true)
    })
}