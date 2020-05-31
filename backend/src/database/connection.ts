import { Sequelize } from 'sequelize';
import config from './config';

const { NODE_ENV = 'development' } = process.env;
const { database, username, password, host, dialect } = config[NODE_ENV];

export default new Sequelize(database, username, password, {
  host,
  dialect,
});
