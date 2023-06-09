import {
  POSTGRES_DBNAME,
  POSTGRES_PASSWORD,
  POSTGRES_USER,
} from "../constants";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost.com:5432/${POSTGRES_DBNAME}`
);

export default sequelize;
