import fs from 'fs';

const modelsPath = __dirname;

let models: any = {};

fs.readdirSync(modelsPath).forEach((model) => {
  const modelFile = require(`${modelsPath}/${model}`);
  models[model.split('.')[0]] = modelFile;
});

export default models;
