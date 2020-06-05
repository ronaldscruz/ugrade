'use strict';

import { QueryInterface } from 'sequelize/types';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING(200),
        allowNull: false,
        validate: {
          isEmail: true,
        },
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.dropTable('Users');
  },
};
