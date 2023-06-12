import { UnknownVersionError } from '../../common/errors'
import { decodeId } from '../../common/tools'
import { SystemAccountStorage } from '../../types/generated/storage'
import { BlockContext } from '../../types/generated/support'
import { AccountInfo } from '../../types/generated/efinityV1'

async function getStorageData(ctx: BlockContext, accounts: Uint8Array[]): Promise<(AccountInfo | undefined)[] | undefined> {
    const storage = new SystemAccountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isEfinityV3014) {
        return storage.asEfinityV3014.getMany(accounts)
    }
    throw new UnknownVersionError(storage.constructor.name)
}

export const account = {
    get: async (ctx: BlockContext, _account: string) => {
        const u8 = decodeId(_account)

        const data = await getStorageData(ctx, [u8])
        if (!data || !data[0]) return undefined

        return [{ [_account]: data[0] }]
    },
    getMany: async (ctx: BlockContext, accounts: string[]) => {
        if (accounts.length === 0) return {}

        const u8s = accounts.map((a) => decodeId(a))

        const data = await getStorageData(ctx, u8s)
        if (!data) return {}

        const infos: { [account: string]: AccountInfo | undefined } = {}
        // eslint-disable-next-line no-return-assign
        accounts.forEach((a, i) => (infos[a] = data[i]))

        return infos
    },
}
