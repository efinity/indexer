module.exports = class Data1716192673832 {
    name = 'Data1716192673832'

    async up(db) {
        await db.query(`ALTER TABLE "collection" ADD "verified_at" TIMESTAMP WITH TIME ZONE`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "collection" DROP COLUMN "verified_at"`)
    }
}
