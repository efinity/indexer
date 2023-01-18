import type {Result, Option} from './support'

export type Type_31 = Type_31_Ok | Type_31_Err

export interface Type_31_Ok {
    __kind: 'Ok'
}

export interface Type_31_Err {
    __kind: 'Err'
    value: DispatchError
}

export interface Weight {
    refTime: bigint
    proofSize: bigint
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_TooManyConsumers | DispatchError_Token | DispatchError_Arithmetic | DispatchError_Transactional | DispatchError_Exhausted | DispatchError_Corruption | DispatchError_Unavailable

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

export interface MinimumWeightFeePair {
    minimumWeight: Weight
    fee: bigint
}

export type DispatchRuleKind = DispatchRuleKind_WhitelistedCallers | DispatchRuleKind_WhitelistedCollections | DispatchRuleKind_MaxFuelBurnPerTransaction | DispatchRuleKind_UserFuelBudget | DispatchRuleKind_TankFuelBudget | DispatchRuleKind_RequireToken | DispatchRuleKind_PermittedCalls | DispatchRuleKind_PermittedExtrinsics

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

export interface DefaultTankMutation {
    userAccountManagement: Type_191
    providesDeposit: (boolean | undefined)
    accountRules: (AccountRuleDescriptor[] | undefined)
}

export interface DefaultCollectionMutation {
    owner: (Uint8Array | undefined)
    royalty: ShouldMutate
    explicitRoyaltyCurrencies: (AssetId[] | undefined)
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

export type RootOrSigned = RootOrSigned_Root | RootOrSigned_Signed

export interface RootOrSigned_Root {
    __kind: 'Root'
}

export interface RootOrSigned_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface DefaultTokenMutation {
    behavior: Type_129
    listingForbidden: Type_132
    metadata: Type_133
}

export interface Token {
    supply: bigint
    cap: (TokenCap | undefined)
    isFrozen: boolean
    minimumBalance: bigint
    unitPrice: bigint
    mintDeposit: bigint
    attributeCount: number
    marketBehavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
}

export interface Timepoint {
    height: number
    index: number
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
    __kind: 'V0'
    value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
    __kind: 'V1'
    value: V1MultiAsset[]
}

export interface DispatchInfo {
    weight: Weight
    class: DispatchClass
    paysFee: Pays
}

export interface V1MultiAsset {
    id: V1AssetId
    fun: V1Fungibility
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

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Sudo | Call_Preimage | Call_Scheduler | Call_Utility | Call_Balances | Call_Vesting | Call_VestingRegistrar | Call_Democracy | Call_Council | Call_TechnicalCommittee | Call_CommunityPool | Call_TechnicalMembership | Call_Multisig | Call_Authorship | Call_CollatorStaking | Call_Session | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_OrmlXcm | Call_EfinityXcm | Call_XTokens | Call_Bounties | Call_MultiTokens | Call_Claims | Call_Pools | Call_FuelTanks | Call_Marketplace | Call_ExtrinsicPause | Call_EfinityUtility

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

export interface Call_Vesting {
    __kind: 'Vesting'
    value: VestingCall
}

export interface Call_VestingRegistrar {
    __kind: 'VestingRegistrar'
    value: VestingRegistrarCall
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

export interface Call_Authorship {
    __kind: 'Authorship'
    value: AuthorshipCall
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

export interface Call_EfinityXcm {
    __kind: 'EfinityXcm'
    value: EfinityXcmCall
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

export interface Call_Claims {
    __kind: 'Claims'
    value: ClaimsCall
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

export interface Call_EfinityUtility {
    __kind: 'EfinityUtility'
    value: EfinityUtilityCall
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

export type XcmOperation = XcmOperation_XTokensTransfer | XcmOperation_ParachainFee

export interface XcmOperation_XTokensTransfer {
    __kind: 'XTokensTransfer'
}

export interface XcmOperation_ParachainFee {
    __kind: 'ParachainFee'
    value: V1MultiLocation
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

export interface AssetId {
    collectionId: bigint
    tokenId: bigint
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

export type DispatchRuleDescriptor = DispatchRuleDescriptor_WhitelistedCallers | DispatchRuleDescriptor_WhitelistedCollections | DispatchRuleDescriptor_MaxFuelBurnPerTransaction | DispatchRuleDescriptor_UserFuelBudget | DispatchRuleDescriptor_TankFuelBudget | DispatchRuleDescriptor_RequireToken | DispatchRuleDescriptor_PermittedCalls | DispatchRuleDescriptor_PermittedExtrinsics

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
    value: TankFuelBudgetRule
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

export interface Type_373 {
    accountId: Uint8Array
    params: DefaultMintParams
}

export interface AttributeKeyValuePair {
    key: Uint8Array
    value: Uint8Array
}

export interface Recipient {
    accountId: Uint8Array
    params: DefaultTransferParams
}

export interface DefaultCollectionDescriptor {
    policy: DefaultCollectionPolicyDescriptor
    explicitRoyaltyCurrencies: AssetId[]
    attributes: AttributeKeyValuePair[]
}

export type DefaultMintParams = DefaultMintParams_CreateToken | DefaultMintParams_Mint | DefaultMintParams_CreateForeignToken

export interface DefaultMintParams_CreateToken {
    __kind: 'CreateToken'
    tokenId: bigint
    initialSupply: bigint
    unitPrice: bigint
    cap: (TokenCap | undefined)
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    attributes: AttributeKeyValuePair[]
}

export interface DefaultMintParams_Mint {
    __kind: 'Mint'
    tokenId: bigint
    amount: bigint
    unitPrice: (bigint | undefined)
}

export interface DefaultMintParams_CreateForeignToken {
    __kind: 'CreateForeignToken'
    tokenId: bigint
    behavior: (TokenMarketBehavior | undefined)
    listingForbidden: boolean
    metadata: DefaultTokenMetadata
    existentialDeposit: bigint
}

export type Type_329 = Type_329_V0 | Type_329_V1 | Type_329_V2

export interface Type_329_V0 {
    __kind: 'V0'
    value: Type_330
}

export interface Type_329_V1 {
    __kind: 'V1'
    value: Type_335
}

export interface Type_329_V2 {
    __kind: 'V2'
    value: Type_341[]
}

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_PolkadotXcm | OriginCaller_CumulusXcm | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_281
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_282
}

export interface OriginCaller_PolkadotXcm {
    __kind: 'PolkadotXcm'
    value: Origin
}

export interface OriginCaller_CumulusXcm {
    __kind: 'CumulusXcm'
    value: Type_284
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export interface VestedAccount {
    accountId: Uint8Array
    amount: bigint
}

export type VersionedMultiLocation = VersionedMultiLocation_V0 | VersionedMultiLocation_V1

export interface VersionedMultiLocation_V0 {
    __kind: 'V0'
    value: V0MultiLocation
}

export interface VersionedMultiLocation_V1 {
    __kind: 'V1'
    value: V1MultiLocation
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
    __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
    __kind: 'Limited'
    value: bigint
}

export type VersionedMultiAsset = VersionedMultiAsset_V0 | VersionedMultiAsset_V1

export interface VersionedMultiAsset_V0 {
    __kind: 'V0'
    value: V0MultiAsset
}

export interface VersionedMultiAsset_V1 {
    __kind: 'V1'
    value: V1MultiAsset
}

export interface Collator {
    account: Uint8Array
    amount: bigint
    totalStake: bigint
    rewardsCut: number
    nominators: Uint8Array[]
}

export interface Round {
    number: number
    startingBlock: number
    collators: Collator[]
}

export interface CollatorSessionInfo {
    authoredBlockCount: number
    uptime: number
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

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
    __kind: 'Ongoing'
    value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
    __kind: 'Finished'
    approved: boolean
    end: number
}

export interface ConfigData {
    maxIndividual: Weight
}

export interface UserAccount {
    tankDeposit: bigint
    userDeposit: bigint
    ruleDataSets: [number, [DispatchRuleKind, Uint8Array][]][]
}

export interface FuelTank {
    owner: Uint8Array
    name: Uint8Array
    ruleSets: [number, RuleSet][]
    totalReserved: bigint
    accountCount: number
    userAccountManagement: (UserAccountManagement | undefined)
    isFrozen: boolean
    providesDeposit: boolean
    accountRules: [AccountRuleKind, AccountRuleWrapper][]
}

export interface WeightedIdleOperation {
    operation: IdleOperation
    estimatedWeight: Weight
}

export type RequestStatus = RequestStatus_Unrequested | RequestStatus_Requested

export interface RequestStatus_Unrequested {
    __kind: 'Unrequested'
    deposit: [Uint8Array, bigint]
    len: number
}

export interface RequestStatus_Requested {
    __kind: 'Requested'
    deposit: ([Uint8Array, bigint] | undefined)
    count: number
    len: (number | undefined)
}

export interface Scheduled {
    maybeId: (Uint8Array | undefined)
    priority: number
    call: Bounded
    maybePeriodic: ([number, number] | undefined)
    origin: OriginCaller
}

export interface PerDispatchClass {
    normal: Weight
    operational: Weight
    mandatory: Weight
}

export interface EventRecord {
    phase: Phase
    event: Event
    topics: Uint8Array[]
}

export interface QueueConfigData {
    suspendThreshold: number
    dropThreshold: number
    resumeThreshold: number
    thresholdWeight: Weight
    weightRestrictDecay: Weight
    xcmpMaxIndividualWeight: Weight
}

export interface ModuleError {
    index: number
    error: Uint8Array
}

export type TokenError = TokenError_NoFunds | TokenError_WouldDie | TokenError_BelowMinimum | TokenError_CannotCreate | TokenError_UnknownAsset | TokenError_Frozen | TokenError_Unsupported

export interface TokenError_NoFunds {
    __kind: 'NoFunds'
}

export interface TokenError_WouldDie {
    __kind: 'WouldDie'
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

export type Type_191 = Type_191_NoMutation | Type_191_SomeMutation

export interface Type_191_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_191_SomeMutation {
    __kind: 'SomeMutation'
    value: (UserAccountManagement | undefined)
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

export type ShouldMutate = ShouldMutate_NoMutation | ShouldMutate_SomeMutation

export interface ShouldMutate_NoMutation {
    __kind: 'NoMutation'
}

export interface ShouldMutate_SomeMutation {
    __kind: 'SomeMutation'
    value: (DefaultRoyalty | undefined)
}

export type Type_129 = Type_129_NoMutation | Type_129_SomeMutation

export interface Type_129_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_129_SomeMutation {
    __kind: 'SomeMutation'
    value: (TokenMarketBehavior | undefined)
}

export type Type_132 = Type_132_NoMutation | Type_132_SomeMutation

export interface Type_132_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_132_SomeMutation {
    __kind: 'SomeMutation'
    value: boolean
}

export type Type_133 = Type_133_NoMutation | Type_133_SomeMutation

export interface Type_133_NoMutation {
    __kind: 'NoMutation'
}

export interface Type_133_SomeMutation {
    __kind: 'SomeMutation'
    value: DefaultTokenMetadata
}

export type TokenCap = TokenCap_SingleMint | TokenCap_Supply

export interface TokenCap_SingleMint {
    __kind: 'SingleMint'
}

export interface TokenCap_Supply {
    __kind: 'Supply'
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

export type DefaultTokenMetadata = DefaultTokenMetadata_Native | DefaultTokenMetadata_Foreign

export interface DefaultTokenMetadata_Native {
    __kind: 'Native'
}

export interface DefaultTokenMetadata_Foreign {
    __kind: 'Foreign'
    decimalCount: number
    name: Uint8Array
    symbol: Uint8Array
    location: (V1MultiLocation | undefined)
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V0MultiAsset = V0MultiAsset_None | V0MultiAsset_All | V0MultiAsset_AllFungible | V0MultiAsset_AllNonFungible | V0MultiAsset_AllAbstractFungible | V0MultiAsset_AllAbstractNonFungible | V0MultiAsset_AllConcreteFungible | V0MultiAsset_AllConcreteNonFungible | V0MultiAsset_AbstractFungible | V0MultiAsset_AbstractNonFungible | V0MultiAsset_ConcreteFungible | V0MultiAsset_ConcreteNonFungible

export interface V0MultiAsset_None {
    __kind: 'None'
}

export interface V0MultiAsset_All {
    __kind: 'All'
}

export interface V0MultiAsset_AllFungible {
    __kind: 'AllFungible'
}

export interface V0MultiAsset_AllNonFungible {
    __kind: 'AllNonFungible'
}

export interface V0MultiAsset_AllAbstractFungible {
    __kind: 'AllAbstractFungible'
    id: Uint8Array
}

export interface V0MultiAsset_AllAbstractNonFungible {
    __kind: 'AllAbstractNonFungible'
    class: Uint8Array
}

export interface V0MultiAsset_AllConcreteFungible {
    __kind: 'AllConcreteFungible'
    id: V0MultiLocation
}

export interface V0MultiAsset_AllConcreteNonFungible {
    __kind: 'AllConcreteNonFungible'
    class: V0MultiLocation
}

export interface V0MultiAsset_AbstractFungible {
    __kind: 'AbstractFungible'
    id: Uint8Array
    amount: bigint
}

export interface V0MultiAsset_AbstractNonFungible {
    __kind: 'AbstractNonFungible'
    class: Uint8Array
    instance: V1AssetInstance
}

export interface V0MultiAsset_ConcreteFungible {
    __kind: 'ConcreteFungible'
    id: V0MultiLocation
    amount: bigint
}

export interface V0MultiAsset_ConcreteNonFungible {
    __kind: 'ConcreteNonFungible'
    class: V0MultiLocation
    instance: V1AssetInstance
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

export type V1AssetId = V1AssetId_Concrete | V1AssetId_Abstract

export interface V1AssetId_Concrete {
    __kind: 'Concrete'
    value: V1MultiLocation
}

export interface V1AssetId_Abstract {
    __kind: 'Abstract'
    value: Uint8Array
}

export type V1Fungibility = V1Fungibility_Fungible | V1Fungibility_NonFungible

export interface V1Fungibility_Fungible {
    __kind: 'Fungible'
    value: bigint
}

export interface V1Fungibility_NonFungible {
    __kind: 'NonFungible'
    value: V1AssetInstance
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
    __kind: 'fill_block'
    ratio: number
}

/**
 * Make some on-chain remark.
 * 
 * # <weight>
 * - `O(1)`
 * # </weight>
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
 * 
 * # <weight>
 * - `O(C + S)` where `C` length of `code` and `S` complexity of `can_set_code`
 * - 1 call to `can_set_code`: `O(S)` (calls `sp_io::misc::runtime_version` which is
 *   expensive).
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime, but generally this is very
 * expensive. We will treat this as a full block.
 * # </weight>
 */
export interface SystemCall_set_code {
    __kind: 'set_code'
    code: Uint8Array
}

/**
 * Set the new runtime code without doing any checks of the given `code`.
 * 
 * # <weight>
 * - `O(C)` where `C` length of `code`
 * - 1 storage write (codec `O(C)`).
 * - 1 digest item.
 * - 1 event.
 * The weight of this function is dependent on the runtime. We will treat this as a full
 * block. # </weight>
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
export type ParachainSystemCall = ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Set the current validation data.
 * 
 * This should be invoked exactly once per block. It will panic at the finalization
 * phase if the call was not invoked.
 * 
 * The dispatch origin for this call must be `Inherent`
 * 
 * As a side effect, this function upgrades the current validation function
 * if the appropriate time has come.
 */
export interface ParachainSystemCall_set_validation_data {
    __kind: 'set_validation_data'
    data: ParachainInherentData
}

export interface ParachainSystemCall_sudo_send_upward_message {
    __kind: 'sudo_send_upward_message'
    message: Uint8Array
}

export interface ParachainSystemCall_authorize_upgrade {
    __kind: 'authorize_upgrade'
    codeHash: Uint8Array
}

export interface ParachainSystemCall_enact_authorized_upgrade {
    __kind: 'enact_authorized_upgrade'
    code: Uint8Array
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
 * # <weight>
 * - `O(1)` (Note that implementations of `OnTimestampSet` must also be `O(1)`)
 * - 1 storage read and 1 storage mutation (codec `O(1)`). (because of `DidUpdate::take` in
 *   `on_finalize`)
 * - 1 event handler `on_timestamp_set`. Must be `O(1)`.
 * # </weight>
 */
export interface TimestampCall_set {
    __kind: 'set'
    now: bigint
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - The weight of this call is defined by the caller.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB change.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + 10,000.
 * # </weight>
 */
export interface SudoCall_sudo_as {
    __kind: 'sudo_as'
    who: MultiAddress
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
 * 
 * # <weight>
 * Same as [`schedule`].
 * # </weight>
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
 * 
 * # <weight>
 * Same as [`schedule_named`](Self::schedule_named).
 * # </weight>
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
export type UtilityCall = UtilityCall_batch | UtilityCall_as_derivative | UtilityCall_batch_all | UtilityCall_dispatch_as | UtilityCall_force_batch

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
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
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
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
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
 * # <weight>
 * - O(1).
 * - Limited storage reads.
 * - One DB write (event).
 * - Weight of derivative `call` execution + T::WeightInfo::dispatch_as().
 * # </weight>
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
 * # <weight>
 * - Complexity: O(C) where C is the number of calls to be batched.
 * # </weight>
 */
export interface UtilityCall_force_batch {
    __kind: 'force_batch'
    calls: Call[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * If the sender's account is below the existential deposit as a result
 * of the transfer, the account will be reaped.
 * 
 * The dispatch origin for this call must be `Signed` by the transactor.
 * 
 * # <weight>
 * - Dependent on arguments but not critical, given proper implementations for input config
 *   types. See related functions below.
 * - It contains a limited number of reads and writes internally and no complex
 *   computation.
 * 
 * Related functions:
 * 
 *   - `ensure_can_withdraw` is always called internally but has a bounded complexity.
 *   - Transferring balances to accounts that did not exist before will cause
 *     `T::OnNewAccount::on_new_account` to be called.
 *   - Removing enough funds from an account will trigger `T::DustRemoval::on_unbalanced`.
 *   - `transfer_keep_alive` works the same way as `transfer`, but has an additional check
 *     that the transfer will not kill the origin account.
 * ---------------------------------
 * - Origin account is already in memory, so no DB operations for them.
 * # </weight>
 */
export interface BalancesCall_transfer {
    __kind: 'transfer'
    dest: MultiAddress
    value: bigint
}

/**
 * Set the balances of a given account.
 * 
 * This will alter `FreeBalance` and `ReservedBalance` in storage. it will
 * also alter the total issuance of the system (`TotalIssuance`) appropriately.
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 */
export interface BalancesCall_set_balance {
    __kind: 'set_balance'
    who: MultiAddress
    newFree: bigint
    newReserved: bigint
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account may be
 * specified.
 * # <weight>
 * - Same as transfer, but additional read and write because the source account is not
 *   assumed to be in the overlay.
 * # </weight>
 */
export interface BalancesCall_force_transfer {
    __kind: 'force_transfer'
    source: MultiAddress
    dest: MultiAddress
    value: bigint
}

/**
 * Same as the [`transfer`] call, but with a check that the transfer will not kill the
 * origin account.
 * 
 * 99% of the time you want [`transfer`] instead.
 * 
 * [`transfer`]: struct.Pallet.html#method.transfer
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
 *   keep the sender account alive (true). # <weight>
 * - O(1). Just like transfer, but reading the user's transferable balance first.
 *   #</weight>
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
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingCall = VestingCall_claim | VestingCall_vested_transfer | VestingCall_update_vesting_schedules | VestingCall_claim_for

export interface VestingCall_claim {
    __kind: 'claim'
}

export interface VestingCall_vested_transfer {
    __kind: 'vested_transfer'
    dest: MultiAddress
    schedule: VestingSchedule
}

export interface VestingCall_update_vesting_schedules {
    __kind: 'update_vesting_schedules'
    who: MultiAddress
    vestingSchedules: VestingSchedule[]
}

export interface VestingCall_claim_for {
    __kind: 'claim_for'
    dest: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type VestingRegistrarCall = VestingRegistrarCall_register_batch | VestingRegistrarCall_claim_batch | VestingRegistrarCall_force_vest_all_schedules

/**
 * Register a batch of accounts and their vesting amounts.
 */
export interface VestingRegistrarCall_register_batch {
    __kind: 'register_batch'
    accounts: VestedAccount[]
    startBlockNumber: number
    period: number
    periodCount: number
}

/**
 * Batch claim for vested accounts
 */
export interface VestingRegistrarCall_claim_batch {
    __kind: 'claim_batch'
    accounts: VestedAccount[]
}

/**
 * For all registered accounts, it sets the vesting schedule expiration to the next block
 * number.
 * 
 * This is a privileged call and can only be called by the root origin.
 * 
 * It simply updates each schedule registered for `account` to expire in the next block.
 */
export interface VestingRegistrarCall_force_vest_all_schedules {
    __kind: 'force_vest_all_schedules'
    accounts: VestedAccount[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DemocracyCall = DemocracyCall_propose | DemocracyCall_second | DemocracyCall_vote | DemocracyCall_emergency_cancel | DemocracyCall_external_propose | DemocracyCall_external_propose_majority | DemocracyCall_external_propose_default | DemocracyCall_fast_track | DemocracyCall_veto_external | DemocracyCall_cancel_referendum | DemocracyCall_delegate | DemocracyCall_undelegate | DemocracyCall_clear_public_proposals | DemocracyCall_unlock | DemocracyCall_remove_vote | DemocracyCall_remove_other_vote | DemocracyCall_blacklist | DemocracyCall_cancel_proposal

/**
 * Propose a sensitive action to be taken.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender must
 * have funds to cover the deposit.
 * 
 * - `proposal_hash`: The hash of the proposal preimage.
 * - `value`: The amount of deposit (must be at least `MinimumDeposit`).
 * 
 * Emits `Proposed`.
 */
export interface DemocracyCall_propose {
    __kind: 'propose'
    proposal: Bounded
    value: bigint
}

/**
 * Signals agreement with a particular proposal.
 * 
 * The dispatch origin of this call must be _Signed_ and the sender
 * must have funds to cover the deposit, equal to the original deposit.
 * 
 * - `proposal`: The index of the proposal to second.
 */
export interface DemocracyCall_second {
    __kind: 'second'
    proposal: number
}

/**
 * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
 * otherwise it is a vote to keep the status quo.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `ref_index`: The index of the referendum to vote for.
 * - `vote`: The vote configuration.
 */
export interface DemocracyCall_vote {
    __kind: 'vote'
    refIndex: number
    vote: AccountVote
}

/**
 * Schedule an emergency cancellation of a referendum. Cannot happen twice to the same
 * referendum.
 * 
 * The dispatch origin of this call must be `CancellationOrigin`.
 * 
 * -`ref_index`: The index of the referendum to cancel.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_emergency_cancel {
    __kind: 'emergency_cancel'
    refIndex: number
}

/**
 * Schedule a referendum to be tabled once it is legal to schedule an external
 * referendum.
 * 
 * The dispatch origin of this call must be `ExternalOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 */
export interface DemocracyCall_external_propose {
    __kind: 'external_propose'
    proposal: Bounded
}

/**
 * Schedule a majority-carries referendum to be tabled next once it is legal to schedule
 * an external referendum.
 * 
 * The dispatch of this call must be `ExternalMajorityOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_majority {
    __kind: 'external_propose_majority'
    proposal: Bounded
}

/**
 * Schedule a negative-turnout-bias referendum to be tabled next once it is legal to
 * schedule an external referendum.
 * 
 * The dispatch of this call must be `ExternalDefaultOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal.
 * 
 * Unlike `external_propose`, blacklisting has no effect on this and it may replace a
 * pre-scheduled `external_propose` call.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_external_propose_default {
    __kind: 'external_propose_default'
    proposal: Bounded
}

/**
 * Schedule the currently externally-proposed majority-carries referendum to be tabled
 * immediately. If there is no externally-proposed referendum currently, or if there is one
 * but it is not a majority-carries referendum then it fails.
 * 
 * The dispatch of this call must be `FastTrackOrigin`.
 * 
 * - `proposal_hash`: The hash of the current external proposal.
 * - `voting_period`: The period that is allowed for voting on this proposal. Increased to
 * 	Must be always greater than zero.
 * 	For `FastTrackOrigin` must be equal or greater than `FastTrackVotingPeriod`.
 * - `delay`: The number of block after voting has ended in approval and this should be
 *   enacted. This doesn't have a minimum amount.
 * 
 * Emits `Started`.
 * 
 * Weight: `O(1)`
 */
export interface DemocracyCall_fast_track {
    __kind: 'fast_track'
    proposalHash: Uint8Array
    votingPeriod: number
    delay: number
}

/**
 * Veto and blacklist the external proposal hash.
 * 
 * The dispatch origin of this call must be `VetoOrigin`.
 * 
 * - `proposal_hash`: The preimage hash of the proposal to veto and blacklist.
 * 
 * Emits `Vetoed`.
 * 
 * Weight: `O(V + log(V))` where V is number of `existing vetoers`
 */
export interface DemocracyCall_veto_external {
    __kind: 'veto_external'
    proposalHash: Uint8Array
}

/**
 * Remove a referendum.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * - `ref_index`: The index of the referendum to cancel.
 * 
 * # Weight: `O(1)`.
 */
export interface DemocracyCall_cancel_referendum {
    __kind: 'cancel_referendum'
    refIndex: number
}

/**
 * Delegate the voting power (with some given conviction) of the sending account.
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
 * - `conviction`: The conviction that will be attached to the delegated votes. When the
 *   account is undelegated, the funds will be locked for the corresponding period.
 * - `balance`: The amount of the account's balance to be used in delegating. This must not
 *   be more than the account's current balance.
 * 
 * Emits `Delegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_delegate {
    __kind: 'delegate'
    to: MultiAddress
    conviction: Conviction
    balance: bigint
}

/**
 * Undelegate the voting power of the sending account.
 * 
 * Tokens may be unlocked following once an amount of time consistent with the lock period
 * of the conviction with which the delegation was issued.
 * 
 * The dispatch origin of this call must be _Signed_ and the signing account must be
 * currently delegating.
 * 
 * Emits `Undelegated`.
 * 
 * Weight: `O(R)` where R is the number of referendums the voter delegating to has
 *   voted on. Weight is charged as if maximum votes.
 */
export interface DemocracyCall_undelegate {
    __kind: 'undelegate'
}

/**
 * Clears all public proposals.
 * 
 * The dispatch origin of this call must be _Root_.
 * 
 * Weight: `O(1)`.
 */
export interface DemocracyCall_clear_public_proposals {
    __kind: 'clear_public_proposals'
}

/**
 * Unlock tokens that have an expired lock.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account to remove the lock on.
 * 
 * Weight: `O(R)` with R number of vote of target.
 */
export interface DemocracyCall_unlock {
    __kind: 'unlock'
    target: MultiAddress
}

/**
 * Remove a vote for a referendum.
 * 
 * If:
 * - the referendum was cancelled, or
 * - the referendum is ongoing, or
 * - the referendum has ended such that
 *   - the vote of the account was in opposition to the result; or
 *   - there was no conviction to the account's vote; or
 *   - the account made a split vote
 * ...then the vote is removed cleanly and a following call to `unlock` may result in more
 * funds being available.
 * 
 * If, however, the referendum has ended and:
 * - it finished corresponding to the vote of the account, and
 * - the account made a standard vote with conviction, and
 * - the lock period of the conviction is not over
 * ...then the lock will be aggregated into the overall account's lock, which may involve
 * *overlocking* (where the two locks are combined into a single lock that is the maximum
 * of both the amount locked and the time is it locked for).
 * 
 * The dispatch origin of this call must be _Signed_, and the signer must have a vote
 * registered for referendum `index`.
 * 
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_vote {
    __kind: 'remove_vote'
    index: number
}

/**
 * Remove a vote for a referendum.
 * 
 * If the `target` is equal to the signer, then this function is exactly equivalent to
 * `remove_vote`. If not equal to the signer, then the vote must have expired,
 * either because the referendum was cancelled, because the voter lost the referendum or
 * because the conviction period is over.
 * 
 * The dispatch origin of this call must be _Signed_.
 * 
 * - `target`: The account of the vote to be removed; this account must have voted for
 *   referendum `index`.
 * - `index`: The index of referendum of the vote to be removed.
 * 
 * Weight: `O(R + log R)` where R is the number of referenda that `target` has voted on.
 *   Weight is calculated for the maximum number of vote.
 */
export interface DemocracyCall_remove_other_vote {
    __kind: 'remove_other_vote'
    target: MultiAddress
    index: number
}

/**
 * Permanently place a proposal into the blacklist. This prevents it from ever being
 * proposed again.
 * 
 * If called on a queued public or external proposal, then this will result in it being
 * removed. If the `ref_index` supplied is an active referendum with the proposal hash,
 * then it will be cancelled.
 * 
 * The dispatch origin of this call must be `BlacklistOrigin`.
 * 
 * - `proposal_hash`: The proposal hash to blacklist permanently.
 * - `ref_index`: An ongoing referendum whose hash is `proposal_hash`, which will be
 * cancelled.
 * 
 * Weight: `O(p)` (though as this is an high-privilege dispatch, we assume it has a
 *   reasonable value).
 */
export interface DemocracyCall_blacklist {
    __kind: 'blacklist'
    proposalHash: Uint8Array
    maybeRefIndex: (number | undefined)
}

/**
 * Remove a proposal.
 * 
 * The dispatch origin of this call must be `CancelProposalOrigin`.
 * 
 * - `prop_index`: The index of the proposal to cancel.
 * 
 * Weight: `O(p)` where `p = PublicProps::<T>::decode_len()`
 */
export interface DemocracyCall_cancel_proposal {
    __kind: 'cancel_proposal'
    propIndex: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CouncilCall = CouncilCall_set_members | CouncilCall_execute | CouncilCall_propose | CouncilCall_vote | CouncilCall_close_old_weight | CouncilCall_disapprove_proposal | CouncilCall_close

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface CouncilCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface CouncilCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface CouncilCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface CouncilCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface CouncilCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalCommitteeCall = TechnicalCommitteeCall_set_members | TechnicalCommitteeCall_execute | TechnicalCommitteeCall_propose | TechnicalCommitteeCall_vote | TechnicalCommitteeCall_close_old_weight | TechnicalCommitteeCall_disapprove_proposal | TechnicalCommitteeCall_close

/**
 * Set the collective's membership.
 * 
 * - `new_members`: The new member list. Be nice to the chain and provide it sorted.
 * - `prime`: The prime member whose vote sets the default.
 * - `old_count`: The upper bound for the previous number of members in storage. Used for
 *   weight estimation.
 * 
 * Requires root origin.
 * 
 * NOTE: Does not enforce the expected `MaxMembers` limit on the amount of members, but
 *       the weight estimations rely on it to estimate dispatchable weight.
 * 
 * # WARNING:
 * 
 * The `pallet-collective` can also be managed by logic outside of the pallet through the
 * implementation of the trait [`ChangeMembers`].
 * Any call to `set_members` must be careful that the member set doesn't get out of sync
 * with other logic managing the member set.
 * 
 * # <weight>
 * ## Weight
 * - `O(MP + N)` where:
 *   - `M` old-members-count (code- and governance-bounded)
 *   - `N` new-members-count (code- and governance-bounded)
 *   - `P` proposals-count (code-bounded)
 * - DB:
 *   - 1 storage mutation (codec `O(M)` read, `O(N)` write) for reading and writing the
 *     members
 *   - 1 storage read (codec `O(P)`) for reading the proposals
 *   - `P` storage mutations (codec `O(M)`) for updating the votes for each proposal
 *   - 1 storage write (codec `O(1)`) for deleting the old `prime` and setting the new one
 * # </weight>
 */
export interface TechnicalCommitteeCall_set_members {
    __kind: 'set_members'
    newMembers: Uint8Array[]
    prime: (Uint8Array | undefined)
    oldCount: number
}

/**
 * Dispatch a proposal from a member using the `Member` origin.
 * 
 * Origin must be a member of the collective.
 * 
 * # <weight>
 * ## Weight
 * - `O(M + P)` where `M` members-count (code-bounded) and `P` complexity of dispatching
 *   `proposal`
 * - DB: 1 read (codec `O(M)`) + DB access of `proposal`
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_execute {
    __kind: 'execute'
    proposal: Call
    lengthBound: number
}

/**
 * Add a new proposal to either be voted on or executed directly.
 * 
 * Requires the sender to be member.
 * 
 * `threshold` determines whether `proposal` is executed directly (`threshold < 2`)
 * or put up for voting.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1)` or `O(B + M + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - branching is influenced by `threshold` where:
 *     - `P1` is proposal execution complexity (`threshold < 2`)
 *     - `P2` is proposals-count (code-bounded) (`threshold >= 2`)
 * - DB:
 *   - 1 storage read `is_member` (codec `O(M)`)
 *   - 1 storage read `ProposalOf::contains_key` (codec `O(1)`)
 *   - DB accesses influenced by `threshold`:
 *     - EITHER storage accesses done by `proposal` (`threshold < 2`)
 *     - OR proposal insertion (`threshold <= 2`)
 *       - 1 storage mutation `Proposals` (codec `O(P2)`)
 *       - 1 storage mutation `ProposalCount` (codec `O(1)`)
 *       - 1 storage write `ProposalOf` (codec `O(B)`)
 *       - 1 storage write `Voting` (codec `O(M)`)
 *   - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_propose {
    __kind: 'propose'
    threshold: number
    proposal: Call
    lengthBound: number
}

/**
 * Add an aye or nay vote for the sender to the given proposal.
 * 
 * Requires the sender to be a member.
 * 
 * Transaction fees will be waived if the member is voting on any particular proposal
 * for the first time and the call is successful. Subsequent vote changes will charge a
 * fee.
 * # <weight>
 * ## Weight
 * - `O(M)` where `M` is members-count (code- and governance-bounded)
 * - DB:
 *   - 1 storage read `Members` (codec `O(M)`)
 *   - 1 storage mutation `Voting` (codec `O(M)`)
 * - 1 event
 * # </weight>
 */
export interface TechnicalCommitteeCall_vote {
    __kind: 'vote'
    proposal: Uint8Array
    index: number
    approve: boolean
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close_old_weight {
    __kind: 'close_old_weight'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: bigint
    lengthBound: number
}

/**
 * Disapprove a proposal, close, and remove it from the system, regardless of its current
 * state.
 * 
 * Must be called by the Root origin.
 * 
 * Parameters:
 * * `proposal_hash`: The hash of the proposal that should be disapproved.
 * 
 * # <weight>
 * Complexity: O(P) where P is the number of max proposals
 * DB Weight:
 * * Reads: Proposals
 * * Writes: Voting, Proposals, ProposalOf
 * # </weight>
 */
export interface TechnicalCommitteeCall_disapprove_proposal {
    __kind: 'disapprove_proposal'
    proposalHash: Uint8Array
}

/**
 * Close a vote that is either approved, disapproved or whose voting period has ended.
 * 
 * May be called by any signed account in order to finish voting and close the proposal.
 * 
 * If called before the end of the voting period it will only close the vote if it is
 * has enough votes to be approved or disapproved.
 * 
 * If called after the end of the voting period abstentions are counted as rejections
 * unless there is a prime member set and the prime member cast an approval.
 * 
 * If the close operation completes successfully with disapproval, the transaction fee will
 * be waived. Otherwise execution of the approved operation will be charged to the caller.
 * 
 * + `proposal_weight_bound`: The maximum amount of weight consumed by executing the closed
 * proposal.
 * + `length_bound`: The upper bound for the length of the proposal in storage. Checked via
 * `storage::read` so it is `size_of::<u32>() == 4` larger than the pure length.
 * 
 * # <weight>
 * ## Weight
 * - `O(B + M + P1 + P2)` where:
 *   - `B` is `proposal` size in bytes (length-fee-bounded)
 *   - `M` is members-count (code- and governance-bounded)
 *   - `P1` is the complexity of `proposal` preimage.
 *   - `P2` is proposal-count (code-bounded)
 * - DB:
 *  - 2 storage reads (`Members`: codec `O(M)`, `Prime`: codec `O(1)`)
 *  - 3 mutations (`Voting`: codec `O(M)`, `ProposalOf`: codec `O(B)`, `Proposals`: codec
 *    `O(P2)`)
 *  - any mutations done while executing `proposal` (`P1`)
 * - up to 3 events
 * # </weight>
 */
export interface TechnicalCommitteeCall_close {
    __kind: 'close'
    proposalHash: Uint8Array
    index: number
    proposalWeightBound: Weight
    lengthBound: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CommunityPoolCall = CommunityPoolCall_propose_spend | CommunityPoolCall_reject_proposal | CommunityPoolCall_approve_proposal | CommunityPoolCall_spend | CommunityPoolCall_remove_approval

/**
 * Put forward a suggestion for spending. A deposit proportional to the value
 * is reserved and slashed if the proposal is rejected. It is returned once the
 * proposal is awarded.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `ProposalCount`, `origin account`
 * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
 * # </weight>
 */
export interface CommunityPoolCall_propose_spend {
    __kind: 'propose_spend'
    value: bigint
    beneficiary: MultiAddress
}

/**
 * Reject a proposed spend. The original deposit will be slashed.
 * 
 * May only be called from `T::RejectOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1)
 * - DbReads: `Proposals`, `rejected proposer account`
 * - DbWrites: `Proposals`, `rejected proposer account`
 * # </weight>
 */
export interface CommunityPoolCall_reject_proposal {
    __kind: 'reject_proposal'
    proposalId: number
}

/**
 * Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - Complexity: O(1).
 * - DbReads: `Proposals`, `Approvals`
 * - DbWrite: `Approvals`
 * # </weight>
 */
export interface CommunityPoolCall_approve_proposal {
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
export interface CommunityPoolCall_spend {
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
 * # <weight>
 * - Complexity: O(A) where `A` is the number of approvals
 * - Db reads and writes: `Approvals`
 * # </weight>
 * 
 * Errors:
 * - `ProposalNotApproved`: The `proposal_id` supplied was not found in the approval queue,
 * i.e., the proposal has not been approved. This could also mean the proposal does not
 * exist altogether, thus there is no way it would have been approved in the first place.
 */
export interface CommunityPoolCall_remove_approval {
    __kind: 'remove_approval'
    proposalId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TechnicalMembershipCall = TechnicalMembershipCall_add_member | TechnicalMembershipCall_remove_member | TechnicalMembershipCall_swap_member | TechnicalMembershipCall_reset_members | TechnicalMembershipCall_change_key | TechnicalMembershipCall_set_prime | TechnicalMembershipCall_clear_prime

/**
 * Add a member `who` to the set.
 * 
 * May only be called from `T::AddOrigin`.
 */
export interface TechnicalMembershipCall_add_member {
    __kind: 'add_member'
    who: MultiAddress
}

/**
 * Remove a member `who` from the set.
 * 
 * May only be called from `T::RemoveOrigin`.
 */
export interface TechnicalMembershipCall_remove_member {
    __kind: 'remove_member'
    who: MultiAddress
}

/**
 * Swap out one member `remove` for another `add`.
 * 
 * May only be called from `T::SwapOrigin`.
 * 
 * Prime membership is *not* passed from `remove` to `add`, if extant.
 */
export interface TechnicalMembershipCall_swap_member {
    __kind: 'swap_member'
    remove: MultiAddress
    add: MultiAddress
}

/**
 * Change the membership to a new set, disregarding the existing membership. Be nice and
 * pass `members` pre-sorted.
 * 
 * May only be called from `T::ResetOrigin`.
 */
export interface TechnicalMembershipCall_reset_members {
    __kind: 'reset_members'
    members: Uint8Array[]
}

/**
 * Swap out the sending member for some other key `new`.
 * 
 * May only be called from `Signed` origin of a current member.
 * 
 * Prime membership is passed from the origin account to `new`, if extant.
 */
export interface TechnicalMembershipCall_change_key {
    __kind: 'change_key'
    new: MultiAddress
}

/**
 * Set the prime member. Must be a current member.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_set_prime {
    __kind: 'set_prime'
    who: MultiAddress
}

/**
 * Remove the prime member if it exists.
 * 
 * May only be called from `T::PrimeOrigin`.
 */
export interface TechnicalMembershipCall_clear_prime {
    __kind: 'clear_prime'
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
 * # <weight>
 * O(Z + C) where Z is the length of the call and C its execution weight.
 * -------------------------------
 * - DB Weight: None
 * - Plus Call Weight
 * # </weight>
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
 * # <weight>
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
 * -------------------------------
 * - DB Weight:
 *     - Reads: Multisig Storage, [Caller Account]
 *     - Writes: Multisig Storage, [Caller Account]
 * - Plus Call Weight
 * # </weight>
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
 * # <weight>
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
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account]
 *     - Write: Multisig Storage, [Caller Account]
 * # </weight>
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
 * # <weight>
 * - `O(S)`.
 * - Up to one balance-reserve or unreserve operation.
 * - One passthrough operation, one insert, both `O(S)` where `S` is the number of
 *   signatories. `S` is capped by `MaxSignatories`, with weight being proportional.
 * - One encode & hash, both of complexity `O(S)`.
 * - One event.
 * - I/O: 1 read `O(S)`, one remove.
 * - Storage: removes one item.
 * ----------------------------------
 * - DB Weight:
 *     - Read: Multisig Storage, [Caller Account], Refund Account
 *     - Write: Multisig Storage, [Caller Account], Refund Account
 * # </weight>
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
export type AuthorshipCall = AuthorshipCall_set_uncles

/**
 * Provide a set of uncles.
 */
export interface AuthorshipCall_set_uncles {
    __kind: 'set_uncles'
    newUncles: Header[]
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CollatorStakingCall = CollatorStakingCall_set_invulnerables | CollatorStakingCall_join_candidates | CollatorStakingCall_unbond | CollatorStakingCall_nominate | CollatorStakingCall_remove_nomination | CollatorStakingCall_force_set_current_max_candidates | CollatorStakingCall_force_set_min_collator_stake

/**
 * Join the list of candidates for collation.
 */
export interface CollatorStakingCall_set_invulnerables {
    __kind: 'set_invulnerables'
    accounts: Uint8Array[]
}

/**
 * Join the list of candidates for collation.
 */
export interface CollatorStakingCall_join_candidates {
    __kind: 'join_candidates'
    amount: bigint
    rewardsCut: number
}

/**
 * Leave the collator set of this parachain.
 * 
 * In this case, if the calling account is already a collator, an exit
 * is registered so that this account is not selected for the next set of collators.
 * Otherwise, if the account is only a candidate, this candidate will be removed
 * and the nominations would be freed up.
 */
export interface CollatorStakingCall_unbond {
    __kind: 'unbond'
}

/**
 * Nominate a specific candidate to be selected for collation and block production.
 */
export interface CollatorStakingCall_nominate {
    __kind: 'nominate'
    collatorId: Uint8Array
    amount: bigint
}

/**
 * Remove a nomination previously registered for a specific collator candidate.
 */
export interface CollatorStakingCall_remove_nomination {
    __kind: 'remove_nomination'
    collatorId: Uint8Array
}

/**
 * Set the current max candidates, must be within 0 and `T::MaxCandidates`
 * ForceOrigin call only
 */
export interface CollatorStakingCall_force_set_current_max_candidates {
    __kind: 'force_set_current_max_candidates'
    maxCandidates: number
}

/**
 * Set the MinCollatorStake amount
 * ForceOrigin call only
 */
export interface CollatorStakingCall_force_set_min_collator_stake {
    __kind: 'force_set_min_collator_stake'
    minCollatorStake: bigint
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
 * # <weight>
 * - Complexity: `O(1)`. Actual cost depends on the number of length of
 *   `T::Keys::key_ids()` which is fixed.
 * - DbReads: `origin account`, `T::ValidatorIdOf`, `NextKeys`
 * - DbWrites: `origin account`, `NextKeys`
 * - DbReads per key id: `KeyOwner`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
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
 * # <weight>
 * - Complexity: `O(1)` in number of key types. Actual cost depends on the number of length
 *   of `T::Keys::key_ids()` which is fixed.
 * - DbReads: `T::ValidatorIdOf`, `NextKeys`, `origin account`
 * - DbWrites: `NextKeys`, `origin account`
 * - DbWrites per key id: `KeyOwner`
 * # </weight>
 */
export interface SessionCall_purge_keys {
    __kind: 'purge_keys'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = XcmpQueueCall_service_overweight | XcmpQueueCall_suspend_xcm_execution | XcmpQueueCall_resume_xcm_execution | XcmpQueueCall_update_suspend_threshold | XcmpQueueCall_update_drop_threshold | XcmpQueueCall_update_resume_threshold | XcmpQueueCall_update_threshold_weight | XcmpQueueCall_update_weight_restrict_decay | XcmpQueueCall_update_xcmp_max_individual_weight

/**
 * Services a single overweight XCM.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight XCM to service
 * - `weight_limit`: The amount of weight that XCM execution may take.
 * 
 * Errors:
 * - `BadOverweightIndex`: XCM under `index` is not found in the `Overweight` storage map.
 * - `BadXcm`: XCM under `index` cannot be properly decoded into a valid XCM format.
 * - `WeightOverLimit`: XCM execution may use greater `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface XcmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Suspends all XCM executions for the XCMP queue, regardless of the sender's origin.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_suspend_xcm_execution {
    __kind: 'suspend_xcm_execution'
}

/**
 * Resumes all XCM executions for the XCMP queue.
 * 
 * Note that this function doesn't change the status of the in/out bound channels.
 * 
 * - `origin`: Must pass `ControllerOrigin`.
 */
export interface XcmpQueueCall_resume_xcm_execution {
    __kind: 'resume_xcm_execution'
}

/**
 * Overwrites the number of pages of messages which must be in the queue for the other side to be told to
 * suspend their sending.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.suspend_value`
 */
export interface XcmpQueueCall_update_suspend_threshold {
    __kind: 'update_suspend_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which must be in the queue after which we drop any further
 * messages from the channel.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.drop_threshold`
 */
export interface XcmpQueueCall_update_drop_threshold {
    __kind: 'update_drop_threshold'
    new: number
}

/**
 * Overwrites the number of pages of messages which the queue must be reduced to before it signals that
 * message sending may recommence after it has been suspended.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.resume_threshold`
 */
export interface XcmpQueueCall_update_resume_threshold {
    __kind: 'update_resume_threshold'
    new: number
}

/**
 * Overwrites the amount of remaining weight under which we stop processing messages.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.threshold_weight`
 */
export interface XcmpQueueCall_update_threshold_weight {
    __kind: 'update_threshold_weight'
    new: bigint
}

/**
 * Overwrites the speed to which the available weight approaches the maximum weight.
 * A lower number results in a faster progression. A value of 1 makes the entire weight available initially.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.weight_restrict_decay`.
 */
export interface XcmpQueueCall_update_weight_restrict_decay {
    __kind: 'update_weight_restrict_decay'
    new: bigint
}

/**
 * Overwrite the maximum amount of weight any individual message may consume.
 * Messages above this weight go into the overweight queue and may only be serviced explicitly.
 * 
 * - `origin`: Must pass `Root`.
 * - `new`: Desired value for `QueueConfigData.xcmp_max_individual_weight`.
 */
export interface XcmpQueueCall_update_xcmp_max_individual_weight {
    __kind: 'update_xcmp_max_individual_weight'
    new: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
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
export interface PolkadotXcmCall_teleport_assets {
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
export interface PolkadotXcmCall_reserve_transfer_assets {
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
export interface PolkadotXcmCall_execute {
    __kind: 'execute'
    message: Type_329
    maxWeight: bigint
}

/**
 * Extoll that a particular destination can be communicated with through a particular
 * version of XCM.
 * 
 * - `origin`: Must be Root.
 * - `location`: The destination that is being described.
 * - `xcm_version`: The latest version of XCM that `location` supports.
 */
export interface PolkadotXcmCall_force_xcm_version {
    __kind: 'force_xcm_version'
    location: V1MultiLocation
    xcmVersion: number
}

/**
 * Set a safe XCM version (the version that XCM should be encoded with if the most recent
 * version a destination can accept is unknown).
 * 
 * - `origin`: Must be Root.
 * - `maybe_xcm_version`: The default XCM encoding version, or `None` to disable.
 */
export interface PolkadotXcmCall_force_default_xcm_version {
    __kind: 'force_default_xcm_version'
    maybeXcmVersion: (number | undefined)
}

/**
 * Ask a location to notify us regarding their XCM version and any changes to it.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we should subscribe for XCM version notifications.
 */
export interface PolkadotXcmCall_force_subscribe_version_notify {
    __kind: 'force_subscribe_version_notify'
    location: VersionedMultiLocation
}

/**
 * Require that a particular destination should no longer notify us regarding any XCM
 * version changes.
 * 
 * - `origin`: Must be Root.
 * - `location`: The location to which we are currently subscribed for XCM version
 *   notifications which we no longer desire.
 */
export interface PolkadotXcmCall_force_unsubscribe_version_notify {
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
export interface PolkadotXcmCall_limited_reserve_transfer_assets {
    __kind: 'limited_reserve_transfer_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
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
export interface PolkadotXcmCall_limited_teleport_assets {
    __kind: 'limited_teleport_assets'
    dest: VersionedMultiLocation
    beneficiary: VersionedMultiLocation
    assets: VersionedMultiAssets
    feeAssetItem: number
    weightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type CumulusXcmCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type DmpQueueCall = DmpQueueCall_service_overweight

/**
 * Service a single overweight message.
 * 
 * - `origin`: Must pass `ExecuteOverweightOrigin`.
 * - `index`: The index of the overweight message to service.
 * - `weight_limit`: The amount of weight that message execution may take.
 * 
 * Errors:
 * - `Unknown`: Message of `index` is unknown.
 * - `OverLimit`: Message execution may use greater than `weight_limit`.
 * 
 * Events:
 * - `OverweightServiced`: On success.
 */
export interface DmpQueueCall_service_overweight {
    __kind: 'service_overweight'
    index: bigint
    weightLimit: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type OrmlXcmCall = OrmlXcmCall_send_as_sovereign

/**
 * Send an XCM message as parachain sovereign.
 */
export interface OrmlXcmCall_send_as_sovereign {
    __kind: 'send_as_sovereign'
    dest: VersionedMultiLocation
    message: VersionedXcm
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EfinityXcmCall = EfinityXcmCall_transfer_to_parachain | EfinityXcmCall_transfer_asset_to_parachain | EfinityXcmCall_force_set_minimum_weight

/**
 * `origin` transfers `amount` of EFI to `beneficiary` on the `parachain`
 * 
 * Note: EFI needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive EFI in destination parachain
 * - `amount`: amount of EFI to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
 *   `MultiLocation`
 */
export interface EfinityXcmCall_transfer_to_parachain {
    __kind: 'transfer_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * `origin` transfers `amount` of `asset` to `beneficiary` on the `parachain`
 * 
 * Note: `asset` needs to be registered as foreign token in destination parachain
 * 
 * - `para_id`: destination parachain
 * - `beneficiary`: account to receive `asset` in destination parachain
 * - `asset`: asset to transfer
 * - `amount`: amount of `asset` to transfer
 * - `dest_weight`: optional weight to be paid in destination chain, unlimited in case it's
 *   `None`
 * 
 * # Errors
 * 
 * - `InvalidAccountId`: `beneficiary` is invalid, i.e could not be converted to
 */
export interface EfinityXcmCall_transfer_asset_to_parachain {
    __kind: 'transfer_asset_to_parachain'
    paraId: ParachainId
    beneficiary: Account
    assetId: AssetId
    amount: bigint
    destWeight: (bigint | undefined)
}

/**
 * Update xcm fees amount to be used in xcm.Withdraw message
 */
export interface EfinityXcmCall_force_set_minimum_weight {
    __kind: 'force_set_minimum_weight'
    xcmCall: XcmOperation
    xcmWeightFeeMisc: MinimumWeightFeePair
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XTokensCall = XTokensCall_transfer | XTokensCall_transfer_multiasset | XTokensCall_transfer_with_fee | XTokensCall_transfer_multiasset_with_fee | XTokensCall_transfer_multicurrencies | XTokensCall_transfer_multiassets

/**
 * Transfer native currencies.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer {
    __kind: 'transfer'
    currencyId: AssetId
    amount: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer `MultiAsset`.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset {
    __kind: 'transfer_multiasset'
    asset: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer native currencies specifying the fee and amount as
 * separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the amount to be spent to pay for execution in destination
 * chain. Both fee and amount will be subtracted form the callers
 * balance.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_with_fee {
    __kind: 'transfer_with_fee'
    currencyId: AssetId
    amount: bigint
    fee: bigint
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer `MultiAsset` specifying the fee and amount as separate.
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee` is the multiasset to be spent to pay for execution in
 * destination chain. Both fee and amount will be subtracted form the
 * callers balance For now we only accept fee and asset having the same
 * `MultiLocation` id.
 * 
 * If `fee` is not high enough to cover for the execution costs in the
 * destination chain, then the assets will be trapped in the
 * destination chain
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiasset_with_fee {
    __kind: 'transfer_multiasset_with_fee'
    asset: VersionedMultiAsset
    fee: VersionedMultiAsset
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer several currencies specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the currencies tuple that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multicurrencies {
    __kind: 'transfer_multicurrencies'
    currencies: [AssetId, bigint][]
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Transfer several `MultiAsset` specifying the item to be used as fee
 * 
 * `dest_weight_limit` is the weight for XCM execution on the dest
 * chain, and it would be charged from the transferred assets. If set
 * below requirements, the execution may fail and assets wouldn't be
 * received.
 * 
 * `fee_item` is index of the MultiAssets that we want to use for
 * payment
 * 
 * It's a no-op if any error on local XCM execution or message sending.
 * Note sending assets out per se doesn't guarantee they would be
 * received. Receiving depends on if the XCM message could be delivered
 * by the network, and if the receiving chain would handle
 * messages correctly.
 */
export interface XTokensCall_transfer_multiassets {
    __kind: 'transfer_multiassets'
    assets: VersionedMultiAssets
    feeItem: number
    dest: VersionedMultiLocation
    destWeightLimit: V2WeightLimit
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type BountiesCall = BountiesCall_propose_bounty | BountiesCall_approve_bounty | BountiesCall_propose_curator | BountiesCall_unassign_curator | BountiesCall_accept_curator | BountiesCall_award_bounty | BountiesCall_claim_bounty | BountiesCall_close_bounty | BountiesCall_extend_bounty_expiry

/**
 * Propose a new bounty.
 * 
 * The dispatch origin for this call must be _Signed_.
 * 
 * Payment: `TipReportDepositBase` will be reserved from the origin account, as well as
 * `DataDepositPerByte` for each byte in `reason`. It will be unreserved upon approval,
 * or slashed when rejected.
 * 
 * - `curator`: The curator account whom will manage this bounty.
 * - `fee`: The curator fee.
 * - `value`: The total payment amount of this bounty, curator fee included.
 * - `description`: The description of this bounty.
 */
export interface BountiesCall_propose_bounty {
    __kind: 'propose_bounty'
    value: bigint
    description: Uint8Array
}

/**
 * Approve a bounty proposal. At a later time, the bounty will be funded and become active
 * and the original deposit will be returned.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_approve_bounty {
    __kind: 'approve_bounty'
    bountyId: number
}

/**
 * Assign a curator to a funded bounty.
 * 
 * May only be called from `T::ApproveOrigin`.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_propose_curator {
    __kind: 'propose_curator'
    bountyId: number
    curator: MultiAddress
    fee: bigint
}

/**
 * Unassign curator from a bounty.
 * 
 * This function can only be called by the `RejectOrigin` a signed origin.
 * 
 * If this function is called by the `RejectOrigin`, we assume that the curator is
 * malicious or inactive. As a result, we will slash the curator when possible.
 * 
 * If the origin is the curator, we take this as a sign they are unable to do their job and
 * they willingly give up. We could slash them, but for now we allow them to recover their
 * deposit and exit without issue. (We may want to change this if it is abused.)
 * 
 * Finally, the origin can be anyone if and only if the curator is "inactive". This allows
 * anyone in the community to call out that a curator is not doing their due diligence, and
 * we should pick a new curator. In this case the curator should also be slashed.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_unassign_curator {
    __kind: 'unassign_curator'
    bountyId: number
}

/**
 * Accept the curator role for a bounty.
 * A deposit will be reserved from curator and refund upon successful payout.
 * 
 * May only be called from the curator.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_accept_curator {
    __kind: 'accept_curator'
    bountyId: number
}

/**
 * Award bounty to a beneficiary account. The beneficiary will be able to claim the funds
 * after a delay.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to award.
 * - `beneficiary`: The beneficiary account whom will receive the payout.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_award_bounty {
    __kind: 'award_bounty'
    bountyId: number
    beneficiary: MultiAddress
}

/**
 * Claim the payout from an awarded bounty after payout delay.
 * 
 * The dispatch origin for this call must be the beneficiary of this bounty.
 * 
 * - `bounty_id`: Bounty ID to claim.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_claim_bounty {
    __kind: 'claim_bounty'
    bountyId: number
}

/**
 * Cancel a proposed or active bounty. All the funds will be sent to treasury and
 * the curator deposit will be unreserved if possible.
 * 
 * Only `T::RejectOrigin` is able to cancel a bounty.
 * 
 * - `bounty_id`: Bounty ID to cancel.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_close_bounty {
    __kind: 'close_bounty'
    bountyId: number
}

/**
 * Extend the expiry time of an active bounty.
 * 
 * The dispatch origin for this call must be the curator of this bounty.
 * 
 * - `bounty_id`: Bounty ID to extend.
 * - `remark`: additional information.
 * 
 * # <weight>
 * - O(1).
 * # </weight>
 */
export interface BountiesCall_extend_bounty_expiry {
    __kind: 'extend_bounty_expiry'
    bountyId: number
    remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiTokensCall = MultiTokensCall_create_collection | MultiTokensCall_destroy_collection | MultiTokensCall_mutate_collection | MultiTokensCall_mutate_token | MultiTokensCall_mint | MultiTokensCall_burn | MultiTokensCall_transfer | MultiTokensCall_freeze | MultiTokensCall_thaw | MultiTokensCall_set_attribute | MultiTokensCall_remove_attribute | MultiTokensCall_remove_all_attributes | MultiTokensCall_batch_transfer | MultiTokensCall_batch_mint | MultiTokensCall_batch_set_attribute | MultiTokensCall_approve_collection | MultiTokensCall_unapprove_collection | MultiTokensCall_approve_token | MultiTokensCall_unapprove_token | MultiTokensCall_force_mutate_collection | MultiTokensCall_force_transfer | MultiTokensCall_force_set_collection | MultiTokensCall_force_set_token | MultiTokensCall_force_set_attribute | MultiTokensCall_force_set_collection_account | MultiTokensCall_force_set_token_account | MultiTokensCall_force_create_collection

/**
 * Creates a new collection from `descriptor`
 * 
 * # Errors
 * - `DepositReserveFailed` if the deposit cannot be reserved
 */
export interface MultiTokensCall_create_collection {
    __kind: 'create_collection'
    descriptor: DefaultCollectionDescriptor
}

/**
 * Destroys `Collection` with `id`. `origin` must be the owner of the `Collection`.
 * 
 * 
 * # Errors
 * - `NoPermission` if `origin` is not the owner of the collection.
 * - `NotFound` if `Collection` with `id` does not exist.
 * - `DestroyForbiddenByCollectionEvent` if another pallet is blocking the collection's
 *   destruction
 * - `DestroyForbiddenByRemainingTokens` if collection still has tokens when destroying
 * - `DestroyForbiddenByAttributeCount` if collection still has attributes when destroying
 * current number of collection attributes.
 */
export interface MultiTokensCall_destroy_collection {
    __kind: 'destroy_collection'
    collectionId: bigint
}

/**
 * Modify `Collection` with `id` by applying `mutation`
 * 
 * # Errors
 * - `NotFound`, if `collection_id` does not exist.
 * - `NoPermission`, if `origin` is not the owner of `collection`.
 */
export interface MultiTokensCall_mutate_collection {
    __kind: 'mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Modify `Token` with `token_id`  from `Collection` with `collection_id` by applying
 * `mutation`
 * 
 * # Errors
 * - `CurrencyIncompatibleWithCollectionRoyalty` if token has already been assigned a
 *   royalty
 * - `NoPermission` if not the collection owner
 * - `TokenNotFound` if Token does not exist
 * - `ConflictingLocation` if the new location is already occupied
 */
export interface MultiTokensCall_mutate_token {
    __kind: 'mutate_token'
    collectionId: bigint
    tokenId: bigint
    mutation: DefaultTokenMutation
}

/**
 * `origin` mints to `recipient` for `collection_id` with `params` using the pallet's
 * `MintPolicy`.
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `CollectionNotFound` if `Collection` does not exist.
 * - `TokenNotFound` if `Token` does not exist.
 * - `TokenAlreadyExists` if attempting to create a token that already exists
 * - `NoPermission` if `caller` is not allowed to mint the `collection`.
 * - `Overflow` if `amount + current_total_supply` overflows its type, or if the
 *   token_count
 * overflows.
 * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
 * - `ConflictingLocation` if the token is foreign and the location is already mapped to
 *   another asset in `AssetIdsByLocation`
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
 * - `NotFound` if `collection` does not exist.
 * - `BalanceLow` if `owner` account does not has enough amount of any token in `tokens`
 * of `collection`.
 * - `CollectionDoesNotSupportGivenToken` if `tokens` is not empty.
 * - `BalanceLow` if `owner` account does not has enough amount of the `collection`.
 * - `Overflow` if amount - supply overflows type, or if burn causes collection.token_count
 *   to
 * overflow.
 * - `DepositUnreserveFailed` if caller does not have enough reserved balance to unreserve
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
 * - `AmountZero` if `amount == 0`.
 * - `InvalidTargetAccount` if `source == target`.
 * - `BalanceLow` if `source` does not own enough amount of `collection`.
 * - `Overflow` if `target` balance of `collection` overflows.
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
 * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
 * attribute is added to the token.
 * 
 * # Errors
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `source` account is not the owner of the collection.
 * - `Overflow` if an attribute counter overflows
 * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
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
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `caller` is not the owner of the collection.
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
 * - `CollectionNotFound` if Collection with `collection_id` does not exist.
 * - `TokenNotFound` if Token with `token_id` does not exist.
 * - `NoPermission` if `origin` account is not the owner of the Collection or Token
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
 * - `AmountZero` if `amount == 0`.
 * - `InvalidTargetAccount` if `source == target`.
 * - `BalanceLow` if `source` does not own enough amount of `collection`.
 * - `BalanceOverflow` if `target` balance of `collection` overflows.
 */
export interface MultiTokensCall_batch_transfer {
    __kind: 'batch_transfer'
    collectionId: bigint
    recipients: Recipient[]
}

/**
 * Collection owner mints tokens of `collection_id` to `recipients` consisting of an
 * `AccountId` and `MintParams`. A single mint failure will fail all of them in the batch.
 * 
 * # Errors
 * - `AmountZero` if `amount == 0`.
 * - `NotFound` if `collection` does **not** exist.
 * - `NoPermission` if `caller` is not allowed to mint the `collection`.
 * - `MintForbidden` if the policy disallows the operation
 * - `BalanceOverflow` if `amount + current_total_supply` overflows its type.
 * - `TokenCountOverflow` if the token_count overflows
 * - `TokenMintCapExceeded` if the mint policy TokenCap does not allow minting
 * - `MaxTokenCountExceeded` if the mint policy max_token_count is exceeded
 * - `DepositReserveFailed` if the issuer does not have sufficent balance for token deposit
 */
export interface MultiTokensCall_batch_mint {
    __kind: 'batch_mint'
    collectionId: bigint
    recipients: Type_373[]
}

/**
 * Collection owner sets `attributes` to `collection_id`
 * 
 * If `token_id` is `None`, the attribute is added to the collection. If it is `Some`, the
 * attribute is added to the token.
 * 
 * # Errors
 * - `InvalidAttributeKey` if `key.len() == 0`
 * - `CollectionNotFound` if `collection_id` does not exist.
 * - `TokenNotFound` if `token_id` is `Some` and does not exist.
 * - `NoPermission` if `source` account is not the owner of the collection.
 * - `Overflow` if an attribute counter overflows
 * - `DepositReserveFailed` if unable to reserve the deposit for the attribute storage.
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
 * - `CannotApproveSelf` - if `origin == operator`
 * - `AlreadyExpired` - if `expiration` is earlier than now
 * - `CollectionAccountNotFound` if the collection account does not exist
 * - `MaxApprovalsExceeded` if approval count has exceeded the maximum
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
 * - `CollectionAccountNotFound` if the collection account cannot be found
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
 * - `CannotApproveSelf` if `origin == operator`
 * - `CollectionAlreadyApproved` if `collection_id` is already approved
 * - `AlreadyExpired` if `expiration` is earlier than now
 * - `TokenAccountNotFound` if the token account does not exist
 * - `MaxApprovalsExceeded` if approval count has exceeded the maximum
 * - `WrongCurrentApprovedAmount` if `current_amount` does not match the current approval
 *   amount
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
 * - `TokenAccountNotFound` if the token account does not exist
 */
export interface MultiTokensCall_unapprove_token {
    __kind: 'unapprove_token'
    collectionId: bigint
    tokenId: bigint
    operator: Uint8Array
}

/**
 * Exactly as `mutate_collection`, except the origin must be root and the `caller` account
 * should be specified.
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 * - Same as mutate_collection
 */
export interface MultiTokensCall_force_mutate_collection {
    __kind: 'force_mutate_collection'
    collectionId: bigint
    mutation: DefaultCollectionMutation
}

/**
 * Exactly as `transfer`, except the origin must be root and the source account should be
 * specified.
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 * - Same as transfer
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
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_collection {
    __kind: 'force_set_collection'
    collectionId: bigint
    value: (Collection | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_token {
    __kind: 'force_set_token'
    collectionId: bigint
    tokenId: bigint
    value: (Token | undefined)
}

/**
 * Set the Tokens storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
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
 * 
 * # Errors
 * - `BadOrigin` if origin != root
 */
export interface MultiTokensCall_force_set_collection_account {
    __kind: 'force_set_collection_account'
    collectionId: bigint
    accountId: MultiAddress
    value: (CollectionAccount | undefined)
}

/**
 * Set the TokenAccounts storage to the given `value`, origin must be root
 * 
 * # Errors
 * - `BadOrigin` if origin != root
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
 * - `DepositReserveFailed` if the deposit cannot be reserved
 */
export interface MultiTokensCall_force_create_collection {
    __kind: 'force_create_collection'
    owner: Uint8Array
    collectionId: bigint
    descriptor: DefaultCollectionDescriptor
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ClaimsCall = ClaimsCall_claim | ClaimsCall_mint_claim | ClaimsCall_move_claim

/**
 * Make a claim to collect your EFI.
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
 * and `address` matches the `dest` account.
 * 
 * Parameters:
 * - `dest`: The destination account to payout the claim.
 * - `ethereum_signature`: The signature of an ethereum signed message matching the format
 *   described above.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * Weight includes logic to validate unsigned `claim` call.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_claim {
    __kind: 'claim'
    dest: Uint8Array
    ethereumSignature: Uint8Array
}

/**
 * Mint a new claim to collect EFIs.
 * 
 * The dispatch origin for this call must be _Root_.
 * 
 * Parameters:
 * - `who`: The Ethereum address allowed to collect this claim.
 * - `value`: The number of EFIs that will be claimed.
 * 
 * <weight>
 * The weight of this call is invariant over the input parameters.
 * 
 * Total Complexity: O(1)
 * </weight>
 */
export interface ClaimsCall_mint_claim {
    __kind: 'mint_claim'
    who: Uint8Array
    value: bigint
}

export interface ClaimsCall_move_claim {
    __kind: 'move_claim'
    old: Uint8Array
    new: Uint8Array
    preclaim: (Uint8Array | undefined)
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PoolsCall = PoolsCall_mutate_pools

/**
 * Mutate the pools. Can only be called by root.
 */
export interface PoolsCall_mutate_pools {
    __kind: 'mutate_pools'
    mutation: PoolsMutation
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type FuelTanksCall = FuelTanksCall_create_fuel_tank | FuelTanksCall_mutate_fuel_tank | FuelTanksCall_add_account | FuelTanksCall_remove_account | FuelTanksCall_remove_account_rule_data | FuelTanksCall_dispatch | FuelTanksCall_dispatch_and_touch | FuelTanksCall_schedule_mutate_freeze_state | FuelTanksCall_insert_rule_set | FuelTanksCall_remove_rule_set | FuelTanksCall_batch_add_account | FuelTanksCall_batch_remove_account | FuelTanksCall_force_set_consumption | FuelTanksCall_destroy_fuel_tank

/**
 * Creates a fuel tank, given a descriptor
 * 
 * # Errors
 * - `FuelTankAlreadyExists` if `tank_id` already exists
 * - `DuplicateRuleKinds` if a rule set has multiple rules of the same kind
 */
export interface FuelTanksCall_create_fuel_tank {
    __kind: 'create_fuel_tank'
    descriptor: FuelTankDescriptor
}

/**
 * Apply `mutation` to fuel tank with `tank_id`.
 * 
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if `origin` is not the fuel tank owner
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
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountAlreadyExists` if account at `user_id` already exists
 */
export interface FuelTanksCall_add_account {
    __kind: 'add_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Removes account for `user_id` from fuel tank at `tank_id`. Any deposits
 * are returned.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountNotFound` if account at `user_id` does not exist
 */
export interface FuelTanksCall_remove_account {
    __kind: 'remove_account'
    tankId: MultiAddress
    userId: MultiAddress
}

/**
 * Remove account rule data if it exists. Only callable by the fuel tank's owner. Requires
 * the fuel tank or the rule set to be frozen.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank for `tank_id` doesn't exist
 * - `NoPermission` if called by non-owner
 * - `AccountNotFound` if account does not exist for `user_id`
 * - `RuleSetNotFound` if rule set does not exist for `rule_set_id`
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `RuleNotFound` if rule does not exist for `rule_kind`
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
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `InvalidRuleSetId` if `rule_set_id` does not exist
 * - `UsageRestricted` if caller is not part of ruleset whitelist
 * - `TransactionExceedsFuelBurnLimit` if call exceeds the max fee limit set by ruleset
 * - `TransactionExceedsUserBudget` if call exceeds the max user budget limit set by
 *   ruleset
 * - `TransactionExceedsFuelTankBudget` if call exceeds the max fuel tank budget set by
 *   ruleset
 * - `CallerDoesNotHaveRuleSetTokenBalance` if caller does not own the tokens to use the
 *   ruleset
 * - `TransactionNotPermitted` if the call is not in the list of permitted calls of ruleset
 * - `Overflow` if amount overflows type
 * - `UserBalanceLowForRemainingFee` if caller does not have enough balance to pay for
 *   remaining_fee when `pays_remaining_fee` is true
 * - `FuelTankOutOfFunds` if the fuel tank account cannot pay fees
 */
export interface FuelTanksCall_dispatch {
    __kind: 'dispatch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    paysRemainingFee: boolean
}

/**
 * Same as [dispatch](Self::dispatch), but creates an account for `origin` if it does not
 * exist and is allowed by the fuel tank's `user_account_management` settings.
 * # Errors
 * Returns the same errors as [dispatch](Self::dispatch) and
 * [add_account](Self::add_account)
 */
export interface FuelTanksCall_dispatch_and_touch {
    __kind: 'dispatch_and_touch'
    tankId: MultiAddress
    ruleSetId: number
    call: Call
    paysRemainingFee: boolean
}

/**
 * Schedule mutating of `is_frozen` state that determines if fuel tank or rule set can be
 * used
 * 
 * Additional 1 read and 1 write are added to account for `on_finalize` storage operations
 * 
 * # Errors
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not a fuel tank owner
 * - `FreezeQueueFull` if the queue is full
 */
export interface FuelTanksCall_schedule_mutate_freeze_state {
    __kind: 'schedule_mutate_freeze_state'
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
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not the fuel tank owner
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
 *   data
 * - `MaxRuleSetsExceeded` if max number of rule sets was exceeded
 * - `DuplicateRuleKinds` if adding a rule set with multiple rules of the same kind
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
 * - `FuelTankNotFound` if `tank_id` does not exist.
 * - `NoPermission` if caller is not the fuel tank owner
 * - `RequiresFrozenTankOrRuleset` if tank or rule set is not frozen
 * - `CannotRemoveRuleThatIsStoringAccountData` if removing a rule that is storing account
 *   data
 */
export interface FuelTanksCall_remove_rule_set {
    __kind: 'remove_rule_set'
    tankId: MultiAddress
    ruleSetId: number
}

/**
 * Similar to add_account but takes a list of `AccountId`s to
 * insert into a fuel tank.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountAlreadyExists` if account at `user_id` already exists
 */
export interface FuelTanksCall_batch_add_account {
    __kind: 'batch_add_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Similar to remove_account but takes a list of `AccountId`s to
 * remove from a fuel tank.
 * ### Errors
 * - `FuelTankNotFound` if fuel tank at `tank_id` does not exist
 * - `NoPermission` if `origin` does not have permission to add an account
 * - `AccountNotFound` if account at `user_id` does not exist
 */
export interface FuelTanksCall_batch_remove_account {
    __kind: 'batch_remove_account'
    tankId: MultiAddress
    userIds: MultiAddress[]
}

/**
 * Force set the fuel tank consumption
 * If `user_id` is `Some`, it sets the consumption for that account.
 * If it is `None`, it sets the consumption on the fuel tank directly.
 * 
 * # Errors
 * - `AccountNotFound` if `user_id` is `Some` and account does not exist
 * - `FuelTankNotFound` if tank_id does not exist
 * - `NoPermission` if caller is not ForceOrigin or fuel tank owner
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
 */
export interface FuelTanksCall_destroy_fuel_tank {
    __kind: 'destroy_fuel_tank'
    tankId: MultiAddress
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MarketplaceCall = MarketplaceCall_create_listing | MarketplaceCall_cancel_listing | MarketplaceCall_fill_listing | MarketplaceCall_place_bid | MarketplaceCall_finalize_auction | MarketplaceCall_set_protocol_fee

/**
 * Places a sell order. Requires `make_asset_id` or `take_asset_id` to be a `Currency`.
 * The id for the listing is generated by hashing the encoded bytes of the listing.
 * ### Parameters
 * - `make_asset_id`: The id of the asset being sold
 * - `take_asset_id`: The id of the asset being requested
 * - `amount`: The number of units being sold
 * - `price`: The requested price for each unit. If it's an auction, this is the minimum
 *   bid
 * - `salt`: Can be used to differentiate listings
 * - `auction_data`: Including this makes the listing an auction
 * ### Errors
 * - `InvalidAuctionStart` if the start is less than the current block +
 *   `ListingActiveDelay`
 * - `InvalidAuctionEnded` if auction ends before it starts
 * - `NoCurrency` Neither the make or take side is considered a currency
 * - `ListingForbidden` if make or take side tokens are not allowed to be listed
 * - `CurrencyNotAllowedAsRoyalty` if currency cannot be used as a royalty
 * - `LowBaseCurrencyBalance` if base currency balance is too low
 * - `LowTokenBalance` token balance is too low for reserve
 * - `ListingAlreadyExists` if a listing with the same ID already exists
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
 * ### Parameters
 * - `listing_id`: The ID of the listing to cancel
 * ### Errors
 * - `ListingNotFound` if the listing under `listing_id` does not exist
 * - `NoPermission` if the listing seller is not the caller, `origin`
 */
export interface MarketplaceCall_cancel_listing {
    __kind: 'cancel_listing'
    listingId: Uint8Array
}

/**
 * Fills a fixed price listing. This will execute immediately.
 * ### Parameters
 * - `listing_id`: The id for the listing to buy from
 * - `amount`: The number of units purchased
 * ### Errors
 * - `ListingNotFound` if the listing under `listing_id` does not exist
 * - `BuyerIsSeller` if the buyer is the seller of the listing
 * - `ListingIsWrongType` if the listing is not under auction
 * - `InvalidAmount` if the amount that still needs to be filled is greater than `amount`
 * - `ListingNotActive` if the listing has not passed the `ListingActiveDelay` yet
 * - `Overflow` if amount * listing_price is too large
 * - `TakeValueUnderMinimum` if the listings `take` value is under the minimum required
 * - `LowTokenBalance` if the buyer does not have enough tokens for reserve
 */
export interface MarketplaceCall_fill_listing {
    __kind: 'fill_listing'
    listingId: Uint8Array
    amount: bigint
}

/**
 * Places a bid on a listing. The listing must be an auction, and it must be currently
 * active.
 * ### Parameters
 * - `listing_id`: The id for the listing to buy from
 * - `price`: The price for a single unit
 * ### Errors
 * - `ListingNotFound` if listing under `listing_id` does not exist
 * - `BuyerIsSeller` if the bidder is the seller of the listing
 * - `ListingWrongType` if listing is not an auction
 * - `InactiveAuction` if listing operates outside of specified start and end block
 * - `Overflow` if added bid is too large to store
 * - `InvalidPrice` if price is less than mininum_price for a bid
 * - `Overflow` if older bid * amount is too large
 * - `Overflow` if new bid price is too large
 */
export interface MarketplaceCall_place_bid {
    __kind: 'place_bid'
    listingId: Uint8Array
    price: bigint
}

/**
 * Finalize the auction with id: `listing_id`. This will end the auction and transfer
 * funds. It fails if the auction is not over.
 * ### Parameters
 * - `listing_id`: The ID for the listing to finalize
 * ### Errors
 * - `ListingNotFound` if listing under `listing_id` does not exist
 * - `ListingIsWrongType` if listing is not an auction
 * - `AuctionNotOver` if the auction has not finished yet
 * - `TakeValueUnderMinimum` if the take value is less than the minimum required
 * - `Overflow` if bid price * listing_amount is too large
 */
export interface MarketplaceCall_finalize_auction {
    __kind: 'finalize_auction'
    listingId: Uint8Array
}

/**
 * Change the protocol fee to `protocol_fee`. Fails if `origin` is invalid.
 * ### Parameters
 * - `protocol_fee`: Percentage of fee to set
 */
export interface MarketplaceCall_set_protocol_fee {
    __kind: 'set_protocol_fee'
    protocolFee: number
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
 */
export interface ExtrinsicPauseCall_resume_extrinsic {
    __kind: 'resume_extrinsic'
    call: Call
    resumeOnlyExtrinsic: boolean
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type EfinityUtilityCall = EfinityUtilityCall_batch

/**
 * Dispatch a batch of calls.
 * 
 * May be called from any origin except `None`.
 * 
 * - `calls`: The calls to be dispatched from the same origin. The number of call must not
 *   exceed the constant: `batched_calls_limit` (available in constant metadata).
 * 
 * If origin is root then the calls are dispatched without checking origin filter. (This
 * includes bypassing `frame_system::Config::BaseCallFilter`).
 */
export interface EfinityUtilityCall_batch {
    __kind: 'batch'
    calls: Call[]
    continueOnFailure: boolean
}

export interface UserAccountManagement {
    tankReservesExistentialDeposit: boolean
    tankReservesAccountCreationDeposit: boolean
}

export interface UserFuelBudgetRuleDescriptor {
    amount: bigint
    resetPeriod: number
}

export interface TankFuelBudgetRule {
    budget: Budget
    consumption: Consumption
}

export interface RequireTokenRule {
    collectionId: bigint
    tokenId: bigint
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

export interface DefaultCollectionPolicyDescriptor {
    mint: DefaultMintPolicyDescriptor
    market: DefaultMarketPolicyDescriptor
}

export type Type_330 = Type_330_WithdrawAsset | Type_330_ReserveAssetDeposit | Type_330_TeleportAsset | Type_330_QueryResponse | Type_330_TransferAsset | Type_330_TransferReserveAsset | Type_330_Transact | Type_330_HrmpNewChannelOpenRequest | Type_330_HrmpChannelAccepted | Type_330_HrmpChannelClosing | Type_330_RelayedFrom

export interface Type_330_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: Type_332[]
}

export interface Type_330_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: Type_332[]
}

export interface Type_330_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: Type_332[]
}

export interface Type_330_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface Type_330_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_330_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_330_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_330_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_330_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_330_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_330_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: Type_330
}

export type Type_335 = Type_335_WithdrawAsset | Type_335_ReserveAssetDeposited | Type_335_ReceiveTeleportedAsset | Type_335_QueryResponse | Type_335_TransferAsset | Type_335_TransferReserveAsset | Type_335_Transact | Type_335_HrmpNewChannelOpenRequest | Type_335_HrmpChannelAccepted | Type_335_HrmpChannelClosing | Type_335_RelayedFrom | Type_335_SubscribeVersion | Type_335_UnsubscribeVersion

export interface Type_335_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: Type_337[]
}

export interface Type_335_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface Type_335_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_335_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_335_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_335_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_335_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_335_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_335_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: Type_335
}

export interface Type_335_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_335_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type Type_341 = Type_341_WithdrawAsset | Type_341_ReserveAssetDeposited | Type_341_ReceiveTeleportedAsset | Type_341_QueryResponse | Type_341_TransferAsset | Type_341_TransferReserveAsset | Type_341_Transact | Type_341_HrmpNewChannelOpenRequest | Type_341_HrmpChannelAccepted | Type_341_HrmpChannelClosing | Type_341_ClearOrigin | Type_341_DescendOrigin | Type_341_ReportError | Type_341_DepositAsset | Type_341_DepositReserveAsset | Type_341_ExchangeAsset | Type_341_InitiateReserveWithdraw | Type_341_InitiateTeleport | Type_341_QueryHolding | Type_341_BuyExecution | Type_341_RefundSurplus | Type_341_SetErrorHandler | Type_341_SetAppendix | Type_341_ClearError | Type_341_ClaimAsset | Type_341_Trap | Type_341_SubscribeVersion | Type_341_UnsubscribeVersion

export interface Type_341_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface Type_341_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface Type_341_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface Type_341_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface Type_341_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface Type_341_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_341_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface Type_341_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface Type_341_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface Type_341_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface Type_341_ClearOrigin {
    __kind: 'ClearOrigin'
}

export interface Type_341_DescendOrigin {
    __kind: 'DescendOrigin'
    value: V1Junctions
}

export interface Type_341_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface Type_341_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_341_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_341_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_341_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_341_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface Type_341_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface Type_341_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weightLimit: V2WeightLimit
}

export interface Type_341_RefundSurplus {
    __kind: 'RefundSurplus'
}

export interface Type_341_SetErrorHandler {
    __kind: 'SetErrorHandler'
    value: Type_341[]
}

export interface Type_341_SetAppendix {
    __kind: 'SetAppendix'
    value: Type_341[]
}

export interface Type_341_ClearError {
    __kind: 'ClearError'
}

export interface Type_341_ClaimAsset {
    __kind: 'ClaimAsset'
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
}

export interface Type_341_Trap {
    __kind: 'Trap'
    value: bigint
}

export interface Type_341_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface Type_341_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
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

export type Type_281 = Type_281_Members | Type_281_Member | Type_281__Phantom

export interface Type_281_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_281_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_281__Phantom {
    __kind: '_Phantom'
}

export type Type_282 = Type_282_Members | Type_282_Member | Type_282__Phantom

export interface Type_282_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_282_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_282__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_Xcm | Origin_Response

export interface Origin_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Origin_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Type_284 = Type_284_Relay | Type_284_SiblingParachain

export interface Type_284_Relay {
    __kind: 'Relay'
}

export interface Type_284_SiblingParachain {
    __kind: 'SiblingParachain'
    value: number
}

export type Void = never

export type V0MultiLocation = V0MultiLocation_Null | V0MultiLocation_X1 | V0MultiLocation_X2 | V0MultiLocation_X3 | V0MultiLocation_X4 | V0MultiLocation_X5 | V0MultiLocation_X6 | V0MultiLocation_X7 | V0MultiLocation_X8

export interface V0MultiLocation_Null {
    __kind: 'Null'
}

export interface V0MultiLocation_X1 {
    __kind: 'X1'
    value: V0Junction
}

export interface V0MultiLocation_X2 {
    __kind: 'X2'
    value: [V0Junction, V0Junction]
}

export interface V0MultiLocation_X3 {
    __kind: 'X3'
    value: [V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X4 {
    __kind: 'X4'
    value: [V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X5 {
    __kind: 'X5'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X6 {
    __kind: 'X6'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X7 {
    __kind: 'X7'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface V0MultiLocation_X8 {
    __kind: 'X8'
    value: [V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction, V0Junction]
}

export interface ReferendumStatus {
    end: number
    proposal: Bounded
    threshold: VoteThreshold
    delay: number
    tally: Tally
}

export interface RuleSet {
    rules: [DispatchRuleKind, DispatchRuleWrapper][]
    isFrozen: boolean
}

export type AccountRuleKind = AccountRuleKind_WhitelistedCallers | AccountRuleKind_RequireToken

export interface AccountRuleKind_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
}

export interface AccountRuleKind_RequireToken {
    __kind: 'RequireToken'
}

export type AccountRuleWrapper = AccountRuleWrapper_WhitelistedCallers | AccountRuleWrapper_RequireToken

export interface AccountRuleWrapper_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface AccountRuleWrapper_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export type IdleOperation = IdleOperation_DeleteAttributes

export interface IdleOperation_DeleteAttributes {
    __kind: 'DeleteAttributes'
    collectionId: bigint
    tokenId: (bigint | undefined)
    attributeCount: number
}

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

export type Event = Event_System | Event_ParachainSystem | Event_Sudo | Event_Preimage | Event_Scheduler | Event_Utility | Event_Balances | Event_TransactionPayment | Event_Vesting | Event_Democracy | Event_Council | Event_TechnicalCommittee | Event_CommunityPool | Event_TechnicalMembership | Event_Multisig | Event_CollatorStaking | Event_Session | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_OrmlXcm | Event_EfinityXcm | Event_UnknownTokens | Event_XTokens | Event_Bounties | Event_MultiTokens | Event_Claims | Event_Pools | Event_FuelTanks | Event_Marketplace | Event_ExtrinsicPause | Event_EfinityUtility

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

export interface Event_Vesting {
    __kind: 'Vesting'
    value: VestingEvent
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

export interface Event_EfinityXcm {
    __kind: 'EfinityXcm'
    value: EfinityXcmEvent
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

export interface Event_Claims {
    __kind: 'Claims'
    value: ClaimsEvent
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

export interface Event_EfinityUtility {
    __kind: 'EfinityUtility'
    value: EfinityUtilityEvent
}

export interface DefaultRoyalty {
    beneficiary: Uint8Array
    percentage: number
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V1AssetInstance = V1AssetInstance_Undefined | V1AssetInstance_Index | V1AssetInstance_Array4 | V1AssetInstance_Array8 | V1AssetInstance_Array16 | V1AssetInstance_Array32 | V1AssetInstance_Blob

export interface V1AssetInstance_Undefined {
    __kind: 'Undefined'
}

export interface V1AssetInstance_Index {
    __kind: 'Index'
    value: bigint
}

export interface V1AssetInstance_Array4 {
    __kind: 'Array4'
    value: Uint8Array
}

export interface V1AssetInstance_Array8 {
    __kind: 'Array8'
    value: Uint8Array
}

export interface V1AssetInstance_Array16 {
    __kind: 'Array16'
    value: Uint8Array
}

export interface V1AssetInstance_Array32 {
    __kind: 'Array32'
    value: Uint8Array
}

export interface V1AssetInstance_Blob {
    __kind: 'Blob'
    value: Uint8Array
}

export interface ParachainInherentData {
    validationData: V2PersistedValidationData
    relayChainState: StorageProof
    downwardMessages: InboundDownwardMessage[]
    horizontalMessages: [number, InboundHrmpMessage[]][]
}

export interface VestingSchedule {
    start: number
    period: number
    periodCount: number
    perPeriod: bigint
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

export interface Header {
    parentHash: Uint8Array
    number: number
    stateRoot: Uint8Array
    extrinsicsRoot: Uint8Array
    digest: Digest
}

export interface SessionKeys {
    aura: Uint8Array
    pools: Uint8Array
}

export type VersionedXcm = VersionedXcm_V0 | VersionedXcm_V1 | VersionedXcm_V2

export interface VersionedXcm_V0 {
    __kind: 'V0'
    value: V0Xcm
}

export interface VersionedXcm_V1 {
    __kind: 'V1'
    value: V1Xcm
}

export interface VersionedXcm_V2 {
    __kind: 'V2'
    value: V2Instruction[]
}

export interface DefaultBurnParams {
    tokenId: bigint
    amount: bigint
    keepAlive: boolean
    removeTokenStorage: boolean
}

export interface Freeze {
    collectionId: bigint
    freezeType: FreezeType
}

export interface Collection {
    owner: Uint8Array
    policy: DefaultCollectionPolicy
    tokenCount: bigint
    attributeCount: number
    totalDeposit: bigint
    explicitRoyaltyCurrencies: [AssetId, null][]
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

export interface PoolsMutation {
    community: Pool
    collator: Pool
    fuelTanks: Pool
    priceDiscovery: Pool
}

export interface Consumption {
    totalConsumed: bigint
    lastResetBlock: (number | undefined)
}

export interface AuctionData {
    startBlock: number
    endBlock: number
}

export interface Budget {
    amount: bigint
    resetPeriod: number
}

export interface DefaultMintPolicyDescriptor {
    maxTokenCount: (bigint | undefined)
    maxTokenSupply: (bigint | undefined)
    forceSingleMint: boolean
}

export interface DefaultMarketPolicyDescriptor {
    royalty: (DefaultRoyalty | undefined)
}

export type Type_332 = Type_332_Null | Type_332_DepositAsset | Type_332_DepositReserveAsset | Type_332_ExchangeAsset | Type_332_InitiateReserveWithdraw | Type_332_InitiateTeleport | Type_332_QueryHolding | Type_332_BuyExecution

export interface Type_332_Null {
    __kind: 'Null'
}

export interface Type_332_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface Type_332_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_332_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface Type_332_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface Type_332_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface Type_332_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface Type_332_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: Type_330[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
    __kind: 'Assets'
    value: V0MultiAsset[]
}

export type V0Order = V0Order_Null | V0Order_DepositAsset | V0Order_DepositReserveAsset | V0Order_ExchangeAsset | V0Order_InitiateReserveWithdraw | V0Order_InitiateTeleport | V0Order_QueryHolding | V0Order_BuyExecution

export interface V0Order_Null {
    __kind: 'Null'
}

export interface V0Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V0MultiAsset[]
    receive: V0MultiAsset[]
}

export interface V0Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V0MultiAsset[]
    reserve: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V0MultiLocation
    assets: V0MultiAsset[]
}

export interface V0Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V0MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    xcm: V0Xcm[]
}

export type V0OriginKind = V0OriginKind_Native | V0OriginKind_SovereignAccount | V0OriginKind_Superuser | V0OriginKind_Xcm

export interface V0OriginKind_Native {
    __kind: 'Native'
}

export interface V0OriginKind_SovereignAccount {
    __kind: 'SovereignAccount'
}

export interface V0OriginKind_Superuser {
    __kind: 'Superuser'
}

export interface V0OriginKind_Xcm {
    __kind: 'Xcm'
}

export interface DoubleEncoded {
    encoded: Uint8Array
}

export type Type_337 = Type_337_Noop | Type_337_DepositAsset | Type_337_DepositReserveAsset | Type_337_ExchangeAsset | Type_337_InitiateReserveWithdraw | Type_337_InitiateTeleport | Type_337_QueryHolding | Type_337_BuyExecution

export interface Type_337_Noop {
    __kind: 'Noop'
}

export interface Type_337_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface Type_337_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_337_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface Type_337_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface Type_337_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface Type_337_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface Type_337_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: Type_335[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V1Response_Version {
    __kind: 'Version'
    value: number
}

export type V1Order = V1Order_Noop | V1Order_DepositAsset | V1Order_DepositReserveAsset | V1Order_ExchangeAsset | V1Order_InitiateReserveWithdraw | V1Order_InitiateTeleport | V1Order_QueryHolding | V1Order_BuyExecution

export interface V1Order_Noop {
    __kind: 'Noop'
}

export interface V1Order_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V1Order_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V1Order_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Order_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
}

export interface V1Order_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
    weight: bigint
    debt: bigint
    haltOnError: boolean
    instructions: V1Xcm[]
}

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
    __kind: 'Null'
}

export interface V2Response_Assets {
    __kind: 'Assets'
    value: V1MultiAsset[]
}

export interface V2Response_ExecutionResult {
    __kind: 'ExecutionResult'
    value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
    __kind: 'Version'
    value: number
}

export type V2Instruction = V2Instruction_WithdrawAsset | V2Instruction_ReserveAssetDeposited | V2Instruction_ReceiveTeleportedAsset | V2Instruction_QueryResponse | V2Instruction_TransferAsset | V2Instruction_TransferReserveAsset | V2Instruction_Transact | V2Instruction_HrmpNewChannelOpenRequest | V2Instruction_HrmpChannelAccepted | V2Instruction_HrmpChannelClosing | V2Instruction_ClearOrigin | V2Instruction_DescendOrigin | V2Instruction_ReportError | V2Instruction_DepositAsset | V2Instruction_DepositReserveAsset | V2Instruction_ExchangeAsset | V2Instruction_InitiateReserveWithdraw | V2Instruction_InitiateTeleport | V2Instruction_QueryHolding | V2Instruction_BuyExecution | V2Instruction_RefundSurplus | V2Instruction_SetErrorHandler | V2Instruction_SetAppendix | V2Instruction_ClearError | V2Instruction_ClaimAsset | V2Instruction_Trap | V2Instruction_SubscribeVersion | V2Instruction_UnsubscribeVersion

export interface V2Instruction_WithdrawAsset {
    __kind: 'WithdrawAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    value: V1MultiAsset[]
}

export interface V2Instruction_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    value: V1MultiAsset[]
}

export interface V2Instruction_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V2Response
    maxWeight: bigint
}

export interface V2Instruction_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V2Instruction_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
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
    value: V1Junctions
}

export interface V2Instruction_ReportError {
    __kind: 'ReportError'
    queryId: bigint
    dest: V1MultiLocation
    maxResponseWeight: bigint
}

export interface V2Instruction_DepositAsset {
    __kind: 'DepositAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    beneficiary: V1MultiLocation
}

export interface V2Instruction_DepositReserveAsset {
    __kind: 'DepositReserveAsset'
    assets: V1MultiAssetFilter
    maxAssets: number
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_ExchangeAsset {
    __kind: 'ExchangeAsset'
    give: V1MultiAssetFilter
    receive: V1MultiAsset[]
}

export interface V2Instruction_InitiateReserveWithdraw {
    __kind: 'InitiateReserveWithdraw'
    assets: V1MultiAssetFilter
    reserve: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_InitiateTeleport {
    __kind: 'InitiateTeleport'
    assets: V1MultiAssetFilter
    dest: V1MultiLocation
    xcm: V2Instruction[]
}

export interface V2Instruction_QueryHolding {
    __kind: 'QueryHolding'
    queryId: bigint
    dest: V1MultiLocation
    assets: V1MultiAssetFilter
    maxResponseWeight: bigint
}

export interface V2Instruction_BuyExecution {
    __kind: 'BuyExecution'
    fees: V1MultiAsset
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
    assets: V1MultiAsset[]
    ticket: V1MultiLocation
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

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
    __kind: 'Definite'
    value: V1MultiAsset[]
}

export interface V1MultiAssetFilter_Wild {
    __kind: 'Wild'
    value: V1WildMultiAsset
}

export type V0Junction = V0Junction_Parent | V0Junction_Parachain | V0Junction_AccountId32 | V0Junction_AccountIndex64 | V0Junction_AccountKey20 | V0Junction_PalletInstance | V0Junction_GeneralIndex | V0Junction_GeneralKey | V0Junction_OnlyChild | V0Junction_Plurality

export interface V0Junction_Parent {
    __kind: 'Parent'
}

export interface V0Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V0Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V0Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V0Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V0Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V0Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V0Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V0Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V0Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export interface Tally {
    ayes: bigint
    nays: bigint
    turnout: bigint
}

export type DispatchRuleWrapper = DispatchRuleWrapper_WhitelistedCallers | DispatchRuleWrapper_WhitelistedCollections | DispatchRuleWrapper_MaxFuelBurnPerTransaction | DispatchRuleWrapper_UserFuelBudget | DispatchRuleWrapper_TankFuelBudget | DispatchRuleWrapper_RequireToken | DispatchRuleWrapper_PermittedCalls | DispatchRuleWrapper_PermittedExtrinsics

export interface DispatchRuleWrapper_WhitelistedCallers {
    __kind: 'WhitelistedCallers'
    value: Uint8Array[]
}

export interface DispatchRuleWrapper_WhitelistedCollections {
    __kind: 'WhitelistedCollections'
    value: bigint[]
}

export interface DispatchRuleWrapper_MaxFuelBurnPerTransaction {
    __kind: 'MaxFuelBurnPerTransaction'
    value: bigint
}

export interface DispatchRuleWrapper_UserFuelBudget {
    __kind: 'UserFuelBudget'
    value: UserFuelBudgetRule
}

export interface DispatchRuleWrapper_TankFuelBudget {
    __kind: 'TankFuelBudget'
    value: TankFuelBudgetRule
}

export interface DispatchRuleWrapper_RequireToken {
    __kind: 'RequireToken'
    value: RequireTokenRule
}

export interface DispatchRuleWrapper_PermittedCalls {
    __kind: 'PermittedCalls'
    value: Uint8Array[]
}

export interface DispatchRuleWrapper_PermittedExtrinsics {
    __kind: 'PermittedExtrinsics'
    value: ExtrinsicInfo[]
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
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_ValidationFunctionDiscarded | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

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
    sudoResult: Type_31
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
    sudoResult: Type_31
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
    result: Type_31
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
    result: Type_31
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated | BalancesEvent_Deposit | BalancesEvent_Withdraw | BalancesEvent_Slashed

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
    reserved: bigint
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
export type VestingEvent = VestingEvent_VestingScheduleAdded | VestingEvent_Claimed | VestingEvent_VestingSchedulesUpdated

/**
 * Added new vesting schedule.
 */
export interface VestingEvent_VestingScheduleAdded {
    __kind: 'VestingScheduleAdded'
    from: Uint8Array
    to: Uint8Array
    vestingSchedule: VestingSchedule
}

/**
 * Claimed vesting.
 */
export interface VestingEvent_Claimed {
    __kind: 'Claimed'
    who: Uint8Array
    amount: bigint
}

/**
 * Updated vesting schedules.
 */
export interface VestingEvent_VestingSchedulesUpdated {
    __kind: 'VestingSchedulesUpdated'
    who: Uint8Array
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DemocracyEvent = DemocracyEvent_Proposed | DemocracyEvent_Tabled | DemocracyEvent_ExternalTabled | DemocracyEvent_Started | DemocracyEvent_Passed | DemocracyEvent_NotPassed | DemocracyEvent_Cancelled | DemocracyEvent_Delegated | DemocracyEvent_Undelegated | DemocracyEvent_Vetoed | DemocracyEvent_Blacklisted | DemocracyEvent_Voted | DemocracyEvent_Seconded | DemocracyEvent_ProposalCanceled

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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
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
    result: Type_31
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface CouncilEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_31
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
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
    result: Type_31
}

/**
 * A single member did some action; result will be `Ok` if it returned without error.
 */
export interface TechnicalCommitteeEvent_MemberExecuted {
    __kind: 'MemberExecuted'
    proposalHash: Uint8Array
    result: Type_31
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type CommunityPoolEvent = CommunityPoolEvent_Proposed | CommunityPoolEvent_Spending | CommunityPoolEvent_Awarded | CommunityPoolEvent_Rejected | CommunityPoolEvent_Burnt | CommunityPoolEvent_Rollover | CommunityPoolEvent_Deposit | CommunityPoolEvent_SpendApproved

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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
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
    result: Type_31
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
export type CollatorStakingEvent = CollatorStakingEvent_NewInvulnerables | CollatorStakingEvent_RoundFinalized | CollatorStakingEvent_CandidateJoined | CollatorStakingEvent_CandidateRemoved | CollatorStakingEvent_Nominated | CollatorStakingEvent_NominationRemoved | CollatorStakingEvent_CollatorSelected

/**
 * A new list of invulnerables has been set by root.
 */
export interface CollatorStakingEvent_NewInvulnerables {
    __kind: 'NewInvulnerables'
    /**
     * list of `AccountId` of invulnerables
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
     * `AccountId` of candidate
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
     * `AccountId` of collator
     */
    accountId: Uint8Array
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
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent | XcmpQueueEvent_OverweightEnqueued | XcmpQueueEvent_OverweightServiced

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
    __kind: 'Success'
    messageHash: (Uint8Array | undefined)
    weight: Weight
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
    __kind: 'Fail'
    messageHash: (Uint8Array | undefined)
    error: V2Error
    weight: Weight
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
    __kind: 'BadVersion'
    messageHash: (Uint8Array | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
    __kind: 'BadFormat'
    messageHash: (Uint8Array | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
    __kind: 'UpwardMessageSent'
    messageHash: (Uint8Array | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
    __kind: 'XcmpMessageSent'
    messageHash: (Uint8Array | undefined)
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail | PolkadotXcmEvent_AssetsClaimed

/**
 * Execution of an XCM message was attempted.
 * 
 * \[ outcome \]
 */
export interface PolkadotXcmEvent_Attempted {
    __kind: 'Attempted'
    value: V2Outcome
}

/**
 * A XCM message was sent.
 * 
 * \[ origin, destination, message \]
 */
export interface PolkadotXcmEvent_Sent {
    __kind: 'Sent'
    value: [V1MultiLocation, V1MultiLocation, V2Instruction[]]
}

/**
 * Query response received which does not match a registered query. This may be because a
 * matching query was never registered, it may be because it is a duplicate response, or
 * because the query timed out.
 * 
 * \[ origin location, id \]
 */
export interface PolkadotXcmEvent_UnexpectedResponse {
    __kind: 'UnexpectedResponse'
    value: [V1MultiLocation, bigint]
}

/**
 * Query response has been received and is ready for taking with `take_response`. There is
 * no registered notification call.
 * 
 * \[ id, response \]
 */
export interface PolkadotXcmEvent_ResponseReady {
    __kind: 'ResponseReady'
    value: [bigint, V2Response]
}

/**
 * Query response has been received and query is removed. The registered notification has
 * been dispatched and executed successfully.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_Notified {
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
export interface PolkadotXcmEvent_NotifyOverweight {
    __kind: 'NotifyOverweight'
    value: [bigint, number, number, Weight, Weight]
}

/**
 * Query response has been received and query is removed. There was a general error with
 * dispatching the notification call.
 * 
 * \[ id, pallet index, call index \]
 */
export interface PolkadotXcmEvent_NotifyDispatchError {
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
export interface PolkadotXcmEvent_NotifyDecodeFailed {
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
export interface PolkadotXcmEvent_InvalidResponder {
    __kind: 'InvalidResponder'
    value: [V1MultiLocation, bigint, (V1MultiLocation | undefined)]
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
export interface PolkadotXcmEvent_InvalidResponderVersion {
    __kind: 'InvalidResponderVersion'
    value: [V1MultiLocation, bigint]
}

/**
 * Received query response has been read and removed.
 * 
 * \[ id \]
 */
export interface PolkadotXcmEvent_ResponseTaken {
    __kind: 'ResponseTaken'
    value: bigint
}

/**
 * Some assets have been placed in an asset trap.
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsTrapped {
    __kind: 'AssetsTrapped'
    value: [Uint8Array, V1MultiLocation, VersionedMultiAssets]
}

/**
 * An XCM version change notification message has been attempted to be sent.
 * 
 * \[ destination, result \]
 */
export interface PolkadotXcmEvent_VersionChangeNotified {
    __kind: 'VersionChangeNotified'
    value: [V1MultiLocation, number]
}

/**
 * The supported version of a location has been changed. This might be through an
 * automatic notification or a manual intervention.
 * 
 * \[ location, XCM version \]
 */
export interface PolkadotXcmEvent_SupportedVersionChanged {
    __kind: 'SupportedVersionChanged'
    value: [V1MultiLocation, number]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * sending the notification to it.
 * 
 * \[ location, query ID, error \]
 */
export interface PolkadotXcmEvent_NotifyTargetSendFail {
    __kind: 'NotifyTargetSendFail'
    value: [V1MultiLocation, bigint, V2Error]
}

/**
 * A given location which had a version change subscription was dropped owing to an error
 * migrating the location to our new XCM format.
 * 
 * \[ location, query ID \]
 */
export interface PolkadotXcmEvent_NotifyTargetMigrationFail {
    __kind: 'NotifyTargetMigrationFail'
    value: [VersionedMultiLocation, bigint]
}

/**
 * Some assets have been claimed from an asset trap
 * 
 * \[ hash, origin, assets \]
 */
export interface PolkadotXcmEvent_AssetsClaimed {
    __kind: 'AssetsClaimed'
    value: [Uint8Array, V1MultiLocation, VersionedMultiAssets]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
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
    value: [Uint8Array, V2Outcome]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 * Downward message is invalid XCM.
 */
export interface DmpQueueEvent_InvalidFormat {
    __kind: 'InvalidFormat'
    messageId: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 */
export interface DmpQueueEvent_UnsupportedVersion {
    __kind: 'UnsupportedVersion'
    messageId: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 */
export interface DmpQueueEvent_ExecutedDownward {
    __kind: 'ExecutedDownward'
    messageId: Uint8Array
    outcome: V2Outcome
}

/**
 * The weight limit for handling downward messages was reached.
 */
export interface DmpQueueEvent_WeightExhausted {
    __kind: 'WeightExhausted'
    messageId: Uint8Array
    remainingWeight: Weight
    requiredWeight: Weight
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 */
export interface DmpQueueEvent_OverweightEnqueued {
    __kind: 'OverweightEnqueued'
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type OrmlXcmEvent = OrmlXcmEvent_Sent

/**
 * XCM message sent. \[to, message\]
 */
export interface OrmlXcmEvent_Sent {
    __kind: 'Sent'
    to: V1MultiLocation
    message: V2Instruction[]
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EfinityXcmEvent = EfinityXcmEvent_MinimumWeightUpdated

/**
 * Xcm fee and weight updated
 */
export interface EfinityXcmEvent_MinimumWeightUpdated {
    __kind: 'MinimumWeightUpdated'
    value: MinimumWeightFeePair
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type UnknownTokensEvent = UnknownTokensEvent_Deposited | UnknownTokensEvent_Withdrawn

/**
 * Deposit success.
 */
export interface UnknownTokensEvent_Deposited {
    __kind: 'Deposited'
    asset: V1MultiAsset
    who: V1MultiLocation
}

/**
 * Withdraw success.
 */
export interface UnknownTokensEvent_Withdrawn {
    __kind: 'Withdrawn'
    asset: V1MultiAsset
    who: V1MultiLocation
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type XTokensEvent = XTokensEvent_TransferredMultiAssets

/**
 * Transferred `MultiAsset` with fee.
 */
export interface XTokensEvent_TransferredMultiAssets {
    __kind: 'TransferredMultiAssets'
    sender: Uint8Array
    assets: V1MultiAsset[]
    fee: V1MultiAsset
    dest: V1MultiLocation
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type MultiTokensEvent = MultiTokensEvent_CollectionCreated | MultiTokensEvent_CollectionDestroyed | MultiTokensEvent_CollectionMutated | MultiTokensEvent_Minted | MultiTokensEvent_TokenCreated | MultiTokensEvent_TokenMutated | MultiTokensEvent_Burned | MultiTokensEvent_TokenDestroyed | MultiTokensEvent_Transferred | MultiTokensEvent_Frozen | MultiTokensEvent_Thawed | MultiTokensEvent_AttributeSet | MultiTokensEvent_AttributeRemoved | MultiTokensEvent_Approved | MultiTokensEvent_Unapproved | MultiTokensEvent_CollectionAccountCreated | MultiTokensEvent_TokenAccountCreated | MultiTokensEvent_CollectionAccountDestroyed | MultiTokensEvent_TokenAccountDestroyed | MultiTokensEvent_Reserved | MultiTokensEvent_Unreserved | MultiTokensEvent_MovedReserves | MultiTokensEvent_ReserveRepatriated | MultiTokensEvent_BalanceSet | MultiTokensEvent_Withdraw | MultiTokensEvent_Deposit | MultiTokensEvent_Slashed | MultiTokensEvent_CollectionUpdated | MultiTokensEvent_TokenUpdated | MultiTokensEvent_NextCollectionIdUpdated | MultiTokensEvent_CollectionAccountUpdated | MultiTokensEvent_TokenAccountUpdated | MultiTokensEvent_MigrationStatusUpdated

/**
 * A new `Collection` was created
 */
export interface MultiTokensEvent_CollectionCreated {
    __kind: 'CollectionCreated'
    /**
     * The id of the `Collection`
     */
    collectionId: bigint
    /**
     * The owner of the `Collection`
     */
    owner: Uint8Array
}

/**
 * A `Collection` was destroyed.
 */
export interface MultiTokensEvent_CollectionDestroyed {
    __kind: 'CollectionDestroyed'
    /**
     * id of collection destroyed
     */
    collectionId: bigint
    /**
     * The `AccountId` that destroyed the collection
     */
    caller: Uint8Array
}

/**
 * A `Collection` was mutated
 */
export interface MultiTokensEvent_CollectionMutated {
    __kind: 'CollectionMutated'
    /**
     * `CollectionId` of the `Collection`
     */
    collectionId: bigint
    /**
     * The mutation that was applied to the collection
     */
    mutation: DefaultCollectionMutation
}

/**
 * Units of a `Token` were minted
 */
export interface MultiTokensEvent_Minted {
    __kind: 'Minted'
    /**
     * `CollectionId` of minted token
     */
    collectionId: bigint
    /**
     * The `TokenId` minted
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
 * A `Token` was created
 */
export interface MultiTokensEvent_TokenCreated {
    __kind: 'TokenCreated'
    /**
     * The `CollectionId` minted
     */
    collectionId: bigint
    /**
     * The `TokenId` minted
     */
    tokenId: bigint
    /**
     * issuer of minted `Token`
     */
    issuer: RootOrSigned
    /**
     * the initial supply of the `Token`
     */
    initialSupply: bigint
}

/**
 * A `Token` was mutated
 */
export interface MultiTokensEvent_TokenMutated {
    __kind: 'TokenMutated'
    /**
     * The `CollectionId` `Token` belongs to
     */
    collectionId: bigint
    /**
     * The `Token` mutated
     */
    tokenId: bigint
    /**
     * mutation that was applied to the `Token`
     */
    mutation: DefaultTokenMutation
}

/**
 * Units of a `Token` were burned
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
 * A `Token` was destroyed
 */
export interface MultiTokensEvent_TokenDestroyed {
    __kind: 'TokenDestroyed'
    /**
     * The `CollectionId` destroyed
     */
    collectionId: bigint
    /**
     * The `TokenId` destroyed
     */
    tokenId: bigint
    /**
     * the `AccountId` that destroyed the `Token`
     */
    caller: Uint8Array
}

/**
 * Units of a `Token` were transferred
 */
export interface MultiTokensEvent_Transferred {
    __kind: 'Transferred'
    /**
     * collection_id of transferred collection
     */
    collectionId: bigint
    /**
     * `TokenId` transferred
     */
    tokenId: bigint
    /**
     * The `AccountId` that performed the transfer
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
     * `TokenId` of `Token` modified
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
 * A new `CollectionAccount` was created
 */
export interface MultiTokensEvent_CollectionAccountCreated {
    __kind: 'CollectionAccountCreated'
    /**
     * The `CollectionId` for which the account is created
     */
    collectionId: bigint
    /**
     * The `AccountId` of the account
     */
    accountId: Uint8Array
}

/**
 * A new `TokenAccount` was created
 */
export interface MultiTokensEvent_TokenAccountCreated {
    __kind: 'TokenAccountCreated'
    /**
     * The `CollectionId` for which the account is created
     */
    collectionId: bigint
    /**
     * The `TokenId` for which the account is created
     */
    tokenId: bigint
    /**
     * The `AccountId` of the account
     */
    accountId: Uint8Array
    /**
     * The balance that this account holds
     */
    balance: bigint
}

/**
 * A `CollectionAccount` was destroyed
 */
export interface MultiTokensEvent_CollectionAccountDestroyed {
    __kind: 'CollectionAccountDestroyed'
    /**
     * The `CollectionId` of the destroyed account
     */
    collectionId: bigint
    /**
     * The `AccountId` of the destroyed account
     */
    accountId: Uint8Array
}

/**
 * A `TokenAccount` was destroyed
 */
export interface MultiTokensEvent_TokenAccountDestroyed {
    __kind: 'TokenAccountDestroyed'
    /**
     * The `CollectionId` for which the account is created
     */
    collectionId: bigint
    /**
     * The `TokenId` fof the destroyed account
     */
    tokenId: bigint
    /**
     * The `AccountId` of the destroyed account
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
     * The `CollectionId` in which token was unreserved
     */
    collectionId: bigint
    /**
     * The `TokenId` that was unreserved
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
     * The `CollectionId` in which token was moved
     */
    collectionId: bigint
    /**
     * The `TokenId` that was moved
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
     * The `CollectionId` in which token was moved
     */
    collectionId: bigint
    /**
     * The `TokenId` that was moved
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
     * The `CollectionId` for which balance was set
     */
    collectionId: bigint
    /**
     * The `TokenId` for which balance was set
     */
    tokenId: bigint
    /**
     * The `AccountId` that balance was set for
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
     * The `CollectionId` of the tokens withdrawn
     */
    collectionId: bigint
    /**
     * The `TokenId` of the tokens withdrawn
     */
    tokenId: bigint
    /**
     * The `AccountId` withdrawn from
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
     * The `CollectionId` of the tokens deposited
     */
    collectionId: bigint
    /**
     * The `TokenId` of the tokens deposited
     */
    tokenId: bigint
    /**
     * The `AccountId` deposited to
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
     * The `CollectionId` of the tokens slashed
     */
    collectionId: bigint
    /**
     * The `TokenId` of the tokens slashed
     */
    tokenId: bigint
    /**
     * The `AccountId` slashed
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
     * The `CollectionId` for which the value is set
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
     * The `CollectionId` for which the value is set
     */
    collectionId: bigint
    /**
     * The `TokenId` for which the value is set
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
     * The `CollectionId` for which the value is set
     */
    collectionId: bigint
    /**
     * The `AccountId` that owned the token account
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
     * The `CollectionId` for which the value is set
     */
    collectionId: bigint
    /**
     * The `TokenId` fof the destroyed account
     */
    tokenId: bigint
    /**
     * The `AccountId` that owned the token account
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some EFIs. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
    __kind: 'Claimed'
    /**
     * The account that received the claim
     */
    who: Uint8Array
    /**
     * The ethereum address
     */
    ethereumAddress: Uint8Array
    /**
     * The amount that was claimed
     */
    amount: bigint
}

/**
 * The pallet's event type
 */
export type PoolsEvent = PoolsEvent_PoolsMutated

/**
 * Pools storage was modified by `PoolsMutation`
 */
export interface PoolsEvent_PoolsMutated {
    __kind: 'PoolsMutated'
    value: PoolsMutation
}

/**
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type FuelTanksEvent = FuelTanksEvent_FuelTankCreated | FuelTanksEvent_FuelTankMutated | FuelTanksEvent_FuelTankDestroyed | FuelTanksEvent_CallDispatched | FuelTanksEvent_AccountAdded | FuelTanksEvent_AccountRemoved | FuelTanksEvent_AccountRuleDataRemoved | FuelTanksEvent_RuleSetInserted | FuelTanksEvent_RuleSetRemoved | FuelTanksEvent_MutateFreezeStateScheduled | FuelTanksEvent_FreezeStateMutated | FuelTanksEvent_ScheduleMutateFreezeStateFailed | FuelTanksEvent_DispatchFailed

/**
 * A new `FuelTank` was created.
 */
export interface FuelTanksEvent_FuelTankCreated {
    __kind: 'FuelTankCreated'
    /**
     * The `AccountId` that owns the `FuelTank`
     */
    owner: Uint8Array
    /**
     * The name of the `FuelTank`
     */
    name: Uint8Array
    /**
     * The account id of the `FuelTank`
     */
    tankId: Uint8Array
}

/**
 * A `FuelTank` was mutated
 */
export interface FuelTanksEvent_FuelTankMutated {
    __kind: 'FuelTankMutated'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The mutation that was applied
     */
    mutation: DefaultTankMutation
}

/**
 * A `FuelTank` was destroyed
 */
export interface FuelTanksEvent_FuelTankDestroyed {
    __kind: 'FuelTankDestroyed'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
}

/**
 * A call was dispatched through a `FuelTank`.
 */
export interface FuelTanksEvent_CallDispatched {
    __kind: 'CallDispatched'
    /**
     * The `AccountId` that dispatched the call
     */
    caller: Uint8Array
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
}

/**
 * An account was added to a `FuelTank`
 */
export interface FuelTanksEvent_AccountAdded {
    __kind: 'AccountAdded'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The `AccountId` that was added
     */
    userId: Uint8Array
    /**
     * The deposit reserved by the `FuelTank` for this account
     */
    tankDeposit: bigint
    /**
     * The deposit reserved by the user for this account
     */
    userDeposit: bigint
}

/**
 * An account was removed from a `FuelTank`
 */
export interface FuelTanksEvent_AccountRemoved {
    __kind: 'AccountRemoved'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The `AccountId` that was removed
     */
    userId: Uint8Array
}

/**
 * Account data of `AccountId` was removed from `RuleSetId`
 */
export interface FuelTanksEvent_AccountRuleDataRemoved {
    __kind: 'AccountRuleDataRemoved'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The `AccountId` that was removed
     */
    userId: Uint8Array
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
    /**
     * The `DispatchRuleKind` that was removed
     */
    ruleKind: DispatchRuleKind
}

/**
 * A new rule set was added to `FuelTank`
 */
export interface FuelTanksEvent_RuleSetInserted {
    __kind: 'RuleSetInserted'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The id of the rule set that was added
     */
    ruleSetId: number
}

/**
 * A rule set was removed from `FuelTank`
 */
export interface FuelTanksEvent_RuleSetRemoved {
    __kind: 'RuleSetRemoved'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The id of the rule set that was removed
     */
    ruleSetId: number
}

/**
 * The freeze state mutation for fuel tank or its rule set was scheduled
 */
export interface FuelTanksEvent_MutateFreezeStateScheduled {
    __kind: 'MutateFreezeStateScheduled'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The possible `RuleSetId`
     */
    ruleSetId: (number | undefined)
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
}

/**
 * The freeze state change for fuel tank or its rule set was executed in `on_finalize`
 */
export interface FuelTanksEvent_FreezeStateMutated {
    __kind: 'FreezeStateMutated'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The possible `RuleSetId`
     */
    ruleSetId: (number | undefined)
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
}

/**
 * The freeze state change for fuel tank or its rule set failed in `on_finalize`
 */
export interface FuelTanksEvent_ScheduleMutateFreezeStateFailed {
    __kind: 'ScheduleMutateFreezeStateFailed'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The possible `RuleSetId`
     */
    ruleSetId: (number | undefined)
    /**
     * The new `is_frozen` state
     */
    isFrozen: boolean
    /**
     * The error
     */
    error: DispatchError
}

/**
 * The dispatch of a call has failed
 */
export interface FuelTanksEvent_DispatchFailed {
    __kind: 'DispatchFailed'
    /**
     * The `AccountId` of the `FuelTank`
     */
    tankId: Uint8Array
    /**
     * The `AccountId` that dispatched the call
     */
    caller: Uint8Array
    /**
     * The error
     */
    error: DispatchError
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
 * 
			The [event](https://docs.substrate.io/main-docs/build/events-errors/) emitted
			by this pallet.
			
 */
export type EfinityUtilityEvent = EfinityUtilityEvent_BatchDispatched | EfinityUtilityEvent_BatchPartiallyDispatched | EfinityUtilityEvent_BatchFailed

/**
 * Batch of calls dispatched without errors.
 */
export interface EfinityUtilityEvent_BatchDispatched {
    __kind: 'BatchDispatched'
}

/**
 * Batch of calls dispatched, but some calls resulted in error.
 * Indexes and errors of failing dispatch calls are provided.
 */
export interface EfinityUtilityEvent_BatchPartiallyDispatched {
    __kind: 'BatchPartiallyDispatched'
    value: [number, DispatchError][]
}

/**
 * Batch of calls did not disptach completely.
 * Index and error of the failing dispatch call is provided.
 */
export interface EfinityUtilityEvent_BatchFailed {
    __kind: 'BatchFailed'
    index: number
    error: DispatchError
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}

export interface V2PersistedValidationData {
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

export interface Digest {
    logs: DigestItem[]
}

export type V0Xcm = V0Xcm_WithdrawAsset | V0Xcm_ReserveAssetDeposit | V0Xcm_TeleportAsset | V0Xcm_QueryResponse | V0Xcm_TransferAsset | V0Xcm_TransferReserveAsset | V0Xcm_Transact | V0Xcm_HrmpNewChannelOpenRequest | V0Xcm_HrmpChannelAccepted | V0Xcm_HrmpChannelClosing | V0Xcm_RelayedFrom

export interface V0Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_ReserveAssetDeposit {
    __kind: 'ReserveAssetDeposit'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_TeleportAsset {
    __kind: 'TeleportAsset'
    assets: V0MultiAsset[]
    effects: V0Order[]
}

export interface V0Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V0Response
}

export interface V0Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
}

export interface V0Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V0MultiAsset[]
    dest: V0MultiLocation
    effects: V0Order[]
}

export interface V0Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V0Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V0Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V0Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V0Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V0MultiLocation
    message: V0Xcm
}

export type V1Xcm = V1Xcm_WithdrawAsset | V1Xcm_ReserveAssetDeposited | V1Xcm_ReceiveTeleportedAsset | V1Xcm_QueryResponse | V1Xcm_TransferAsset | V1Xcm_TransferReserveAsset | V1Xcm_Transact | V1Xcm_HrmpNewChannelOpenRequest | V1Xcm_HrmpChannelAccepted | V1Xcm_HrmpChannelClosing | V1Xcm_RelayedFrom | V1Xcm_SubscribeVersion | V1Xcm_UnsubscribeVersion

export interface V1Xcm_WithdrawAsset {
    __kind: 'WithdrawAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReserveAssetDeposited {
    __kind: 'ReserveAssetDeposited'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_ReceiveTeleportedAsset {
    __kind: 'ReceiveTeleportedAsset'
    assets: V1MultiAsset[]
    effects: V1Order[]
}

export interface V1Xcm_QueryResponse {
    __kind: 'QueryResponse'
    queryId: bigint
    response: V1Response
}

export interface V1Xcm_TransferAsset {
    __kind: 'TransferAsset'
    assets: V1MultiAsset[]
    beneficiary: V1MultiLocation
}

export interface V1Xcm_TransferReserveAsset {
    __kind: 'TransferReserveAsset'
    assets: V1MultiAsset[]
    dest: V1MultiLocation
    effects: V1Order[]
}

export interface V1Xcm_Transact {
    __kind: 'Transact'
    originType: V0OriginKind
    requireWeightAtMost: bigint
    call: DoubleEncoded
}

export interface V1Xcm_HrmpNewChannelOpenRequest {
    __kind: 'HrmpNewChannelOpenRequest'
    sender: number
    maxMessageSize: number
    maxCapacity: number
}

export interface V1Xcm_HrmpChannelAccepted {
    __kind: 'HrmpChannelAccepted'
    recipient: number
}

export interface V1Xcm_HrmpChannelClosing {
    __kind: 'HrmpChannelClosing'
    initiator: number
    sender: number
    recipient: number
}

export interface V1Xcm_RelayedFrom {
    __kind: 'RelayedFrom'
    who: V1Junctions
    message: V1Xcm
}

export interface V1Xcm_SubscribeVersion {
    __kind: 'SubscribeVersion'
    queryId: bigint
    maxResponseWeight: bigint
}

export interface V1Xcm_UnsubscribeVersion {
    __kind: 'UnsubscribeVersion'
}

export type FreezeType = FreezeType_Collection | FreezeType_Token | FreezeType_CollectionAccount | FreezeType_TokenAccount

export interface FreezeType_Collection {
    __kind: 'Collection'
}

export interface FreezeType_Token {
    __kind: 'Token'
    value: bigint
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

export interface Approval {
    amount: bigint
    expiration: (number | undefined)
}

export interface Pool {
    feeShare: number
}

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
    __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
    __kind: 'AllOf'
    id: V1AssetId
    fun: V1WildFungibility
}

export interface UserFuelBudgetRule {
    budget: Budget
    userCount: number
}

export interface ExtrinsicInfo {
    palletName: Uint8Array
    extrinsicName: Uint8Array
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
    __kind: 'Free'
}

export interface BalanceStatus_Reserved {
    __kind: 'Reserved'
}

export type V2Outcome = V2Outcome_Complete | V2Outcome_Incomplete | V2Outcome_Error

export interface V2Outcome_Complete {
    __kind: 'Complete'
    value: bigint
}

export interface V2Outcome_Incomplete {
    __kind: 'Incomplete'
    value: [bigint, V2Error]
}

export interface V2Outcome_Error {
    __kind: 'Error'
    value: V2Error
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

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
    __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
    __kind: 'NonFungible'
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

export interface AuctionState {
    highBid: (Bid | undefined)
}