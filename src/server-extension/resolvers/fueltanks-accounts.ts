/* eslint-disable max-classes-per-file */
import { Query, Resolver, Arg, ObjectType, Field } from 'type-graphql'
import 'reflect-metadata'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { hexToU8a } from '@polkadot/util'
import config from '../../config'

const wsProvider = new WsProvider(config.dataSource.chain as string)
const apiPromise = ApiPromise.create({
    provider: wsProvider,
})

const customTypes = {
    UserFuelBudget: {
        amount: 'PalletFuelTanksBudget',
        userCount: 'Compact<u32>',
    },
}

@ObjectType()
class UserFuelBudgetAmountType {
    @Field({ nullable: false })
    amount!: string

    @Field({ nullable: false })
    resetPeriod!: number

    constructor(props: Partial<UserFuelBudgetAmountType>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class UserFuelBudgetType {
    @Field({ nullable: false })
    amount!: UserFuelBudgetAmountType

    @Field({ nullable: false })
    userCount!: number

    constructor(props: Partial<UserFuelBudgetType>) {
        Object.assign(this, props)
    }
}

@ObjectType()
class FuelTanksAccountsResult {
    @Field({ nullable: false })
    tankDeposit!: string

    @Field({ nullable: false })
    userDeposit!: number

    @Field({ nullable: true })
    userFuelBudget?: UserFuelBudgetType

    constructor(props: Partial<FuelTanksAccountsResult>) {
        Object.assign(this, props)
    }
}

@Resolver()
export class FuelTanksAccountsResolver {
    @Query(() => FuelTanksAccountsResult, { nullable: true })
    async fuelTanksAccounts(
        @Arg('fuelTank', {
            description: 'address of fuelTank',
        })
        fuelTank: string,
        @Arg('account', {
            description: 'address of account',
        })
        account: string
    ): Promise<FuelTanksAccountsResult | null> {
        const api = await apiPromise
        api.registerTypes(customTypes)

        const res = await api.query.fuelTanks.accounts(fuelTank, account)

        const resJson: any = res.toJSON()

        if (!resJson) {
            return null
        }

        let userFuelBudget: undefined | UserFuelBudgetType

        if (resJson && resJson.ruleDataSets && resJson.ruleDataSets[0] && resJson.ruleDataSets[0].UserFuelBudget) {
            userFuelBudget = res.registry
                .createType('UserFuelBudget', hexToU8a(resJson.ruleDataSets[0].UserFuelBudget))
                .toJSON() as any
        }

        return {
            tankDeposit: resJson.tankDeposit,
            userDeposit: resJson.userDeposit,
            userFuelBudget,
        }
    }
}
