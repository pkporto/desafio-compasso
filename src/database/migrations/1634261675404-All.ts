import {MigrationInterface, QueryRunner} from "typeorm";

export class All1634261675404 implements MigrationInterface {
    name = 'All1634261675404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Clients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birth" TIMESTAMP NOT NULL, "age" integer NOT NULL, "city_id" integer, CONSTRAINT "PK_8dadaa0dc6305d95e1d1a6b9544" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_21ae4232868104702703893428e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Clients" ADD CONSTRAINT "FK_c2e11b3c3a88341d3110348c08b" FOREIGN KEY ("city_id") REFERENCES "Cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Clients" DROP CONSTRAINT "FK_c2e11b3c3a88341d3110348c08b"`);
        await queryRunner.query(`DROP TABLE "Cities"`);
        await queryRunner.query(`DROP TABLE "Clients"`);
    }

}
