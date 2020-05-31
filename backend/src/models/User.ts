import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
import db from '../database/connection';

class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Users',
    sequelize: db,
    paranoid: true,
  }
);

User.beforeCreate('hashes password', async (user) => {
  try {
    user.password = await bcrypt.hash(user.password, 10);
  } catch (err) {
    return Promise.reject(new Error('Failed encrypting user password.'));
  }
});

export default User;
