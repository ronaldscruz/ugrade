'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      description: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    },
    {}
  );
  Role.associate = function (models) {
    // associations can be defined here
  };
  return Role;
};
