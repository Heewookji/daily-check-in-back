import { AbstractMigration, Info, ClientPostgreSQL } from "../../deps.ts";

export default class extends AbstractMigration<ClientPostgreSQL> {
    async up({ dialect }: Info): Promise<void> {
        await this.client.queryArray("CREATE TABLE users (id int, name varchar(30))");
    }

    async down({ dialect }: Info): Promise<void> {
        await this.client.queryArray("DROP TABLE users");
    }
}
