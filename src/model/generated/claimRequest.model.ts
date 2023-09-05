import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {ClaimAccount} from "./_claimAccount"

@Entity_()
export class ClaimRequest {
    constructor(props?: Partial<ClaimRequest>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("jsonb", {transformer: {to: obj => obj.toJSON(), from: obj => obj == null ? undefined : new ClaimAccount(undefined, obj)}, nullable: false})
    account!: ClaimAccount

    @Column_("text", {nullable: false})
    hash!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount!: bigint

    @Column_("bool", {nullable: false})
    isEfiToken!: boolean

    @Column_("bool", {nullable: false})
    isEarlyBird!: boolean

    @Column_("int4", {nullable: true})
    extrinsicIndex!: number | undefined | null

    @Column_("bool", {nullable: false})
    isClaimed!: boolean

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date

    @Column_("int4", {nullable: false})
    createdBlock!: number
}
