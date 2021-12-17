import { MysqlClient } from "../deps.ts";
import { config } from "./config.ts";

export const dbClient = await new MysqlClient().connect(config.dbConfig);
