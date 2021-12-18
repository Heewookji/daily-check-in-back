import { AbstractSeed, Info, ClientPostgreSQL } from "../../deps.ts";

export default class extends AbstractSeed<ClientPostgreSQL> {
    /** Runs on seed */
    async run(info: Info): Promise<void> {
        await this.client.queryObject("INSERT INTO users VALUES (1, 'user1')");
    }
}
