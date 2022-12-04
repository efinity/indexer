import { ApiPromise, WsProvider } from '@polkadot/api'
import { SubstrateBlock } from '@subsquid/substrate-processor'
import { ChainInfo, Marketplace } from './model'
import config from './config'
import { Context } from './processor'

const wsProvider = new WsProvider(config.dataSource.chain)
const apiPromise = ApiPromise.create({ provider: wsProvider })

export async function chainState(ctx: Context, block: SubstrateBlock) {
    if (block.height < config.chainStateHeight) return

    const state = new ChainInfo({ id: block.hash })
    const api = await apiPromise
    const apiAt = await api.at(block.hash)

    const [runtime, marketplace] = await Promise.all<any>([
        api.rpc.state.getRuntimeVersion(block.hash),
        apiAt.query.marketplace?.info(),
    ])

    state.genesisHash = config.genesisHash
    state.transactionVersion = runtime.transactionVersion
    state.specVersion = Number(block.specId.split('@')[1])
    state.blockNumber = block.height
    state.blockHash = block.hash
    state.existentialDeposit = BigInt(api.consts.balances.existentialDeposit.toString())
    state.timestamp = new Date(block.timestamp)
    state.marketplace = !marketplace
        ? null
        : new Marketplace({
              protocolFee: marketplace.protocolFee,
              fixedPriceListingCount: marketplace.fixedPriceListingCount,
              auctionListingCount: marketplace.auctionListingCount,
              listingActiveDelay: Number(api.consts.marketplace.listingActiveDelay.toString()),
              listingDeposit: BigInt(api.consts.marketplace.listingDeposit.toString()),
              maxRoundingError: BigInt(api.consts.marketplace.maxRoundingError.toString()),
              maxSaltLength: Number(api.consts.marketplace.maxSaltLength.toString()),
              minimumBidIncreasePercentage: Number(api.consts.marketplace.minimumBidIncreasePercentage.toString()),
          })

    await ctx.store.save(state)
}
