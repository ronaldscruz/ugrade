import DatabaseConfig from '../interfaces/DatabaseConfig';

const { DEV_DB_USER = 'root', DEV_DB_PASS, DEV_DB_NAME = 'database' } = process.env;

interface AllDatabaseConfig {
  [key: string]: DatabaseConfig;
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: DatabaseConfig;
}

const development: DatabaseConfig = {
  username: DEV_DB_USER,
  password: DEV_DB_PASS,
  database: DEV_DB_NAME,
  host: '127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false,
};

const test: DatabaseConfig = {
  username: 'root',
  password: '',
  database: 'database_test',
  host: '127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false,
};

const production: DatabaseConfig = {
  username: 'root',
  password: '',
  database: 'database_production',
  host: '127.0.0.1',
  dialect: 'postgres',
  operatorsAliases: false,
};

const config: AllDatabaseConfig = {
  development,
  test,
  production,
};

export default config;
