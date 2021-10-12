import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1634075883623 implements MigrationInterface {
    name = 'CreateTables1634075883623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Clients" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "birth" TIMESTAMP NOT NULL, "age" integer NOT NULL, "user_id" integer, CONSTRAINT "PK_8dadaa0dc6305d95e1d1a6b9544" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Cities" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "state" character varying NOT NULL, CONSTRAINT "PK_21ae4232868104702703893428e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Clients" ADD CONSTRAINT "FK_7fbf0ccdd3214a8af9268292162" FOREIGN KEY ("user_id") REFERENCES "Cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Clients" DROP CONSTRAINT "FK_7fbf0ccdd3214a8af9268292162"`);
        await queryRunner.query(`DROP TABLE "Cities"`);
        await queryRunner.query(`DROP TABLE "Clients"`);
    }

}
