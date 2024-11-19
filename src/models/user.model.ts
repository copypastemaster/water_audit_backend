import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";

export class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public name!: string; // Virtual field
  public createdAt!: Date;
  public updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.getDataValue('firstName')} ${this.getDataValue('lastName')}`;
    },
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: "Users",
});
