import { createConnection } from "typeorm";

async function run() {
  try {
    await createConnection("default");

    // Only imports server after initializing database
    const { default: Server } = await import("./server");
    const { SERVER_PORT = "4500" } = process.env;

    const server = new Server(SERVER_PORT);
    server.start();
  } catch (err) {
    console.log("Failed to run API. " + err);
  }
}

run();
