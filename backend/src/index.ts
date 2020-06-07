import { createConnection } from "typeorm";

async function run() {
  try {
    await createConnection("default");

    // It waits for the connection to be created before importing server
    // and, consequently, controllers that depends on database
    const { default: Server } = await import("./server");
    const server = new Server(4500);
    server.start();
  } catch (err) {
    console.log("Failed to run API. " + err);
  }
}

run();
