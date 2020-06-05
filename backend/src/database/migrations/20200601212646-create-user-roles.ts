'use strict';

import { QueryInterface } from 'sequelize/types';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.createTable('UserRoles', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  down: (queryInterface: QueryInterface, Sequelize: any) => {
    queryInterface.dropTable('UserRoles');
  },
};
