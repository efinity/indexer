import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as matrixEnjinV603 from '../matrixEnjinV603'
import * as v604 from '../v604'

export const claim =  {
    name: 'Claims.claim',
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
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    matrixEnjinV603: new CallType(
        'Claims.claim',
        sts.struct({
            dest: matrixEnjinV603.AccountId32,
            ethereumSignature: matrixEnjinV603.Signature,
            ethereumAddress: matrixEnjinV603.H160,
        })
    ),
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
    v500: new CallType(
        'Claims.claim',
        sts.struct({
            dest: v500.AccountId32,
            ethereumSignature: v500.Signature,
        })
    ),
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
     * - `ethereum_address` : The Ethereum address from which the message is signed.
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to validate unsigned `claim` call.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    v604: new CallType(
        'Claims.claim',
        sts.struct({
            dest: v604.AccountId32,
            ethereumSignature: v604.Signature,
            ethereumAddress: v604.H160,
        })
    ),
}

export const mintClaim =  {
    name: 'Claims.mint_claim',
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
    matrixEnjinV603: new CallType(
        'Claims.mint_claim',
        sts.struct({
            who: matrixEnjinV603.H160,
            value: sts.bigint(),
        })
    ),
}

export const moveClaim =  {
    name: 'Claims.move_claim',
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    matrixEnjinV603: new CallType(
        'Claims.move_claim',
        sts.struct({
            old: matrixEnjinV603.H160,
            new: matrixEnjinV603.H160,
        })
    ),
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * Returns:
     * 
     * DispatchResultWithPostInfo
     * 
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     * </weight>
     */
    v500: new CallType(
        'Claims.move_claim',
        sts.struct({
            old: v500.Account,
            new: v500.Account,
        })
    ),
    /**
     * `move_claim` moves the claim from one Ethereum address to another
     * 
     * Arguments:
     * 
     * * `old`: EthereumAddress,
     * * `new`: EthereumAddress,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    v604: new CallType(
        'Claims.move_claim',
        sts.struct({
            old: v604.H160,
            new: v604.H160,
        })
    ),
}

export const requestClaims =  {
    name: 'Claims.request_claims',
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    matrixEnjinV603: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => matrixEnjinV603.Claim),
        })
    ),
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * <weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    v500: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => v500.Claim),
            chain: v500.Chain,
        })
    ),
    /**
     * `request_claims` is a function that allows a relayer to request claims for a batch of
     * transactions
     * 
     * Parameters:
     * 
     * * `block_number`: The block number of Ethereum or Parachain block that contains the
     *   transaction.
     * * `batch_data`: A vector of EthereumTransactionDataOf structs.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * 
     * Total Complexity: O(N)
     */
    v604: new CallType(
        'Claims.request_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => v604.Claim),
        })
    ),
}

export const rejectClaims =  {
    name: 'Claims.reject_claims',
    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    matrixEnjinV603: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => matrixEnjinV603.RejectData),
        })
    ),
    /**
     * `reject_claims` is a function that allows the `Approver` to reject a batch of claims
     * 
     * Arguments:
     * 
     * * `origin`: OriginFor<T>
     * * `batch_data`: A vector of transaction hashes.
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    v500: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => sts.tuple(() => [v500.H256, sts.option(() => sts.number())])),
        })
    ),
    /**
     * `reject_claims` is a function that is called by ForceOrigin and allows to reject a batch
     * of claims
     * 
     * Arguments:
     * 
     * * `batch_data`: A vector of user accounts and transaction hashes.
     * 
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And REMOVE the pending ETH transaction
     * 
     * Total Complexity: O(N)
     */
    v604: new CallType(
        'Claims.reject_claims',
        sts.struct({
            batchData: sts.array(() => v604.RejectData),
        })
    ),
}

export const setExchangeRate =  {
    name: 'Claims.set_exchange_rate',
    /**
     * `set_exchange_rate` is a function that can be called by ForceOrigin and
     * it sets the exchange rate
     * 
     * Parameters:
     * 
     * * `numerator`: u128,
     * * `denominator`: u128,
     * 
     * The weight of this call is invariant over the input parameters.
     * 
     * Total Complexity: O(1)
     */
    matrixEnjinV603: new CallType(
        'Claims.set_exchange_rate',
        sts.struct({
            numerator: sts.bigint(),
            denominator: sts.bigint(),
        })
    ),
}

export const setDelayTime =  {
    name: 'Claims.set_delay_time',
    /**
     * This function sets a delay time for claims and requires a governance origin to execute.
     * 
     * Arguments:
     * 
     * * `delay_time`: The delay_time parameter is the number of blocks that must pass before a
     * certain action can be taken. In this case, it is being used to set the delay time for
     * claims in the governance pallet.
     * 
     * Returns:
     * 
     * either `Ok(())` if the delay time is successfully set, or an `Err` with a
     * `DispatchError` if the delay time is less than 24 hours.
     */
    matrixEnjinV603: new CallType(
        'Claims.set_delay_time',
        sts.struct({
            delayTime: sts.number(),
        })
    ),
}

export const claimFromEfinity =  {
    name: 'Claims.claim_from_efinity',
    /**
     * Claim Enjin that was burned on the Efinity Parachain.
     * Optionally provide an alternate destination.
     * 
     * Caller must be the same as the account that burned the EFI.
     * 
     * Parameters:
     * - `origin`: The account that burned the EFI.
     * - `dest`: The destination account to payout the claim. If None, the caller is used.
     */
    v500: new CallType(
        'Claims.claim_from_efinity',
        sts.struct({
            dest: sts.option(() => v500.AccountId32),
        })
    ),
}

export const mintEnjFromNativeEfi =  {
    name: 'Claims.mint_enj_from_native_efi',
    /**
     * Bridge EFI from the Efinity parachain to the Enjin Relay Chain
     * 
     * Parameters:
     * - `origin`: The account initiating the claim and from which EFI will be burned.
     * - `amount`: Number of EFIs to burn in order to bridge to the Enjin Relay Chain. The
     * conversion rate will be according to the `ExchangeRate` storage on the Enjin Relay
     * Chain.
     */
    v500: new CallType(
        'Claims.mint_enj_from_native_efi',
        sts.struct({
            amount: sts.bigint(),
        })
    ),
}

export const approveClaims =  {
    name: 'Claims.approve_claims',
    /**
     * It takes a list of transaction hashes and approves the claims for those transactions
     * 
     * Parameters:
     * 
     * * `origin`: OriginFor<T>
     * * `block_number`: The block number of the Latest ETH block of Approver
     * * `batch_data`: This is a vector of transaction hashes.
     * * `chain`: The chain that the transactions are from (Ethereum/Efinity Parachain).
     * 
     * Returns:
     * 
     * DispatchResult
     * </weight>
     * The weight of this call is invariant over the input parameters.
     * Weight includes logic to iterate over pending approval ETH transaction
     * And approve the pending ETH transaction
     * 
     * Total Complexity: O(N)
     * </weight>
     */
    v500: new CallType(
        'Claims.approve_claims',
        sts.struct({
            blockNumber: sts.number(),
            batchData: sts.array(() => sts.tuple(() => [v500.H256, sts.option(() => sts.number())])),
            chain: v500.Chain,
        })
    ),
}
