require('dotenv').config();

const {
  DB_USER = 'postgres',
  DB_PASS = '',
  DB_NAME = 'ugrade',
  DB_HOST = 'localhost',
} = process.env;

module.exports = {
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  host: DB_HOST,
  dialect: 'postgres',
};
