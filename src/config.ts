import "https://deno.land/x/dotenv/load.ts";
import { Config } from "./types.ts";
import { PostgresOptions, envConfig } from "../deps.ts";

envConfig();

const DBConfig: PostgresOptions = {
  database: Deno.env.get("DB_DATABASE")!,
  host: Deno.env.get("DB_HOST")!,
  username: Deno.env.get("DB_USER")!,
  password: Deno.env.get("DB_PASSWORD")!,
  port: +Deno.env.get("DB_PORT")!,
};

const nessieDBConfig = {
  database: Deno.env.get("DB_DATABASE")!,
  hostname: Deno.env.get("DB_HOST")!,
  user: Deno.env.get("DB_USER")!,
  password: Deno.env.get("DB_PASSWORD")!,
  port: +Deno.env.get("DB_PORT")!,
};

export const config: Config = {
  DBConfig,
  nessieDBConfig,
  jwtSecret: Deno.env.get("JWT_SECRET")!,
};
