import assert from "assert"
import * as marshal from "./marshal"

export class PermittedExtrinsics {
    private _palletName!: string | undefined | null
    private _extrinsicName!: string | undefined | null
    private _raw!: unknown | undefined | null

    constructor(props?: Partial<Omit<PermittedExtrinsics, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._palletName = json.palletName == null ? undefined : marshal.string.fromJSON(json.palletName)
            this._extrinsicName = json.extrinsicName == null ? undefined : marshal.string.fromJSON(json.extrinsicName)
            this._raw = json.raw
        }
    }

    get palletName(): string | undefined | null {
        return this._palletName
    }

    set palletName(value: string | undefined | null) {
        this._palletName = value
    }

    get extrinsicName(): string | undefined | null {
        return this._extrinsicName
    }

    set extrinsicName(value: string | undefined | null) {
        this._extrinsicName = value
    }

    get raw(): unknown | undefined | null {
        return this._raw
    }

    set raw(value: unknown | undefined | null) {
        this._raw = value
    }

    toJSON(): object {
        return {
            palletName: this.palletName,
            extrinsicName: this.extrinsicName,
            raw: this.raw,
        }
    }
}