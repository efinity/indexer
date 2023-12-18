import { u8aToHex } from '@polkadot/util'
import { Account, Balance, Listing, ListingStatus } from '../../model'
import { CommonContext } from '../types/contexts'
import { encodeId, isAddressSS58 } from '../../common/tools'

export async function getOrCreateAccount(ctx: CommonContext, publicKey: Uint8Array): Promise<Account> {
    const pkHex = u8aToHex(publicKey)
    let account = await ctx.store.findOneBy(Account, {
        id: pkHex,
    })

    if (!account) {
        account = new Account({
            id: pkHex,
            address: isAddressSS58(publicKey) ? encodeId(publicKey) : pkHex,
            balance: new Balance({
                transferable: 0n,
                free: 0n,
                reserved: 0n,
                miscFrozen: 0n,
                feeFrozen: 0n,
            }),
            nonce: 0,
        })
        await ctx.store.insert(account)
    }

    return account
}

export async function getBestListing(ctx: CommonContext, tokenId: string) {
    return ctx.store
        .getRepository(Listing)
        .createQueryBuilder('listing')
        .select('listing.id')
        .addSelect('listing.highestPrice')
        .addSelect('COUNT(status.type)')
        .innerJoin(ListingStatus, 'status', 'status.listing = listing.id')
        .where('listing.makeAssetId = :tokenId', { tokenId })
        .orderBy('listing.highestPrice', 'ASC')
        .groupBy('listing.id')
        .having('COUNT(status.type) = 1')
        .getOne()
}
