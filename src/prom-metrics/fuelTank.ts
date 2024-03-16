/* eslint-disable @typescript-eslint/naming-convention */
import client from 'prom-client'
import register from './registry'
import connection from '../connection'

export const indexer_fueltanks_tanks_total = new client.Gauge({
    name: 'indexer_fueltanks_tanks_total',
    labelNames: ['fueltank'],
    help: 'The total number of fuel tanks.',
    registers: [register],
})

export const indexer_fueltanks_calls_dispatched_total = new client.Gauge({
    name: 'indexer_fueltanks_calls_dispatched_total',
    labelNames: ['fueltank'],
    help: 'The total number of calls dispatched using a fuel tank.',
    registers: [register],
})

export const indexer_fueltanks_enj_consumed_total = new client.Gauge({
    name: 'indexer_fueltanks_enj_consumed_total',
    labelNames: ['fueltank'],
    help: 'The total amount of ENJ consumed through the use of fuel tanks.',
    registers: [register],
})

export const indexer_fueltanks_enj_subsidy_avg = new client.Gauge({
    name: 'indexer_fueltanks_enj_subsidy_avg',
    labelNames: ['fueltank'],
    help: 'The average amount of ENJ that’s subsidized by a fuel tank.',
    registers: [register],
})

export default async () => {
    if (!connection.isInitialized) {
        await connection.initialize().catch(() => {
            throw Error('Failed to initialize connection')
        })
    }

    const em = connection.manager

    const [tanks, dispatchedTotal, enjConsumed] = await Promise.all([
        em.query('SELECT COUNT(*) FROM fuel_tank'),
        em.query('SELECT COUNT(*) FROM extrinsic WHERE fuel_tank IS NOT NULL'),
        em.query("SELECT SUM((fuel_tank->>'feePaid')::numeric) / POW(10,18) as sum FROM extrinsic WHERE fuel_tank IS NOT NULL"),
    ])

    indexer_fueltanks_tanks_total.set(Number(tanks[0].count))
    indexer_fueltanks_calls_dispatched_total.set(Number(dispatchedTotal[0].count))
    indexer_fueltanks_enj_consumed_total.set(Number(enjConsumed[0].sum))
    indexer_fueltanks_enj_subsidy_avg.set(Number(enjConsumed[0].sum) / Number(dispatchedTotal[0].count))
}
