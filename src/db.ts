import { Database, PostgresConnector, MySQLConnector } from '../deps.ts';
import { config } from "./config.ts";

const postgresConnection = new PostgresConnector(config.postgresConfig);
const mysqlConnection = new MySQLConnector(config.mysqlConfig);

export const db = new Database(postgresConnection);
