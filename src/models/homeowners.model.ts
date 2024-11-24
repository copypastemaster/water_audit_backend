import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { User } from "./user.model";

export class Homeowner extends Model {
  declare id: number;
  declare userId: number; // Foreign key to User model
  declare block: string;
  declare lot: string;
  declare street: string;
  declare completeAddress: string;
  declare previousWaterReading: number;
  declare currentWaterReading: number;
  declare toPay: number;
  declare isWaterCutOff: boolean;
  declare arrears: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

Homeowner.init({
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
  tableName: "homeowners",
});
