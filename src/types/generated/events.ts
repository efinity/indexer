import assert from 'assert'
import {Chain, ChainContext, EventContext, Event, Result} from './support'
import * as efinityV1 from './efinityV1'
import * as v5 from './v5'
import * as v6 from './v6'
import * as efinityV2 from './efinityV2'
import * as efinityV3 from './efinityV3'

export class AssetRegistryRegisteredAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.RegisteredAsset')
    this._chain = ctx._chain
    this.event = event
  }

  get isV6(): boolean {
    return this._chain.getEventHash('AssetRegistry.RegisteredAsset') === '68ebe2eff76d6c4097e831d8aa160ebbe6cac840732dc752b721f7d490c3b779'
  }

  get asV6(): {assetId: number, metadata: v6.AssetMetadata} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class AssetRegistryUpdatedAssetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'AssetRegistry.UpdatedAsset')
    this._chain = ctx._chain
    this.event = event
  }

  get isV6(): boolean {
    return this._chain.getEventHash('AssetRegistry.UpdatedAsset') === '68ebe2eff76d6c4097e831d8aa160ebbe6cac840732dc752b721f7d490c3b779'
  }

  get asV6(): {assetId: number, metadata: v6.AssetMetadata} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
  }

  /**
   * A balance was set by root. \[who, free, reserved\]
   */
  get asEfinityV1(): [Uint8Array, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A balance was set by root.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.BalanceSet') === '1e2b5d5a07046e6d6e5507661d3f3feaddfb41fc609a2336b24957322080ca77'
  }

  /**
   * A balance was set by root.
   */
  get asEfinityV2(): {who: Uint8Array, free: bigint, reserved: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Deposit') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesDustLostEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.DustLost')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss. \[account, balance\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss. \[account, balance\]
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.DustLost') === '504f155afb2789c50df19d1f747fb2dc0e99bf8b7623c30bdb5cf82029fec760'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asEfinityV2(): {account: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesEndowedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Endowed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was created with some free balance. \[account, free_balance\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * An account was created with some free balance. \[account, free_balance\]
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Endowed') === '75951f685df19cbb5fdda09cf928a105518ceca9576d95bd18d4fac8802730ca'
  }

  /**
   * An account was created with some free balance.
   */
  get asEfinityV2(): {account: Uint8Array, freeBalance: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   * \[from, to, balance, destination_status\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '68e9ec5664c8ffe977da0c890bac43122a5cf13565c1c936e2120ba4980bcf31'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   * \[from, to, balance, destination_status\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint, efinityV1.BalanceStatus] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.ReserveRepatriated') === '6232d50d422cea3a6fd21da36387df36d1d366405d0c589566c6de85c9cf541f'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asEfinityV2(): {from: Uint8Array, to: Uint8Array, amount: bigint, destinationStatus: efinityV2.BalanceStatus} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Some balance was reserved (moved from free to reserved). \[who, value\]
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Reserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Slashed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesTransferEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Transfer')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Transfer succeeded.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asEfinityV2(): {from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * Some balance was unreserved (moved from reserved to free). \[who, value\]
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Unreserved') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BalancesWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Balances.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Balances.Withdraw') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyAwarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyAwarded') === '5314a4c20f133eee477b8b4ce9998238defda69cb2db9344567309c8e6badd90'
  }

  /**
   * A bounty is awarded to a beneficiary.
   */
  get asEfinityV2(): {index: number, beneficiary: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyBecameActiveEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyBecameActive')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyBecameActive') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty proposal is funded and became active.
   */
  get asEfinityV2(): {index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty is cancelled.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyCanceled') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty is cancelled.
   */
  get asEfinityV2(): {index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyClaimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyClaimed') === 'fb4b26ccfabe9f649bfadde9c0bbee0816e9cf32c7384f2f21c03a852ec23f77'
  }

  /**
   * A bounty is claimed by beneficiary.
   */
  get asEfinityV2(): {index: number, payout: bigint, beneficiary: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyExtendedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyExtended')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty expiry is extended.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyExtended') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * A bounty expiry is extended.
   */
  get asEfinityV2(): {index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyProposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New bounty proposal.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyProposed') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
  }

  /**
   * New bounty proposal.
   */
  get asEfinityV2(): {index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class BountiesBountyRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Bounties.BountyRejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Bounties.BountyRejected') === 'dc987b921ffaf859792cab48c45dff837e0f100cb2deeb83c24a11b61e50082e'
  }

  /**
   * A bounty proposal was rejected; funds were slashed.
   */
  get asEfinityV2(): {index: number, bond: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class ClaimsClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Claims.Claimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Someone claimed some EFIs. `[who, ethereum_address, amount]`
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Claims.Claimed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   * Someone claimed some EFIs. `[who, ethereum_address, amount]`
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Someone claimed some EFIs. `[who, ethereum_address, amount]`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Claims.Claimed') === 'b531097805a7255730ef1f4b9fb31dcd004dfcff933248b0a47610d6c2c62501'
  }

  /**
   * Someone claimed some EFIs. `[who, ethereum_address, amount]`
   */
  get asEfinityV2(): {who: Uint8Array, ethereumAddress: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingCandidateJoinedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.CandidateJoined')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new candidate joined the list of candidates.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.CandidateJoined') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * A new candidate joined the list of candidates.
   */
  get asEfinityV1(): [Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new candidate joined the list of candidates.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.CandidateJoined') === '5c22adf9ab0a12f3b709d6b32a35556b87e0f70c63b146c8491a92333f622d70'
  }

  /**
   * A new candidate joined the list of candidates.
   */
  get asEfinityV2(): {accountId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingCandidateRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.CandidateRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Candidate was removed.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.CandidateRemoved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Candidate was removed.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Candidate was removed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.CandidateRemoved') === '4c99ef39b683041b136506afc1f762bdcd37f0231162345da388897a103d3710'
  }

  /**
   * Candidate was removed.
   */
  get asEfinityV2(): {accountId: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingCollatorSelectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.CollatorSelected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A candidate has been selected to become a collator for the current round.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.CollatorSelected') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A candidate has been selected to become a collator for the current round.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A candidate has been selected to become a collator for the current round.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.CollatorSelected') === '4c99ef39b683041b136506afc1f762bdcd37f0231162345da388897a103d3710'
  }

  /**
   * A candidate has been selected to become a collator for the current round.
   */
  get asEfinityV2(): {accountId: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingNewInvulnerablesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.NewInvulnerables')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new list of invulnerables has been set by root.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.NewInvulnerables') === '4f4db85b7e763f702804fa793ac5cba68cfd546b497830a9c3c21dced2b91524'
  }

  /**
   * A new list of invulnerables has been set by root.
   */
  get asEfinityV2(): {new: Uint8Array[]} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingNominatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.Nominated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new nomination was registered for a specific candidate.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.Nominated') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * A new nomination was registered for a specific candidate.
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new nomination was registered for a specific candidate.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.Nominated') === 'e92f24d1473344b5c78de6cd4cb25c3583c8b45653e5ef7765a711cc41db99cd'
  }

  /**
   * A new nomination was registered for a specific candidate.
   */
  get asEfinityV2(): {accountId: Uint8Array, collatorId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingNominationRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.NominationRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Nomination was removed.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.NominationRemoved') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Nomination was removed.
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Nomination was removed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.NominationRemoved') === 'e92f24d1473344b5c78de6cd4cb25c3583c8b45653e5ef7765a711cc41db99cd'
  }

  /**
   * Nomination was removed.
   */
  get asEfinityV2(): {accountId: Uint8Array, collatorId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CollatorStakingRoundFinalizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CollatorStaking.RoundFinalized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new round was finalized
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CollatorStaking.RoundFinalized') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * A new round was finalized
   */
  get asEfinityV1(): number {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new round was finalized
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CollatorStaking.RoundFinalized') === '0887503579c2b4b6d8d4a30bb0ed96879579c0d1adaa9d8219ee6a7e3025d4fd'
  }

  /**
   * A new round was finalized
   */
  get asEfinityV2(): {number: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolAwardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Awarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been allocated.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Awarded') === '998b846fdf605dfbbe27d46b36b246537b990ed6d4deb2f0177d539b9dab3878'
  }

  /**
   * Some funds have been allocated.
   */
  get asEfinityV2(): {proposalIndex: number, award: bigint, account: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolBurntEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Burnt')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some of our funds have been burnt.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Burnt') === '9d1d11cb2e24085666bf949195a4030bd6e80ff41274d0386073977e7cd59a87'
  }

  /**
   * Some of our funds have been burnt.
   */
  get asEfinityV2(): {burntFunds: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some funds have been deposited.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Deposit') === 'd74027ad27459f17d7446fef449271d1b0dc12b852c175623e871d009a661493'
  }

  /**
   * Some funds have been deposited.
   */
  get asEfinityV2(): {value: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New proposal.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asEfinityV2(): {proposalIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolRejectedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Rejected')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asEfinityV2(): {proposalIndex: number, slashed: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolRolloverEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Rollover')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Rollover') === 'c9e720e2b3ada12c617b4dcb70771c3afafb9e294bf362df01a9e129683a92dd'
  }

  /**
   * Spending has finished; this is the amount that rolls over until next spend.
   */
  get asEfinityV2(): {rolloverBalance: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolSpendApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.SpendApproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new spend proposal has been approved.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('CommunityPool.SpendApproved') === 'fce90c02bffde89fb0e8723868aa8e94bfe9c1c48c5af8c34efd8ff5173184f9'
  }

  /**
   * A new spend proposal has been approved.
   */
  get asV5(): {proposalIndex: number, amount: bigint, beneficiary: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class CommunityPoolSpendingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CommunityPool.Spending')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CommunityPool.Spending') === 'b9f599ccbbe2e4fd1004f47546e1a3100bc78745b24ac47ac03ed16ca6266290'
  }

  /**
   * We have ended a spend period and will now allocate funds.
   */
  get asEfinityV2(): {budgetRemaining: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsCalledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.Called')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contract was called either by a plain account or another contract.
   * 
   * # Note
   * 
   * Please keep in mind that like all events this is only emitted for successful
   * calls. This is because on failure all storage changes including events are
   * rolled back.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Contracts.Called') === '21a729a4d368d7f57eb42f0ec77b595e3270a67ec14974cfcbc643abeda2921f'
  }

  /**
   * A contract was called either by a plain account or another contract.
   * 
   * # Note
   * 
   * Please keep in mind that like all events this is only emitted for successful
   * calls. This is because on failure all storage changes including events are
   * rolled back.
   */
  get asV6(): {caller: Uint8Array, contract: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsCodeRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.CodeRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A code with the specified hash was removed.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.CodeRemoved') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  /**
   * A code with the specified hash was removed.
   */
  get asV5(): {codeHash: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsCodeStoredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.CodeStored')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Code with the specified hash has been stored.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.CodeStored') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  /**
   * Code with the specified hash has been stored.
   */
  get asV5(): {codeHash: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsContractCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.ContractCodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contract's code was updated.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.ContractCodeUpdated') === 'f9de6decda4961d31d7cf59e3f8acd4849a220323ebabbb036464d999de54c18'
  }

  /**
   * A contract's code was updated.
   */
  get asV5(): {contract: Uint8Array, newCodeHash: Uint8Array, oldCodeHash: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsContractEmittedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.ContractEmitted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A custom event emitted by the contract.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.ContractEmitted') === '7f28393268795b9a97f05e82911cdcc4200d99e9968c1ab6a564f949f753b929'
  }

  /**
   * A custom event emitted by the contract.
   */
  get asV5(): {contract: Uint8Array, data: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsDelegateCalledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.DelegateCalled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A contract delegate called a code hash.
   * 
   * # Note
   * 
   * Please keep in mind that like all events this is only emitted for successful
   * calls. This is because on failure all storage changes including events are
   * rolled back.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Contracts.DelegateCalled') === '76261d7cbe52d35ce20ad428e69f2cc49c1719d1fbb27a3b951b1e26e8ef5993'
  }

  /**
   * A contract delegate called a code hash.
   * 
   * # Note
   * 
   * Please keep in mind that like all events this is only emitted for successful
   * calls. This is because on failure all storage changes including events are
   * rolled back.
   */
  get asV6(): {contract: Uint8Array, codeHash: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsInstantiatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.Instantiated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Contract deployed by address at the specified address.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.Instantiated') === '20f9f9057a4149f58eb48c00359f9800a42b51d4d2168437dfcce668c27a8d37'
  }

  /**
   * Contract deployed by address at the specified address.
   */
  get asV5(): {deployer: Uint8Array, contract: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ContractsTerminatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Contracts.Terminated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Contract has been removed.
   * 
   * # Note
   * 
   * The only way for a contract to be removed and emitting this event is by calling
   * `seal_terminate`.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Contracts.Terminated') === '8e0b376b4821223ecd835a0ae76a615e7aa14158260ff9c7f87220449d98175b'
  }

  /**
   * Contract has been removed.
   * 
   * # Note
   * 
   * The only way for a contract to be removed and emitting this event is by calling
   * `seal_terminate`.
   */
  get asV5(): {contract: Uint8Array, beneficiary: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asEfinityV2(): {proposalHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asEfinityV2(): {proposalHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Council.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asEfinityV3(): {proposalHash: Uint8Array, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Council.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asEfinityV3(): {proposalHash: Uint8Array, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asEfinityV2(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CouncilVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Council.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Council.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asEfinityV2(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === 'ce1ecc6cb7bde7a0e967ed0e6caff9002b8e335404bc1e51403dc21d44028613'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asEfinityV1(): [Uint8Array, efinityV1.V2Outcome] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('CumulusXcm.ExecutedDownward') === '155c7cce0948b8cb240d1401bb772a72b24567aa52618e9a4aaa84271c380044'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asEfinityV2(): [Uint8Array, efinityV2.V2Outcome] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.InvalidFormat') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class CumulusXcmUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'CumulusXcm.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('CumulusXcm.UnsupportedVersion') === '6e16a60605a9f0946795787675f1f0ec4f4cd1665cfea6599116111a008c8f0e'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyBlacklistedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Blacklisted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Blacklisted') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A proposal_hash has been blacklisted permanently.
   */
  get asEfinityV2(): {proposalHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Cancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has been cancelled.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asEfinityV2(): {refIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyDelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Delegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has delegated their vote to another account.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Delegated') === 'd8ff3867ebae06e6ac747a81d5397793d2a1994d97871736019b811a47b1be06'
  }

  /**
   * An account has delegated their vote to another account.
   */
  get asEfinityV2(): {who: Uint8Array, target: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been enacted.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asEfinityV2(): {refIndex: number, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Democracy.Executed') === '2abe2e7ca2af8b119eb4f3a1f669843943049e3f4e2f613fc3b077115902ca2b'
  }

  /**
   * A proposal has been enacted.
   */
  get asEfinityV3(): {refIndex: number, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyExternalTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ExternalTabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been tabled.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.ExternalTabled') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * An external proposal has been tabled.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyNotPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.NotPassed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asEfinityV2(): {refIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPassedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Passed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asEfinityV2(): {refIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageInvalidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageInvalid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageMissingEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageMissing')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, refIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageNoted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.PreimageNoted') === 'd070eaca902e57d242e4f2fcf32e1044fe909d807ce0a0303e2bb45499fc9748'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, who: Uint8Array, deposit: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageReapedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageReaped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.PreimageReaped') === '3140454b0dfcc8f9c1ccda6a2fe7f5153f3d34c52e1e5bb1d954b96b8f5dd4a5'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint, reaper: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyPreimageUsedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.PreimageUsed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.PreimageUsed') === '7b28a71d659ed286affdbc9e835b253b80485e4b3be08d04bfb153f8f8cc5241'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asEfinityV2(): {proposalHash: Uint8Array, provider: Uint8Array, deposit: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposalCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.ProposalCanceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal got canceled.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Democracy.ProposalCanceled') === '4229a060ed682a59f5b96a0a1d18ae4a471b42fbbe5beff110f3dbb41e7d7224'
  }

  /**
   * A proposal got canceled.
   */
  get asV5(): {propIndex: number} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asEfinityV2(): {proposalIndex: number, deposit: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracySecondedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Seconded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has secconded a proposal
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Seconded') === '956e0986199802f7d7e337068d26fc51e710bdd0e5dd70631ef3328ea5baafe1'
  }

  /**
   * An account has secconded a proposal
   */
  get asEfinityV2(): {seconder: Uint8Array, propIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyStartedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Started')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A referendum has begun.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asEfinityV2(): {refIndex: number, threshold: efinityV2.VoteThreshold} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyTabledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Tabled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Tabled') === 'a13f0b4abdda616a48f0910930f31ca5c2a2a8068c5289a35d395475289bd1e0'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asEfinityV2(): {proposalIndex: number, deposit: bigint, depositors: Uint8Array[]} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyUndelegatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Undelegated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Undelegated') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account has cancelled a previous delegation operation.
   */
  get asEfinityV2(): {account: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVetoedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Vetoed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An external proposal has been vetoed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Vetoed') === '8c436495ac4c75fd20d25b6b1c1b2bbebbea576444eac1b5b7b15ecb833e5c4f'
  }

  /**
   * An external proposal has been vetoed.
   */
  get asEfinityV2(): {who: Uint8Array, proposalHash: Uint8Array, until: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DemocracyVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Democracy.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account has voted in a referendum
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Democracy.Voted') === '1f7c6893e642faadc0fb2681a07f3aa74579a935cb93e932ab8fd8a9e9fe739c'
  }

  /**
   * An account has voted in a referendum
   */
  get asEfinityV2(): {voter: Uint8Array, refIndex: number, vote: efinityV2.AccountVote} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueExecutedDownwardEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.ExecutedDownward')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === 'f660a1eb74571095e7cab99beb471c0ab4687ebb9afcd9f8734fc316dd9f477d'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asEfinityV1(): [Uint8Array, efinityV1.V2Outcome] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '286143d78cae88e1dcd7f8fca6da4dcb49ebc3ba61ad473eec7ff13812f3fd56'
  }

  /**
   * Downward message executed with the given outcome.
   * \[ id, outcome \]
   */
  get asEfinityV2(): [Uint8Array, efinityV2.V2Outcome] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message executed with the given outcome.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.ExecutedDownward') === '9b6c90aca74067a591eda76a227e61ce66cd6597483f828a039aba267c0d21a9'
  }

  /**
   * Downward message executed with the given outcome.
   */
  get asV5(): {messageId: Uint8Array, outcome: v5.V2Outcome} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueInvalidFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.InvalidFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is invalid XCM.
   * \[ id \]
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is invalid XCM.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.InvalidFormat') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is invalid XCM.
   */
  get asV5(): {messageId: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   * \[ id, index, required \]
   */
  get asEfinityV1(): [Uint8Array, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ffa192c80e10233d155345fc4cc34bc357a97a6465c78ccf6a14b02ee5b8c21f'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get asV5(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightEnqueued') === 'ad9cb107597768cf938dffc06f4759d95e30b4d686ee33c209c5a44145df0c73'
  }

  /**
   * Downward message is overweight and was placed in the overweight queue.
   */
  get asV6(): {messageId: Uint8Array, overweightIndex: bigint, requiredWeight: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * Downward message from the overweight queue was executed.
   * \[ index, used \]
   */
  get asEfinityV1(): [bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === '7deec7d9ba4a81157571b321671d50b393890bd802f27d9b3ba2609ffa497713'
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get asV5(): {overweightIndex: bigint, weightUsed: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('DmpQueue.OverweightServiced') === 'f16ac3f6b10f93f6d4efd4dde1eba6cc73e06d27c2e2ec66eec4923e16cbfc6f'
  }

  /**
   * Downward message from the overweight queue was executed.
   */
  get asV6(): {overweightIndex: bigint, weightUsed: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueUnsupportedVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.UnsupportedVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * Downward message is unsupported version of XCM.
   * \[ id \]
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.UnsupportedVersion') === '6bcb1469518e8e7bacd0242af782ebd652887f65f7377a9b2d81ccea6505416e'
  }

  /**
   * Downward message is unsupported version of XCM.
   */
  get asV5(): {messageId: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class DmpQueueWeightExhaustedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'DmpQueue.WeightExhausted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === '5ecf574fedb0dd818c5b40ec149d9c842d218107d35c4018d00cc169f56e1267'
  }

  /**
   * The weight limit for handling downward messages was reached.
   * \[ id, remaining, required \]
   */
  get asEfinityV1(): [Uint8Array, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'dcf12831e69a1760af0584247b404096aa4ce1c77c7b3caae95d831bf4afa0b2'
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get asV5(): {messageId: Uint8Array, remainingWeight: bigint, requiredWeight: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('DmpQueue.WeightExhausted') === 'b9a55b745575cc47de66be392bf446a9558a5b3e9201c5b37598517251cff44f'
  }

  /**
   * The weight limit for handling downward messages was reached.
   */
  get asV6(): {messageId: Uint8Array, remainingWeight: v6.Weight, requiredWeight: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExtrinsicPauseExtrinsicPausedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ExtrinsicPause.ExtrinsicPaused')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Extrinsic is paused.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('ExtrinsicPause.ExtrinsicPaused') === '6ef577cdfb00cd6410f53ba28c3235494d461bd891dc700de04b9b0006f06777'
  }

  /**
   * Extrinsic is paused.
   */
  get asV6(): {palletName: Uint8Array, extrinsicName: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExtrinsicPauseExtrinsicResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ExtrinsicPause.ExtrinsicResumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Extrinsic is resumed
   */
  get isV6(): boolean {
    return this._chain.getEventHash('ExtrinsicPause.ExtrinsicResumed') === '6ef577cdfb00cd6410f53ba28c3235494d461bd891dc700de04b9b0006f06777'
  }

  /**
   * Extrinsic is resumed
   */
  get asV6(): {palletName: Uint8Array, extrinsicName: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExtrinsicPausePalletPausedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ExtrinsicPause.PalletPaused')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * All pallet extrinsics are paused.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('ExtrinsicPause.PalletPaused') === '05a07cab9aa4011d0b711292d898fdb778885ca7cb3469b117d99d61976a52e1'
  }

  /**
   * All pallet extrinsics are paused.
   */
  get asV6(): {palletName: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ExtrinsicPausePalletResumedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ExtrinsicPause.PalletResumed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * All pallet extrinsics are resumed.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('ExtrinsicPause.PalletResumed') === '05a07cab9aa4011d0b711292d898fdb778885ca7cb3469b117d99d61976a52e1'
  }

  /**
   * All pallet extrinsics are resumed.
   */
  get asV6(): {palletName: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksAccountAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.AccountAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was added to a `FuelTank`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.AccountAdded') === 'eaba5f9eb5b376c10a9ee1aded196439de7b5045a6bdf4f20126a6ceada70754'
  }

  /**
   * An account was added to a `FuelTank`
   */
  get asV6(): {tankId: Uint8Array, userId: Uint8Array, tankDeposit: bigint, userDeposit: bigint} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksAccountRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.AccountRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An account was removed from a `FuelTank`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.AccountRemoved') === '43c705fb2ded534752f36760bbd7adf8ef7a48bb267a3e4ba8d013de6ebb2af7'
  }

  /**
   * An account was removed from a `FuelTank`
   */
  get asV6(): {tankId: Uint8Array, userId: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksAccountRuleDataRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.AccountRuleDataRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.AccountRuleDataRemoved') === 'db874e9016c234ff7c0d3d7513e322a8f341a1aadea9f5ad94cd841c8c66cf58'
  }

  get asV6(): {tankId: Uint8Array, userId: Uint8Array, ruleSetId: number, ruleKind: v6.DispatchRuleKind} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksCallDispatchedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.CallDispatched')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A call was dispatched through a `FuelTank`.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.CallDispatched') === 'c286719ddfc6a64566bdc115c4ace78fd41c94915f092887ef38021ae647e549'
  }

  /**
   * A call was dispatched through a `FuelTank`.
   */
  get asV6(): {caller: Uint8Array, tankId: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksDispatchFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.DispatchFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The dispatch of a call has failed
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.DispatchFailed') === 'ecc4387a0d31a78d64a6b00bc747bf092949bc2de147733ac66379c6f018f75d'
  }

  /**
   * The dispatch of a call has failed
   */
  get asV6(): {tankId: Uint8Array, caller: Uint8Array, error: v6.DispatchError} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksFreezeStateMutatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.FreezeStateMutated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.FreezeStateMutated') === '487d487c4b8088c43cf90c0ffbee2c293b22157c580d0629a9657751820d3405'
  }

  /**
   * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
   */
  get asV6(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksFuelTankCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.FuelTankCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `FuelTank` was created.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.FuelTankCreated') === '5048d94dfd3a5170e9ea1d697d818d3166955fb933f983e64f3af4cd0e7b2c52'
  }

  /**
   * A new `FuelTank` was created.
   */
  get asV6(): {owner: Uint8Array, name: Uint8Array, tankId: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksFuelTankDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.FuelTankDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `FuelTank` was destroyed
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.FuelTankDestroyed') === '4a9035be2f47fbe13a50c15f06b7abda8e85d0d8378fc409cc5492db6ff608d5'
  }

  /**
   * A `FuelTank` was destroyed
   */
  get asV6(): {tankId: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksFuelTankMutatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.FuelTankMutated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `FuelTank` was mutated
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.FuelTankMutated') === '319f92edc8c49bd44ce6aadeb63537f12d3f47c92d53f48e6605066e28278185'
  }

  /**
   * A `FuelTank` was mutated
   */
  get asV6(): {tankId: Uint8Array, mutation: v6.DefaultTankMutation} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksMutateFreezeStateScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.MutateFreezeStateScheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The freeze state mutation for fuel tank or its rule set was scheduled
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.MutateFreezeStateScheduled') === '487d487c4b8088c43cf90c0ffbee2c293b22157c580d0629a9657751820d3405'
  }

  /**
   * The freeze state mutation for fuel tank or its rule set was scheduled
   */
  get asV6(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksRuleSetInsertedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.RuleSetInserted')
    this._chain = ctx._chain
    this.event = event
  }

  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.RuleSetInserted') === 'f0c7cbfea12e67a5e10a71fb2103b883d2fdacdce7e9e339d55ea06b41087531'
  }

  get asV6(): {tankId: Uint8Array, ruleSetId: number} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksRuleSetRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.RuleSetRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.RuleSetRemoved') === 'f0c7cbfea12e67a5e10a71fb2103b883d2fdacdce7e9e339d55ea06b41087531'
  }

  get asV6(): {tankId: Uint8Array, ruleSetId: number} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class FuelTanksScheduleMutateFreezeStateFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'FuelTanks.ScheduleMutateFreezeStateFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The freeze state change for fuel tank or its rule set failed in `on_finalize`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('FuelTanks.ScheduleMutateFreezeStateFailed') === 'c73fb229d29728f33c9309648949729ae95af1b837bc64b2e5e7ac3bf3fc6ef2'
  }

  /**
   * The freeze state change for fuel tank or its rule set failed in `on_finalize`
   */
  get asV6(): {tankId: Uint8Array, ruleSetId: (number | undefined), isFrozen: boolean, error: v6.DispatchError} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceAuctionFinalizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.AuctionFinalized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An auction was finalized
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Marketplace.AuctionFinalized') === '85c874f079d7788c46e5ee8f064d0e75d1bee7e2b192276db015bf838a4226a7'
  }

  /**
   * An auction was finalized
   */
  get asV6(): {listingId: Uint8Array, winningBid: (v6.Bid | undefined), protocolFee: bigint, royalty: bigint} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceBidPlacedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.BidPlaced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A bid was placed
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Marketplace.BidPlaced') === '43772e41069f9311a69337de1da60bd0d625f0cbb2b82db1e5646defd34f6318'
  }

  /**
   * A bid was placed
   */
  get asV6(): {listingId: Uint8Array, bid: v6.Bid} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceListingCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.ListingCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A listing was cancelled
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Marketplace.ListingCancelled') === '56b483accb79407d2146b841c242046f1ff043c0a2fda9fb311497fdcd762679'
  }

  /**
   * A listing was cancelled
   */
  get asV6(): {listingId: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceListingCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.ListingCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A listing was created
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Marketplace.ListingCreated') === '396b87e5fef710b0fb92ab0a1d2f82c41b7ad217eaec1ac1b7c0b53b3d4e8449'
  }

  /**
   * A listing was created
   */
  get asV6(): {listingId: Uint8Array, listing: v6.Listing} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MarketplaceListingFilledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Marketplace.ListingFilled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A listing was filled or partially filled
   */
  get isV6(): boolean {
    return this._chain.getEventHash('Marketplace.ListingFilled') === '3fb016766e57e5a9a1b2da399d304573a092435b3fea70b58bb10cdf6bacc899'
  }

  /**
   * A listing was filled or partially filled
   */
  get asV6(): {listingId: Uint8Array, buyer: Uint8Array, amountFilled: bigint, amountRemaining: bigint, protocolFee: bigint, royalty: bigint} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsAssetAttributeClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.AssetAttributeCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset attribute has been cleared for an asset. \[asset_id, key\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.AssetAttributeCleared') === '483b873436b94231dd53ca1504bb0c4112d5f977d85f24213bc8df5a3c7e693b'
  }

  /**
   * Asset attribute has been cleared for an asset. \[asset_id, key\]
   */
  get asEfinityV1(): [bigint, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsAssetAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.AssetAttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New asset attribute has been set for an asset. \[asset_id, key, value\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.AssetAttributeSet') === 'fc09436310c69c7f74f71ad1f3bc983530bc01a9070c5c9c6ca3a4aa9da6318e'
  }

  /**
   * New asset attribute has been set for an asset. \[asset_id, key, value\]
   */
  get asEfinityV1(): [bigint, Uint8Array, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsAssetCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.AssetCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new asset was created by `owner`. \[class_id, owner\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.AssetCreated') === '06f429abb9e0113523a2523f8db0c3bd34b068fa2de515a51d3e616b00bcdf96'
  }

  /**
   * A new asset was created by `owner`. \[class_id, owner\]
   */
  get asEfinityV1(): [bigint, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `asset` was destroyed. \[ asset, amount, owner \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.Burned') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
  }

  /**
   * An `asset` was destroyed. \[ asset, amount, owner \]
   */
  get asEfinityV1(): [Uint8Array, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The balance of the asset was minted by owner. \[owner, asset, amount\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.Minted') === '0f263bfdefa394edfb38d20d33662423a2e0902235b599f9b2b0292f157f0902'
  }

  /**
   * The balance of the asset was minted by owner. \[owner, asset, amount\]
   */
  get asEfinityV1(): [Uint8Array, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsOwnershipTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.OwnershipTransferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Ownership of the given `asset` was transferred. \[from, to, asset\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.OwnershipTransferred') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Ownership of the given `asset` was transferred. \[from, to, asset\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTokenAttributeClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TokenAttributeCleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token attribute has been cleared for an asset. \[asset_id, token, key\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TokenAttributeCleared') === '9624aaf366760dd3440c916e892e793a904e90a8eb6a57e56ea34e9773522749'
  }

  /**
   * Token attribute has been cleared for an asset. \[asset_id, token, key\]
   */
  get asEfinityV1(): [bigint, number, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTokenAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TokenAttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New token attribute has been set for an asset. \[asset_id, token, key, value\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TokenAttributeSet') === 'b1eeac4b7cfbad90e6686ac533a856d3ed49f0643c738b82b3445d12d6ed1669'
  }

  /**
   * New token attribute has been set for an asset. \[asset_id, token, key, value\]
   */
  get asEfinityV1(): [bigint, number, Uint8Array, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTokensBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TokensBurned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `tokens` of `asset` from `account` were burned. \[ account, asset, tokens \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TokensBurned') === 'c82b061b3d7b2ec5e87cdd87424676e7a202de6f1184a630475ca3b2bcbc00c6'
  }

  /**
   * `tokens` of `asset` from `account` were burned. \[ account, asset, tokens \]
   */
  get asEfinityV1(): [Uint8Array, bigint, efinityV1.Range[]] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTokensMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TokensMinted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New tokens were minted on asset. \[owner, asset, from_token, to_token \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TokensMinted') === '1f640b3e36a1c058c03a5e381d02671ebeadc48c47046ac4af204400ef432b45'
  }

  /**
   * New tokens were minted on asset. \[owner, asset, from_token, to_token \]
   */
  get asEfinityV1(): [Uint8Array, bigint, number, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTransferredBatchEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TransferredBatch')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The given `recipients` were transfer from `from` account. \[from, asset, recipients\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TransferredBatch') === 'a5d810f3a1d4c6ada51e4194d7064b2b6895186e85513b5f4940187754576237'
  }

  /**
   * The given `recipients` were transfer from `from` account. \[from, asset, recipients\]
   */
  get asEfinityV1(): [Uint8Array, bigint, efinityV1.Recipient[]] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTransferredSingleEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TransferredSingle')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The given amount of `token` from `asset` was transferred. \[from, to, asset, token, amount\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TransferredSingle') === '03b4c05284e0f1ca49dfbc9fbb442697bb4237ebefa3102b6d9a470690acab89'
  }

  /**
   * The given amount of `token` from `asset` was transferred. \[from, to, asset, token, amount\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint, (number | undefined), bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsTransferredSingleChunkEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssets.TransferredSingleChunk')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Tokens from `chunk` of `asset` were transfered from `source` to `destination`.
   * \[source, destination, asset, chunk\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssets.TransferredSingleChunk') === 'f82fc9d93a20e23041a68ef1c1b8da9586ddfaeab513735359af306dfc5931f4'
  }

  /**
   * Tokens from `chunk` of `asset` were transfered from `source` to `destination`.
   * \[source, destination, asset, chunk\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array, bigint, efinityV1.Range[]] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsOperatorExtApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssetsOperatorExt.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset(s) were approved. If `asset` and `token` are None, it applies to all.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssetsOperatorExt.Approved') === 'e53ee63d2885dbd9960a98a80763bf8cb33f6181d923ccb9232f8ad905a4f69e'
  }

  /**
   * Asset(s) were approved. If `asset` and `token` are None, it applies to all.
   */
  get asEfinityV1(): {owner: Uint8Array, operator: Uint8Array, asset: (bigint | undefined), token: (number | undefined), amount: (bigint | undefined), expiration: efinityV1.Expiration} {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiAssetsOperatorExtUnapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiAssetsOperatorExt.Unapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Asset(s) were unapproved. If `asset` and `token` are None, it applies to all.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('MultiAssetsOperatorExt.Unapproved') === 'e72cb6619817c27bb9d60ee2e2646c80ff9f8b5a899b70ecc88e3474fe0cf3ed'
  }

  /**
   * Asset(s) were unapproved. If `asset` and `token` are None, it applies to all.
   */
  get asEfinityV1(): {owner: Uint8Array, operator: Uint8Array, asset: (bigint | undefined), token: (number | undefined)} {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Approved') === 'be2c3db8582ba3e20a4c47b559208645f08eaef7453ba9dcf4fe7d6a8987b514'
  }

  /**
   * An approval took place. If `token_id` is `None`, it applies to the whole collection.
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: Uint8Array, operator: Uint8Array, amount: (bigint | undefined), expiration: (number | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensAttributeRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.AttributeRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An attribute has been removed
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.AttributeRemoved') === '4168a0c4eaad91f81c843978c2860e3e03730b7533206af99d8dc2200efdbec8'
  }

  /**
   * An attribute has been removed
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensAttributeSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.AttributeSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New attribute has been set
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.AttributeSet') === 'd90964f28bdfc61e8bf4173cbde05cc375064aff638f0a40640ab04549efc4c2'
  }

  /**
   * New attribute has been set
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), key: Uint8Array, value: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensBalanceSetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.BalanceSet')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The balance of an account was set
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.BalanceSet') === '3cb09b8a15d07b5683e760eecb82ebaa781774c145bd82cdac763cb6580b44e6'
  }

  /**
   * The balance of an account was set
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, balance: bigint, reservedBalance: bigint} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensBurnedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Burned')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were burned
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Burned') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * Units of a `Token` were burned
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionAccountCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionAccountCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `CollectionAccount` was created
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionAccountCreated') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A new `CollectionAccount` was created
   */
  get asEfinityV2(): {collectionId: bigint, accountId: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionAccountDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionAccountDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionAccountDestroyed') === '7b4295cf1bd074614f172814d727e76bda047f9869c73df3042c6baeb8b314c7'
  }

  /**
   * A `CollectionAccount` was destroyed
   */
  get asEfinityV2(): {collectionId: bigint, accountId: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionAccountUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionAccountUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionAccountUpdated') === '761f2e71ce8970aeaf77cbb18f15b12f4cea58113a28a6163bb7f0d7543998e0'
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get asEfinityV2(): {collectionId: bigint, accountId: Uint8Array, value: (efinityV2.CollectionAccount | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `Collection` was created
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionCreated') === '9f2f2f3af227369fdf6d6bca903e9d24ff2c10dbe8e2e81cc062779b6581c722'
  }

  /**
   * A new `Collection` was created
   */
  get asEfinityV2(): {collectionId: bigint, owner: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Collection` was destroyed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionDestroyed') === '6b20939f2a6c4c23adcb69631c659bbf68a4e266bd90733cacfec7f21ecfc491'
  }

  /**
   * A `Collection` was destroyed.
   */
  get asEfinityV2(): {collectionId: bigint, caller: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionMutatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionMutated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An `Collection` was mutated
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionMutated') === '6cfbadc0a3eb0cef9398f0025daf688142ac6aa6e0de6e285a14fc6cfa182a82'
  }

  /**
   * An `Collection` was mutated
   */
  get asEfinityV2(): {collectionId: bigint, mutation: efinityV2.DefaultCollectionMutation} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An `Collection` was mutated
   */
  get isV6(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionMutated') === '3576d262848cc0833f1d40e6a157d5e47a3330611ce12ad55f089059c16668cb'
  }

  /**
   * An `Collection` was mutated
   */
  get asV6(): {collectionId: bigint, mutation: v6.DefaultCollectionMutation} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensCollectionUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.CollectionUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collection storage was set to `value`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionUpdated') === 'f5757c9d77f7bee93bc0b99201eca0f6cae6e80308cbc199e313b3f308f3421b'
  }

  /**
   * Collection storage was set to `value`
   */
  get asEfinityV2(): {collectionId: bigint, value: (efinityV2.Collection | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Collection storage was set to `value`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('MultiTokens.CollectionUpdated') === '98bf9d540f024070954f2f94467d9e9b5cd79997861f988b682972dd34f2a757'
  }

  /**
   * Collection storage was set to `value`
   */
  get asV6(): {collectionId: bigint, value: (v6.Collection | undefined)} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensDepositEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Deposit')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token units were deposited
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.Deposit') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * Token units were deposited
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensFrozenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Frozen')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collection, token or account was frozen
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Frozen') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was frozen
   */
  get asEfinityV2(): efinityV2.Freeze {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensMintedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Minted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were minted
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Minted') === '02090af421cf73146a30e88cdca92a9ee992857db2e335edc43f0b9be6d7ed9c'
  }

  /**
   * Units of a `Token` were minted
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, issuer: Uint8Array, recipient: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensMovedReservesEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.MovedReserves')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Reserved token units were moved
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.MovedReserves') === 'cadd3cb8a7078a34cbd801afd6c7a96515df926a8e147d0f25ba435ee7ddc826'
  }

  /**
   * Reserved token units were moved
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, source: Uint8Array, destination: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensNextCollectionIdUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.NextCollectionIdUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * NextCollectionId storage was set to `collection_id`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.NextCollectionIdUpdated') === '057e325ebb04166081a2c8cd2cc1f2a50181d12678c5d261d3e70e3fe9252db3'
  }

  /**
   * NextCollectionId storage was set to `collection_id`
   */
  get asEfinityV2(): {collectionId: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensReserveRepatriatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.ReserveRepatriated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Reserved token units were transferred
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.ReserveRepatriated') === 'cadd3cb8a7078a34cbd801afd6c7a96515df926a8e147d0f25ba435ee7ddc826'
  }

  /**
   * Reserved token units were transferred
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, source: Uint8Array, destination: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensReservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Reserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token units were reserved
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Reserved') === '5b08871f0a712066681cb69f10ad44662f3687788ce875b5555feb36ddfbb358'
  }

  /**
   * Token units were reserved
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensSlashedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Slashed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An amount of tokens were slashed from account
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.Slashed') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * An amount of tokens were slashed from account
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensThawedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Thawed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Collection, token or account was unfrozen
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Thawed') === 'a014bbbee6c873377a5589792e1499a486dbe8684a671e199e6811cb3f48fdff'
  }

  /**
   * Collection, token or account was unfrozen
   */
  get asEfinityV2(): efinityV2.Freeze {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenAccountCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenAccountCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `TokenAccount` was created
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountCreated') === '0cca0a7615506a78b65129d3424c22086426999e458decb2fb277f2a1aa1cb65'
  }

  /**
   * A new `TokenAccount` was created
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, balance: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenAccountDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenAccountDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountDestroyed') === 'd3d24a0607b48c4ee8924ed762cb532aa6cf3a0d0410df546c31f4a14154c387'
  }

  /**
   * A `TokenAccount` was destroyed
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenAccountUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenAccountUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountUpdated') === 'f754f6c25e47f71944375a6ee9e19f588cd3df99973d968e964061851936129b'
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, value: (efinityV2.TokenAccount | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenAccountUpdated') === '78c28a4a51bfd9571491a3bb97228440d55d52184c02bc47ea9237f39721b971'
  }

  /**
   * TokenAccount storage was set to `value`
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, value: (efinityV3.TokenAccount | undefined)} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Token` was created
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenCreated') === '51fc1f1f4af97488d09187016da49d0820f9bf5a5f0662f551e14d3bf6c2f26f'
  }

  /**
   * A `Token` was created
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, issuer: Uint8Array, initialSupply: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenDestroyedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenDestroyed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Token` was destroyed
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenDestroyed') === 'cf1d93ed1d0b9ceef6268da8c9921584304700425bfb5edd986b2b7a7b02a021'
  }

  /**
   * A `Token` was destroyed
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, caller: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenMutatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenMutated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A `Token` was mutated
   */
  get isV6(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenMutated') === 'b9e6d1410285f3bc87627e3af858be42853828e90a2b3358e958a8fbce1c4c54'
  }

  /**
   * A `Token` was mutated
   */
  get asV6(): {collectionId: bigint, tokenId: bigint, mutation: v6.DefaultTokenMutation} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTokenUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.TokenUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token storage was set to `value`
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenUpdated') === '5f1bf659beeb498e6e354ff084479e36018001e9788272d9af904110e5fcc8ab'
  }

  /**
   * Token storage was set to `value`
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, value: (efinityV2.Token | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Token storage was set to `value`
   */
  get isV6(): boolean {
    return this._chain.getEventHash('MultiTokens.TokenUpdated') === '68dab1a73aeb9562a863b4166594c8a4077559fe59acd80b1a7928bb8fa65660'
  }

  /**
   * Token storage was set to `value`
   */
  get asV6(): {collectionId: bigint, tokenId: bigint, value: (v6.Token | undefined)} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Transferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Units of a `Token` were transferred
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Transferred') === 'c845e6a95391a8fa441a8156f9f87ac0df95affb6d9fce2cad53cb422fe1942a'
  }

  /**
   * Units of a `Token` were transferred
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, operator: Uint8Array, from: Uint8Array, to: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensUnapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Unapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Unapproved') === '668c5b2be0f408488a0422b461e10a6786cfe678bc278d2579b4a1d3a8635d49'
  }

  /**
   * An unapproval took place. If `token_id` is `None`, it applies to the collection.
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: (bigint | undefined), owner: Uint8Array, operator: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensUnreservedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Unreserved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token units were unreserved
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('MultiTokens.Unreserved') === '5b08871f0a712066681cb69f10ad44662f3687788ce875b5555feb36ddfbb358'
  }

  /**
   * Token units were unreserved
   */
  get asEfinityV2(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint, reserveId: (Uint8Array | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultiTokensWithdrawEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'MultiTokens.Withdraw')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Token units were withdrawn
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('MultiTokens.Withdraw') === '93726bb340d1054b12581b1eaa725de5eb6895c3c530ab3823144764f737359a'
  }

  /**
   * Token units were withdrawn
   */
  get asEfinityV3(): {collectionId: bigint, tokenId: bigint, accountId: Uint8Array, amount: bigint} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigApprovalEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigApproval')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Multisig.MultisigApproval') === 'bc800106752cebb28b84cdca738856289d0ade8d1818c303bd3f2000695fbb28'
  }

  /**
   * A multisig operation has been approved by someone.
   */
  get asEfinityV2(): {approving: Uint8Array, timepoint: efinityV2.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigCancelledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigCancelled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been cancelled.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Multisig.MultisigCancelled') === 'b24b244f000fd9e834b0f8c6d23aa3931d80d5b1c70f0f9a0e28826f22125b21'
  }

  /**
   * A multisig operation has been cancelled.
   */
  get asEfinityV2(): {cancelling: Uint8Array, timepoint: efinityV2.Timepoint, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigMultisigExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.MultisigExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A multisig operation has been executed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '64fde797dd4ea0a5e8b72fba6c3511764d52e9d275c92fae4375d984eddab747'
  }

  /**
   * A multisig operation has been executed.
   */
  get asEfinityV2(): {approving: Uint8Array, timepoint: efinityV2.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A multisig operation has been executed.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Multisig.MultisigExecuted') === '9a90127767690cc1a48990f005cdf6993802881e3af2da8d0fe9f8294b8c4b9d'
  }

  /**
   * A multisig operation has been executed.
   */
  get asEfinityV3(): {approving: Uint8Array, timepoint: efinityV3.Timepoint, multisig: Uint8Array, callHash: Uint8Array, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class MultisigNewMultisigEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Multisig.NewMultisig')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new multisig operation has begun.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Multisig.NewMultisig') === '137bdeb26018c08567fabc1c357d536046e92cc9fdf480339be5bc9e7e56d3be'
  }

  /**
   * A new multisig operation has begun.
   */
  get asEfinityV2(): {approving: Uint8Array, multisig: Uint8Array, callHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class OrmlXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'OrmlXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('OrmlXcm.Sent') === 'a58e2ab3184c3e4e335af85f0463bed0f68d37969e80066264857c6d71dbf4c7'
  }

  /**
   * XCM message sent. \[to, message\]
   */
  get asEfinityV3(): {to: efinityV3.V1MultiLocation, message: efinityV3.V2Instruction[]} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesProcessedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesProcessed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '62ab179c459e900954ede92a01f149d553e9317efc7d0129525f40d631e8b38f'
  }

  /**
   * Downward messages were processed using the given weight.
   * \[ weight_used, result_mqc_head \]
   */
  get asEfinityV1(): [bigint, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '83022e6226975081ba018c2b45a90d494bc922ece44e69af0322583651264f8e'
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get asV5(): {weightUsed: bigint, dmqHead: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesProcessed') === '5ae72cc32ab9a15192bb84c788530d1d739717b8f9f85bd654953f12515e41f1'
  }

  /**
   * Downward messages were processed using the given weight.
   */
  get asV6(): {weightUsed: v6.Weight, dmqHead: Uint8Array} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemDownwardMessagesReceivedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.DownwardMessagesReceived')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * Some downward messages have been received and will be processed.
   * \[ count \]
   */
  get asEfinityV1(): number {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('ParachainSystem.DownwardMessagesReceived') === '1cdbdc8ac203922f95ae6ab3e8b98004e956389f7ec11480ec5633d29b48cf71'
  }

  /**
   * Some downward messages have been received and will be processed.
   */
  get asV5(): {count: number} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemUpgradeAuthorizedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.UpgradeAuthorized')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upgrade has been authorized.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An upgrade has been authorized.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('ParachainSystem.UpgradeAuthorized') === '9e5c86c297bd88fae31bc40119e44695818ddc3ab8842b90daeb12771005c70d'
  }

  /**
   * An upgrade has been authorized.
   */
  get asV5(): {codeHash: Uint8Array} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionAppliedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionApplied')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asEfinityV1(): number {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionApplied') === 'f35adbaa82c93636884997faedd16369ac498b9208d7c11f2233b9ef2aa4f092'
  }

  /**
   * The validation function was applied as of the contained relay chain block number.
   */
  get asV5(): {relayChainBlockNum: number} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionDiscardedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionDiscarded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionDiscarded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The relay-chain aborted the upgrade process.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class ParachainSystemValidationFunctionStoredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'ParachainSystem.ValidationFunctionStored')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The validation function has been scheduled to apply as of the contained relay chain
   * block number.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   * The validation function has been scheduled to apply as of the contained relay chain
   * block number.
   */
  get asEfinityV1(): number {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('ParachainSystem.ValidationFunctionStored') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The validation function has been scheduled to apply.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAssetsTrappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.AssetsTrapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.AssetsTrapped') === '0663ceb24fcbc7c249c0d23c9fc7292b881f8cf18a5c2ade1e5b4a25b0a6d900'
  }

  /**
   * Some assets have been placed in an asset trap.
   * 
   * \[ hash, origin, assets \]
   */
  get asEfinityV1(): [Uint8Array, efinityV1.V1MultiLocation, efinityV1.VersionedMultiAssets] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmAttemptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Attempted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '193515c3b0e5bbe78313ce7bb5d80d3c789be70e0085c1d43ce0347187c43a50'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asEfinityV1(): efinityV1.V2Outcome {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Attempted') === '4154651e242bd6b6bc077aa66e91ede994df17d6d31ec8746fb77b61829f6cc1'
  }

  /**
   * Execution of an XCM message was attempted.
   * 
   * \[ outcome \]
   */
  get asEfinityV2(): efinityV2.V2Outcome {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponder')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponder') === 'aca6b87c79cd283d77249dae5d6ff6b7249a24e95958b723f47cd2333f0e9bc1'
  }

  /**
   * Expected query response has been received but the origin location of the response does
   * not match that expected. The query remains registered for a later, valid, response to
   * be received and acted upon.
   * 
   * \[ origin location, id, expected location \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, bigint, (efinityV1.V1MultiLocation | undefined)] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmInvalidResponderVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.InvalidResponderVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storate by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.InvalidResponderVersion') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Expected query response has been received but the expected origin location placed in
   * storate by this runtime previously cannot be decoded. The query remains registered.
   * 
   * This is unexpected (since a location placed in storage in a previously executing
   * runtime should be readable prior to query timeout) and dangerous since the possibly
   * valid response will be dropped. Manual governance intervention is probably going to be
   * needed.
   * 
   * \[ origin location, id \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Notified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Notified') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The registered notification has
   * been dispatched and executed successfully.
   * 
   * \[ id, pallet index, call index \]
   */
  get asEfinityV1(): [bigint, number, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDecodeFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDecodeFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDecodeFailed') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. The dispatch was unable to be
   * decoded into a `Call`; this might be due to dispatch function having a signature which
   * is not `(origin, QueryId, Response)`.
   * 
   * \[ id, pallet index, call index \]
   */
  get asEfinityV1(): [bigint, number, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyDispatchErrorEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyDispatchError')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyDispatchError') === '142af28353c3fd45d5839ca78e03f5b0850e0cd92892c66cfb4438a39b1200cf'
  }

  /**
   * Query response has been received and query is removed. There was a general error with
   * dispatching the notification call.
   * 
   * \[ id, pallet index, call index \]
   */
  get asEfinityV1(): [bigint, number, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyOverweightEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyOverweight')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '0104ccc866506c43592e56f342852c22c060b58c586141b7900f6ad97353e8b2'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asEfinityV1(): [bigint, number, number, bigint, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get isV6(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyOverweight') === '017f3a2e2d06e91d1be294456b9555e805a1e72a1ad2a469f493c21bf4da0feb'
  }

  /**
   * Query response has been received and query is removed. The registered notification could
   * not be dispatched because the dispatch weight is greater than the maximum weight
   * originally budgeted by this runtime for the query result.
   * 
   * \[ id, pallet index, call index, actual weight, max budgeted weight \]
   */
  get asV6(): [bigint, number, number, v6.Weight, v6.Weight] {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetMigrationFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetMigrationFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetMigrationFail') === 'b02879418cace85908884f92e4b915e3b448f9e06d9bcc0edcce01ed9bc5b644'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * migrating the location to our new XCM format.
   * 
   * \[ location, query ID \]
   */
  get asEfinityV1(): [efinityV1.VersionedMultiLocation, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmNotifyTargetSendFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.NotifyTargetSendFail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '691ecac12054acab4727e4ac3bcc4cc884bcf98e86e777b9c154133f1ff85778'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, bigint, efinityV1.V2Error] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('PolkadotXcm.NotifyTargetSendFail') === '0d47fb7e1a9ccdfd8879b0e483179d5b2c7b29bd5db653557e266536bc40f9a0'
  }

  /**
   * A given location which had a version change subscription was dropped owing to an error
   * sending the notification to it.
   * 
   * \[ location, query ID, error \]
   */
  get asEfinityV2(): [efinityV2.V1MultiLocation, bigint, efinityV2.V2Error] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseReadyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseReady')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === 'e6cd72b673b499abf36b946b4ab2a4531e2ca4af4aa3d41e14bafae7b2502409'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asEfinityV1(): [bigint, efinityV1.V2Response] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseReady') === '122689cbd0466e99035c5eeda9c178ed25d8a8fee01f9de0d818f7e86cd5e333'
  }

  /**
   * Query response has been received and is ready for taking with `take_response`. There is
   * no registered notification call.
   * 
   * \[ id, response \]
   */
  get asEfinityV2(): [bigint, efinityV2.V2Response] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmResponseTakenEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.ResponseTaken')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.ResponseTaken') === '0e1caef0df80727d2768bc480792261a4e7615b57b3e8182c7f664f06c96a08e'
  }

  /**
   * Received query response has been read and removed.
   * 
   * \[ id \]
   */
  get asEfinityV1(): bigint {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.Sent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === '1a2c2f0f587aa6cafef526c4c8aabbb80179c1dda79383508e93899dd8a8604c'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, efinityV1.V1MultiLocation, efinityV1.V2Instruction[]] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('PolkadotXcm.Sent') === 'ae5e308764e970ce405a89338cec74552db382f20b13af73b16c9b7b172754e4'
  }

  /**
   * A XCM message was sent.
   * 
   * \[ origin, destination, message \]
   */
  get asEfinityV2(): [efinityV2.V1MultiLocation, efinityV2.V1MultiLocation, efinityV2.V2Instruction[]] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmSupportedVersionChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.SupportedVersionChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.SupportedVersionChanged') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * The supported version of a location has been changed. This might be through an
   * automatic notification or a manual intervention.
   * 
   * \[ location, XCM version \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmUnexpectedResponseEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.UnexpectedResponse')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.UnexpectedResponse') === 'c9ed91cb137ad1f5cd40162c8e40b33e2e6b9cdc244bb5c6f95922b4971639ae'
  }

  /**
   * Query response received which does not match a registered query. This may be because a
   * matching query was never registered, it may be because it is a duplicate response, or
   * because the query timed out.
   * 
   * \[ origin location, id \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PolkadotXcmVersionChangeNotifiedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'PolkadotXcm.VersionChangeNotified')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('PolkadotXcm.VersionChangeNotified') === '53ea5e1638fe3c6b5c5c4d43de54730797aa6641ac1d8e2e3e4d910db00275b0'
  }

  /**
   * An XCM version change notification message has been attempted to be sent.
   * 
   * \[ destination, result \]
   */
  get asEfinityV1(): [efinityV1.V1MultiLocation, number] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PoolsPoolCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Pools.PoolCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A pool has been created.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Pools.PoolCreated') === '12538b5edeeb8743d0650da36efebb23ea40536a703a8e495b9478f65dfd6ca0'
  }

  /**
   * A pool has been created.
   */
  get asEfinityV1(): [bigint, efinityV1.PoolType] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PoolsPoolFundTransferredEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Pools.PoolFundTransferred')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Funds have been transferred from pool.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Pools.PoolFundTransferred') === '72237c174861b16292ba4750c5085972a98c594b634df003f74b460489d60cf0'
  }

  /**
   * Funds have been transferred from pool.
   */
  get asEfinityV1(): [bigint, efinityV1.PoolType, Uint8Array, bigint] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PoolsPoolOwnershipChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Pools.PoolOwnershipChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new owner has been assigned to an existing pool.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Pools.PoolOwnershipChanged') === 'bc729a5e80d0210091a8d147dd9987e9c392139bedf9964b0ca44ab74d814d99'
  }

  /**
   * A new owner has been assigned to an existing pool.
   */
  get asEfinityV1(): [bigint, efinityV1.PoolType, Uint8Array, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class PoolsPoolsMutatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Pools.PoolsMutated')
    this._chain = ctx._chain
    this.event = event
  }

  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Pools.PoolsMutated') === 'da7a38085ecaa625d9d5548eddc73299992e480f1dceebac832ae09e10c2acd0'
  }

  get asEfinityV3(): efinityV3.PoolsMutation {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }

  get isV6(): boolean {
    return this._chain.getEventHash('Pools.PoolsMutated') === 'b16ffa04290d7cc517e7d6b466ba41ac23a91f050d81350d896bcb03eebd76b1'
  }

  get asV6(): v6.PoolsMutation {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageClearedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Cleared')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has ben cleared.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Preimage.Cleared') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has ben cleared.
   */
  get asEfinityV2(): {hash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageNotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Noted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been noted.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Preimage.Noted') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been noted.
   */
  get asEfinityV2(): {hash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class PreimageRequestedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Preimage.Requested')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A preimage has been requested.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Preimage.Requested') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
  }

  /**
   * A preimage has been requested.
   */
  get asEfinityV2(): {hash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCallLookupFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.CallLookupFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Scheduler.CallLookupFailed') === 'ecc6a872eaa4608ccd69e4dfbf292a89f058591fc70991470a93ba1be36fd2e4'
  }

  /**
   * The call for the provided hash was not found so the task has been aborted.
   */
  get asEfinityV2(): {task: [number, number], id: (Uint8Array | undefined), error: efinityV2.LookupError} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerCanceledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Canceled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Canceled some task.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Scheduler.Canceled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Canceled some task.
   */
  get asEfinityV2(): {when: number, index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerDispatchedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Dispatched')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Dispatched some task.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '39cf66f8b318db4669e183ffaa1290aec1f8ac972b379087a931cf63e5ddf8f9'
  }

  /**
   * Dispatched some task.
   */
  get asEfinityV2(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Dispatched some task.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Scheduler.Dispatched') === '3fd36e1da4dd6a57fbaf34f23c31e64a8c167849f0135f4fce7567f3db728290'
  }

  /**
   * Dispatched some task.
   */
  get asEfinityV3(): {task: [number, number], id: (Uint8Array | undefined), result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class SchedulerScheduledEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Scheduler.Scheduled')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Scheduled some task.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Scheduler.Scheduled') === '4186e24556a58b04e04d6d697a530eedf78f255da1ba9d84df6511dd6d6465f7'
  }

  /**
   * Scheduled some task.
   */
  get asEfinityV2(): {when: number, index: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SessionNewSessionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Session.NewSession')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Session.NewSession') === '75fa09d2d8b5fbcbe4f75feb6c886998092453010ae364a5b06b9bb6319f1086'
  }

  /**
   * New session has happened. Note that the argument is the session index, not the
   * block number as the type might suggest.
   */
  get asEfinityV2(): {sessionIndex: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Sudo.KeyChanged') === 'b94a7a753f8f0b026120555f1f1c70878235307461e256807cb791dad15244c2'
  }

  /**
   * The \[sudoer\] just switched identity; the old key is supplied if one existed.
   */
  get asEfinityV2(): {oldSudoer: (Uint8Array | undefined)} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.Sudid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV1(): Result<null, efinityV1.DispatchError> {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV2(): {sudoResult: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Sudo.Sudid') === '790144505f3238f63eeea8b351d8b0c3c90a3b9cd88e7ee262cd9b81c35d80c6'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV3(): {sudoResult: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class SudoSudoAsDoneEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Sudo.SudoAsDone')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'ab888611b1630e8ada6ae91aa73bbcaa3417be141a0a0db92f4f509e4cfba02a'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV1(): Result<null, efinityV1.DispatchError> {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === 'df00148bd8d36e5e2756be8c56bdf238f29aa9538028f4f316d580eaba1be9b0'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV2(): {sudoResult: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A sudo just took place. \[result\]
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Sudo.SudoAsDone') === '790144505f3238f63eeea8b351d8b0c3c90a3b9cd88e7ee262cd9b81c35d80c6'
  }

  /**
   * A sudo just took place. \[result\]
   */
  get asEfinityV3(): {sudoResult: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemCodeUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.CodeUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `:code` was updated.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.CodeUpdated') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * `:code` was updated.
   */
  get asEfinityV1(): null {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '0995776ff5e8d5f8662a6841d8556c830acc58fbb01f76a13b6aa4222b987150'
  }

  /**
   * An extrinsic failed. \[error, info\]
   */
  get asEfinityV1(): [efinityV1.DispatchError, efinityV1.DispatchInfo] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '3b8e9f2b48f4b6f0f996d20434018cdbe20aacb2470e779d965d42dad18b0a4e'
  }

  /**
   * An extrinsic failed.
   */
  get asEfinityV2(): {dispatchError: efinityV2.DispatchError, dispatchInfo: efinityV2.DispatchInfo} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === 'a6220584fa4f22cb02db1bfad4eacf1a689aea2324f22b4763def7376b7dd9bf'
  }

  /**
   * An extrinsic failed.
   */
  get asEfinityV3(): {dispatchError: efinityV3.DispatchError, dispatchInfo: efinityV3.DispatchInfo} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic failed.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('System.ExtrinsicFailed') === '7a219a9eae41ad22651fdcb4f6a7453254b0ecc7be4b30821be2ab5b44e5f1b4'
  }

  /**
   * An extrinsic failed.
   */
  get asV6(): {dispatchError: v6.DispatchError, dispatchInfo: v6.DispatchInfo} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemExtrinsicSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.ExtrinsicSuccess')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An extrinsic completed successfully. \[info\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '00a75e03130fe6755b02b23ca285a19efc2bd57964ead02525eedef36cbf1bd4'
  }

  /**
   * An extrinsic completed successfully. \[info\]
   */
  get asEfinityV1(): efinityV1.DispatchInfo {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic completed successfully.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '407ed94c14f243acbe2cdb53df52c37d97bbb5ae550a10a6036bf59677cdd165'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asEfinityV2(): {dispatchInfo: efinityV2.DispatchInfo} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An extrinsic completed successfully.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('System.ExtrinsicSuccess') === '6fc1e5ad9f5b3851c6e301764b8507ebb0861fd57381e6bc020a47f2b710167d'
  }

  /**
   * An extrinsic completed successfully.
   */
  get asV6(): {dispatchInfo: v6.DispatchInfo} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemKilledAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.KilledAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An \[account\] was reaped.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * An \[account\] was reaped.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An account was reaped.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('System.KilledAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * An account was reaped.
   */
  get asEfinityV2(): {account: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemNewAccountEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.NewAccount')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new \[account\] was created.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A new \[account\] was created.
   */
  get asEfinityV1(): Uint8Array {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A new account was created.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('System.NewAccount') === '7fb7672b764b0a4f0c4910fddefec0709628843df7ad0073a97eede13c53ca92'
  }

  /**
   * A new account was created.
   */
  get asEfinityV2(): {account: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class SystemRemarkedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'System.Remarked')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * On on-chain remark happened. \[origin, remark_hash\]
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'e54ae910805a8a9413af1a7f5885a5d0ba5f4e105175cd6b0ce2a8702ddf1861'
  }

  /**
   * On on-chain remark happened. \[origin, remark_hash\]
   */
  get asEfinityV1(): [Uint8Array, Uint8Array] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * On on-chain remark happened.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('System.Remarked') === 'c58b73482fe762a6dcca2f35266f0d1739333312cf7a50eea55c666d0cda6101'
  }

  /**
   * On on-chain remark happened.
   */
  get asEfinityV2(): {sender: Uint8Array, hash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TagsAssetTaggedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tags.AssetTagged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `asset_id` was tagged with `tag_id`
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Tags.AssetTagged') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
  }

  /**
   * `asset_id` was tagged with `tag_id`
   */
  get asEfinityV1(): {assetId: bigint, tagId: bigint} {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class TagsAssetUntaggedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tags.AssetUntagged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * `asset_id` was untagged with `tag_id`
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Tags.AssetUntagged') === 'e62e9dda5ca3f63b93581dab7a7c7b0517bee40b1d85fbadde147219ef05bf52'
  }

  /**
   * `asset_id` was untagged with `tag_id`
   */
  get asEfinityV1(): {assetId: bigint, tagId: bigint} {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class TagsTagCreatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Tags.TagCreated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A new `Tag` with `id` was created by `owner`
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('Tags.TagCreated') === 'd6b5494bf1f7915b5fa83a61b20a8423f6231aeffa8a4423eb5cd5354bb2e0cd'
  }

  /**
   * A new `Tag` with `id` was created by `owner`
   */
  get asEfinityV1(): {id: bigint, owner: Uint8Array} {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeApprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Approved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asEfinityV2(): {proposalHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeClosedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Closed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, yes: number, no: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeDisapprovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Disapproved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asEfinityV2(): {proposalHash: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Executed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Executed') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asEfinityV3(): {proposalHash: Uint8Array, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeMemberExecutedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.MemberExecuted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asEfinityV2(): {proposalHash: Uint8Array, result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.MemberExecuted') === '891fd2ad27e5f8bc799d45bb765ef77383902fd4e1cc4c6981cba99123803ac7'
  }

  /**
   * A single member did some action; result will be `Ok` if it returned without error.
   */
  get asEfinityV3(): {proposalHash: Uint8Array, result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeProposedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Proposed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Proposed') === '63978c884e95719fd416c8a38a2ec2ec5a691a58a28349d62b0173643f0d8262'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asEfinityV2(): {account: Uint8Array, proposalIndex: number, proposalHash: Uint8Array, threshold: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalCommitteeVotedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalCommittee.Voted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalCommittee.Voted') === 'b69e97272b7c060192bbc1a5e91692b0a8b905727af6d9eb5627b7857ede0846'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asEfinityV2(): {account: Uint8Array, proposalHash: Uint8Array, voted: boolean, yes: number, no: number} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipDummyEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.Dummy')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Phantom member, never used.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.Dummy') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Phantom member, never used.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipKeyChangedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.KeyChanged')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * One of the members' keys changed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.KeyChanged') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * One of the members' keys changed.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMemberAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MemberAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The given member was added; see the transaction for who.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MemberAdded') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The given member was added; see the transaction for who.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMemberRemovedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MemberRemoved')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The given member was removed; see the transaction for who.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MemberRemoved') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The given member was removed; see the transaction for who.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMembersResetEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MembersReset')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * The membership was reset; see the transaction for who the new set is.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MembersReset') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * The membership was reset; see the transaction for who the new set is.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TechnicalMembershipMembersSwappedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TechnicalMembership.MembersSwapped')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Two members were swapped; see the transaction for who.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('TechnicalMembership.MembersSwapped') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Two members were swapped; see the transaction for who.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class TransactionPaymentTransactionFeePaidEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'TransactionPayment.TransactionFeePaid')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('TransactionPayment.TransactionFeePaid') === 'f2e962e9996631445edecd62b0646df79871442a2d1a1a6e1f550a0b3a56b226'
  }

  /**
   * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
   * has been paid by `who`.
   */
  get asV5(): {who: Uint8Array, actualFee: bigint, tip: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Utility.BatchCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed fully with no error.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchCompletedWithErrorsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchCompletedWithErrors')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Utility.BatchCompletedWithErrors') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * Batch of dispatches completed but has errors.
   */
  get asV5(): null {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityBatchInterruptedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.BatchInterrupted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '8676c6dc6a22410c7ddbc9f34f71e25e9bc1f7237c98ea59385020ce26129067'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asEfinityV2(): {index: number, error: efinityV2.DispatchError} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Utility.BatchInterrupted') === '30bda593b1e7b041ebb6b79df0135b12bf0ecdbea3d7694f8d9d59560411df93'
  }

  /**
   * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
   * well as the error.
   */
  get asEfinityV3(): {index: number, error: efinityV3.DispatchError} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityDispatchedAsEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.DispatchedAs')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A call was dispatched.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === '437b0d6b61f01d02ca149f7d3a9e00406fc26ecde780532ed80e532801995307'
  }

  /**
   * A call was dispatched.
   */
  get asEfinityV2(): {result: Result<null, efinityV2.DispatchError>} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * A call was dispatched.
   */
  get isEfinityV3(): boolean {
    return this._chain.getEventHash('Utility.DispatchedAs') === 'cbb13e6f8f0e2a0b00b89705f05de04cf34bbb44653bcdccedddc8448bc95bfc'
  }

  /**
   * A call was dispatched.
   */
  get asEfinityV3(): {result: Result<null, efinityV3.DispatchError>} {
    assert(this.isEfinityV3)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemCompletedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemCompleted')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Utility.ItemCompleted') === '01f2f9c28aa1d4d36a81ff042620b6677d25bf07c2bf4acc37b58658778a4fca'
  }

  /**
   * A single item within a Batch of dispatches has completed with no error.
   */
  get asEfinityV2(): null {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class UtilityItemFailedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Utility.ItemFailed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('Utility.ItemFailed') === '59e964849fe0837c16b04e3c81782ce0ee22b9efe3d6a8d43d6ea61e9b25b998'
  }

  /**
   * A single item within a Batch of dispatches has completed with error.
   */
  get asV5(): {error: v5.DispatchError} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingClaimedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.Claimed')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Claimed vesting.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Vesting.Claimed') === 'e84a34a6a3d577b31f16557bd304282f4fe4cbd7115377f4687635dc48e52ba5'
  }

  /**
   * Claimed vesting.
   */
  get asEfinityV2(): {who: Uint8Array, amount: bigint} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingScheduleAddedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingScheduleAdded')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Added new vesting schedule.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Vesting.VestingScheduleAdded') === '18422c66dedd030e21a5567fde05a68ab5ad4ffff5f9fdcd73f3d18dcb91873c'
  }

  /**
   * Added new vesting schedule.
   */
  get asEfinityV2(): {from: Uint8Array, to: Uint8Array, vestingSchedule: efinityV2.VestingSchedule} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class VestingVestingSchedulesUpdatedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'Vesting.VestingSchedulesUpdated')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Updated vesting schedules.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('Vesting.VestingSchedulesUpdated') === 'b8a0d2208835f6ada60dd21cd93533d703777b3779109a7c6a2f26bad68c2f3b'
  }

  /**
   * Updated vesting schedules.
   */
  get asEfinityV2(): {who: Uint8Array} {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadFormatEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadFormat')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM format used.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM format used.
   */
  get asEfinityV1(): (Uint8Array | undefined) {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Bad XCM format used.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadFormat') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * Bad XCM format used.
   */
  get asV5(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueBadVersionEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.BadVersion')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Bad XCM version used.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Bad XCM version used.
   */
  get asEfinityV1(): (Uint8Array | undefined) {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Bad XCM version used.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.BadVersion') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * Bad XCM version used.
   */
  get asV5(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueFailEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Fail')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM failed.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === 'c719d9ccc723cdf668f55966f450e4217391513459d13dcdea1b99c7e22b2890'
  }

  /**
   * Some XCM failed.
   */
  get asEfinityV1(): [(Uint8Array | undefined), efinityV1.V2Error] {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '639070abee49a6419e897939fc5b761d561a52efc062a7f1a1183b543e786999'
  }

  /**
   * Some XCM failed.
   */
  get asEfinityV2(): [(Uint8Array | undefined), efinityV2.V2Error] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === '8ca5252e46336e4c6a7bffc1927807bb885a90bad49951c5e832eda183f4d365'
  }

  /**
   * Some XCM failed.
   */
  get asV5(): {messageHash: (Uint8Array | undefined), error: v5.V2Error, weight: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM failed.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('XcmpQueue.Fail') === 'd72a6fdcbedea7017572a7b9b1b30fb50d753160a20111c371f00be9c05691c2'
  }

  /**
   * Some XCM failed.
   */
  get asV6(): {messageHash: (Uint8Array | undefined), error: v6.V2Error, weight: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightEnqueuedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightEnqueued')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === 'ebfdd28144c52e3beb9a90e53e214e90e6114fc4d52e2c572b7e0a2e8c303bd5'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asEfinityV2(): [number, number, bigint, bigint] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '66fcd6ac0f8478601d6008edf04a5f6e1988dad34d2e67484bc112967caeddbb'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV5(): {sender: number, sentAt: number, index: bigint, required: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightEnqueued') === '067a3a3aa8ee6726ecb8bf35ab307ac7566fec3acc2a84c25854711f6279d584'
  }

  /**
   * An XCM exceeded the individual message weight budget.
   */
  get asV6(): {sender: number, sentAt: number, index: bigint, required: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueOverweightServicedEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.OverweightServiced')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isEfinityV2(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === 'a07d31c2644106aa567962b0935daed493556b5253e00c77997c3b0e46966110'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asEfinityV2(): [bigint, bigint] {
    assert(this.isEfinityV2)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '6de49eae2a9c6e3c2fecdcc4baff436b4272b874de79a1f9f8955ca81e9f47bb'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV5(): {index: bigint, used: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('XcmpQueue.OverweightServiced') === '05c4258fc96a5477a2e7d79afbaae99e134fdf08770b5619a826272ad1e82c22'
  }

  /**
   * An XCM from the overweight queue was executed with the given actual weight used.
   */
  get asV6(): {index: bigint, used: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueSuccessEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.Success')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * Some XCM was executed ok.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * Some XCM was executed ok.
   */
  get asEfinityV1(): (Uint8Array | undefined) {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM was executed ok.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === '70e4953d4755440ebd53ef8a5482ada34f27cd1aac56b0493142d711aebc0e85'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV5(): {messageHash: (Uint8Array | undefined), weight: bigint} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * Some XCM was executed ok.
   */
  get isV6(): boolean {
    return this._chain.getEventHash('XcmpQueue.Success') === '305c23f5c5645b4330237519e6b8fa038af5dfc624c8dd8e1de3b97b6e51faf4'
  }

  /**
   * Some XCM was executed ok.
   */
  get asV6(): {messageHash: (Uint8Array | undefined), weight: v6.Weight} {
    assert(this.isV6)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueUpwardMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.UpwardMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asEfinityV1(): (Uint8Array | undefined) {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.UpwardMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * An upward message was sent to the relay chain.
   */
  get asV5(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}

export class XcmpQueueXcmpMessageSentEvent {
  private readonly _chain: Chain
  private readonly event: Event

  constructor(ctx: EventContext)
  constructor(ctx: ChainContext, event: Event)
  constructor(ctx: EventContext, event?: Event) {
    event = event || ctx.event
    assert(event.name === 'XcmpQueue.XcmpMessageSent')
    this._chain = ctx._chain
    this.event = event
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get isEfinityV1(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'a5c1f8b891fae90a0d7ad9b2faf9f1b356be106b1dd35df6fd53ab6554e34e67'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asEfinityV1(): (Uint8Array | undefined) {
    assert(this.isEfinityV1)
    return this._chain.decodeEvent(this.event)
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get isV5(): boolean {
    return this._chain.getEventHash('XcmpQueue.XcmpMessageSent') === 'ccbb82ba01a4d742bdd34e545836a89f2c435428f6887f28ce1ecf0166419df1'
  }

  /**
   * An HRMP message was sent to a sibling parachain.
   */
  get asV5(): {messageHash: (Uint8Array | undefined)} {
    assert(this.isV5)
    return this._chain.decodeEvent(this.event)
  }
}
