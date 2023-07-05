module.exports = class Data1686315273292 {
    name = 'Data1686315273292'

    async up(db) {
        await db.query(`CREATE TABLE "chain_info" ("id" character varying NOT NULL, "spec_version" integer NOT NULL, "transaction_version" integer NOT NULL, "genesis_hash" text NOT NULL, "block_hash" text NOT NULL, "block_number" integer NOT NULL, "existential_deposit" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "marketplace" jsonb, CONSTRAINT "PK_1b82ce2acbc16bfc7f84bfdc8ff" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_22cb998efc624a5d40f74361d9" ON "chain_info" ("block_number") `)
        await db.query(`CREATE TABLE "token_account" ("id" character varying NOT NULL, "balance" numeric NOT NULL, "reserved_balance" numeric NOT NULL, "locked_balance" numeric NOT NULL, "named_reserves" jsonb, "locks" jsonb, "approvals" jsonb, "is_frozen" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "collection_id" character varying, "token_id" character varying, CONSTRAINT "PK_6121d7a5eafbe71fba146a98fd3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7921fb23203316a5371f2be477" ON "token_account" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_85663600e62c10034824e4caea" ON "token_account" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_02862fa18dececb99dd81a6a6a" ON "token_account" ("token_id") `)
        await db.query(`CREATE TABLE "attribute" ("id" character varying NOT NULL, "key" text NOT NULL, "value" text NOT NULL, "deposit" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "collection_id" character varying, "token_id" character varying, CONSTRAINT "PK_b13fb7c5c9e9dff62b60e0de729" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_62d62253f33062b0e42352aab8" ON "attribute" ("key") `)
        await db.query(`CREATE INDEX "IDX_adaba2bde1f917be8521c42ebc" ON "attribute" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_8c947bde2aea695c9257d1eea8" ON "attribute" ("token_id") `)
        await db.query(`CREATE TABLE "bid" ("id" character varying NOT NULL, "price" numeric NOT NULL, "height" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "bidder_id" character varying, "listing_id" character varying, CONSTRAINT "PK_ed405dda320051aca2dcb1a50bb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e7618559409a903a897164156b" ON "bid" ("bidder_id") `)
        await db.query(`CREATE INDEX "IDX_facdd38f7948fbdd281063419b" ON "bid" ("listing_id") `)
        await db.query(`CREATE TABLE "listing_status" ("id" character varying NOT NULL, "type" character varying(9) NOT NULL, "height" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "listing_id" character varying, CONSTRAINT "PK_0524b292b49efd99751063f6ebc" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_904ee0675c88e7bdff412e6ffd" ON "listing_status" ("listing_id") `)
        await db.query(`CREATE TABLE "listing_sale" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "price" numeric NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "buyer_id" character varying, "listing_id" character varying, CONSTRAINT "PK_efbef68ee06ac54c263942f6fd0" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_318a2243e5f937e40c17cf2f19" ON "listing_sale" ("buyer_id") `)
        await db.query(`CREATE INDEX "IDX_fa60d30e1d3921417acd2ce741" ON "listing_sale" ("listing_id") `)
        await db.query(`CREATE TABLE "listing" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "price" numeric NOT NULL, "min_take_value" numeric NOT NULL, "fee_side" character varying(5) NOT NULL, "height" integer NOT NULL, "deposit" numeric NOT NULL, "salt" text NOT NULL, "data" jsonb NOT NULL, "state" jsonb NOT NULL, "highest_price" numeric NOT NULL, "dead_listing" boolean, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "seller_id" character varying, "make_asset_id_id" character varying, "take_asset_id_id" character varying, CONSTRAINT "PK_381d45ebb8692362c156d6b87d7" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_00e1e709436862a20ae074f111" ON "listing" ("seller_id") `)
        await db.query(`CREATE INDEX "IDX_9d1cea2a04a169d58f13cea7e8" ON "listing" ("make_asset_id_id") `)
        await db.query(`CREATE INDEX "IDX_00656ee0f326da82878ddc91be" ON "listing" ("take_asset_id_id") `)
        await db.query(`CREATE TABLE "trait" ("id" character varying NOT NULL, "trait_type" text NOT NULL, "value" text NOT NULL, "count" numeric NOT NULL, "collection_id" character varying, CONSTRAINT "PK_c5d145e577199fe58afbf2a1b2d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_641b9ad0c609f0a1ec747a05ce" ON "trait" ("collection_id") `)
        await db.query(`CREATE TABLE "trait_token" ("id" character varying NOT NULL, "trait_id" character varying, "token_id" character varying, CONSTRAINT "PK_4e57eb88e2621a0cc66431f9115" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_71850fdd62a5b8d25de4245e55" ON "trait_token" ("trait_id") `)
        await db.query(`CREATE INDEX "IDX_42c1cb4414e0240cf7e0ee8f96" ON "trait_token" ("token_id") `)
        await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "token_id" numeric NOT NULL, "supply" numeric NOT NULL, "is_frozen" boolean NOT NULL, "freeze_state" character varying(9), "cap" jsonb, "behavior" jsonb, "listing_forbidden" boolean NOT NULL, "unit_price" numeric, "minimum_balance" numeric NOT NULL, "mint_deposit" numeric NOT NULL, "attribute_count" integer NOT NULL, "non_fungible" boolean NOT NULL, "metadata" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "collection_id" character varying, "best_listing_id" character varying, "recent_listing_id" character varying, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_cab3c454b0419a03584a3990ce" ON "token" ("token_id") `)
        await db.query(`CREATE INDEX "IDX_65f74edd41f667e4645e59b61d" ON "token" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_3329305f7a90cd8be81342574a" ON "token" ("best_listing_id") `)
        await db.query(`CREATE INDEX "IDX_c767cb0b961c3e85c5978a582b" ON "token" ("recent_listing_id") `)
        await db.query(`CREATE TABLE "royalty_currency" ("id" character varying NOT NULL, "collection_id" character varying, "token_id" character varying, CONSTRAINT "PK_8b20fc27efc10e78ee3ac86fb17" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_e8b9ca718a67bb51d171240e0b" ON "royalty_currency" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_861e21e7c2777c9ef09bea2724" ON "royalty_currency" ("token_id") `)
        await db.query(`CREATE TABLE "collection_account" ("id" character varying NOT NULL, "is_frozen" boolean NOT NULL, "approvals" jsonb, "account_count" integer NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL, "account_id" character varying, "collection_id" character varying, CONSTRAINT "PK_149cc78cfb0b9c3da0f8a2ff5e9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2b2b641fd385385ba996c66098" ON "collection_account" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_a0ca7fffb7ae953536712abef2" ON "collection_account" ("collection_id") `)
        await db.query(`CREATE TABLE "collection" ("id" character varying NOT NULL, "collection_id" numeric NOT NULL, "mint_policy" jsonb NOT NULL, "market_policy" jsonb, "burn_policy" text, "transfer_policy" jsonb, "attribute_policy" text, "attribute_count" integer NOT NULL, "total_deposit" numeric NOT NULL, "metadata" jsonb, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "stats" jsonb NOT NULL, "owner_id" character varying, CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f7f39206eb394d7d788699c600" ON "collection" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_01d689ecc7eba32eaf962ad9d9" ON "collection" ("owner_id") `)
        await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "data" jsonb, "collection_id" text, "token_id" text, "extrinsic_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_129efedcb305c80256db2d57a5" ON "event" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_d70aaf185af2624511a80ff879" ON "event" ("collection_id") `)
        await db.query(`CREATE INDEX "IDX_d201bf824cd72132b9e72785c9" ON "event" ("token_id") `)
        await db.query(`CREATE TABLE "account_token_event" ("id" character varying NOT NULL, "from_id" character varying, "to_id" character varying, "event_id" character varying, "token_id" character varying, CONSTRAINT "PK_c37a7fda674246b4860508b876d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_98871cac0c6c4e3d02e9dba219" ON "account_token_event" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_3fdcf5dfb12f3dd04d468cb6ca" ON "account_token_event" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_aaa1cf924ed392764b0bace1ad" ON "account_token_event" ("event_id") `)
        await db.query(`CREATE INDEX "IDX_87fb00cfed5217b47de01f5856" ON "account_token_event" ("token_id") `)
        await db.query(`CREATE TABLE "claim" ("id" character varying NOT NULL, "amount" numeric NOT NULL, "extrinsic_id" text NOT NULL, "extrinsic_hash" text NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "account_id" character varying, CONSTRAINT "PK_466b305cc2e591047fa1ce58f81" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f1b34350a4500236d1f9e788cd" ON "claim" ("account_id") `)
        await db.query(`CREATE INDEX "IDX_24528e3c38f12c28bf002e9c18" ON "claim" ("block_number") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "address" text NOT NULL, "nonce" integer NOT NULL, "balance" jsonb NOT NULL, "token_values" numeric NOT NULL, "last_update_block" integer, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_83603c168bc00b20544539fbea" ON "account" ("address") `)
        await db.query(`CREATE TABLE "extrinsic" ("id" character varying NOT NULL, "hash" text NOT NULL, "block_number" integer NOT NULL, "block_hash" text NOT NULL, "success" boolean NOT NULL, "pallet" text NOT NULL, "method" text NOT NULL, "args" jsonb, "signature" jsonb NOT NULL, "nonce" integer NOT NULL, "tip" numeric, "fee" jsonb, "error" text, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL, "participants" text array NOT NULL, "signer_id" character varying, CONSTRAINT "PK_80d7db0e4b1e83e30336bc76755" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_1f45de0713a55049009e8e8127" ON "extrinsic" ("hash") `)
        await db.query(`CREATE INDEX "IDX_142f352835c698a35eacbeb2f5" ON "extrinsic" ("block_number") `)
        await db.query(`CREATE INDEX "IDX_886be421c92f221ac8234c6624" ON "extrinsic" ("signer_id") `)
        await db.query(`ALTER TABLE "token_account" ADD CONSTRAINT "FK_7921fb23203316a5371f2be4777" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_account" ADD CONSTRAINT "FK_85663600e62c10034824e4caea3" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_account" ADD CONSTRAINT "FK_02862fa18dececb99dd81a6a6a9" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "attribute" ADD CONSTRAINT "FK_adaba2bde1f917be8521c42ebc0" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "attribute" ADD CONSTRAINT "FK_8c947bde2aea695c9257d1eea83" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_e7618559409a903a897164156b7" FOREIGN KEY ("bidder_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "bid" ADD CONSTRAINT "FK_facdd38f7948fbdd281063419b5" FOREIGN KEY ("listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing_status" ADD CONSTRAINT "FK_904ee0675c88e7bdff412e6ffd0" FOREIGN KEY ("listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing_sale" ADD CONSTRAINT "FK_318a2243e5f937e40c17cf2f19c" FOREIGN KEY ("buyer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing_sale" ADD CONSTRAINT "FK_fa60d30e1d3921417acd2ce741b" FOREIGN KEY ("listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing" ADD CONSTRAINT "FK_00e1e709436862a20ae074f111b" FOREIGN KEY ("seller_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing" ADD CONSTRAINT "FK_9d1cea2a04a169d58f13cea7e8b" FOREIGN KEY ("make_asset_id_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "listing" ADD CONSTRAINT "FK_00656ee0f326da82878ddc91be8" FOREIGN KEY ("take_asset_id_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "trait" ADD CONSTRAINT "FK_641b9ad0c609f0a1ec747a05ce3" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_71850fdd62a5b8d25de4245e550" FOREIGN KEY ("trait_id") REFERENCES "trait"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "trait_token" ADD CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_65f74edd41f667e4645e59b61df" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_3329305f7a90cd8be81342574ac" FOREIGN KEY ("best_listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token" ADD CONSTRAINT "FK_c767cb0b961c3e85c5978a582b6" FOREIGN KEY ("recent_listing_id") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "royalty_currency" ADD CONSTRAINT "FK_e8b9ca718a67bb51d171240e0be" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "royalty_currency" ADD CONSTRAINT "FK_861e21e7c2777c9ef09bea27245" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collection_account" ADD CONSTRAINT "FK_2b2b641fd385385ba996c66098f" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collection_account" ADD CONSTRAINT "FK_a0ca7fffb7ae953536712abef23" FOREIGN KEY ("collection_id") REFERENCES "collection"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "collection" ADD CONSTRAINT "FK_01d689ecc7eba32eaf962ad9d96" FOREIGN KEY ("owner_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_129efedcb305c80256db2d57a59" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_98871cac0c6c4e3d02e9dba2197" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_3fdcf5dfb12f3dd04d468cb6ca9" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_aaa1cf924ed392764b0bace1ad1" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account_token_event" ADD CONSTRAINT "FK_87fb00cfed5217b47de01f58562" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "claim" ADD CONSTRAINT "FK_f1b34350a4500236d1f9e788cda" FOREIGN KEY ("account_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_886be421c92f221ac8234c6624c" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "chain_info"`)
        await db.query(`DROP INDEX "public"."IDX_22cb998efc624a5d40f74361d9"`)
        await db.query(`DROP TABLE "token_account"`)
        await db.query(`DROP INDEX "public"."IDX_7921fb23203316a5371f2be477"`)
        await db.query(`DROP INDEX "public"."IDX_85663600e62c10034824e4caea"`)
        await db.query(`DROP INDEX "public"."IDX_02862fa18dececb99dd81a6a6a"`)
        await db.query(`DROP TABLE "attribute"`)
        await db.query(`DROP INDEX "public"."IDX_62d62253f33062b0e42352aab8"`)
        await db.query(`DROP INDEX "public"."IDX_adaba2bde1f917be8521c42ebc"`)
        await db.query(`DROP INDEX "public"."IDX_8c947bde2aea695c9257d1eea8"`)
        await db.query(`DROP TABLE "bid"`)
        await db.query(`DROP INDEX "public"."IDX_e7618559409a903a897164156b"`)
        await db.query(`DROP INDEX "public"."IDX_facdd38f7948fbdd281063419b"`)
        await db.query(`DROP TABLE "listing_status"`)
        await db.query(`DROP INDEX "public"."IDX_904ee0675c88e7bdff412e6ffd"`)
        await db.query(`DROP TABLE "listing_sale"`)
        await db.query(`DROP INDEX "public"."IDX_318a2243e5f937e40c17cf2f19"`)
        await db.query(`DROP INDEX "public"."IDX_fa60d30e1d3921417acd2ce741"`)
        await db.query(`DROP TABLE "listing"`)
        await db.query(`DROP INDEX "public"."IDX_00e1e709436862a20ae074f111"`)
        await db.query(`DROP INDEX "public"."IDX_9d1cea2a04a169d58f13cea7e8"`)
        await db.query(`DROP INDEX "public"."IDX_00656ee0f326da82878ddc91be"`)
        await db.query(`DROP TABLE "trait"`)
        await db.query(`DROP INDEX "public"."IDX_641b9ad0c609f0a1ec747a05ce"`)
        await db.query(`DROP TABLE "trait_token"`)
        await db.query(`DROP INDEX "public"."IDX_71850fdd62a5b8d25de4245e55"`)
        await db.query(`DROP INDEX "public"."IDX_42c1cb4414e0240cf7e0ee8f96"`)
        await db.query(`DROP TABLE "token"`)
        await db.query(`DROP INDEX "public"."IDX_cab3c454b0419a03584a3990ce"`)
        await db.query(`DROP INDEX "public"."IDX_65f74edd41f667e4645e59b61d"`)
        await db.query(`DROP INDEX "public"."IDX_3329305f7a90cd8be81342574a"`)
        await db.query(`DROP INDEX "public"."IDX_c767cb0b961c3e85c5978a582b"`)
        await db.query(`DROP TABLE "royalty_currency"`)
        await db.query(`DROP INDEX "public"."IDX_e8b9ca718a67bb51d171240e0b"`)
        await db.query(`DROP INDEX "public"."IDX_861e21e7c2777c9ef09bea2724"`)
        await db.query(`DROP TABLE "collection_account"`)
        await db.query(`DROP INDEX "public"."IDX_2b2b641fd385385ba996c66098"`)
        await db.query(`DROP INDEX "public"."IDX_a0ca7fffb7ae953536712abef2"`)
        await db.query(`DROP TABLE "collection"`)
        await db.query(`DROP INDEX "public"."IDX_f7f39206eb394d7d788699c600"`)
        await db.query(`DROP INDEX "public"."IDX_01d689ecc7eba32eaf962ad9d9"`)
        await db.query(`DROP TABLE "event"`)
        await db.query(`DROP INDEX "public"."IDX_129efedcb305c80256db2d57a5"`)
        await db.query(`DROP INDEX "public"."IDX_d70aaf185af2624511a80ff879"`)
        await db.query(`DROP INDEX "public"."IDX_d201bf824cd72132b9e72785c9"`)
        await db.query(`DROP TABLE "account_token_event"`)
        await db.query(`DROP INDEX "public"."IDX_98871cac0c6c4e3d02e9dba219"`)
        await db.query(`DROP INDEX "public"."IDX_3fdcf5dfb12f3dd04d468cb6ca"`)
        await db.query(`DROP INDEX "public"."IDX_aaa1cf924ed392764b0bace1ad"`)
        await db.query(`DROP INDEX "public"."IDX_87fb00cfed5217b47de01f5856"`)
        await db.query(`DROP TABLE "claim"`)
        await db.query(`DROP INDEX "public"."IDX_f1b34350a4500236d1f9e788cd"`)
        await db.query(`DROP INDEX "public"."IDX_24528e3c38f12c28bf002e9c18"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_83603c168bc00b20544539fbea"`)
        await db.query(`DROP TABLE "extrinsic"`)
        await db.query(`DROP INDEX "public"."IDX_1f45de0713a55049009e8e8127"`)
        await db.query(`DROP INDEX "public"."IDX_142f352835c698a35eacbeb2f5"`)
        await db.query(`DROP INDEX "public"."IDX_886be421c92f221ac8234c6624"`)
        await db.query(`ALTER TABLE "token_account" DROP CONSTRAINT "FK_7921fb23203316a5371f2be4777"`)
        await db.query(`ALTER TABLE "token_account" DROP CONSTRAINT "FK_85663600e62c10034824e4caea3"`)
        await db.query(`ALTER TABLE "token_account" DROP CONSTRAINT "FK_02862fa18dececb99dd81a6a6a9"`)
        await db.query(`ALTER TABLE "attribute" DROP CONSTRAINT "FK_adaba2bde1f917be8521c42ebc0"`)
        await db.query(`ALTER TABLE "attribute" DROP CONSTRAINT "FK_8c947bde2aea695c9257d1eea83"`)
        await db.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_e7618559409a903a897164156b7"`)
        await db.query(`ALTER TABLE "bid" DROP CONSTRAINT "FK_facdd38f7948fbdd281063419b5"`)
        await db.query(`ALTER TABLE "listing_status" DROP CONSTRAINT "FK_904ee0675c88e7bdff412e6ffd0"`)
        await db.query(`ALTER TABLE "listing_sale" DROP CONSTRAINT "FK_318a2243e5f937e40c17cf2f19c"`)
        await db.query(`ALTER TABLE "listing_sale" DROP CONSTRAINT "FK_fa60d30e1d3921417acd2ce741b"`)
        await db.query(`ALTER TABLE "listing" DROP CONSTRAINT "FK_00e1e709436862a20ae074f111b"`)
        await db.query(`ALTER TABLE "listing" DROP CONSTRAINT "FK_9d1cea2a04a169d58f13cea7e8b"`)
        await db.query(`ALTER TABLE "listing" DROP CONSTRAINT "FK_00656ee0f326da82878ddc91be8"`)
        await db.query(`ALTER TABLE "trait" DROP CONSTRAINT "FK_641b9ad0c609f0a1ec747a05ce3"`)
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_71850fdd62a5b8d25de4245e550"`)
        await db.query(`ALTER TABLE "trait_token" DROP CONSTRAINT "FK_42c1cb4414e0240cf7e0ee8f968"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_65f74edd41f667e4645e59b61df"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_3329305f7a90cd8be81342574ac"`)
        await db.query(`ALTER TABLE "token" DROP CONSTRAINT "FK_c767cb0b961c3e85c5978a582b6"`)
        await db.query(`ALTER TABLE "royalty_currency" DROP CONSTRAINT "FK_e8b9ca718a67bb51d171240e0be"`)
        await db.query(`ALTER TABLE "royalty_currency" DROP CONSTRAINT "FK_861e21e7c2777c9ef09bea27245"`)
        await db.query(`ALTER TABLE "collection_account" DROP CONSTRAINT "FK_2b2b641fd385385ba996c66098f"`)
        await db.query(`ALTER TABLE "collection_account" DROP CONSTRAINT "FK_a0ca7fffb7ae953536712abef23"`)
        await db.query(`ALTER TABLE "collection" DROP CONSTRAINT "FK_01d689ecc7eba32eaf962ad9d96"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_129efedcb305c80256db2d57a59"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_98871cac0c6c4e3d02e9dba2197"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_3fdcf5dfb12f3dd04d468cb6ca9"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_aaa1cf924ed392764b0bace1ad1"`)
        await db.query(`ALTER TABLE "account_token_event" DROP CONSTRAINT "FK_87fb00cfed5217b47de01f58562"`)
        await db.query(`ALTER TABLE "claim" DROP CONSTRAINT "FK_f1b34350a4500236d1f9e788cda"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_886be421c92f221ac8234c6624c"`)
    }
}
