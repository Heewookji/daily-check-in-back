import { AbstractMigration, ClientPostgreSQL, Info } from "../../deps.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
  async up({ dialect }: Info): Promise<void> {
    await this.client.queryArray(
      "" +
        "CREATE TABLE users (" +
        "id serial primary key, " +
        "name varchar(30) not null, " +
        "email varchar(30) not null " +
        ")",
    );
  }

  async down({ dialect }: Info): Promise<void> {
    await this.client.queryArray("DROP TABLE users");
  }
}
