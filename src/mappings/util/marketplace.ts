import axios from 'axios'
import config from '../../config'

const addressesQuery = `query AddressesQuery($ids: [String!]) {
    result: AddressesVerification(publicKeys:$ids){
      publicKey
      username
      image
      verified
      verifiedDate
    }
  }`

const collectionsQuery = `query CollectionsQuery($ids: [String!]) {
    result: CollectionsExtra(collectionIds:$ids){
      collectionId
      hidden
      hiddenForLegalReasons
      category
      featured
      verifiedAt
      twitter
      discord
      instagram
      website
      medium
      tiktok
    }
  }`

type AddressVerification = {
    username?: string
    publicKey: string
    image?: string
    verified: boolean
    verifiedDate: string
}

type CollectionExtra = {
    collectionId: string
    hidden: boolean
    hiddenForLegalReasons: boolean
    category: string | null
    featured: boolean
    verifiedAt: string | null
    twitter: string | null
    discord: string | null
    instagram: string | null
    website: string | null
    medium: string | null
    tiktok: string | null
}

export async function fetchAccountsDetail(ids: string[]) {
    try {
        const { data } = await axios.post<{ data: { result: AddressVerification[] } } | { errors: any }>(
            `${config.marketplaceUrl}/graphql/internal`,
            {
                query: addressesQuery,
                variables: {
                    ids,
                },
            },
            {
                headers: {
                    'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID,
                    'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET,
                },
            }
        )

        if ('errors' in data) throw new Error(JSON.stringify(data.errors[0]))
        if (!data.data) {
            // eslint-disable-next-line no-console
            console.error('No data returned', data)
            throw new Error('No data returned')
        }

        return ids.map((id) => {
            const account = data.data.result.find((i) => i.publicKey === id)
            if (!account) return null
            return {
                publicKey: id,
                username: account.username || null,
                image: account.image || null,
                verifiedAt: account.verified ? new Date(account.verifiedDate) : null,
            }
        })
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error: Fetching account details', ids, error)
        return ids.map(() => null)
    }
}

export async function fetchCollectionsExtra(ids: string[]) {
    try {
        const { data } = await axios.post<{ data: { result: CollectionExtra[] } } | { errors: any }>(
            `${config.marketplaceUrl}/graphql/internal`,
            {
                query: collectionsQuery,
                variables: {
                    ids,
                },
            },
            {
                headers: {
                    'CF-Access-Client-Id': process.env.CF_ACCESS_CLIENT_ID,
                    'CF-Access-Client-Secret': process.env.CF_ACCESS_CLIENT_SECRET,
                },
            }
        )

        if ('errors' in data) throw new Error(JSON.stringify(data.errors[0]))
        if (!data.data) {
            throw new Error('No data returned')
        }

        return data.data.result
    } catch (error) {
        throw new Error(`Error: Fetching collection details ${error}`)
    }
}
