import { Model } from 'sequelize';
import db from '../database/connection';
import User from './User';
import Role from './Role';

class UserRole extends Model {}

UserRole.init(
  {},
  {
    tableName: 'UserRole',
    sequelize: db,
    timestamps: false,
  }
);

User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: 'user_id',
});

Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: 'role_id',
});

export default UserRole;
