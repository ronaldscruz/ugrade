'use strict';

import { QueryInterface } from 'sequelize/types';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.createTable('Roles', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      description: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.dropTable('Roles');
  },
};
