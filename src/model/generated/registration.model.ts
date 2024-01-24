import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Account} from "./account.model"
import {Judgement} from "./_judgement"
import {JudgementType} from "./_judgementType"

@Entity_()
export class Registration {
    constructor(props?: Partial<Registration>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    deposit!: bigint

    @Index_()
    @ManyToOne_(() => Account, {nullable: true})
    account!: Account

    @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.map((val: any) => val.toJSON()), from: obj => obj == null ? undefined : marshal.fromList(obj, val => new Judgement(undefined, marshal.nonNull(val)))}, nullable: true})
    judgements!: (Judgement)[] | undefined | null

    @Column_("varchar", {length: 10, nullable: false})
    currentJudgement!: JudgementType

    @Column_("jsonb", {nullable: true})
    additional!: unknown | undefined | null

    @Column_("text", {nullable: true})
    display!: string | undefined | null

    @Column_("text", {nullable: true})
    legal!: string | undefined | null

    @Column_("text", {nullable: true})
    web!: string | undefined | null

    @Column_("text", {nullable: true})
    riot!: string | undefined | null

    @Column_("text", {nullable: true})
    email!: string | undefined | null

    @Column_("text", {nullable: true})
    pgpFingerprint!: string | undefined | null

    @Column_("text", {nullable: true})
    image!: string | undefined | null

    @Column_("text", {nullable: true})
    twitter!: string | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    createdAt!: Date
}
