import { Model, DataTypes, ForeignKey } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { User } from "./user.model";

export class Admin extends User {
  declare id: number;
  declare userId: ForeignKey<User['id']>;
}

Admin.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: User,
      key: 'id',
    },
    allowNull: false,
  }
}, {
  sequelize,
  tableName: "admins",
});
