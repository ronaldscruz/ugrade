export default interface DatabaseConfig {
  username: string;
  password?: string;
  database: string;
  host: string;
  dialect: 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | undefined;
  operatorsAliases: boolean;
}
