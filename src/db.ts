import { MysqlClient } from "../deps.ts";
import { config } from "./config.ts";

const db = await new MysqlClient().connect(config.dbConfig) as MysqlClient;

class Model {
}

export { db, Model };
