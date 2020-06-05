import { Sequelize } from 'sequelize/types';

module.exports = (sequelize: any, DataTypes: any) => {
  const UserRoles = sequelize.define('UserRoles', {});

  return UserRoles;
};
