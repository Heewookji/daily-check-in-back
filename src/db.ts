import { Client } from "../deps.ts";
import { config } from "./config.ts";

export const dbClient = await new Client().connect(config.dbConfig);
