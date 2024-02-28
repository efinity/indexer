import type {Result, Option} from './support'

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

export interface Weight {
    refTime: bigint
    proofSize: bigint
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

export interface DefaultCollectionMutation {
    owner: (Uint8Array | undefined)
    royalty: ShouldMutate
    explicitRoyaltyCurrencies: (AssetId[] | undefined)
}

export interface Collection {
    owner: Uint8Array
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
}

export interface V3MultiLocation {
    parents: number
    interior: V3Junctions
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

export interface V3MultiAsset {
    id: V3AssetId
    fun: V3Fungibility
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

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Sudo | Call_Preimage | Call_Scheduler | Call_Utility | Call_Balances | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_CommunityPool | Call_TechnicalMembership | Call_Multisig | Call_CollatorStaking | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_OrmlXcm | Call_MatrixXcm | Call_XTokens | Call_Bounties | Call_MultiTokens | Call_Pools | Call_FuelTanks | Call_Marketplace | Call_ExtrinsicPause | Call_MatrixUtility | Call_Claims | Call_Identity

export interface Call_System {
    __kind: 'System'
    value: SystemCall
}

export interface Call_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemCall
}

export interface Call_Timestamp {
    __kind: 'Timestamp'
    value: TimestampCall
}

export interface Call_Sudo {
    __kind: 'Sudo'
    value: SudoCall
}

export interface Call_Preimage {
    __kind: 'Preimage'
    value: PreimageCall
}

export interface Call_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerCall
}

export interface Call_Utility {
    __kind: 'Utility'
    value: UtilityCall
}

export interface Call_Balances {
    __kind: 'Balances'
    value: BalancesCall
}

export interface Call_Democracy {
    __kind: 'Democracy'
    value: DemocracyCall
}

export interface Call_Council {
    __kind: 'Council'
    value: CouncilCall
}

export interface Call_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeCall
}

export interface Call_CommunityPool {
    __kind: 'CommunityPool'
    value: CommunityPoolCall
}

export interface Call_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipCall
}

export interface Call_Multisig {
    __kind: 'Multisig'
    value: MultisigCall
}

export interface Call_CollatorStaking {
    __kind: 'CollatorStaking'
    value: CollatorStakingCall
}

export interface Call_Session {
    __kind: 'Session'
    value: SessionCall
}

export interface Call_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueCall
}

export interface Call_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmCall
}

export interface Call_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmCall
}

export interface Call_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueCall
}

export interface Call_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmCall
}

export interface Call_MatrixXcm {
    __kind: 'MatrixXcm'
    value: MatrixXcmCall
}

export interface Call_XTokens {
    __kind: 'XTokens'
    value: XTokensCall
}

export interface Call_Bounties {
    __kind: 'Bounties'
    value: BountiesCall
}

export interface Call_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensCall
}

export interface Call_Pools {
    __kind: 'Pools'
    value: PoolsCall
}

export interface Call_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksCall
}

export interface Call_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceCall
}

export interface Call_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseCall
}

export interface Call_MatrixUtility {
    __kind: 'MatrixUtility'
    value: MatrixUtilityCall
}

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
}

export interface Call_Identity {
    __kind: 'Identity'
    value: IdentityCall
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

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export type ParachainId = ParachainId_Acala | ParachainId_Moonbeam | ParachainId_Statemint

export interface ParachainId_Acala {
    __kind: 'Acala'
}

export interface ParachainId_Moonbeam {
    __kind: 'Moonbeam'
}

export interface ParachainId_Statemint {
    __kind: 'Statemint'
}

export type Account = Account_Substrate | Account_EVM

export interface Account_Substrate {
    __kind: 'Substrate'
    value: Uint8Array
}

export interface Account_EVM {
    __kind: 'EVM'
    value: Uint8Array
}

export interface CurrencyIdAmountPair {
    currencyId: AssetId
    amount: bigint
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export interface Timepoint {
    height: number
    index: number
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_309
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_310
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_312
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export type V3WeightLimit = V3WeightLimit_Unlimited | V3WeightLimit_Limited

export interface V3WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V3WeightLimit_Limited {
    __kind: 'Limited'
    value: Weight
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
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

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value: (DefaultRoyalty | undefined)
}

export interface DefaultCollectionPolicy {
    mint: DefaultMintPolicy
    transfer: DefaultTransferPolicy
    market: DefaultMarketPolicy
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

export interface V2MultiAsset {
    id: V2AssetId
    fun: V2Fungibility
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

export interface V2MultiLocation {
    parents: number
    interior: V2Junctions
}

export interface V3PalletInfo {
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    major: number
    minor: number
    patch: number
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

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SystemCall = SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * See [`Pallet::remark`].
 */
export interface SystemCall_remark {
    __kind: 'remark'
    remark: Uint8Array
}

/**
 * See [`Pallet::set_heap_pages`].
 */
export interface SystemCall_set_heap_pages {
    __kind: 'set_heap_pages'
    pages: bigint
}

/**
 * See [`Pallet::set_code`].
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * See [`Pallet::set_code_without_checks`].
 */
export interface SystemCall_set_code_without_checks {
    __kind: 'set_code_without_checks'
    code: Uint8Array
}

/**
 * See [`Pallet::set_storage`].
 */
export interface SystemCall_set_storage {
    __kind: 'set_storage'
    items: [Uint8Array, Uint8Array][]
}

/**
 * See [`Pallet::kill_storage`].
 */
export interface SystemCall_kill_storage {
    __kind: 'kill_storage'
    keys: Uint8Array[]
}

/**
 * See [`Pallet::kill_prefix`].
 */
export interface SystemCall_kill_prefix {
    __kind: 'kill_prefix'
    prefix: Uint8Array
    subkeys: number
}

/**
 * See [`Pallet::remark_with_event`].
 */
export interface SystemCall_remark_with_event {
    __kind: 'remark_with_event'
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * See [`Pallet::set_validation_data`].
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

/**
 * See [`Pallet::sudo_send_upward_message`].
 */
export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

/**
 * See [`Pallet::authorize_upgrade`].
 */
export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
    checkVersion: boolean
}

/**
 * See [`Pallet::enact_authorized_upgrade`].
 */
export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TimestampCall = TimestampCall_set

/**
 * See [`Pallet::set`].
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SudoCall = SudoCall_sudo | SudoCall_sudo_unchecked_weight | SudoCall_set_key | SudoCall_sudo_as

/**
 * See [`Pallet::sudo`].
 */
export interface SudoCall_sudo {
    __kind: 'sudo'
    call: Call
}

/**
 * See [`Pallet::sudo_unchecked_weight`].
 */
export interface SudoCall_sudo_unchecked_weight {
    __kind: 'sudo_unchecked_weight'
    call: Call
    weight: Weight
}

/**
 * See [`Pallet::set_key`].
 */
export interface SudoCall_set_key {
    __kind: 'set_key'
    new: MultiAddress
}

/**
 * See [`Pallet::sudo_as`].
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
    call: Call
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PreimageCall = PreimageCall_note_preimage | PreimageCall_unnote_preimage | PreimageCall_request_preimage | PreimageCall_unrequest_preimage

/**
 * See [`Pallet::note_preimage`].
 */
export interface PreimageCall_note_preimage {
    __kind: 'note_preimage'
    bytes: Uint8Array
}

/**
 * See [`Pallet::unnote_preimage`].
 */
export interface PreimageCall_unnote_preimage {
    __kind: 'unnote_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::request_preimage`].
 */
export interface PreimageCall_request_preimage {
    __kind: 'request_preimage'
    hash: Uint8Array
}

/**
 * See [`Pallet::unrequest_preimage`].
 */
export interface PreimageCall_unrequest_preimage {
    __kind: 'unrequest_preimage'
    hash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SchedulerCall = SchedulerCall_schedule | SchedulerCall_cancel | SchedulerCall_schedule_named | SchedulerCall_cancel_named | SchedulerCall_schedule_after | SchedulerCall_schedule_named_after

/**
 * See [`Pallet::schedule`].
 */
export interface SchedulerCall_schedule {
    __kind: 'schedule'
    when: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::cancel`].
 */
export interface SchedulerCall_cancel {
    __kind: 'cancel'
    when: number
    index: number
}

/**
 * See [`Pallet::schedule_named`].
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
 * See [`Pallet::cancel_named`].
 */
export interface SchedulerCall_cancel_named {
    __kind: 'cancel_named'
    id: Uint8Array
}

/**
 * See [`Pallet::schedule_after`].
 */
export interface SchedulerCall_schedule_after {
    __kind: 'schedule_after'
    after: number
    maybePeriodic: ([number, number] | undefined)
    priority: number
    call: Call
}

/**
 * See [`Pallet::schedule_named_after`].
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
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch | UtilityCall_with_weight

/**
 * See [`Pallet::batch`].
 */
export interface UtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
}

/**
 * See [`Pallet::as_derivative`].
 */
export interface UtilityCall_as_derivative {
    __kind: 'as_derivative'
    index: number
    call: Call
}

/**
 * See [`Pallet::batch_all`].
 */
export interface UtilityCall_batch_all {
    __kind: 'batch_all'
    calls: Call[]
}

/**
 * See [`Pallet::dispatch_as`].
 */
export interface UtilityCall_dispatch_as {
    __kind: 'dispatch_as'
    asOrigin: OriginCaller
    call: Call
}

/**
 * See [`Pallet::force_batch`].
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * See [`Pallet::with_weight`].
 */
export interface UtilityCall_with_weight {
    __kind: 'with_weight'
    call: Call
    weight: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BalancesCall = BalancesCall_transfer_allow_death | BalancesCall_set_balance_deprecated | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve | BalancesCall_upgrade_accounts | BalancesCall_transfer | BalancesCall_force_set_balance

/**
 * See [`Pallet::transfer_allow_death`].
 */
export interface BalancesCall_transfer_allow_death {
    __kind: 'transfer_allow_death'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::set_balance_deprecated`].
 */
export interface BalancesCall_set_balance_deprecated {
    __kind: 'set_balance_deprecated'
    who: MultiAddress
    newFree: bigint
    oldReserved: bigint
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_keep_alive`].
 */
export interface BalancesCall_transfer_keep_alive {
    __kind: 'transfer_keep_alive'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::transfer_all`].
 */
export interface BalancesCall_transfer_all {
    __kind: 'transfer_all'
    dest: MultiAddress
    keepAlive: boolean
}

/**
 * See [`Pallet::force_unreserve`].
 */
export interface BalancesCall_force_unreserve {
    __kind: 'force_unreserve'
    who: MultiAddress
    amount: bigint
}

/**
 * See [`Pallet::upgrade_accounts`].
 */
export interface BalancesCall_upgrade_accounts {
    __kind: 'upgrade_accounts'
    who: Uint8Array[]
}

/**
 * See [`Pallet::transfer`].
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * See [`Pallet::force_set_balance`].
 */
export interface BalancesCall_force_set_balance {
    __kind: 'force_set_balance'
    who: MultiAddress
    newFree: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal | DemocracyCall_set_metadata

/**
 * See [`Pallet::propose`].
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * See [`Pallet::second`].
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * See [`Pallet::vote`].
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 * See [`Pallet::emergency_cancel`].
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * See [`Pallet::external_propose`].
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_majority`].
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * See [`Pallet::external_propose_default`].
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * See [`Pallet::fast_track`].
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 * See [`Pallet::veto_external`].
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::cancel_referendum`].
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * See [`Pallet::delegate`].
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * See [`Pallet::undelegate`].
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * See [`Pallet::clear_public_proposals`].
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * See [`Pallet::unlock`].
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * See [`Pallet::remove_vote`].
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * See [`Pallet::remove_other_vote`].
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * See [`Pallet::blacklist`].
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 * See [`Pallet::cancel_proposal`].
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * See [`Pallet::set_metadata`].
 */
export interface DemocracyCall_set_metadata {
    __kind: 'set_metadata'
    owner: MetadataOwner
    maybeHash: (Uint8Array | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_disapprove_proposal | CouncilCall_close

/**
 * See [`Pallet::set_members`].
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * See [`Pallet::execute`].
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::vote`].
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::close`].
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

/**
 * See [`Pallet::set_members`].
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * See [`Pallet::execute`].
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::propose`].
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * See [`Pallet::vote`].
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * See [`Pallet::disapprove_proposal`].
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * See [`Pallet::close`].
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CommunityPoolCall = CommunityPoolCall_propose_spend | CommunityPoolCall_reject_proposal | CommunityPoolCall_approve_proposal | CommunityPoolCall_spend | CommunityPoolCall_remove_approval

/**
 * See [`Pallet::propose_spend`].
 */
export interface CommunityPoolCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::reject_proposal`].
 */
export interface CommunityPoolCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * See [`Pallet::approve_proposal`].
 */
export interface CommunityPoolCall_approve_proposal {
    __kind: 'approve_proposal'
    proposalId: number
}

/**
 * See [`Pallet::spend`].
 */
export interface CommunityPoolCall_spend {
    __kind: 'spend'
    amount: bigint
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::remove_approval`].
 */
export interface CommunityPoolCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * See [`Pallet::add_member`].
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * See [`Pallet::remove_member`].
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * See [`Pallet::swap_member`].
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * See [`Pallet::reset_members`].
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * See [`Pallet::change_key`].
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * See [`Pallet::set_prime`].
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * See [`Pallet::clear_prime`].
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultisigCall = MultisigCall_as_multi_threshold_1 | MultisigCall_as_multi | MultisigCall_approve_as_multi | MultisigCall_cancel_as_multi

/**
 * See [`Pallet::as_multi_threshold_1`].
 */
export interface MultisigCall_as_multi_threshold_1 {
    __kind: 'as_multi_threshold_1'
    otherSignatories: Uint8Array[]
    call: Call
}

/**
 * See [`Pallet::as_multi`].
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
 * See [`Pallet::approve_as_multi`].
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
 * See [`Pallet::cancel_as_multi`].
 */
export interface MultisigCall_cancel_as_multi {
    __kind: 'cancel_as_multi'
    threshold: number
    otherSignatories: Uint8Array[]
    timepoint: Timepoint
    callHash: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CollatorStakingCall = CollatorStakingCall_set_invulnerables | CollatorStakingCall_join_candidates | CollatorStakingCall_unbond | CollatorStakingCall_nominate | CollatorStakingCall_remove_nomination | CollatorStakingCall_force_set_current_max_candidates | CollatorStakingCall_force_set_min_collator_stake

/**
 * See [`Pallet::set_invulnerables`].
 */
export interface CollatorStakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    accounts: Uint8Array[]
}

/**
 * See [`Pallet::join_candidates`].
 */
export interface CollatorStakingCall_join_candidates {
    __kind: 'join_candidates'
    amount: bigint
    rewardsCut: number
}

/**
 * See [`Pallet::unbond`].
 */
export interface CollatorStakingCall_unbond {
    __kind: 'unbond'
}

/**
 * See [`Pallet::nominate`].
 */
export interface CollatorStakingCall_nominate {
    __kind: 'nominate'
    collatorId: Uint8Array
    amount: bigint
}

/**
 * See [`Pallet::remove_nomination`].
 */
export interface CollatorStakingCall_remove_nomination {
    __kind: 'remove_nomination'
    collatorId: Uint8Array
}

/**
 * See [`Pallet::force_set_current_max_candidates`].
 */
export interface CollatorStakingCall_force_set_current_max_candidates {
    __kind: 'force_set_current_max_candidates'
    maxCandidates: number
}

/**
 * See [`Pallet::force_set_min_collator_stake`].
 */
export interface CollatorStakingCall_force_set_min_collator_stake {
    __kind: 'force_set_min_collator_stake'
    minCollatorStake: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type SessionCall = SessionCall_set_keys | SessionCall_purge_keys

/**
 * See [`Pallet::set_keys`].
 */
export interface SessionCall_set_keys {
    __kind: 'set_keys'
    keys: SessionKeys
    proof: Uint8Array
}

/**
 * See [`Pallet::purge_keys`].
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * See [`Pallet::service_overweight`].
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * See [`Pallet::suspend_xcm_execution`].
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * See [`Pallet::resume_xcm_execution`].
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * See [`Pallet::update_suspend_threshold`].
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * See [`Pallet::update_drop_threshold`].
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * See [`Pallet::update_resume_threshold`].
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * See [`Pallet::update_threshold_weight`].
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: Weight
}

/**
 * See [`Pallet::update_weight_restrict_decay`].
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: Weight
}

/**
 * See [`Pallet::update_xcmp_max_individual_weight`].
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets | PolkadotXcmCall_force_suspension

/**
 * See [`Pallet::send`].
 */
export interface PolkadotXcmCall_send {
    __kind: 'send'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * See [`Pallet::teleport_assets`].
 */
export interface PolkadotXcmCall_teleport_assets {
    __kind: 'teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_reserve_transfer_assets {
    __kind: 'reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
}

/**
 * See [`Pallet::execute`].
 */
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_346
    maxWeight: Weight
}

/**
 * See [`Pallet::force_xcm_version`].
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V3MultiLocation
    version: number
}

/**
 * See [`Pallet::force_default_xcm_version`].
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * See [`Pallet::force_subscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::force_unsubscribe_version_notify`].
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
    __kind: 'force_unsubscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * See [`Pallet::limited_reserve_transfer_assets`].
 */
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::limited_teleport_assets`].
 */
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V3WeightLimit
}

/**
 * See [`Pallet::force_suspension`].
 */
export interface PolkadotXcmCall_force_suspension {
    __kind: 'force_suspension'
    suspended: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type CumulusXcmCall = never

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * See [`Pallet::service_overweight`].
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: Weight
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * See [`Pallet::send_as_sovereign`].
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixXcmCall = MatrixXcmCall_transfer_to_parachain | MatrixXcmCall_transfer_asset_to_parachain | MatrixXcmCall_transfer_asset_with_fee | MatrixXcmCall_force_set_minimum_weight

/**
 * See [`Pallet::transfer_to_parachain`].
 */
export interface MatrixXcmCall_transfer_to_parachain {
    __kind: 'transfer_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * See [`Pallet::transfer_asset_to_parachain`].
 */
export interface MatrixXcmCall_transfer_asset_to_parachain {
    __kind: 'transfer_asset_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    currencyId: AssetId
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * See [`Pallet::transfer_asset_with_fee`].
 */
export interface MatrixXcmCall_transfer_asset_with_fee {
    __kind: 'transfer_asset_with_fee'
    assetPair: CurrencyIdAmountPair
    feePair: CurrencyIdAmountPair
    paraId: ParachainId
    beneficiary: Account
    destWeight: (bigint | undefined)
}

/**
 * See [`Pallet::force_set_minimum_weight`].
 */
export interface MatrixXcmCall_force_set_minimum_weight {
    __kind: 'force_set_minimum_weight'
    xcmCall: XcmOperation
    xcmWeightFeeMisc: MinimumWeightFeePair
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * See [`Pallet::transfer`].
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: AssetId
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset`].
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_with_fee`].
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: AssetId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiasset_with_fee`].
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multicurrencies`].
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [AssetId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * See [`Pallet::transfer_multiassets`].
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V3WeightLimit
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * See [`Pallet::propose_bounty`].
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 * See [`Pallet::approve_bounty`].
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * See [`Pallet::propose_curator`].
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * See [`Pallet::unassign_curator`].
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * See [`Pallet::accept_curator`].
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * See [`Pallet::award_bounty`].
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * See [`Pallet::claim_bounty`].
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * See [`Pallet::close_bounty`].
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * See [`Pallet::extend_bounty_expiry`].
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MultiTokensCall = MultiTokensCall_create_collection | MultiTokensCall_destroy_collection | MultiTokensCall_mutate_collection | MultiTokensCall_mutate_token | MultiTokensCall_mint | MultiTokensCall_burn | MultiTokensCall_transfer | MultiTokensCall_freeze | MultiTokensCall_thaw | MultiTokensCall_set_attribute | MultiTokensCall_remove_attribute | MultiTokensCall_remove_all_attributes | MultiTokensCall_batch_transfer | MultiTokensCall_batch_mint | MultiTokensCall_batch_set_attribute | MultiTokensCall_approve_collection | MultiTokensCall_unapprove_collection | MultiTokensCall_approve_token | MultiTokensCall_unapprove_token | MultiTokensCall_accept_collection_transfer | MultiTokensCall_cancel_collection_transfer | MultiTokensCall_claim_collections | MultiTokensCall_claim_tokens | MultiTokensCall_finish_claim_tokens | MultiTokensCall_force_mutate_collection | MultiTokensCall_force_transfer | MultiTokensCall_force_set_collection | MultiTokensCall_force_set_token | MultiTokensCall_force_set_attribute | MultiTokensCall_force_set_collection_account | MultiTokensCall_force_set_token_account | MultiTokensCall_force_create_collection | MultiTokensCall_force_mint | MultiTokensCall_force_burn | MultiTokensCall_force_approve_collection | MultiTokensCall_force_freeze | MultiTokensCall_force_set_next_collection_id | MultiTokensCall_force_set_ethereum_account | MultiTokensCall_force_set_ethereum_collection_id | MultiTokensCall_force_set_unmintable_token_ids | MultiTokensCall_force_create_ethereum_collection | MultiTokensCall_force_set_ethereum_unmintable_token_ids

/**
 * See [`Pallet::create_collection`].
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::destroy_collection`].
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * See [`Pallet::mutate_collection`].
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::mutate_token`].
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * See [`Pallet::mint`].
 */
export interface MultiTokensCall_mint {
    __kind: 'mint'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultMintParams
}

/**
 * See [`Pallet::burn`].
 */
export interface MultiTokensCall_burn {
    __kind: 'burn'
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::transfer`].
 */
export interface MultiTokensCall_transfer {
    __kind: 'transfer'
    recipient: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::freeze`].
 */
export interface MultiTokensCall_freeze {
    __kind: 'freeze'
    info: Freeze
}

/**
 * See [`Pallet::thaw`].
 */
export interface MultiTokensCall_thaw {
    __kind: 'thaw'
    info: Freeze
}

/**
 * See [`Pallet::set_attribute`].
 */
export interface MultiTokensCall_set_attribute {
    __kind: 'set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: Uint8Array
}

/**
 * See [`Pallet::remove_attribute`].
 */
export interface MultiTokensCall_remove_attribute {
    __kind: 'remove_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
}

/**
 * See [`Pallet::remove_all_attributes`].
 */
export interface MultiTokensCall_remove_all_attributes {
    __kind: 'remove_all_attributes'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributeCount: number
}

/**
 * See [`Pallet::batch_transfer`].
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * See [`Pallet::batch_mint`].
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_388[]
}

/**
 * See [`Pallet::batch_set_attribute`].
 */
export interface MultiTokensCall_batch_set_attribute {
    __kind: 'batch_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributes: AttributeKeyValuePair[]
}

/**
 * See [`Pallet::approve_collection`].
 */
export interface MultiTokensCall_approve_collection {
    __kind: 'approve_collection'
    collectionId: bigint
    operator: Uint8Array
    expiration: (number | undefined)
}

/**
 * See [`Pallet::unapprove_collection`].
 */
export interface MultiTokensCall_unapprove_collection {
    __kind: 'unapprove_collection'
    collectionId: bigint
    operator: Uint8Array
}

/**
 * See [`Pallet::approve_token`].
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
 * See [`Pallet::unapprove_token`].
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
}

/**
 * See [`Pallet::accept_collection_transfer`].
 */
export interface MultiTokensCall_accept_collection_transfer {
    __kind: 'accept_collection_transfer'
    collectionId: bigint
}

/**
 * See [`Pallet::cancel_collection_transfer`].
 */
export interface MultiTokensCall_cancel_collection_transfer {
    __kind: 'cancel_collection_transfer'
    collectionId: bigint
}

/**
 * See [`Pallet::claim_collections`].
 */
export interface MultiTokensCall_claim_collections {
    __kind: 'claim_collections'
    destination: Uint8Array
    ethereumSignature: Uint8Array
    ethereumAddress: Uint8Array
    collectionCount: number
}

/**
 * See [`Pallet::claim_tokens`].
 */
export interface MultiTokensCall_claim_tokens {
    __kind: 'claim_tokens'
    destination: Uint8Array
    ethereumSignature: Uint8Array
    ethereumAddress: Uint8Array
}

/**
 * See [`Pallet::finish_claim_tokens`].
 */
export interface MultiTokensCall_finish_claim_tokens {
    __kind: 'finish_claim_tokens'
    destination: Uint8Array
    ethereumAddress: Uint8Array
}

/**
 * See [`Pallet::force_mutate_collection`].
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * See [`Pallet::force_transfer`].
 */
export interface MultiTokensCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    destination: MultiAddress
    collectionId: bigint
    params: DefaultTransferParams
}

/**
 * See [`Pallet::force_set_collection`].
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value: (Collection | undefined)
}

/**
 * See [`Pallet::force_set_token`].
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value: (Token | undefined)
}

/**
 * See [`Pallet::force_set_attribute`].
 */
export interface MultiTokensCall_force_set_attribute {
    __kind: 'force_set_attribute'
    collectionId: bigint
    tokenId: (bigint | undefined)
    key: Uint8Array
    value: (Attribute | undefined)
}

/**
 * See [`Pallet::force_set_collection_account`].
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value: (CollectionAccount | undefined)
}

/**
 * See [`Pallet::force_set_token_account`].
 */
export interface MultiTokensCall_force_set_token_account {
    __kind: 'force_set_token_account'
    collectionId: bigint
    tokenId: bigint
    accountId: MultiAddress
    value: (TokenAccount | undefined)
}

/**
 * See [`Pallet::force_create_collection`].
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: Uint8Array
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_mint`].
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
 * See [`Pallet::force_burn`].
 */
export interface MultiTokensCall_force_burn {
    __kind: 'force_burn'
    caller: MultiAddress
    collectionId: bigint
    params: DefaultBurnParams
}

/**
 * See [`Pallet::force_approve_collection`].
 */
export interface MultiTokensCall_force_approve_collection {
    __kind: 'force_approve_collection'
    caller: MultiAddress
    collectionId: bigint
    operator: Uint8Array
    expiration: (number | undefined)
}

/**
 * See [`Pallet::force_freeze`].
 */
export interface MultiTokensCall_force_freeze {
    __kind: 'force_freeze'
    info: Freeze
}

/**
 * See [`Pallet::force_set_next_collection_id`].
 */
export interface MultiTokensCall_force_set_next_collection_id {
    __kind: 'force_set_next_collection_id'
    value: bigint
}

/**
 * See [`Pallet::force_set_ethereum_account`].
 */
export interface MultiTokensCall_force_set_ethereum_account {
    __kind: 'force_set_ethereum_account'
    address: Uint8Array
    value: (bigint[] | undefined)
}

/**
 * See [`Pallet::force_set_ethereum_collection_id`].
 */
export interface MultiTokensCall_force_set_ethereum_collection_id {
    __kind: 'force_set_ethereum_collection_id'
    ethereumCollectionId: bigint
    nativeCollectionId: (bigint | undefined)
}

/**
 * See [`Pallet::force_set_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_unmintable_token_ids {
    __kind: 'force_set_unmintable_token_ids'
    collectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * See [`Pallet::force_create_ethereum_collection`].
 */
export interface MultiTokensCall_force_create_ethereum_collection {
    __kind: 'force_create_ethereum_collection'
    owner: Uint8Array
    claimer: Uint8Array
    ethereumCollectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * See [`Pallet::force_set_ethereum_unmintable_token_ids`].
 */
export interface MultiTokensCall_force_set_ethereum_unmintable_token_ids {
    __kind: 'force_set_ethereum_unmintable_token_ids'
    ethereumCollectionId: bigint
    baseTokenId: bigint
    tokenIndex: bigint
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type PoolsCall = PoolsCall_mutate_pools

/**
 * See [`Pallet::mutate_pools`].
 */
export interface PoolsCall_mutate_pools {
    __kind: 'mutate_pools'
    mutation: PoolsMutation
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type FuelTanksCall = FuelTanksCall_create_fuel_tank | FuelTanksCall_mutate_fuel_tank | FuelTanksCall_add_account | FuelTanksCall_remove_account | FuelTanksCall_remove_account_rule_data | FuelTanksCall_dispatch | FuelTanksCall_dispatch_and_touch | FuelTanksCall_mutate_freeze_state | FuelTanksCall_insert_rule_set | FuelTanksCall_remove_rule_set | FuelTanksCall_batch_add_account | FuelTanksCall_batch_remove_account | FuelTanksCall_force_set_consumption | FuelTanksCall_destroy_fuel_tank | FuelTanksCall_force_create_fuel_tank | FuelTanksCall_force_batch_add_account

/**
 * See [`Pallet::create_fuel_tank`].
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::mutate_fuel_tank`].
 */
export interface FuelTanksCall_mutate_fuel_tank {
    __kind: 'mutate_fuel_tank'
    tankId: MultiAddress
    mutation: DefaultTankMutation
}

/**
 * See [`Pallet::add_account`].
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::remove_account`].
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * See [`Pallet::remove_account_rule_data`].
 */
export interface FuelTanksCall_remove_account_rule_data {
    __kind: 'remove_account_rule_data'
    tankId: MultiAddress
    userId: MultiAddress
    ruleSetId: number
    ruleKind: DispatchRuleKind
}

/**
 * See [`Pallet::dispatch`].
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings: (DispatchSettings | undefined)
}

/**
 * See [`Pallet::dispatch_and_touch`].
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    settings: (DispatchSettings | undefined)
}

/**
 * See [`Pallet::mutate_freeze_state`].
 */
export interface FuelTanksCall_mutate_freeze_state {
    __kind: 'mutate_freeze_state'
    tankId: MultiAddress
    ruleSetId: (number | undefined)
    isFrozen: boolean
}

/**
 * See [`Pallet::insert_rule_set`].
 */
export interface FuelTanksCall_insert_rule_set {
    __kind: 'insert_rule_set'
    tankId: MultiAddress
    ruleSetId: number
    rules: DispatchRuleDescriptor[]
}

/**
 * See [`Pallet::remove_rule_set`].
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

/**
 * See [`Pallet::batch_add_account`].
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::batch_remove_account`].
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * See [`Pallet::force_set_consumption`].
 */
export interface FuelTanksCall_force_set_consumption {
    __kind: 'force_set_consumption'
    tankId: MultiAddress
    userId: (MultiAddress | undefined)
    ruleSetId: number
    consumption: Consumption
}

/**
 * See [`Pallet::destroy_fuel_tank`].
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * See [`Pallet::force_create_fuel_tank`].
 */
export interface FuelTanksCall_force_create_fuel_tank {
    __kind: 'force_create_fuel_tank'
    owner: MultiAddress
    descriptor: FuelTankDescriptor
}

/**
 * See [`Pallet::force_batch_add_account`].
 */
export interface FuelTanksCall_force_batch_add_account {
    __kind: 'force_batch_add_account'
    owner: MultiAddress
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MarketplaceCall = MarketplaceCall_create_listing | MarketplaceCall_cancel_listing | MarketplaceCall_fill_listing | MarketplaceCall_place_bid | MarketplaceCall_finalize_auction | MarketplaceCall_set_protocol_fee | MarketplaceCall_force_create_listing | MarketplaceCall_force_place_bid

/**
 * See [`Pallet::create_listing`].
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
 * See [`Pallet::cancel_listing`].
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: Uint8Array
}

/**
 * See [`Pallet::fill_listing`].
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: Uint8Array
    amount: bigint
}

/**
 * See [`Pallet::place_bid`].
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: Uint8Array
    price: bigint
}

/**
 * See [`Pallet::finalize_auction`].
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: Uint8Array
}

/**
 * See [`Pallet::set_protocol_fee`].
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: number
}

/**
 * See [`Pallet::force_create_listing`].
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
 * See [`Pallet::force_place_bid`].
 */
export interface MarketplaceCall_force_place_bid {
    __kind: 'force_place_bid'
    bidder: MultiAddress
    listingId: Uint8Array
    price: bigint
    fundsBacker: (MultiAddress | undefined)
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ExtrinsicPauseCall = ExtrinsicPauseCall_pause_extrinsic | ExtrinsicPauseCall_resume_extrinsic

/**
 * See [`Pallet::pause_extrinsic`].
 */
export interface ExtrinsicPauseCall_pause_extrinsic {
    __kind: 'pause_extrinsic'
    call: Call
    pauseOnlyExtrinsic: boolean
}

/**
 * See [`Pallet::resume_extrinsic`].
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type MatrixUtilityCall = MatrixUtilityCall_batch

/**
 * See [`Pallet::batch`].
 */
export interface MatrixUtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
    continueOnFailure: boolean
}

/**
 * Contains a variant per dispatchable extrinsic that this pallet has.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_move_claim | ClaimsCall_request_claims | ClaimsCall_reject_claims | ClaimsCall_set_exchange_rate | ClaimsCall_set_delay_time

/**
 * See [`Pallet::claim`].
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
    ethereumAddress: Uint8Array
}

/**
 * See [`Pallet::mint_claim`].
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
}

/**
 * See [`Pallet::move_claim`].
 */
export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
}

/**
 * See [`Pallet::request_claims`].
 */
export interface ClaimsCall_request_claims {
    __kind: 'request_claims'
    blockNumber: number
    batchData: Claim[]
}

/**
 * See [`Pallet::reject_claims`].
 */
export interface ClaimsCall_reject_claims {
    __kind: 'reject_claims'
    batchData: RejectData[]
}

/**
 * See [`Pallet::set_exchange_rate`].
 */
export interface ClaimsCall_set_exchange_rate {
    __kind: 'set_exchange_rate'
    numerator: bigint
    denominator: bigint
}

/**
 * See [`Pallet::set_delay_time`].
 */
export interface ClaimsCall_set_delay_time {
    __kind: 'set_delay_time'
    delayTime: number
}

/**
 * Identity pallet declaration.
 */
export type IdentityCall = IdentityCall_add_registrar | IdentityCall_set_identity | IdentityCall_set_subs | IdentityCall_clear_identity | IdentityCall_request_judgement | IdentityCall_cancel_request | IdentityCall_set_fee | IdentityCall_set_account_id | IdentityCall_set_fields | IdentityCall_provide_judgement | IdentityCall_kill_identity | IdentityCall_add_sub | IdentityCall_rename_sub | IdentityCall_remove_sub | IdentityCall_quit_sub

/**
 * See [`Pallet::add_registrar`].
 */
export interface IdentityCall_add_registrar {
    __kind: 'add_registrar'
    account: MultiAddress
}

/**
 * See [`Pallet::set_identity`].
 */
export interface IdentityCall_set_identity {
    __kind: 'set_identity'
    info: IdentityInfo
}

/**
 * See [`Pallet::set_subs`].
 */
export interface IdentityCall_set_subs {
    __kind: 'set_subs'
    subs: [Uint8Array, Data][]
}

/**
 * See [`Pallet::clear_identity`].
 */
export interface IdentityCall_clear_identity {
    __kind: 'clear_identity'
}

/**
 * See [`Pallet::request_judgement`].
 */
export interface IdentityCall_request_judgement {
    __kind: 'request_judgement'
    regIndex: number
    maxFee: bigint
}

/**
 * See [`Pallet::cancel_request`].
 */
export interface IdentityCall_cancel_request {
    __kind: 'cancel_request'
    regIndex: number
}

/**
 * See [`Pallet::set_fee`].
 */
export interface IdentityCall_set_fee {
    __kind: 'set_fee'
    index: number
    fee: bigint
}

/**
 * See [`Pallet::set_account_id`].
 */
export interface IdentityCall_set_account_id {
    __kind: 'set_account_id'
    index: number
    new: MultiAddress
}

/**
 * See [`Pallet::set_fields`].
 */
export interface IdentityCall_set_fields {
    __kind: 'set_fields'
    index: number
    fields: bigint
}

/**
 * See [`Pallet::provide_judgement`].
 */
export interface IdentityCall_provide_judgement {
    __kind: 'provide_judgement'
    regIndex: number
    target: MultiAddress
    judgement: Judgement
    identity: Uint8Array
}

/**
 * See [`Pallet::kill_identity`].
 */
export interface IdentityCall_kill_identity {
    __kind: 'kill_identity'
    target: MultiAddress
}

/**
 * See [`Pallet::add_sub`].
 */
export interface IdentityCall_add_sub {
    __kind: 'add_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::rename_sub`].
 */
export interface IdentityCall_rename_sub {
    __kind: 'rename_sub'
    sub: MultiAddress
    data: Data
}

/**
 * See [`Pallet::remove_sub`].
 */
export interface IdentityCall_remove_sub {
    __kind: 'remove_sub'
    sub: MultiAddress
}

/**
 * See [`Pallet::quit_sub`].
 */
export interface IdentityCall_quit_sub {
    __kind: 'quit_sub'
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

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export interface AttributeKeyValuePair {
    key: Uint8Array
    value: Uint8Array
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

export type Type_309 = Type_309_Members | Type_309_Member | Type_309__Phantom

export interface Type_309_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_309_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_309__Phantom {
    __kind: '_Phantom'
}

export type Type_310 = Type_310_Members | Type_310_Member | Type_310__Phantom

export interface Type_310_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_310_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_310__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V3MultiLocation
}

export interface Origin_Response {
    __kind: 'Response'
    value: V3MultiLocation
}

export type Type_312 = Type_312_Relay | Type_312_SiblingParachain

export interface Type_312_Relay {
    __kind: 'Relay'
}

export interface Type_312_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Void = never

export type Phase = Phase_ApplyExtrinsic | Phase_Finalization | Phase_Initialization

export interface Phase_ApplyExtrinsic {
    __kind: 'ApplyExtrinsic'
    value: number
}

export interface Phase_Finalization {
    __kind: 'Finalization'
}

export interface Phase_Initialization {
    __kind: 'Initialization'
}

export type Event = Event_System | Event_ParachainSystem | Event_Sudo | Event_Preimage | Event_Scheduler | Event_Utility | Event_Balances | Event_TransactionPayment | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_CommunityPool | Event_TechnicalMembership | Event_Multisig | Event_CollatorStaking | Event_Session | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_OrmlXcm | Event_MatrixXcm | Event_UnknownTokens | Event_XTokens | Event_Bounties | Event_MultiTokens | Event_Pools | Event_FuelTanks | Event_Marketplace | Event_ExtrinsicPause | Event_MatrixUtility | Event_Claims | Event_Identity

export interface Event_System {
    __kind: 'System'
    value: SystemEvent
}

export interface Event_ParachainSystem {
    __kind: 'ParachainSystem'
    value: ParachainSystemEvent
}

export interface Event_Sudo {
    __kind: 'Sudo'
    value: SudoEvent
}

export interface Event_Preimage {
    __kind: 'Preimage'
    value: PreimageEvent
}

export interface Event_Scheduler {
    __kind: 'Scheduler'
    value: SchedulerEvent
}

export interface Event_Utility {
    __kind: 'Utility'
    value: UtilityEvent
}

export interface Event_Balances {
    __kind: 'Balances'
    value: BalancesEvent
}

export interface Event_TransactionPayment {
    __kind: 'TransactionPayment'
    value: TransactionPaymentEvent
}

export interface Event_Democracy {
    __kind: 'Democracy'
    value: DemocracyEvent
}

export interface Event_Council {
    __kind: 'Council'
    value: CouncilEvent
}

export interface Event_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: TechnicalCommitteeEvent
}

export interface Event_CommunityPool {
    __kind: 'CommunityPool'
    value: CommunityPoolEvent
}

export interface Event_TechnicalMembership {
    __kind: 'TechnicalMembership'
    value: TechnicalMembershipEvent
}

export interface Event_Multisig {
    __kind: 'Multisig'
    value: MultisigEvent
}

export interface Event_CollatorStaking {
    __kind: 'CollatorStaking'
    value: CollatorStakingEvent
}

export interface Event_Session {
    __kind: 'Session'
    value: SessionEvent
}

export interface Event_XcmpQueue {
    __kind: 'XcmpQueue'
    value: XcmpQueueEvent
}

export interface Event_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: PolkadotXcmEvent
}

export interface Event_CumulusXcm {
    __kind: 'CumulusXcm'
    value: CumulusXcmEvent
}

export interface Event_DmpQueue {
    __kind: 'DmpQueue'
    value: DmpQueueEvent
}

export interface Event_OrmlXcm {
    __kind: 'OrmlXcm'
    value: OrmlXcmEvent
}

export interface Event_MatrixXcm {
    __kind: 'MatrixXcm'
    value: MatrixXcmEvent
}

export interface Event_UnknownTokens {
    __kind: 'UnknownTokens'
    value: UnknownTokensEvent
}

export interface Event_XTokens {
    __kind: 'XTokens'
    value: XTokensEvent
}

export interface Event_Bounties {
    __kind: 'Bounties'
    value: BountiesEvent
}

export interface Event_MultiTokens {
    __kind: 'MultiTokens'
    value: MultiTokensEvent
}

export interface Event_Pools {
    __kind: 'Pools'
    value: PoolsEvent
}

export interface Event_FuelTanks {
    __kind: 'FuelTanks'
    value: FuelTanksEvent
}

export interface Event_Marketplace {
    __kind: 'Marketplace'
    value: MarketplaceEvent
}

export interface Event_ExtrinsicPause {
    __kind: 'ExtrinsicPause'
    value: ExtrinsicPauseEvent
}

export interface Event_MatrixUtility {
    __kind: 'MatrixUtility'
    value: MatrixUtilityEvent
}

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
}

export interface Event_Identity {
    __kind: 'Identity'
    value: IdentityEvent
}

export interface AuctionState {
    highBid: (Bid | undefined)
}

export interface DefaultRoyalty {
    beneficiary: Uint8Array
    percentage: number
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

export interface ParachainInherentData {
    validationData: V5PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
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

export type AccountVote = AccountVote_Standard | AccountVote_Split

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

export type MetadataOwner = MetadataOwner_External | MetadataOwner_Proposal | MetadataOwner_Referendum

export interface MetadataOwner_External {
    __kind: 'External'
}

export interface MetadataOwner_Proposal {
    __kind: 'Proposal'
    value: number
}

export interface MetadataOwner_Referendum {
    __kind: 'Referendum'
    value: number
}

export interface SessionKeys {
    aura: Uint8Array
    pools: Uint8Array
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

export type Type_346 = Type_346_V2 | Type_346_V3

export interface Type_346_V2 {
    __kind: 'V2'
    value: Type_349[]
}

export interface Type_346_V3 {
    __kind: 'V3'
    value: Type_353[]
}

export type XcmOperation = XcmOperation_XTokensTransfer | XcmOperation_ParachainFee

export interface XcmOperation_XTokensTransfer {
    __kind: 'XTokensTransfer'
}

export interface XcmOperation_ParachainFee {
    __kind: 'ParachainFee'
    value: V3MultiLocation
}

export interface MinimumWeightFeePair {
    minimumWeight: Weight
    fee: bigint
}

export type VersionedMultiAsset = VersionedMultiAsset_V2 | VersionedMultiAsset_V3

export interface VersionedMultiAsset_V2 {
    __kind: 'V2'
    value: V2MultiAsset
}

export interface VersionedMultiAsset_V3 {
    __kind: 'V3'
    value: V3MultiAsset
}

export interface DefaultTokenMutation {
    behavior: Type_146
    listingForbidden: Type_149
    metadata: Type_150
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

export interface Type_388 {
    accountId: Uint8Array
    params: DefaultMintParams
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

export interface PoolsMutation {
    community: Pool
    collator: Pool
    fuelTanks: Pool
    priceDiscovery: Pool
}

export interface DefaultTankMutation {
    userAccountManagement: Type_212
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

export interface Claim {
    hash: Uint8Array
    claim: TransactionData
    isEfiToken: boolean
}

export interface RejectData {
    account: Uint8Array
    hash: Uint8Array
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

export interface DefaultMintPolicyDescriptor {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultMarketPolicyDescriptor {
    royalty: (DefaultRoyalty | undefined)
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
 * The `Event` enum of this pallet
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed | ParachainSystemEvent_UpwardMessageSent

/**
 * The validation function has been scheduled to apply.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
    __kind: 'ValidationFunctionStored'
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
    __kind: 'ValidationFunctionApplied'
    relayChainBlockNum: number
}

/**
 * The relay-chain aborted the upgrade process.
 */
export interface ParachainSystemEvent_ValidationFunctionDiscarded {
    __kind: 'ValidationFunctionDiscarded'
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
    __kind: 'UpgradeAuthorized'
    codeHash: Uint8Array
}

/**
 * Some downward messages have been received and will be processed.
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
    __kind: 'DownwardMessagesReceived'
    count: number
}

/**
 * Downward messages were processed using the given weight.
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
    __kind: 'DownwardMessagesProcessed'
    weightUsed: Weight
    dmqHead: Uint8Array
}

/**
 * An upward message was sent to the relay chain.
 */
export interface ParachainSystemEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    messageHash: (Uint8Array | undefined)
}

/**
 * The `Event` enum of this pallet
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
    __kind: 'Sudid'
    sudoResult: Type_33
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
    sudoResult: Type_33
}

/**
 * The `Event` enum of this pallet
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
    result: Type_33
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
 * The `Event` enum of this pallet
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
    result: Type_33
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded | DemocracyEvent_ProposalCanceled | DemocracyEvent_MetadataSet | DemocracyEvent_MetadataCleared | DemocracyEvent_MetadataTransferred

/**
 * A motion has been proposed by a public account.
 */
export interface DemocracyEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
    deposit: bigint
}

/**
 * A public proposal has been tabled for referendum vote.
 */
export interface DemocracyEvent_Tabled {
    __kind: 'Tabled'
    proposalIndex: number
    deposit: bigint
}

/**
 * An external proposal has been tabled.
 */
export interface DemocracyEvent_ExternalTabled {
    __kind: 'ExternalTabled'
}

/**
 * A referendum has begun.
 */
export interface DemocracyEvent_Started {
    __kind: 'Started'
    refIndex: number
    threshold: VoteThreshold
}

/**
 * A proposal has been approved by referendum.
 */
export interface DemocracyEvent_Passed {
    __kind: 'Passed'
    refIndex: number
}

/**
 * A proposal has been rejected by referendum.
 */
export interface DemocracyEvent_NotPassed {
    __kind: 'NotPassed'
    refIndex: number
}

/**
 * A referendum has been cancelled.
 */
export interface DemocracyEvent_Cancelled {
    __kind: 'Cancelled'
    refIndex: number
}

/**
 * An account has delegated their vote to another account.
 */
export interface DemocracyEvent_Delegated {
    __kind: 'Delegated'
    who: Uint8Array
    target: Uint8Array
}

/**
 * An account has cancelled a previous delegation operation.
 */
export interface DemocracyEvent_Undelegated {
    __kind: 'Undelegated'
    account: Uint8Array
}

/**
 * An external proposal has been vetoed.
 */
export interface DemocracyEvent_Vetoed {
    __kind: 'Vetoed'
    who: Uint8Array
    proposalHash: Uint8Array
    until: number
}

/**
 * A proposal_hash has been blacklisted permanently.
 */
export interface DemocracyEvent_Blacklisted {
    __kind: 'Blacklisted'
    proposalHash: Uint8Array
}

/**
 * An account has voted in a referendum
 */
export interface DemocracyEvent_Voted {
    __kind: 'Voted'
    voter: Uint8Array
    refIndex: number
    vote: AccountVote
}

/**
 * An account has secconded a proposal
 */
export interface DemocracyEvent_Seconded {
    __kind: 'Seconded'
    seconder: Uint8Array
    propIndex: number
}

/**
 * A proposal got canceled.
 */
export interface DemocracyEvent_ProposalCanceled {
    __kind: 'ProposalCanceled'
    propIndex: number
}

/**
 * Metadata for a proposal or a referendum has been set.
 */
export interface DemocracyEvent_MetadataSet {
    __kind: 'MetadataSet'
    /**
     * Metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata for a proposal or a referendum has been cleared.
 */
export interface DemocracyEvent_MetadataCleared {
    __kind: 'MetadataCleared'
    /**
     * Metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * Metadata has been transferred to new owner.
 */
export interface DemocracyEvent_MetadataTransferred {
    __kind: 'MetadataTransferred'
    /**
     * Previous metadata owner.
     */
    prevOwner: MetadataOwner
    /**
     * New metadata owner.
     */
    owner: MetadataOwner
    /**
     * Preimage hash.
     */
    hash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type CouncilEvent = CouncilEvent_Proposed | CouncilEvent_Voted | CouncilEvent_Approved | CouncilEvent_Disapproved | CouncilEvent_Executed | CouncilEvent_MemberExecuted | CouncilEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface CouncilEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface CouncilEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface CouncilEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface CouncilEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_33
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_33
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface CouncilEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalCommitteeEvent = TechnicalCommitteeEvent_Proposed | TechnicalCommitteeEvent_Voted | TechnicalCommitteeEvent_Approved | TechnicalCommitteeEvent_Disapproved | TechnicalCommitteeEvent_Executed | TechnicalCommitteeEvent_MemberExecuted | TechnicalCommitteeEvent_Closed

/**
 * A motion (given hash) has been proposed (by given account) with a threshold (given
 * `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Proposed {
    __kind: 'Proposed'
    account: Uint8Array
    proposalIndex: number
    proposalHash: Uint8Array
    threshold: number
}

/**
 * A motion (given hash) has been voted on by given account, leaving
 * a tally (yes votes and no votes given respectively as `MemberCount`).
 */
export interface TechnicalCommitteeEvent_Voted {
    __kind: 'Voted'
    account: Uint8Array
    proposalHash: Uint8Array
    voted: boolean
    yes: number
    no: number
}

/**
 * A motion was approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Approved {
    __kind: 'Approved'
    proposalHash: Uint8Array
}

/**
 * A motion was not approved by the required threshold.
 */
export interface TechnicalCommitteeEvent_Disapproved {
    __kind: 'Disapproved'
    proposalHash: Uint8Array
}

/**
 * A motion was executed; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_Executed {
    __kind: 'Executed'
    proposalHash: Uint8Array
    result: Type_33
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_33
}

/**
 * A proposal was closed because its threshold was reached or after its duration was up.
 */
export interface TechnicalCommitteeEvent_Closed {
    __kind: 'Closed'
    proposalHash: Uint8Array
    yes: number
    no: number
}

/**
 * The `Event` enum of this pallet
 */
export type CommunityPoolEvent = CommunityPoolEvent_Proposed | CommunityPoolEvent_Spending | CommunityPoolEvent_Awarded | CommunityPoolEvent_Rejected | CommunityPoolEvent_Burnt | CommunityPoolEvent_Rollover | CommunityPoolEvent_Deposit | CommunityPoolEvent_SpendApproved | CommunityPoolEvent_UpdatedInactive

/**
 * New proposal.
 */
export interface CommunityPoolEvent_Proposed {
    __kind: 'Proposed'
    proposalIndex: number
}

/**
 * We have ended a spend period and will now allocate funds.
 */
export interface CommunityPoolEvent_Spending {
    __kind: 'Spending'
    budgetRemaining: bigint
}

/**
 * Some funds have been allocated.
 */
export interface CommunityPoolEvent_Awarded {
    __kind: 'Awarded'
    proposalIndex: number
    award: bigint
    account: Uint8Array
}

/**
 * A proposal was rejected; funds were slashed.
 */
export interface CommunityPoolEvent_Rejected {
    __kind: 'Rejected'
    proposalIndex: number
    slashed: bigint
}

/**
 * Some of our funds have been burnt.
 */
export interface CommunityPoolEvent_Burnt {
    __kind: 'Burnt'
    burntFunds: bigint
}

/**
 * Spending has finished; this is the amount that rolls over until next spend.
 */
export interface CommunityPoolEvent_Rollover {
    __kind: 'Rollover'
    rolloverBalance: bigint
}

/**
 * Some funds have been deposited.
 */
export interface CommunityPoolEvent_Deposit {
    __kind: 'Deposit'
    value: bigint
}

/**
 * A new spend proposal has been approved.
 */
export interface CommunityPoolEvent_SpendApproved {
    __kind: 'SpendApproved'
    proposalIndex: number
    amount: bigint
    beneficiary: Uint8Array
}

/**
 * The inactive funds of the pallet have been updated.
 */
export interface CommunityPoolEvent_UpdatedInactive {
    __kind: 'UpdatedInactive'
    reactivated: bigint
    deactivated: bigint
}

/**
 * The `Event` enum of this pallet
 */
export type TechnicalMembershipEvent = TechnicalMembershipEvent_MemberAdded | TechnicalMembershipEvent_MemberRemoved | TechnicalMembershipEvent_MembersSwapped | TechnicalMembershipEvent_MembersReset | TechnicalMembershipEvent_KeyChanged | TechnicalMembershipEvent_Dummy

/**
 * The given member was added; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberAdded {
    __kind: 'MemberAdded'
}

/**
 * The given member was removed; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MemberRemoved {
    __kind: 'MemberRemoved'
}

/**
 * Two members were swapped; see the transaction for who.
 */
export interface TechnicalMembershipEvent_MembersSwapped {
    __kind: 'MembersSwapped'
}

/**
 * The membership was reset; see the transaction for who the new set is.
 */
export interface TechnicalMembershipEvent_MembersReset {
    __kind: 'MembersReset'
}

/**
 * One of the members' keys changed.
 */
export interface TechnicalMembershipEvent_KeyChanged {
    __kind: 'KeyChanged'
}

/**
 * Phantom member, never used.
 */
export interface TechnicalMembershipEvent_Dummy {
    __kind: 'Dummy'
}

/**
 * The `Event` enum of this pallet
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
    result: Type_33
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
 * The `Event` enum of this pallet
 */
export type CollatorStakingEvent = CollatorStakingEvent_NewInvulnerables | CollatorStakingEvent_RoundFinalized | CollatorStakingEvent_CandidateJoined | CollatorStakingEvent_CandidateRemoved | CollatorStakingEvent_Nominated | CollatorStakingEvent_NominationRemoved | CollatorStakingEvent_CollatorSelected

/**
 * A new list of invulnerables has been set by root.
 */
export interface CollatorStakingEvent_NewInvulnerables {
    __kind: 'NewInvulnerables'
    /**
     * list of [`AccountId`](frame_system::Config::AccountId) of invulnerables
     */
    new: Uint8Array[]
}

/**
 * A new round was finalized
 */
export interface CollatorStakingEvent_RoundFinalized {
    __kind: 'RoundFinalized'
    /**
     * round number that was finalized
     */
    number: number
}

/**
 * A new candidate joined the list of candidates.
 */
export interface CollatorStakingEvent_CandidateJoined {
    __kind: 'CandidateJoined'
    /**
     * accountId of the new candidate
     */
    accountId: Uint8Array
    /**
     * amount staked
     */
    amount: bigint
    /**
     * The percentage cut on the rewards that goes to the nominators
     */
    rewardsCut: number
}

/**
 * Candidate was removed.
 */
export interface CollatorStakingEvent_CandidateRemoved {
    __kind: 'CandidateRemoved'
    /**
     * [`AccountId`](frame_system::Config::AccountId) of candidate
     */
    accountId: Uint8Array
}

/**
 * A new nomination was registered for a specific candidate.
 */
export interface CollatorStakingEvent_Nominated {
    __kind: 'Nominated'
    /**
     * the account that was nominated
     */
    accountId: Uint8Array
    /**
     * the collator connected to the account
     */
    collatorId: Uint8Array
    /**
     * amount staked from collator
     */
    amount: bigint
}

/**
 * Nomination was removed.
 */
export interface CollatorStakingEvent_NominationRemoved {
    __kind: 'NominationRemoved'
    /**
     * the account removed from nominated list
     */
    accountId: Uint8Array
    /**
     * collator connected to the account
     */
    collatorId: Uint8Array
    /**
     * amount unstaked from collator
     */
    amount: bigint
}

/**
 * A candidate has been selected to become a collator for the current round.
 */
export interface CollatorStakingEvent_CollatorSelected {
    __kind: 'CollatorSelected'
    /**
     * [`AccountId`](frame_system::Config::AccountId) of collator
     */
    accountId: Uint8Array
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    messageHash: Uint8Array
    messageId: Uint8Array
    weight: Weight
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    messageHash: Uint8Array
    messageId: Uint8Array
    error: V3Error
    weight: Weight
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    messageHash: Uint8Array
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    messageHash: Uint8Array
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    messageHash: Uint8Array
}

/**
 * An XCM exceeded the individual message weight budget.
 */
export interface XcmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    sender: number
    sentAt: number
    index: bigint
    required: Weight
}

/**
 * An XCM from the overweight queue was executed with the given actual weight used.
 */
export interface XcmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    index: bigint
    used: Weight
}

/**
 * The `Event` enum of this pallet
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_InvalidQuerierVersion | PolkadotXcmEvent_InvalidQuerier | PolkadotXcmEvent_VersionNotifyStarted | PolkadotXcmEvent_VersionNotifyRequested | PolkadotXcmEvent_VersionNotifyUnrequested | PolkadotXcmEvent_FeesPaid | PolkadotXcmEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    outcome: V3Outcome
}

/**
 * A XCM message was sent.
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    origin: V3MultiLocation
    destination: V3MultiLocation
    message: V3Instruction[]
    messageId: Uint8Array
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    queryId: bigint
    response: V3Response
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 */
export interface PolkadotXcmEvent_Notified {
    __kind: 'Notified'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The registered notification could
 * not be dispatched because the dispatch weight is greater than the maximum weight
 * originally budgeted by this runtime for the query result.
 */
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    queryId: bigint
    palletIndex: number
    callIndex: number
    actualWeight: Weight
    maxBudgetedWeight: Weight
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
    __kind: 'NotifyDispatchError'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Query response has been received and query is removed. The dispatch was unable to be
 * decoded into a `Call`; this might be due to dispatch function having a signature which
 * is not `(origin, QueryId, Response)`.
 */
export interface PolkadotXcmEvent_NotifyDecodeFailed {
    __kind: 'NotifyDecodeFailed'
    queryId: bigint
    palletIndex: number
    callIndex: number
}

/**
 * Expected query response has been received but the origin location of the response does
 * not match that expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    origin: V3MultiLocation
    queryId: bigint
    expectedLocation: (V3MultiLocation | undefined)
}

/**
 * Expected query response has been received but the expected origin location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Received query response has been read and removed.
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    queryId: bigint
}

/**
 * Some assets have been placed in an asset trap.
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * The cost of sending it (borne by the chain) is included.
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    destination: V3MultiLocation
    result: number
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    location: V3MultiLocation
    version: number
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    location: V3MultiLocation
    queryId: bigint
    error: V3Error
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    location: VersionedMultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the expected querier location placed in
 * storage by this runtime previously cannot be decoded. The query remains registered.
 * 
 * This is unexpected (since a location placed in storage in a previously executing
 * runtime should be readable prior to query timeout) and dangerous since the possibly
 * valid response will be dropped. Manual governance intervention is probably going to be
 * needed.
 */
export interface PolkadotXcmEvent_InvalidQuerierVersion {
    __kind: 'InvalidQuerierVersion'
    origin: V3MultiLocation
    queryId: bigint
}

/**
 * Expected query response has been received but the querier location of the response does
 * not match the expected. The query remains registered for a later, valid, response to
 * be received and acted upon.
 */
export interface PolkadotXcmEvent_InvalidQuerier {
    __kind: 'InvalidQuerier'
    origin: V3MultiLocation
    queryId: bigint
    expectedQuerier: V3MultiLocation
    maybeActualQuerier: (V3MultiLocation | undefined)
}

/**
 * A remote has requested XCM version change notification from us and we have honored it.
 * A version information message is sent to them and its cost is included.
 */
export interface PolkadotXcmEvent_VersionNotifyStarted {
    __kind: 'VersionNotifyStarted'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain send us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyRequested {
    __kind: 'VersionNotifyRequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * We have requested that a remote chain stops sending us XCM version change notifications.
 */
export interface PolkadotXcmEvent_VersionNotifyUnrequested {
    __kind: 'VersionNotifyUnrequested'
    destination: V3MultiLocation
    cost: V3MultiAsset[]
    messageId: Uint8Array
}

/**
 * Fees were paid from a location for an operation (often for using `SendXcm`).
 */
export interface PolkadotXcmEvent_FeesPaid {
    __kind: 'FeesPaid'
    paying: V3MultiLocation
    fees: V3MultiAsset[]
}

/**
 * Some assets have been claimed from an asset trap
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    hash: Uint8Array
    origin: V3MultiLocation
    assets: VersionedMultiAssets
}

/**
 * The `Event` enum of this pallet
 */
export type CumulusXcmEvent = CumulusXcmEvent_InvalidFormat | CumulusXcmEvent_UnsupportedVersion | CumulusXcmEvent_ExecutedDownward

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface CumulusXcmEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface CumulusXcmEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    value: [Uint8Array, V3Outcome]
}

/**
 * The `Event` enum of this pallet
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced | DmpQueueEvent_MaxMessagesExhausted

/**
 * Downward message is invalid XCM.
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    messageHash: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    messageHash: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    messageHash: Uint8Array
    messageId: Uint8Array
    outcome: V3Outcome
}

/**
 * The weight limit for handling downward messages was reached.
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    messageHash: Uint8Array
    messageId: Uint8Array
    remainingWeight: Weight
    requiredWeight: Weight
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
    messageHash: Uint8Array
    messageId: Uint8Array
    overweightIndex: bigint
    requiredWeight: Weight
}

/**
 * Downward message from the overweight queue was executed.
 */
export interface DmpQueueEvent_OverweightServiced {
    __kind: 'OverweightServiced'
    overweightIndex: bigint
    weightUsed: Weight
}

/**
 * The maximum number of downward messages was reached.
 */
export interface DmpQueueEvent_MaxMessagesExhausted {
    __kind: 'MaxMessagesExhausted'
    messageHash: Uint8Array
}

/**
 * The `Event` enum of this pallet
 */
export type OrmlXcmEvent = OrmlXcmEvent_Sent

/**
 * XCM message sent. \[to, message\]
 */
export interface OrmlXcmEvent_Sent {
    __kind: 'Sent'
    to: V3MultiLocation
    message: V3Instruction[]
}

/**
 * The `Event` enum of this pallet
 */
export type MatrixXcmEvent = MatrixXcmEvent_MinimumWeightUpdated | MatrixXcmEvent_XcmTransferFailed

/**
 * Xcm fee and weight updated
 */
export interface MatrixXcmEvent_MinimumWeightUpdated {
    __kind: 'MinimumWeightUpdated'
    value: MinimumWeightFeePair
}

/**
 * XCM transfer failed
 */
export interface MatrixXcmEvent_XcmTransferFailed {
    __kind: 'XcmTransferFailed'
    value: DispatchError
}

/**
 * The `Event` enum of this pallet
 */
export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 * Deposit success.
 */
export interface UnknownTokensEvent_Deposited {
    __kind: 'Deposited'
    asset: V3MultiAsset
    who: V3MultiLocation
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    asset: V3MultiAsset
    who: V3MultiLocation
}

/**
 * The `Event` enum of this pallet
 */
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
    __kind: 'TransferredMultiAssets'
    sender: Uint8Array
    assets: V3MultiAsset[]
    fee: V3MultiAsset
    dest: V3MultiLocation
}

/**
 * The `Event` enum of this pallet
 */
export type BountiesEvent = BountiesEvent_BountyProposed | BountiesEvent_BountyRejected | BountiesEvent_BountyBecameActive | BountiesEvent_BountyAwarded | BountiesEvent_BountyClaimed | BountiesEvent_BountyCanceled | BountiesEvent_BountyExtended

/**
 * New bounty proposal.
 */
export interface BountiesEvent_BountyProposed {
    __kind: 'BountyProposed'
    index: number
}

/**
 * A bounty proposal was rejected; funds were slashed.
 */
export interface BountiesEvent_BountyRejected {
    __kind: 'BountyRejected'
    index: number
    bond: bigint
}

/**
 * A bounty proposal is funded and became active.
 */
export interface BountiesEvent_BountyBecameActive {
    __kind: 'BountyBecameActive'
    index: number
}

/**
 * A bounty is awarded to a beneficiary.
 */
export interface BountiesEvent_BountyAwarded {
    __kind: 'BountyAwarded'
    index: number
    beneficiary: Uint8Array
}

/**
 * A bounty is claimed by beneficiary.
 */
export interface BountiesEvent_BountyClaimed {
    __kind: 'BountyClaimed'
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

/**
 * A bounty is cancelled.
 */
export interface BountiesEvent_BountyCanceled {
    __kind: 'BountyCanceled'
    index: number
}

/**
 * A bounty expiry is extended.
 */
export interface BountiesEvent_BountyExtended {
    __kind: 'BountyExtended'
    index: number
}

/**
 * The `Event` enum of this pallet
 */
export type MultiTokensEvent = MultiTokensEvent_CollectionCreated | MultiTokensEvent_CollectionDestroyed | MultiTokensEvent_CollectionMutated | MultiTokensEvent_Minted | MultiTokensEvent_TokenCreated | MultiTokensEvent_TokenMutated | MultiTokensEvent_Burned | MultiTokensEvent_TokenDestroyed | MultiTokensEvent_Transferred | MultiTokensEvent_Frozen | MultiTokensEvent_Thawed | MultiTokensEvent_AttributeSet | MultiTokensEvent_AttributeRemoved | MultiTokensEvent_Approved | MultiTokensEvent_Unapproved | MultiTokensEvent_CollectionAccountCreated | MultiTokensEvent_TokenAccountCreated | MultiTokensEvent_CollectionAccountDestroyed | MultiTokensEvent_TokenAccountDestroyed | MultiTokensEvent_Reserved | MultiTokensEvent_Unreserved | MultiTokensEvent_MovedReserves | MultiTokensEvent_ReserveRepatriated | MultiTokensEvent_BalanceSet | MultiTokensEvent_Withdraw | MultiTokensEvent_Deposit | MultiTokensEvent_Slashed | MultiTokensEvent_CollectionUpdated | MultiTokensEvent_TokenUpdated | MultiTokensEvent_NextCollectionIdUpdated | MultiTokensEvent_CollectionAccountUpdated | MultiTokensEvent_TokenAccountUpdated | MultiTokensEvent_MigrationStatusUpdated | MultiTokensEvent_ClaimedCollections | MultiTokensEvent_ClaimedTokens | MultiTokensEvent_ClaimTokensInitiated | MultiTokensEvent_ClaimTokensCompleted | MultiTokensEvent_CollectionTransferred | MultiTokensEvent_CollectionTransferCancelled

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
 * Collection ownership was transferred
 */
export interface MultiTokensEvent_CollectionTransferred {
    __kind: 'CollectionTransferred'
    /**
     * The collection that was transferred
     */
    collectionId: bigint
    /**
     * The new owner of the collection
     */
    newOwner: Uint8Array
}

/**
 * A pending collection transfer was cancelled
 */
export interface MultiTokensEvent_CollectionTransferCancelled {
    __kind: 'CollectionTransferCancelled'
    /**
     * The collection id of the cancelled transfer
     */
    collectionId: bigint
}

/**
 * The pallet's event type
 */
export type PoolsEvent = PoolsEvent_PoolsMutated

/**
 * Pools storage was modified by [`PoolsMutation`]
 */
export interface PoolsEvent_PoolsMutated {
    __kind: 'PoolsMutated'
    value: PoolsMutation
}

/**
 * The `Event` enum of this pallet
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
 * The `Event` enum of this pallet
 */
export type MatrixUtilityEvent = MatrixUtilityEvent_BatchDispatched | MatrixUtilityEvent_BatchPartiallyDispatched | MatrixUtilityEvent_BatchFailed

/**
 * Batch of calls dispatched without errors.
 */
export interface MatrixUtilityEvent_BatchDispatched {
    __kind: 'BatchDispatched'
}

/**
 * Batch of calls dispatched, but some calls resulted in error.
 * Indexes and errors of failing dispatch calls are provided.
 */
export interface MatrixUtilityEvent_BatchPartiallyDispatched {
    __kind: 'BatchPartiallyDispatched'
    value: [number, DispatchError][]
}

/**
 * Batch of calls did not disptach completely.
 * Index and error of the failing dispatch call is provided.
 */
export interface MatrixUtilityEvent_BatchFailed {
    __kind: 'BatchFailed'
    index: number
    error: DispatchError
}

/**
 * The `Event` enum of this pallet
 */
export type ClaimsEvent = ClaimsEvent_ClaimRequested | ClaimsEvent_Claimed | ClaimsEvent_EthereumBlocksProcessed | ClaimsEvent_ClaimMinted | ClaimsEvent_ClaimMoved | ClaimsEvent_ExchangeRateSet | ClaimsEvent_DelayTimeForClaimSet | ClaimsEvent_ClaimRejected

/**
 * Claim has been requested by an account through the Relayer. `[who, amount,
 * transaction_hash, is_efi_token]`
 */
export interface ClaimsEvent_ClaimRequested {
    __kind: 'ClaimRequested'
    /**
     * The account which requests the claim through the Relayer
     */
    who: Uint8Array
    /**
     * The amount of burned tokens
     */
    amountBurned: bigint
    /**
     * Hash of the transaction in which the tokens were burnt
     */
    transactionHash: Uint8Array
    /**
     * If the burnt token is EFI or not
     */
    isEfiToken: boolean
    /**
     * ENJ amount claimable
     */
    amountClaimable: bigint
}

/**
 * Someone claimed some ENJ2 from EFI. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    /**
     * The account that received the claim
     */
    who: Uint8Array
    /**
     * The ethereum address, if the claim was made from Ethereum
     */
    ethereumAddress: (Uint8Array | undefined)
    /**
     * The amount that was claimed
     */
    amount: bigint
}

/**
 * Claims have been processed for the Ethereum block by the Relayer.
 */
export interface ClaimsEvent_EthereumBlocksProcessed {
    __kind: 'EthereumBlocksProcessed'
    /**
     * Ethereum block number that contains the last burn transaction relayed by the
     * Relayer.
     */
    blockNumber: number
}

/**
 * Claim has been minted for someone by the root. `[who, amount]`
 */
export interface ClaimsEvent_ClaimMinted {
    __kind: 'ClaimMinted'
    /**
     * the address allowed to collect this claim
     */
    who: Uint8Array
    /**
     * the number of ENJ2 tokens that will be claimed
     */
    amount: bigint
}

/**
 * Someone's claim has been moved to another address. `[old, new]`
 */
export interface ClaimsEvent_ClaimMoved {
    __kind: 'ClaimMoved'
    /**
     * old account address that has the claim
     */
    old: Uint8Array
    /**
     * new account address
     */
    new: Uint8Array
}

/**
 * Exchange rate is set. `[exchange_rate]`
 */
export interface ClaimsEvent_ExchangeRateSet {
    __kind: 'ExchangeRateSet'
    /**
     * the amount of ENJ equivalent to 1 EFI
     */
    exchangeRate: number
}

/**
 * Delay time for claim is set. `[delay_time]`
 */
export interface ClaimsEvent_DelayTimeForClaimSet {
    __kind: 'DelayTimeForClaimSet'
    /**
     * the number of blocks the user has to wait to claim his ENJ2 once the claim for
     * which is requested
     */
    delayTime: number
}

/**
 * Someone's claim has been rejected. `[account, transaction_hash]`
 */
export interface ClaimsEvent_ClaimRejected {
    __kind: 'ClaimRejected'
    /**
     * account address for which the claim was requested by the relayer
     */
    account: Uint8Array
    /**
     * Hash of the transaction for which the claim was requested by the relayer
     */
    transactionHash: Uint8Array
}

/**
 * The `Event` enum of this pallet
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

export interface Bid {
    bidder: Uint8Array
    price: bigint
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

export type V3WildFungibility = V3WildFungibility_Fungible | V3WildFungibility_NonFungible

export interface V3WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V3WildFungibility_NonFungible {
    __kind: 'NonFungible'
}

export interface V5PersistedValidationData {
    parentHead: Uint8Array
    relayParentNumber: number
    relayParentStorageRoot: Uint8Array
    maxPovSize: number
}

export interface StorageProof {
    trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
    sentAt: number
    msg: Uint8Array
}

export interface InboundHrmpMessage {
    sentAt: number
    data: Uint8Array
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

export type Type_349 = Type_349_WithdrawAsset | Type_349_ReserveAssetDeposited | Type_349_ReceiveTeleportedAsset | Type_349_QueryResponse | Type_349_TransferAsset | Type_349_TransferReserveAsset | Type_349_Transact | Type_349_HrmpNewChannelOpenRequest | Type_349_HrmpChannelAccepted | Type_349_HrmpChannelClosing | Type_349_ClearOrigin | Type_349_DescendOrigin | Type_349_ReportError | Type_349_DepositAsset | Type_349_DepositReserveAsset | Type_349_ExchangeAsset | Type_349_InitiateReserveWithdraw | Type_349_InitiateTeleport | Type_349_QueryHolding | Type_349_BuyExecution | Type_349_RefundSurplus | Type_349_SetErrorHandler | Type_349_SetAppendix | Type_349_ClearError | Type_349_ClaimAsset | Type_349_Trap | Type_349_SubscribeVersion | Type_349_UnsubscribeVersion

export interface Type_349_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V2MultiAsset[]
}

export interface Type_349_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V2MultiAsset[]
}

export interface Type_349_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V2MultiAsset[]
}

export interface Type_349_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_349_TransferAsset {
    __kind: 'TransferAsset'
    assets: V2MultiAsset[]
    beneficiary: V2MultiLocation
}

export interface Type_349_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V2MultiAsset[]
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_Transact {
    __kind: 'Transact'
    originType: V2OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_349_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_349_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_349_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_349_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_349_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V2Junctions
}

export interface Type_349_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V2MultiLocation
    maxResponseWeight: bigint
}

export interface Type_349_DepositAsset {
    __kind: 'DepositAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    beneficiary: V2MultiLocation
}

export interface Type_349_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V2MultiAssetFilter
    maxAssets: number
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V2MultiAssetFilter
    receive: V2MultiAsset[]
}

export interface Type_349_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V2MultiAssetFilter
    reserve: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V2MultiAssetFilter
    dest: V2MultiLocation
    xcm: V2Instruction[]
}

export interface Type_349_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V2MultiLocation
    assets: V2MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_349_BuyExecution {
    __kind: 'BuyExecution'
    fees: V2MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_349_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_349_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_349[]
}

export interface Type_349_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_349[]
}

export interface Type_349_ClearError {
    __kind: 'ClearError'
}

export interface Type_349_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V2MultiAsset[]
    ticket: V2MultiLocation
}

export interface Type_349_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_349_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_349_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_353 = Type_353_WithdrawAsset | Type_353_ReserveAssetDeposited | Type_353_ReceiveTeleportedAsset | Type_353_QueryResponse | Type_353_TransferAsset | Type_353_TransferReserveAsset | Type_353_Transact | Type_353_HrmpNewChannelOpenRequest | Type_353_HrmpChannelAccepted | Type_353_HrmpChannelClosing | Type_353_ClearOrigin | Type_353_DescendOrigin | Type_353_ReportError | Type_353_DepositAsset | Type_353_DepositReserveAsset | Type_353_ExchangeAsset | Type_353_InitiateReserveWithdraw | Type_353_InitiateTeleport | Type_353_ReportHolding | Type_353_BuyExecution | Type_353_RefundSurplus | Type_353_SetErrorHandler | Type_353_SetAppendix | Type_353_ClearError | Type_353_ClaimAsset | Type_353_Trap | Type_353_SubscribeVersion | Type_353_UnsubscribeVersion | Type_353_BurnAsset | Type_353_ExpectAsset | Type_353_ExpectOrigin | Type_353_ExpectError | Type_353_ExpectTransactStatus | Type_353_QueryPallet | Type_353_ExpectPallet | Type_353_ReportTransactStatus | Type_353_ClearTransactStatus | Type_353_UniversalOrigin | Type_353_ExportMessage | Type_353_LockAsset | Type_353_UnlockAsset | Type_353_NoteUnlockable | Type_353_RequestUnlock | Type_353_SetFeesMode | Type_353_SetTopic | Type_353_ClearTopic | Type_353_AliasOrigin | Type_353_UnpaidExecution

export interface Type_353_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V3MultiAsset[]
}

export interface Type_353_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V3MultiAsset[]
}

export interface Type_353_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V3MultiAsset[]
}

export interface Type_353_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V3Response
    maxWeight: Weight
    querier: (V3MultiLocation | undefined)
}

export interface Type_353_TransferAsset {
    __kind: 'TransferAsset'
    assets: V3MultiAsset[]
    beneficiary: V3MultiLocation
}

export interface Type_353_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V3MultiAsset[]
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_Transact {
    __kind: 'Transact'
    originKind: V2OriginKind
    requireWeightAtMost: Weight
    call: DoubleEncoded
}

export interface Type_353_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_353_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_353_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_353_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_353_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V3Junctions
}

export interface Type_353_ReportError {
    __kind: 'ReportError'
    value: V3QueryResponseInfo
}

export interface Type_353_DepositAsset {
    __kind: 'DepositAsset'
    assets: V3MultiAssetFilter
    beneficiary: V3MultiLocation
}

export interface Type_353_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V3MultiAssetFilter
    want: V3MultiAsset[]
    maximal: boolean
}

export interface Type_353_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V3MultiAssetFilter
    reserve: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V3MultiAssetFilter
    dest: V3MultiLocation
    xcm: V3Instruction[]
}

export interface Type_353_ReportHolding {
    __kind: 'ReportHolding'
    responseInfo: V3QueryResponseInfo
    assets: V3MultiAssetFilter
}

export interface Type_353_BuyExecution {
    __kind: 'BuyExecution'
    fees: V3MultiAsset
    weightLimit: V3WeightLimit
}

export interface Type_353_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_353_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_353[]
}

export interface Type_353_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_353[]
}

export interface Type_353_ClearError {
    __kind: 'ClearError'
}

export interface Type_353_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V3MultiAsset[]
    ticket: V3MultiLocation
}

export interface Type_353_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_353_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: Weight
}

export interface Type_353_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export interface Type_353_BurnAsset {
    __kind: 'BurnAsset'
    value: V3MultiAsset[]
}

export interface Type_353_ExpectAsset {
    __kind: 'ExpectAsset'
    value: V3MultiAsset[]
}

export interface Type_353_ExpectOrigin {
    __kind: 'ExpectOrigin'
    value: (V3MultiLocation | undefined)
}

export interface Type_353_ExpectError {
    __kind: 'ExpectError'
    value: ([number, V3Error] | undefined)
}

export interface Type_353_ExpectTransactStatus {
    __kind: 'ExpectTransactStatus'
    value: V3MaybeErrorCode
}

export interface Type_353_QueryPallet {
    __kind: 'QueryPallet'
    moduleName: Uint8Array
    responseInfo: V3QueryResponseInfo
}

export interface Type_353_ExpectPallet {
    __kind: 'ExpectPallet'
    index: number
    name: Uint8Array
    moduleName: Uint8Array
    crateMajor: number
    minCrateMinor: number
}

export interface Type_353_ReportTransactStatus {
    __kind: 'ReportTransactStatus'
    value: V3QueryResponseInfo
}

export interface Type_353_ClearTransactStatus {
    __kind: 'ClearTransactStatus'
}

export interface Type_353_UniversalOrigin {
    __kind: 'UniversalOrigin'
    value: V3Junction
}

export interface Type_353_ExportMessage {
    __kind: 'ExportMessage'
    network: V3NetworkId
    destination: V3Junctions
    xcm: V3Instruction[]
}

export interface Type_353_LockAsset {
    __kind: 'LockAsset'
    asset: V3MultiAsset
    unlocker: V3MultiLocation
}

export interface Type_353_UnlockAsset {
    __kind: 'UnlockAsset'
    asset: V3MultiAsset
    target: V3MultiLocation
}

export interface Type_353_NoteUnlockable {
    __kind: 'NoteUnlockable'
    asset: V3MultiAsset
    owner: V3MultiLocation
}

export interface Type_353_RequestUnlock {
    __kind: 'RequestUnlock'
    asset: V3MultiAsset
    locker: V3MultiLocation
}

export interface Type_353_SetFeesMode {
    __kind: 'SetFeesMode'
    jitWithdraw: boolean
}

export interface Type_353_SetTopic {
    __kind: 'SetTopic'
    value: Uint8Array
}

export interface Type_353_ClearTopic {
    __kind: 'ClearTopic'
}

export interface Type_353_AliasOrigin {
    __kind: 'AliasOrigin'
    value: V3MultiLocation
}

export interface Type_353_UnpaidExecution {
    __kind: 'UnpaidExecution'
    weightLimit: V3WeightLimit
    checkOrigin: (V3MultiLocation | undefined)
}

export type Type_146 = Type_146_NoMutation | Type_146_SomeMutation

export interface Type_146_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_146_SomeMutation {
    __kind: 'SomeMutation'
    value: (TokenMarketBehavior | undefined)
}

export type Type_149 = Type_149_NoMutation | Type_149_SomeMutation

export interface Type_149_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_149_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_150 = Type_150_NoMutation | Type_150_SomeMutation

export interface Type_150_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_150_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
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

export interface ForeignTokenCreationParams {
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V3MultiLocation | undefined)
    unitsPerSecond: (bigint | undefined)
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

export interface Pool {
    feeShare: number
}

export type Type_212 = Type_212_NoMutation | Type_212_SomeMutation

export interface Type_212_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_212_SomeMutation {
    __kind: 'SomeMutation'
    value: (UserAccountManagement | undefined)
}

export interface TransactionData {
    account: Uint8Array
    amount: bigint
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

export type Type_33 = Type_33_Ok | Type_33_Err

export interface Type_33_Ok {
    __kind: 'Ok'
}

export interface Type_33_Err {
    __kind: 'Err'
    value: DispatchError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
    __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
    __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
    __kind: 'SimpleMajority'
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

export interface DefaultForeignTokenMetadata {
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V3MultiLocation | undefined)
    unitsPerSecond: (bigint | undefined)
    premintedSupply: bigint
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

export type V2WildFungibility = V2WildFungibility_Fungible | V2WildFungibility_NonFungible

export interface V2WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V2WildFungibility_NonFungible {
    __kind: 'NonFungible'
}
