/* eslint-disable max-len */
import Queue from 'bull'
import { createHash } from 'crypto'
import isPlainObject from 'lodash/isPlainObject'
import connection from '../connection'
import { Collection, Token, Trait, TraitToken } from '../model'

type JobData = { collectionId: string }
type TraitValueMap = Map<string, { count: number }>

const traitsQueue = new Queue<JobData>('traitsQueue', {
    defaultJobOptions: { delay: 5000, attempts: 2, removeOnComplete: true },
})

const hash = (str: string) => {
    return createHash('sha1').update(str).digest('hex')
}

const computeTraits = async (collectionId: string) => {
    if (!collectionId) {
        throw new Error('Collection ID not provided.')
    }
    traitsQueue.add({ collectionId }, { jobId: collectionId })
}

// eslint-disable-next-line sonarjs/cognitive-complexity
traitsQueue.process(async (job, done) => {
    if (!job.data.collectionId) {
        throw new Error('Collection ID not provided.')
    }

    console.log(`Processing job ${job.id} for collection ${job.data.collectionId}`)

    await connection.initialize().catch((err) => {
        throw err
    })

    const em = connection.manager

    const traitTypeMap = new Map<string, TraitValueMap>()
    const tokenTraitMap = new Map<string, string[]>()

    const start = new Date()

    const { collectionId } = job.data satisfies JobData

    const tokens = await em
        .getRepository(Token)
        .createQueryBuilder('token')
        .select('token.id')
        .addSelect('token.metadata')
        .leftJoinAndMapMany('token.traits', TraitToken, 'traitToken', 'traitToken.token = token.id')
        .where('token.collection = :collectionId', { collectionId })
        .getMany()

    const traits = await em
        .getRepository(Trait)
        .createQueryBuilder('trait')
        .where('trait.collection = :collectionId', { collectionId })
        .getMany()

    console.log(`Fetched ${tokens.length} tokens and ${traits.length} traits in ${collectionId}`)

    tokens.forEach((token) => {
        if (!token.metadata || !token.metadata.attributes || !isPlainObject(token.metadata.attributes)) return
        const attributes = token.metadata.attributes as Record<string, { value: string }>
        Object.entries(attributes).forEach(([traitType, { value }]) => {
            if (!value) return

            if (!traitTypeMap.has(traitType)) {
                traitTypeMap.set(traitType, new Map())
            }
            const tType = traitTypeMap.get(traitType) as TraitValueMap
            if (!tType.has(value)) {
                tType.set(value, { count: 0 })
            }
            const traitValue = tType.get(value) as TraitValueMap extends Map<string, infer V> ? V : never
            traitValue.count += 1

            tokenTraitMap.set(token.id, [...(tokenTraitMap.get(token.id) || []), `${traitType}:${value}`])
        })
    })

    const traitsToSave: Trait[] = []
    const traitsToDelete: Trait[] = []
    const traitsToUpdate: Trait[] = []

    traitTypeMap.forEach((traitValueMap, traitType) => {
        traitValueMap.forEach((traitValue, value) => {
            const trait = traits.find((t) => t.id === hash(`${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}`))
            if (!trait) {
                traitsToSave.push(
                    new Trait({
                        id: hash(`${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}`),
                        collection: new Collection({ id: collectionId }),
                        traitType,
                        value,
                        count: traitValue.count,
                    })
                )
            } else if (trait.count !== traitValue.count) {
                trait.count = traitValue.count
                traitsToUpdate.push(trait)
            }
        })
    })

    traits.forEach((trait) => {
        if (
            !traitTypeMap.has(trait.traitType) ||
            !traitTypeMap.get(trait.traitType)?.has(trait.value) ||
            trait.id !== hash(`${collectionId}-${trait.traitType.toLowerCase()}-${trait.value.toLowerCase()}`)
        ) {
            traitsToDelete.push(trait)
        }
    })

    await em.upsert(Trait, [...traitsToSave, ...traitsToUpdate] as any, ['id'])

    const traitTokensToSave: TraitToken[] = []
    const traitTokensToDelete: TraitToken[] = []

    tokenTraitMap.forEach((_traits, _tokenId) => {
        if (!_traits.length) return

        const token = tokens.find((t) => t.id === _tokenId)

        _traits.forEach((t) => {
            const [traitType, value] = t.split(':')

            if (token?.traits.length) {
                for (let i = 0; i < token.traits.length; i += 1) {
                    const traitToken = token.traits[i]
                    if (traitToken.id === hash(`${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}-${_tokenId}`)) {
                        return
                    }

                    if (
                        !_traits.some((tt) => {
                            const splitted = tt.split(':')
                            return (
                                traitToken.id ===
                                hash(`${collectionId}-${splitted[0].toLowerCase()}-${splitted[1].toLowerCase()}-${_tokenId}`)
                            )
                        })
                    ) {
                        traitTokensToDelete.push(new TraitToken({ id: traitToken.id }))
                        return
                    }
                }
            }

            traitTokensToSave.push(
                new TraitToken({
                    id: hash(`${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}-${_tokenId}`),
                    trait: new Trait({ id: hash(`${collectionId}-${traitType.toLowerCase()}-${value.toLowerCase()}`) }),
                    token: new Token({ id: _tokenId }),
                })
            )
        })
    })

    console.log(
        `Saving TraitToken ${traitTokensToSave.length} and deleting ${traitTokensToDelete.length} in collection ${collectionId}`
    )
    await em
        .createQueryBuilder()
        .insert()
        .into(TraitToken)
        .values(traitTokensToSave as any)
        .orIgnore()
        .execute()
    await em.remove(traitTokensToDelete)
    await em.remove(traitsToDelete)

    done(null, { timeElapsed: new Date().getTime() - start.getTime(), collectionId })
})

export { traitsQueue, computeTraits }
