import { Database, PostgresConnector } from '../deps.ts';
import { config } from "./config.ts";

const connection = new PostgresConnector(config.DBConfig);

export const db = new Database(connection);
