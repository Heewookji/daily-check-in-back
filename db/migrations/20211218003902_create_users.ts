import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.4/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    async up({ dialect }: Info): Promise<void> {
        await this.client.execute("CREATE TABLE user (id int, name varchar(30))");
    }

    async down({ dialect }: Info): Promise<void> {
        await this.client.execute("DROP TABLE user");
    }
}