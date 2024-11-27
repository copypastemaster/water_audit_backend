import { Model, DataTypes, ForeignKey } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { User } from "./user.model";

export class Homeowner extends Model {
  declare id: number;
  declare userId: ForeignKey<User['id']>; // Foreign key to User model
  declare previousWaterReading: number;
  declare currentWaterReading: number;
  declare toPay: number;
  declare isWaterCutOff: boolean;
  declare arrears: number;

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
    defaultValue: 0,
  },
  isWaterCutOff: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  arrears: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 0,
  }
}, {
  sequelize,
  tableName: "homeowners",
});
