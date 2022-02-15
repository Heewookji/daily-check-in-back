import {MysqlClient} from "../deps.ts";
import { config } from "./config.ts";

const dbClient = new MysqlClient().connect(config.dbConfig);

export { dbClient };
