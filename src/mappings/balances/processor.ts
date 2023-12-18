import { BlockHeader } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../common/errors'
import { Balance, Event as EventModel } from '../../model'
import { encodeId } from '../../common/tools'
import { balances } from '../../types/generated/events'
import { account as systemAccount } from '../../types/generated/system/storage'
import { CommonContext, Event } from '../types/contexts'

function getDustLostAccount(ctx: CommonContext, event: Event) {
    if (balances.dustLost.matrixEnjinV603.is(event)) {
        return balances.dustLost.matrixEnjinV603.decode(event).account
    }

    throw new UnknownVersionError(balances.dustLost.name)
}

function getBalanceSetAccount(ctx: CommonContext, event: Event) {
    if (balances.balanceSet.matrixEnjinV603.is(event)) {
        return balances.balanceSet.matrixEnjinV603.decode(event).who
    }

    if (balances.balanceSet.v602.is(event)) {
        return balances.balanceSet.v602.decode(event).who
    }

    if (balances.balanceSet.v500.is(event)) {
        return balances.balanceSet.v500.decode(event).who
    }

    throw new UnknownVersionError(balances.balanceSet.name)
}

function getTransferAccounts(ctx: CommonContext, event: Event) {
    if (balances.transfer.matrixEnjinV603.is(event)) {
        return [balances.transfer.matrixEnjinV603.decode(event).from, balances.transfer.matrixEnjinV603.decode(event).to]
    }
    throw new UnknownVersionError(balances.transfer.name)
}

function getEndowedAccount(ctx: CommonContext, event: Event) {
    if (balances.endowed.matrixEnjinV603.is(event)) {
        return balances.endowed.matrixEnjinV603.decode(event).account
    }
    throw new UnknownVersionError(balances.endowed.name)
}

function getDepositAccount(ctx: CommonContext, event: Event) {
    if (balances.deposit.matrixEnjinV603.is(event)) {
        return balances.deposit.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.deposit.name)
}

function getReservedAccount(ctx: CommonContext, event: Event) {
    if (balances.reserved.matrixEnjinV603.is(event)) {
        return balances.reserved.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.reserved.name)
}

function getUnreservedAccount(ctx: CommonContext, event: Event) {
    if (balances.unreserved.matrixEnjinV603.is(event)) {
        return balances.unreserved.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.unreserved.name)
}

function getWithdrawAccount(ctx: CommonContext, event: Event) {
    if (balances.withdraw.matrixEnjinV603.is(event)) {
        return balances.withdraw.matrixEnjinV603.decode(event).who
    }

    throw new UnknownVersionError(balances.withdraw.name)
}

function getSlashedAccount(ctx: CommonContext, event: Event) {
    if (balances.slashed.matrixEnjinV603.is(event)) {
        return balances.slashed.matrixEnjinV603.decode(event).who
    }
    throw new UnknownVersionError(balances.slashed.name)
}

function getReserveRepatriatedAccounts(ctx: CommonContext, event: Event) {
    if (balances.reserveRepatriated.matrixEnjinV603.is(event)) {
        return [
            balances.reserveRepatriated.matrixEnjinV603.decode(event).from,
            balances.reserveRepatriated.matrixEnjinV603.decode(event).to,
        ]
    }
    throw new UnknownVersionError(balances.reserveRepatriated.name)
}

async function getSystemAccountBalances(ctx: CommonContext, block: BlockHeader, accounts: string[]) {
    if (systemAccount.matrixEnjinV603.is(block)) {
        return systemAccount.matrixEnjinV603.getMany(block, accounts)
    }

    if (systemAccount.v602.is(block)) {
        return systemAccount.v602.getMany(block, accounts)
    }

    if (systemAccount.v500.is(block)) {
        return systemAccount.v500.getMany(block, accounts)
    }

    throw new UnknownVersionError('system.account')
}

function processBalancesEventItem(ctx: CommonContext, event: Event) {
    const ids: string[] = []
    switch (event.name) {
        case 'Balances.DustLost': {
            const account = getDustLostAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.BalanceSet': {
            const account = getBalanceSetAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Endowed': {
            const account = getEndowedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Deposit': {
            const account = getDepositAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Reserved': {
            const account = getReservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Unreserved': {
            const account = getUnreservedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Withdraw': {
            const account = getWithdrawAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Slashed': {
            const account = getSlashedAccount(ctx, event)
            ids.push(account)
            break
        }
        case 'Balances.Transfer': {
            const accounts = getTransferAccounts(ctx, event)
            ids.push(...accounts)
            break
        }
        case 'Balances.ReserveRepatriated': {
            const accounts = getReserveRepatriatedAccounts(ctx, event)
            ids.push(...accounts)
            break
        }
        default: {
            break
        }
    }
    return ids
}

async function getBalances(ctx: CommonContext, block: BlockHeader, accountIds: string[]) {
    return getSystemAccountBalances(ctx, block, accountIds)
}

const accountsSet = new Set<string>()

// eslint-disable-next-line sonarjs/cognitive-complexity
export async function saveAccounts(ctx: CommonContext, block: BlockHeader) {
    const accountIds = Array.from(accountsSet)
    if (accountIds.length === 0) return

    const accountInfos = await getBalances(ctx, block, accountIds)
    if (!accountInfos) {
        return
    }

    const accounts: any[] = []

    for (let i = 0; i < accountIds.length; i += 1) {
        const id = accountIds[i]
        const accountInfo = accountInfos[i]
        if (!accountInfo) {
            // eslint-disable-next-line no-continue
            continue
        }
        const accountData = accountInfo.data

        if ('frozen' in accountData) {
            accounts.push({
                id,
                address: encodeId(id),
                nonce: accountInfo.nonce,
                balance: new Balance({
                    transferable: accountData.free - accountData.frozen,
                    free: accountData.free,
                    reserved: accountData.reserved,
                    feeFrozen: 0n,
                    miscFrozen: 0n,
                }),
            })
        } else if ('miscFrozen' in accountData) {
            accounts.push({
                id,
                address: encodeId(id),
                nonce: accountInfo.nonce,
                balance: new Balance({
                    transferable: accountData.free - accountData.miscFrozen,
                    free: accountData.free,
                    reserved: accountData.reserved,
                    feeFrozen: accountData.feeFrozen,
                    miscFrozen: accountData.miscFrozen,
                }),
            })
        }
    }

    await ctx.store.upsert(accounts)
    accountsSet.clear()
}

export async function save(
    ctx: CommonContext,
    block: BlockHeader,
    event: Event,
    skipSave: boolean
): Promise<EventModel | undefined> {
    if (skipSave) return undefined

    processBalancesEventItem(ctx, event).forEach((id) => accountsSet.add(id))

    return undefined
}

export const addAccountsToSet = (accounts: string[]) => {
    accounts.forEach((id) => accountsSet.add(id))
}
