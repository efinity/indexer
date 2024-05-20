import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_, OneToMany as OneToMany_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {MintPolicy} from "./_mintPolicy"
import {MarketPolicy} from "./_marketPolicy"
import {RoyaltyCurrency} from "./royaltyCurrency.model"
import {TransferPolicy} from "./_transferPolicy"
import {Token} from "./token.model"
import {CollectionAccount} from "./collectionAccount.model"
import {TokenAccount} from "./tokenAccount.model"
import {Attribute} from "./attribute.model"
import {Trait} from "./trait.model"
import {Metadata} from "./_metadata"
import {CollectionFlags} from "./_collectionFlags"
import {CollectionSocials} from "./_collectionSocials"
import {CollectionStats} from "./_collectionStats"

@Entity_()
export class Collection {
    constructor(props?: Partial<Collection>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    collectionId!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    owner!: Account

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new MintPolicy(undefined, obj)}, nullable: false})
    mintPolicy!: MintPolicy

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new MarketPolicy(undefined, obj)}, nullable: true})
    marketPolicy!: MarketPolicy | undefined | null

    @OneToMany_(() => RoyaltyCurrency, e => e.collection)
    explicitRoyaltyCurrencies!: RoyaltyCurrency[]

    @Column_("text", {nullable: true})
    burnPolicy!: string | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new TransferPolicy(undefined, obj)}, nullable: true})
    transferPolicy!: TransferPolicy | undefined | null

    @Column_("text", {nullable: true})
    attributePolicy!: string | undefined | null

    @Column_("int4", {nullable: false})
    attributeCount!: number

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    totalDeposit!: bigint

    @OneToMany_(() => Token, e => e.collection)
    tokens!: Token[]

    @OneToMany_(() => CollectionAccount, e => e.collection)
    collectionAccounts!: CollectionAccount[]

    @OneToMany_(() => TokenAccount, e => e.collection)
    tokenAccounts!: TokenAccount[]

    @OneToMany_(() => Attribute, e => e.collection)
    attributes!: Attribute[]

    @OneToMany_(() => Trait, e => e.collection)
    traits!: Trait[]

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Metadata(undefined, obj)}, nullable: true})
    metadata!: Metadata | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new CollectionFlags(undefined, obj)}, nullable: false})
    flags!: CollectionFlags

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new CollectionSocials(undefined, obj)}, nullable: false})
    socials!: CollectionSocials

    @Column_("text", {nullable: true})
    category!: string | undefined | null

    @Column_("timestamp with time zone", {nullable: true})
    verifiedAt!: Date | undefined | null

    @Column_("bool", {nullable: false})
    hidden!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new CollectionStats(undefined, obj)}, nullable: false})
    stats!: CollectionStats
}
