import {
  Database,
  DataTypes,
  Model,
  MySQLConnector,
  PostgresConnector,
} from "../deps.ts";
import { config } from "./config.ts";

const postgresConnection = new PostgresConnector(config.postgresConfig);
const mysqlConnection = new MySQLConnector(config.mysqlConfig);

const db = new Database(mysqlConnection);
export { DataTypes, db, Model };
