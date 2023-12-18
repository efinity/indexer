import * as ss58 from '@subsquid/ss58'
import { decodeHex } from '@subsquid/util-internal-hex'
import { decodeAddress, encodeAddress } from '@polkadot/keyring'
import { hexToU8a, isHex, stringToHex } from '@polkadot/util'
import config from '../config'

export function isMainnet() {
    return config.chainName === 'enjin-matrixchain'
}
export function isValidAddress(address: any) {
    try {
        encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address))
        return true
    } catch (e) {
        return false
    }
}

export function encodeId(id: Uint8Array | string) {
    return ss58.codec(config.prefix).encode(id)
}

export function decodeId(id: string) {
    return ss58.codec(config.prefix).decode(id)
}

export interface ItemBase {
    id: string
    timestamp: Date | null | undefined
    blockNumber: bigint | null | undefined
    extrinsicHash: string | null | undefined
}

export function isAddressSS58(address: Uint8Array) {
    switch (address.length) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 32:
        case 33:
            return true
        default:
            return false
    }
}

export function getOriginAccountId(origin: any) {
    if (!origin) return undefined
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (origin.__kind) {
        case 'system':
            // eslint-disable-next-line sonarjs/no-nested-switch, sonarjs/no-small-switch
            switch (origin.value.__kind) {
                case 'Signed':
                    return encodeId(decodeHex(origin.value.value))
                default:
                    return undefined
            }
        default:
            return undefined
    }
}

export function saturatingSumBigInt(
    a: bigint,
    b: bigint,
    { max, min }: { max: null | bigint; min: bigint } = { max: null, min: 0n }
): bigint {
    const sum = BigInt(a) + BigInt(b)
    if (sum < min) {
        return min
    }
    if (max && sum > max) {
        return max
    }
    return sum
}

// eslint-disable-next-line no-control-regex
const regex = /\/\/u0000/ // null string unicode

// eslint-disable-next-line no-control-regex
const regex2 = /\u0000/ // null byte unicode

export function safeString(s: string) {
    if (regex.test(s) || regex2.test(s)) {
        return stringToHex(s)
    }
    return s
}

export function safeJson(data: any) {
    return JSON.parse(JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value)))
}

export function safeJsonString(data: any) {
    return JSON.stringify(data, (key, value) => (typeof value === 'bigint' ? value.toString() : value))
}
