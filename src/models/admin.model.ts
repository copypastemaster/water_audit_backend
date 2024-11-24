import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { User } from "./user.model";

export class Admin extends Model {
  declare id: number;
  declare userId: number; // Foreign key to User model
  declare createdAt: Date;
  declare updatedAt: Date;
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
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: "admins",
});
