import { AbstractSeed, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.4/mod.ts";

export default class extends AbstractSeed<ClientMySQL> {
    /** Runs on seed */
    async run(info: Info): Promise<void> {
        await this.client.execute("INSERT INTO user VALUES (1, 'user1')");
    }
}
