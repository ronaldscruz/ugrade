import "reflect-metadata";

import express from "express";
import { createConnection } from "typeorm";

import routes from "./routes";

class Server {
  app = express();
  port: number;

  constructor(port: number) {
    this.port = port;

    this.loadRoutes();
    this.loadParsers();
  }

  loadRoutes() {
    this.app.use(routes);
  }

  loadParsers() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  async start() {
    try {
      await createConnection();
      this.app.listen(this.port);
    } catch (err) {
      console.log("Failed starting server/database. " + err);
    }
  }
}

export default Server;
