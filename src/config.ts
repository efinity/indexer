/* eslint-disable sonarjs/no-duplicate-string */
import { ProcessorConfig } from './types/custom/processorConfig'

const config: ProcessorConfig = {
    chainName: 'rocfinity',
    prefix: 195,
    genesisHash: '0x1cb2120b3afd6da2dca23d8b95e30fd7eabe4357c3d470bc02487a7d6fd00d1d',
    dataSource: {
        archive: 'http://localhost:8080/v1/graphql',
        chain: 'ws://localhost:10010',
    },
    batchSize: 500,
    blockRange: {
        from: 1,
    },
}

export default config
