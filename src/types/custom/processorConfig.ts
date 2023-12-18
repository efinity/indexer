import { DataSource } from '@subsquid/substrate-processor'
import { Range } from '@subsquid/util-internal-processor-tools'

export interface ProcessorConfig {
    chainName: string
    prefix: number | string
    lastBlockHeight: number
    genesisHash: string
    rpc: string
    dataSource: DataSource,
    batchSize?: number
    blockRange?: Range
    redisHost: string
    redisDb: number
    redisSupportsTls: boolean
    redisPort: number
    marketplaceUrl: string
    sentryDsn?: string
    amazonSns: {
        topicArn: string
        region: string
        credentials: {
            accessKeyId: string
            secretAccessKey: string
        }
    }
}
