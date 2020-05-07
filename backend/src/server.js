require('dotenv').config();

const express = require('express');

const app = express();

const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT || 4500, () => {
  console.log('> Server running at', SERVER_PORT);
});
