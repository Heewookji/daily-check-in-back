import { MySQLOptions, PostgresOptions } from "../deps.ts";

export interface Config {
  postgresConfig: PostgresOptions;
  mysqlConfig: MySQLOptions;
  nessieConfig: any;
  jwtSecret: string;
}
