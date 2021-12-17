import {NessieConfig, ClientMySQL} from "./deps.ts";
import { config } from "./src/config.ts";


const client = new ClientMySQL(config.dbConfig);

/** This is the final config object */
const configPg: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default configPg;
