import dotenvSafe from "dotenv-safe";
import { resolve } from "path";

dotenvSafe.config({
  path: resolve(__dirname, "..", ".env"),
});

export const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DBNAME } = <
  { [key: string]: string }
>process.env;
