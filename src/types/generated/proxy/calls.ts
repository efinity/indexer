import {sts, Block, Bytes, Option, Result, CallType, RuntimeCtx} from '../support'
import * as matrixEnjinV1010 from '../matrixEnjinV1010'

export const proxy =  {
    name: 'Proxy.proxy',
    /**
     * Dispatch the given `call` from an account that the sender is authorised for through
     * `add_proxy`.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.proxy',
        sts.struct({
            real: matrixEnjinV1010.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1010.ProxyType),
            call: matrixEnjinV1010.Call,
        })
    ),
}

export const addProxy =  {
    name: 'Proxy.add_proxy',
    /**
     * Register a proxy account for the sender that is able to make calls on its behalf.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to make a proxy.
     * - `proxy_type`: The permissions allowed for this proxy account.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.add_proxy',
        sts.struct({
            delegate: matrixEnjinV1010.MultiAddress,
            proxyType: matrixEnjinV1010.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxy =  {
    name: 'Proxy.remove_proxy',
    /**
     * Unregister a proxy account for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `proxy`: The account that the `caller` would like to remove as a proxy.
     * - `proxy_type`: The permissions currently enabled for the removed proxy account.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.remove_proxy',
        sts.struct({
            delegate: matrixEnjinV1010.MultiAddress,
            proxyType: matrixEnjinV1010.ProxyType,
            delay: sts.number(),
        })
    ),
}

export const removeProxies =  {
    name: 'Proxy.remove_proxies',
    /**
     * Unregister all proxy accounts for the sender.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * WARNING: This may be called on accounts created by `pure`, however if done, then
     * the unreserved fees will be inaccessible. **All access to this account will be lost.**
     */
    matrixEnjinV1010: new CallType(
        'Proxy.remove_proxies',
        sts.unit()
    ),
}

export const createPure =  {
    name: 'Proxy.create_pure',
    /**
     * Spawn a fresh new account that is guaranteed to be otherwise inaccessible, and
     * initialize it with a proxy of `proxy_type` for `origin` sender.
     * 
     * Requires a `Signed` origin.
     * 
     * - `proxy_type`: The type of the proxy that the sender will be registered as over the
     * new account. This will almost always be the most permissive `ProxyType` possible to
     * allow for maximum flexibility.
     * - `index`: A disambiguation index, in case this is called multiple times in the same
     * transaction (e.g. with `utility::batch`). Unless you're using `batch` you probably just
     * want to use `0`.
     * - `delay`: The announcement period required of the initial proxy. Will generally be
     * zero.
     * 
     * Fails with `Duplicate` if this has already been called in this transaction, from the
     * same sender, with the same parameters.
     * 
     * Fails if there are insufficient funds to pay for deposit.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.create_pure',
        sts.struct({
            proxyType: matrixEnjinV1010.ProxyType,
            delay: sts.number(),
            index: sts.number(),
        })
    ),
}

export const killPure =  {
    name: 'Proxy.kill_pure',
    /**
     * Removes a previously spawned pure proxy.
     * 
     * WARNING: **All access to this account will be lost.** Any funds held in it will be
     * inaccessible.
     * 
     * Requires a `Signed` origin, and the sender account must have been created by a call to
     * `pure` with corresponding parameters.
     * 
     * - `spawner`: The account that originally called `pure` to create this account.
     * - `index`: The disambiguation index originally passed to `pure`. Probably `0`.
     * - `proxy_type`: The proxy type originally passed to `pure`.
     * - `height`: The height of the chain when the call to `pure` was processed.
     * - `ext_index`: The extrinsic index in which the call to `pure` was processed.
     * 
     * Fails with `NoPermission` in case the caller is not a previously created pure
     * account whose `pure` call has corresponding parameters.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.kill_pure',
        sts.struct({
            spawner: matrixEnjinV1010.MultiAddress,
            proxyType: matrixEnjinV1010.ProxyType,
            index: sts.number(),
            height: sts.number(),
            extIndex: sts.number(),
        })
    ),
}

export const announce =  {
    name: 'Proxy.announce',
    /**
     * Publish the hash of a proxy-call that will be made in the future.
     * 
     * This must be called some number of blocks before the corresponding `proxy` is attempted
     * if the delay associated with the proxy relationship is greater than zero.
     * 
     * No more than `MaxPending` announcements may be made at any one time.
     * 
     * This will take a deposit of `AnnouncementDepositFactor` as well as
     * `AnnouncementDepositBase` if there are no other pending announcements.
     * 
     * The dispatch origin for this call must be _Signed_ and a proxy of `real`.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.announce',
        sts.struct({
            real: matrixEnjinV1010.MultiAddress,
            callHash: matrixEnjinV1010.H256,
        })
    ),
}

export const removeAnnouncement =  {
    name: 'Proxy.remove_announcement',
    /**
     * Remove a given announcement.
     * 
     * May be called by a proxy account to remove a call they previously announced and return
     * the deposit.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `call_hash`: The hash of the call to be made by the `real` account.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.remove_announcement',
        sts.struct({
            real: matrixEnjinV1010.MultiAddress,
            callHash: matrixEnjinV1010.H256,
        })
    ),
}

export const rejectAnnouncement =  {
    name: 'Proxy.reject_announcement',
    /**
     * Remove the given announcement of a delegate.
     * 
     * May be called by a target (proxied) account to remove a call that one of their delegates
     * (`delegate`) has announced they want to execute. The deposit is returned.
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `delegate`: The account that previously announced the call.
     * - `call_hash`: The hash of the call to be made.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.reject_announcement',
        sts.struct({
            delegate: matrixEnjinV1010.MultiAddress,
            callHash: matrixEnjinV1010.H256,
        })
    ),
}

export const proxyAnnounced =  {
    name: 'Proxy.proxy_announced',
    /**
     * Dispatch the given `call` from an account that the sender is authorized for through
     * `add_proxy`.
     * 
     * Removes any corresponding announcement(s).
     * 
     * The dispatch origin for this call must be _Signed_.
     * 
     * Parameters:
     * - `real`: The account that the proxy will make a call on behalf of.
     * - `force_proxy_type`: Specify the exact proxy type to be used and checked for this call.
     * - `call`: The call to be made by the `real` account.
     */
    matrixEnjinV1010: new CallType(
        'Proxy.proxy_announced',
        sts.struct({
            delegate: matrixEnjinV1010.MultiAddress,
            real: matrixEnjinV1010.MultiAddress,
            forceProxyType: sts.option(() => matrixEnjinV1010.ProxyType),
            call: matrixEnjinV1010.Call,
        })
    ),
}
