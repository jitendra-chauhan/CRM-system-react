import { Client, createClient } from "graphql-ws";

class SocketConnection {
  public client: any;

  init = (): Client => {
    if (!this.client) {
      this.client = createClient({
        url: "ws://localhost:5003/graphql",
      });

      this.client.on("message", (message: any) => {
        console.log("res :: ", message);
      });
      this.client.on("ping", () => {
        console.log("ping");
      });
    }

    return this.client;
  };
}

export const socketConnection = new SocketConnection().init;
