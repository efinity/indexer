import type {Result} from './support'

export type H160 = Uint8Array

export type AccountId32 = Uint8Array

export interface RecipientWithAsset {
  to: AccountId32
  value: TypedBalanceWithChunk
  asset: UUAID
}

export type UUAID = bigint

export interface Recipient {
  to: AccountId32
  value: TypedBalanceWithChunk
}

export interface RecipientsByChunk {
  index: number
  recipients: [AccountId32, Chunk][]
}

export interface Range {
  start: number
  end: number
}

export type Chunk = Range[]

export interface AssetPolicy {
  mint: MintPolicy
  teleporation: TeleporationPolicy
  fungibility: FungibilityPolicy
}

export type MultiAddress = MultiAddress_Id | MultiAddress_Index | MultiAddress_Raw | MultiAddress_Address32 | MultiAddress_Address20

export interface MultiAddress_Id {
  __kind: 'Id'
  value: AccountId32
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

export type Expiration = Expiration_Never | Expiration_At

export interface Expiration_Never {
  __kind: 'Never'
}

export interface Expiration_At {
  __kind: 'At'
  value: number
}

export type VersionedXcm_178 = VersionedXcm_178_V0 | VersionedXcm_178_V1 | VersionedXcm_178_V2

export interface VersionedXcm_178_V0 {
  __kind: 'V0'
  value: V0Xcm_179
}

export interface VersionedXcm_178_V1 {
  __kind: 'V1'
  value: V1Xcm_184
}

export interface VersionedXcm_178_V2 {
  __kind: 'V2'
  value: V2Instruction_190[]
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

export type VersionedXcm_167 = VersionedXcm_167_V0 | VersionedXcm_167_V1 | VersionedXcm_167_V2

export interface VersionedXcm_167_V0 {
  __kind: 'V0'
  value: V0Xcm_168
}

export interface VersionedXcm_167_V1 {
  __kind: 'V1'
  value: V1Xcm_173
}

export interface VersionedXcm_167_V2 {
  __kind: 'V2'
  value: V2Instruction_54[]
}

export type Call = Call_System | Call_ParachainSystem | Call_Timestamp | Call_Sudo | Call_Balances | Call_CollatorStaking | Call_Pools | Call_XcmpQueue | Call_PolkadotXcm | Call_CumulusXcm | Call_DmpQueue | Call_MultiAssets | Call_MultiAssetsOperatorExt | Call_Tags | Call_Claims

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

export interface Call_Balances {
  __kind: 'Balances'
  value: BalancesCall
}

export interface Call_CollatorStaking {
  __kind: 'CollatorStaking'
  value: CollatorStakingCall
}

export interface Call_Pools {
  __kind: 'Pools'
  value: PoolsCall
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

export interface Call_MultiAssets {
  __kind: 'MultiAssets'
  value: MultiAssetsCall
}

export interface Call_MultiAssetsOperatorExt {
  __kind: 'MultiAssetsOperatorExt'
  value: MultiAssetsOperatorExtCall
}

export interface Call_Tags {
  __kind: 'Tags'
  value: TagsCall
}

export interface Call_Claims {
  __kind: 'Claims'
  value: ClaimsCall
}

export interface ChangesTrieConfiguration {
  digestInterval: number
  digestLevels: number
}

export interface EventRecord {
  phase: Phase
  event: Event
  topics: H256[]
}

export type TypedBalanceWithChunk = TypedBalanceWithChunk_Fungible | TypedBalanceWithChunk_NonFungible

export interface TypedBalanceWithChunk_Fungible {
  __kind: 'Fungible'
  value: bigint
}

export interface TypedBalanceWithChunk_NonFungible {
  __kind: 'NonFungible'
  value: Chunk
}

export interface MintPolicy {
  issuer: AccountId32
  maxTokenAllowance: (bigint | undefined)
  maxMintOperations: (bigint | undefined)
}

export type TeleporationPolicy = TeleporationPolicy_NotAllowed | TeleporationPolicy_Drain | TeleporationPolicy_ADeedOf

export interface TeleporationPolicy_NotAllowed {
  __kind: 'NotAllowed'
}

export interface TeleporationPolicy_Drain {
  __kind: 'Drain'
}

export interface TeleporationPolicy_ADeedOf {
  __kind: 'ADeedOf'
}

export type FungibilityPolicy = FungibilityPolicy_Fungible | FungibilityPolicy_NonFungible

export interface FungibilityPolicy_Fungible {
  __kind: 'Fungible'
}

export interface FungibilityPolicy_NonFungible {
  __kind: 'NonFungible'
}

export type V0Xcm_179 = V0Xcm_179_WithdrawAsset | V0Xcm_179_ReserveAssetDeposit | V0Xcm_179_TeleportAsset | V0Xcm_179_QueryResponse | V0Xcm_179_TransferAsset | V0Xcm_179_TransferReserveAsset | V0Xcm_179_Transact | V0Xcm_179_HrmpNewChannelOpenRequest | V0Xcm_179_HrmpChannelAccepted | V0Xcm_179_HrmpChannelClosing | V0Xcm_179_RelayedFrom

export interface V0Xcm_179_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_181[]
}

export interface V0Xcm_179_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_181[]
}

export interface V0Xcm_179_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_181[]
}

export interface V0Xcm_179_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_179_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_179_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Xcm_179_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_179_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_179_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_179_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_179_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_179
}

export type V1Xcm_184 = V1Xcm_184_WithdrawAsset | V1Xcm_184_ReserveAssetDeposited | V1Xcm_184_ReceiveTeleportedAsset | V1Xcm_184_QueryResponse | V1Xcm_184_TransferAsset | V1Xcm_184_TransferReserveAsset | V1Xcm_184_Transact | V1Xcm_184_HrmpNewChannelOpenRequest | V1Xcm_184_HrmpChannelAccepted | V1Xcm_184_HrmpChannelClosing | V1Xcm_184_RelayedFrom | V1Xcm_184_SubscribeVersion | V1Xcm_184_UnsubscribeVersion

export interface V1Xcm_184_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_186[]
}

export interface V1Xcm_184_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_186[]
}

export interface V1Xcm_184_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_186[]
}

export interface V1Xcm_184_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_184_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_184_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Xcm_184_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_184_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_184_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_184_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_184_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_184
}

export interface V1Xcm_184_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_184_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_190 = V2Instruction_190_WithdrawAsset | V2Instruction_190_ReserveAssetDeposited | V2Instruction_190_ReceiveTeleportedAsset | V2Instruction_190_QueryResponse | V2Instruction_190_TransferAsset | V2Instruction_190_TransferReserveAsset | V2Instruction_190_Transact | V2Instruction_190_HrmpNewChannelOpenRequest | V2Instruction_190_HrmpChannelAccepted | V2Instruction_190_HrmpChannelClosing | V2Instruction_190_ClearOrigin | V2Instruction_190_DescendOrigin | V2Instruction_190_ReportError | V2Instruction_190_DepositAsset | V2Instruction_190_DepositReserveAsset | V2Instruction_190_ExchangeAsset | V2Instruction_190_InitiateReserveWithdraw | V2Instruction_190_InitiateTeleport | V2Instruction_190_QueryHolding | V2Instruction_190_BuyExecution | V2Instruction_190_RefundSurplus | V2Instruction_190_SetErrorHandler | V2Instruction_190_SetAppendix | V2Instruction_190_ClearError | V2Instruction_190_ClaimAsset | V2Instruction_190_Trap | V2Instruction_190_SubscribeVersion | V2Instruction_190_UnsubscribeVersion

export interface V2Instruction_190_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_190_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_190_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_190_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_190_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_190_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_190_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_190_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_190_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_190_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_190_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_190_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_190_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_190_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_190_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_190_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_190_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_190_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_190_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_190_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_190_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_190_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_190[]
}

export interface V2Instruction_190_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_190[]
}

export interface V2Instruction_190_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_190_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_190_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_190_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_190_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

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

export interface V1MultiLocation {
  parents: number
  interior: V1Junctions
}

export type V0Xcm_168 = V0Xcm_168_WithdrawAsset | V0Xcm_168_ReserveAssetDeposit | V0Xcm_168_TeleportAsset | V0Xcm_168_QueryResponse | V0Xcm_168_TransferAsset | V0Xcm_168_TransferReserveAsset | V0Xcm_168_Transact | V0Xcm_168_HrmpNewChannelOpenRequest | V0Xcm_168_HrmpChannelAccepted | V0Xcm_168_HrmpChannelClosing | V0Xcm_168_RelayedFrom

export interface V0Xcm_168_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V0MultiAsset[]
  effects: V0Order_170[]
}

export interface V0Xcm_168_ReserveAssetDeposit {
  __kind: 'ReserveAssetDeposit'
  assets: V0MultiAsset[]
  effects: V0Order_170[]
}

export interface V0Xcm_168_TeleportAsset {
  __kind: 'TeleportAsset'
  assets: V0MultiAsset[]
  effects: V0Order_170[]
}

export interface V0Xcm_168_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V0Response
}

export interface V0Xcm_168_TransferAsset {
  __kind: 'TransferAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Xcm_168_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Xcm_168_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V0Xcm_168_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V0Xcm_168_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V0Xcm_168_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V0Xcm_168_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V0MultiLocation
  message: V0Xcm_168
}

export type V1Xcm_173 = V1Xcm_173_WithdrawAsset | V1Xcm_173_ReserveAssetDeposited | V1Xcm_173_ReceiveTeleportedAsset | V1Xcm_173_QueryResponse | V1Xcm_173_TransferAsset | V1Xcm_173_TransferReserveAsset | V1Xcm_173_Transact | V1Xcm_173_HrmpNewChannelOpenRequest | V1Xcm_173_HrmpChannelAccepted | V1Xcm_173_HrmpChannelClosing | V1Xcm_173_RelayedFrom | V1Xcm_173_SubscribeVersion | V1Xcm_173_UnsubscribeVersion

export interface V1Xcm_173_WithdrawAsset {
  __kind: 'WithdrawAsset'
  assets: V1MultiAssets
  effects: V1Order_175[]
}

export interface V1Xcm_173_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  assets: V1MultiAssets
  effects: V1Order_175[]
}

export interface V1Xcm_173_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  assets: V1MultiAssets
  effects: V1Order_175[]
}

export interface V1Xcm_173_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V1Response
}

export interface V1Xcm_173_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V1Xcm_173_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Xcm_173_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V1Xcm_173_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V1Xcm_173_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V1Xcm_173_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V1Xcm_173_RelayedFrom {
  __kind: 'RelayedFrom'
  who: V1Junctions
  message: V1Xcm_173
}

export interface V1Xcm_173_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V1Xcm_173_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

export type V2Instruction_54 = V2Instruction_54_WithdrawAsset | V2Instruction_54_ReserveAssetDeposited | V2Instruction_54_ReceiveTeleportedAsset | V2Instruction_54_QueryResponse | V2Instruction_54_TransferAsset | V2Instruction_54_TransferReserveAsset | V2Instruction_54_Transact | V2Instruction_54_HrmpNewChannelOpenRequest | V2Instruction_54_HrmpChannelAccepted | V2Instruction_54_HrmpChannelClosing | V2Instruction_54_ClearOrigin | V2Instruction_54_DescendOrigin | V2Instruction_54_ReportError | V2Instruction_54_DepositAsset | V2Instruction_54_DepositReserveAsset | V2Instruction_54_ExchangeAsset | V2Instruction_54_InitiateReserveWithdraw | V2Instruction_54_InitiateTeleport | V2Instruction_54_QueryHolding | V2Instruction_54_BuyExecution | V2Instruction_54_RefundSurplus | V2Instruction_54_SetErrorHandler | V2Instruction_54_SetAppendix | V2Instruction_54_ClearError | V2Instruction_54_ClaimAsset | V2Instruction_54_Trap | V2Instruction_54_SubscribeVersion | V2Instruction_54_UnsubscribeVersion

export interface V2Instruction_54_WithdrawAsset {
  __kind: 'WithdrawAsset'
  value: V1MultiAssets
}

export interface V2Instruction_54_ReserveAssetDeposited {
  __kind: 'ReserveAssetDeposited'
  value: V1MultiAssets
}

export interface V2Instruction_54_ReceiveTeleportedAsset {
  __kind: 'ReceiveTeleportedAsset'
  value: V1MultiAssets
}

export interface V2Instruction_54_QueryResponse {
  __kind: 'QueryResponse'
  queryId: bigint
  response: V2Response
  maxWeight: bigint
}

export interface V2Instruction_54_TransferAsset {
  __kind: 'TransferAsset'
  assets: V1MultiAssets
  beneficiary: V1MultiLocation
}

export interface V2Instruction_54_TransferReserveAsset {
  __kind: 'TransferReserveAsset'
  assets: V1MultiAssets
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_Transact {
  __kind: 'Transact'
  originType: V0OriginKind
  requireWeightAtMost: bigint
  call: DoubleEncoded
}

export interface V2Instruction_54_HrmpNewChannelOpenRequest {
  __kind: 'HrmpNewChannelOpenRequest'
  sender: number
  maxMessageSize: number
  maxCapacity: number
}

export interface V2Instruction_54_HrmpChannelAccepted {
  __kind: 'HrmpChannelAccepted'
  recipient: number
}

export interface V2Instruction_54_HrmpChannelClosing {
  __kind: 'HrmpChannelClosing'
  initiator: number
  sender: number
  recipient: number
}

export interface V2Instruction_54_ClearOrigin {
  __kind: 'ClearOrigin'
}

export interface V2Instruction_54_DescendOrigin {
  __kind: 'DescendOrigin'
  value: V1Junctions
}

export interface V2Instruction_54_ReportError {
  __kind: 'ReportError'
  queryId: bigint
  dest: V1MultiLocation
  maxResponseWeight: bigint
}

export interface V2Instruction_54_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V2Instruction_54_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V2Instruction_54_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  xcm: V2Instruction_54[]
}

export interface V2Instruction_54_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
  maxResponseWeight: bigint
}

export interface V2Instruction_54_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weightLimit: V2WeightLimit
}

export interface V2Instruction_54_RefundSurplus {
  __kind: 'RefundSurplus'
}

export interface V2Instruction_54_SetErrorHandler {
  __kind: 'SetErrorHandler'
  value: V2Instruction_54[]
}

export interface V2Instruction_54_SetAppendix {
  __kind: 'SetAppendix'
  value: V2Instruction_54[]
}

export interface V2Instruction_54_ClearError {
  __kind: 'ClearError'
}

export interface V2Instruction_54_ClaimAsset {
  __kind: 'ClaimAsset'
  assets: V1MultiAssets
  ticket: V1MultiLocation
}

export interface V2Instruction_54_Trap {
  __kind: 'Trap'
  value: bigint
}

export interface V2Instruction_54_SubscribeVersion {
  __kind: 'SubscribeVersion'
  queryId: bigint
  maxResponseWeight: bigint
}

export interface V2Instruction_54_UnsubscribeVersion {
  __kind: 'UnsubscribeVersion'
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type SystemCall = SystemCall_fill_block | SystemCall_remark | SystemCall_set_heap_pages | SystemCall_set_code | SystemCall_set_code_without_checks | SystemCall_set_changes_trie_config | SystemCall_set_storage | SystemCall_kill_storage | SystemCall_kill_prefix | SystemCall_remark_with_event

/**
 * A dispatch that will fill the block weight up to the given ratio.
 */
export interface SystemCall_fill_block {
  __kind: 'fill_block'
  ratio: Perbill
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
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write.
 * - Base Weight: 1.405 µs
 * - 1 write to HEAP_PAGES
 * - 1 digest item
 * # </weight>
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
 * Set the new changes trie configuration.
 * 
 * # <weight>
 * - `O(1)`
 * - 1 storage write or delete (codec `O(1)`).
 * - 1 call to `deposit_log`: Uses `append` API, so O(1)
 * - Base Weight: 7.218 µs
 * - DB Weight:
 *     - Writes: Changes Trie, System Digest
 * # </weight>
 */
export interface SystemCall_set_changes_trie_config {
  __kind: 'set_changes_trie_config'
  changesTrieConfig: (ChangesTrieConfiguration | undefined)
}

/**
 * Set some items of storage.
 * 
 * # <weight>
 * - `O(I)` where `I` length of `items`
 * - `I` storage writes (`O(1)`).
 * - Base Weight: 0.568 * i µs
 * - Writes: Number of items
 * # </weight>
 */
export interface SystemCall_set_storage {
  __kind: 'set_storage'
  items: [Uint8Array, Uint8Array][]
}

/**
 * Kill some items from storage.
 * 
 * # <weight>
 * - `O(IK)` where `I` length of `keys` and `K` length of one key
 * - `I` storage deletions.
 * - Base Weight: .378 * i µs
 * - Writes: Number of items
 * # </weight>
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
 * 
 * # <weight>
 * - `O(P)` where `P` amount of keys with prefix `prefix`
 * - `P` storage deletions.
 * - Base Weight: 0.834 * P µs
 * - Writes: Number of subkeys + 1
 * # </weight>
 */
export interface SystemCall_kill_prefix {
  __kind: 'kill_prefix'
  prefix: Uint8Array
  subkeys: number
}

/**
 * Make some on-chain remark and emit event.
 * 
 * # <weight>
 * - `O(b)` where b is the length of the remark.
 * - 1 event.
 * # </weight>
 */
export interface SystemCall_remark_with_event {
  __kind: 'remark_with_event'
  remark: Uint8Array
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type ParachainSystemCall = ParachainSystemCall_set_upgrade_block | ParachainSystemCall_set_validation_data | ParachainSystemCall_sudo_send_upward_message | ParachainSystemCall_authorize_upgrade | ParachainSystemCall_enact_authorized_upgrade

/**
 * Force an already scheduled validation function upgrade to happen on a particular block.
 * 
 * Note that coordinating this block for the upgrade has to happen independently on the
 * relay chain and this parachain. Synchronizing the block for the upgrade is sensitive,
 * and this bypasses all checks and and normal protocols. Very easy to brick your chain
 * if done wrong.
 */
export interface ParachainSystemCall_set_upgrade_block {
  __kind: 'set_upgrade_block'
  relayChainBlock: number
}

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
  codeHash: H256
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
  weight: bigint
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
export type BalancesCall = BalancesCall_transfer | BalancesCall_set_balance | BalancesCall_force_transfer | BalancesCall_transfer_keep_alive | BalancesCall_transfer_all | BalancesCall_force_unreserve

/**
 * Transfer some liquid free balance to another account.
 * 
 * `transfer` will set the `FreeBalance` of the sender and receiver.
 * It will decrease the total issuance of the system by the `TransferFee`.
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
 * - Base Weight: 73.64 µs, worst case scenario (account created, account removed)
 * - DB Weight: 1 Read and 1 Write to destination account
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
 * also decrease the total issuance of the system (`TotalIssuance`).
 * If the new free or reserved balance is below the existential deposit,
 * it will reset the account nonce (`frame_system::AccountNonce`).
 * 
 * The dispatch origin for this call is `root`.
 * 
 * # <weight>
 * - Independent of the arguments.
 * - Contains a limited number of reads and writes.
 * ---------------------
 * - Base Weight:
 *     - Creating: 27.56 µs
 *     - Killing: 35.11 µs
 * - DB Weight: 1 Read, 1 Write to `who`
 * # </weight>
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
 * # <weight>
 * - Cheaper than transfer because account cannot be killed.
 * - Base Weight: 51.4 µs
 * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
 * #</weight>
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
export type CollatorStakingCall = CollatorStakingCall_join_candidates | CollatorStakingCall_unbond | CollatorStakingCall_nominate | CollatorStakingCall_remove_nomination | CollatorStakingCall_set_block_producer

/**
 * Join the list of candidates for collation.
 */
export interface CollatorStakingCall_join_candidates {
  __kind: 'join_candidates'
  amount: bigint
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
  collatorId: AccountId32
  amount: bigint
}

/**
 * Remove a nomination previously registered for a specific collator candidate.
 */
export interface CollatorStakingCall_remove_nomination {
  __kind: 'remove_nomination'
  collatorId: AccountId32
}

export interface CollatorStakingCall_set_block_producer {
  __kind: 'set_block_producer'
  producer: AccountId32
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PoolsCall = PoolsCall_create_fuel_tank | PoolsCall_transfer_ownership | PoolsCall_withdraw_from_pool

/**
 * Create a new pool with type of Fuel.
 * 
 * Fuel tanks are allowed to be created by anyone who can allocate
 * funds so that these fuel tanks can be used for their own purposes.
 */
export interface PoolsCall_create_fuel_tank {
  __kind: 'create_fuel_tank'
  fundAccount: MultiAddress
}

/**
 * Transfer ownership of a pool to new account.
 */
export interface PoolsCall_transfer_ownership {
  __kind: 'transfer_ownership'
  poolId: bigint
  newOwner: MultiAddress
}

/**
 * Withdraw funds from pool to the pool owner's account.
 */
export interface PoolsCall_withdraw_from_pool {
  __kind: 'withdraw_from_pool'
  poolId: bigint
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type XcmpQueueCall = never

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type PolkadotXcmCall = PolkadotXcmCall_send | PolkadotXcmCall_teleport_assets | PolkadotXcmCall_reserve_transfer_assets | PolkadotXcmCall_execute | PolkadotXcmCall_force_xcm_version | PolkadotXcmCall_force_default_xcm_version | PolkadotXcmCall_force_subscribe_version_notify | PolkadotXcmCall_force_unsubscribe_version_notify | PolkadotXcmCall_limited_reserve_transfer_assets | PolkadotXcmCall_limited_teleport_assets

export interface PolkadotXcmCall_send {
  __kind: 'send'
  dest: VersionedMultiLocation
  message: VersionedXcm_167
}

/**
 * Teleport some assets from the local chain to some destination chain.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
 */
export interface PolkadotXcmCall_teleport_assets {
  __kind: 'teleport_assets'
  dest: VersionedMultiLocation
  beneficiary: VersionedMultiLocation
  assets: VersionedMultiAssets
  feeAssetItem: number
}

/**
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector and
 * fee-weight is calculated locally and thus remote weights are assumed to be equal to
 * local weights.
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
  message: VersionedXcm_178
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
 * Transfer some assets from the local chain to the sovereign account of a destination chain and forward
 * a notification XCM.
 * 
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
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
 * Fee payment on the destination side is made from the first asset listed in the `assets` vector.
 * 
 * - `origin`: Must be capable of withdrawing the `assets` and executing XCM.
 * - `dest`: Destination context for the assets. Will typically be `X2(Parent, Parachain(..))` to send
 *   from parachain to parachain, or `X1(Parachain(..))` to send from relay to parachain.
 * - `beneficiary`: A beneficiary location for the assets in the context of `dest`. Will generally be
 *   an `AccountId32` value.
 * - `assets`: The assets to be withdrawn. The first item should be the currency used to to pay the fee on the
 *   `dest` side. May not be empty.
 * - `dest_weight`: Equal to the total weight on `dest` of the XCM message
 *   `Teleport { assets, effects: [ BuyExecution{..}, DepositAsset{..} ] }`.
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
export type MultiAssetsCall = MultiAssetsCall_transfer_ownership | MultiAssetsCall_transfer | MultiAssetsCall_transfer_by_chunk | MultiAssetsCall_batch_transfer | MultiAssetsCall_batch_multi_transfer | MultiAssetsCall_batch_transfer_by_chunk | MultiAssetsCall_create_asset | MultiAssetsCall_mint | MultiAssetsCall_burn | MultiAssetsCall_burn_by_chunk | MultiAssetsCall_set_asset_attribute | MultiAssetsCall_clear_asset_attribute | MultiAssetsCall_set_token_attribute | MultiAssetsCall_clear_token_attribute | MultiAssetsCall_burn_asset

/**
 * Transfer the ownership of `asset` from `origin` to `target`.
 * 
 * # TODO
 * - Weight based on number of chunks instead of number or elements of tokens.
 */
export interface MultiAssetsCall_transfer_ownership {
  __kind: 'transfer_ownership'
  target: MultiAddress
  asset: UUAID
}

/**
 * Transfers `amount` of `token` from `asset` from `origin` account to `target` account.
 * See `chunks::do_transfer`.
 */
export interface MultiAssetsCall_transfer {
  __kind: 'transfer'
  target: MultiAddress
  asset: UUAID
  token: number
  amount: bigint
}

/**
 * Transfers the `tokens` of `asset` from `origin` to `target`.
 */
export interface MultiAssetsCall_transfer_by_chunk {
  __kind: 'transfer_by_chunk'
  target: MultiAddress
  asset: UUAID
  tokens: Chunk
}

/**
 * Transfers the specific amount of tokens of given `recipients` of `asset` from
 * `source` account.
 */
export interface MultiAssetsCall_batch_transfer {
  __kind: 'batch_transfer'
  asset: UUAID
  recipients: Recipient[]
}

/**
 * Transfers an amount of tokens for a specific Asset to a given `recipient` from `source` account
 */
export interface MultiAssetsCall_batch_multi_transfer {
  __kind: 'batch_multi_transfer'
  recipients: RecipientWithAsset[]
}

/**
 * # TODO
 * - `recipients_by_chunk` must be bounded.
 */
export interface MultiAssetsCall_batch_transfer_by_chunk {
  __kind: 'batch_transfer_by_chunk'
  asset: UUAID
  recipientsByChunk: RecipientsByChunk[]
}

/**
 * Creates a new asset using the given `fungibility` policy where `origin` will be the
 * owner.
 */
export interface MultiAssetsCall_create_asset {
  __kind: 'create_asset'
  policy: AssetPolicy
}

/**
 * Mints new `amount` of `asset` and transfer to `origin` account.
 */
export interface MultiAssetsCall_mint {
  __kind: 'mint'
  asset: UUAID
  amount: bigint
}

/**
 * Destroys a given `amount` of `token` belonged to `asset`.
 * 
 * See `Pallet::do_burn_by_chunk`.
 */
export interface MultiAssetsCall_burn {
  __kind: 'burn'
  asset: UUAID
  token: number
  amount: bigint
}

/**
 * Optimized `burn` by chunks.
 * 
 * See `Pallet::do_burn_by_chunk`.
 */
export interface MultiAssetsCall_burn_by_chunk {
  __kind: 'burn_by_chunk'
  asset: UUAID
  tokens: Chunk
}

/**
 * Updates the asset attribute `key` to `value` for the given `asset`.
 * 
 * See `Pallet::do_set_asset_attribute`.
 */
export interface MultiAssetsCall_set_asset_attribute {
  __kind: 'set_asset_attribute'
  asset: UUAID
  key: Uint8Array
  value: Uint8Array
}

/**
 * Removes the `key` attribute from the given `asset`.
 * 
 * See `Pallet::do_set_asset_attribute`.
 */
export interface MultiAssetsCall_clear_asset_attribute {
  __kind: 'clear_asset_attribute'
  asset: UUAID
  key: Uint8Array
}

/**
 * Updates attribute `key` of the `token` of `asset` using the given `value`.
 * 
 * See `Pallet::do_set_token_attribute`.
 */
export interface MultiAssetsCall_set_token_attribute {
  __kind: 'set_token_attribute'
  asset: UUAID
  token: number
  key: Uint8Array
  value: Uint8Array
}

/**
 * Removes attribute `key` of the `token` of `asset`.
 * 
 * See `Pallet::do_set_token_attribute`.
 */
export interface MultiAssetsCall_clear_token_attribute {
  __kind: 'clear_token_attribute'
  asset: UUAID
  token: number
  key: Uint8Array
}

/**
 * Removes the given `asset`.
 * 
 * See `Pallet::do_burn_asset`.
 */
export interface MultiAssetsCall_burn_asset {
  __kind: 'burn_asset'
  asset: UUAID
  assetAttributeCount: number
  nextTokenId: number
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type MultiAssetsOperatorExtCall = MultiAssetsOperatorExtCall_approve_for_all | MultiAssetsOperatorExtCall_unapprove_for_all | MultiAssetsOperatorExtCall_approve_asset | MultiAssetsOperatorExtCall_unapprove_asset | MultiAssetsOperatorExtCall_approve_token | MultiAssetsOperatorExtCall_unapprove_token | MultiAssetsOperatorExtCall_transfer_from

/**
 * Approve `operator` to manage all the `origin`'s assets.
 */
export interface MultiAssetsOperatorExtCall_approve_for_all {
  __kind: 'approve_for_all'
  operator: AccountId32
  expiration: Expiration
}

/**
 * Unapprove `operator` to manage `origin's` assets
 */
export interface MultiAssetsOperatorExtCall_unapprove_for_all {
  __kind: 'unapprove_for_all'
  operator: AccountId32
}

/**
 * Approve the `operator` to manage all of `origin`'s tokens belonging to `asset`
 */
export interface MultiAssetsOperatorExtCall_approve_asset {
  __kind: 'approve_asset'
  operator: AccountId32
  asset: UUAID
  expiration: Expiration
}

/**
 * Unapprove the `operator` to manage all of `origin`'s tokens belonging to `asset`
 */
export interface MultiAssetsOperatorExtCall_unapprove_asset {
  __kind: 'unapprove_asset'
  operator: AccountId32
  asset: UUAID
}

/**
 * Approve the `operator` to transfer up to `amount` of `origin`'s `token`s
 */
export interface MultiAssetsOperatorExtCall_approve_token {
  __kind: 'approve_token'
  operator: AccountId32
  asset: UUAID
  token: number
  amount: bigint
  expiration: Expiration
}

/**
 * Unapprove `operator` to transfer `origin`'s `token`s
 */
export interface MultiAssetsOperatorExtCall_unapprove_token {
  __kind: 'unapprove_token'
  operator: AccountId32
  asset: UUAID
  token: number
}

/**
 * Transfers `amount` of `tokens` from account `from` to address `to` if `origin` has enough allowance
 */
export interface MultiAssetsOperatorExtCall_transfer_from {
  __kind: 'transfer_from'
  from: AccountId32
  to: AccountId32
  asset: UUAID
  token: number
  amount: bigint
}

/**
 * Contains one variant per dispatchable that can be called by an extrinsic.
 */
export type TagsCall = TagsCall_create_tag | TagsCall_tag_asset | TagsCall_untag_asset

/**
 * Create a tag
 */
export interface TagsCall_create_tag {
  __kind: 'create_tag'
}

/**
 * Adds `tag_id` to `asset_id`. `origin` must own the asset and tag.
 */
export interface TagsCall_tag_asset {
  __kind: 'tag_asset'
  assetId: UUAID
  tagId: bigint
}

/**
 * Removes `tag_id` from `asset_id`. `origin` must own the asset and tag.
 */
export interface TagsCall_untag_asset {
  __kind: 'untag_asset'
  assetId: UUAID
  tagId: bigint
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
 * - `ethereum_signature`: The signature of an ethereum signed message
 *    matching the format described above.
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
  dest: AccountId32
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
  who: H160
  value: bigint
}

export interface ClaimsCall_move_claim {
  __kind: 'move_claim'
  old: H160
  new: H160
  maybePreclaim: (AccountId32 | undefined)
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

export type Event = Event_System | Event_ParachainSystem | Event_Sudo | Event_Balances | Event_CollatorStaking | Event_Pools | Event_XcmpQueue | Event_PolkadotXcm | Event_CumulusXcm | Event_DmpQueue | Event_MultiAssets | Event_MultiAssetsOperatorExt | Event_Tags | Event_Claims

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

export interface Event_Balances {
  __kind: 'Balances'
  value: BalancesEvent
}

export interface Event_CollatorStaking {
  __kind: 'CollatorStaking'
  value: CollatorStakingEvent
}

export interface Event_Pools {
  __kind: 'Pools'
  value: PoolsEvent
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

export interface Event_MultiAssets {
  __kind: 'MultiAssets'
  value: MultiAssetsEvent
}

export interface Event_MultiAssetsOperatorExt {
  __kind: 'MultiAssetsOperatorExt'
  value: MultiAssetsOperatorExtEvent
}

export interface Event_Tags {
  __kind: 'Tags'
  value: TagsEvent
}

export interface Event_Claims {
  __kind: 'Claims'
  value: ClaimsEvent
}

export type H256 = Uint8Array

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

export type V0Order_181 = V0Order_181_Null | V0Order_181_DepositAsset | V0Order_181_DepositReserveAsset | V0Order_181_ExchangeAsset | V0Order_181_InitiateReserveWithdraw | V0Order_181_InitiateTeleport | V0Order_181_QueryHolding | V0Order_181_BuyExecution

export interface V0Order_181_Null {
  __kind: 'Null'
}

export interface V0Order_181_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_181_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_181_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_181_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_181_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_181_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_181_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_179[]
}

export type V0Response = V0Response_Assets

export interface V0Response_Assets {
  __kind: 'Assets'
  value: V0MultiAsset[]
}

export type V0Order_170 = V0Order_170_Null | V0Order_170_DepositAsset | V0Order_170_DepositReserveAsset | V0Order_170_ExchangeAsset | V0Order_170_InitiateReserveWithdraw | V0Order_170_InitiateTeleport | V0Order_170_QueryHolding | V0Order_170_BuyExecution

export interface V0Order_170_Null {
  __kind: 'Null'
}

export interface V0Order_170_DepositAsset {
  __kind: 'DepositAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
}

export interface V0Order_170_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_170_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V0MultiAsset[]
  receive: V0MultiAsset[]
}

export interface V0Order_170_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V0MultiAsset[]
  reserve: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_170_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V0MultiAsset[]
  dest: V0MultiLocation
  effects: V0Order_170[]
}

export interface V0Order_170_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V0MultiLocation
  assets: V0MultiAsset[]
}

export interface V0Order_170_BuyExecution {
  __kind: 'BuyExecution'
  fees: V0MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  xcm: V0Xcm_168[]
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

export interface V1MultiAsset {
  id: V1AssetId
  fun: V1Fungibility
}

export type V1MultiAssets = V1MultiAsset[]

export type V1Order_186 = V1Order_186_Noop | V1Order_186_DepositAsset | V1Order_186_DepositReserveAsset | V1Order_186_ExchangeAsset | V1Order_186_InitiateReserveWithdraw | V1Order_186_InitiateTeleport | V1Order_186_QueryHolding | V1Order_186_BuyExecution

export interface V1Order_186_Noop {
  __kind: 'Noop'
}

export interface V1Order_186_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_186_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_186_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_186_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_186_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_186_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_186_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_184[]
}

export type V1Response = V1Response_Assets | V1Response_Version

export interface V1Response_Assets {
  __kind: 'Assets'
  value: V1MultiAssets
}

export interface V1Response_Version {
  __kind: 'Version'
  value: number
}

export type V1Order_175 = V1Order_175_Noop | V1Order_175_DepositAsset | V1Order_175_DepositReserveAsset | V1Order_175_ExchangeAsset | V1Order_175_InitiateReserveWithdraw | V1Order_175_InitiateTeleport | V1Order_175_QueryHolding | V1Order_175_BuyExecution

export interface V1Order_175_Noop {
  __kind: 'Noop'
}

export interface V1Order_175_DepositAsset {
  __kind: 'DepositAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  beneficiary: V1MultiLocation
}

export interface V1Order_175_DepositReserveAsset {
  __kind: 'DepositReserveAsset'
  assets: V1MultiAssetFilter
  maxAssets: number
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_175_ExchangeAsset {
  __kind: 'ExchangeAsset'
  give: V1MultiAssetFilter
  receive: V1MultiAssets
}

export interface V1Order_175_InitiateReserveWithdraw {
  __kind: 'InitiateReserveWithdraw'
  assets: V1MultiAssetFilter
  reserve: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_175_InitiateTeleport {
  __kind: 'InitiateTeleport'
  assets: V1MultiAssetFilter
  dest: V1MultiLocation
  effects: V1Order_175[]
}

export interface V1Order_175_QueryHolding {
  __kind: 'QueryHolding'
  queryId: bigint
  dest: V1MultiLocation
  assets: V1MultiAssetFilter
}

export interface V1Order_175_BuyExecution {
  __kind: 'BuyExecution'
  fees: V1MultiAsset
  weight: bigint
  debt: bigint
  haltOnError: boolean
  instructions: V1Xcm_173[]
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

export type V2Response = V2Response_Null | V2Response_Assets | V2Response_ExecutionResult | V2Response_Version

export interface V2Response_Null {
  __kind: 'Null'
}

export interface V2Response_Assets {
  __kind: 'Assets'
  value: V1MultiAssets
}

export interface V2Response_ExecutionResult {
  __kind: 'ExecutionResult'
  value: ([number, V2Error] | undefined)
}

export interface V2Response_Version {
  __kind: 'Version'
  value: number
}

export type V1MultiAssetFilter = V1MultiAssetFilter_Definite | V1MultiAssetFilter_Wild

export interface V1MultiAssetFilter_Definite {
  __kind: 'Definite'
  value: V1MultiAssets
}

export interface V1MultiAssetFilter_Wild {
  __kind: 'Wild'
  value: V1WildMultiAsset
}

export type V2WeightLimit = V2WeightLimit_Unlimited | V2WeightLimit_Limited

export interface V2WeightLimit_Unlimited {
  __kind: 'Unlimited'
}

export interface V2WeightLimit_Limited {
  __kind: 'Limited'
  value: bigint
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

export type Perbill = number

export interface ParachainInherentData {
  validationData: V1PersistedValidationData
  relayChainState: StorageProof
  downwardMessages: InboundDownwardMessage[]
  horizontalMessages: [Id, InboundHrmpMessage[]][]
}

export type VersionedMultiAssets = VersionedMultiAssets_V0 | VersionedMultiAssets_V1

export interface VersionedMultiAssets_V0 {
  __kind: 'V0'
  value: V0MultiAsset[]
}

export interface VersionedMultiAssets_V1 {
  __kind: 'V1'
  value: V1MultiAssets
}

/**
 * Event for the System pallet.
 */
export type SystemEvent = SystemEvent_ExtrinsicSuccess | SystemEvent_ExtrinsicFailed | SystemEvent_CodeUpdated | SystemEvent_NewAccount | SystemEvent_KilledAccount | SystemEvent_Remarked

/**
 * An extrinsic completed successfully. \[info\]
 */
export interface SystemEvent_ExtrinsicSuccess {
  __kind: 'ExtrinsicSuccess'
  value: DispatchInfo
}

/**
 * An extrinsic failed. \[error, info\]
 */
export interface SystemEvent_ExtrinsicFailed {
  __kind: 'ExtrinsicFailed'
  value: [DispatchError, DispatchInfo]
}

/**
 * `:code` was updated.
 */
export interface SystemEvent_CodeUpdated {
  __kind: 'CodeUpdated'
}

/**
 * A new \[account\] was created.
 */
export interface SystemEvent_NewAccount {
  __kind: 'NewAccount'
  value: AccountId32
}

/**
 * An \[account\] was reaped.
 */
export interface SystemEvent_KilledAccount {
  __kind: 'KilledAccount'
  value: AccountId32
}

/**
 * On on-chain remark happened. \[origin, remark_hash\]
 */
export interface SystemEvent_Remarked {
  __kind: 'Remarked'
  value: [AccountId32, H256]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ParachainSystemEvent = ParachainSystemEvent_ValidationFunctionStored | ParachainSystemEvent_ValidationFunctionApplied | ParachainSystemEvent_UpgradeAuthorized | ParachainSystemEvent_DownwardMessagesReceived | ParachainSystemEvent_DownwardMessagesProcessed

/**
 * The validation function has been scheduled to apply as of the contained relay chain
 * block number.
 */
export interface ParachainSystemEvent_ValidationFunctionStored {
  __kind: 'ValidationFunctionStored'
  value: number
}

/**
 * The validation function was applied as of the contained relay chain block number.
 */
export interface ParachainSystemEvent_ValidationFunctionApplied {
  __kind: 'ValidationFunctionApplied'
  value: number
}

/**
 * An upgrade has been authorized.
 */
export interface ParachainSystemEvent_UpgradeAuthorized {
  __kind: 'UpgradeAuthorized'
  value: H256
}

/**
 * Some downward messages have been received and will be processed.
 * \[ count \]
 */
export interface ParachainSystemEvent_DownwardMessagesReceived {
  __kind: 'DownwardMessagesReceived'
  value: number
}

/**
 * Downward messages were processed using the given weight.
 * \[ weight_used, result_mqc_head \]
 */
export interface ParachainSystemEvent_DownwardMessagesProcessed {
  __kind: 'DownwardMessagesProcessed'
  value: [bigint, H256]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type SudoEvent = SudoEvent_Sudid | SudoEvent_KeyChanged | SudoEvent_SudoAsDone

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_Sudid {
  __kind: 'Sudid'
  value: Result<null, DispatchError>
}

/**
 * The \[sudoer\] just switched identity; the old key is supplied.
 */
export interface SudoEvent_KeyChanged {
  __kind: 'KeyChanged'
  value: AccountId32
}

/**
 * A sudo just took place. \[result\]
 */
export interface SudoEvent_SudoAsDone {
  __kind: 'SudoAsDone'
  value: Result<null, DispatchError>
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type BalancesEvent = BalancesEvent_Endowed | BalancesEvent_DustLost | BalancesEvent_Transfer | BalancesEvent_BalanceSet | BalancesEvent_Deposit | BalancesEvent_Reserved | BalancesEvent_Unreserved | BalancesEvent_ReserveRepatriated

/**
 * An account was created with some free balance. \[account, free_balance\]
 */
export interface BalancesEvent_Endowed {
  __kind: 'Endowed'
  value: [AccountId32, bigint]
}

/**
 * An account was removed whose balance was non-zero but below ExistentialDeposit,
 * resulting in an outright loss. \[account, balance\]
 */
export interface BalancesEvent_DustLost {
  __kind: 'DustLost'
  value: [AccountId32, bigint]
}

/**
 * Transfer succeeded. \[from, to, value\]
 */
export interface BalancesEvent_Transfer {
  __kind: 'Transfer'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * A balance was set by root. \[who, free, reserved\]
 */
export interface BalancesEvent_BalanceSet {
  __kind: 'BalanceSet'
  value: [AccountId32, bigint, bigint]
}

/**
 * Some amount was deposited (e.g. for transaction fees). \[who, deposit\]
 */
export interface BalancesEvent_Deposit {
  __kind: 'Deposit'
  value: [AccountId32, bigint]
}

/**
 * Some balance was reserved (moved from free to reserved). \[who, value\]
 */
export interface BalancesEvent_Reserved {
  __kind: 'Reserved'
  value: [AccountId32, bigint]
}

/**
 * Some balance was unreserved (moved from reserved to free). \[who, value\]
 */
export interface BalancesEvent_Unreserved {
  __kind: 'Unreserved'
  value: [AccountId32, bigint]
}

/**
 * Some balance was moved from the reserve of the first account to the second account.
 * Final argument indicates the destination balance type.
 * \[from, to, balance, destination_status\]
 */
export interface BalancesEvent_ReserveRepatriated {
  __kind: 'ReserveRepatriated'
  value: [AccountId32, AccountId32, bigint, BalanceStatus]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type CollatorStakingEvent = CollatorStakingEvent_RoundFinalized | CollatorStakingEvent_CandidateJoined | CollatorStakingEvent_CandidateRemoved | CollatorStakingEvent_Nominated | CollatorStakingEvent_NominationRemoved | CollatorStakingEvent_CollatorSelected

/**
 * A new round was finalized
 */
export interface CollatorStakingEvent_RoundFinalized {
  __kind: 'RoundFinalized'
  value: number
}

/**
 * A new candidate joined the list of candidates.
 */
export interface CollatorStakingEvent_CandidateJoined {
  __kind: 'CandidateJoined'
  value: [AccountId32, bigint]
}

/**
 * Candidate was removed.
 */
export interface CollatorStakingEvent_CandidateRemoved {
  __kind: 'CandidateRemoved'
  value: AccountId32
}

/**
 * A new nomination was registered for a specific candidate.
 */
export interface CollatorStakingEvent_Nominated {
  __kind: 'Nominated'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * Nomination was removed.
 */
export interface CollatorStakingEvent_NominationRemoved {
  __kind: 'NominationRemoved'
  value: [AccountId32, AccountId32, bigint]
}

/**
 * A candidate has been selected to become a collator for the current round.
 */
export interface CollatorStakingEvent_CollatorSelected {
  __kind: 'CollatorSelected'
  value: AccountId32
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type PoolsEvent = PoolsEvent_PoolCreated | PoolsEvent_PoolOwnershipChanged | PoolsEvent_PoolFundTransferred

/**
 * A pool has been created.
 */
export interface PoolsEvent_PoolCreated {
  __kind: 'PoolCreated'
  value: [bigint, PoolType]
}

/**
 * A new owner has been assigned to an existing pool.
 */
export interface PoolsEvent_PoolOwnershipChanged {
  __kind: 'PoolOwnershipChanged'
  value: [bigint, PoolType, AccountId32, AccountId32]
}

/**
 * Funds have been transferred from pool.
 */
export interface PoolsEvent_PoolFundTransferred {
  __kind: 'PoolFundTransferred'
  value: [bigint, PoolType, AccountId32, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type XcmpQueueEvent = XcmpQueueEvent_Success | XcmpQueueEvent_Fail | XcmpQueueEvent_BadVersion | XcmpQueueEvent_BadFormat | XcmpQueueEvent_UpwardMessageSent | XcmpQueueEvent_XcmpMessageSent

/**
 * Some XCM was executed ok.
 */
export interface XcmpQueueEvent_Success {
  __kind: 'Success'
  value: (H256 | undefined)
}

/**
 * Some XCM failed.
 */
export interface XcmpQueueEvent_Fail {
  __kind: 'Fail'
  value: [(H256 | undefined), V2Error]
}

/**
 * Bad XCM version used.
 */
export interface XcmpQueueEvent_BadVersion {
  __kind: 'BadVersion'
  value: (H256 | undefined)
}

/**
 * Bad XCM format used.
 */
export interface XcmpQueueEvent_BadFormat {
  __kind: 'BadFormat'
  value: (H256 | undefined)
}

/**
 * An upward message was sent to the relay chain.
 */
export interface XcmpQueueEvent_UpwardMessageSent {
  __kind: 'UpwardMessageSent'
  value: (H256 | undefined)
}

/**
 * An HRMP message was sent to a sibling parachain.
 */
export interface XcmpQueueEvent_XcmpMessageSent {
  __kind: 'XcmpMessageSent'
  value: (H256 | undefined)
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type PolkadotXcmEvent = PolkadotXcmEvent_Attempted | PolkadotXcmEvent_Sent | PolkadotXcmEvent_UnexpectedResponse | PolkadotXcmEvent_ResponseReady | PolkadotXcmEvent_Notified | PolkadotXcmEvent_NotifyOverweight | PolkadotXcmEvent_NotifyDispatchError | PolkadotXcmEvent_NotifyDecodeFailed | PolkadotXcmEvent_InvalidResponder | PolkadotXcmEvent_InvalidResponderVersion | PolkadotXcmEvent_ResponseTaken | PolkadotXcmEvent_AssetsTrapped | PolkadotXcmEvent_VersionChangeNotified | PolkadotXcmEvent_SupportedVersionChanged | PolkadotXcmEvent_NotifyTargetSendFail | PolkadotXcmEvent_NotifyTargetMigrationFail

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
  value: [V1MultiLocation, V1MultiLocation, V2Instruction_54[]]
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
  value: [bigint, number, number, bigint, bigint]
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
 * storate by this runtime previously cannot be decoded. The query remains registered.
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
  value: [H256, V1MultiLocation, VersionedMultiAssets]
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
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
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
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type DmpQueueEvent = DmpQueueEvent_InvalidFormat | DmpQueueEvent_UnsupportedVersion | DmpQueueEvent_ExecutedDownward | DmpQueueEvent_WeightExhausted | DmpQueueEvent_OverweightEnqueued | DmpQueueEvent_OverweightServiced

/**
 * Downward message is invalid XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_InvalidFormat {
  __kind: 'InvalidFormat'
  value: Uint8Array
}

/**
 * Downward message is unsupported version of XCM.
 * \[ id \]
 */
export interface DmpQueueEvent_UnsupportedVersion {
  __kind: 'UnsupportedVersion'
  value: Uint8Array
}

/**
 * Downward message executed with the given outcome.
 * \[ id, outcome \]
 */
export interface DmpQueueEvent_ExecutedDownward {
  __kind: 'ExecutedDownward'
  value: [Uint8Array, V2Outcome]
}

/**
 * The weight limit for handling downward messages was reached.
 * \[ id, remaining, required \]
 */
export interface DmpQueueEvent_WeightExhausted {
  __kind: 'WeightExhausted'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message is overweight and was placed in the overweight queue.
 * \[ id, index, required \]
 */
export interface DmpQueueEvent_OverweightEnqueued {
  __kind: 'OverweightEnqueued'
  value: [Uint8Array, bigint, bigint]
}

/**
 * Downward message from the overweight queue was executed.
 * \[ index, used \]
 */
export interface DmpQueueEvent_OverweightServiced {
  __kind: 'OverweightServiced'
  value: [bigint, bigint]
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type MultiAssetsEvent = MultiAssetsEvent_AssetCreated | MultiAssetsEvent_Minted | MultiAssetsEvent_TokensMinted | MultiAssetsEvent_TransferredSingle | MultiAssetsEvent_TransferredSingleChunk | MultiAssetsEvent_TransferredBatch | MultiAssetsEvent_Burned | MultiAssetsEvent_TokensBurned | MultiAssetsEvent_AssetAttributeSet | MultiAssetsEvent_AssetAttributeCleared | MultiAssetsEvent_TokenAttributeSet | MultiAssetsEvent_TokenAttributeCleared | MultiAssetsEvent_OwnershipTransferred

/**
 * A new asset was created by `owner`. \[class_id, owner\]
 */
export interface MultiAssetsEvent_AssetCreated {
  __kind: 'AssetCreated'
  value: [UUAID, AccountId32]
}

/**
 * The balance of the asset was minted by owner. \[owner, asset, amount\]
 */
export interface MultiAssetsEvent_Minted {
  __kind: 'Minted'
  value: [AccountId32, UUAID, bigint]
}

/**
 * New tokens were minted on asset. \[owner, asset, from_token, to_token \]
 */
export interface MultiAssetsEvent_TokensMinted {
  __kind: 'TokensMinted'
  value: [AccountId32, UUAID, number, number]
}

/**
 * The given amount of `token` from `asset` was transferred. \[from, to, asset, token, amount\]
 */
export interface MultiAssetsEvent_TransferredSingle {
  __kind: 'TransferredSingle'
  value: [AccountId32, AccountId32, UUAID, (number | undefined), bigint]
}

/**
 * Tokens from `chunk` of `asset` were transfered from `source` to `destination`.
 * \[source, destination, asset, chunk\]
 */
export interface MultiAssetsEvent_TransferredSingleChunk {
  __kind: 'TransferredSingleChunk'
  value: [AccountId32, AccountId32, UUAID, Chunk]
}

/**
 * The given `recipients` were transfer from `from` account. \[from, asset, recipients\]
 */
export interface MultiAssetsEvent_TransferredBatch {
  __kind: 'TransferredBatch'
  value: [AccountId32, UUAID, Recipient[]]
}

/**
 * An `asset` was destroyed. \[ asset, amount, owner \]
 */
export interface MultiAssetsEvent_Burned {
  __kind: 'Burned'
  value: [AccountId32, UUAID, bigint]
}

/**
 * `tokens` of `asset` from `account` were burned. \[ account, asset, tokens \]
 */
export interface MultiAssetsEvent_TokensBurned {
  __kind: 'TokensBurned'
  value: [AccountId32, UUAID, Chunk]
}

/**
 * New asset attribute has been set for an asset. \[asset_id, key, value\]
 */
export interface MultiAssetsEvent_AssetAttributeSet {
  __kind: 'AssetAttributeSet'
  value: [UUAID, Uint8Array, Uint8Array]
}

/**
 * Asset attribute has been cleared for an asset. \[asset_id, key\]
 */
export interface MultiAssetsEvent_AssetAttributeCleared {
  __kind: 'AssetAttributeCleared'
  value: [UUAID, Uint8Array]
}

/**
 * New token attribute has been set for an asset. \[asset_id, token, key, value\]
 */
export interface MultiAssetsEvent_TokenAttributeSet {
  __kind: 'TokenAttributeSet'
  value: [UUAID, number, Uint8Array, Uint8Array]
}

/**
 * Token attribute has been cleared for an asset. \[asset_id, token, key\]
 */
export interface MultiAssetsEvent_TokenAttributeCleared {
  __kind: 'TokenAttributeCleared'
  value: [UUAID, number, Uint8Array]
}

/**
 * Ownership of the given `asset` was transferred. \[from, to, asset\]
 */
export interface MultiAssetsEvent_OwnershipTransferred {
  __kind: 'OwnershipTransferred'
  value: [AccountId32, AccountId32, UUAID]
}

/**
 * The Event for this pallet
 */
export type MultiAssetsOperatorExtEvent = MultiAssetsOperatorExtEvent_Approved | MultiAssetsOperatorExtEvent_Unapproved

/**
 * Asset(s) were approved. If `asset` and `token` are None, it applies to all.
 */
export interface MultiAssetsOperatorExtEvent_Approved {
  __kind: 'Approved'
  /**
   * The account that owns the asset(s)
   */
  owner: AccountId32
  /**
   * The account that was approved to operate
   */
  operator: AccountId32
  /**
   * The asset that was approved
   */
  asset: (UUAID | undefined)
  /**
   * The token that was approved
   */
  token: (number | undefined)
  /**
   * The amount approved for
   */
  amount: (bigint | undefined)
  /**
   * The expiration of the approval
   */
  expiration: Expiration
}

/**
 * Asset(s) were unapproved. If `asset` and `token` are None, it applies to all.
 */
export interface MultiAssetsOperatorExtEvent_Unapproved {
  __kind: 'Unapproved'
  /**
   * The account that owns the asset(s)
   */
  owner: AccountId32
  /**
   * The account that was unapproved to operate
   */
  operator: AccountId32
  /**
   * The asset that was unapproved
   */
  asset: (UUAID | undefined)
  /**
   * The token that was unapproved
   */
  token: (number | undefined)
}

/**
 * Event for this pallet
 */
export type TagsEvent = TagsEvent_TagCreated | TagsEvent_AssetTagged | TagsEvent_AssetUntagged

/**
 * A new `Tag` with `id` was created by `owner`
 */
export interface TagsEvent_TagCreated {
  __kind: 'TagCreated'
  id: bigint
  owner: AccountId32
}

/**
 * `asset_id` was tagged with `tag_id`
 */
export interface TagsEvent_AssetTagged {
  __kind: 'AssetTagged'
  assetId: UUAID
  tagId: bigint
}

/**
 * `asset_id` was untagged with `tag_id`
 */
export interface TagsEvent_AssetUntagged {
  __kind: 'AssetUntagged'
  assetId: UUAID
  tagId: bigint
}

/**
 * 
			The [event](https://substrate.dev/docs/en/knowledgebase/runtime/events) emitted
			by this pallet.
			
 */
export type ClaimsEvent = ClaimsEvent_Claimed

/**
 * Someone claimed some EFIs. `[who, ethereum_address, amount]`
 */
export interface ClaimsEvent_Claimed {
  __kind: 'Claimed'
  value: [AccountId32, H160, bigint]
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

export type V2Error = V2Error_Overflow | V2Error_Unimplemented | V2Error_UntrustedReserveLocation | V2Error_UntrustedTeleportLocation | V2Error_MultiLocationFull | V2Error_MultiLocationNotInvertible | V2Error_BadOrigin | V2Error_InvalidLocation | V2Error_AssetNotFound | V2Error_FailedToTransactAsset | V2Error_NotWithdrawable | V2Error_LocationCannotHold | V2Error_ExceedsMaxMessageSize | V2Error_DestinationUnsupported | V2Error_Transport | V2Error_Unroutable | V2Error_UnknownClaim | V2Error_FailedToDecode | V2Error_TooMuchWeightRequired | V2Error_NotHoldingFees | V2Error_TooExpensive | V2Error_Trap | V2Error_UnhandledXcmVersion | V2Error_WeightLimitReached | V2Error_Barrier | V2Error_WeightNotComputable

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

export interface V2Error_TooMuchWeightRequired {
  __kind: 'TooMuchWeightRequired'
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

export type V1WildMultiAsset = V1WildMultiAsset_All | V1WildMultiAsset_AllOf

export interface V1WildMultiAsset_All {
  __kind: 'All'
}

export interface V1WildMultiAsset_AllOf {
  __kind: 'AllOf'
  id: V1AssetId
  fun: V1WildFungibility
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

export interface V1PersistedValidationData {
  parentHead: HeadData
  relayParentNumber: number
  relayParentStorageRoot: H256
  maxPovSize: number
}

export interface StorageProof {
  trieNodes: Uint8Array[]
}

export interface InboundDownwardMessage {
  sentAt: number
  msg: Uint8Array
}

export type Id = number

export interface InboundHrmpMessage {
  sentAt: number
  data: Uint8Array
}

export interface DispatchInfo {
  weight: bigint
  class: DispatchClass
  paysFee: Pays
}

export type DispatchError = DispatchError_Other | DispatchError_CannotLookup | DispatchError_BadOrigin | DispatchError_Module | DispatchError_ConsumerRemaining | DispatchError_NoProviders | DispatchError_Token | DispatchError_Arithmetic

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
  index: number
  error: number
}

export interface DispatchError_ConsumerRemaining {
  __kind: 'ConsumerRemaining'
}

export interface DispatchError_NoProviders {
  __kind: 'NoProviders'
}

export interface DispatchError_Token {
  __kind: 'Token'
  value: TokenError
}

export interface DispatchError_Arithmetic {
  __kind: 'Arithmetic'
  value: ArithmeticError
}

export type BalanceStatus = BalanceStatus_Free | BalanceStatus_Reserved

export interface BalanceStatus_Free {
  __kind: 'Free'
}

export interface BalanceStatus_Reserved {
  __kind: 'Reserved'
}

export type PoolType = PoolType_Collator | PoolType_Fuel | PoolType_Community | PoolType_PriceDiscovery

export interface PoolType_Collator {
  __kind: 'Collator'
}

export interface PoolType_Fuel {
  __kind: 'Fuel'
}

export interface PoolType_Community {
  __kind: 'Community'
}

export interface PoolType_PriceDiscovery {
  __kind: 'PriceDiscovery'
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

export type V1WildFungibility = V1WildFungibility_Fungible | V1WildFungibility_NonFungible

export interface V1WildFungibility_Fungible {
  __kind: 'Fungible'
}

export interface V1WildFungibility_NonFungible {
  __kind: 'NonFungible'
}

export type HeadData = Uint8Array

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
