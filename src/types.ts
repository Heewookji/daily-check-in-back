import { PostgresOptions, MySQLOptions } from "../deps.ts";

export interface Config {
  postgresConfig: PostgresOptions;
  mysqlConfig: MySQLOptions;
  nessieConfig: any,
  jwtSecret: string;
}

// export interface IUser {
//   id: string;
//   password: string;
//   name: string;
//   email: string;
// }
//
// export interface IPost {
//   id: string;
//   title: string;
//   body: string;
//   user: Partial<Omit<IUser, "password">>;
// }
