'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define(
    'School',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING(180),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      document: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {}
  );
  School.associate = function (models) {
    // associations can be defined here
  };
  return School;
};
