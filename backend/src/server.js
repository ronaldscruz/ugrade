require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const auth = require('./auth')();

const { SERVER_PORT, JWT_SECRET } = process.env;

class UgradeServer {
  constructor(serverPort, sessionSecret) {
    this.app = express();
    this.serverPort = serverPort;
    this.sessionSecret = sessionSecret;
  }

  start() {
    this.static();
    this.parsers();
    this.session();
    this.routes();

    this.app.listen(SERVER_PORT || 4500, () => {
      console.log('> Server running at', SERVER_PORT);
    });
  }

  static() {
    this.app.use(express.static('../public'));
  }

  parsers() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  session() {
    auth.initialize();
  }

  routes() {
    return this;
  }
}

new UgradeServer(SERVER_PORT, JWT_SECRET).start();
