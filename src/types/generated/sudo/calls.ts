import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as v500 from '../v500'
import * as v600 from '../v600'
import * as v601 from '../v601'
import * as v602 from '../v602'
import * as v1000 from '../v1000'
import * as v1003 from '../v1003'

export const sudo =  {
    name: 'Sudo.sudo',
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
    v500: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v500.Call,
        })
    ),
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
    v600: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v600.Call,
        })
    ),
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
    v601: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v601.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v602: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v602.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v1000: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1000.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Root` origin.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v1003: new CallType(
        'Sudo.sudo',
        sts.struct({
            call: v1003.Call,
        })
    ),
}

export const sudoUncheckedWeight =  {
    name: 'Sudo.sudo_unchecked_weight',
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
    v500: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v500.Call,
            weight: v500.Weight,
        })
    ),
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
    v600: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v600.Call,
            weight: v600.Weight,
        })
    ),
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
    v601: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v601.Call,
            weight: v601.Weight,
        })
    ),
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
    v602: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v602.Call,
            weight: v602.Weight,
        })
    ),
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
    v1000: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1000.Call,
            weight: v1000.Weight,
        })
    ),
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
    v1003: new CallType(
        'Sudo.sudo_unchecked_weight',
        sts.struct({
            call: v1003.Call,
            weight: v1003.Weight,
        })
    ),
}

export const setKey =  {
    name: 'Sudo.set_key',
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
    v500: new CallType(
        'Sudo.set_key',
        sts.struct({
            new: v500.MultiAddress,
        })
    ),
}

export const sudoAs =  {
    name: 'Sudo.sudo_as',
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
    v500: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v500.MultiAddress,
            call: v500.Call,
        })
    ),
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
    v600: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v600.MultiAddress,
            call: v600.Call,
        })
    ),
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
    v601: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v601.MultiAddress,
            call: v601.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v602: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v602.MultiAddress,
            call: v602.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v1000: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1000.MultiAddress,
            call: v1000.Call,
        })
    ),
    /**
     * Authenticates the sudo key and dispatches a function call with `Signed` origin from
     * a given account.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * ## Complexity
     * - O(1).
     */
    v1003: new CallType(
        'Sudo.sudo_as',
        sts.struct({
            who: v1003.MultiAddress,
            call: v1003.Call,
        })
    ),
}
