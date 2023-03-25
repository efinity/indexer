import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Collection} from "./collection.model"
import {TraitToken} from "./traitToken.model"

@Entity_()
export class Trait {
    constructor(props?: Partial<Trait>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @ManyToOne_(() => Collection, {nullable: true})
    collection!: Collection

    @Column_("text", {nullable: false})
    traitType!: string

    @Column_("text", {nullable: false})
    value!: string

    @Column_("int4", {nullable: false})
    count!: number

    @OneToMany_(() => TraitToken, e => e.trait)
    tokens!: TraitToken[]
}
