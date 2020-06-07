require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  DB_HOST = "localhost",
  DB_PORT = 5432,
  DB_USER = "postgres",
  DB_PASS = "",
  DB_NAME = "ugrade",
} = process.env;

module.exports = {
  name: "default",
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/**/*.ts"],
  migrations: ["src/database/migration/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entity",
    migrationsDir: "src/database/migration",
    subscribersDir: "src/subscriber",
  },
};
