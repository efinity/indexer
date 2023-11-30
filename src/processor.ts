import { DataHandlerContext, SubstrateBatchProcessor, SubstrateBatchProcessorFields } from '@subsquid/substrate-processor'
import config from './config'
import { events } from './types/generated'

export const processor = new SubstrateBatchProcessor()
    .setDataSource(config.dataSource)
    .setBlockRange(config.blockRange || { from: 0 })
    .addCall({
        extrinsic: true,
        stack: true,
    })
    .addEvent({
        name: [
            events.multiTokens.collectionCreated.name,
            events.multiTokens.collectionDestroyed.name,
            events.multiTokens.collectionMutated.name,
            events.multiTokens.collectionAccountCreated.name,
            events.multiTokens.collectionAccountDestroyed.name,
            events.multiTokens.tokenCreated.name,
            events.multiTokens.tokenDestroyed.name,
            events.multiTokens.tokenMutated.name,
            events.multiTokens.tokenAccountCreated.name,
            events.multiTokens.tokenAccountDestroyed.name,
            events.multiTokens.minted.name,
            events.multiTokens.burned.name,
            events.multiTokens.attributeSet.name,
            events.multiTokens.attributeRemoved.name,
            events.multiTokens.frozen.name,
            events.multiTokens.thawed.name,
            events.multiTokens.approved.name,
            events.multiTokens.reserved.name,
            events.multiTokens.unapproved.name,
            events.multiTokens.unreserved.name,
            events.multiTokens.transferred.name,
            events.balances.balanceSet.name,
            events.balances.deposit.name,
            events.balances.dustLost.name,
            events.balances.endowed.name,
            events.balances.reserveRepatriated.name,
            events.balances.reserved.name,
            events.balances.slashed.name,
            events.balances.transfer.name,
            events.balances.unreserved.name,
            events.balances.withdraw.name,
            events.claims.claimed.name,
            events.claims.claimRequested.name,
            events.claims.delayTimeForClaimSet.name,
            events.claims.exchangeRateSet.name,
            events.claims.claimRejected.name,
            events.claims.claimMinted.name,
            events.marketplace.listingCreated.name,
            events.marketplace.listingCancelled.name,
            events.marketplace.listingFilled.name,
            events.marketplace.bidPlaced.name,
            events.marketplace.auctionFinalized.name,
            events.polkadotXcm.attempted.name,
            events.fuelTanks.accountAdded.name,
            events.fuelTanks.accountRemoved.name,
            events.fuelTanks.accountRuleDataRemoved.name,
            events.fuelTanks.freezeStateMutated.name,
            events.fuelTanks.fuelTankCreated.name,
            events.fuelTanks.fuelTankDestroyed.name,
            events.fuelTanks.fuelTankMutated.name,
            events.fuelTanks.ruleSetInserted.name,
            events.fuelTanks.ruleSetRemoved.name,
        ],
        extrinsic: true,
        stack: true,
        call: true,
    })
    .setFields({
        block: {
            timestamp: true,
        },
        call: {
            origin: true,
            success: true,
            args: true,
            name: true,
        },
        extrinsic: {
            fee: true,
            hash: true,
            tip: true,
            signature: true,
            version: true,
            success: true,
            error: true,
        },
    })

type Fields = SubstrateBatchProcessorFields<typeof processor>
export type ProcessorContext<Store> = DataHandlerContext<Store, Fields>
