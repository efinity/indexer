module.exports = class Data1711496391339 {
    name = 'Data1711496391339'

    async up(db) {
        await db.query(`ALTER TABLE "token" ADD "last_sale_id" character varying`)
        await db.query(`CREATE INDEX "IDX_cd3552dc7426905ed6aa234add" ON "token" ("last_sale_id") `)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_cd3552dc7426905ed6aa234add1" FOREIGN KEY ("last_sale_id") REFERENCES "listing_sale"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`ALTER TABLE "token" DROP COLUMN "last_sale_id"`)
        await db.query(`DROP INDEX "public"."IDX_cd3552dc7426905ed6aa234add"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_cd3552dc7426905ed6aa234add1"`)
    }
}
