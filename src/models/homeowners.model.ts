import { Model, DataTypes, ForeignKey } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { User } from "./user.model";

export class Homeowner extends Model {
  declare id: number;
  declare userId: ForeignKey<User['id']>; // Foreign key to User model
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

  /**
   * Checks if the homeowner has arrears
   * @returns boolean
   */
  public async hasArrears(): Promise<boolean> {
    return this.arrears > 0;
  };
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
  previousWaterReading: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  currentWaterReading: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  toPay: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  isWaterCutOff: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  arrears: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  sequelize,
  tableName: "homeowners",
});
