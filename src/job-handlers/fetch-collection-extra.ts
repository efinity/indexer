import Queue from 'bull'
import connection from '../connection'
import { JobData } from '../jobs/fetch-collection-extra'
import { fetchCollectionsExtra } from '../mappings/util/marketplace'
import { Collection, CollectionFlags, CollectionSocials } from '../model'
import { computeTraits } from '../jobs/compute-traits'
import { syncCollectionStats } from '../jobs/collection-stats'

function isNotNull<T>(input: null | T): input is T {
    return input != null
}

export default async (job: Queue.Job<JobData>, done: Queue.DoneCallback) => {
    if (!connection.isInitialized) {
        await connection.initialize().catch((err) => {
            throw err
        })
    }

    const em = connection.manager

    const { ids } = job.data

    const data = await fetchCollectionsExtra(ids)

    const collectionsPromise = data.filter(isNotNull).map(async (_c) => {
        const collection = new Collection({})
        collection.hidden = _c.hidden
        collection.category = _c.category
        collection.flags = new CollectionFlags({
            featured: _c.featured,
            hiddenForLegalReasons: _c.hiddenForLegalReasons,
            verified: false,
        })
        collection.socials = new CollectionSocials({
            discord: _c.discord,
            twitter: _c.twitter,
            instagram: _c.instagram,
            medium: _c.medium,
            tiktok: _c.tiktok,
            website: _c.website,
        })

        syncCollectionStats(_c.collectionId)
        computeTraits(_c.collectionId)

        await em.update(Collection, { id: _c.collectionId }, collection as any).catch((err) => {
            // eslint-disable-next-line no-console
            console.error('Error: Updating collection', _c.collectionId, err)
        })
    })

    await Promise.all(collectionsPromise)

    done(null, data)
}
