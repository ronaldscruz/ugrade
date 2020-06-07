import "reflect-metadata";

import express from "express";
import routes from "./routes";

class Server {
  app = express();
  port: number;

  constructor(port: number) {
    this.port = port;
  }

  loadRoutes() {
    this.app.use(routes);
  }

  loadParsers() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  start() {
    this.app.listen(this.port);
  }
}

export default Server;
