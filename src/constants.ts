import dotenvSafe from "dotenv-safe";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenvSafe.config({
  path: resolve(__dirname, "..", ".env"),
  example: resolve(__dirname, "..", ".env.example"),
  allowEmptyValues: true,
});

export const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DBNAME } = <
  { [key: string]: string }
>process.env;
