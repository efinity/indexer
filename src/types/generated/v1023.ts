import type {Result, Option} from './support'

export interface PoolMutation {
    duration: (number | undefined)
    newCommission: ShouldMutate
    maxCommission: (number | undefined)
    changeRate: (CommissionChangeRate | undefined)
    capacity: (bigint | undefined)
    name: (Uint8Array | undefined)
}

export interface Offer {
    account: Uint8Array
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    deposit: bigint
    tokenFilter: TokenFilter
}

export type Call = Call_System | Call_Timestamp | Call_Babe | Call_Balances | Call_ElectionProviderMultiPhase | Call_Staking | Call_Session | Call_Grandpa | Call_Treasury | Call_Sudo | Call_ImOnline | Call_VoterList | Call_NominationPools | Call_StakeExchange | Call_Utility | Call_Multisig | Call_Configuration | Call_ParasShared | Call_ParaInclusion | Call_ParaInherent | Call_Paras | Call_Initializer | Call_Hrmp | Call_ParasDisputes | Call_ParasSlashing | Call_Registrar | Call_Slots | Call_Auctions | Call_Crowdloan | Call_XcmPallet | Call_MessageQueue | Call_ParasSudoWrapper | Call_AssignedSlots | Call_ValidatorManager | Call_MultiTokens | Call_FuelTanks | Call_ExtrinsicPause | Call_Marketplace | Call_Beefy | Call_Scheduler | Call_Preimage | Call_ConvictionVoting | Call_Referenda | Call_Whitelist | Call_FellowshipCollective | Call_FellowshipReferenda | Call_Identity | Call_VoteManager

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Babe {
    __kind: 'Babe'
    value: BabeCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseCall
}

export interface Call_Staking {
    __kind: 'Staking'
    value: StakingCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaCall
}

export interface Call_Treasury {
    __kind: 'Treasury'
    value: TreasuryCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineCall
}

export interface Call_VoterList {
    __kind: 'VoterList'
    value: VoterListCall
}

export interface Call_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsCall
}

export interface Call_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_Configuration {
    __kind: 'Configuration'
    value: ConfigurationCall
}

export interface Call_ParasShared {
    __kind: 'ParasShared'
    value: ParasSharedCall
}

export interface Call_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionCall
}

export interface Call_ParaInherent {
    __kind: 'ParaInherent'
    value: ParaInherentCall
}

export interface Call_Paras {
    __kind: 'Paras'
    value: ParasCall
}

export interface Call_Initializer {
    __kind: 'Initializer'
    value: InitializerCall
}

export interface Call_Hrmp {
    __kind: 'Hrmp'
    value: HrmpCall
}

export interface Call_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesCall
}

export interface Call_ParasSlashing {
    __kind: 'ParasSlashing'
    value: ParasSlashingCall
}

export interface Call_Registrar {
    __kind: 'Registrar'
    value: RegistrarCall
}

export interface Call_Slots {
    __kind: 'Slots'
    value: SlotsCall
}

export interface Call_Auctions {
    __kind: 'Auctions'
    value: AuctionsCall
}

export interface Call_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanCall
}

export interface Call_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletCall
}

export interface Call_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueCall
}

export interface Call_ParasSudoWrapper {
    __kind: 'ParasSudoWrapper'
    value: ParasSudoWrapperCall
}

export interface Call_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsCall
}

export interface Call_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerCall
}

export interface Call_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_Beefy {
    __kind: 'Beefy'
    value: BeefyCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingCall
}

export interface Call_Referenda {
    __kind: 'Referenda'
    value: ReferendaCall
}

export interface Call_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistCall
}

export interface Call_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveCall
}

export interface Call_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
}

export interface Call_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerCall
}

export interface FuelTankDescriptor {
    name: Uint8Array
    userAccountManagement: (UserAccountManagement | undefined)
    ruleSets: [number, DispatchRuleDescriptor[]][]
    providesDeposit: boolean
    accountRules: AccountRuleDescriptor[]
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
    __kind: 'Id'
    value: Uint8Array
}

export interface MultiAddress_Index {
    __kind: 'Index'
    value: null
}

export interface MultiAddress_Raw {
    __kind: 'Raw'
    value: Uint8Array
}

export interface MultiAddress_Address32 {
    __kind: 'Address32'
    value: Uint8Array
}

export interface MultiAddress_Address20 {
    __kind: 'Address20'
    value: Uint8Array
}

export interface DispatchSettings {
    useNoneOrigin: boolean
    paysRemainingFee: boolean
}

export type DispatchRuleDescriptor = DispatchRuleDescriptor_WhitelistedCallers | DispatchRuleDescriptor_WhitelistedCollections | DispatchRuleDescriptor_MaxFuelBurnPerTransaction | DispatchRuleDescriptor_UserFuelBudget | DispatchRuleDescriptor_TankFuelBudget | DispatchRuleDescriptor_RequireToken | DispatchRuleDescriptor_PermittedCalls | DispatchRuleDescriptor_PermittedExtrinsics | DispatchRuleDescriptor_WhitelistedPallets

export interface DispatchRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface DispatchRuleDescriptor_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleDescriptor_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

export interface DispatchRuleDescriptor_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRuleDescriptor
}

export interface DispatchRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleDescriptor_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Uint8Array[]
}

export interface DispatchRuleDescriptor_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: Call[]
}

export interface DispatchRuleDescriptor_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
    value: Call[]
}

export type FlexibleMintParams = FlexibleMintParams_CreateToken | FlexibleMintParams_Mint | FlexibleMintParams_CreateOrMint

export interface FlexibleMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency: SufficiencyParam
    cap: (TokenCap | undefined)
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    freezeState: (FreezeState | undefined)
    attributes: AttributeKeyValuePair[]
    foreignParams: (ForeignTokenCreationParams | undefined)
}

export interface FlexibleMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice: (bigint | undefined)
}

export interface FlexibleMintParams_CreateOrMint {
    __kind: 'CreateOrMint'
    tokenId: bigint
    amount: bigint
    sufficiency: SufficiencyParam
    cap: (TokenCap | undefined)
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    freezeState: (FreezeState | undefined)
    attributes: AttributeKeyValuePair[]
    foreignParams: (ForeignTokenCreationParams | undefined)
}

export interface Timepoint {
    height: number
    index: number
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export interface CreateOffer {
    account: Uint8Array
    total: bigint
    rate: number
    minAverageRewardRate: bigint
    tokenFilter: TokenFilter
}

export type OriginCaller = OriginCaller_system | OriginCaller_ParachainsOrigin | OriginCaller_XcmPallet | OriginCaller_Origins | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Origin
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_420
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Type_421
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface BondedPoolInner {
    state: PoolState
    commission: Commission
    tokenId: bigint
    capacity: bigint
    bonusCycle: BonusCycle
    creationBlock: number
    bonusesPaid: number[]
    name: Uint8Array
}

export interface EarlyBirdInfo {
    bonusCalculated: boolean
    currentPaymentId: (number | undefined)
    nextPaymentBlock: (number | undefined)
    totalPaid: bigint
}

export interface PoolBonusInfo {
    amount: bigint
    shareCaptureBlock: (number | undefined)
    lastPaymentId: (number | undefined)
    totalPaid: bigint
}

export interface EventRecord {
    phase: Type_653
    event: Event
    topics: Uint8Array[]
}

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value: (number | undefined)
}

export interface CommissionChangeRate {
    maxDelta: number
    minDelay: number
}

export type TokenFilter = TokenFilter_All | TokenFilter_Whitelist | TokenFilter_BlockList

export interface TokenFilter_All {
    __kind: 'All'
}

export interface TokenFilter_Whitelist {
    __kind: 'Whitelist'
    value: bigint[]
}

export interface TokenFilter_BlockList {
    __kind: 'BlockList'
    value: bigint[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * Make some on-chain remark.
 * 
 * - `O(1)`
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * Set the number of pages in the WebAssembly environment's heap.
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * Set the new runtime code.
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * Set some items of storage.
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * Kill all storage items with a key that starts with the given prefix.
 * 
 * **NOTE:** We rely on the Root origin to provide us the number of subkeys under
 * the prefix we are removing to accurately calculate the weight of this function.
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TimestampCall = TimestampCall_set

/**
 * Set the current time.
 * 
 * This call should be invoked exactly once per block. It will panic at the finalization
 * phase, if this call hasn't been invoked by that time.
 * 
 * The timestamp should be greater than the previous one by the amount specified by
 * `MinimumPeriod`.
 * 
 * The dispatch origin for this call must be `Inherent`.
 * 
 * ## Complexity
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BabeCall = BabeCall_report_equivocation | BabeCall_report_equivocation_unsigned | BabeCall_plan_config_change

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 */
export interface BabeCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Report authority equivocation/misbehavior. This method will verify
 * the equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence will
 * be reported.
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BabeCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: EquivocationProof
    keyOwnerProof: MembershipProof
}

/**
 * Plan an epoch config change. The epoch config change is recorded and will be enacted on
 * the next call to `enact_epoch_change`. The config will be activated one epoch after.
 * Multiple calls to this method will replace any existing planned config change that had
 * not been enacted yet.
 */
export interface BabeCall_plan_config_change {
    __kind: 'plan_config_change'
    config: NextConfigDescriptor
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer_allow_death | BalancesCall_set_balance_deprecated | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve | BalancesCall_upgrade_accounts | BalancesCall_transfer | BalancesCall_force_set_balance

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer_allow_death` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * Set the regular balance of a given account; it also takes a reserved balance but this
 * must be the same as the account's current reserved balance.
 * 
 * The dispatch origin for this call is `root`.
 * 
 * WARNING: This call is DEPRECATED! Use `force_set_balance` instead.
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * Exactly as `transfer_allow_death`, except the origin must be root and the source account
 * may be specified.
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 * kill the origin account.
 * 
 * 99% of the time you want [`transfer_allow_death`] instead.
 * 
 * [`transfer_allow_death`]: struct.Pallet.html#method.transfer
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * Transfer the entire transferable balance from the caller account.
 * 
 * NOTE: This function only attempts to transfer _transferable_ balances. This means that
 * any locked, reserved, or existential deposits (when `keep_alive` is `true`), will not be
 * transferred by this function. To ensure that this function results in a killed account,
 * you might need to prepare the account by removing any reference counters, storage
 * deposits, etc...
 * 
 * The dispatch origin of this call must be Signed.
 * 
 * - `dest`: The recipient of the transfer.
 * - `keep_alive`: A boolean to determine if the `transfer_all` operation should send all
 *   of the funds the account has, causing the sender account to be killed (false), or
 *   transfer everything except at least the existential deposit, which will guarantee to
 *   keep the sender account alive (true).
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * Unreserve some balance from a user by force.
 * 
 * Can only be called by ROOT.
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * Upgrade a specified account.
 * 
 * - `origin`: Must be `Signed`.
 * - `who`: The account to be upgraded.
 * 
 * This will waive the transaction fee if at least all but 10% of the accounts needed to
 * be upgraded. (We let some not have to be upgraded just in order to allow for the
 * possibililty of churn).
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * Alias for `transfer_allow_death`, provided only for name-wise compatibility.
 * 
 * WARNING: DEPRECATED! Will be released in approximately 3 months.
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Set the regular balance of a given account.
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ElectionProviderMultiPhaseCall = ElectionProviderMultiPhaseCall_submit_unsigned | ElectionProviderMultiPhaseCall_set_minimum_untrusted_score | ElectionProviderMultiPhaseCall_set_emergency_election_result | ElectionProviderMultiPhaseCall_submit | ElectionProviderMultiPhaseCall_governance_fallback

/**
 * Submit a solution for the unsigned phase.
 * 
 * The dispatch origin fo this call must be __none__.
 * 
 * This submission is checked on the fly. Moreover, this unsigned solution is only
 * validated when submitted to the pool from the **local** node. Effectively, this means
 * that only active validators can submit this transaction when authoring a block (similar
 * to an inherent).
 * 
 * To prevent any incorrect solution (and thus wasted time/weight), this transaction will
 * panic if the solution submitted by the validator is invalid in any way, effectively
 * putting their authoring reward at risk.
 * 
 * No deposit or reward is associated with this submission.
 */
export interface ElectionProviderMultiPhaseCall_submit_unsigned {
    __kind: 'submit_unsigned'
    rawSolution: RawSolution
    witness: SolutionOrSnapshotSize
}

/**
 * Set a new value for `MinimumUntrustedScore`.
 * 
 * Dispatch origin must be aligned with `T::ForceOrigin`.
 * 
 * This check can be turned off by setting the value to `None`.
 */
export interface ElectionProviderMultiPhaseCall_set_minimum_untrusted_score {
    __kind: 'set_minimum_untrusted_score'
    maybeNextScore: (ElectionScore | undefined)
}

/**
 * Set a solution in the queue, to be handed out to the client of this pallet in the next
 * call to `ElectionProvider::elect`.
 * 
 * This can only be set by `T::ForceOrigin`, and only when the phase is `Emergency`.
 * 
 * The solution is not checked for any feasibility and is assumed to be trustworthy, as any
 * feasibility check itself can in principle cause the election process to fail (due to
 * memory/weight constrains).
 */
export interface ElectionProviderMultiPhaseCall_set_emergency_election_result {
    __kind: 'set_emergency_election_result'
    supports: [Uint8Array, Support][]
}

/**
 * Submit a solution for the signed phase.
 * 
 * The dispatch origin fo this call must be __signed__.
 * 
 * The solution is potentially queued, based on the claimed score and processed at the end
 * of the signed phase.
 * 
 * A deposit is reserved and recorded for the solution. Based on the outcome, the solution
 * might be rewarded, slashed, or get all or a part of the deposit back.
 */
export interface ElectionProviderMultiPhaseCall_submit {
    __kind: 'submit'
    rawSolution: RawSolution
}

/**
 * Trigger the governance fallback.
 * 
 * This can only be called when [`Phase::Emergency`] is enabled, as an alternative to
 * calling [`Call::set_emergency_election_result`].
 */
export interface ElectionProviderMultiPhaseCall_governance_fallback {
    __kind: 'governance_fallback'
    maybeMaxVoters: (number | undefined)
    maybeMaxTargets: (number | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type StakingCall = StakingCall_bond | StakingCall_bond_extra | StakingCall_unbond | StakingCall_withdraw_unbonded | StakingCall_validate | StakingCall_nominate | StakingCall_chill | StakingCall_set_payee | StakingCall_set_controller | StakingCall_set_validator_count | StakingCall_increase_validator_count | StakingCall_scale_validator_count | StakingCall_force_no_eras | StakingCall_force_new_era | StakingCall_set_invulnerables | StakingCall_force_unstake | StakingCall_force_new_era_always | StakingCall_cancel_deferred_slash | StakingCall_payout_stakers | StakingCall_rebond | StakingCall_reap_stash | StakingCall_kick | StakingCall_set_staking_configs | StakingCall_chill_other | StakingCall_force_apply_min_commission | StakingCall_set_min_commission

/**
 * Take the origin account as a stash and lock up `value` of its balance. `controller` will
 * be the account that controls it.
 * 
 * `value` must be more than the `minimum_balance` specified by `T::Currency`.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash account.
 * 
 * Emits `Bonded`.
 * ## Complexity
 * - Independent of the arguments. Moderate complexity.
 * - O(1).
 * - Three extra DB entries.
 * 
 * NOTE: Two of the storage writes (`Self::bonded`, `Self::payee`) are _never_ cleaned
 * unless the `origin` falls below _existential deposit_ and gets removed as dust.
 */
export interface StakingCall_bond {
    __kind: 'bond'
    value: bigint
    payee: RewardDestination
}

/**
 * Add some extra amount that have appeared in the stash `free_balance` into the balance up
 * for staking.
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * Use this if there are additional funds in your stash account that you wish to bond.
 * Unlike [`bond`](Self::bond) or [`unbond`](Self::unbond) this function does not impose
 * any limitation on the amount that can be added.
 * 
 * Emits `Bonded`.
 * 
 * ## Complexity
 * - Independent of the arguments. Insignificant complexity.
 * - O(1).
 */
export interface StakingCall_bond_extra {
    __kind: 'bond_extra'
    maxAdditional: bigint
}

/**
 * Schedule a portion of the stash to be unlocked ready for transfer out after the bond
 * period ends. If this leaves an amount actively bonded less than
 * T::Currency::minimum_balance(), then it is increased to the full amount.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * Once the unlock period is done, you can call `withdraw_unbonded` to actually move
 * the funds out of management ready for transfer.
 * 
 * No more than a limited number of unlocking chunks (see `MaxUnlockingChunks`)
 * can co-exists at the same time. If there are no unlocking chunks slots available
 * [`Call::withdraw_unbonded`] is called to remove some of the chunks (if possible).
 * 
 * If a user encounters the `InsufficientBond` error when calling this extrinsic,
 * they should call `chill` first in order to free up their bonded funds.
 * 
 * Emits `Unbonded`.
 * 
 * See also [`Call::withdraw_unbonded`].
 */
export interface StakingCall_unbond {
    __kind: 'unbond'
    value: bigint
}

/**
 * Remove any unlocked chunks from the `unlocking` queue from our management.
 * 
 * This essentially frees up that balance to be used by the stash account to do
 * whatever it wants.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller.
 * 
 * Emits `Withdrawn`.
 * 
 * See also [`Call::unbond`].
 * 
 * ## Complexity
 * O(S) where S is the number of slashing spans to remove
 * NOTE: Weight annotation is the kill scenario, we refund otherwise.
 */
export interface StakingCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    numSlashingSpans: number
}

/**
 * Declare the desire to validate for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 */
export interface StakingCall_validate {
    __kind: 'validate'
    prefs: ValidatorPrefs
}

/**
 * Declare the desire to nominate `targets` for the origin controller.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * ## Complexity
 * - The transaction's complexity is proportional to the size of `targets` (N)
 * which is capped at CompactAssignments::LIMIT (T::MaxNominations).
 * - Both the reads and writes follow a similar pattern.
 */
export interface StakingCall_nominate {
    __kind: 'nominate'
    targets: MultiAddress[]
}

/**
 * Declare no desire to either validate or nominate.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * ## Complexity
 * - Independent of the arguments. Insignificant complexity.
 * - Contains one read.
 * - Writes are limited to the `origin` account key.
 */
export interface StakingCall_chill {
    __kind: 'chill'
}

/**
 * (Re-)set the payment target for a controller.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * ## Complexity
 * - O(1)
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 * ---------
 */
export interface StakingCall_set_payee {
    __kind: 'set_payee'
    payee: RewardDestination
}

/**
 * (Re-)sets the controller of a stash to the stash itself. This function previously
 * accepted a `controller` argument to set the controller to an account other than the
 * stash itself. This functionality has now been removed, now only setting the controller
 * to the stash, if it is not already.
 * 
 * Effects will be felt instantly (as soon as this function is completed successfully).
 * 
 * The dispatch origin for this call must be _Signed_ by the stash, not the controller.
 * 
 * ## Complexity
 * O(1)
 * - Independent of the arguments. Insignificant complexity.
 * - Contains a limited number of reads.
 * - Writes are limited to the `origin` account key.
 */
export interface StakingCall_set_controller {
    __kind: 'set_controller'
}

/**
 * Sets the ideal number of validators.
 * 
 * The dispatch origin must be Root.
 * 
 * ## Complexity
 * O(1)
 */
export interface StakingCall_set_validator_count {
    __kind: 'set_validator_count'
    new: number
}

/**
 * Increments the ideal number of validators upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 * 
 * The dispatch origin must be Root.
 * 
 * ## Complexity
 * Same as [`Self::set_validator_count`].
 */
export interface StakingCall_increase_validator_count {
    __kind: 'increase_validator_count'
    additional: number
}

/**
 * Scale up the ideal number of validators by a factor upto maximum of
 * `ElectionProviderBase::MaxWinners`.
 * 
 * The dispatch origin must be Root.
 * 
 * ## Complexity
 * Same as [`Self::set_validator_count`].
 */
export interface StakingCall_scale_validator_count {
    __kind: 'scale_validator_count'
    factor: number
}

/**
 * Force there to be no new eras indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * Thus the election process may be ongoing when this is called. In this case the
 * election will continue until the next era is triggered.
 * 
 * ## Complexity
 * - No arguments.
 * - Weight: O(1)
 */
export interface StakingCall_force_no_eras {
    __kind: 'force_no_eras'
}

/**
 * Force there to be a new era at the end of the next session. After this, it will be
 * reset to normal (non-forced) behaviour.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 * 
 * ## Complexity
 * - No arguments.
 * - Weight: O(1)
 */
export interface StakingCall_force_new_era {
    __kind: 'force_new_era'
}

/**
 * Set the validators who cannot be slashed (if any).
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    invulnerables: Uint8Array[]
}

/**
 * Force a current staker to become completely unstaked, immediately.
 * 
 * The dispatch origin must be Root.
 */
export interface StakingCall_force_unstake {
    __kind: 'force_unstake'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * Force there to be a new era at the end of sessions indefinitely.
 * 
 * The dispatch origin must be Root.
 * 
 * # Warning
 * 
 * The election process starts multiple blocks before the end of the era.
 * If this is called just before a new era is triggered, the election process may not
 * have enough blocks to get a result.
 */
export interface StakingCall_force_new_era_always {
    __kind: 'force_new_era_always'
}

/**
 * Cancel enactment of a deferred slash.
 * 
 * Can be called by the `T::AdminOrigin`.
 * 
 * Parameters: era and indices of the slashes for that era to kill.
 */
export interface StakingCall_cancel_deferred_slash {
    __kind: 'cancel_deferred_slash'
    era: number
    slashIndices: number[]
}

/**
 * Pay out all the stakers behind a single validator for a single era.
 * 
 * - `validator_stash` is the stash account of the validator. Their nominators, up to
 *   `T::MaxNominatorRewardedPerValidator`, will also receive their rewards.
 * - `era` may be any era between `[current_era - history_depth; current_era]`.
 * 
 * The origin of this call must be _Signed_. Any account can call this function, even if
 * it is not one of the stakers.
 * 
 * ## Complexity
 * - At most O(MaxNominatorRewardedPerValidator).
 */
export interface StakingCall_payout_stakers {
    __kind: 'payout_stakers'
    validatorStash: Uint8Array
    era: number
}

/**
 * Rebond a portion of the stash scheduled to be unlocked.
 * 
 * The dispatch origin must be signed by the controller.
 * 
 * ## Complexity
 * - Time complexity: O(L), where L is unlocking chunks
 * - Bounded by `MaxUnlockingChunks`.
 */
export interface StakingCall_rebond {
    __kind: 'rebond'
    value: bigint
}

/**
 * Remove all data structures concerning a staker/stash once it is at a state where it can
 * be considered `dust` in the staking system. The requirements are:
 * 
 * 1. the `total_balance` of the stash is below existential deposit.
 * 2. or, the `ledger.total` of the stash is below existential deposit.
 * 
 * The former can happen in cases like a slash; the latter when a fully unbonded account
 * is still receiving staking rewards in `RewardDestination::Staked`.
 * 
 * It can be called by anyone, as long as `stash` meets the above requirements.
 * 
 * Refunds the transaction fees upon successful execution.
 */
export interface StakingCall_reap_stash {
    __kind: 'reap_stash'
    stash: Uint8Array
    numSlashingSpans: number
}

/**
 * Remove the given nominations from the calling validator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_ by the controller, not the stash.
 * 
 * - `who`: A list of nominator stash accounts who are nominating this validator which
 *   should no longer be nominating this validator.
 * 
 * Note: Making this call only makes sense if you first set the validator preferences to
 * block any further nominations.
 */
export interface StakingCall_kick {
    __kind: 'kick'
    who: MultiAddress[]
}

/**
 * Update the various staking configurations .
 * 
 * * `min_nominator_bond`: The minimum active bond needed to be a nominator.
 * * `min_validator_bond`: The minimum active bond needed to be a validator.
 * * `max_nominator_count`: The max number of users who can be a nominator at once. When
 *   set to `None`, no limit is enforced.
 * * `max_validator_count`: The max number of users who can be a validator at once. When
 *   set to `None`, no limit is enforced.
 * * `chill_threshold`: The ratio of `max_nominator_count` or `max_validator_count` which
 *   should be filled in order for the `chill_other` transaction to work.
 * * `min_commission`: The minimum amount of commission that each validators must maintain.
 *   This is checked only upon calling `validate`. Existing validators are not affected.
 * 
 * RuntimeOrigin must be Root to call this function.
 * 
 * NOTE: Existing nominators and validators will not be affected by this update.
 * to kick people under the new limits, `chill_other` should be called.
 */
export interface StakingCall_set_staking_configs {
    __kind: 'set_staking_configs'
    minNominatorBond: ConfigOp
    minValidatorBond: ConfigOp
    maxNominatorCount: Type_379
    maxValidatorCount: Type_379
    chillThreshold: Type_380
    minCommission: Type_381
}

/**
 * Declare a `controller` to stop participating as either a validator or nominator.
 * 
 * Effects will be felt at the beginning of the next era.
 * 
 * The dispatch origin for this call must be _Signed_, but can be called by anyone.
 * 
 * If the caller is the same as the controller being targeted, then no further checks are
 * enforced, and this function behaves just like `chill`.
 * 
 * If the caller is different than the controller being targeted, the following conditions
 * must be met:
 * 
 * * `controller` must belong to a nominator who has become non-decodable,
 * 
 * Or:
 * 
 * * A `ChillThreshold` must be set and checked which defines how close to the max
 *   nominators or validators we must reach before users can start chilling one-another.
 * * A `MaxNominatorCount` and `MaxValidatorCount` must be set which is used to determine
 *   how close we are to the threshold.
 * * A `MinNominatorBond` and `MinValidatorBond` must be set and checked, which determines
 *   if this is a person that should be chilled because they have not met the threshold
 *   bond required.
 * 
 * This can be helpful if bond requirements are updated, and we need to remove old users
 * who do not satisfy these requirements.
 */
export interface StakingCall_chill_other {
    __kind: 'chill_other'
    controller: Uint8Array
}

/**
 * Force a validator to have at least the minimum commission. This will not affect a
 * validator who already has a commission greater than or equal to the minimum. Any account
 * can call this.
 */
export interface StakingCall_force_apply_min_commission {
    __kind: 'force_apply_min_commission'
    validatorStash: Uint8Array
}

/**
 * Sets the minimum amount of commission that each validators must maintain.
 * 
 * This call has lower privilege requirements than `set_staking_config` and can be called
 * by the `T::AdminOrigin`. Root can always call this.
 */
export interface StakingCall_set_min_commission {
    __kind: 'set_min_commission'
    new: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * Sets the session key(s) of the function caller to `keys`.
 * Allows an account to set its session key prior to becoming a validator.
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be signed.
 * 
 * ## Complexity
 * - `O(1)`. Actual cost depends on the number of length of `T::Keys::key_ids()` which is
 *   fixed.
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * Removes any session key(s) of the function caller.
 * 
 * This doesn't take effect until the next session.
 * 
 * The dispatch origin of this function must be Signed and the account must be either be
 * convertible to a validator ID using the chain's typical addressing system (this usually
 * means being a controller account) or directly convertible into a validator ID (which
 * usually means being a stash account).
 * 
 * ## Complexity
 * - `O(1)` in number of key types. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type GrandpaCall = GrandpaCall_report_equivocation | GrandpaCall_report_equivocation_unsigned | GrandpaCall_note_stalled

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface GrandpaCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_388
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 * 
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface GrandpaCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_388
    keyOwnerProof: MembershipProof
}

/**
 * Note that the current authority set of the GRANDPA finality gadget has stalled.
 * 
 * This will trigger a forced authority set change at the beginning of the next session, to
 * be enacted `delay` blocks after that. The `delay` should be high enough to safely assume
 * that the block signalling the forced change will not be re-orged e.g. 1000 blocks.
 * The block production rate (which may be slowed down because of finality lagging) should
 * be taken into account when choosing the `delay`. The GRANDPA voters based on the new
 * authority will start voting on top of `best_finalized_block_number` for new finalized
 * blocks. `best_finalized_block_number` should be the highest of the latest finalized
 * block of all validators of the new authority set.
 * 
 * Only callable by root.
 */
export interface GrandpaCall_note_stalled {
    __kind: 'note_stalled'
    delay: number
    bestFinalizedBlockNumber: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TreasuryCall = TreasuryCall_propose_spend | TreasuryCall_reject_proposal | TreasuryCall_approve_proposal | TreasuryCall_spend | TreasuryCall_remove_approval

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * ## Complexity
 * - O(1)
 */
export interface TreasuryCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * ## Complexity
 * - O(1)
 */
export interface TreasuryCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * ## Complexity
 *  - O(1).
 */
export interface TreasuryCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * Propose and approve a spend of treasury funds.
 * 
 * - `origin`: Must be `SpendOrigin` with the `Success` value being at least `amount`.
 * - `amount`: The amount to be transferred from the treasury to the `beneficiary`.
 * - `beneficiary`: The destination account for the transfer.
 * 
 * NOTE: For record-keeping purposes, the proposer is deemed to be equivalent to the
 * beneficiary.
 */
export interface TreasuryCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * Force a previously approved proposal to be removed from the approval queue.
 * The original deposit will no longer be returned.
 * 
 * May only be called from `T::RejectOrigin`.
 * - `proposal_id`: The index of a proposal
 * 
 * ## Complexity
 * - O(A) where `A` is the number of approvals
 * 
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface TreasuryCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * Authenticates the sudo key and dispatches a function call with `Root` origin.
 * This function does not check the weight of the call, and instead allows the
 * Sudo user to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * Authenticates the current sudo key and sets the given AccountId (`new`) as the new sudo
 * key.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * Authenticates the sudo key and dispatches a function call with `Signed` origin from
 * a given account.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ImOnlineCall = ImOnlineCall_heartbeat

/**
 * ## Complexity:
 * - `O(K + E)` where K is length of `Keys` (heartbeat.validators_len) and E is length of
 *   `heartbeat.network_state.external_address`
 *   - `O(K)`: decoding of length `K`
 *   - `O(E)`: decoding/encoding of length `E`
 */
export interface ImOnlineCall_heartbeat {
    __kind: 'heartbeat'
    heartbeat: Heartbeat
    signature: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VoterListCall = VoterListCall_rebag | VoterListCall_put_in_front_of

/**
 * Declare that some `dislocated` account has, through rewards or penalties, sufficiently
 * changed its score that it should properly fall into a different bag than its current
 * one.
 * 
 * Anyone can call this function about any potentially dislocated account.
 * 
 * Will always update the stored score of `dislocated` to the correct score, based on
 * `ScoreProvider`.
 * 
 * If `dislocated` does not exists, it returns an error.
 */
export interface VoterListCall_rebag {
    __kind: 'rebag'
    dislocated: MultiAddress
}

/**
 * Move the caller's Id directly in front of `lighter`.
 * 
 * The dispatch origin for this call must be _Signed_ and can only be called by the Id of
 * the account going in front of `lighter`.
 * 
 * Only works if
 * - both nodes are within the same bag,
 * - and `origin` has a greater `Score` than `lighter`.
 */
export interface VoterListCall_put_in_front_of {
    __kind: 'put_in_front_of'
    lighter: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type NominationPoolsCall = NominationPoolsCall_bond | NominationPoolsCall_unbond | NominationPoolsCall_pool_withdraw_unbonded | NominationPoolsCall_withdraw_unbonded | NominationPoolsCall_create | NominationPoolsCall_nominate | NominationPoolsCall_set_configs | NominationPoolsCall_chill | NominationPoolsCall_destroy | NominationPoolsCall_payout_rewards | NominationPoolsCall_process_payouts | NominationPoolsCall_mutate | NominationPoolsCall_unbond_deposit | NominationPoolsCall_withdraw_deposit | NominationPoolsCall_withdraw_free_balance | NominationPoolsCall_set_staking_info | NominationPoolsCall_calculate_early_bird_bonus | NominationPoolsCall_unlock_early_bird_bonus | NominationPoolsCall_capture_early_bird_bonus_shares | NominationPoolsCall_pay_early_bird_bonus

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 * pools account and immediately increases the pools bond. The sENJ token will be minted
 * and transferred to `origin`.
 * 
 * # Parameters
 * - `origin`: the caller
 * - `pool_id`: the pool id to bond
 * - `amount`: the amount of tokens deposited into the pool
 * 
 * # Note
 * 
 * * An account can only be a member of a single pool.
 * * An account cannot join the same pool multiple times.
 * * This call will *not* dust the member account, so the member must have at least
 *   `existential deposit + amount` in their account.
 * * Only a pool with [`PoolState::Open`] can be joined
 */
export interface NominationPoolsCall_bond {
    __kind: 'bond'
    poolId: number
    amount: BondValue
}

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool by burning
 * sENJ.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch.
 * 
 * * The pool is blocked and the caller is holding the pool's token. This is refereed to as
 *   a kick.
 * * The pool is destroying.
 * * The pool is destroying and no other members are in the pool.
 * 
 * ## Conditions for permissioned dispatch (i.e. the caller is also the
 * `member_account`):
 * 
 * * The caller is not the last member.
 * * The caller is the last member and the pool is destroying.
 * 
 * # Note
 * 
 * If there are too many unlocking chunks to unbond with the pool account,
 * [`Call::pool_withdraw_unbonded`] can be called to try and minimize unlocking chunks.
 * The [`StakingInterface::unbond`] will implicitly call [`Call::pool_withdraw_unbonded`]
 * to try to free chunks if necessary (ie. if unbound was called and no unlocking chunks
 * are available). However, it may not be possible to release the current unlocking chunks,
 * in which case, the result of this call will likely be the `NoMoreChunks` error from the
 * staking system.
 */
export interface NominationPoolsCall_unbond {
    __kind: 'unbond'
    poolId: number
    memberAccount: MultiAddress
    unbondingPoints: bigint
}

/**
 * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 * 
 * This is useful if their are too many unlocking chunks to call `unbond`, and some
 * can be cleared by withdrawing. In the case there are too many unlocking chunks, the user
 * would probably see an error like `NoMoreChunks` emitted from the staking system when
 * they attempt to unbond.
 */
export interface NominationPoolsCall_pool_withdraw_unbonded {
    __kind: 'pool_withdraw_unbonded'
    poolId: number
    numSlashingSpans: number
}

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 * error is returned.
 * 
 * Under certain conditions, this call can be dispatched permissionlessly (i.e. by any
 * account).
 * 
 * # Conditions for a permissionless dispatch
 * 
 * * The pool is in destroy mode.
 * * The target is the only member in the sub pools.
 * * The pool is blocked and the caller is either the admin or state-toggler.
 * 
 * # Conditions for permissioned dispatch
 * 
 * * The caller is the target and they are not the last member.
 * 
 * # Note
 * 
 * If the target is the last member, the pool will be destroyed.
 */
export interface NominationPoolsCall_withdraw_unbonded {
    __kind: 'withdraw_unbonded'
    poolId: number
    memberAccount: MultiAddress
    numSlashingSpans: number
}

/**
 * Create a new nomination pool.
 * 
 * # Arguments
 * 
 * * `token_id` - Token that that will control the pool. This token must be from the
 *   [`Config::PoolCollectionId`] collection and it must be held by the caller.
 * * `deposit` - The amount of funds to delegate to the pool. This also acts as a deposit
 *   because the pool's creator cannot fully unbond funds until the pool is destroyed.
 * * `capacity` - The maximum total balance allowed in the pool. This is measured in sENJ.
 *   It must be below the pool's capacity. See `Capacity` section in crate level docs.
 * * `duration` - The duration in blocks of the pool's bonus cycle
 * 
 * # Note
 * 
 * In addition to `deposit`, the caller will transfer the existential deposit for the
 * pool's accounts; so the caller needs at have at least `deposit + existential_deposit *
 * 2` transferable.
 */
export interface NominationPoolsCall_create {
    __kind: 'create'
    tokenId: bigint
    deposit: bigint
    capacity: bigint
    duration: number
    name: Uint8Array
}

/**
 * Nominate on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the holder of the pool token.
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_nominate {
    __kind: 'nominate'
    poolId: number
    validators: Uint8Array[]
}

/**
 * Update configurations for the nomination pools. Callable only by
 * [`Config::ForceOrigin`].
 * 
 * # Arguments
 * 
 * * `min_join_bond` - Set [`MinJoinBond`].
 * * `min_create_bond` - Set [`MinCreateBond`].
 * * `global_max_commission` - Set [`GlobalMaxCommission`].
 */
export interface NominationPoolsCall_set_configs {
    __kind: 'set_configs'
    minJoinBond: ConfigOp
    minCreateBond: ConfigOp
    globalMaxCommission: Type_411
    requiredPayoutCount: Type_411
}

/**
 * Chill on behalf of the pool.
 * 
 * The dispatch origin of this call must be signed by the pool token holder, same as
 * [`Pallet::nominate`].
 * 
 * This directly forward the call to the staking pallet, on behalf of the pool bonded
 * account.
 */
export interface NominationPoolsCall_chill {
    __kind: 'chill'
    poolId: number
}

/**
 * Destroy the pool.
 * 
 * The dispatch origin of this call must be signed by the account holding the pool token
 * of the given pool_id.
 */
export interface NominationPoolsCall_destroy {
    __kind: 'destroy'
    poolId: number
}

/**
 * Pays rewards to `validator_stash` and also distributes rewards to the reward accounts of
 * the pools nominating it. The appropriate bonus is also calculated and stored in the
 * bonus account.
 * 
 * This should be called once per era per validator. It is a permissionless call. It also
 * processes rewards for the previous era if [`Self::process_payouts`] was not called.
 * 
 * ## Bonus Calculation
 * 
 * 1. Minimum duration and max duration are found for all pools nominating
 *    `validator_stash`
 * 2. [`Config::BonusPercentage`] is set aside from rewards for bonus
 * 3. Normalized weight is calculated and then scaled according to the total bonus. See
 *    `functions::calculate_real_weight`.
 * 4. The scaled weight is offset according to [`Config::BaseBonusRewardPercentage`] so
 *    that all pools at least get the minimum weight
 * 5. Final calculation is done in [`traits::Bonus::calculate_bonus`] and then transferred
 *    to the bonus account
 */
export interface NominationPoolsCall_payout_rewards {
    __kind: 'payout_rewards'
    validatorStash: Uint8Array
    era: number
}

/**
 * Processes the rewards for all pools that were distributed in [`Self::payout_rewards`].
 * It will only succeed if it is called on the same era that payouts were made. It uses the
 * [`EraPayoutInfo`] storage to verify this. This extrinsic is permissionless.
 * 
 * The following is done for each pool:
 * 1. If the pool has reached the end of its cycle, it cycles the pool.
 * 2. Sends bonus for the current era from the bonus account to the rewards account.
 * 3. Sends reward commission to the depositor.
 * 4. It bonds the pool's reward balance.
 * 
 * It is not required to call this extrinsic. If it is not called, the rewards will be
 * processed when `payout_rewards` is called in the next era.
 */
export interface NominationPoolsCall_process_payouts {
    __kind: 'process_payouts'
    poolCount: number
}

/**
 * Mutate the nomination pool data.
 * 
 * The dispatch origin of this call must be signed by the account holding the pool token
 * of the given pool_id.
 */
export interface NominationPoolsCall_mutate {
    __kind: 'mutate'
    poolId: number
    mutation: PoolMutation
}

/**
 * Unbonds the deposit
 * 
 * This call is permissionless but certain conditions must be met before the deposit can
 * be unbonded:
 * 
 * - Pool must be in [`PoolState::Destroying`] mode
 * - Deposit points must be the only points in the pool
 * - [`UnbondingMembers`] must be empty
 * 
 * This will unbond the deposit from the pool.
 */
export interface NominationPoolsCall_unbond_deposit {
    __kind: 'unbond_deposit'
    poolId: number
}

/**
 * Withdraws the deposit
 * 
 * This call is permissionless and should be called after the deposit has been unbonded.
 */
export interface NominationPoolsCall_withdraw_deposit {
    __kind: 'withdraw_deposit'
    poolId: number
}

/**
 * Transfers `amount` from the pool's free balance to `destination`. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface NominationPoolsCall_withdraw_free_balance {
    __kind: 'withdraw_free_balance'
    poolId: number
    destination: MultiAddress
    amount: bigint
}

/**
 * Set the annual inflation rate and collator payout cut
 * 
 * Callable only by [`Config::ForceOrigin`]
 */
export interface NominationPoolsCall_set_staking_info {
    __kind: 'set_staking_info'
    info: StakingInfo
}

/**
 * Calculate and prepare early bird bonus if it is ready to be queued.
 * 
 * Callable by any signed origin after [`Config::EarlyBirdBonusDistributionBlock`].
 * 
 * ## Details
 * 
 * 1. Calculates the normalized weights for each pool by calling
 *    [`Pallet::early_bird_normalized_weight`]. Factors for the weight are each pool's
 *    total points and the creation date.
 * 2. Each pool's weight is multiplied by the total reward to determine each pool's reward.
 * 3. The rewards are stored in [`PoolBonusInfos`] and can be distributed by calling
 *    [`Self::pay_early_bird_bonus`].
 */
export interface NominationPoolsCall_calculate_early_bird_bonus {
    __kind: 'calculate_early_bird_bonus'
    poolCount: number
}

/**
 * Unlock early bird bonus to pools. This extrinsic will ensure the
 * EarlyBirdBonusDistributionBlock has passed before the bonus is unlocked.
 * Callable by any signed origin after the bonus has been queued.
 */
export interface NominationPoolsCall_unlock_early_bird_bonus {
    __kind: 'unlock_early_bird_bonus'
}

/**
 * Stores the share of sENJ balance for each account staked in `pool_id`.
 */
export interface NominationPoolsCall_capture_early_bird_bonus_shares {
    __kind: 'capture_early_bird_bonus_shares'
    poolId: number
    accountCount: number
}

/**
 * Pay early bird bonus to pools. The `account_count` parameter is the max number
 * of pool user accounts to be paid in this call.
 * 
 * Callable by any signed origin after the bonus has been unlocked
 */
export interface NominationPoolsCall_pay_early_bird_bonus {
    __kind: 'pay_early_bird_bonus'
    poolId: number
    paymentId: number
    accountCount: number
}

/**
 * The pallet's extrinsics.
 */
export type StakeExchangeCall = StakeExchangeCall_create_offer | StakeExchangeCall_cancel_offer | StakeExchangeCall_configure_liquidity_account | StakeExchangeCall_withdraw_liquidity | StakeExchangeCall_add_liquidity | StakeExchangeCall_buy

/**
 * Place a new offer with the given parameters
 * 
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::ZeroOffer`] if offer amount is zero.
 * - [`Error::ZeroRate`] if rate amount is zero.
 * - [`Error::Overflow`] if arithmetic overflow occurs
 */
export interface StakeExchangeCall_create_offer {
    __kind: 'create_offer'
    offer: CreateOffer
}

/**
 * Cancel an existing offer with `offer_id`
 * 
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::OfferNotFound`] if the `offer_id` does not exist
 */
export interface StakeExchangeCall_cancel_offer {
    __kind: 'cancel_offer'
    offerId: bigint
}

/**
 * Set the liquidity config for the caller account
 */
export interface StakeExchangeCall_configure_liquidity_account {
    __kind: 'configure_liquidity_account'
    config: LiquidityAccountConfig
}

/**
 * Withdraw liquidity from a current active offer
 * 
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match offer account.
 * - [`Error::OfferNotFound`] if the offerId does not exist
 */
export interface StakeExchangeCall_withdraw_liquidity {
    __kind: 'withdraw_liquidity'
    offerId: bigint
    amount: bigint
}

/**
 * Add liquidity to a current active offer
 * 
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
 * - [`Error::OfferNotFound`] if the offerId does not exist
 */
export interface StakeExchangeCall_add_liquidity {
    __kind: 'add_liquidity'
    offerId: bigint
    amount: bigint
}

/**
 * Buy from a current active offer, returning the native currency by exchanging the staked
 * tokens
 * 
 * # Errors
 * - [`Error::CallerNotOfferCreator`] if the caller account does not match bidding account.
 * - [`Error::TokenRestriction`] if the tokenId is restricted by the LP
 * - [`Error::NotEnoughLiquidity`] if the offer cannot cover the amount requested
 * - [`Error::TransferParamCreationFailed`] if the multitokens transfer failed
 */
export interface StakeExchangeCall_buy {
    __kind: 'buy'
    offerId: bigint
    amount: bigint
    tokenId: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * Send a batch of dispatch calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 * 
 * This will return `Ok` in all circumstances. To determine the success of the batch, an
 * event is deposited. If a call failed and the batch was interrupted, then the
 * `BatchInterrupted` event is deposited, along with the number of successful calls made
 * and the error of the failed call. If all were successful, then the `BatchCompleted`
 * event is deposited.
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * Send a call through an indexed pseudonym of the sender.
 * 
 * Filter from origin are passed along. The call will be dispatched with an origin which
 * use the same filter as the origin of this call.
 * 
 * NOTE: If you need to ensure that any account-based filtering is not honored (i.e.
 * because you expect `proxy` to have been used prior in the call stack and you do not want
 * the call restrictions to apply to any sub-accounts), then use `as_multi_threshold_1`
 * in the Multisig pallet instead.
 * 
 * NOTE: Prior to version *12, this was called `as_limited_sub`.
 * 
 * The dispatch origin for this call must be _Signed_.
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * Send a batch of dispatch calls and atomically execute them.
 * The whole transaction will rollback and fail if any of the calls failed.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * Dispatches a function call with a provided origin.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * ## Complexity
 * - O(1).
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * Send a batch of dispatch calls.
 * Unlike `batch`, it allows errors and won't interrupt.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatch without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 * 
 * ## Complexity
 * - O(C) where C is the number of calls to be batched.
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Dispatch a function call with a specified weight.
 * 
 * This function does not check the weight of the call, and instead allows the
 * Root origin to specify the weight of the call.
 * 
 * The dispatch origin for this call must be _Root_.
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * Immediately dispatch a multi-signature call using a single approval from the caller.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `other_signatories`: The accounts (other than the sender) who are part of the
 * multi-signature, but do not participate in the approval process.
 * - `call`: The call to be executed.
 * 
 * Result is equivalent to the dispatched result.
 * 
 * ## Complexity
 * O(Z + C) where Z is the length of the call and C its execution weight.
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * If there are enough, then dispatch the call.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call`: The call to be executed.
 * 
 * NOTE: Unless this is the final approval, you will generally want to use
 * `approve_as_multi` instead, since it only requires a hash of the call.
 * 
 * Result is equivalent to the dispatched result if `threshold` is exactly `1`. Otherwise
 * on success, result is `Ok` and the result from the interior call, if it was executed,
 * may be found in the deposited `MultisigExecuted` event.
 * 
 * ## Complexity
 * - `O(S + Z + Call)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One call encode & hash, both of complexity `O(Z)` where `Z` is tx-len.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - The weight of the `call`.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_as_multi {
    __kind: 'as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    call: Call
    maxWeight: Weight
}

/**
 * Register approval for a dispatch to be made from a deterministic composite account if
 * approved by a total of `threshold - 1` of `other_signatories`.
 * 
 * Payment: `DepositBase` will be reserved if this is the first approval, plus
 * `threshold` times `DepositFactor`. It is returned once this dispatch happens or
 * is cancelled.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `maybe_timepoint`: If this is the first approval, then this must be `None`. If it is
 * not the first approval, then it must be `Some`, with the timepoint (block number and
 * transaction index) of the first approval transaction.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * NOTE: If this is the final approval, you will want to use `as_multi` instead.
 * 
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - Up to one binary search and insert (`O(logS + S)`).
 * - I/O: 1 read `O(S)`, up to 1 mutate `O(S)`. Up to one remove.
 * - One event.
 * - Storage: inserts one item, value size bounded by `MaxSignatories`, with a deposit
 *   taken for its lifetime of `DepositBase + threshold * DepositFactor`.
 */
export interface MultisigCall_approve_as_multi {
    __kind: 'approve_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    maybeTimepoint: (Timepoint | undefined)
    callHash: Uint8Array
    maxWeight: Weight
}

/**
 * Cancel a pre-existing, on-going multisig transaction. Any deposit reserved previously
 * for this operation will be unreserved on success.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `threshold`: The total number of approvals for this dispatch before it is executed.
 * - `other_signatories`: The accounts (other than the sender) who can approve this
 * dispatch. May not be empty.
 * - `timepoint`: The timepoint (block number and transaction index) of the first approval
 * transaction for this dispatch.
 * - `call_hash`: The hash of the call to be executed.
 * 
 * ## Complexity
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ConfigurationCall = ConfigurationCall_set_validation_upgrade_cooldown | ConfigurationCall_set_validation_upgrade_delay | ConfigurationCall_set_code_retention_period | ConfigurationCall_set_max_code_size | ConfigurationCall_set_max_pov_size | ConfigurationCall_set_max_head_data_size | ConfigurationCall_set_parathread_cores | ConfigurationCall_set_parathread_retries | ConfigurationCall_set_group_rotation_frequency | ConfigurationCall_set_chain_availability_period | ConfigurationCall_set_thread_availability_period | ConfigurationCall_set_scheduling_lookahead | ConfigurationCall_set_max_validators_per_core | ConfigurationCall_set_max_validators | ConfigurationCall_set_dispute_period | ConfigurationCall_set_dispute_post_conclusion_acceptance_period | ConfigurationCall_set_no_show_slots | ConfigurationCall_set_n_delay_tranches | ConfigurationCall_set_zeroth_delay_tranche_width | ConfigurationCall_set_needed_approvals | ConfigurationCall_set_relay_vrf_modulo_samples | ConfigurationCall_set_max_upward_queue_count | ConfigurationCall_set_max_upward_queue_size | ConfigurationCall_set_max_downward_message_size | ConfigurationCall_set_max_upward_message_size | ConfigurationCall_set_max_upward_message_num_per_candidate | ConfigurationCall_set_hrmp_open_request_ttl | ConfigurationCall_set_hrmp_sender_deposit | ConfigurationCall_set_hrmp_recipient_deposit | ConfigurationCall_set_hrmp_channel_max_capacity | ConfigurationCall_set_hrmp_channel_max_total_size | ConfigurationCall_set_hrmp_max_parachain_inbound_channels | ConfigurationCall_set_hrmp_max_parathread_inbound_channels | ConfigurationCall_set_hrmp_channel_max_message_size | ConfigurationCall_set_hrmp_max_parachain_outbound_channels | ConfigurationCall_set_hrmp_max_parathread_outbound_channels | ConfigurationCall_set_hrmp_max_message_num_per_candidate | ConfigurationCall_set_pvf_checking_enabled | ConfigurationCall_set_pvf_voting_ttl | ConfigurationCall_set_minimum_validation_upgrade_delay | ConfigurationCall_set_bypass_consistency_check | ConfigurationCall_set_async_backing_params | ConfigurationCall_set_executor_params

/**
 * Set the validation upgrade cooldown.
 */
export interface ConfigurationCall_set_validation_upgrade_cooldown {
    __kind: 'set_validation_upgrade_cooldown'
    new: number
}

/**
 * Set the validation upgrade delay.
 */
export interface ConfigurationCall_set_validation_upgrade_delay {
    __kind: 'set_validation_upgrade_delay'
    new: number
}

/**
 * Set the acceptance period for an included candidate.
 */
export interface ConfigurationCall_set_code_retention_period {
    __kind: 'set_code_retention_period'
    new: number
}

/**
 * Set the max validation code size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_code_size {
    __kind: 'set_max_code_size'
    new: number
}

/**
 * Set the max POV block size for incoming upgrades.
 */
export interface ConfigurationCall_set_max_pov_size {
    __kind: 'set_max_pov_size'
    new: number
}

/**
 * Set the max head data size for paras.
 */
export interface ConfigurationCall_set_max_head_data_size {
    __kind: 'set_max_head_data_size'
    new: number
}

/**
 * Set the number of parathread execution cores.
 */
export interface ConfigurationCall_set_parathread_cores {
    __kind: 'set_parathread_cores'
    new: number
}

/**
 * Set the number of retries for a particular parathread.
 */
export interface ConfigurationCall_set_parathread_retries {
    __kind: 'set_parathread_retries'
    new: number
}

/**
 * Set the parachain validator-group rotation frequency
 */
export interface ConfigurationCall_set_group_rotation_frequency {
    __kind: 'set_group_rotation_frequency'
    new: number
}

/**
 * Set the availability period for parachains.
 */
export interface ConfigurationCall_set_chain_availability_period {
    __kind: 'set_chain_availability_period'
    new: number
}

/**
 * Set the availability period for parathreads.
 */
export interface ConfigurationCall_set_thread_availability_period {
    __kind: 'set_thread_availability_period'
    new: number
}

/**
 * Set the scheduling lookahead, in expected number of blocks at peak throughput.
 */
export interface ConfigurationCall_set_scheduling_lookahead {
    __kind: 'set_scheduling_lookahead'
    new: number
}

/**
 * Set the maximum number of validators to assign to any core.
 */
export interface ConfigurationCall_set_max_validators_per_core {
    __kind: 'set_max_validators_per_core'
    new: (number | undefined)
}

/**
 * Set the maximum number of validators to use in parachain consensus.
 */
export interface ConfigurationCall_set_max_validators {
    __kind: 'set_max_validators'
    new: (number | undefined)
}

/**
 * Set the dispute period, in number of sessions to keep for disputes.
 */
export interface ConfigurationCall_set_dispute_period {
    __kind: 'set_dispute_period'
    new: number
}

/**
 * Set the dispute post conclusion acceptance period.
 */
export interface ConfigurationCall_set_dispute_post_conclusion_acceptance_period {
    __kind: 'set_dispute_post_conclusion_acceptance_period'
    new: number
}

/**
 * Set the no show slots, in number of number of consensus slots.
 * Must be at least 1.
 */
export interface ConfigurationCall_set_no_show_slots {
    __kind: 'set_no_show_slots'
    new: number
}

/**
 * Set the total number of delay tranches.
 */
export interface ConfigurationCall_set_n_delay_tranches {
    __kind: 'set_n_delay_tranches'
    new: number
}

/**
 * Set the zeroth delay tranche width.
 */
export interface ConfigurationCall_set_zeroth_delay_tranche_width {
    __kind: 'set_zeroth_delay_tranche_width'
    new: number
}

/**
 * Set the number of validators needed to approve a block.
 */
export interface ConfigurationCall_set_needed_approvals {
    __kind: 'set_needed_approvals'
    new: number
}

/**
 * Set the number of samples to do of the `RelayVRFModulo` approval assignment criterion.
 */
export interface ConfigurationCall_set_relay_vrf_modulo_samples {
    __kind: 'set_relay_vrf_modulo_samples'
    new: number
}

/**
 * Sets the maximum items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_count {
    __kind: 'set_max_upward_queue_count'
    new: number
}

/**
 * Sets the maximum total size of items that can present in a upward dispatch queue at once.
 */
export interface ConfigurationCall_set_max_upward_queue_size {
    __kind: 'set_max_upward_queue_size'
    new: number
}

/**
 * Set the critical downward message size.
 */
export interface ConfigurationCall_set_max_downward_message_size {
    __kind: 'set_max_downward_message_size'
    new: number
}

/**
 * Sets the maximum size of an upward message that can be sent by a candidate.
 */
export interface ConfigurationCall_set_max_upward_message_size {
    __kind: 'set_max_upward_message_size'
    new: number
}

/**
 * Sets the maximum number of messages that a candidate can contain.
 */
export interface ConfigurationCall_set_max_upward_message_num_per_candidate {
    __kind: 'set_max_upward_message_num_per_candidate'
    new: number
}

/**
 * Sets the number of sessions after which an HRMP open channel request expires.
 */
export interface ConfigurationCall_set_hrmp_open_request_ttl {
    __kind: 'set_hrmp_open_request_ttl'
    new: number
}

/**
 * Sets the amount of funds that the sender should provide for opening an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_sender_deposit {
    __kind: 'set_hrmp_sender_deposit'
    new: bigint
}

/**
 * Sets the amount of funds that the recipient should provide for accepting opening an HRMP
 * channel.
 */
export interface ConfigurationCall_set_hrmp_recipient_deposit {
    __kind: 'set_hrmp_recipient_deposit'
    new: bigint
}

/**
 * Sets the maximum number of messages allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_capacity {
    __kind: 'set_hrmp_channel_max_capacity'
    new: number
}

/**
 * Sets the maximum total size of messages in bytes allowed in an HRMP channel at once.
 */
export interface ConfigurationCall_set_hrmp_channel_max_total_size {
    __kind: 'set_hrmp_channel_max_total_size'
    new: number
}

/**
 * Sets the maximum number of inbound HRMP channels a parachain is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_inbound_channels {
    __kind: 'set_hrmp_max_parachain_inbound_channels'
    new: number
}

/**
 * Sets the maximum number of inbound HRMP channels a parathread is allowed to accept.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_inbound_channels {
    __kind: 'set_hrmp_max_parathread_inbound_channels'
    new: number
}

/**
 * Sets the maximum size of a message that could ever be put into an HRMP channel.
 */
export interface ConfigurationCall_set_hrmp_channel_max_message_size {
    __kind: 'set_hrmp_channel_max_message_size'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP channels a parachain is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parachain_outbound_channels {
    __kind: 'set_hrmp_max_parachain_outbound_channels'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP channels a parathread is allowed to open.
 */
export interface ConfigurationCall_set_hrmp_max_parathread_outbound_channels {
    __kind: 'set_hrmp_max_parathread_outbound_channels'
    new: number
}

/**
 * Sets the maximum number of outbound HRMP messages can be sent by a candidate.
 */
export interface ConfigurationCall_set_hrmp_max_message_num_per_candidate {
    __kind: 'set_hrmp_max_message_num_per_candidate'
    new: number
}

/**
 * Enable or disable PVF pre-checking. Consult the field documentation prior executing.
 */
export interface ConfigurationCall_set_pvf_checking_enabled {
    __kind: 'set_pvf_checking_enabled'
    new: boolean
}

/**
 * Set the number of session changes after which a PVF pre-checking voting is rejected.
 */
export interface ConfigurationCall_set_pvf_voting_ttl {
    __kind: 'set_pvf_voting_ttl'
    new: number
}

/**
 * Sets the minimum delay between announcing the upgrade block for a parachain until the
 * upgrade taking place.
 * 
 * See the field documentation for information and constraints for the new value.
 */
export interface ConfigurationCall_set_minimum_validation_upgrade_delay {
    __kind: 'set_minimum_validation_upgrade_delay'
    new: number
}

/**
 * Setting this to true will disable consistency checks for the configuration setters.
 * Use with caution.
 */
export interface ConfigurationCall_set_bypass_consistency_check {
    __kind: 'set_bypass_consistency_check'
    new: boolean
}

/**
 * Set the asynchronous backing parameters.
 */
export interface ConfigurationCall_set_async_backing_params {
    __kind: 'set_async_backing_params'
    new: AsyncBackingParams
}

/**
 * Set PVF executor parameters.
 */
export interface ConfigurationCall_set_executor_params {
    __kind: 'set_executor_params'
    new: V4ExecutorParam[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSharedCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInclusionCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParaInherentCall = ParaInherentCall_enter

/**
 * Enter the paras inherent. This will process bitfields and backed candidates.
 */
export interface ParaInherentCall_enter {
    __kind: 'enter'
    data: V4InherentData
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasCall = ParasCall_force_set_current_code | ParasCall_force_set_current_head | ParasCall_force_schedule_code_upgrade | ParasCall_force_note_new_head | ParasCall_force_queue_action | ParasCall_add_trusted_validation_code | ParasCall_poke_unused_validation_code | ParasCall_include_pvf_check_statement

/**
 * Set the storage for the parachain validation code immediately.
 */
export interface ParasCall_force_set_current_code {
    __kind: 'force_set_current_code'
    para: number
    newCode: Uint8Array
}

/**
 * Set the storage for the current parachain head data immediately.
 */
export interface ParasCall_force_set_current_head {
    __kind: 'force_set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * Schedule an upgrade as if it was scheduled in the given relay parent block.
 */
export interface ParasCall_force_schedule_code_upgrade {
    __kind: 'force_schedule_code_upgrade'
    para: number
    newCode: Uint8Array
    relayParentNumber: number
}

/**
 * Note a new block head for para within the context of the current block.
 */
export interface ParasCall_force_note_new_head {
    __kind: 'force_note_new_head'
    para: number
    newHead: Uint8Array
}

/**
 * Put a parachain directly into the next session's action queue.
 * We can't queue it any sooner than this without going into the
 * initializer...
 */
export interface ParasCall_force_queue_action {
    __kind: 'force_queue_action'
    para: number
}

/**
 * Adds the validation code to the storage.
 * 
 * The code will not be added if it is already present. Additionally, if PVF pre-checking
 * is running for that code, it will be instantly accepted.
 * 
 * Otherwise, the code will be added into the storage. Note that the code will be added
 * into storage with reference count 0. This is to account the fact that there are no users
 * for this code yet. The caller will have to make sure that this code eventually gets
 * used by some parachain or removed from the storage to avoid storage leaks. For the latter
 * prefer to use the `poke_unused_validation_code` dispatchable to raw storage manipulation.
 * 
 * This function is mainly meant to be used for upgrading parachains that do not follow
 * the go-ahead signal while the PVF pre-checking feature is enabled.
 */
export interface ParasCall_add_trusted_validation_code {
    __kind: 'add_trusted_validation_code'
    validationCode: Uint8Array
}

/**
 * Remove the validation code from the storage iff the reference count is 0.
 * 
 * This is better than removing the storage directly, because it will not remove the code
 * that was suddenly got used by some parachain while this dispatchable was pending
 * dispatching.
 */
export interface ParasCall_poke_unused_validation_code {
    __kind: 'poke_unused_validation_code'
    validationCodeHash: Uint8Array
}

/**
 * Includes a statement for a PVF pre-checking vote. Potentially, finalizes the vote and
 * enacts the results if that was the last vote before achieving the supermajority.
 */
export interface ParasCall_include_pvf_check_statement {
    __kind: 'include_pvf_check_statement'
    stmt: V4PvfCheckStatement
    signature: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type InitializerCall = InitializerCall_force_approve

/**
 * Issue a signal to the consensus engine to forcibly act as though all parachain
 * blocks in all relay chain blocks up to and including the given number in the current
 * chain are valid and should be finalized.
 */
export interface InitializerCall_force_approve {
    __kind: 'force_approve'
    upTo: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type HrmpCall = HrmpCall_hrmp_init_open_channel | HrmpCall_hrmp_accept_open_channel | HrmpCall_hrmp_close_channel | HrmpCall_force_clean_hrmp | HrmpCall_force_process_hrmp_open | HrmpCall_force_process_hrmp_close | HrmpCall_hrmp_cancel_open_request | HrmpCall_force_open_hrmp_channel

/**
 * Initiate opening a channel from a parachain to a given recipient with given channel
 * parameters.
 * 
 * - `proposed_max_capacity` - specifies how many messages can be in the channel at once.
 * - `proposed_max_message_size` - specifies the maximum size of the messages.
 * 
 * These numbers are a subject to the relay-chain configuration limits.
 * 
 * The channel can be opened only after the recipient confirms it and only on a session
 * change.
 */
export interface HrmpCall_hrmp_init_open_channel {
    __kind: 'hrmp_init_open_channel'
    recipient: number
    proposedMaxCapacity: number
    proposedMaxMessageSize: number
}

/**
 * Accept a pending open channel request from the given sender.
 * 
 * The channel will be opened only on the next session boundary.
 */
export interface HrmpCall_hrmp_accept_open_channel {
    __kind: 'hrmp_accept_open_channel'
    sender: number
}

/**
 * Initiate unilateral closing of a channel. The origin must be either the sender or the
 * recipient in the channel being closed.
 * 
 * The closure can only happen on a session change.
 */
export interface HrmpCall_hrmp_close_channel {
    __kind: 'hrmp_close_channel'
    channelId: HrmpChannelId
}

/**
 * This extrinsic triggers the cleanup of all the HRMP storage items that
 * a para may have. Normally this happens once per session, but this allows
 * you to trigger the cleanup immediately for a specific parachain.
 * 
 * Origin must be Root.
 * 
 * Number of inbound and outbound channels for `para` must be provided as witness data of weighing.
 */
export interface HrmpCall_force_clean_hrmp {
    __kind: 'force_clean_hrmp'
    para: number
    inbound: number
    outbound: number
}

/**
 * Force process HRMP open channel requests.
 * 
 * If there are pending HRMP open channel requests, you can use this
 * function process all of those requests immediately.
 * 
 * Total number of opening channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_open {
    __kind: 'force_process_hrmp_open'
    channels: number
}

/**
 * Force process HRMP close channel requests.
 * 
 * If there are pending HRMP close channel requests, you can use this
 * function process all of those requests immediately.
 * 
 * Total number of closing channels must be provided as witness data of weighing.
 */
export interface HrmpCall_force_process_hrmp_close {
    __kind: 'force_process_hrmp_close'
    channels: number
}

/**
 * This cancels a pending open channel request. It can be canceled by either of the sender
 * or the recipient for that request. The origin must be either of those.
 * 
 * The cancellation happens immediately. It is not possible to cancel the request if it is
 * already accepted.
 * 
 * Total number of open requests (i.e. `HrmpOpenChannelRequestsList`) must be provided as
 * witness data.
 */
export interface HrmpCall_hrmp_cancel_open_request {
    __kind: 'hrmp_cancel_open_request'
    channelId: HrmpChannelId
    openRequests: number
}

/**
 * Open a channel from a `sender` to a `recipient` `ParaId` using the Root origin. Although
 * opened by Root, the `max_capacity` and `max_message_size` are still subject to the Relay
 * Chain's configured limits.
 * 
 * Expected use is when one of the `ParaId`s involved in the channel is governed by the
 * Relay Chain, e.g. a common good parachain.
 */
export interface HrmpCall_force_open_hrmp_channel {
    __kind: 'force_open_hrmp_channel'
    sender: number
    recipient: number
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasDisputesCall = ParasDisputesCall_force_unfreeze

export interface ParasDisputesCall_force_unfreeze {
    __kind: 'force_unfreeze'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSlashingCall = ParasSlashingCall_report_dispute_lost_unsigned

export interface ParasSlashingCall_report_dispute_lost_unsigned {
    __kind: 'report_dispute_lost_unsigned'
    disputeProof: DisputeProof
    keyOwnerProof: MembershipProof
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type RegistrarCall = RegistrarCall_register | RegistrarCall_force_register | RegistrarCall_deregister | RegistrarCall_swap | RegistrarCall_remove_lock | RegistrarCall_reserve | RegistrarCall_add_lock | RegistrarCall_schedule_code_upgrade | RegistrarCall_set_current_head

/**
 * Register head data and validation code for a reserved Para Id.
 * 
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin.
 * - `id`: The para ID. Must be owned/managed by the `origin` signing account.
 * - `genesis_head`: The genesis head data of the parachain/thread.
 * - `validation_code`: The initial validation code of the parachain/thread.
 * 
 * ## Deposits/Fees
 * The origin signed account must reserve a corresponding deposit for the registration. Anything already
 * reserved previously for this para ID is accounted for.
 * 
 * ## Events
 * The `Registered` event is emitted in case of success.
 */
export interface RegistrarCall_register {
    __kind: 'register'
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * Force the registration of a Para Id on the relay chain.
 * 
 * This function must be called by a Root origin.
 * 
 * The deposit taken can be specified for this registration. Any `ParaId`
 * can be registered, including sub-1000 IDs which are System Parachains.
 */
export interface RegistrarCall_force_register {
    __kind: 'force_register'
    who: Uint8Array
    deposit: bigint
    id: number
    genesisHead: Uint8Array
    validationCode: Uint8Array
}

/**
 * Deregister a Para Id, freeing all data and returning any deposit.
 * 
 * The caller must be Root, the `para` owner, or the `para` itself. The para must be a parathread.
 */
export interface RegistrarCall_deregister {
    __kind: 'deregister'
    id: number
}

/**
 * Swap a parachain with another parachain or parathread.
 * 
 * The origin must be Root, the `para` owner, or the `para` itself.
 * 
 * The swap will happen only if there is already an opposite swap pending. If there is not,
 * the swap will be stored in the pending swaps map, ready for a later confirmatory swap.
 * 
 * The `ParaId`s remain mapped to the same head data and code so external code can rely on
 * `ParaId` to be a long-term identifier of a notional "parachain". However, their
 * scheduling info (i.e. whether they're a parathread or parachain), auction information
 * and the auction deposit are switched.
 */
export interface RegistrarCall_swap {
    __kind: 'swap'
    id: number
    other: number
}

/**
 * Remove a manager lock from a para. This will allow the manager of a
 * previously locked para to deregister or swap a para without using governance.
 * 
 * Can only be called by the Root origin or the parachain.
 */
export interface RegistrarCall_remove_lock {
    __kind: 'remove_lock'
    para: number
}

/**
 * Reserve a Para Id on the relay chain.
 * 
 * This function will reserve a new Para Id to be owned/managed by the origin account.
 * The origin account is able to register head data and validation code using `register` to create
 * a parathread. Using the Slots pallet, a parathread can then be upgraded to get a parachain slot.
 * 
 * ## Arguments
 * - `origin`: Must be called by a `Signed` origin. Becomes the manager/owner of the new para ID.
 * 
 * ## Deposits/Fees
 * The origin must reserve a deposit of `ParaDeposit` for the registration.
 * 
 * ## Events
 * The `Reserved` event is emitted in case of success, which provides the ID reserved for use.
 */
export interface RegistrarCall_reserve {
    __kind: 'reserve'
}

/**
 * Add a manager lock from a para. This will prevent the manager of a
 * para to deregister or swap a para.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_add_lock {
    __kind: 'add_lock'
    para: number
}

/**
 * Schedule a parachain upgrade.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_schedule_code_upgrade {
    __kind: 'schedule_code_upgrade'
    para: number
    newCode: Uint8Array
}

/**
 * Set the parachain's current head.
 * 
 * Can be called by Root, the parachain, or the parachain manager if the parachain is unlocked.
 */
export interface RegistrarCall_set_current_head {
    __kind: 'set_current_head'
    para: number
    newHead: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SlotsCall = SlotsCall_force_lease | SlotsCall_clear_all_leases | SlotsCall_trigger_onboard

/**
 * Just a connect into the `lease_out` call, in case Root wants to force some lease to happen
 * independently of any other on-chain mechanism to use it.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_force_lease {
    __kind: 'force_lease'
    para: number
    leaser: Uint8Array
    amount: bigint
    periodBegin: number
    periodCount: number
}

/**
 * Clear all leases for a Para Id, refunding any deposits back to the original owners.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 */
export interface SlotsCall_clear_all_leases {
    __kind: 'clear_all_leases'
    para: number
}

/**
 * Try to onboard a parachain that has a lease for the current lease period.
 * 
 * This function can be useful if there was some state issue with a para that should
 * have onboarded, but was unable to. As long as they have a lease period, we can
 * let them onboard from here.
 * 
 * Origin must be signed, but can be called by anyone.
 */
export interface SlotsCall_trigger_onboard {
    __kind: 'trigger_onboard'
    para: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AuctionsCall = AuctionsCall_new_auction | AuctionsCall_bid | AuctionsCall_cancel_auction

/**
 * Create a new auction.
 * 
 * This can only happen when there isn't already an auction in progress and may only be
 * called by the root origin. Accepts the `duration` of this auction and the
 * `lease_period_index` of the initial lease period of the four that are to be auctioned.
 */
export interface AuctionsCall_new_auction {
    __kind: 'new_auction'
    duration: number
    leasePeriodIndex: number
}

/**
 * Make a new bid from an account (including a parachain account) for deploying a new
 * parachain.
 * 
 * Multiple simultaneous bids from the same bidder are allowed only as long as all active
 * bids overlap each other (i.e. are mutually exclusive). Bids cannot be redacted.
 * 
 * - `sub` is the sub-bidder ID, allowing for multiple competing bids to be made by (and
 * funded by) the same account.
 * - `auction_index` is the index of the auction to bid on. Should just be the present
 * value of `AuctionCounter`.
 * - `first_slot` is the first lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `last_slot` is the last lease period index of the range to bid on. This is the
 * absolute lease period index value, not an auction-specific offset.
 * - `amount` is the amount to bid to be held as deposit for the parachain should the
 * bid win. This amount is held throughout the range.
 */
export interface AuctionsCall_bid {
    __kind: 'bid'
    para: number
    auctionIndex: number
    firstSlot: number
    lastSlot: number
    amount: bigint
}

/**
 * Cancel an in-progress auction.
 * 
 * Can only be called by Root origin.
 */
export interface AuctionsCall_cancel_auction {
    __kind: 'cancel_auction'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CrowdloanCall = CrowdloanCall_create | CrowdloanCall_contribute | CrowdloanCall_withdraw | CrowdloanCall_refund | CrowdloanCall_dissolve | CrowdloanCall_edit | CrowdloanCall_add_memo | CrowdloanCall_poke | CrowdloanCall_contribute_all

/**
 * Create a new crowdloaning campaign for a parachain slot with the given lease period range.
 * 
 * This applies a lock to your parachain configuration, ensuring that it cannot be changed
 * by the parachain manager.
 */
export interface CrowdloanCall_create {
    __kind: 'create'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * Contribute to a crowd sale. This will transfer some balance over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute {
    __kind: 'contribute'
    index: number
    value: bigint
    signature: (MultiSignature | undefined)
}

/**
 * Withdraw full balance of a specific contributor.
 * 
 * Origin must be signed, but can come from anyone.
 * 
 * The fund must be either in, or ready for, retirement. For a fund to be *in* retirement, then the retirement
 * flag must be set. For a fund to be ready for retirement, then:
 * - it must not already be in retirement;
 * - the amount of raised funds must be bigger than the _free_ balance of the account;
 * - and either:
 *   - the block number must be at least `end`; or
 *   - the current lease period must be greater than the fund's `last_period`.
 * 
 * In this case, the fund's retirement flag is set and its `end` is reset to the current block
 * number.
 * 
 * - `who`: The account whose contribution should be withdrawn.
 * - `index`: The parachain to whose crowdloan the contribution was made.
 */
export interface CrowdloanCall_withdraw {
    __kind: 'withdraw'
    who: Uint8Array
    index: number
}

/**
 * Automatically refund contributors of an ended crowdloan.
 * Due to weight restrictions, this function may need to be called multiple
 * times to fully refund all users. We will refund `RemoveKeysLimit` users at a time.
 * 
 * Origin must be signed, but can come from anyone.
 */
export interface CrowdloanCall_refund {
    __kind: 'refund'
    index: number
}

/**
 * Remove a fund after the retirement period has ended and all funds have been returned.
 */
export interface CrowdloanCall_dissolve {
    __kind: 'dissolve'
    index: number
}

/**
 * Edit the configuration for an in-progress crowdloan.
 * 
 * Can only be called by Root origin.
 */
export interface CrowdloanCall_edit {
    __kind: 'edit'
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
    verifier: (MultiSigner | undefined)
}

/**
 * Add an optional memo to an existing crowdloan contribution.
 * 
 * Origin must be Signed, and the user must have contributed to the crowdloan.
 */
export interface CrowdloanCall_add_memo {
    __kind: 'add_memo'
    index: number
    memo: Uint8Array
}

/**
 * Poke the fund into `NewRaise`
 * 
 * Origin must be Signed, and the fund has non-zero raise.
 */
export interface CrowdloanCall_poke {
    __kind: 'poke'
    index: number
}

/**
 * Contribute your entire balance to a crowd sale. This will transfer the entire balance of a user over to fund a parachain
 * slot. It will be withdrawable when the crowdloan has ended and the funds are unused.
 */
export interface CrowdloanCall_contribute_all {
    __kind: 'contribute_all'
    index: number
    signature: (MultiSignature | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmPalletCall = XcmPalletCall_send | XcmPalletCall_teleport_assets | XcmPalletCall_reserve_transfer_assets | XcmPalletCall_execute | XcmPalletCall_force_xcm_version | XcmPalletCall_force_default_xcm_version | XcmPalletCall_force_subscribe_version_notify | XcmPalletCall_force_unsubscribe_version_notify | XcmPalletCall_limited_reserve_transfer_assets | XcmPalletCall_limited_teleport_assets | XcmPalletCall_force_suspension

export interface XcmPalletCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface XcmPalletCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`. The weight limit for fees is not provided and thus is unlimited,
 * with all fees taken as needed from the asset.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 */
export interface XcmPalletCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * Execute an XCM message from a local, signed, origin.
 * 
 * An event is deposited indicating whether `msg` could be executed completely or only
 * partially.
 * 
 * No more than `max_weight` will be used in its attempted execution. If this is less than the
 * maximum amount of weight that the message could take to be executed, then no execution
 * attempt will be made.
 * 
 * NOTE: A successful return to this does *not* imply that the `msg` was executed successfully
 * to completion; only that *some* of it was executed.
 */
export interface XcmPalletCall_execute {
    __kind: 'execute'
    message: Type_497
    maxWeight: Weight
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface XcmPalletCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface XcmPalletCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface XcmPalletCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface XcmPalletCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination
 * chain and forward a notification XCM.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. This should include the assets used to pay the fee on the
 *   `dest` side.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface XcmPalletCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the asset in the `assets` vector of
 * index `fee_asset_item`, up to enough to pay for `weight_limit` of weight. If more weight
 * is needed than `weight_limit`, then the operation will fail and the assets send may be
 * at risk.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `fee_asset_item`: The index into `assets` of the item which should be used to pay
 *   fees.
 * - `weight_limit`: The remote-side weight limit, if any, for the XCM fee purchase.
 */
export interface XcmPalletCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * Set or unset the global suspension state of the XCM executor.
 * 
 * - `origin`: Must be an origin specified by AdminOrigin.
 * - `suspended`: `true` to suspend, `false` to resume.
 */
export interface XcmPalletCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MessageQueueCall = MessageQueueCall_reap_page | MessageQueueCall_execute_overweight

/**
 * Remove a page which has no more messages remaining to be processed or is stale.
 */
export interface MessageQueueCall_reap_page {
    __kind: 'reap_page'
    messageOrigin: AggregateMessageOrigin
    pageIndex: number
}

/**
 * Execute an overweight message.
 * 
 * Temporary processing errors will be propagated whereas permanent errors are treated
 * as success condition.
 * 
 * - `origin`: Must be `Signed`.
 * - `message_origin`: The origin from which the message to be executed arrived.
 * - `page`: The page in the queue in which the message to be executed is sitting.
 * - `index`: The index into the queue of the message to be executed.
 * - `weight_limit`: The maximum amount of weight allowed to be consumed in the execution
 *   of the message.
 * 
 * Benchmark complexity considerations: O(index + weight_limit).
 */
export interface MessageQueueCall_execute_overweight {
    __kind: 'execute_overweight'
    messageOrigin: AggregateMessageOrigin
    page: number
    index: number
    weightLimit: Weight
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParasSudoWrapperCall = ParasSudoWrapperCall_sudo_schedule_para_initialize | ParasSudoWrapperCall_sudo_schedule_para_cleanup | ParasSudoWrapperCall_sudo_schedule_parathread_upgrade | ParasSudoWrapperCall_sudo_schedule_parachain_downgrade | ParasSudoWrapperCall_sudo_queue_downward_xcm | ParasSudoWrapperCall_sudo_establish_hrmp_channel

/**
 * Schedule a para to be initialized at the start of the next session.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_initialize {
    __kind: 'sudo_schedule_para_initialize'
    id: number
    genesis: ParaGenesisArgs
}

/**
 * Schedule a para to be cleaned up at the start of the next session.
 */
export interface ParasSudoWrapperCall_sudo_schedule_para_cleanup {
    __kind: 'sudo_schedule_para_cleanup'
    id: number
}

/**
 * Upgrade a parathread to a parachain
 */
export interface ParasSudoWrapperCall_sudo_schedule_parathread_upgrade {
    __kind: 'sudo_schedule_parathread_upgrade'
    id: number
}

/**
 * Downgrade a parachain to a parathread
 */
export interface ParasSudoWrapperCall_sudo_schedule_parachain_downgrade {
    __kind: 'sudo_schedule_parachain_downgrade'
    id: number
}

/**
 * Send a downward XCM to the given para.
 * 
 * The given parachain should exist and the payload should not exceed the preconfigured size
 * `config.max_downward_message_size`.
 */
export interface ParasSudoWrapperCall_sudo_queue_downward_xcm {
    __kind: 'sudo_queue_downward_xcm'
    id: number
    xcm: VersionedXcm
}

/**
 * Forcefully establish a channel from the sender to the recipient.
 * 
 * This is equivalent to sending an `Hrmp::hrmp_init_open_channel` extrinsic followed by
 * `Hrmp::hrmp_accept_open_channel`.
 */
export interface ParasSudoWrapperCall_sudo_establish_hrmp_channel {
    __kind: 'sudo_establish_hrmp_channel'
    sender: number
    recipient: number
    maxCapacity: number
    maxMessageSize: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type AssignedSlotsCall = AssignedSlotsCall_assign_perm_parachain_slot | AssignedSlotsCall_assign_temp_parachain_slot | AssignedSlotsCall_unassign_parachain_slot

/**
 * Assign a permanent parachain slot and immediately create a lease for it.
 */
export interface AssignedSlotsCall_assign_perm_parachain_slot {
    __kind: 'assign_perm_parachain_slot'
    id: number
}

/**
 * Assign a temporary parachain slot. The function tries to create a lease for it
 * immediately if `SlotLeasePeriodStart::Current` is specified, and if the number
 * of currently active temporary slots is below `MaxTemporarySlotPerLeasePeriod`.
 */
export interface AssignedSlotsCall_assign_temp_parachain_slot {
    __kind: 'assign_temp_parachain_slot'
    id: number
    leasePeriodStart: SlotLeasePeriodStart
}

/**
 * Unassign a permanent or temporary parachain slot
 */
export interface AssignedSlotsCall_unassign_parachain_slot {
    __kind: 'unassign_parachain_slot'
    id: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ValidatorManagerCall = ValidatorManagerCall_register_validators | ValidatorManagerCall_deregister_validators

/**
 * Add new validators to the set.
 * 
 * The new validators will be active from current session + 2.
 */
export interface ValidatorManagerCall_register_validators {
    __kind: 'register_validators'
    validators: Uint8Array[]
}

/**
 * Remove validators from the set.
 * 
 * The removed validators will be deactivated from current session + 2.
 */
export interface ValidatorManagerCall_deregister_validators {
    __kind: 'deregister_validators'
    validators: Uint8Array[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiTokensCall = MultiTokensCall_create_collection | MultiTokensCall_destroy_collection | MultiTokensCall_mutate_collection | MultiTokensCall_mutate_token | MultiTokensCall_mint | MultiTokensCall_burn | MultiTokensCall_transfer | MultiTokensCall_freeze | MultiTokensCall_thaw | MultiTokensCall_set_attribute | MultiTokensCall_remove_attribute | MultiTokensCall_remove_all_attributes | MultiTokensCall_batch_transfer | MultiTokensCall_batch_mint | MultiTokensCall_batch_set_attribute | MultiTokensCall_approve_collection | MultiTokensCall_unapprove_collection | MultiTokensCall_approve_token | MultiTokensCall_unapprove_token | MultiTokensCall_claim_collections | MultiTokensCall_claim_tokens | MultiTokensCall_finish_claim_tokens | MultiTokensCall_force_mutate_collection | MultiTokensCall_force_transfer | MultiTokensCall_force_set_collection | MultiTokensCall_force_set_token | MultiTokensCall_force_set_attribute | MultiTokensCall_force_set_collection_account | MultiTokensCall_force_set_token_account | MultiTokensCall_force_create_collection | MultiTokensCall_force_mint | MultiTokensCall_force_burn | MultiTokensCall_force_approve_collection | MultiTokensCall_force_freeze | MultiTokensCall_force_set_next_collection_id | MultiTokensCall_force_set_ethereum_account | MultiTokensCall_force_set_ethereum_collection_id | MultiTokensCall_force_set_unmintable_token_ids | MultiTokensCall_force_create_ethereum_collection | MultiTokensCall_force_set_ethereum_unmintable_token_ids

/**
 * Creates a new [`Collection`](ep_multi_tokens::Collection) from `descriptor`
 * 
 * # Errors
 * 
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * Destroys [`Collection`](ep_multi_tokens::Collection) with `id`. `origin` must be the
 * owner of the [`Collection`](ep_multi_tokens::Collection).
 * 
 * # Errors
 * 
 * - [`Error::NoPermission`] if `origin` is not the owner of the collection.
 * - [`Error::CollectionNotFound`] if `Collection` with `id` does not exist.
 * - [`Error::DestroyForbiddenByCollectionEvent`] if another pallet is blocking the
 *   collection's destruction
 * - [`Error::DestroyForbiddenByRemainingTokens`] if collection still has tokens when
 *   destroying
 * - [`Error::DestroyForbiddenByAttributeCount`] if collection still has attributes when
 *   destroying
 * current number of collection attributes.
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * Modify [`Collection`](ep_multi_tokens::Collection) with `id` by applying `mutation`
 * 
 * # Errors
 * 
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::NoPermission`] if `origin` is not the owner of `collection`.
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Modify [`Token`](ep_multi_tokens::Token) with `token_id`  from
 * [`Collection`](ep_multi_tokens::Collection) with `collection_id` by applying `mutation`
 * 
 * # Errors
 * 
 * - [`Error::CurrencyIncompatibleWithCollectionRoyalty`] if token has already been
 *   assigned a royalty
 * - [`Error::NoPermission`] if not the collection owner
 * - [`Error::TokenNotFound`] if Token does not exist
 * - [`Error::ConflictingLocation`] if the new location is already occupied
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
 * [`MintPolicy`](traits::CollectionPolicy::Mint).
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::CollectionNotFound`] if `Collection` does not exist.
 * - [`Error::TokenNotFound`] if `Token` does not exist.
 * - [`Error::TokenAlreadyExists`] if attempting to create a token that already exists
 * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
 * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
 *   token deposit
 * - [`Error::ConflictingLocation`] if the token is foreign and the location is already
 *   mapped to another asset in `AssetIdsByLocation`
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * Reduces the balance of `owner` by `amount` of `token_id` from `collection_id`.
 * It also updates the total supply of `collection_id`.
 * 
 * # Errors
 * - [`Error::CollectionNotFound`] if `collection` does not exist.
 * - [`Error::BalanceLow`] if `owner` account does not has enough amount of any token in
 *   `tokens` of `collection`.
 * - [`Error::DepositUnreserveFailed`] if caller does not have enough reserved balance to
 *   unreserve
 * - [`Error::DestroyForbiddenByAttributeCount`] if removing token from storage but the
 *   attribute count is greater than zero
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * `operator` transfers to `recipient` for `collection_id` with `params`
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Freeze collection, token or account
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * Thaw collection, token or account
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * Sets the attribute `key` to `value` for `collection_id`.
 * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
 * the attribute is added to the token.
 * 
 * # Errors
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
 * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
 *   storage.
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: Uint8Array
}

/**
 * Removes the `key` attribute from the given `collection_id` or `token_id`.
 * 
 * # Errors
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `caller` is not the owner of the collection.
 * - `Underflow` if an attribute counter underflows
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
}

/**
 * Removes all attributes from the given `collection_id` or `token_id`.
 * 
 * # Errors
 * - `InvalidAttributeCount` if `attribute_count` doesn't match the number of attributes
 * - [`Error::CollectionNotFound`] if Collection with `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if Token with `token_id` does not exist.
 * - [`Error::NoPermission`] if `origin` account is not the owner of the Collection or
 *   Token
 * - other errors from `remove_attribute`
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributeCount: number
}

/**
 * Transfers the specific amount of tokens of `collection` to `recipients` from `origin`
 * account. A single failure will fail all transfers.
 * 
 * # Errors
 * 
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::BalanceLow`] if `source` does not own enough amount of `collection`.
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
 * [`AccountId`](frame_system::Config::AccountId) and [`MintParams`]. A single mint failure
 * will fail all of them in the batch.
 * 
 * # Errors
 * - [`Error::AmountZero`] if `amount == 0`.
 * - [`Error::CollectionNotFound`] if `collection` does **not** exist.
 * - [`Error::NoPermission`] if `caller` is not allowed to mint the `collection`.
 * - [`Error::TokenMintCapExceeded`] if the mint policy TokenCap does not allow minting
 * - [`Error::MaxTokenCountExceeded`] if the mint policy max_token_count is exceeded
 * - [`Error::DepositReserveFailed`] if the issuer does not have sufficient balance for
 *   token deposit
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_532[]
}

/**
 * Collection owner sets `attributes` to `collection_id`
 * 
 * If `token_id` is [`None`], the attribute is added to the collection. If it is [`Some`],
 * the attribute is added to the token.
 * 
 * # Errors
 * 
 * - [`Error::InvalidAttributeKey`] if `key.len() == 0`
 * - [`Error::CollectionNotFound`] if `collection_id` does not exist.
 * - [`Error::TokenNotFound`] if `token_id` is `Some` and does not exist.
 * - [`Error::NoPermission`] if `source` account is not the owner of the collection.
 * - [`Error::DepositReserveFailed`] if unable to reserve the deposit for the attribute
 *   storage.
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributes: AttributeKeyValuePair[]
}

/**
 * Approve the `operator` to manage all of `origin`'s tokens belonging to `collection_id`.
 * If an `expiration` is provided, the approval will end when it expires.
 * 
 * # Errors
 * 
 * - [`Error::CannotApproveSelf`] if `origin == operator`
 * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
 * - [`Error::CollectionAccountNotFound`] if the collection account does not exist
 * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: Uint8Array
    expiration: (number | undefined)
}

/**
 * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `collection`
 * 
 * # Errors
 * 
 * - [`Error::CollectionAccountNotFound`] if the collection account cannot be found
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: Uint8Array
}

/**
 * Approve `operator` to transfer up to `amount` of `caller`'s balance for `token_id` of
 * `collection_id`. An `expiration` can be provided. `current_amount` must match the
 * current approved amount.
 * 
 * # Errors
 * - [`Error::CannotApproveSelf`] if `origin == operator`
 * - [`Error::CollectionAlreadyApproved`] if `collection_id` is already approved
 * - [`Error::AlreadyExpired`] if `expiration` is earlier than now
 * - [`Error::TokenAccountNotFound`] if the token account does not exist
 * - [`Error::MaxApprovalsExceeded`] if approval count has exceeded the maximum
 * - [`Error::WrongCurrentApprovedAmount`] if `current_amount` does not match the current
 *   approval amount
 */
export interface MultiTokensCall_approve_token {
    __kind: 'approve_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
    amount: bigint
    expiration: (number | undefined)
    currentAmount: bigint
}

/**
 * Unapprove `operator` to transfer `origin`'s `token_id` of `collection_id`
 * 
 * # Errors
 * 
 * - [`Error::TokenAccountNotFound`] if the token account does not exist
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
}

/**
 * Transfers ownership of collections to `destination` if the signature and
 * `collection_count` matches.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `destination` account.
 * 
 * This will always execute with weight of [`Config::MaxClaimableCollectionsPerAccount`]
 * and it will reimburse weight for collections under that number.
 * 
 * ### Parameters:
 * - `destination`: The account that will receive ownership of the collections
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * - `ethereum_address`: The Ethereum address from which the message is signed.
 * - `collection_count`: The number of collections that will be claimed. It can also be
 *   higher than the actual number, but if it's lower it will fail.
 */
export interface MultiTokensCall_claim_collections {
    __kind: 'claim_collections'
    destination: Uint8Array
    ethereumSignature: Uint8Array
    ethereumAddress: Uint8Array
    collectionCount: number
}

/**
 * Sends [`Event::ClaimTokensInitiated`] event if validation of the params succeeds.
 * 
 * The dispatch origin for this call must be _None_.
 * 
 * Unsigned Validation:
 * A call to claim is deemed valid if the signature provided matches
 * the expected signed message of:
 * 
 * > Ethereum Signed Message:
 * > (configured prefix string)(address)
 * 
 * and `address` matches the `destination` account.
 * 
 * ### Parameters:
 * - `destination`: The account that will receive token balances
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * - `ethereum_address` : The Ethereum address from which the message is signed.
 */
export interface MultiTokensCall_claim_tokens {
    __kind: 'claim_tokens'
    destination: Uint8Array
    ethereumSignature: Uint8Array
    ethereumAddress: Uint8Array
}

/**
 * Sends an event that signifies claiming the tokens was completed. Only callable by
 * [`Config::EthereumMigrationOrigin`].
 */
export interface MultiTokensCall_finish_claim_tokens {
    __kind: 'finish_claim_tokens'
    destination: Uint8Array
    ethereumAddress: Uint8Array
}

/**
 * Exactly as [`mutate_collection`](Self::mutate_collection), except the origin must be
 * root and the `caller` account should be specified.
 * 
 * # Errors
 * 
 * Same as [`mutate_collection`](Self::mutate_collection)
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Exactly as [`transfer`](Self::transfer), except the origin must be root and the source
 * account should be specified.
 * 
 * # Errors
 * 
 * Same as [`transfer`](Self::transfer)
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * Set the Collections storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value: (Collection | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value: (Token | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: (Attribute | undefined)
}

/**
 * Set the CollectionAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value: (CollectionAccount | undefined)
}

/**
 * Set the TokenAccounts storage to the given `value`, origin must be root
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value: (TokenAccount | undefined)
}

/**
 * Creates a new collection from `descriptor` at `collection_id`, origin must be root
 * 
 * # Errors
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: Uint8Array
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Same as [`mint`](Self::mint), but it is callable by
 * [`Config::EthereumMigrationOrigin`]. If `caller` is None, it will use the collection
 * owner. If `depositor` is `Some`, they will pay the deposit for minting.
 */
export interface MultiTokensCall_force_mint {
    __kind: 'force_mint'
    caller: (MultiAddress | undefined)
    recipient: MultiAddress
    collectionId: bigint
    params: FlexibleMintParams
    depositor: (MultiAddress | undefined)
}

/**
 * Same as [`burn`](Self::burn), but it is only callable by
 * [`Config::ForceOrigin`]. Executes the burn by `caller`.
 */
export interface MultiTokensCall_force_burn {
    __kind: 'force_burn'
    caller: MultiAddress
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * Same as [`approve_collection`](Self::approve_collection), but it is callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_approve_collection {
    __kind: 'force_approve_collection'
    caller: MultiAddress
    collectionId: bigint
    operator: Uint8Array
    expiration: (number | undefined)
}

/**
 * Same as [`freeze`](Self::freeze), but it is callable by [`Config::ForceOrigin`]
 */
export interface MultiTokensCall_force_freeze {
    __kind: 'force_freeze'
    info: Freeze
}

/**
 * Sets [`NextCollectionId`] to `value`. Only callable by [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_next_collection_id {
    __kind: 'force_set_next_collection_id'
    value: bigint
}

/**
 * Sets [`ClaimableCollectionIds`] to `value`. Only callable by [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: Uint8Array
    value: (bigint[] | undefined)
}

/**
 * Sets [`NativeCollectionIds`] to `native_collection_id`. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId: (bigint | undefined)
}

/**
 * Sets [`UnmintableTokenIds`] storage. Only callable by
 * [`Config::ForceOrigin`].
 */
export interface MultiTokensCall_force_set_unmintable_token_ids {
    __kind: 'force_set_unmintable_token_ids'
    collectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * Creates a new collection from `descriptor` at `collection_id`, origin must be
 * [`Config::EthereumMigrationOrigin`]. It differs from `force_create_collection`
 * since it writes to `NativeCollectionIds` and `ClaimableCollectionIds`.
 * 
 * # Params
 * - `owner` - the account that will own the new collection
 * - `claimer` - the ethereum address that will be able to claim the collection
 * - `ethereum_collection_id` - the collection id on ethereum
 * 
 * # Errors
 * - [`Error::DepositReserveFailed`] if the deposit cannot be reserved
 * - [`Error::CollectionIdAlreadyInUse`] if the collection id is already in use
 */
export interface MultiTokensCall_force_create_ethereum_collection {
    __kind: 'force_create_ethereum_collection'
    owner: Uint8Array
    claimer: Uint8Array
    ethereumCollectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Sets [`UnmintableTokenIds`] using ethereum_collection_id, the function will fail if the
 * ethereum_collection_id is invalid
 */
export interface MultiTokensCall_force_set_ethereum_unmintable_token_ids {
    __kind: 'force_set_ethereum_unmintable_token_ids'
    ethereumCollectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FuelTanksCall = FuelTanksCall_create_fuel_tank | FuelTanksCall_mutate_fuel_tank | FuelTanksCall_add_account | FuelTanksCall_remove_account | FuelTanksCall_remove_account_rule_data | FuelTanksCall_dispatch | FuelTanksCall_dispatch_and_touch | FuelTanksCall_mutate_freeze_state | FuelTanksCall_insert_rule_set | FuelTanksCall_remove_rule_set | FuelTanksCall_batch_add_account | FuelTanksCall_batch_remove_account | FuelTanksCall_force_set_consumption | FuelTanksCall_destroy_fuel_tank | FuelTanksCall_force_create_fuel_tank | FuelTanksCall_force_batch_add_account

/**
 * Creates a fuel tank, given a descriptor
 * 
 * # Errors
 * 
 * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
 * - [`Error::DuplicateRuleKinds`] if a rule set has multiple rules of the same kind
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * Apply `mutation` to fuel tank with `tank_id`.
 * 
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if `origin` is not the fuel tank owner
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * Adds new account for `user_id` to fuel tank at `tank_id`. An account is
 * required to dispatch calls. A deposit is required, and may be paid by
 * the user or the fuel tank, depending on the settings.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
 * are returned.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountNotFound`] if account at `user_id` does not exist
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
 * the fuel tank or the rule set to be frozen.
 * 
 * ### Errors
 * 
 * - [`Error::FuelTankNotFound`] if fuel tank for `tank_id` doesn't exist
 * - [`Error::NoPermission`] if called by non-owner
 * - [`Error::AccountNotFound`] if account does not exist for `user_id`
 * - [`Error::RuleSetNotFound`] if rule set does not exist for `rule_set_id`
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::RuleNotFound`] if rule does not exist for `rule_kind`
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * Dispatch a call using the `tank_id` subject to the rules of `rule_set_id`
 * 
 * # Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::UsageRestricted`] if caller is not part of ruleset whitelist
 * - [`Error::CallerDoesNotHaveRuleSetTokenBalance`] if caller does not own the tokens to
 *   use the ruleset for remaining_fee when `pays_remaining_fee` is true
 * - [`Error::FuelTankOutOfFunds`] if the fuel tank account cannot pay fees
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings: (DispatchSettings | undefined)
}

/**
 * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
 * exist and is allowed by the fuel tank's `user_account_management` settings.
 * 
 * # Errors
 * 
 * Returns the same errors as [dispatch](Self::dispatch) and
 * [add_account](Self::add_account)
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings: (DispatchSettings | undefined)
}

/**
 * Mutate `is_frozen` state that determines if fuel tank or rule set can be used
 * 
 * # Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not a fuel tank owner
 */
export interface FuelTanksCall_mutate_freeze_state {
    __kind: 'mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId: (number | undefined)
    isFrozen: boolean
}

/**
 * Insert a new rule set for `tank_id` and `rule_set_id`. It can be a new rule set
 * or it can replace an existing one. If it is replacing a rule set, a rule that is storing
 * data on any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove
 * the data first. If a rule is being replaced, it will be mutated with the new parameters,
 * and it will maintain any persistent data it already has.
 * 
 * This is only callable by the fuel tank's owner.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not the fuel tank owner
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
 *   account data
 * - [`Error::MaxRuleSetsExceeded`] if max number of rule sets was exceeded
 * - [`Error::DuplicateRuleKinds`] if adding a rule set with multiple rules of the same
 *   kind
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
}

/**
 * Remove rule set for `tank_id` and `rule_set_id`. A rule that is storing data on
 * any accounts cannot be removed. Use [Self::remove_account_rule_data] to remove the
 * data first. This is only callable by the fuel tank's owner.
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if `tank_id` does not exist.
 * - [`Error::NoPermission`] if caller is not the fuel tank owner
 * - [`Error::RequiresFrozenTankOrRuleset`] if tank or rule set is not frozen
 * - [`Error::CannotRemoveRuleThatIsStoringAccountData`] if removing a rule that is storing
 *   account data
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

/**
 * Similar to add_account but takes a list of
 * [`AccountId`](frame_system::Config::AccountId)s to insert into a fuel tank.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountAlreadyExists`] if account at `user_id` already exists
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Similar to remove_account but takes a list of
 * [`AccountId`](frame_system::Config::AccountId)s to remove from a fuel tank.
 * ### Errors
 * - [`Error::FuelTankNotFound`] if fuel tank at `tank_id` does not exist
 * - [`Error::NoPermission`] if `origin` does not have permission to add an account
 * - [`Error::AccountNotFound`] if account at `user_id` does not exist
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Force set the fuel tank consumption
 * If `user_id` is [`Some`], it sets the consumption for that account.
 * If it is [`None`], it sets the consumption on the fuel tank directly.
 * 
 * # Errors
 * 
 * - [`Error::AccountNotFound`] if `user_id` is `Some` and account does not exist
 * - [`Error::FuelTankNotFound`] if tank_id does not exist
 * - [`Error::NoPermission`] if caller is not ForceOrigin or fuel tank owner
 * - [`Error::InvalidRuleSet`] if `rule_set_id` does not exist
 * - [`Error::MissingRequiredRule`] if `rule_set_id` does not have the required role
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId: (MultiAddress | undefined)
    ruleSetId: number
    consumption: Consumption
}

/**
 * Destroy the fuel tank by scheduling the deletion for `on_finalize` to execute
 * Only callable by owner
 * The fuel tank must be frozen
 * Can only be destroyed if all accounts are removed
 * 
 * # Errors
 * 
 * - [`Error::FuelTankNotFound`] if tank_id does not exist
 * - [`Error::NoPermission`] if caller is not owner
 * - [`Error::DestroyUnfrozenTank`] if tank is not frozen
 * - [`Error::DestroyWithExistingAccounts`] if there are still accounts on the tank
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * Force creates a fuel tank
 * 
 * # Errors
 * 
 * - [`Error::FuelTankAlreadyExists`] if `tank_id` already exists
 */
export interface FuelTanksCall_force_create_fuel_tank {
    __kind: 'force_create_fuel_tank'
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}

/**
 * Sets the account storage for give tank_id and account
 */
export interface FuelTanksCall_force_batch_add_account {
    __kind: 'force_batch_add_account'
    owner: MultiAddress
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * Pause execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To pause the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is paused, else the entire pallet is paused.
 * 
 * # Errors
 * 
 * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
 * - [`Error::CannotPauseSelf`] if the pallet name is the same as the name of this pallet.
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * Resume execution of extrinsic(s)
 * 
 * The values of pallet_name and extrinsic_name are extracted from the `call` parameter.
 * Ex : To resume the multi_tokens pallet, the `call` parameter should be of the type
 * `pallet_multi_tokens::Call` If `pause_only_extrinsic` is true, then only the extrinsic
 * is resumed, else the entire pallet is resumed.
 * 
 * # Errors
 * 
 * - [`Error::CannotProcessInput`] if the pallet name or extrinsic name is faulty.
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MarketplaceCall = MarketplaceCall_create_listing | MarketplaceCall_cancel_listing | MarketplaceCall_fill_listing | MarketplaceCall_place_bid | MarketplaceCall_finalize_auction | MarketplaceCall_set_protocol_fee | MarketplaceCall_force_create_listing | MarketplaceCall_force_place_bid

/**
 * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a currency.
 * The id for the listing is generated by hashing the encoded bytes of the listing.
 * 
 * # Parameters
 * 
 * - `make_asset_id`: The id of the asset being sold
 * - `take_asset_id`: The id of the asset being requested
 * - `amount`: The number of units being sold
 * - `price`: The requested price for each unit. If it's an auction, this is the minimum
 *   bid
 * - `salt`: Can be used to differentiate listings
 * - `auction_data`: Including this makes the listing an auction
 * 
 * # Errors
 * 
 * - [`Error::InvalidAuctionStart`] if the start is less than the current block +
 *   `T::ListingActiveDelay`
 * - [`Error::NoCurrency`] Neither the make or take side is considered a currency
 * - [`Error::ListingForbidden`] if make or take side tokens are not allowed to be listed
 * - [`Error::CurrencyNotAllowedAsRoyalty`] if currency cannot be used as a royalty
 * - [`Error::LowBaseCurrencyBalance`] if base currency balance is too low
 * - [`Error::LowTokenBalance`] token balance is too low for reserve
 * - [`Error::ListingAlreadyExists`] if a listing with the same ID already exists
 */
export interface MarketplaceCall_create_listing {
    __kind: 'create_listing'
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Uint8Array
    auctionData: (AuctionData | undefined)
}

/**
 * Cancels the listing with `listing_id`. Only callable by the seller.
 * 
 * # Parameters
 * 
 * - `listing_id`: The ID of the listing to cancel
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
 * - [`Error::NoPermission`] if the listing seller is not the caller, `origin`
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: Uint8Array
}

/**
 * Fills a fixed price listing. This will execute immediately.
 * # Parameters
 * 
 * - `listing_id`: The id for the listing to buy from
 * - `amount`: The number of units purchased
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if the listing under `listing_id` does not exist
 * - [`Error::BuyerIsSeller`] if the buyer is the seller of the listing
 * - [`Error::ListingIsWrongType`] if the listing is not under auction
 * - [`Error::InvalidAmount`] if the amount that still needs to be filled is greater than
 *   `amount`
 * - [`Error::ListingNotActive`] if the listing has not passed the `ListingActiveDelay` yet
 * - [`Error::TakeValueUnderMinimum`] if the listings `take` value is under the minimum
 *   required
 * - [`Error::LowTokenBalance`] if the buyer does not have enough tokens for reserve
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: Uint8Array
    amount: bigint
}

/**
 * Places a bid on a listing. The listing must be an auction, and it must be currently
 * active.
 * 
 * # Parameters
 * 
 * - `listing_id`: The id for the listing to buy from
 * - `price`: The price for a single unit
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
 * - [`Error::BuyerIsSeller`] if the bidder is the seller of the listing
 * - [`Error::InactiveAuction`] if listing operates outside of specified start and end
 *   block
 * - [`Error::InvalidPrice`] if price is less than minimum_price for a bid
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: Uint8Array
    price: bigint
}

/**
 * Finalize the auction with id: `listing_id`. This will end the auction and transfer
 * funds. It fails if the auction is not over.
 * 
 * # Parameters
 * 
 * - `listing_id`: The ID for the listing to finalize
 * 
 * # Errors
 * 
 * - [`Error::ListingNotFound`] if listing under `listing_id` does not exist
 * - [`Error::ListingIsWrongType`] if listing is not an auction
 * - [`Error::AuctionNotOver`] if the auction has not finished yet
 * - [`Error::TakeValueUnderMinimum`] if the take value is less than the minimum required
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: Uint8Array
}

/**
 * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
 * 
 * #Parameters
 * 
 * - `protocol_fee`: Percentage of fee to set
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: number
}

/**
 * Force create a listing. This is only callable by the [`Config::ForceOrigin`].
 * 
 * # Parameters
 * 
 * Mostly the same as [`Self::create_listing`], but `deposit_backer` can be included to pay
 * a deposit if `seller` does not have enough.
 * 
 * # Errors
 * 
 * Same as [`Self::create_listing`], except `BadOrigin` if the origin is not
 * [`Config::ForceOrigin`]
 */
export interface MarketplaceCall_force_create_listing {
    __kind: 'force_create_listing'
    seller: MultiAddress
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    salt: Uint8Array
    auctionData: (AuctionData | undefined)
    depositBacker: (MultiAddress | undefined)
}

/**
 * Same as [create_listing](Self::place_bid), but allows specifying the `bidder` and can
 * place a bid in an inactive auction. Only callable by [`Config::ForceOrigin`]. If
 * `funds_backer` is `Some`, it will transfer balance if `bidder` does not have enough.
 */
export interface MarketplaceCall_force_place_bid {
    __kind: 'force_place_bid'
    bidder: MultiAddress
    listingId: Uint8Array
    price: bigint
    fundsBacker: (MultiAddress | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BeefyCall = BeefyCall_report_equivocation | BeefyCall_report_equivocation_unsigned

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 */
export interface BeefyCall_report_equivocation {
    __kind: 'report_equivocation'
    equivocationProof: Type_576
    keyOwnerProof: MembershipProof
}

/**
 * Report voter equivocation/misbehavior. This method will verify the
 * equivocation proof and validate the given key ownership proof
 * against the extracted offender. If both are valid, the offence
 * will be reported.
 * 
 * This extrinsic must be called unsigned and it is expected that only
 * block authors will call it (validated in `ValidateUnsigned`), as such
 * if the block author is defined it will be defined as the equivocation
 * reporter.
 */
export interface BeefyCall_report_equivocation_unsigned {
    __kind: 'report_equivocation_unsigned'
    equivocationProof: Type_576
    keyOwnerProof: MembershipProof
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * Anonymously schedule a task.
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel an anonymously scheduled task.
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * Schedule a named task.
 */
export interface SchedulerCall_schedule_named {
    __kind: 'schedule_named'
    id: Uint8Array
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Cancel a named scheduled task.
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * Anonymously schedule a task after a delay.
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Schedule a named task after a delay.
 */
export interface SchedulerCall_schedule_named_after {
    __kind: 'schedule_named_after'
    id: Uint8Array
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * Register a preimage on-chain.
 * 
 * If the preimage was previously requested, no fees or deposits are taken for providing
 * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * Clear an unrequested preimage from the runtime storage.
 * 
 * If `len` is provided, then it will be a much cheaper operation.
 * 
 * - `hash`: The hash of the preimage to be removed from the store.
 * - `len`: The length of the preimage of `hash`.
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * Request a preimage be uploaded to the chain without paying any fees or deposits.
 * 
 * If the preimage requests has already been provided on-chain, we unreserve any deposit
 * a user may have paid, and take the control of the preimage out of their hands.
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * Clear a previously made request for a preimage.
 * 
 * NOTE: THIS MUST NOT BE CALLED ON `hash` MORE TIMES THAN `request_preimage`.
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ConvictionVotingCall = ConvictionVotingCall_vote | ConvictionVotingCall_delegate | ConvictionVotingCall_undelegate | ConvictionVotingCall_unlock | ConvictionVotingCall_remove_vote | ConvictionVotingCall_remove_other_vote

/**
 * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `poll_index`: The index of the poll to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
export interface ConvictionVotingCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
}

/**
 * Delegate the voting power (with some given conviction) of the sending account for a
 * particular class of polls.
 * 
 * The balance delegated is locked for as long as it's delegated, and thereafter for the
 * time appropriate for the conviction's lock period.
 * 
 * The dispatch origin of this call must be _Signed_, and the signing account must either:
 *   - be delegating already; or
 *   - have no voting activity (if there is, then it will need to be removed/consolidated
 *     through `reap_vote` or `unvote`).
 * 
 * - `to`: The account whose voting the `target` account's voting power will follow.
 * - `class`: The class of polls to delegate. To delegate multiple classes, multiple calls
 *   to this function are required.
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_delegate {
    __kind: 'delegate'
    class: number
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Undelegate the voting power of the sending account for a particular class of polls.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued has passed.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * - `class`: The class of polls to remove the delegation from.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of polls the voter delegating to has
 *   voted on. Weight is initially charged as if maximum votes, but is refunded later.
 */
export interface ConvictionVotingCall_undelegate {
    __kind: 'undelegate'
    class: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface ConvictionVotingCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
}

/**
 * Remove a vote for a poll.
 * 
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 * 
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_vote {
    __kind: 'remove_vote'
    class: (number | undefined)
    index: number
}

/**
 * Remove a vote for a poll.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface ConvictionVotingCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ReferendaCall = ReferendaCall_submit | ReferendaCall_place_decision_deposit | ReferendaCall_refund_decision_deposit | ReferendaCall_cancel | ReferendaCall_kill | ReferendaCall_nudge_referendum | ReferendaCall_one_fewer_deciding | ReferendaCall_refund_submission_deposit | ReferendaCall_set_metadata

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface ReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface ReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface ReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface ReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface ReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface ReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface ReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 * 
 * Emits `SubmissionDepositRefunded`.
 */
export interface ReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 * 
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface ReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type WhitelistCall = WhitelistCall_whitelist_call | WhitelistCall_remove_whitelisted_call | WhitelistCall_dispatch_whitelisted_call | WhitelistCall_dispatch_whitelisted_call_with_preimage

export interface WhitelistCall_whitelist_call {
    __kind: 'whitelist_call'
    callHash: Uint8Array
}

export interface WhitelistCall_remove_whitelisted_call {
    __kind: 'remove_whitelisted_call'
    callHash: Uint8Array
}

export interface WhitelistCall_dispatch_whitelisted_call {
    __kind: 'dispatch_whitelisted_call'
    callHash: Uint8Array
    callEncodedLen: number
    callWeightWitness: Weight
}

export interface WhitelistCall_dispatch_whitelisted_call_with_preimage {
    __kind: 'dispatch_whitelisted_call_with_preimage'
    call: Call
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FellowshipCollectiveCall = FellowshipCollectiveCall_add_member | FellowshipCollectiveCall_promote_member | FellowshipCollectiveCall_demote_member | FellowshipCollectiveCall_remove_member | FellowshipCollectiveCall_vote | FellowshipCollectiveCall_cleanup_poll

/**
 * Introduce a new member.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of non-member which will become a member.
 * - `rank`: The rank to give the new member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Increment the rank of an existing member by one.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member.
 * 
 * Weight: `O(1)`
 */
export interface FellowshipCollectiveCall_promote_member {
    __kind: 'promote_member'
    who: MultiAddress
}

/**
 * Decrement the rank of an existing member by one. If the member is already at rank zero,
 * then they are removed entirely.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * 
 * Weight: `O(1)`, less if the member's index is highest in its rank.
 */
export interface FellowshipCollectiveCall_demote_member {
    __kind: 'demote_member'
    who: MultiAddress
}

/**
 * Remove the member entirely.
 * 
 * - `origin`: Must be the `AdminOrigin`.
 * - `who`: Account of existing member of rank greater than zero.
 * - `min_rank`: The rank of the member or greater.
 * 
 * Weight: `O(min_rank)`.
 */
export interface FellowshipCollectiveCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
    minRank: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * - `origin`: Must be `Signed` by a member account.
 * - `poll`: Index of a poll which is ongoing.
 * - `aye`: `true` if the vote is to approve the proposal, `false` otherwise.
 * 
 * Transaction fees are be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * 
 * Weight: `O(1)`, less if there was no previous vote on the poll by the member.
 */
export interface FellowshipCollectiveCall_vote {
    __kind: 'vote'
    poll: number
    aye: boolean
}

/**
 * Remove votes from the given poll. It must have ended.
 * 
 * - `origin`: Must be `Signed` by any account.
 * - `poll_index`: Index of a poll which is completed and for which votes continue to
 *   exist.
 * - `max`: Maximum number of vote items from remove in this call.
 * 
 * Transaction fees are waived if the operation is successful.
 * 
 * Weight `O(max)` (less if there are fewer items to remove than `max`).
 */
export interface FellowshipCollectiveCall_cleanup_poll {
    __kind: 'cleanup_poll'
    pollIndex: number
    max: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FellowshipReferendaCall = FellowshipReferendaCall_submit | FellowshipReferendaCall_place_decision_deposit | FellowshipReferendaCall_refund_decision_deposit | FellowshipReferendaCall_cancel | FellowshipReferendaCall_kill | FellowshipReferendaCall_nudge_referendum | FellowshipReferendaCall_one_fewer_deciding | FellowshipReferendaCall_refund_submission_deposit | FellowshipReferendaCall_set_metadata

/**
 * Propose a referendum on a privileged action.
 * 
 * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
 *   available.
 * - `proposal_origin`: The origin from which the proposal should be executed.
 * - `proposal`: The proposal.
 * - `enactment_moment`: The moment that the proposal should be enacted.
 * 
 * Emits `Submitted`.
 */
export interface FellowshipReferendaCall_submit {
    __kind: 'submit'
    proposalOrigin: OriginCaller
    proposal: Bounded
    enactmentMoment: DispatchTime
}

/**
 * Post the Decision Deposit for a referendum.
 * 
 * - `origin`: must be `Signed` and the account must have funds available for the
 *   referendum's track's Decision Deposit.
 * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
 *   posted.
 * 
 * Emits `DecisionDepositPlaced`.
 */
export interface FellowshipReferendaCall_place_decision_deposit {
    __kind: 'place_decision_deposit'
    index: number
}

/**
 * Refund the Decision Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
 *   refunded.
 * 
 * Emits `DecisionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_decision_deposit {
    __kind: 'refund_decision_deposit'
    index: number
}

/**
 * Cancel an ongoing referendum.
 * 
 * - `origin`: must be the `CancelOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Cancelled`.
 */
export interface FellowshipReferendaCall_cancel {
    __kind: 'cancel'
    index: number
}

/**
 * Cancel an ongoing referendum and slash the deposits.
 * 
 * - `origin`: must be the `KillOrigin`.
 * - `index`: The index of the referendum to be cancelled.
 * 
 * Emits `Killed` and `DepositSlashed`.
 */
export interface FellowshipReferendaCall_kill {
    __kind: 'kill'
    index: number
}

/**
 * Advance a referendum onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `index`: the referendum to be advanced.
 */
export interface FellowshipReferendaCall_nudge_referendum {
    __kind: 'nudge_referendum'
    index: number
}

/**
 * Advance a track onto its next logical state. Only used internally.
 * 
 * - `origin`: must be `Root`.
 * - `track`: the track to be advanced.
 * 
 * Action item for when there is now one fewer referendum in the deciding phase and the
 * `DecidingCount` is not yet updated. This means that we should either:
 * - begin deciding another referendum (and leave `DecidingCount` alone); or
 * - decrement `DecidingCount`.
 */
export interface FellowshipReferendaCall_one_fewer_deciding {
    __kind: 'one_fewer_deciding'
    track: number
}

/**
 * Refund the Submission Deposit for a closed referendum back to the depositor.
 * 
 * - `origin`: must be `Signed` or `Root`.
 * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
 *   refunded.
 * 
 * Emits `SubmissionDepositRefunded`.
 */
export interface FellowshipReferendaCall_refund_submission_deposit {
    __kind: 'refund_submission_deposit'
    index: number
}

/**
 * Set or clear metadata of a referendum.
 * 
 * Parameters:
 * - `origin`: Must be `Signed` by a creator of a referendum or by anyone to clear a
 *   metadata of a finished referendum.
 * - `index`:  The index of a referendum to set or clear metadata for.
 * - `maybe_hash`: The hash of an on-chain stored preimage. `None` to clear a metadata.
 */
export interface FellowshipReferendaCall_set_metadata {
    __kind: 'set_metadata'
    index: number
    maybeHash: (Uint8Array | undefined)
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * Add a registrar to the system.
 * 
 * The dispatch origin for this call must be `T::RegistrarOrigin`.
 * 
 * - `account`: the account of the registrar.
 * 
 * Emits `RegistrarAdded` if successful.
 * 
 * ## Complexity
 * - `O(R)` where `R` registrar-count (governance-bounded and code-bounded).
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * Set an account's identity information and reserve the appropriate deposit.
 * 
 * If the account already has identity information, the deposit is taken as part payment
 * for the new deposit.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * - `info`: The identity information.
 * 
 * Emits `IdentitySet` if successful.
 * 
 * ## Complexity
 * - `O(X + X' + R)`
 *   - where `X` additional-field-count (deposit-bounded and code-bounded)
 *   - where `R` judgements-count (registrar-count-bounded)
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * Set the sub-accounts of the sender.
 * 
 * Payment: Any aggregate balance reserved by previous `set_subs` calls will be returned
 * and an amount `SubAccountDeposit` will be reserved for each item in `subs`.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * - `subs`: The identity's (new) sub-accounts.
 * 
 * ## Complexity
 * - `O(P + S)`
 *   - where `P` old-subs-count (hard- and deposit-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * Clear an account's identity info and all sub-accounts and return all deposits.
 * 
 * Payment: All reserved balances on the account are returned.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * identity.
 * 
 * Emits `IdentityCleared` if successful.
 * 
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * Request a judgement from a registrar.
 * 
 * Payment: At most `max_fee` will be reserved for payment to the registrar if judgement
 * given.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is requested.
 * - `max_fee`: The maximum fee that may be paid. This should just be auto-populated as:
 * 
 * ```nocompile
 * Self::registrars().get(reg_index).unwrap().fee
 * ```
 * 
 * Emits `JudgementRequested` if successful.
 * 
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * Cancel a previous request.
 * 
 * Payment: A previously reserved deposit is returned on success.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a
 * registered identity.
 * 
 * - `reg_index`: The index of the registrar whose judgement is no longer requested.
 * 
 * Emits `JudgementUnrequested` if successful.
 * 
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * Set the fee required for a judgement to be requested from a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fee`: the new fee.
 * 
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * Change the account associated with a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `new`: the new account ID.
 * 
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * Set the field information for a registrar.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `index`.
 * 
 * - `index`: the index of the registrar whose fee is to be set.
 * - `fields`: the fields that the registrar concerns themselves with.
 * 
 * ## Complexity
 * - `O(R)`.
 *   - where `R` registrar-count (governance-bounded).
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * Provide a judgement for an account's identity.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must be the account
 * of the registrar whose index is `reg_index`.
 * 
 * - `reg_index`: the index of the registrar whose judgement is being made.
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * - `judgement`: the judgement of the registrar of index `reg_index` about `target`.
 * - `identity`: The hash of the [`IdentityInfo`] for that the judgement is provided.
 * 
 * Emits `JudgementGiven` if successful.
 * 
 * ## Complexity
 * - `O(R + X)`.
 *   - where `R` registrar-count (governance-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * Remove an account's identity and sub-account information and slash the deposits.
 * 
 * Payment: Reserved balances from `set_subs` and `set_identity` are slashed and handled by
 * `Slash`. Verification request deposits are not returned; they should be cancelled
 * manually using `cancel_request`.
 * 
 * The dispatch origin for this call must match `T::ForceOrigin`.
 * 
 * - `target`: the account whose identity the judgement is upon. This must be an account
 *   with a registered identity.
 * 
 * Emits `IdentityKilled` if successful.
 * 
 * ## Complexity
 * - `O(R + S + X)`
 *   - where `R` registrar-count (governance-bounded).
 *   - where `S` subs-count (hard- and deposit-bounded).
 *   - where `X` additional-field-count (deposit-bounded and code-bounded).
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * Add the given account to the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Alter the associated name of the given sub-account.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * Remove the given account from the sender's subs.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender.
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * sub identity of `sub`.
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * Remove the sender as a sub-account.
 * 
 * Payment: Balance reserved by a previous `set_subs` call for one sub will be repatriated
 * to the sender (*not* the original depositor).
 * 
 * The dispatch origin for this call must be _Signed_ and the sender must have a registered
 * super-identity.
 * 
 * NOTE: This should not normally be used, but is provided in the case that the non-
 * controller of an account is maliciously registered as a sub-account.
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VoteManagerCall = VoteManagerCall_vote | VoteManagerCall_remove_vote | VoteManagerCall_remove_other_vote | VoteManagerCall_unlock

/**
 * Vote in a poll. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `poll_index`: The index of the poll to vote for.
 * - `vote`: The vote configuration.
 * 
 * Weight: `O(R)` where R is the number of polls the voter has voted on.
 */
export interface VoteManagerCall_vote {
    __kind: 'vote'
    pollIndex: number
    vote: AccountVote
    currency: VoteCurrency
}

/**
 * Remove a vote for a poll.
 * 
 * If:
 * - the poll was cancelled, or
 * - the poll is ongoing, or
 * - the poll has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the poll has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for poll `index`.
 * 
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: Optional parameter, if given it indicates the class of the poll. For polls
 *   which have finished or are cancelled, this must be `Some`.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface VoteManagerCall_remove_vote {
    __kind: 'remove_vote'
    class: (number | undefined)
    index: number
}

/**
 * Remove a vote for a poll.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the poll was cancelled, because the voter lost the poll or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for poll
 *   `index`.
 * - `index`: The index of poll of the vote to be removed.
 * - `class`: The class of the poll.
 * 
 * Weight: `O(R + log R)` where R is the number of polls that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface VoteManagerCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    class: number
    index: number
}

/**
 * Remove the lock caused by prior voting/delegating which has expired within a particular
 * class.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `class`: The class of polls to unlock.
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface VoteManagerCall_unlock {
    __kind: 'unlock'
    class: number
    target: MultiAddress
    index: number
}

export interface UserAccountManagement {
    tankReservesExistentialDeposit: boolean
    tankReservesAccountCreationDeposit: boolean
}

export type AccountRuleDescriptor = AccountRuleDescriptor_WhitelistedCallers | AccountRuleDescriptor_RequireToken

export interface AccountRuleDescriptor_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface AccountRuleDescriptor_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface TankFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
}

export type SufficiencyParam = SufficiencyParam_Insufficient | SufficiencyParam_Sufficient

export interface SufficiencyParam_Insufficient {
    __kind: 'Insufficient'
    unitPrice: (bigint | undefined)
}

export interface SufficiencyParam_Sufficient {
    __kind: 'Sufficient'
    minimumBalance: bigint
}

export type TokenCap = TokenCap_SingleMint | TokenCap_Supply | TokenCap_CollapsingSupply

export interface TokenCap_SingleMint {
    __kind: 'SingleMint'
}

export interface TokenCap_Supply {
    __kind: 'Supply'
    value: bigint
}

export interface TokenCap_CollapsingSupply {
    __kind: 'CollapsingSupply'
    value: bigint
}

export type TokenMarketBehavior = TokenMarketBehavior_HasRoyalty | TokenMarketBehavior_IsCurrency

export interface TokenMarketBehavior_HasRoyalty {
    __kind: 'HasRoyalty'
    value: DefaultRoyalty
}

export interface TokenMarketBehavior_IsCurrency {
    __kind: 'IsCurrency'
}

export type FreezeState = FreezeState_Permanent | FreezeState_Temporary | FreezeState_Never

export interface FreezeState_Permanent {
    __kind: 'Permanent'
}

export interface FreezeState_Temporary {
    __kind: 'Temporary'
}

export interface FreezeState_Never {
    __kind: 'Never'
}

export interface AttributeKeyValuePair {
    key: Uint8Array
    value: Uint8Array
}

export interface ForeignTokenCreationParams {
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V3MultiLocation | undefined)
    unitsPerSecond: (bigint | undefined)
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Origin = Origin_Parachain

export interface Origin_Parachain {
    __kind: 'Parachain'
    value: number
}

export type Type_420 = Type_420_Xcm | Type_420_Response

export interface Type_420_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Type_420_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Type_421 = Type_421_StakingAdmin | Type_421_TreasuryAdmin | Type_421_FellowshipAdmin | Type_421_GeneralAdmin | Type_421_AuctionAdmin | Type_421_LeaseAdmin | Type_421_MultiTokensAdmin | Type_421_FuelTanksAdmin | Type_421_ClaimsAdmin | Type_421_ExtrinsicPauseAdmin | Type_421_PreimageAdmin | Type_421_WhitelistAdmin | Type_421_ParachainsAdmin | Type_421_ReferendumCanceller | Type_421_ReferendumKiller | Type_421_SmallTipper | Type_421_BigTipper | Type_421_SmallSpender | Type_421_MediumSpender | Type_421_BigSpender | Type_421_WhitelistedCaller | Type_421_FellowshipInitiates | Type_421_Fellows | Type_421_FellowshipExperts | Type_421_FellowshipMasters | Type_421_Fellowship1Dan | Type_421_Fellowship2Dan | Type_421_Fellowship3Dan | Type_421_Fellowship4Dan | Type_421_Fellowship5Dan | Type_421_Fellowship6Dan | Type_421_Fellowship7Dan | Type_421_Fellowship8Dan | Type_421_Fellowship9Dan

export interface Type_421_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Type_421_TreasuryAdmin {
    __kind: 'TreasuryAdmin'
}

export interface Type_421_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Type_421_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Type_421_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Type_421_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Type_421_MultiTokensAdmin {
    __kind: 'MultiTokensAdmin'
}

export interface Type_421_FuelTanksAdmin {
    __kind: 'FuelTanksAdmin'
}

export interface Type_421_ClaimsAdmin {
    __kind: 'ClaimsAdmin'
}

export interface Type_421_ExtrinsicPauseAdmin {
    __kind: 'ExtrinsicPauseAdmin'
}

export interface Type_421_PreimageAdmin {
    __kind: 'PreimageAdmin'
}

export interface Type_421_WhitelistAdmin {
    __kind: 'WhitelistAdmin'
}

export interface Type_421_ParachainsAdmin {
    __kind: 'ParachainsAdmin'
}

export interface Type_421_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Type_421_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Type_421_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Type_421_BigTipper {
    __kind: 'BigTipper'
}

export interface Type_421_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Type_421_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Type_421_BigSpender {
    __kind: 'BigSpender'
}

export interface Type_421_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Type_421_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Type_421_Fellows {
    __kind: 'Fellows'
}

export interface Type_421_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Type_421_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Type_421_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Type_421_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Type_421_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Type_421_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Type_421_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Type_421_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Type_421_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Type_421_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Type_421_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export type Void = never

export type PoolState = PoolState_Open | PoolState_Destroying

export interface PoolState_Open {
    __kind: 'Open'
}

export interface PoolState_Destroying {
    __kind: 'Destroying'
}

export interface Commission {
    current: (number | undefined)
    max: (number | undefined)
    changeRate: (CommissionChangeRate | undefined)
    throttleFrom: (number | undefined)
}

export interface BonusCycle {
    previousStart: (number | undefined)
    start: number
    end: number
    pendingDuration: (number | undefined)
}

export type Type_653 = Type_653_ApplyExtrinsic | Type_653_Finalization | Type_653_Initialization

export interface Type_653_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Type_653_Finalization {
    __kind: 'Finalization'
}

export interface Type_653_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_Balances | Event_Offences | Event_ElectionProviderMultiPhase | Event_Staking | Event_Session | Event_Grandpa | Event_Treasury | Event_TransactionPayment | Event_Sudo | Event_ImOnline | Event_VoterList | Event_NominationPools | Event_StakeExchange | Event_Utility | Event_Multisig | Event_ParaInclusion | Event_Paras | Event_Hrmp | Event_ParasDisputes | Event_Registrar | Event_Slots | Event_Auctions | Event_Crowdloan | Event_XcmPallet | Event_MessageQueue | Event_AssignedSlots | Event_ValidatorManager | Event_MultiTokens | Event_FuelTanks | Event_ExtrinsicPause | Event_Marketplace | Event_Scheduler | Event_Preimage | Event_ConvictionVoting | Event_Referenda | Event_Whitelist | Event_FellowshipCollective | Event_FellowshipReferenda | Event_Identity | Event_VoteManager

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_Offences {
    __kind: 'Offences'
    value: OffencesEvent
}

export interface Event_ElectionProviderMultiPhase {
    __kind: 'ElectionProviderMultiPhase'
    value: ElectionProviderMultiPhaseEvent
}

export interface Event_Staking {
    __kind: 'Staking'
    value: StakingEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_Grandpa {
    __kind: 'Grandpa'
    value: GrandpaEvent
}

export interface Event_Treasury {
    __kind: 'Treasury'
    value: TreasuryEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_ImOnline {
    __kind: 'ImOnline'
    value: ImOnlineEvent
}

export interface Event_VoterList {
    __kind: 'VoterList'
    value: VoterListEvent
}

export interface Event_NominationPools {
    __kind: 'NominationPools'
    value: NominationPoolsEvent
}

export interface Event_StakeExchange {
    __kind: 'StakeExchange'
    value: StakeExchangeEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_ParaInclusion {
    __kind: 'ParaInclusion'
    value: ParaInclusionEvent
}

export interface Event_Paras {
    __kind: 'Paras'
    value: ParasEvent
}

export interface Event_Hrmp {
    __kind: 'Hrmp'
    value: HrmpEvent
}

export interface Event_ParasDisputes {
    __kind: 'ParasDisputes'
    value: ParasDisputesEvent
}

export interface Event_Registrar {
    __kind: 'Registrar'
    value: RegistrarEvent
}

export interface Event_Slots {
    __kind: 'Slots'
    value: SlotsEvent
}

export interface Event_Auctions {
    __kind: 'Auctions'
    value: AuctionsEvent
}

export interface Event_Crowdloan {
    __kind: 'Crowdloan'
    value: CrowdloanEvent
}

export interface Event_XcmPallet {
    __kind: 'XcmPallet'
    value: XcmPalletEvent
}

export interface Event_MessageQueue {
    __kind: 'MessageQueue'
    value: MessageQueueEvent
}

export interface Event_AssignedSlots {
    __kind: 'AssignedSlots'
    value: AssignedSlotsEvent
}

export interface Event_ValidatorManager {
    __kind: 'ValidatorManager'
    value: ValidatorManagerEvent
}

export interface Event_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensEvent
}

export interface Event_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksEvent
}

export interface Event_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseEvent
}

export interface Event_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_ConvictionVoting {
    __kind: 'ConvictionVoting'
    value: ConvictionVotingEvent
}

export interface Event_Referenda {
    __kind: 'Referenda'
    value: ReferendaEvent
}

export interface Event_Whitelist {
    __kind: 'Whitelist'
    value: WhitelistEvent
}

export interface Event_FellowshipCollective {
    __kind: 'FellowshipCollective'
    value: FellowshipCollectiveEvent
}

export interface Event_FellowshipReferenda {
    __kind: 'FellowshipReferenda'
    value: FellowshipReferendaEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface Event_VoteManager {
    __kind: 'VoteManager'
    value: VoteManagerEvent
}

export interface EquivocationProof {
    offender: Uint8Array
    slot: bigint
    firstHeader: Header
    secondHeader: Header
}

export interface MembershipProof {
    session: number
    trieNodes: Uint8Array[]
    validatorCount: number
}

export type NextConfigDescriptor = NextConfigDescriptor_V1

export interface NextConfigDescriptor_V1 {
    __kind: 'V1'
    c: [bigint, bigint]
    allowedSlots: AllowedSlots
}

export interface RawSolution {
    solution: NposSolution16
    score: ElectionScore
    round: number
}

export interface SolutionOrSnapshotSize {
    voters: number
    targets: number
}

export interface ElectionScore {
    minimalStake: bigint
    sumStake: bigint
    sumStakeSquared: bigint
}

export interface Support {
    total: bigint
    voters: [Uint8Array, bigint][]
}

export type RewardDestination = RewardDestination_Staked | RewardDestination_Stash | RewardDestination_Controller | RewardDestination_Account | RewardDestination_None

export interface RewardDestination_Staked {
    __kind: 'Staked'
}

export interface RewardDestination_Stash {
    __kind: 'Stash'
}

export interface RewardDestination_Controller {
    __kind: 'Controller'
}

export interface RewardDestination_Account {
    __kind: 'Account'
    value: Uint8Array
}

export interface RewardDestination_None {
    __kind: 'None'
}

export interface ValidatorPrefs {
    commission: number
    blocked: boolean
}

export type ConfigOp = ConfigOp_Noop | ConfigOp_Set | ConfigOp_Remove

export interface ConfigOp_Noop {
    __kind: 'Noop'
}

export interface ConfigOp_Set {
    __kind: 'Set'
    value: bigint
}

export interface ConfigOp_Remove {
    __kind: 'Remove'
}

export type Type_379 = Type_379_Noop | Type_379_Set | Type_379_Remove

export interface Type_379_Noop {
    __kind: 'Noop'
}

export interface Type_379_Set {
    __kind: 'Set'
    value: number
}

export interface Type_379_Remove {
    __kind: 'Remove'
}

export type Type_380 = Type_380_Noop | Type_380_Set | Type_380_Remove

export interface Type_380_Noop {
    __kind: 'Noop'
}

export interface Type_380_Set {
    __kind: 'Set'
    value: number
}

export interface Type_380_Remove {
    __kind: 'Remove'
}

export type Type_381 = Type_381_Noop | Type_381_Set | Type_381_Remove

export interface Type_381_Noop {
    __kind: 'Noop'
}

export interface Type_381_Set {
    __kind: 'Set'
    value: number
}

export interface Type_381_Remove {
    __kind: 'Remove'
}

export interface SessionKeys {
    grandpa: Uint8Array
    babe: Uint8Array
    imOnline: Uint8Array
    paraValidator: Uint8Array
    paraAssignment: Uint8Array
    authorityDiscovery: Uint8Array
}

export interface Type_388 {
    setId: bigint
    equivocation: Equivocation
}

export interface Heartbeat {
    blockNumber: number
    networkState: OpaqueNetworkState
    sessionIndex: number
    authorityIndex: number
    validatorsLen: number
}

export type BondValue = BondValue_Amount | BondValue_Fill

export interface BondValue_Amount {
    __kind: 'Amount'
    value: bigint
}

export interface BondValue_Fill {
    __kind: 'Fill'
}

export type Type_411 = Type_411_Noop | Type_411_Set | Type_411_Remove

export interface Type_411_Noop {
    __kind: 'Noop'
}

export interface Type_411_Set {
    __kind: 'Set'
    value: number
}

export interface Type_411_Remove {
    __kind: 'Remove'
}

export interface StakingInfo {
    annualInflationRate: number
    collatorPayoutCut: number
}

export interface LiquidityAccountConfig {
    tokenFilter: TokenFilter
}

export interface AsyncBackingParams {
    maxCandidateDepth: number
    allowedAncestryLen: number
}

export type V4ExecutorParam = V4ExecutorParam_MaxMemoryPages | V4ExecutorParam_StackLogicalMax | V4ExecutorParam_StackNativeMax | V4ExecutorParam_PrecheckingMaxMemory | V4ExecutorParam_PvfPrepTimeout | V4ExecutorParam_PvfExecTimeout | V4ExecutorParam_WasmExtBulkMemory

export interface V4ExecutorParam_MaxMemoryPages {
    __kind: 'MaxMemoryPages'
    value: number
}

export interface V4ExecutorParam_StackLogicalMax {
    __kind: 'StackLogicalMax'
    value: number
}

export interface V4ExecutorParam_StackNativeMax {
    __kind: 'StackNativeMax'
    value: number
}

export interface V4ExecutorParam_PrecheckingMaxMemory {
    __kind: 'PrecheckingMaxMemory'
    value: bigint
}

export interface V4ExecutorParam_PvfPrepTimeout {
    __kind: 'PvfPrepTimeout'
    value: [V4PvfPrepTimeoutKind, bigint]
}

export interface V4ExecutorParam_PvfExecTimeout {
    __kind: 'PvfExecTimeout'
    value: [V4PvfExecTimeoutKind, bigint]
}

export interface V4ExecutorParam_WasmExtBulkMemory {
    __kind: 'WasmExtBulkMemory'
}

export interface V4InherentData {
    bitfields: V4UncheckedSigned[]
    backedCandidates: V4BackedCandidate[]
    disputes: V4DisputeStatementSet[]
    parentHeader: Header
}

export interface V4PvfCheckStatement {
    accept: boolean
    subject: Uint8Array
    sessionIndex: number
    validatorIndex: number
}

export interface HrmpChannelId {
    sender: number
    recipient: number
}

export interface DisputeProof {
    timeSlot: DisputesTimeSlot
    kind: SlashingOffenceKind
    validatorIndex: number
    validatorId: Uint8Array
}

export type MultiSigner = MultiSigner_Ed25519 | MultiSigner_Sr25519 | MultiSigner_Ecdsa

export interface MultiSigner_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSigner_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSigner_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type MultiSignature = MultiSignature_Ed25519 | MultiSignature_Sr25519 | MultiSignature_Ecdsa

export interface MultiSignature_Ed25519 {
    __kind: 'Ed25519'
    value: Uint8Array
}

export interface MultiSignature_Sr25519 {
    __kind: 'Sr25519'
    value: Uint8Array
}

export interface MultiSignature_Ecdsa {
    __kind: 'Ecdsa'
    value: Uint8Array
}

export type VersionedMultiLocation = VersionedMultiLocation_V2 | VersionedMultiLocation_V3

export interface VersionedMultiLocation_V2 {
    __kind: 'V2'
    value: V2MultiLocation
}

export interface VersionedMultiLocation_V3 {
    __kind: 'V3'
    value: V3MultiLocation
}

export type VersionedXcm = VersionedXcm_V2 | VersionedXcm_V3

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface VersionedXcm_V3 {
    __kind: 'V3'
    value: V3Instruction[]
}

export type VersionedMultiAssets = VersionedMultiAssets_V2 | VersionedMultiAssets_V3

export interface VersionedMultiAssets_V2 {
    __kind: 'V2'
    value: V2MultiAsset[]
}

export interface VersionedMultiAssets_V3 {
    __kind: 'V3'
    value: V3MultiAsset[]
}

export type Type_497 = Type_497_V2 | Type_497_V3

export interface Type_497_V2 {
    __kind: 'V2'
    value: Type_500[]
}

export interface Type_497_V3 {
    __kind: 'V3'
    value: Type_504[]
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export type AggregateMessageOrigin = AggregateMessageOrigin_Ump

export interface AggregateMessageOrigin_Ump {
    __kind: 'Ump'
    value: UmpQueueId
}

export interface ParaGenesisArgs {
    genesisHead: Uint8Array
    validationCode: Uint8Array
    paraKind: boolean
}

export type SlotLeasePeriodStart = SlotLeasePeriodStart_Current | SlotLeasePeriodStart_Next

export interface SlotLeasePeriodStart_Current {
    __kind: 'Current'
}

export interface SlotLeasePeriodStart_Next {
    __kind: 'Next'
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface DefaultCollectionMutation {
    owner: (Uint8Array | undefined)
    royalty: Type_183
    explicitRoyaltyCurrencies: (AssetId[] | undefined)
}

export interface DefaultTokenMutation {
    behavior: Type_196
    listingForbidden: Type_199
    metadata: Type_200
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    sufficiency: SufficiencyParam
    cap: (TokenCap | undefined)
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    freezeState: (FreezeState | undefined)
    attributes: AttributeKeyValuePair[]
    foreignParams: (ForeignTokenCreationParams | undefined)
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice: (bigint | undefined)
}

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
    removeTokenStorage: boolean
}

export type DefaultTransferParams = DefaultTransferParams_Simple | DefaultTransferParams_Operator

export interface DefaultTransferParams_Simple {
    __kind: 'Simple'
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
}

export interface DefaultTransferParams_Operator {
    __kind: 'Operator'
    tokenId: bigint
    source: Uint8Array
    amount: bigint
    keepAlive: boolean
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export interface Recipient {
    accountId: Uint8Array
    params: DefaultTransferParams
}

export interface Type_532 {
    accountId: Uint8Array
    params: DefaultMintParams
}

export interface Collection {
    owner: Uint8Array
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
}

export interface Token {
    supply: bigint
    cap: (TokenCap | undefined)
    freezeState: (FreezeState | undefined)
    minimumBalance: bigint
    sufficiency: Sufficiency
    mintDeposit: bigint
    attributeCount: number
    marketBehavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
}

export interface Attribute {
    value: Uint8Array
    deposit: bigint
}

export interface CollectionAccount {
    isFrozen: boolean
    approvals: [Uint8Array, (number | undefined)][]
    accountCount: number
}

export interface TokenAccount {
    balance: bigint
    reservedBalance: bigint
    lockedBalance: bigint
    namedReserves: [Uint8Array, bigint][]
    locks: [Uint8Array, bigint][]
    approvals: [Uint8Array, Approval][]
    isFrozen: boolean
}

export interface DefaultTankMutation {
    userAccountManagement: Type_257
    providesDeposit: (boolean | undefined)
    accountRules: (AccountRuleDescriptor[] | undefined)
}

export type DispatchRuleKind = DispatchRuleKind_WhitelistedCallers | DispatchRuleKind_WhitelistedCollections | DispatchRuleKind_MaxFuelBurnPerTransaction | DispatchRuleKind_UserFuelBudget | DispatchRuleKind_TankFuelBudget | DispatchRuleKind_RequireToken | DispatchRuleKind_PermittedCalls | DispatchRuleKind_PermittedExtrinsics | DispatchRuleKind_WhitelistedPallets

export interface DispatchRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export interface DispatchRuleKind_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
}

export interface DispatchRuleKind_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
}

export interface DispatchRuleKind_UserFuelBudget {
    __kind: 'UserFuelBudget'
}

export interface DispatchRuleKind_TankFuelBudget {
    __kind: 'TankFuelBudget'
}

export interface DispatchRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export interface DispatchRuleKind_PermittedCalls {
    __kind: 'PermittedCalls'
}

export interface DispatchRuleKind_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
}

export interface DispatchRuleKind_WhitelistedPallets {
    __kind: 'WhitelistedPallets'
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock: (number | undefined)
}

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export interface Type_576 {
    first: VoteMessage
    second: VoteMessage
}

export type AccountVote = AccountVote_Standard | AccountVote_Split | AccountVote_SplitAbstain

export interface AccountVote_Standard {
    __kind: 'Standard'
    vote: number
    balance: bigint
}

export interface AccountVote_Split {
    __kind: 'Split'
    aye: bigint
    nay: bigint
}

export interface AccountVote_SplitAbstain {
    __kind: 'SplitAbstain'
    aye: bigint
    nay: bigint
    abstain: bigint
}

export type Conviction = Conviction_None | Conviction_Locked1x | Conviction_Locked2x | Conviction_Locked3x | Conviction_Locked4x | Conviction_Locked5x | Conviction_Locked6x

export interface Conviction_None {
    __kind: 'None'
}

export interface Conviction_Locked1x {
    __kind: 'Locked1x'
}

export interface Conviction_Locked2x {
    __kind: 'Locked2x'
}

export interface Conviction_Locked3x {
    __kind: 'Locked3x'
}

export interface Conviction_Locked4x {
    __kind: 'Locked4x'
}

export interface Conviction_Locked5x {
    __kind: 'Locked5x'
}

export interface Conviction_Locked6x {
    __kind: 'Locked6x'
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export interface IdentityInfo {
    additional: [Data, Data][]
    display: Data
    legal: Data
    web: Data
    riot: Data
    email: Data
    pgpFingerprint: (Uint8Array | undefined)
    image: Data
    twitter: Data
}

export type Data = Data_None | Data_Raw0 | Data_Raw1 | Data_Raw2 | Data_Raw3 | Data_Raw4 | Data_Raw5 | Data_Raw6 | Data_Raw7 | Data_Raw8 | Data_Raw9 | Data_Raw10 | Data_Raw11 | Data_Raw12 | Data_Raw13 | Data_Raw14 | Data_Raw15 | Data_Raw16 | Data_Raw17 | Data_Raw18 | Data_Raw19 | Data_Raw20 | Data_Raw21 | Data_Raw22 | Data_Raw23 | Data_Raw24 | Data_Raw25 | Data_Raw26 | Data_Raw27 | Data_Raw28 | Data_Raw29 | Data_Raw30 | Data_Raw31 | Data_Raw32 | Data_BlakeTwo256 | Data_Sha256 | Data_Keccak256 | Data_ShaThree256

export interface Data_None {
    __kind: 'None'
}

export interface Data_Raw0 {
    __kind: 'Raw0'
    value: Uint8Array
}

export interface Data_Raw1 {
    __kind: 'Raw1'
    value: Uint8Array
}

export interface Data_Raw2 {
    __kind: 'Raw2'
    value: Uint8Array
}

export interface Data_Raw3 {
    __kind: 'Raw3'
    value: Uint8Array
}

export interface Data_Raw4 {
    __kind: 'Raw4'
    value: Uint8Array
}

export interface Data_Raw5 {
    __kind: 'Raw5'
    value: Uint8Array
}

export interface Data_Raw6 {
    __kind: 'Raw6'
    value: Uint8Array
}

export interface Data_Raw7 {
    __kind: 'Raw7'
    value: Uint8Array
}

export interface Data_Raw8 {
    __kind: 'Raw8'
    value: Uint8Array
}

export interface Data_Raw9 {
    __kind: 'Raw9'
    value: Uint8Array
}

export interface Data_Raw10 {
    __kind: 'Raw10'
    value: Uint8Array
}

export interface Data_Raw11 {
    __kind: 'Raw11'
    value: Uint8Array
}

export interface Data_Raw12 {
    __kind: 'Raw12'
    value: Uint8Array
}

export interface Data_Raw13 {
    __kind: 'Raw13'
    value: Uint8Array
}

export interface Data_Raw14 {
    __kind: 'Raw14'
    value: Uint8Array
}

export interface Data_Raw15 {
    __kind: 'Raw15'
    value: Uint8Array
}

export interface Data_Raw16 {
    __kind: 'Raw16'
    value: Uint8Array
}

export interface Data_Raw17 {
    __kind: 'Raw17'
    value: Uint8Array
}

export interface Data_Raw18 {
    __kind: 'Raw18'
    value: Uint8Array
}

export interface Data_Raw19 {
    __kind: 'Raw19'
    value: Uint8Array
}

export interface Data_Raw20 {
    __kind: 'Raw20'
    value: Uint8Array
}

export interface Data_Raw21 {
    __kind: 'Raw21'
    value: Uint8Array
}

export interface Data_Raw22 {
    __kind: 'Raw22'
    value: Uint8Array
}

export interface Data_Raw23 {
    __kind: 'Raw23'
    value: Uint8Array
}

export interface Data_Raw24 {
    __kind: 'Raw24'
    value: Uint8Array
}

export interface Data_Raw25 {
    __kind: 'Raw25'
    value: Uint8Array
}

export interface Data_Raw26 {
    __kind: 'Raw26'
    value: Uint8Array
}

export interface Data_Raw27 {
    __kind: 'Raw27'
    value: Uint8Array
}

export interface Data_Raw28 {
    __kind: 'Raw28'
    value: Uint8Array
}

export interface Data_Raw29 {
    __kind: 'Raw29'
    value: Uint8Array
}

export interface Data_Raw30 {
    __kind: 'Raw30'
    value: Uint8Array
}

export interface Data_Raw31 {
    __kind: 'Raw31'
    value: Uint8Array
}

export interface Data_Raw32 {
    __kind: 'Raw32'
    value: Uint8Array
}

export interface Data_BlakeTwo256 {
    __kind: 'BlakeTwo256'
    value: Uint8Array
}

export interface Data_Sha256 {
    __kind: 'Sha256'
    value: Uint8Array
}

export interface Data_Keccak256 {
    __kind: 'Keccak256'
    value: Uint8Array
}

export interface Data_ShaThree256 {
    __kind: 'ShaThree256'
    value: Uint8Array
}

export type Judgement = Judgement_Unknown | Judgement_FeePaid | Judgement_Reasonable | Judgement_KnownGood | Judgement_OutOfDate | Judgement_LowQuality | Judgement_Erroneous

export interface Judgement_Unknown {
    __kind: 'Unknown'
}

export interface Judgement_FeePaid {
    __kind: 'FeePaid'
    value: bigint
}

export interface Judgement_Reasonable {
    __kind: 'Reasonable'
}

export interface Judgement_KnownGood {
    __kind: 'KnownGood'
}

export interface Judgement_OutOfDate {
    __kind: 'OutOfDate'
}

export interface Judgement_LowQuality {
    __kind: 'LowQuality'
}

export interface Judgement_Erroneous {
    __kind: 'Erroneous'
}

export type VoteCurrency = VoteCurrency_Enj | VoteCurrency_SEnj

export interface VoteCurrency_Enj {
    __kind: 'Enj'
}

export interface VoteCurrency_SEnj {
    __kind: 'SEnj'
    value: bigint
}

export interface DefaultRoyalty {
    beneficiary: Uint8Array
    percentage: number
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully.
 */
export interface SystemEvent_ExtrinsicSuccess {
    __kind: 'ExtrinsicSuccess'
    dispatchInfo: DispatchInfo
}

/**
 * An extrinsic failed.
 */
export interface SystemEvent_ExtrinsicFailed {
    __kind: 'ExtrinsicFailed'
    dispatchError: DispatchError
    dispatchInfo: DispatchInfo
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
    __kind: 'CodeUpdated'
}

/**
 * A new account was created.
 */
export interface SystemEvent_NewAccount {
    __kind: 'NewAccount'
    account: Uint8Array
}

/**
 * An account was reaped.
 */
export interface SystemEvent_KilledAccount {
    __kind: 'KilledAccount'
    account: Uint8Array
}

/**
 * On on-chain remark happened.
 */
export interface SystemEvent_Remarked {
    __kind: 'Remarked'
    sender: Uint8Array
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed | BalancesEvent_Minted | BalancesEvent_Burned | BalancesEvent_Suspended | BalancesEvent_Restored | BalancesEvent_Upgraded | BalancesEvent_Issued | BalancesEvent_Rescinded | BalancesEvent_Locked | BalancesEvent_Unlocked | BalancesEvent_Frozen | BalancesEvent_Thawed

/**
 * An account was created with some free balance.
 */
export interface BalancesEvent_Endowed {
    __kind: 'Endowed'
    account: Uint8Array
    freeBalance: bigint
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss.
 */
export interface BalancesEvent_DustLost {
    __kind: 'DustLost'
    account: Uint8Array
    amount: bigint
}

/**
 * Transfer succeeded.
 */
export interface BalancesEvent_Transfer {
    __kind: 'Transfer'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
}

/**
 * A balance was set by root.
 */
export interface BalancesEvent_BalanceSet {
    __kind: 'BalanceSet'
    who: Uint8Array
    free: bigint
}

/**
 * Some balance was reserved (moved from free to reserved).
 */
export interface BalancesEvent_Reserved {
    __kind: 'Reserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unreserved (moved from reserved to free).
 */
export interface BalancesEvent_Unreserved {
    __kind: 'Unreserved'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 */
export interface BalancesEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    from: Uint8Array
    to: Uint8Array
    amount: bigint
    destinationStatus: BalanceStatus
}

/**
 * Some amount was deposited (e.g. for transaction fees).
 */
export interface BalancesEvent_Deposit {
    __kind: 'Deposit'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was withdrawn from the account (e.g. for transaction fees).
 */
export interface BalancesEvent_Withdraw {
    __kind: 'Withdraw'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was removed from the account (e.g. for misbehavior).
 */
export interface BalancesEvent_Slashed {
    __kind: 'Slashed'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was minted into an account.
 */
export interface BalancesEvent_Minted {
    __kind: 'Minted'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was burned from an account.
 */
export interface BalancesEvent_Burned {
    __kind: 'Burned'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was suspended from an account (it can be restored later).
 */
export interface BalancesEvent_Suspended {
    __kind: 'Suspended'
    who: Uint8Array
    amount: bigint
}

/**
 * Some amount was restored into an account.
 */
export interface BalancesEvent_Restored {
    __kind: 'Restored'
    who: Uint8Array
    amount: bigint
}

/**
 * An account was upgraded.
 */
export interface BalancesEvent_Upgraded {
    __kind: 'Upgraded'
    who: Uint8Array
}

/**
 * Total issuance was increased by `amount`, creating a credit to be balanced.
 */
export interface BalancesEvent_Issued {
    __kind: 'Issued'
    amount: bigint
}

/**
 * Total issuance was decreased by `amount`, creating a debt to be balanced.
 */
export interface BalancesEvent_Rescinded {
    __kind: 'Rescinded'
    amount: bigint
}

/**
 * Some balance was locked.
 */
export interface BalancesEvent_Locked {
    __kind: 'Locked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was unlocked.
 */
export interface BalancesEvent_Unlocked {
    __kind: 'Unlocked'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was frozen.
 */
export interface BalancesEvent_Frozen {
    __kind: 'Frozen'
    who: Uint8Array
    amount: bigint
}

/**
 * Some balance was thawed.
 */
export interface BalancesEvent_Thawed {
    __kind: 'Thawed'
    who: Uint8Array
    amount: bigint
}

/**
 * Events type.
 */
export type OffencesEvent = OffencesEvent_Offence

/**
 * There is an offence reported of the given `kind` happened at the `session_index` and
 * (kind-specific) time slot. This event is not deposited for duplicate slashes.
 * \[kind, timeslot\].
 */
export interface OffencesEvent_Offence {
    __kind: 'Offence'
    kind: Uint8Array
    timeslot: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ElectionProviderMultiPhaseEvent = ElectionProviderMultiPhaseEvent_SolutionStored | ElectionProviderMultiPhaseEvent_ElectionFinalized | ElectionProviderMultiPhaseEvent_ElectionFailed | ElectionProviderMultiPhaseEvent_Rewarded | ElectionProviderMultiPhaseEvent_Slashed | ElectionProviderMultiPhaseEvent_PhaseTransitioned

/**
 * A solution was stored with the given compute.
 * 
 * The `origin` indicates the origin of the solution. If `origin` is `Some(AccountId)`,
 * the stored solution was submited in the signed phase by a miner with the `AccountId`.
 * Otherwise, the solution was stored either during the unsigned phase or by
 * `T::ForceOrigin`. The `bool` is `true` when a previous solution was ejected to make
 * room for this one.
 */
export interface ElectionProviderMultiPhaseEvent_SolutionStored {
    __kind: 'SolutionStored'
    compute: ElectionCompute
    origin: (Uint8Array | undefined)
    prevEjected: boolean
}

/**
 * The election has been finalized, with the given computation and score.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFinalized {
    __kind: 'ElectionFinalized'
    compute: ElectionCompute
    score: ElectionScore
}

/**
 * An election failed.
 * 
 * Not much can be said about which computes failed in the process.
 */
export interface ElectionProviderMultiPhaseEvent_ElectionFailed {
    __kind: 'ElectionFailed'
}

/**
 * An account has been rewarded for their signed submission being finalized.
 */
export interface ElectionProviderMultiPhaseEvent_Rewarded {
    __kind: 'Rewarded'
    account: Uint8Array
    value: bigint
}

/**
 * An account has been slashed for submitting an invalid signed submission.
 */
export interface ElectionProviderMultiPhaseEvent_Slashed {
    __kind: 'Slashed'
    account: Uint8Array
    value: bigint
}

/**
 * There was a phase transition in a given round.
 */
export interface ElectionProviderMultiPhaseEvent_PhaseTransitioned {
    __kind: 'PhaseTransitioned'
    from: Phase
    to: Phase
    round: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type StakingEvent = StakingEvent_EraPaid | StakingEvent_Rewarded | StakingEvent_Slashed | StakingEvent_SlashReported | StakingEvent_OldSlashingReportDiscarded | StakingEvent_StakersElected | StakingEvent_Bonded | StakingEvent_Unbonded | StakingEvent_Withdrawn | StakingEvent_Kicked | StakingEvent_StakingElectionFailed | StakingEvent_Chilled | StakingEvent_PayoutStarted | StakingEvent_ValidatorPrefsSet | StakingEvent_ForceEra

/**
 * The era payout has been set; the first balance is the validator-payout; the second is
 * the remainder from the maximum amount of reward.
 */
export interface StakingEvent_EraPaid {
    __kind: 'EraPaid'
    eraIndex: number
    validatorPayout: bigint
    remainder: bigint
}

/**
 * The nominator has been rewarded by this amount.
 */
export interface StakingEvent_Rewarded {
    __kind: 'Rewarded'
    stash: Uint8Array
    amount: bigint
}

/**
 * A staker (validator or nominator) has been slashed by the given amount.
 */
export interface StakingEvent_Slashed {
    __kind: 'Slashed'
    staker: Uint8Array
    amount: bigint
}

/**
 * A slash for the given validator, for the given percentage of their stake, at the given
 * era as been reported.
 */
export interface StakingEvent_SlashReported {
    __kind: 'SlashReported'
    validator: Uint8Array
    fraction: number
    slashEra: number
}

/**
 * An old slashing report from a prior era was discarded because it could
 * not be processed.
 */
export interface StakingEvent_OldSlashingReportDiscarded {
    __kind: 'OldSlashingReportDiscarded'
    sessionIndex: number
}

/**
 * A new set of stakers was elected.
 */
export interface StakingEvent_StakersElected {
    __kind: 'StakersElected'
}

/**
 * An account has bonded this amount. \[stash, amount\]
 * 
 * NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
 * it will not be emitted for staking rewards when they are added to stake.
 */
export interface StakingEvent_Bonded {
    __kind: 'Bonded'
    stash: Uint8Array
    amount: bigint
}

/**
 * An account has unbonded this amount.
 */
export interface StakingEvent_Unbonded {
    __kind: 'Unbonded'
    stash: Uint8Array
    amount: bigint
}

/**
 * An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
 * from the unlocking queue.
 */
export interface StakingEvent_Withdrawn {
    __kind: 'Withdrawn'
    stash: Uint8Array
    amount: bigint
}

/**
 * A nominator has been kicked from a validator.
 */
export interface StakingEvent_Kicked {
    __kind: 'Kicked'
    nominator: Uint8Array
    stash: Uint8Array
}

/**
 * The election failed. No new era is planned.
 */
export interface StakingEvent_StakingElectionFailed {
    __kind: 'StakingElectionFailed'
}

/**
 * An account has stopped participating as either a validator or nominator.
 */
export interface StakingEvent_Chilled {
    __kind: 'Chilled'
    stash: Uint8Array
}

/**
 * The stakers' rewards are getting paid.
 */
export interface StakingEvent_PayoutStarted {
    __kind: 'PayoutStarted'
    eraIndex: number
    validatorStash: Uint8Array
}

/**
 * A validator has set their preferences.
 */
export interface StakingEvent_ValidatorPrefsSet {
    __kind: 'ValidatorPrefsSet'
    stash: Uint8Array
    prefs: ValidatorPrefs
}

/**
 * A new force era mode was set.
 */
export interface StakingEvent_ForceEra {
    __kind: 'ForceEra'
    mode: Forcing
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SessionEvent = SessionEvent_NewSession

/**
 * New session has happened. Note that the argument is the session index, not the
 * block number as the type might suggest.
 */
export interface SessionEvent_NewSession {
    __kind: 'NewSession'
    sessionIndex: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type GrandpaEvent = GrandpaEvent_NewAuthorities | GrandpaEvent_Paused | GrandpaEvent_Resumed

/**
 * New authority set has been applied.
 */
export interface GrandpaEvent_NewAuthorities {
    __kind: 'NewAuthorities'
    authoritySet: [Uint8Array, bigint][]
}

/**
 * Current authority set has been paused.
 */
export interface GrandpaEvent_Paused {
    __kind: 'Paused'
}

/**
 * Current authority set has been resumed.
 */
export interface GrandpaEvent_Resumed {
    __kind: 'Resumed'
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TreasuryEvent = TreasuryEvent_Proposed | TreasuryEvent_Spending | TreasuryEvent_Awarded | TreasuryEvent_Rejected | TreasuryEvent_Burnt | TreasuryEvent_Rollover | TreasuryEvent_Deposit | TreasuryEvent_SpendApproved | TreasuryEvent_UpdatedInactive

/**
 * New proposal.
 */
export interface TreasuryEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface TreasuryEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface TreasuryEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface TreasuryEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface TreasuryEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface TreasuryEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface TreasuryEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface TreasuryEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: Uint8Array
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface TreasuryEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type TransactionPaymentEvent = TransactionPaymentEvent_TransactionFeePaid

/**
 * A transaction fee `actual_fee`, of which `tip` was added to the minimum inclusion fee,
 * has been paid by `who`.
 */
export interface TransactionPaymentEvent_TransactionFeePaid {
    __kind: 'TransactionFeePaid'
    who: Uint8Array
    actualFee: bigint
    tip: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_55
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied if one existed.
 */
export interface SudoEvent_KeyChanged {
    __kind: 'KeyChanged'
    oldSudoer: (Uint8Array | undefined)
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
    __kind: 'SudoAsDone'
    sudoResult: Type_55
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ImOnlineEvent = ImOnlineEvent_HeartbeatReceived | ImOnlineEvent_AllGood | ImOnlineEvent_SomeOffline

/**
 * A new heartbeat was received from `AuthorityId`.
 */
export interface ImOnlineEvent_HeartbeatReceived {
    __kind: 'HeartbeatReceived'
    authorityId: Uint8Array
}

/**
 * At the end of the session, no offence was committed.
 */
export interface ImOnlineEvent_AllGood {
    __kind: 'AllGood'
}

/**
 * At the end of the session, at least one validator was found to be offline.
 */
export interface ImOnlineEvent_SomeOffline {
    __kind: 'SomeOffline'
    offline: [Uint8Array, Exposure][]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VoterListEvent = VoterListEvent_Rebagged | VoterListEvent_ScoreUpdated

/**
 * Moved an account from one bag to another.
 */
export interface VoterListEvent_Rebagged {
    __kind: 'Rebagged'
    who: Uint8Array
    from: bigint
    to: bigint
}

/**
 * Updated the score of some account to the given amount.
 */
export interface VoterListEvent_ScoreUpdated {
    __kind: 'ScoreUpdated'
    who: Uint8Array
    newScore: bigint
}

/**
 * Events of this pallet.
 */
export type NominationPoolsEvent = NominationPoolsEvent_Created | NominationPoolsEvent_Bonded | NominationPoolsEvent_Unbonded | NominationPoolsEvent_Withdrawn | NominationPoolsEvent_Destroyed | NominationPoolsEvent_StateChanged | NominationPoolsEvent_PoolSlashed | NominationPoolsEvent_UnbondingPoolSlashed | NominationPoolsEvent_CommissionUpdated | NominationPoolsEvent_EraRewardsProcessed | NominationPoolsEvent_RewardPaid | NominationPoolsEvent_PoolMutated | NominationPoolsEvent_Nominated | NominationPoolsEvent_EarlyBirdBonusCalculated | NominationPoolsEvent_EarlyBirdBonusDistributed | NominationPoolsEvent_EarlyBirdSharesCaptured | NominationPoolsEvent_EarlyBirdBonusPaid | NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked

/**
 * A pool has been created.
 */
export interface NominationPoolsEvent_Created {
    __kind: 'Created'
    creator: Uint8Array
    poolId: number
    capacity: bigint
}

/**
 * A member has became bonded in a pool.
 */
export interface NominationPoolsEvent_Bonded {
    __kind: 'Bonded'
    member: Uint8Array
    poolId: number
    bonded: bigint
}

/**
 * A member has unbonded from their pool.
 */
export interface NominationPoolsEvent_Unbonded {
    __kind: 'Unbonded'
    /**
     * The member that unbonded
     */
    member: Uint8Array
    /**
     * The id of the pool unbonded from
     */
    poolId: number
    /**
     * the corresponding balance of the number of points that has been requested to be
     * unbonded (the argument of the `unbond` transaction) from the bonded pool.
     */
    balance: bigint
    /**
     * the number of points that are issued as a result of `balance` being dissolved into
     * the corresponding unbonding pool.
     */
    points: bigint
    /**
     * the era in which the balance will be unbonded. In the absence of slashing,
     * these values will match. In the presence of slashing, the number of points that are
     * issued in the unbonding pool will be less than the amount requested to be unbonded.
     */
    era: number
}

/**
 * A member has withdrawn from their pool.
 * 
 * The given number of `points` have been dissolved in return of `balance`.
 * 
 * Similar to `Unbonded` event, in the absence of slashing, the ratio of point to balance
 * will be 1.
 */
export interface NominationPoolsEvent_Withdrawn {
    __kind: 'Withdrawn'
    member: Uint8Array
    poolId: number
    balance: bigint
    points: bigint
}

/**
 * A pool has been destroyed.
 */
export interface NominationPoolsEvent_Destroyed {
    __kind: 'Destroyed'
    poolId: number
}

/**
 * The state of a pool has changed
 */
export interface NominationPoolsEvent_StateChanged {
    __kind: 'StateChanged'
    poolId: number
    newState: PoolState
}

/**
 * The active balance of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_PoolSlashed {
    __kind: 'PoolSlashed'
    poolId: number
    balance: bigint
}

/**
 * The unbond pool at `era` of pool `pool_id` has been slashed to `balance`.
 */
export interface NominationPoolsEvent_UnbondingPoolSlashed {
    __kind: 'UnbondingPoolSlashed'
    poolId: number
    era: number
    balance: bigint
}

/**
 * A pool's commission rate has been changed.
 */
export interface NominationPoolsEvent_CommissionUpdated {
    __kind: 'CommissionUpdated'
    poolId: number
    current: (number | undefined)
}

/**
 * This event happens once per era on the previous era that rewards are paid out for. It
 * pays commission, distributes bonus, and reinvests rewards.
 */
export interface NominationPoolsEvent_EraRewardsProcessed {
    __kind: 'EraRewardsProcessed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The commission that was paid
     */
    commission: (CommissionPayment | undefined)
    /**
     * The amount of bonus that was unlocked
     */
    bonus: bigint
    /**
     * The amount that was bonded
     */
    reinvested: bigint
    /**
     * The current bonus cycle ended
     */
    bonusCycleEnded: boolean
}

/**
 * Rewards were paid to a pool
 */
export interface NominationPoolsEvent_RewardPaid {
    __kind: 'RewardPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The era that was processed.
     */
    era: number
    /**
     * The validator that the payment was received from
     */
    validatorStash: Uint8Array
    /**
     * The amount added to the pool's reward account
     */
    reward: bigint
    /**
     * The amount that was added to the pool's bonus account
     */
    bonus: bigint
}

/**
 * Pool has been mutated.
 */
export interface NominationPoolsEvent_PoolMutated {
    __kind: 'PoolMutated'
    poolId: number
    mutation: PoolMutation
}

/**
 * A nomination took place
 */
export interface NominationPoolsEvent_Nominated {
    __kind: 'Nominated'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The validators that were nominated
     */
    validators: Uint8Array[]
}

export interface NominationPoolsEvent_EarlyBirdBonusCalculated {
    __kind: 'EarlyBirdBonusCalculated'
    /**
     * The total amount to be distributed
     */
    totalAmount: bigint
}

/**
 * The early bird bonus has been distributed
 */
export interface NominationPoolsEvent_EarlyBirdBonusDistributed {
    __kind: 'EarlyBirdBonusDistributed'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The amount distributed
     */
    amount: bigint
}

/**
 * The shares of pool users have been captured for early bird rewards
 */
export interface NominationPoolsEvent_EarlyBirdSharesCaptured {
    __kind: 'EarlyBirdSharesCaptured'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The total number of accounts captured
     */
    totalAccounts: number
}

/**
 * The early bird bonus has been paid to the pool
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaid {
    __kind: 'EarlyBirdBonusPaid'
    /**
     * The id of the pool
     */
    poolId: number
    /**
     * The payment ID
     */
    paymentId: number
    /**
     * The total accounts that were paid
     */
    totalAccounts: number
}

/**
 * A new share of early bird bonus has been unlocked
 */
export interface NominationPoolsEvent_EarlyBirdBonusPaymentUnlocked {
    __kind: 'EarlyBirdBonusPaymentUnlocked'
    /**
     * The payment-id of the unlocked bonus
     */
    paymentId: number
    /**
     * The next payment block
     */
    nextPaymentBlock: number
}

/**
 * The pallet's event type.
 */
export type StakeExchangeEvent = StakeExchangeEvent_OfferCreated | StakeExchangeEvent_OfferCancelled | StakeExchangeEvent_LiquidityConfigUpdated | StakeExchangeEvent_LiquidityWithdrawn | StakeExchangeEvent_LiquidityAdded | StakeExchangeEvent_BuyOrderCompleted | StakeExchangeEvent_OfferCompleted

/**
 * A offer was placed
 */
export interface StakeExchangeEvent_OfferCreated {
    __kind: 'OfferCreated'
    /**
     * ID of the offer
     */
    offerId: bigint
    /**
     * The offer that was placed
     */
    offer: Offer
}

/**
 * A offer was cancelled
 */
export interface StakeExchangeEvent_OfferCancelled {
    __kind: 'OfferCancelled'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * Liquidity config was set for account
 */
export interface StakeExchangeEvent_LiquidityConfigUpdated {
    __kind: 'LiquidityConfigUpdated'
    /**
     * ID of the offer
     */
    who: Uint8Array
    /**
     * The offer that was placed
     */
    config: LiquidityAccountConfig
}

/**
 * Liquidity was withdrawn from a offer
 */
export interface StakeExchangeEvent_LiquidityWithdrawn {
    __kind: 'LiquidityWithdrawn'
    /**
     * ID of the account
     */
    who: Uint8Array
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * Liquidity was added to a offer
 */
export interface StakeExchangeEvent_LiquidityAdded {
    __kind: 'LiquidityAdded'
    /**
     * ID of the account
     */
    who: Uint8Array
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * Buy order was completed
 */
export interface StakeExchangeEvent_BuyOrderCompleted {
    __kind: 'BuyOrderCompleted'
    /**
     * AccountId of the buyer
     */
    who: Uint8Array
    /**
     * The tokenId that was exchanged
     */
    tokenId: bigint
    /**
     * The amount of tokens transferred
     */
    amount: bigint
    /**
     * The rate at which the order was completed
     */
    rate: number
}

/**
 * A offer was completed and removed
 */
export interface StakeExchangeEvent_OfferCompleted {
    __kind: 'OfferCompleted'
    /**
     * ID of the offer
     */
    offerId: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type UtilityEvent = UtilityEvent_BatchInterrupted | UtilityEvent_BatchCompleted | UtilityEvent_BatchCompletedWithErrors | UtilityEvent_ItemCompleted | UtilityEvent_ItemFailed | UtilityEvent_DispatchedAs

/**
 * Batch of dispatches did not complete fully. Index of first failing dispatch given, as
 * well as the error.
 */
export interface UtilityEvent_BatchInterrupted {
    __kind: 'BatchInterrupted'
    index: number
    error: DispatchError
}

/**
 * Batch of dispatches completed fully with no error.
 */
export interface UtilityEvent_BatchCompleted {
    __kind: 'BatchCompleted'
}

/**
 * Batch of dispatches completed but has errors.
 */
export interface UtilityEvent_BatchCompletedWithErrors {
    __kind: 'BatchCompletedWithErrors'
}

/**
 * A single item within a Batch of dispatches has completed with no error.
 */
export interface UtilityEvent_ItemCompleted {
    __kind: 'ItemCompleted'
}

/**
 * A single item within a Batch of dispatches has completed with error.
 */
export interface UtilityEvent_ItemFailed {
    __kind: 'ItemFailed'
    error: DispatchError
}

/**
 * A call was dispatched.
 */
export interface UtilityEvent_DispatchedAs {
    __kind: 'DispatchedAs'
    result: Type_55
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultisigEvent = MultisigEvent_NewMultisig | MultisigEvent_MultisigApproval | MultisigEvent_MultisigExecuted | MultisigEvent_MultisigCancelled

/**
 * A new multisig operation has begun.
 */
export interface MultisigEvent_NewMultisig {
    __kind: 'NewMultisig'
    approving: Uint8Array
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been approved by someone.
 */
export interface MultisigEvent_MultisigApproval {
    __kind: 'MultisigApproval'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * A multisig operation has been executed.
 */
export interface MultisigEvent_MultisigExecuted {
    __kind: 'MultisigExecuted'
    approving: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
    result: Type_55
}

/**
 * A multisig operation has been cancelled.
 */
export interface MultisigEvent_MultisigCancelled {
    __kind: 'MultisigCancelled'
    cancelling: Uint8Array
    timepoint: Timepoint
    multisig: Uint8Array
    callHash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ParaInclusionEvent = ParaInclusionEvent_CandidateBacked | ParaInclusionEvent_CandidateIncluded | ParaInclusionEvent_CandidateTimedOut | ParaInclusionEvent_UpwardMessagesReceived

/**
 * A candidate was backed. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateBacked {
    __kind: 'CandidateBacked'
    value: [V4CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate was included. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateIncluded {
    __kind: 'CandidateIncluded'
    value: [V4CandidateReceipt, Uint8Array, number, number]
}

/**
 * A candidate timed out. `[candidate, head_data]`
 */
export interface ParaInclusionEvent_CandidateTimedOut {
    __kind: 'CandidateTimedOut'
    value: [V4CandidateReceipt, Uint8Array, number]
}

/**
 * Some upward messages have been received and will be processed.
 */
export interface ParaInclusionEvent_UpwardMessagesReceived {
    __kind: 'UpwardMessagesReceived'
    from: number
    count: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ParasEvent = ParasEvent_CurrentCodeUpdated | ParasEvent_CurrentHeadUpdated | ParasEvent_CodeUpgradeScheduled | ParasEvent_NewHeadNoted | ParasEvent_ActionQueued | ParasEvent_PvfCheckStarted | ParasEvent_PvfCheckAccepted | ParasEvent_PvfCheckRejected

/**
 * Current code has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentCodeUpdated {
    __kind: 'CurrentCodeUpdated'
    value: number
}

/**
 * Current head has been updated for a Para. `para_id`
 */
export interface ParasEvent_CurrentHeadUpdated {
    __kind: 'CurrentHeadUpdated'
    value: number
}

/**
 * A code upgrade has been scheduled for a Para. `para_id`
 */
export interface ParasEvent_CodeUpgradeScheduled {
    __kind: 'CodeUpgradeScheduled'
    value: number
}

/**
 * A new head has been noted for a Para. `para_id`
 */
export interface ParasEvent_NewHeadNoted {
    __kind: 'NewHeadNoted'
    value: number
}

/**
 * A para has been queued to execute pending actions. `para_id`
 */
export interface ParasEvent_ActionQueued {
    __kind: 'ActionQueued'
    value: [number, number]
}

/**
 * The given para either initiated or subscribed to a PVF check for the given validation
 * code. `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckStarted {
    __kind: 'PvfCheckStarted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was accepted by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckAccepted {
    __kind: 'PvfCheckAccepted'
    value: [Uint8Array, number]
}

/**
 * The given validation code was rejected by the PVF pre-checking vote.
 * `code_hash` `para_id`
 */
export interface ParasEvent_PvfCheckRejected {
    __kind: 'PvfCheckRejected'
    value: [Uint8Array, number]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type HrmpEvent = HrmpEvent_OpenChannelRequested | HrmpEvent_OpenChannelCanceled | HrmpEvent_OpenChannelAccepted | HrmpEvent_ChannelClosed | HrmpEvent_HrmpChannelForceOpened

/**
 * Open HRMP channel requested.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_OpenChannelRequested {
    __kind: 'OpenChannelRequested'
    value: [number, number, number, number]
}

/**
 * An HRMP channel request sent by the receiver was canceled by either party.
 * `[by_parachain, channel_id]`
 */
export interface HrmpEvent_OpenChannelCanceled {
    __kind: 'OpenChannelCanceled'
    value: [number, HrmpChannelId]
}

/**
 * Open HRMP channel accepted. `[sender, recipient]`
 */
export interface HrmpEvent_OpenChannelAccepted {
    __kind: 'OpenChannelAccepted'
    value: [number, number]
}

/**
 * HRMP channel closed. `[by_parachain, channel_id]`
 */
export interface HrmpEvent_ChannelClosed {
    __kind: 'ChannelClosed'
    value: [number, HrmpChannelId]
}

/**
 * An HRMP channel was opened via Root origin.
 * `[sender, recipient, proposed_max_capacity, proposed_max_message_size]`
 */
export interface HrmpEvent_HrmpChannelForceOpened {
    __kind: 'HrmpChannelForceOpened'
    value: [number, number, number, number]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ParasDisputesEvent = ParasDisputesEvent_DisputeInitiated | ParasDisputesEvent_DisputeConcluded | ParasDisputesEvent_Revert

/**
 * A dispute has been initiated. \[candidate hash, dispute location\]
 */
export interface ParasDisputesEvent_DisputeInitiated {
    __kind: 'DisputeInitiated'
    value: [Uint8Array, DisputeLocation]
}

/**
 * A dispute has concluded for or against a candidate.
 * `\[para id, candidate hash, dispute result\]`
 */
export interface ParasDisputesEvent_DisputeConcluded {
    __kind: 'DisputeConcluded'
    value: [Uint8Array, DisputeResult]
}

/**
 * A dispute has concluded with supermajority against a candidate.
 * Block authors should no longer build on top of this head and should
 * instead revert the block at the given height. This should be the
 * number of the child of the last known valid block in the chain.
 */
export interface ParasDisputesEvent_Revert {
    __kind: 'Revert'
    value: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type RegistrarEvent = RegistrarEvent_Registered | RegistrarEvent_Deregistered | RegistrarEvent_Reserved | RegistrarEvent_Swapped

export interface RegistrarEvent_Registered {
    __kind: 'Registered'
    paraId: number
    manager: Uint8Array
}

export interface RegistrarEvent_Deregistered {
    __kind: 'Deregistered'
    paraId: number
}

export interface RegistrarEvent_Reserved {
    __kind: 'Reserved'
    paraId: number
    who: Uint8Array
}

export interface RegistrarEvent_Swapped {
    __kind: 'Swapped'
    paraId: number
    otherId: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type SlotsEvent = SlotsEvent_NewLeasePeriod | SlotsEvent_Leased

/**
 * A new `[lease_period]` is beginning.
 */
export interface SlotsEvent_NewLeasePeriod {
    __kind: 'NewLeasePeriod'
    leasePeriod: number
}

/**
 * A para has won the right to a continuous set of lease periods as a parachain.
 * First balance is any extra amount reserved on top of the para's existing deposit.
 * Second balance is the total amount reserved.
 */
export interface SlotsEvent_Leased {
    __kind: 'Leased'
    paraId: number
    leaser: Uint8Array
    periodBegin: number
    periodCount: number
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type AuctionsEvent = AuctionsEvent_AuctionStarted | AuctionsEvent_AuctionClosed | AuctionsEvent_Reserved | AuctionsEvent_Unreserved | AuctionsEvent_ReserveConfiscated | AuctionsEvent_BidAccepted | AuctionsEvent_WinningOffset

/**
 * An auction started. Provides its index and the block number where it will begin to
 * close and the first lease period of the quadruplet that is auctioned.
 */
export interface AuctionsEvent_AuctionStarted {
    __kind: 'AuctionStarted'
    auctionIndex: number
    leasePeriod: number
    ending: number
}

/**
 * An auction ended. All funds become unreserved.
 */
export interface AuctionsEvent_AuctionClosed {
    __kind: 'AuctionClosed'
    auctionIndex: number
}

/**
 * Funds were reserved for a winning bid. First balance is the extra amount reserved.
 * Second is the total.
 */
export interface AuctionsEvent_Reserved {
    __kind: 'Reserved'
    bidder: Uint8Array
    extraReserved: bigint
    totalAmount: bigint
}

/**
 * Funds were unreserved since bidder is no longer active. `[bidder, amount]`
 */
export interface AuctionsEvent_Unreserved {
    __kind: 'Unreserved'
    bidder: Uint8Array
    amount: bigint
}

/**
 * Someone attempted to lease the same slot twice for a parachain. The amount is held in reserve
 * but no parachain slot has been leased.
 */
export interface AuctionsEvent_ReserveConfiscated {
    __kind: 'ReserveConfiscated'
    paraId: number
    leaser: Uint8Array
    amount: bigint
}

/**
 * A new bid has been accepted as the current winner.
 */
export interface AuctionsEvent_BidAccepted {
    __kind: 'BidAccepted'
    bidder: Uint8Array
    paraId: number
    amount: bigint
    firstSlot: number
    lastSlot: number
}

/**
 * The winning offset was chosen for an auction. This will map into the `Winning` storage map.
 */
export interface AuctionsEvent_WinningOffset {
    __kind: 'WinningOffset'
    auctionIndex: number
    blockNumber: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type CrowdloanEvent = CrowdloanEvent_Created | CrowdloanEvent_Contributed | CrowdloanEvent_Withdrew | CrowdloanEvent_PartiallyRefunded | CrowdloanEvent_AllRefunded | CrowdloanEvent_Dissolved | CrowdloanEvent_HandleBidResult | CrowdloanEvent_Edited | CrowdloanEvent_MemoUpdated | CrowdloanEvent_AddedToNewRaise

/**
 * Create a new crowdloaning campaign.
 */
export interface CrowdloanEvent_Created {
    __kind: 'Created'
    paraId: number
}

/**
 * Contributed to a crowd sale.
 */
export interface CrowdloanEvent_Contributed {
    __kind: 'Contributed'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * Withdrew full balance of a contributor.
 */
export interface CrowdloanEvent_Withdrew {
    __kind: 'Withdrew'
    who: Uint8Array
    fundIndex: number
    amount: bigint
}

/**
 * The loans in a fund have been partially dissolved, i.e. there are some left
 * over child keys that still need to be killed.
 */
export interface CrowdloanEvent_PartiallyRefunded {
    __kind: 'PartiallyRefunded'
    paraId: number
}

/**
 * All loans in a fund have been refunded.
 */
export interface CrowdloanEvent_AllRefunded {
    __kind: 'AllRefunded'
    paraId: number
}

/**
 * Fund is dissolved.
 */
export interface CrowdloanEvent_Dissolved {
    __kind: 'Dissolved'
    paraId: number
}

/**
 * The result of trying to submit a new bid to the Slots pallet.
 */
export interface CrowdloanEvent_HandleBidResult {
    __kind: 'HandleBidResult'
    paraId: number
    result: Type_55
}

/**
 * The configuration to a crowdloan has been edited.
 */
export interface CrowdloanEvent_Edited {
    __kind: 'Edited'
    paraId: number
}

/**
 * A memo has been updated.
 */
export interface CrowdloanEvent_MemoUpdated {
    __kind: 'MemoUpdated'
    who: Uint8Array
    paraId: number
    memo: Uint8Array
}

/**
 * A parachain has been moved to `NewRaise`
 */
export interface CrowdloanEvent_AddedToNewRaise {
    __kind: 'AddedToNewRaise'
    paraId: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type XcmPalletEvent = XcmPalletEvent_Attempted | XcmPalletEvent_Sent | XcmPalletEvent_UnexpectedResponse | XcmPalletEvent_ResponseReady | XcmPalletEvent_Notified | XcmPalletEvent_NotifyOverweight | XcmPalletEvent_NotifyDispatchError | XcmPalletEvent_NotifyDecodeFailed | XcmPalletEvent_InvalidResponder | XcmPalletEvent_InvalidResponderVersion | XcmPalletEvent_ResponseTaken | XcmPalletEvent_AssetsTrapped | XcmPalletEvent_VersionChangeNotified | XcmPalletEvent_SupportedVersionChanged | XcmPalletEvent_NotifyTargetSendFail | XcmPalletEvent_NotifyTargetMigrationFail | XcmPalletEvent_InvalidQuerierVersion | XcmPalletEvent_InvalidQuerier | XcmPalletEvent_VersionNotifyStarted | XcmPalletEvent_VersionNotifyRequested | XcmPalletEvent_VersionNotifyUnrequested | XcmPalletEvent_FeesPaid | XcmPalletEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface XcmPalletEvent_Attempted {
    __kind: 'Attempted'
    value: V3Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface XcmPalletEvent_Sent {
    __kind: 'Sent'
    value: [V3MultiLocation, V3MultiLocation, V3Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface XcmPalletEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    value: [V3MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface XcmPalletEvent_ResponseReady {
    __kind: 'ResponseReady'
    value: [bigint, V3Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_Notified {
    __kind: 'Notified'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 * 
 * \[ id, pallet index, call index, actual weight, max budgeted weight \]
 */
export interface XcmPalletEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    value: [bigint, number, number, Weight, Weight]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    value: [bigint, number, number]
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 * 
 * \[ id, pallet index, call index \]
 */
export interface XcmPalletEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    value: [bigint, number, number]
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected location \]
 */
export interface XcmPalletEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    value: [V3MultiLocation, bigint, (V3MultiLocation | undefined)]
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface XcmPalletEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    value: [V3MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface XcmPalletEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface XcmPalletEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    value: [Uint8Array, V3MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 * 
 * \[ destination, result, cost \]
 */
export interface XcmPalletEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    value: [V3MultiLocation, number, V3MultiAsset[]]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface XcmPalletEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    value: [V3MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface XcmPalletEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    value: [V3MultiLocation, bigint, V3Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface XcmPalletEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    value: [VersionedMultiLocation, bigint]
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 * 
 * \[ origin location, id \]
 */
export interface XcmPalletEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    value: [V3MultiLocation, bigint]
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 * 
 * \[ origin location, id, expected querier, maybe actual querier \]
 */
export interface XcmPalletEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    value: [V3MultiLocation, bigint, V3MultiLocation, (V3MultiLocation | undefined)]
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 * 
 * \[ destination location, cost \]
 */
export interface XcmPalletEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * We have requested that a remote chain sends us XCM version change notifications.
 * 
 * \[ destination location, cost \]
 */
export interface XcmPalletEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * We have requested that a remote chain stops sending us XCM version change notifications.
 * 
 * \[ destination location, cost \]
 */
export interface XcmPalletEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 * 
 * \[ paying location, fees \]
 */
export interface XcmPalletEvent_FeesPaid {
    __kind: 'FeesPaid'
    value: [V3MultiLocation, V3MultiAsset[]]
}

/**
 * Some assets have been claimed from an asset trap
 * 
 * \[ hash, origin, assets \]
 */
export interface XcmPalletEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    value: [Uint8Array, V3MultiLocation, VersionedMultiAssets]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MessageQueueEvent = MessageQueueEvent_ProcessingFailed | MessageQueueEvent_Processed | MessageQueueEvent_OverweightEnqueued | MessageQueueEvent_PageReaped

/**
 * Message discarded due to an error in the `MessageProcessor` (usually a format error).
 */
export interface MessageQueueEvent_ProcessingFailed {
    __kind: 'ProcessingFailed'
    id: Uint8Array
    origin: AggregateMessageOrigin
    error: ProcessMessageError
}

/**
 * Message is processed.
 */
export interface MessageQueueEvent_Processed {
    __kind: 'Processed'
    id: Uint8Array
    origin: AggregateMessageOrigin
    weightUsed: Weight
    success: boolean
}

/**
 * Message placed in overweight queue.
 */
export interface MessageQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    id: Uint8Array
    origin: AggregateMessageOrigin
    pageIndex: number
    messageIndex: number
}

/**
 * This page was reaped.
 */
export interface MessageQueueEvent_PageReaped {
    __kind: 'PageReaped'
    origin: AggregateMessageOrigin
    index: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type AssignedSlotsEvent = AssignedSlotsEvent_PermanentSlotAssigned | AssignedSlotsEvent_TemporarySlotAssigned

/**
 * A para was assigned a permanent parachain slot
 */
export interface AssignedSlotsEvent_PermanentSlotAssigned {
    __kind: 'PermanentSlotAssigned'
    value: number
}

/**
 * A para was assigned a temporary parachain slot
 */
export interface AssignedSlotsEvent_TemporarySlotAssigned {
    __kind: 'TemporarySlotAssigned'
    value: number
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ValidatorManagerEvent = ValidatorManagerEvent_ValidatorsRegistered | ValidatorManagerEvent_ValidatorsDeregistered

/**
 * New validators were added to the set.
 */
export interface ValidatorManagerEvent_ValidatorsRegistered {
    __kind: 'ValidatorsRegistered'
    value: Uint8Array[]
}

/**
 * Validators were removed from the set.
 */
export interface ValidatorManagerEvent_ValidatorsDeregistered {
    __kind: 'ValidatorsDeregistered'
    value: Uint8Array[]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultiTokensEvent = MultiTokensEvent_CollectionCreated | MultiTokensEvent_CollectionDestroyed | MultiTokensEvent_CollectionMutated | MultiTokensEvent_Minted | MultiTokensEvent_TokenCreated | MultiTokensEvent_TokenMutated | MultiTokensEvent_Burned | MultiTokensEvent_TokenDestroyed | MultiTokensEvent_Transferred | MultiTokensEvent_Frozen | MultiTokensEvent_Thawed | MultiTokensEvent_AttributeSet | MultiTokensEvent_AttributeRemoved | MultiTokensEvent_Approved | MultiTokensEvent_Unapproved | MultiTokensEvent_CollectionAccountCreated | MultiTokensEvent_TokenAccountCreated | MultiTokensEvent_CollectionAccountDestroyed | MultiTokensEvent_TokenAccountDestroyed | MultiTokensEvent_Reserved | MultiTokensEvent_Unreserved | MultiTokensEvent_MovedReserves | MultiTokensEvent_ReserveRepatriated | MultiTokensEvent_BalanceSet | MultiTokensEvent_Withdraw | MultiTokensEvent_Deposit | MultiTokensEvent_Slashed | MultiTokensEvent_CollectionUpdated | MultiTokensEvent_TokenUpdated | MultiTokensEvent_NextCollectionIdUpdated | MultiTokensEvent_CollectionAccountUpdated | MultiTokensEvent_TokenAccountUpdated | MultiTokensEvent_MigrationStatusUpdated | MultiTokensEvent_ClaimedCollections | MultiTokensEvent_ClaimedTokens | MultiTokensEvent_ClaimTokensInitiated | MultiTokensEvent_ClaimTokensCompleted

/**
 * A new collection was created
 */
export interface MultiTokensEvent_CollectionCreated {
    __kind: 'CollectionCreated'
    /**
     * The id of the [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The owner of the [`Collection`](ep_multi_tokens::Collection)
     */
    owner: Uint8Array
}

/**
 * A collection was destroyed.
 */
export interface MultiTokensEvent_CollectionDestroyed {
    __kind: 'CollectionDestroyed'
    /**
     * id of collection destroyed
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that destroyed the collection
     */
    caller: Uint8Array
}

/**
 * A collection was mutated
 */
export interface MultiTokensEvent_CollectionMutated {
    __kind: 'CollectionMutated'
    /**
     * [`CollectionId`](Config::CollectionId) of the
     * [`Collection`](ep_multi_tokens::Collection)
     */
    collectionId: bigint
    /**
     * The mutation that was applied to the collection
     */
    mutation: DefaultCollectionMutation
}

/**
 * Units of a token were minted
 */
export interface MultiTokensEvent_Minted {
    __kind: 'Minted'
    /**
     * [`CollectionId`](Config::CollectionId) of minted token
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted token
     */
    issuer: RootOrSigned
    /**
     * The receiver of the token
     */
    recipient: Uint8Array
    /**
     * the amount of units minted
     */
    amount: bigint
}

/**
 * A token was created
 */
export interface MultiTokensEvent_TokenCreated {
    __kind: 'TokenCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) minted
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) minted
     */
    tokenId: bigint
    /**
     * issuer of minted [`Token`](ep_multi_tokens::Token)
     */
    issuer: RootOrSigned
    /**
     * the initial supply of the [`Token`](ep_multi_tokens::Token)
     */
    initialSupply: bigint
}

/**
 * A token was mutated
 */
export interface MultiTokensEvent_TokenMutated {
    __kind: 'TokenMutated'
    /**
     * The [`CollectionId`](Config::CollectionId) [`Token`](ep_multi_tokens::Token)
     * belongs to
     */
    collectionId: bigint
    /**
     * Id of the [`Token`](ep_multi_tokens::Token) mutated
     */
    tokenId: bigint
    /**
     * mutation that was applied to the [`Token`](ep_multi_tokens::Token)
     */
    mutation: DefaultTokenMutation
}

/**
 * Units of a token were burned
 */
export interface MultiTokensEvent_Burned {
    __kind: 'Burned'
    /**
     * collection id of tokens burned
     */
    collectionId: bigint
    /**
     * the token id that was burned
     */
    tokenId: bigint
    /**
     * the account the tokens were burned from
     */
    accountId: Uint8Array
    /**
     * The amount that was burned for each token_id
     */
    amount: bigint
}

/**
 * A token was destroyed
 */
export interface MultiTokensEvent_TokenDestroyed {
    __kind: 'TokenDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) destroyed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) destroyed
     */
    tokenId: bigint
    /**
     * the [`AccountId`](frame_system::Config::AccountId) that destroyed the
     * [`Token`](ep_multi_tokens::Token)
     */
    caller: Uint8Array
}

/**
 * Units of a token were transferred
 */
export interface MultiTokensEvent_Transferred {
    __kind: 'Transferred'
    /**
     * collection_id of transferred collection
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) transferred
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that performed the transfer
     */
    operator: Uint8Array
    /**
     * transaction sender
     */
    from: Uint8Array
    /**
     * transaction recipient
     */
    to: Uint8Array
    /**
     * number of units transferred
     */
    amount: bigint
}

/**
 * Collection, token or account was frozen
 */
export interface MultiTokensEvent_Frozen {
    __kind: 'Frozen'
    value: Freeze
}

/**
 * Collection, token or account was unfrozen
 */
export interface MultiTokensEvent_Thawed {
    __kind: 'Thawed'
    value: Freeze
}

/**
 * New attribute has been set
 */
export interface MultiTokensEvent_AttributeSet {
    __kind: 'AttributeSet'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * [`TokenId`](Config::TokenId) of [`Token`](ep_multi_tokens::Token) modified
     */
    tokenId: (bigint | undefined)
    /**
     * key of attribute set
     */
    key: Uint8Array
    /**
     * value of attribute set
     */
    value: Uint8Array
}

/**
 * An attribute has been removed
 */
export interface MultiTokensEvent_AttributeRemoved {
    __kind: 'AttributeRemoved'
    /**
     * collectionId of collection modified
     */
    collectionId: bigint
    /**
     * tokenid of token modified
     */
    tokenId: (bigint | undefined)
    /**
     * key of attribute cleared
     */
    key: Uint8Array
}

/**
 * An approval took place. If `token_id` is `None`, it applies to the whole collection.
 */
export interface MultiTokensEvent_Approved {
    __kind: 'Approved'
    /**
     * The collection that was approved
     */
    collectionId: bigint
    /**
     * The token that was approved
     */
    tokenId: (bigint | undefined)
    /**
     * The account that made the approval
     */
    owner: Uint8Array
    /**
     * The account that was approved to operate
     */
    operator: Uint8Array
    /**
     * The amount approved for
     */
    amount: (bigint | undefined)
    /**
     * The expiration of the approval
     */
    expiration: (number | undefined)
}

/**
 * An unapproval took place. If `token_id` is `None`, it applies to the collection.
 */
export interface MultiTokensEvent_Unapproved {
    __kind: 'Unapproved'
    /**
     * The collection that was unapproved
     */
    collectionId: bigint
    /**
     * The token that was unapproved
     */
    tokenId: (bigint | undefined)
    /**
     * The account that `operator` was unapproved for
     */
    owner: Uint8Array
    /**
     * The account that was unapproved to operate
     */
    operator: Uint8Array
}

/**
 * A new collection account was created
 */
export interface MultiTokensEvent_CollectionAccountCreated {
    __kind: 'CollectionAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: Uint8Array
}

/**
 * A new token account was created
 */
export interface MultiTokensEvent_TokenAccountCreated {
    __kind: 'TokenAccountCreated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the account is created
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the account
     */
    accountId: Uint8Array
    /**
     * The balance that this account holds
     */
    balance: bigint
}

/**
 * A collection account was destroyed
 */
export interface MultiTokensEvent_CollectionAccountDestroyed {
    __kind: 'CollectionAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the destroyed account
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: Uint8Array
}

/**
 * A token account was destroyed
 */
export interface MultiTokensEvent_TokenAccountDestroyed {
    __kind: 'TokenAccountDestroyed'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the account is created
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) fof the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the destroyed account
     */
    accountId: Uint8Array
}

/**
 * Token units were reserved
 */
export interface MultiTokensEvent_Reserved {
    __kind: 'Reserved'
    /**
     * The collection in which token was reserved
     */
    collectionId: bigint
    /**
     * The token that was reserved
     */
    tokenId: bigint
    /**
     * The account that reserved the tokens
     */
    accountId: Uint8Array
    /**
     * The amount that was reserved
     */
    amount: bigint
    /**
     * The identifier of the reserves
     */
    reserveId: (Uint8Array | undefined)
}

/**
 * Token units were unreserved
 */
export interface MultiTokensEvent_Unreserved {
    __kind: 'Unreserved'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was unreserved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was unreserved
     */
    tokenId: bigint
    /**
     * The account that unreserved the tokens
     */
    accountId: Uint8Array
    /**
     * The amount that was unreserved
     */
    amount: bigint
    /**
     * The identifier of the unreserved tokens
     */
    reserveId: (Uint8Array | undefined)
}

/**
 * Reserved token units were moved
 */
export interface MultiTokensEvent_MovedReserves {
    __kind: 'MovedReserves'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: Uint8Array
    /**
     * The account that received the moved reserves
     */
    destination: Uint8Array
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId: (Uint8Array | undefined)
}

/**
 * Reserved token units were transferred
 */
export interface MultiTokensEvent_ReserveRepatriated {
    __kind: 'ReserveRepatriated'
    /**
     * The [`CollectionId`](Config::CollectionId) in which token was moved
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) that was moved
     */
    tokenId: bigint
    /**
     * The account that reserves were moved from
     */
    source: Uint8Array
    /**
     * The account that received the moved reserves
     */
    destination: Uint8Array
    /**
     * The amount that was moved
     */
    amount: bigint
    /**
     * The identifier of the moved reserves
     */
    reserveId: (Uint8Array | undefined)
}

/**
 * The balance of an account was set
 */
export interface MultiTokensEvent_BalanceSet {
    __kind: 'BalanceSet'
    /**
     * The [`CollectionId`](Config::CollectionId) for which balance was set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which balance was set
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that balance was set for
     */
    accountId: Uint8Array
    /**
     * The balance of the account
     */
    balance: bigint
    /**
     * The reserved balance of the account
     */
    reservedBalance: bigint
}

/**
 * Token units were withdrawn
 */
export interface MultiTokensEvent_Withdraw {
    __kind: 'Withdraw'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens withdrawn
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens withdrawn
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) withdrawn from
     */
    accountId: Uint8Array
    /**
     * The amount of tokens withdrawn
     */
    amount: bigint
}

/**
 * Token units were deposited
 */
export interface MultiTokensEvent_Deposit {
    __kind: 'Deposit'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens deposited
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens deposited
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) deposited to
     */
    accountId: Uint8Array
    /**
     * The amount of tokens deposited
     */
    amount: bigint
}

/**
 * An amount of tokens were slashed from account
 */
export interface MultiTokensEvent_Slashed {
    __kind: 'Slashed'
    /**
     * The [`CollectionId`](Config::CollectionId) of the tokens slashed
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the tokens slashed
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) slashed
     */
    accountId: Uint8Array
    /**
     * The amount of tokens slashed
     */
    amount: bigint
}

/**
 * Collection storage was set to `value`
 */
export interface MultiTokensEvent_CollectionUpdated {
    __kind: 'CollectionUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * new value of Collection storage
     */
    value: (Collection | undefined)
}

/**
 * Token storage was set to `value`
 */
export interface MultiTokensEvent_TokenUpdated {
    __kind: 'TokenUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) for which the value is set
     */
    tokenId: bigint
    /**
     * new value of Token storage
     */
    value: (Token | undefined)
}

/**
 * NextCollectionId storage was set to `collection_id`
 */
export interface MultiTokensEvent_NextCollectionIdUpdated {
    __kind: 'NextCollectionIdUpdated'
    collectionId: bigint
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_CollectionAccountUpdated {
    __kind: 'CollectionAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: Uint8Array
    /**
     * new value of TokenAccount storage
     */
    value: (CollectionAccount | undefined)
}

/**
 * TokenAccount storage was set to `value`
 */
export interface MultiTokensEvent_TokenAccountUpdated {
    __kind: 'TokenAccountUpdated'
    /**
     * The [`CollectionId`](Config::CollectionId) for which the value is set
     */
    collectionId: bigint
    /**
     * The [`TokenId`](Config::TokenId) of the destroyed account
     */
    tokenId: bigint
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owned the token account
     */
    accountId: Uint8Array
    /**
     * new value of TokenAccount storage
     */
    value: (TokenAccount | undefined)
}

/**
 * Migration stage updated
 */
export interface MultiTokensEvent_MigrationStatusUpdated {
    __kind: 'MigrationStatusUpdated'
    stage: MigrationStage
}

/**
 * Collections were claimed
 */
export interface MultiTokensEvent_ClaimedCollections {
    __kind: 'ClaimedCollections'
    /**
     * The account that received the claim
     */
    accountId: Uint8Array
    /**
     * The ethereum address
     */
    ethereumAddress: Uint8Array
    /**
     * The collection ids that were claimed
     */
    collectionIds: bigint[]
}

/**
 * Tokens were claimed
 */
export interface MultiTokensEvent_ClaimedTokens {
    __kind: 'ClaimedTokens'
    /**
     * The account that received the tokens
     */
    accountId: Uint8Array
    /**
     * The ethereum address
     */
    ethereumAddress: Uint8Array
    /**
     * The asset ids that were claimed
     */
    assetIds: AssetIdWithEth[]
    /**
     * This is true if there are still more tokens to claim
     */
    moreTokensRemain: boolean
}

/**
 * Claims tokens initiated
 */
export interface MultiTokensEvent_ClaimTokensInitiated {
    __kind: 'ClaimTokensInitiated'
    /**
     * The account that will receive the tokens
     */
    accountId: Uint8Array
    /**
     * The ethereum address
     */
    ethereumAddress: Uint8Array
}

/**
 * Finished claiming the tokens
 */
export interface MultiTokensEvent_ClaimTokensCompleted {
    __kind: 'ClaimTokensCompleted'
    /**
     * The account that received the tokens
     */
    destination: Uint8Array
    /**
     * The ethereum address that initiated the claim
     */
    ethereumAddress: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type FuelTanksEvent = FuelTanksEvent_FuelTankCreated | FuelTanksEvent_FuelTankMutated | FuelTanksEvent_FuelTankDestroyed | FuelTanksEvent_CallDispatched | FuelTanksEvent_AccountAdded | FuelTanksEvent_AccountRemoved | FuelTanksEvent_AccountRuleDataRemoved | FuelTanksEvent_RuleSetInserted | FuelTanksEvent_RuleSetRemoved | FuelTanksEvent_FreezeStateMutated | FuelTanksEvent_DispatchFailed | FuelTanksEvent_ConsumptionSet

/**
 * A new [`FuelTank`] was created.
 */
export interface FuelTanksEvent_FuelTankCreated {
    __kind: 'FuelTankCreated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that owns the [`FuelTank`]
     */
    owner: Uint8Array
    /**
     * The name of the [`FuelTank`]
     */
    name: Uint8Array
    /**
     * The account id of the [`FuelTank`]
     */
    tankId: Uint8Array
}

/**
 * A [`FuelTank`] was mutated
 */
export interface FuelTanksEvent_FuelTankMutated {
    __kind: 'FuelTankMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The mutation that was applied
     */
    mutation: DefaultTankMutation
}

/**
 * A [`FuelTank`] was destroyed
 */
export interface FuelTanksEvent_FuelTankDestroyed {
    __kind: 'FuelTankDestroyed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
}

/**
 * A call was dispatched through a [`FuelTank`].
 */
export interface FuelTanksEvent_CallDispatched {
    __kind: 'CallDispatched'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: Uint8Array
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
}

/**
 * An account was added to a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountAdded {
    __kind: 'AccountAdded'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was added
     */
    userId: Uint8Array
    /**
     * The deposit reserved by the [`FuelTank`] for this account
     */
    tankDeposit: bigint
    /**
     * The deposit reserved by the user for this account
     */
    userDeposit: bigint
    /**
     * The amount the fuel tank has transferred to this account
     */
    totalReceived: bigint
}

/**
 * An account was removed from a [`FuelTank`]
 */
export interface FuelTanksEvent_AccountRemoved {
    __kind: 'AccountRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: Uint8Array
}

/**
 * Account data of [`AccountId`](frame_system::Config::AccountId) was removed from
 * [`RuleSetId`](Config::RuleSetId)
 */
export interface FuelTanksEvent_AccountRuleDataRemoved {
    __kind: 'AccountRuleDataRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that was removed
     */
    userId: Uint8Array
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
    /**
     * The [`DispatchRuleKind`] that was removed
     */
    ruleKind: DispatchRuleKind
}

/**
 * A new rule set was added to [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetInserted {
    __kind: 'RuleSetInserted'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The id of the rule set that was added
     */
    ruleSetId: number
}

/**
 * A rule set was removed from [`FuelTank`]
 */
export interface FuelTanksEvent_RuleSetRemoved {
    __kind: 'RuleSetRemoved'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
}

/**
 * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
 */
export interface FuelTanksEvent_FreezeStateMutated {
    __kind: 'FreezeStateMutated'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The possible [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId: (number | undefined)
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
}

/**
 * The dispatch of a call has failed
 */
export interface FuelTanksEvent_DispatchFailed {
    __kind: 'DispatchFailed'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The [`AccountId`](frame_system::Config::AccountId) that dispatched the call
     */
    caller: Uint8Array
    /**
     * The error
     */
    error: DispatchError
}

/**
 * The consumption for an account was set for a rule set on a [`FuelTank`]
 */
export interface FuelTanksEvent_ConsumptionSet {
    __kind: 'ConsumptionSet'
    /**
     * The [`AccountId`](frame_system::Config::AccountId) of the [`FuelTank`]
     */
    tankId: Uint8Array
    /**
     * The possible user [`AccountId`](frame_system::Config::AccountId) whose consumption
     * was set
     */
    userId: (Uint8Array | undefined)
    /**
     * The [`RuleSetId`](Config::RuleSetId)
     */
    ruleSetId: number
    /**
     * The new [`Consumption`](crate::Consumption)
     */
    consumption: Consumption
}

/**
 * The pallet's event type.
 */
export type ExtrinsicPauseEvent = ExtrinsicPauseEvent_PalletPaused | ExtrinsicPauseEvent_PalletResumed | ExtrinsicPauseEvent_ExtrinsicPaused | ExtrinsicPauseEvent_ExtrinsicResumed

/**
 * All pallet extrinsics are paused.
 */
export interface ExtrinsicPauseEvent_PalletPaused {
    __kind: 'PalletPaused'
    palletName: Uint8Array
}

/**
 * All pallet extrinsics are resumed.
 */
export interface ExtrinsicPauseEvent_PalletResumed {
    __kind: 'PalletResumed'
    palletName: Uint8Array
}

/**
 * Extrinsic is paused.
 */
export interface ExtrinsicPauseEvent_ExtrinsicPaused {
    __kind: 'ExtrinsicPaused'
    palletName: Uint8Array
    extrinsicName: Uint8Array
}

/**
 * Extrinsic is resumed
 */
export interface ExtrinsicPauseEvent_ExtrinsicResumed {
    __kind: 'ExtrinsicResumed'
    palletName: Uint8Array
    extrinsicName: Uint8Array
}

/**
 * The Event for this pallet
 */
export type MarketplaceEvent = MarketplaceEvent_ListingCreated | MarketplaceEvent_ListingCancelled | MarketplaceEvent_ListingFilled | MarketplaceEvent_BidPlaced | MarketplaceEvent_AuctionFinalized | MarketplaceEvent_ProtocolFeeSet

/**
 * A listing was created
 */
export interface MarketplaceEvent_ListingCreated {
    __kind: 'ListingCreated'
    /**
     * Id for the listing
     */
    listingId: Uint8Array
    /**
     * The listing
     */
    listing: Listing
}

/**
 * A listing was cancelled
 */
export interface MarketplaceEvent_ListingCancelled {
    __kind: 'ListingCancelled'
    /**
     * Id for the listing
     */
    listingId: Uint8Array
}

/**
 * A listing was filled or partially filled
 */
export interface MarketplaceEvent_ListingFilled {
    __kind: 'ListingFilled'
    /**
     * ID of the listing
     */
    listingId: Uint8Array
    /**
     * account that filled the listing
     */
    buyer: Uint8Array
    /**
     * The amount that was filled
     */
    amountFilled: bigint
    /**
     * Amount remaining to be filled
     */
    amountRemaining: bigint
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * A bid was placed
 */
export interface MarketplaceEvent_BidPlaced {
    __kind: 'BidPlaced'
    /**
     * ID of the listing
     */
    listingId: Uint8Array
    /**
     * The bid that was placed
     */
    bid: Bid
}

/**
 * An auction was finalized
 */
export interface MarketplaceEvent_AuctionFinalized {
    __kind: 'AuctionFinalized'
    /**
     * The listing id
     */
    listingId: Uint8Array
    /**
     * The bid that won
     */
    winningBid: (Bid | undefined)
    /**
     * Amount paid as protocol fee
     */
    protocolFee: bigint
    /**
     * Amount that went to royalties
     */
    royalty: bigint
}

/**
 * Protocol fee was set
 */
export interface MarketplaceEvent_ProtocolFeeSet {
    __kind: 'ProtocolFeeSet'
    /**
     * The new protocol fee
     */
    protocolFee: number
}

/**
 * Events type.
 */
export type SchedulerEvent = SchedulerEvent_Scheduled | SchedulerEvent_Canceled | SchedulerEvent_Dispatched | SchedulerEvent_CallUnavailable | SchedulerEvent_PeriodicFailed | SchedulerEvent_PermanentlyOverweight

/**
 * Scheduled some task.
 */
export interface SchedulerEvent_Scheduled {
    __kind: 'Scheduled'
    when: number
    index: number
}

/**
 * Canceled some task.
 */
export interface SchedulerEvent_Canceled {
    __kind: 'Canceled'
    when: number
    index: number
}

/**
 * Dispatched some task.
 */
export interface SchedulerEvent_Dispatched {
    __kind: 'Dispatched'
    task: [number, number]
    id: (Uint8Array | undefined)
    result: Type_55
}

/**
 * The call for the provided hash was not found so the task has been aborted.
 */
export interface SchedulerEvent_CallUnavailable {
    __kind: 'CallUnavailable'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * The given task was unable to be renewed since the agenda is full at that block.
 */
export interface SchedulerEvent_PeriodicFailed {
    __kind: 'PeriodicFailed'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * The given task can never be executed since it is overweight.
 */
export interface SchedulerEvent_PermanentlyOverweight {
    __kind: 'PermanentlyOverweight'
    task: [number, number]
    id: (Uint8Array | undefined)
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PreimageEvent = PreimageEvent_Noted | PreimageEvent_Requested | PreimageEvent_Cleared

/**
 * A preimage has been noted.
 */
export interface PreimageEvent_Noted {
    __kind: 'Noted'
    hash: Uint8Array
}

/**
 * A preimage has been requested.
 */
export interface PreimageEvent_Requested {
    __kind: 'Requested'
    hash: Uint8Array
}

/**
 * A preimage has ben cleared.
 */
export interface PreimageEvent_Cleared {
    __kind: 'Cleared'
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ConvictionVotingEvent = ConvictionVotingEvent_Delegated | ConvictionVotingEvent_Undelegated

/**
 * An account has delegated their vote to another account. \[who, target\]
 */
export interface ConvictionVotingEvent_Delegated {
    __kind: 'Delegated'
    value: [Uint8Array, Uint8Array]
}

/**
 * An \[account\] has cancelled a previous delegation operation.
 */
export interface ConvictionVotingEvent_Undelegated {
    __kind: 'Undelegated'
    value: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ReferendaEvent = ReferendaEvent_Submitted | ReferendaEvent_DecisionDepositPlaced | ReferendaEvent_DecisionDepositRefunded | ReferendaEvent_DepositSlashed | ReferendaEvent_DecisionStarted | ReferendaEvent_ConfirmStarted | ReferendaEvent_ConfirmAborted | ReferendaEvent_Confirmed | ReferendaEvent_Approved | ReferendaEvent_Rejected | ReferendaEvent_TimedOut | ReferendaEvent_Cancelled | ReferendaEvent_Killed | ReferendaEvent_SubmissionDepositRefunded | ReferendaEvent_MetadataSet | ReferendaEvent_MetadataCleared

/**
 * A referendum has been submitted.
 */
export interface ReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * The decision deposit has been placed.
 */
export interface ReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface ReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A deposit has been slashaed.
 */
export interface ReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface ReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Tally
}

export interface ReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface ReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface ReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface ReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface ReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been timed out without being decided.
 */
export interface ReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been cancelled.
 */
export interface ReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * A referendum has been killed.
 */
export interface ReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Tally
}

/**
 * The submission deposit has been refunded.
 */
export interface ReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * Metadata for a referendum has been set.
 */
export interface ReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface ReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type WhitelistEvent = WhitelistEvent_CallWhitelisted | WhitelistEvent_WhitelistedCallRemoved | WhitelistEvent_WhitelistedCallDispatched

export interface WhitelistEvent_CallWhitelisted {
    __kind: 'CallWhitelisted'
    callHash: Uint8Array
}

export interface WhitelistEvent_WhitelistedCallRemoved {
    __kind: 'WhitelistedCallRemoved'
    callHash: Uint8Array
}

export interface WhitelistEvent_WhitelistedCallDispatched {
    __kind: 'WhitelistedCallDispatched'
    callHash: Uint8Array
    result: Result<PostDispatchInfo, DispatchErrorWithPostInfo>
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type FellowshipCollectiveEvent = FellowshipCollectiveEvent_MemberAdded | FellowshipCollectiveEvent_RankChanged | FellowshipCollectiveEvent_MemberRemoved | FellowshipCollectiveEvent_Voted

/**
 * A member `who` has been added.
 */
export interface FellowshipCollectiveEvent_MemberAdded {
    __kind: 'MemberAdded'
    who: Uint8Array
}

/**
 * The member `who`se rank has been changed to the given `rank`.
 */
export interface FellowshipCollectiveEvent_RankChanged {
    __kind: 'RankChanged'
    who: Uint8Array
    rank: number
}

/**
 * The member `who` of given `rank` has been removed from the collective.
 */
export interface FellowshipCollectiveEvent_MemberRemoved {
    __kind: 'MemberRemoved'
    who: Uint8Array
    rank: number
}

/**
 * The member `who` has voted for the `poll` with the given `vote` leading to an updated
 * `tally`.
 */
export interface FellowshipCollectiveEvent_Voted {
    __kind: 'Voted'
    who: Uint8Array
    poll: number
    vote: VoteRecord
    tally: Type_649
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type FellowshipReferendaEvent = FellowshipReferendaEvent_Submitted | FellowshipReferendaEvent_DecisionDepositPlaced | FellowshipReferendaEvent_DecisionDepositRefunded | FellowshipReferendaEvent_DepositSlashed | FellowshipReferendaEvent_DecisionStarted | FellowshipReferendaEvent_ConfirmStarted | FellowshipReferendaEvent_ConfirmAborted | FellowshipReferendaEvent_Confirmed | FellowshipReferendaEvent_Approved | FellowshipReferendaEvent_Rejected | FellowshipReferendaEvent_TimedOut | FellowshipReferendaEvent_Cancelled | FellowshipReferendaEvent_Killed | FellowshipReferendaEvent_SubmissionDepositRefunded | FellowshipReferendaEvent_MetadataSet | FellowshipReferendaEvent_MetadataCleared

/**
 * A referendum has been submitted.
 */
export interface FellowshipReferendaEvent_Submitted {
    __kind: 'Submitted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
}

/**
 * The decision deposit has been placed.
 */
export interface FellowshipReferendaEvent_DecisionDepositPlaced {
    __kind: 'DecisionDepositPlaced'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * The decision deposit has been refunded.
 */
export interface FellowshipReferendaEvent_DecisionDepositRefunded {
    __kind: 'DecisionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A deposit has been slashaed.
 */
export interface FellowshipReferendaEvent_DepositSlashed {
    __kind: 'DepositSlashed'
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * A referendum has moved into the deciding phase.
 */
export interface FellowshipReferendaEvent_DecisionStarted {
    __kind: 'DecisionStarted'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The track (and by extension proposal dispatch origin) of this referendum.
     */
    track: number
    /**
     * The proposal for the referendum.
     */
    proposal: Bounded
    /**
     * The current tally of votes in this referendum.
     */
    tally: Type_649
}

export interface FellowshipReferendaEvent_ConfirmStarted {
    __kind: 'ConfirmStarted'
    /**
     * Index of the referendum.
     */
    index: number
}

export interface FellowshipReferendaEvent_ConfirmAborted {
    __kind: 'ConfirmAborted'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A referendum has ended its confirmation phase and is ready for approval.
 */
export interface FellowshipReferendaEvent_Confirmed {
    __kind: 'Confirmed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_649
}

/**
 * A referendum has been approved and its proposal has been scheduled.
 */
export interface FellowshipReferendaEvent_Approved {
    __kind: 'Approved'
    /**
     * Index of the referendum.
     */
    index: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface FellowshipReferendaEvent_Rejected {
    __kind: 'Rejected'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_649
}

/**
 * A referendum has been timed out without being decided.
 */
export interface FellowshipReferendaEvent_TimedOut {
    __kind: 'TimedOut'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_649
}

/**
 * A referendum has been cancelled.
 */
export interface FellowshipReferendaEvent_Cancelled {
    __kind: 'Cancelled'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_649
}

/**
 * A referendum has been killed.
 */
export interface FellowshipReferendaEvent_Killed {
    __kind: 'Killed'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The final tally of votes in this referendum.
     */
    tally: Type_649
}

/**
 * The submission deposit has been refunded.
 */
export interface FellowshipReferendaEvent_SubmissionDepositRefunded {
    __kind: 'SubmissionDepositRefunded'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * The account who placed the deposit.
     */
    who: Uint8Array
    /**
     * The amount placed by the account.
     */
    amount: bigint
}

/**
 * Metadata for a referendum has been set.
 */
export interface FellowshipReferendaEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata for a referendum has been cleared.
 */
export interface FellowshipReferendaEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Index of the referendum.
     */
    index: number
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type IdentityEvent = IdentityEvent_IdentitySet | IdentityEvent_IdentityCleared | IdentityEvent_IdentityKilled | IdentityEvent_JudgementRequested | IdentityEvent_JudgementUnrequested | IdentityEvent_JudgementGiven | IdentityEvent_RegistrarAdded | IdentityEvent_SubIdentityAdded | IdentityEvent_SubIdentityRemoved | IdentityEvent_SubIdentityRevoked

/**
 * A name was set or reset (which will remove all judgements).
 */
export interface IdentityEvent_IdentitySet {
    __kind: 'IdentitySet'
    who: Uint8Array
}

/**
 * A name was cleared, and the given balance returned.
 */
export interface IdentityEvent_IdentityCleared {
    __kind: 'IdentityCleared'
    who: Uint8Array
    deposit: bigint
}

/**
 * A name was removed and the given balance slashed.
 */
export interface IdentityEvent_IdentityKilled {
    __kind: 'IdentityKilled'
    who: Uint8Array
    deposit: bigint
}

/**
 * A judgement was asked from a registrar.
 */
export interface IdentityEvent_JudgementRequested {
    __kind: 'JudgementRequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement request was retracted.
 */
export interface IdentityEvent_JudgementUnrequested {
    __kind: 'JudgementUnrequested'
    who: Uint8Array
    registrarIndex: number
}

/**
 * A judgement was given by a registrar.
 */
export interface IdentityEvent_JudgementGiven {
    __kind: 'JudgementGiven'
    target: Uint8Array
    registrarIndex: number
}

/**
 * A registrar was added.
 */
export interface IdentityEvent_RegistrarAdded {
    __kind: 'RegistrarAdded'
    registrarIndex: number
}

/**
 * A sub-identity was added to an identity and the deposit paid.
 */
export interface IdentityEvent_SubIdentityAdded {
    __kind: 'SubIdentityAdded'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was removed from an identity and the deposit freed.
 */
export interface IdentityEvent_SubIdentityRemoved {
    __kind: 'SubIdentityRemoved'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * A sub-identity was cleared, and the given deposit repatriated from the
 * main identity account to the sub-identity account.
 */
export interface IdentityEvent_SubIdentityRevoked {
    __kind: 'SubIdentityRevoked'
    sub: Uint8Array
    main: Uint8Array
    deposit: bigint
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type VoteManagerEvent = VoteManagerEvent_Voted

/**
 * An account has voted in a referendum
 */
export interface VoteManagerEvent_Voted {
    __kind: 'Voted'
    voter: Uint8Array
    pollIndex: number
    vote: AccountVote
}

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export type AllowedSlots = AllowedSlots_PrimarySlots | AllowedSlots_PrimaryAndSecondaryPlainSlots | AllowedSlots_PrimaryAndSecondaryVRFSlots

export interface AllowedSlots_PrimarySlots {
    __kind: 'PrimarySlots'
}

export interface AllowedSlots_PrimaryAndSecondaryPlainSlots {
    __kind: 'PrimaryAndSecondaryPlainSlots'
}

export interface AllowedSlots_PrimaryAndSecondaryVRFSlots {
    __kind: 'PrimaryAndSecondaryVRFSlots'
}

export interface NposSolution16 {
    votes1: [number, number][]
    votes2: [number, [number, number], number][]
    votes3: [number, [number, number][], number][]
    votes4: [number, [number, number][], number][]
    votes5: [number, [number, number][], number][]
    votes6: [number, [number, number][], number][]
    votes7: [number, [number, number][], number][]
    votes8: [number, [number, number][], number][]
    votes9: [number, [number, number][], number][]
    votes10: [number, [number, number][], number][]
    votes11: [number, [number, number][], number][]
    votes12: [number, [number, number][], number][]
    votes13: [number, [number, number][], number][]
    votes14: [number, [number, number][], number][]
    votes15: [number, [number, number][], number][]
    votes16: [number, [number, number][], number][]
}

export type Equivocation = Equivocation_Prevote | Equivocation_Precommit

export interface Equivocation_Prevote {
    __kind: 'Prevote'
    value: Type_390
}

export interface Equivocation_Precommit {
    __kind: 'Precommit'
    value: Type_395
}

export interface OpaqueNetworkState {
    peerId: Uint8Array
    externalAddresses: Uint8Array[]
}

export type V4PvfPrepTimeoutKind = V4PvfPrepTimeoutKind_Precheck | V4PvfPrepTimeoutKind_Lenient

export interface V4PvfPrepTimeoutKind_Precheck {
    __kind: 'Precheck'
}

export interface V4PvfPrepTimeoutKind_Lenient {
    __kind: 'Lenient'
}

export type V4PvfExecTimeoutKind = V4PvfExecTimeoutKind_Backing | V4PvfExecTimeoutKind_Approval

export interface V4PvfExecTimeoutKind_Backing {
    __kind: 'Backing'
}

export interface V4PvfExecTimeoutKind_Approval {
    __kind: 'Approval'
}

export interface V4UncheckedSigned {
    payload: Uint8Array
    validatorIndex: number
    signature: Uint8Array
}

export interface V4BackedCandidate {
    candidate: V4CommittedCandidateReceipt
    validityVotes: V4ValidityAttestation[]
    validatorIndices: Uint8Array
}

export interface V4DisputeStatementSet {
    candidateHash: Uint8Array
    session: number
    statements: [V4DisputeStatement, number, Uint8Array][]
}

export interface DisputesTimeSlot {
    sessionIndex: number
    candidateHash: Uint8Array
}

export type SlashingOffenceKind = SlashingOffenceKind_ForInvalid | SlashingOffenceKind_AgainstValid

export interface SlashingOffenceKind_ForInvalid {
    __kind: 'ForInvalid'
}

export interface SlashingOffenceKind_AgainstValid {
    __kind: 'AgainstValid'
}

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V2Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V2Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V2Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V2Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V2Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface V2Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V2Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V2Instruction[]
}

export interface V2Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V2Instruction[]
}

export interface V2Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V2Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface V2Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V2Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type V3Instruction = V3Instruction_WithdrawAsset | V3Instruction_ReserveAssetDeposited | V3Instruction_ReceiveTeleportedAsset | V3Instruction_QueryResponse | V3Instruction_TransferAsset | V3Instruction_TransferReserveAsset | V3Instruction_Transact | V3Instruction_HrmpNewChannelOpenRequest | V3Instruction_HrmpChannelAccepted | V3Instruction_HrmpChannelClosing | V3Instruction_ClearOrigin | V3Instruction_DescendOrigin | V3Instruction_ReportError | V3Instruction_DepositAsset | V3Instruction_DepositReserveAsset | V3Instruction_ExchangeAsset | V3Instruction_InitiateReserveWithdraw | V3Instruction_InitiateTeleport | V3Instruction_ReportHolding | V3Instruction_BuyExecution | V3Instruction_RefundSurplus | V3Instruction_SetErrorHandler | V3Instruction_SetAppendix | V3Instruction_ClearError | V3Instruction_ClaimAsset | V3Instruction_Trap | V3Instruction_SubscribeVersion | V3Instruction_UnsubscribeVersion | V3Instruction_BurnAsset | V3Instruction_ExpectAsset | V3Instruction_ExpectOrigin | V3Instruction_ExpectError | V3Instruction_ExpectTransactStatus | V3Instruction_QueryPallet | V3Instruction_ExpectPallet | V3Instruction_ReportTransactStatus | V3Instruction_ClearTransactStatus | V3Instruction_UniversalOrigin | V3Instruction_ExportMessage | V3Instruction_LockAsset | V3Instruction_UnlockAsset | V3Instruction_NoteUnlockable | V3Instruction_RequestUnlock | V3Instruction_SetFeesMode | V3Instruction_SetTopic | V3Instruction_ClearTopic | V3Instruction_AliasOrigin | V3Instruction_UnpaidExecution

export interface V3Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface V3Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface V3Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface V3Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface V3Instruction_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V3Instruction_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V3Instruction_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V3Instruction_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface V3Instruction_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface V3Instruction_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface V3Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface V3Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface V3Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface V3Instruction_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface V3Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface V3Instruction_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface V3Instruction_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: V3Instruction[]
}

export interface V3Instruction_SetAppendix {
    __kind: 'SetAppendix'
    value: V3Instruction[]
}

export interface V3Instruction_ClearError {
    __kind: 'ClearError'
}

export interface V3Instruction_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface V3Instruction_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Instruction_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface V3Instruction_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface V3Instruction_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface V3Instruction_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface V3Instruction_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface V3Instruction_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface V3Instruction_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface V3Instruction_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface V3Instruction_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface V3Instruction_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface V3Instruction_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface V3Instruction_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface V3Instruction_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface V3Instruction_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface V3Instruction_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface V3Instruction_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface V3Instruction_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface V3Instruction_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface V3Instruction_ClearTopic {
    __kind: 'ClearTopic'
}

export interface V3Instruction_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface V3Instruction_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
}

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
}

export type Type_500 = Type_500_WithdrawAsset | Type_500_ReserveAssetDeposited | Type_500_ReceiveTeleportedAsset | Type_500_QueryResponse | Type_500_TransferAsset | Type_500_TransferReserveAsset | Type_500_Transact | Type_500_HrmpNewChannelOpenRequest | Type_500_HrmpChannelAccepted | Type_500_HrmpChannelClosing | Type_500_ClearOrigin | Type_500_DescendOrigin | Type_500_ReportError | Type_500_DepositAsset | Type_500_DepositReserveAsset | Type_500_ExchangeAsset | Type_500_InitiateReserveWithdraw | Type_500_InitiateTeleport | Type_500_QueryHolding | Type_500_BuyExecution | Type_500_RefundSurplus | Type_500_SetErrorHandler | Type_500_SetAppendix | Type_500_ClearError | Type_500_ClaimAsset | Type_500_Trap | Type_500_SubscribeVersion | Type_500_UnsubscribeVersion

export interface Type_500_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_500_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_500_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_500_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_500_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_500_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_500_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_500_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_500_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_500_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_500_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_500_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_500_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_500_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_500_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_500_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_500_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_500_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_500_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_500_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_500_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_500_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_500[]
}

export interface Type_500_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_500[]
}

export interface Type_500_ClearError {
    __kind: 'ClearError'
}

export interface Type_500_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_500_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_500_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_500_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_504 = Type_504_WithdrawAsset | Type_504_ReserveAssetDeposited | Type_504_ReceiveTeleportedAsset | Type_504_QueryResponse | Type_504_TransferAsset | Type_504_TransferReserveAsset | Type_504_Transact | Type_504_HrmpNewChannelOpenRequest | Type_504_HrmpChannelAccepted | Type_504_HrmpChannelClosing | Type_504_ClearOrigin | Type_504_DescendOrigin | Type_504_ReportError | Type_504_DepositAsset | Type_504_DepositReserveAsset | Type_504_ExchangeAsset | Type_504_InitiateReserveWithdraw | Type_504_InitiateTeleport | Type_504_ReportHolding | Type_504_BuyExecution | Type_504_RefundSurplus | Type_504_SetErrorHandler | Type_504_SetAppendix | Type_504_ClearError | Type_504_ClaimAsset | Type_504_Trap | Type_504_SubscribeVersion | Type_504_UnsubscribeVersion | Type_504_BurnAsset | Type_504_ExpectAsset | Type_504_ExpectOrigin | Type_504_ExpectError | Type_504_ExpectTransactStatus | Type_504_QueryPallet | Type_504_ExpectPallet | Type_504_ReportTransactStatus | Type_504_ClearTransactStatus | Type_504_UniversalOrigin | Type_504_ExportMessage | Type_504_LockAsset | Type_504_UnlockAsset | Type_504_NoteUnlockable | Type_504_RequestUnlock | Type_504_SetFeesMode | Type_504_SetTopic | Type_504_ClearTopic | Type_504_AliasOrigin | Type_504_UnpaidExecution

export interface Type_504_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_504_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_504_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_504_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_504_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_504_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_504_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_504_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_504_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_504_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_504_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_504_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_504_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_504_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_504_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_504_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_504_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_504_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_504_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_504_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_504_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_504_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_504[]
}

export interface Type_504_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_504[]
}

export interface Type_504_ClearError {
    __kind: 'ClearError'
}

export interface Type_504_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_504_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_504_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_504_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_504_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_504_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_504_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_504_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_504_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_504_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_504_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_504_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_504_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_504_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_504_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_504_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_504_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_504_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_504_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_504_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_504_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_504_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_504_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_504_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type V3Junctions = V3Junctions_Here | V3Junctions_X1 | V3Junctions_X2 | V3Junctions_X3 | V3Junctions_X4 | V3Junctions_X5 | V3Junctions_X6 | V3Junctions_X7 | V3Junctions_X8

export interface V3Junctions_Here {
    __kind: 'Here'
}

export interface V3Junctions_X1 {
    __kind: 'X1'
    value: V3Junction
}

export interface V3Junctions_X2 {
    __kind: 'X2'
    value: [V3Junction, V3Junction]
}

export interface V3Junctions_X3 {
    __kind: 'X3'
    value: [V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X4 {
    __kind: 'X4'
    value: [V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X5 {
    __kind: 'X5'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X6 {
    __kind: 'X6'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X7 {
    __kind: 'X7'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export interface V3Junctions_X8 {
    __kind: 'X8'
    value: [V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction, V3Junction]
}

export type UmpQueueId = UmpQueueId_Para

export interface UmpQueueId_Para {
    __kind: 'Para'
    value: number
}

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export type Type_183 = Type_183_NoMutation | Type_183_SomeMutation

export interface Type_183_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_183_SomeMutation {
    __kind: 'SomeMutation'
    value: (DefaultRoyalty | undefined)
}

export type Type_196 = Type_196_NoMutation | Type_196_SomeMutation

export interface Type_196_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_196_SomeMutation {
    __kind: 'SomeMutation'
    value: (TokenMarketBehavior | undefined)
}

export type Type_199 = Type_199_NoMutation | Type_199_SomeMutation

export interface Type_199_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_199_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_200 = Type_200_NoMutation | Type_200_SomeMutation

export interface Type_200_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_200_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type FreezeType = FreezeType_Collection | FreezeType_Token | FreezeType_CollectionAccount | FreezeType_TokenAccount

export interface FreezeType_Collection {
    __kind: 'Collection'
}

export interface FreezeType_Token {
    __kind: 'Token'
    tokenId: bigint
    freezeState: (FreezeState | undefined)
}

export interface FreezeType_CollectionAccount {
    __kind: 'CollectionAccount'
    value: Uint8Array
}

export interface FreezeType_TokenAccount {
    __kind: 'TokenAccount'
    tokenId: bigint
    accountId: Uint8Array
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
}

export type Sufficiency = Sufficiency_Sufficient | Sufficiency_Insufficient

export interface Sufficiency_Sufficient {
    __kind: 'Sufficient'
}

export interface Sufficiency_Insufficient {
    __kind: 'Insufficient'
    unitPrice: bigint
}

export type DefaultTokenMetadata = DefaultTokenMetadata_Native | DefaultTokenMetadata_Foreign

export interface DefaultTokenMetadata_Native {
    __kind: 'Native'
}

export interface DefaultTokenMetadata_Foreign {
    __kind: 'Foreign'
    value: DefaultForeignTokenMetadata
}

export interface Approval {
    amount: bigint
    expiration: (number | undefined)
}

export type Type_257 = Type_257_NoMutation | Type_257_SomeMutation

export interface Type_257_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_257_SomeMutation {
    __kind: 'SomeMutation'
    value: (UserAccountManagement | undefined)
}

export interface VoteMessage {
    commitment: Commitment
    id: Uint8Array
    signature: Uint8Array
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable | DispatchError_RootNotAllowed

export interface DispatchError_Other {
    __kind: 'Other'
}

export interface DispatchError_CannotLookup {
    __kind: 'CannotLookup'
}

export interface DispatchError_BadOrigin {
    __kind: 'BadOrigin'
}

export interface DispatchError_Module {
    __kind: 'Module'
    value: ModuleError
}

export interface DispatchError_ConsumerRemaining {
    __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
    __kind: 'NoProviders'
}

export interface DispatchError_TooManyConsumers {
    __kind: 'TooManyConsumers'
}

export interface DispatchError_Token {
    __kind: 'Token'
    value: TokenError
}

export interface DispatchError_Arithmetic {
    __kind: 'Arithmetic'
    value: ArithmeticError
}

export interface DispatchError_Transactional {
    __kind: 'Transactional'
    value: TransactionalError
}

export interface DispatchError_Exhausted {
    __kind: 'Exhausted'
}

export interface DispatchError_Corruption {
    __kind: 'Corruption'
}

export interface DispatchError_Unavailable {
    __kind: 'Unavailable'
}

export interface DispatchError_RootNotAllowed {
    __kind: 'RootNotAllowed'
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type ElectionCompute = ElectionCompute_OnChain | ElectionCompute_Signed | ElectionCompute_Unsigned | ElectionCompute_Fallback | ElectionCompute_Emergency

export interface ElectionCompute_OnChain {
    __kind: 'OnChain'
}

export interface ElectionCompute_Signed {
    __kind: 'Signed'
}

export interface ElectionCompute_Unsigned {
    __kind: 'Unsigned'
}

export interface ElectionCompute_Fallback {
    __kind: 'Fallback'
}

export interface ElectionCompute_Emergency {
    __kind: 'Emergency'
}

export type Phase = Phase_Off | Phase_Signed | Phase_Unsigned | Phase_Emergency

export interface Phase_Off {
    __kind: 'Off'
}

export interface Phase_Signed {
    __kind: 'Signed'
}

export interface Phase_Unsigned {
    __kind: 'Unsigned'
    value: [boolean, number]
}

export interface Phase_Emergency {
    __kind: 'Emergency'
}

export type Forcing = Forcing_NotForcing | Forcing_ForceNew | Forcing_ForceNone | Forcing_ForceAlways

export interface Forcing_NotForcing {
    __kind: 'NotForcing'
}

export interface Forcing_ForceNew {
    __kind: 'ForceNew'
}

export interface Forcing_ForceNone {
    __kind: 'ForceNone'
}

export interface Forcing_ForceAlways {
    __kind: 'ForceAlways'
}

export type Type_55 = Type_55_Ok | Type_55_Err

export interface Type_55_Ok {
    __kind: 'Ok'
}

export interface Type_55_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface Exposure {
    total: bigint
    own: bigint
    others: IndividualExposure[]
}

export interface CommissionPayment {
    beneficiary: Uint8Array
    amount: bigint
}

export interface V4CandidateReceipt {
    descriptor: V4CandidateDescriptor
    commitmentsHash: Uint8Array
}

export type DisputeLocation = DisputeLocation_Local | DisputeLocation_Remote

export interface DisputeLocation_Local {
    __kind: 'Local'
}

export interface DisputeLocation_Remote {
    __kind: 'Remote'
}

export type DisputeResult = DisputeResult_Valid | DisputeResult_Invalid

export interface DisputeResult_Valid {
    __kind: 'Valid'
}

export interface DisputeResult_Invalid {
    __kind: 'Invalid'
}

export type V3Outcome = V3Outcome_Complete | V3Outcome_Incomplete | V3Outcome_Error

export interface V3Outcome_Complete {
    __kind: 'Complete'
    value: Weight
}

export interface V3Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [Weight, V3Error]
}

export interface V3Outcome_Error {
    __kind: 'Error'
    value: V3Error
}

export type V3Response = V3Response_Null | V3Response_Assets | V3Response_ExecutionResult | V3Response_Version | V3Response_PalletsInfo | V3Response_DispatchResult

export interface V3Response_Null {
    __kind: 'Null'
}

export interface V3Response_Assets {
    __kind: 'Assets'
    value: V3MultiAsset[]
}

export interface V3Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V3Error] | undefined)
}

export interface V3Response_Version {
    __kind: 'Version'
    value: number
}

export interface V3Response_PalletsInfo {
    __kind: 'PalletsInfo'
    value: V3PalletInfo[]
}

export interface V3Response_DispatchResult {
    __kind: 'DispatchResult'
    value: V3MaybeErrorCode
}

export type V3Error = V3Error_Overflow | V3Error_Unimplemented | V3Error_UntrustedReserveLocation | V3Error_UntrustedTeleportLocation | V3Error_LocationFull | V3Error_LocationNotInvertible | V3Error_BadOrigin | V3Error_InvalidLocation | V3Error_AssetNotFound | V3Error_FailedToTransactAsset | V3Error_NotWithdrawable | V3Error_LocationCannotHold | V3Error_ExceedsMaxMessageSize | V3Error_DestinationUnsupported | V3Error_Transport | V3Error_Unroutable | V3Error_UnknownClaim | V3Error_FailedToDecode | V3Error_MaxWeightInvalid | V3Error_NotHoldingFees | V3Error_TooExpensive | V3Error_Trap | V3Error_ExpectationFalse | V3Error_PalletNotFound | V3Error_NameMismatch | V3Error_VersionIncompatible | V3Error_HoldingWouldOverflow | V3Error_ExportError | V3Error_ReanchorFailed | V3Error_NoDeal | V3Error_FeesNotMet | V3Error_LockError | V3Error_NoPermission | V3Error_Unanchored | V3Error_NotDepositable | V3Error_UnhandledXcmVersion | V3Error_WeightLimitReached | V3Error_Barrier | V3Error_WeightNotComputable | V3Error_ExceedsStackLimit

export interface V3Error_Overflow {
    __kind: 'Overflow'
}

export interface V3Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V3Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V3Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V3Error_LocationFull {
    __kind: 'LocationFull'
}

export interface V3Error_LocationNotInvertible {
    __kind: 'LocationNotInvertible'
}

export interface V3Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V3Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V3Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V3Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V3Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V3Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V3Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V3Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V3Error_Transport {
    __kind: 'Transport'
}

export interface V3Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V3Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V3Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V3Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V3Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V3Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V3Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V3Error_ExpectationFalse {
    __kind: 'ExpectationFalse'
}

export interface V3Error_PalletNotFound {
    __kind: 'PalletNotFound'
}

export interface V3Error_NameMismatch {
    __kind: 'NameMismatch'
}

export interface V3Error_VersionIncompatible {
    __kind: 'VersionIncompatible'
}

export interface V3Error_HoldingWouldOverflow {
    __kind: 'HoldingWouldOverflow'
}

export interface V3Error_ExportError {
    __kind: 'ExportError'
}

export interface V3Error_ReanchorFailed {
    __kind: 'ReanchorFailed'
}

export interface V3Error_NoDeal {
    __kind: 'NoDeal'
}

export interface V3Error_FeesNotMet {
    __kind: 'FeesNotMet'
}

export interface V3Error_LockError {
    __kind: 'LockError'
}

export interface V3Error_NoPermission {
    __kind: 'NoPermission'
}

export interface V3Error_Unanchored {
    __kind: 'Unanchored'
}

export interface V3Error_NotDepositable {
    __kind: 'NotDepositable'
}

export interface V3Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V3Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: Weight
}

export interface V3Error_Barrier {
    __kind: 'Barrier'
}

export interface V3Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export interface V3Error_ExceedsStackLimit {
    __kind: 'ExceedsStackLimit'
}

export type ProcessMessageError = ProcessMessageError_BadFormat | ProcessMessageError_Corrupt | ProcessMessageError_Unsupported | ProcessMessageError_Overweight | ProcessMessageError_Yield

export interface ProcessMessageError_BadFormat {
    __kind: 'BadFormat'
}

export interface ProcessMessageError_Corrupt {
    __kind: 'Corrupt'
}

export interface ProcessMessageError_Unsupported {
    __kind: 'Unsupported'
}

export interface ProcessMessageError_Overweight {
    __kind: 'Overweight'
    value: Weight
}

export interface ProcessMessageError_Yield {
    __kind: 'Yield'
}

export type RootOrSigned = RootOrSigned_Root | RootOrSigned_Signed

export interface RootOrSigned_Root {
    __kind: 'Root'
}

export interface RootOrSigned_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export type MigrationStage = MigrationStage_NotStarted | MigrationStage_InProgress | MigrationStage_Completed | MigrationStage_Failed

export interface MigrationStage_NotStarted {
    __kind: 'NotStarted'
}

export interface MigrationStage_InProgress {
    __kind: 'InProgress'
}

export interface MigrationStage_Completed {
    __kind: 'Completed'
}

export interface MigrationStage_Failed {
    __kind: 'Failed'
}

export interface AssetIdWithEth {
    ethereumCollectionId: bigint
    collectionId: bigint
    tokenId: bigint
}

export interface Listing {
    seller: Uint8Array
    makeAssetId: AssetId
    takeAssetId: AssetId
    amount: bigint
    price: bigint
    minTakeValue: bigint
    feeSide: FeeSide
    creationBlock: number
    deposit: bigint
    salt: Uint8Array
    data: ListingData
    state: ListingState
}

export interface Bid {
    bidder: Uint8Array
    price: bigint
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export interface PostDispatchInfo {
    actualWeight: (Weight | undefined)
    paysFee: Pays
}

export interface DispatchErrorWithPostInfo {
    postInfo: PostDispatchInfo
    error: DispatchError
}

export type VoteRecord = VoteRecord_Aye | VoteRecord_Nay

export interface VoteRecord_Aye {
    __kind: 'Aye'
    value: number
}

export interface VoteRecord_Nay {
    __kind: 'Nay'
    value: number
}

export interface Type_649 {
    bareAyes: number
    ayes: number
    nays: number
}

export interface Digest {
    logs: DigestItem[]
}

export interface Type_390 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Prevote, Uint8Array]
    second: [Prevote, Uint8Array]
}

export interface Type_395 {
    roundNumber: bigint
    identity: Uint8Array
    first: [Precommit, Uint8Array]
    second: [Precommit, Uint8Array]
}

export interface V4CommittedCandidateReceipt {
    descriptor: V4CandidateDescriptor
    commitments: V4CandidateCommitments
}

export type V4ValidityAttestation = V4ValidityAttestation_Implicit | V4ValidityAttestation_Explicit

export interface V4ValidityAttestation_Implicit {
    __kind: 'Implicit'
    value: Uint8Array
}

export interface V4ValidityAttestation_Explicit {
    __kind: 'Explicit'
    value: Uint8Array
}

export type V4DisputeStatement = V4DisputeStatement_Valid | V4DisputeStatement_Invalid

export interface V4DisputeStatement_Valid {
    __kind: 'Valid'
    value: V4ValidDisputeStatementKind
}

export interface V4DisputeStatement_Invalid {
    __kind: 'Invalid'
    value: V4InvalidDisputeStatementKind
}

export type V2Junctions = V2Junctions_Here | V2Junctions_X1 | V2Junctions_X2 | V2Junctions_X3 | V2Junctions_X4 | V2Junctions_X5 | V2Junctions_X6 | V2Junctions_X7 | V2Junctions_X8

export interface V2Junctions_Here {
    __kind: 'Here'
}

export interface V2Junctions_X1 {
    __kind: 'X1'
    value: V2Junction
}

export interface V2Junctions_X2 {
    __kind: 'X2'
    value: [V2Junction, V2Junction]
}

export interface V2Junctions_X3 {
    __kind: 'X3'
    value: [V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X4 {
    __kind: 'X4'
    value: [V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X5 {
    __kind: 'X5'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X6 {
    __kind: 'X6'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X7 {
    __kind: 'X7'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export interface V2Junctions_X8 {
    __kind: 'X8'
    value: [V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction, V2Junction]
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V2MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2OriginKind = V2OriginKind_Native | V2OriginKind_SovereignAccount | V2OriginKind_Superuser | V2OriginKind_Xcm

export interface V2OriginKind_Native {
    __kind: 'Native'
}

export interface V2OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V2OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V2OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type V2MultiAssetFilter = V2MultiAssetFilter_Definite | V2MultiAssetFilter_Wild

export interface V2MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V2MultiAsset[]
}

export interface V2MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V2WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export interface V3QueryResponseInfo {
    destination: V3MultiLocation
    queryId: bigint
    maxWeight: Weight
}

export type V3MultiAssetFilter = V3MultiAssetFilter_Definite | V3MultiAssetFilter_Wild

export interface V3MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V3MultiAsset[]
}

export interface V3MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V3WildMultiAsset
}

export type V3MaybeErrorCode = V3MaybeErrorCode_Success | V3MaybeErrorCode_Error | V3MaybeErrorCode_TruncatedError

export interface V3MaybeErrorCode_Success {
    __kind: 'Success'
}

export interface V3MaybeErrorCode_Error {
    __kind: 'Error'
    value: Uint8Array
}

export interface V3MaybeErrorCode_TruncatedError {
    __kind: 'TruncatedError'
    value: Uint8Array
}

export type V3Junction = V3Junction_Parachain | V3Junction_AccountId32 | V3Junction_AccountIndex64 | V3Junction_AccountKey20 | V3Junction_PalletInstance | V3Junction_GeneralIndex | V3Junction_GeneralKey | V3Junction_OnlyChild | V3Junction_Plurality | V3Junction_GlobalConsensus

export interface V3Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V3Junction_AccountId32 {
    __kind: 'AccountId32'
    network: (V3NetworkId | undefined)
    id: Uint8Array
}

export interface V3Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: (V3NetworkId | undefined)
    index: bigint
}

export interface V3Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: (V3NetworkId | undefined)
    key: Uint8Array
}

export interface V3Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V3Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V3Junction_GeneralKey {
    __kind: 'GeneralKey'
    length: number
    data: Uint8Array
}

export interface V3Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V3Junction_Plurality {
    __kind: 'Plurality'
    id: V3BodyId
    part: V3BodyPart
}

export interface V3Junction_GlobalConsensus {
    __kind: 'GlobalConsensus'
    value: V3NetworkId
}

export type V3NetworkId = V3NetworkId_ByGenesis | V3NetworkId_ByFork | V3NetworkId_Polkadot | V3NetworkId_Kusama | V3NetworkId_Westend | V3NetworkId_Rococo | V3NetworkId_Wococo | V3NetworkId_Ethereum | V3NetworkId_BitcoinCore | V3NetworkId_BitcoinCash

export interface V3NetworkId_ByGenesis {
    __kind: 'ByGenesis'
    value: Uint8Array
}

export interface V3NetworkId_ByFork {
    __kind: 'ByFork'
    blockNumber: bigint
    blockHash: Uint8Array
}

export interface V3NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V3NetworkId_Kusama {
    __kind: 'Kusama'
}

export interface V3NetworkId_Westend {
    __kind: 'Westend'
}

export interface V3NetworkId_Rococo {
    __kind: 'Rococo'
}

export interface V3NetworkId_Wococo {
    __kind: 'Wococo'
}

export interface V3NetworkId_Ethereum {
    __kind: 'Ethereum'
    chainId: bigint
}

export interface V3NetworkId_BitcoinCore {
    __kind: 'BitcoinCore'
}

export interface V3NetworkId_BitcoinCash {
    __kind: 'BitcoinCash'
}

export type V2AssetId = V2AssetId_Concrete | V2AssetId_Abstract

export interface V2AssetId_Concrete {
    __kind: 'Concrete'
    value: V2MultiLocation
}

export interface V2AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V2Fungibility = V2Fungibility_Fungible | V2Fungibility_NonFungible

export interface V2Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V2Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V2AssetInstance
}

export type V3AssetId = V3AssetId_Concrete | V3AssetId_Abstract

export interface V3AssetId_Concrete {
    __kind: 'Concrete'
    value: V3MultiLocation
}

export interface V3AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V3Fungibility = V3Fungibility_Fungible | V3Fungibility_NonFungible

export interface V3Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V3Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V3AssetInstance
}

export interface DefaultMintPolicyDescriptor {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultMarketPolicyDescriptor {
    royalty: (DefaultRoyalty | undefined)
}

export interface DefaultMintPolicy {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultTransferPolicy {
    isFrozen: boolean
}

export interface DefaultMarketPolicy {
    royalty: (DefaultRoyalty | undefined)
}

export interface DefaultForeignTokenMetadata {
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V3MultiLocation | undefined)
    unitsPerSecond: (bigint | undefined)
    premintedSupply: bigint
}

export interface Commitment {
    payload: [Uint8Array, Uint8Array][]
    blockNumber: number
    validatorSetId: bigint
}

export type DispatchClass = DispatchClass_Normal | DispatchClass_Operational | DispatchClass_Mandatory

export interface DispatchClass_Normal {
    __kind: 'Normal'
}

export interface DispatchClass_Operational {
    __kind: 'Operational'
}

export interface DispatchClass_Mandatory {
    __kind: 'Mandatory'
}

export type Pays = Pays_Yes | Pays_No

export interface Pays_Yes {
    __kind: 'Yes'
}

export interface Pays_No {
    __kind: 'No'
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_FundsUnavailable | TokenError_OnlyProvider | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported | TokenError_CannotCreateHold | TokenError_NotExpendable | TokenError_Blocked

export interface TokenError_FundsUnavailable {
    __kind: 'FundsUnavailable'
}

export interface TokenError_OnlyProvider {
    __kind: 'OnlyProvider'
}

export interface TokenError_BelowMinimum {
    __kind: 'BelowMinimum'
}

export interface TokenError_CannotCreate {
    __kind: 'CannotCreate'
}

export interface TokenError_UnknownAsset {
    __kind: 'UnknownAsset'
}

export interface TokenError_Frozen {
    __kind: 'Frozen'
}

export interface TokenError_Unsupported {
    __kind: 'Unsupported'
}

export interface TokenError_CannotCreateHold {
    __kind: 'CannotCreateHold'
}

export interface TokenError_NotExpendable {
    __kind: 'NotExpendable'
}

export interface TokenError_Blocked {
    __kind: 'Blocked'
}

export type ArithmeticError = ArithmeticError_Underflow | ArithmeticError_Overflow | ArithmeticError_DivisionByZero

export interface ArithmeticError_Underflow {
    __kind: 'Underflow'
}

export interface ArithmeticError_Overflow {
    __kind: 'Overflow'
}

export interface ArithmeticError_DivisionByZero {
    __kind: 'DivisionByZero'
}

export type TransactionalError = TransactionalError_LimitReached | TransactionalError_NoLayer

export interface TransactionalError_LimitReached {
    __kind: 'LimitReached'
}

export interface TransactionalError_NoLayer {
    __kind: 'NoLayer'
}

export interface IndividualExposure {
    who: Uint8Array
    value: bigint
}

export interface V4CandidateDescriptor {
    paraId: number
    relayParent: Uint8Array
    collator: Uint8Array
    persistedValidationDataHash: Uint8Array
    povHash: Uint8Array
    erasureRoot: Uint8Array
    signature: Uint8Array
    paraHead: Uint8Array
    validationCodeHash: Uint8Array
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
}

export type FeeSide = FeeSide_NoFee | FeeSide_Make | FeeSide_Take

export interface FeeSide_NoFee {
    __kind: 'NoFee'
}

export interface FeeSide_Make {
    __kind: 'Make'
}

export interface FeeSide_Take {
    __kind: 'Take'
}

export type ListingData = ListingData_FixedPrice | ListingData_Auction

export interface ListingData_FixedPrice {
    __kind: 'FixedPrice'
}

export interface ListingData_Auction {
    __kind: 'Auction'
    value: AuctionData
}

export type ListingState = ListingState_FixedPrice | ListingState_Auction

export interface ListingState_FixedPrice {
    __kind: 'FixedPrice'
    amountFilled: bigint
}

export interface ListingState_Auction {
    __kind: 'Auction'
    value: AuctionState
}

export type DigestItem = DigestItem_PreRuntime | DigestItem_Consensus | DigestItem_Seal | DigestItem_Other | DigestItem_RuntimeEnvironmentUpdated

export interface DigestItem_PreRuntime {
    __kind: 'PreRuntime'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Consensus {
    __kind: 'Consensus'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Seal {
    __kind: 'Seal'
    value: [Uint8Array, Uint8Array]
}

export interface DigestItem_Other {
    __kind: 'Other'
    value: Uint8Array
}

export interface DigestItem_RuntimeEnvironmentUpdated {
    __kind: 'RuntimeEnvironmentUpdated'
}

export interface Prevote {
    targetHash: Uint8Array
    targetNumber: number
}

export interface Precommit {
    targetHash: Uint8Array
    targetNumber: number
}

export interface V4CandidateCommitments {
    upwardMessages: Uint8Array[]
    horizontalMessages: OutboundHrmpMessage[]
    newValidationCode: (Uint8Array | undefined)
    headData: Uint8Array
    processedDownwardMessages: number
    hrmpWatermark: number
}

export type V4ValidDisputeStatementKind = V4ValidDisputeStatementKind_Explicit | V4ValidDisputeStatementKind_BackingSeconded | V4ValidDisputeStatementKind_BackingValid | V4ValidDisputeStatementKind_ApprovalChecking

export interface V4ValidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export interface V4ValidDisputeStatementKind_BackingSeconded {
    __kind: 'BackingSeconded'
    value: Uint8Array
}

export interface V4ValidDisputeStatementKind_BackingValid {
    __kind: 'BackingValid'
    value: Uint8Array
}

export interface V4ValidDisputeStatementKind_ApprovalChecking {
    __kind: 'ApprovalChecking'
}

export type V4InvalidDisputeStatementKind = V4InvalidDisputeStatementKind_Explicit

export interface V4InvalidDisputeStatementKind_Explicit {
    __kind: 'Explicit'
}

export type V2Junction = V2Junction_Parachain | V2Junction_AccountId32 | V2Junction_AccountIndex64 | V2Junction_AccountKey20 | V2Junction_PalletInstance | V2Junction_GeneralIndex | V2Junction_GeneralKey | V2Junction_OnlyChild | V2Junction_Plurality

export interface V2Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V2Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V2NetworkId
    id: Uint8Array
}

export interface V2Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V2NetworkId
    index: bigint
}

export interface V2Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V2NetworkId
    key: Uint8Array
}

export interface V2Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V2Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V2Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V2Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V2Junction_Plurality {
    __kind: 'Plurality'
    id: V2BodyId
    part: V2BodyPart
}

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_MaxWeightInvalid | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

export interface V2Error_Overflow {
    __kind: 'Overflow'
}

export interface V2Error_Unimplemented {
    __kind: 'Unimplemented'
}

export interface V2Error_UntrustedReserveLocation {
    __kind: 'UntrustedReserveLocation'
}

export interface V2Error_UntrustedTeleportLocation {
    __kind: 'UntrustedTeleportLocation'
}

export interface V2Error_MultiLocationFull {
    __kind: 'MultiLocationFull'
}

export interface V2Error_MultiLocationNotInvertible {
    __kind: 'MultiLocationNotInvertible'
}

export interface V2Error_BadOrigin {
    __kind: 'BadOrigin'
}

export interface V2Error_InvalidLocation {
    __kind: 'InvalidLocation'
}

export interface V2Error_AssetNotFound {
    __kind: 'AssetNotFound'
}

export interface V2Error_FailedToTransactAsset {
    __kind: 'FailedToTransactAsset'
}

export interface V2Error_NotWithdrawable {
    __kind: 'NotWithdrawable'
}

export interface V2Error_LocationCannotHold {
    __kind: 'LocationCannotHold'
}

export interface V2Error_ExceedsMaxMessageSize {
    __kind: 'ExceedsMaxMessageSize'
}

export interface V2Error_DestinationUnsupported {
    __kind: 'DestinationUnsupported'
}

export interface V2Error_Transport {
    __kind: 'Transport'
}

export interface V2Error_Unroutable {
    __kind: 'Unroutable'
}

export interface V2Error_UnknownClaim {
    __kind: 'UnknownClaim'
}

export interface V2Error_FailedToDecode {
    __kind: 'FailedToDecode'
}

export interface V2Error_MaxWeightInvalid {
    __kind: 'MaxWeightInvalid'
}

export interface V2Error_NotHoldingFees {
    __kind: 'NotHoldingFees'
}

export interface V2Error_TooExpensive {
    __kind: 'TooExpensive'
}

export interface V2Error_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface V2Error_UnhandledXcmVersion {
    __kind: 'UnhandledXcmVersion'
}

export interface V2Error_WeightLimitReached {
    __kind: 'WeightLimitReached'
    value: bigint
}

export interface V2Error_Barrier {
    __kind: 'Barrier'
}

export interface V2Error_WeightNotComputable {
    __kind: 'WeightNotComputable'
}

export type V2WildMultiAsset = V2WildMultiAsset_All | V2WildMultiAsset_AllOf

export interface V2WildMultiAsset_All {
    __kind: 'All'
}

export interface V2WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V2AssetId
    fun: V2WildFungibility
}

export type V3WildMultiAsset = V3WildMultiAsset_All | V3WildMultiAsset_AllOf | V3WildMultiAsset_AllCounted | V3WildMultiAsset_AllOfCounted

export interface V3WildMultiAsset_All {
    __kind: 'All'
}

export interface V3WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V3AssetId
    fun: V3WildFungibility
}

export interface V3WildMultiAsset_AllCounted {
    __kind: 'AllCounted'
    value: number
}

export interface V3WildMultiAsset_AllOfCounted {
    __kind: 'AllOfCounted'
    id: V3AssetId
    fun: V3WildFungibility
    count: number
}

export type V3BodyId = V3BodyId_Unit | V3BodyId_Moniker | V3BodyId_Index | V3BodyId_Executive | V3BodyId_Technical | V3BodyId_Legislative | V3BodyId_Judicial | V3BodyId_Defense | V3BodyId_Administration | V3BodyId_Treasury

export interface V3BodyId_Unit {
    __kind: 'Unit'
}

export interface V3BodyId_Moniker {
    __kind: 'Moniker'
    value: Uint8Array
}

export interface V3BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V3BodyId_Executive {
    __kind: 'Executive'
}

export interface V3BodyId_Technical {
    __kind: 'Technical'
}

export interface V3BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V3BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V3BodyId_Defense {
    __kind: 'Defense'
}

export interface V3BodyId_Administration {
    __kind: 'Administration'
}

export interface V3BodyId_Treasury {
    __kind: 'Treasury'
}

export type V3BodyPart = V3BodyPart_Voice | V3BodyPart_Members | V3BodyPart_Fraction | V3BodyPart_AtLeastProportion | V3BodyPart_MoreThanProportion

export interface V3BodyPart_Voice {
    __kind: 'Voice'
}

export interface V3BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V3BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V3BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V3BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2AssetInstance = V2AssetInstance_Undefined | V2AssetInstance_Index | V2AssetInstance_Array4 | V2AssetInstance_Array8 | V2AssetInstance_Array16 | V2AssetInstance_Array32 | V2AssetInstance_Blob

export interface V2AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V2AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V2AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V2AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V2AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V2AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V2AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export type V3AssetInstance = V3AssetInstance_Undefined | V3AssetInstance_Index | V3AssetInstance_Array4 | V3AssetInstance_Array8 | V3AssetInstance_Array16 | V3AssetInstance_Array32

export interface V3AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V3AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V3AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V3AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V3AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V3AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface AuctionState {
    highBid: (Bid | undefined)
}

export interface OutboundHrmpMessage {
    recipient: number
    data: Uint8Array
}

export type V2NetworkId = V2NetworkId_Any | V2NetworkId_Named | V2NetworkId_Polkadot | V2NetworkId_Kusama

export interface V2NetworkId_Any {
    __kind: 'Any'
}

export interface V2NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V2NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V2BodyId = V2BodyId_Unit | V2BodyId_Named | V2BodyId_Index | V2BodyId_Executive | V2BodyId_Technical | V2BodyId_Legislative | V2BodyId_Judicial | V2BodyId_Defense | V2BodyId_Administration | V2BodyId_Treasury

export interface V2BodyId_Unit {
    __kind: 'Unit'
}

export interface V2BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V2BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V2BodyId_Executive {
    __kind: 'Executive'
}

export interface V2BodyId_Technical {
    __kind: 'Technical'
}

export interface V2BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V2BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V2BodyId_Defense {
    __kind: 'Defense'
}

export interface V2BodyId_Administration {
    __kind: 'Administration'
}

export interface V2BodyId_Treasury {
    __kind: 'Treasury'
}

export type V2BodyPart = V2BodyPart_Voice | V2BodyPart_Members | V2BodyPart_Fraction | V2BodyPart_AtLeastProportion | V2BodyPart_MoreThanProportion

export interface V2BodyPart_Voice {
    __kind: 'Voice'
}

export interface V2BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V2BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V2BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V2BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
