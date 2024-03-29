import { u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing } from '../../model'
import { BlockHandlerContext, CallHandlerContext, CommonContext, EventHandlerContext } from '../types/contexts'
import { encodeId, isAddressSS58 } from '../../common/tools'

export async function getOrCreateAccount(
    ctx: EventHandlerContext | CallHandlerContext | BlockHandlerContext | CommonContext,
    publicKey: Uint8Array
): Promise<Account> {
    const pkHex = u8aToHex(publicKey)
    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (account === null) {
        account = new Account({
            id: pkHex,
            address: isAddressSS58(publicKey) ? encodeId(publicKey) : pkHex,
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                frozen: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            verified: false,
            nonce: 0,
        })

        await ctx.store.save(Account, account as any)
    }

    return account
}

export async function getBestListing(ctx: CommonContext, tokenId: string) {
    return ctx.store
        .getRepository(Listing)
        .createQueryBuilder('listing')
        .select('listing.id')
        .addSelect('listing.highestPrice')
        .where('listing.makeAssetId = :tokenId', { tokenId })
        .andWhere('listing.isActive = true')
        .orderBy('listing.highestPrice', 'ASC')
        .groupBy('listing.id')
        .getOne()
}
