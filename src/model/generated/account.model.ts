import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Balance} from "./_balance"
import {Extrinsic} from "./extrinsic.model"
import {Collection} from "./collection.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"

@Entity_()
export class Account {
    constructor(props?: Partial<Account>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    address!: string

    @Column_("int4", {nullable: false})
    nonce!: number

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Balance(undefined, obj)}, nullable: true})
    balance!: Balance | undefined | null

    @OneToMany_(() => Extrinsic, e => e.signer)
    extrinsics!: Extrinsic[]

    @OneToMany_(() => Collection, e => e.owner)
    collectionsOwned!: Collection[]

    @OneToMany_(() => CollectionAccount, e => e.account)
    collectionAccounts!: CollectionAccount[]

    @OneToMany_(() => TokenAccount, e => e.account)
    tokenAccounts!: TokenAccount[]

    @Column_("int4", {nullable: false})
    lastUpdateBlock!: number
}
