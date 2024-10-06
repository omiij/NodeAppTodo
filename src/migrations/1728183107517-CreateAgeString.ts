import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAgeString1728183107517 implements MigrationInterface {
  name = "CreateAgeString1728183107517";

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Allow NULL values for the age column
    await queryRunner.query(`ALTER TABLE "user" ADD "age" integer`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "age"`);
  }
}
