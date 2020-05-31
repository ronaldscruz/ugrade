'use strict';

import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import sequelize from '../database/connection';

let db: any = {};

fs.readdirSync(__dirname)
  .filter(
    (file: string) =>
      file.indexOf('.') !== 0 &&
      file !== path.basename(__filename) &&
      file.slice(-3) === '.ts'
  )
  .forEach((file: string) => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
