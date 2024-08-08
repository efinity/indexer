import assert from "assert"
import * as marshal from "./marshal"

export class OfferState {
    public readonly isTypeOf = 'OfferState'
    private _counterOfferCount!: number

    constructor(props?: Partial<Omit<OfferState, 'toJSON'>>, json?: any) {
        Object.assign(this, props)
        if (json != null) {
            this._counterOfferCount = marshal.int.fromJSON(json.counterOfferCount)
        }
    }

    get counterOfferCount(): number {
        assert(this._counterOfferCount != null, 'uninitialized access')
        return this._counterOfferCount
    }

    set counterOfferCount(value: number) {
        this._counterOfferCount = value
    }

    toJSON(): object {
        return {
            isTypeOf: this.isTypeOf,
            counterOfferCount: this.counterOfferCount,
        }
    }
}
