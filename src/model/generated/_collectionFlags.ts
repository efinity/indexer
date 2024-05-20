import assert from "assert"
import * as marshal from "./marshal"

export class CollectionFlags {
    private _hiddenForLegalReasons!: boolean
    private _featured!: boolean

    constructor(props?: Partial<Omit<CollectionFlags, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._hiddenForLegalReasons = marshal.boolean.fromJSON(json.hiddenForLegalReasons)
            this._featured = marshal.boolean.fromJSON(json.featured)
        }
    }

    get hiddenForLegalReasons(): boolean {
        assert(this._hiddenForLegalReasons != null, 'uninitialized access')
        return this._hiddenForLegalReasons
    }

    set hiddenForLegalReasons(value: boolean) {
        this._hiddenForLegalReasons = value
    }

    get featured(): boolean {
        assert(this._featured != null, 'uninitialized access')
        return this._featured
    }

    set featured(value: boolean) {
        this._featured = value
    }

    toJSON(): object {
        return {
            hiddenForLegalReasons: this.hiddenForLegalReasons,
            featured: this.featured,
        }
    }
}
