import "reflect-metadata";

import express from "express";

import routes from "./routes";

class Server {
  app = express();
  port: number | string;

  constructor(port: number | string) {
    this.port = port;

    this.loadParsers();
    this.loadRoutes();
  }

  loadRoutes() {
    this.app.use(routes);
  }

  loadParsers() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  start() {
    console.log("🚀 Server running at " + this.port);
    this.app.listen(this.port);
  }
}

export default Server;
