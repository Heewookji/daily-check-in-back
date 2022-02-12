import "https://deno.land/x/dotenv/load.ts";
import { Config, FirebaseOptions } from "./types.ts";
import {
  envConfig,
  // MySQLOptions,
  // PostgresOptions
} from "../deps.ts";

envConfig();

// const postgresConfig: PostgresOptions = {
//   database: Deno.env.get("DB_DATABASE")!,
//   host: Deno.env.get("DB_HOST")!,
//   username: Deno.env.get("DB_USER")!,
//   password: Deno.env.get("DB_PASSWORD")!,
//   port: +Deno.env.get("DB_PORT")!,
// };
//
// const mysqlConfig: MySQLOptions = {
//   database: Deno.env.get("DB_DATABASE")!,
//   host: Deno.env.get("DB_HOST")!,
//   username: Deno.env.get("DB_USER")!,
//   password: Deno.env.get("DB_PASSWORD")!,
//   port: +Deno.env.get("DB_PORT")!,
// };

const nessieConfig = {
  database: Deno.env.get("DB_DATABASE")!,
  hostname: Deno.env.get("DB_HOST")!,
  user: Deno.env.get("DB_USER")!,
  password: Deno.env.get("DB_PASSWORD")!,
  port: +Deno.env.get("DB_PORT")!,
};

const firebaseConfig: FirebaseOptions = {
  apiKey: Deno.env.get("FIREBASE_API_KEY")!,
  appId: Deno.env.get("FIREBASE_APP_ID")!,
  authDomain: Deno.env.get("FIREBASE_AUTH_DOMAIN")!,
  messagingSenderId: Deno.env.get("FIREBASE_MESSAGING_SENDER_ID")!,
  projectId: Deno.env.get("FIREBASE_PROJECT_ID")!,
  storageBucket: Deno.env.get("FIREBASE_STORAGE_BUCKET")!,
  databaseUrl: Deno.env.get("FIREBASE_DATABASE_URL")!,
  serviceAccountPath: Deno.env.get("FIREBASE_SERVICE_ACCOUNT_PATH")!,
};

export const config: Config = {
  // postgresConfig,
  // mysqlConfig,
  nessieConfig,
  firebaseConfig,
};
