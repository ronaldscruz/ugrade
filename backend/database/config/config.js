require('dotenv').config();

const { DEV_DB_USER, DEV_DB_PASS, DEV_DB_NAME } = process.env;

module.exports = {
  development: {
    username: DEV_DB_USER,
    password: DEV_DB_PASS,
    database: DEV_DB_NAME,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};
