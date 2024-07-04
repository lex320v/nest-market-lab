import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1720124595171 implements MigrationInterface {
  name = 'Initial1720124595171';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "example" ("id" SERIAL NOT NULL, "is_used" boolean NOT NULL, "key" character varying NOT NULL, "info" character varying NOT NULL, CONSTRAINT "PK_608dd5fd6f0783062b07346ed1c" PRIMARY KEY ("id"))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "example"`);
  }

}
