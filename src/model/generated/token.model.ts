import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, BigIntColumn as BigIntColumn_, Index as Index_, BooleanColumn as BooleanColumn_, IntColumn as IntColumn_, ManyToOne as ManyToOne_, OneToMany as OneToMany_, OneToOne as OneToOne_, DateTimeColumn as DateTimeColumn_} from "@subsquid/typeorm-store"
import * as marshal from "./marshal"
import {FreezeState} from "./_freezeState"
import {TokenCap, fromJsonTokenCap} from "./_tokenCap"
import {TokenBehavior, fromJsonTokenBehavior} from "./_tokenBehavior"
import {Collection} from "./collection.model"
import {TokenAccount} from "./tokenAccount.model"
import {Attribute} from "./attribute.model"
import {Listing} from "./listing.model"
import {TraitToken} from "./traitToken.model"
import {ListingSale} from "./listingSale.model"
import {TokenRarity} from "./tokenRarity.model"
import {Metadata} from "./_metadata"

@Entity_()
export class Token {
    constructor(props?: Partial<Token>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @BigIntColumn_({nullable: false})
    tokenId!: bigint

    @BigIntColumn_({nullable: false})
    supply!: bigint

    @BooleanColumn_({nullable: false})
    isFrozen!: boolean

    @Column_("varchar", {length: 9, nullable: true})
    freezeState!: FreezeState | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTokenCap(obj)}, nullable: true})
    cap!: TokenCap | undefined | null

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonTokenBehavior(obj)}, nullable: true})
    behavior!: TokenBehavior | undefined | null

    @BooleanColumn_({nullable: false})
    listingForbidden!: boolean

    @BigIntColumn_({nullable: true})
    unitPrice!: bigint | undefined | null

    @BigIntColumn_({nullable: false})
    minimumBalance!: bigint

    @BigIntColumn_({nullable: false})
    mintDeposit!: bigint

    @IntColumn_({nullable: false})
    attributeCount!: number

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @OneToMany_(() => TokenAccount, e => e.token)
    tokenAccounts!: TokenAccount[]

    @OneToMany_(() => Attribute, e => e.token)
    attributes!: Attribute[]

    @OneToMany_(() => Listing, e => e.makeAssetId)
    listings!: Listing[]

    @OneToMany_(() => Listing, e => e.takeAssetId)
    offers!: Listing[]

    @OneToMany_(() => TraitToken, e => e.token)
    traits!: TraitToken[]

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    bestListing!: Listing | undefined | null

    @Index_()
    @ManyToOne_(() => Listing, {nullable: true})
    recentListing!: Listing | undefined | null

    @Index_()
    @ManyToOne_(() => ListingSale, {nullable: true})
    lastSale!: ListingSale | undefined | null

    @OneToOne_(() => TokenRarity, e => e.token)
    rarity!: TokenRarity | undefined | null

    @BooleanColumn_({nullable: false})
    nonFungible!: boolean

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : new Metadata(undefined, obj)}, nullable: true})
    metadata!: Metadata | undefined | null

    @Index_()
    @DateTimeColumn_({nullable: false})
    createdAt!: Date
}
