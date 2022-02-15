import { MysqlConfig } from "../deps.ts";
import { User } from "./models/user.ts";

export interface Config {
  dbConfig: MysqlConfig;
  nessieConfig: any;
  firebaseConfig: FirebaseOptions;
}

export interface FirebaseOptions {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  databaseUrl: string;
  publicKeyUrl: string;
}

export interface ContextState {
  user: User | null;
}
