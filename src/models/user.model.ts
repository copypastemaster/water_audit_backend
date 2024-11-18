import { Model, DataTypes } from "sequelize";
import sequelize from "../configs/database.config";

class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public name!: string;
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
},
  {
    sequelize,
    tableName: "users",
  }
)