import { DataTypes, Model } from 'sequelize';
import db from '../database/connection';

class Role extends Model {
  public id!: number;
  public description!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Role.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: 'Roles',
    sequelize: db,
  }
);

export default Role;
