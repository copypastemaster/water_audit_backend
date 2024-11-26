import { Model, DataTypes, BelongsToGetAssociationMixin, NonAttribute, ForeignKey, Association } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { Role } from "./role.model";

export class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare name: string; // Virtual field
  declare createdAt: Date;
  declare updatedAt: Date;
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
  tableName: "users",
});
