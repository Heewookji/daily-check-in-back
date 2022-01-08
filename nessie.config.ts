import { ClientPostgreSQL, NessieConfig } from "./deps.ts";
import { config } from "./src/config.ts";

const client = new ClientPostgreSQL(config.nessieConfig);

/** This is the final config object */
const configPg: NessieConfig = {
  client,
  migrationFolders: ["./db/migrations"],
  seedFolders: ["./db/seeds"],
};

export default configPg;
