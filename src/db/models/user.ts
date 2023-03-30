import { DataType } from "sequelize-typescript";
import db from "../index";

const User = db.define("User", {
  id: {
    type: DataType.UUIDV4,
    allowNull: false,
  },
  username: {
    type: DataType.STRING,
    allowNull: false,
  },
  address: {
    type: DataType.STRING,
    allowNull: true,
  },
});

export default User;
