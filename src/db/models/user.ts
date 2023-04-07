import { DataType } from "sequelize-typescript";
import db from "../index";

// will most likely refactor to classes
const User = db.define("User", {
  id: {
    type: DataType.UUIDV4,
    allowNull: false,
  },
  username: {
    primaryKey: true,
    type: DataType.STRING,
    allowNull: false,
  },
  evm_address: {
    type: DataType.STRING,
    allowNull: true,
  },
  authorized: {
    type: DataType.BOOLEAN,
    defaultValue: true,
    allowNull: false,
  },
});

export type UserType = typeof User;

export default User;
