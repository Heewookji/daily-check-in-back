import {nessieConfig, MysqlClient} from "./deps.ts";
import { config } from "./src/config.ts";

const configPg: nessieConfig = {
  client: new MysqlClient("./migrations", {
    ...config.dbConfig,
  }),
};

export default configPg;
