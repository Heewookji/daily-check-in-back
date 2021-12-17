import "https://deno.land/x/dotenv/load.ts";
import { Config } from "./types.ts";
import { ClientConfig, envConfig } from "../deps.ts";

envConfig();

const dbConfig: ClientConfig = {
  hostname: Deno.env.get("DB_HOST"),
  port: +Deno.env.get("DB_PORT")!,
  username: Deno.env.get("DB_USER"),
  db: Deno.env.get("DB_DATABASE"),
  password: Deno.env.get("DB_PASSWORD"),
};

export const config: Config = {
  dbConfig,
  jwtSecret: Deno.env.get("JWT_SECRET")!,
};
