import { Model, DataTypes, BelongsToGetAssociationMixin, NonAttribute, ForeignKey, Association } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { Role } from "./role.model";

export class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare name: string; // Virtual field
  declare block: string;
  declare lot: string;
  declare street: string;
  declare completeAddress: string;
  declare isHomeowner: boolean;
  declare isOfficer: boolean;
  declare isAdmin: boolean;
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
  block: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  street: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completeAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isHomeowner: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  isOfficer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: "users",
});
