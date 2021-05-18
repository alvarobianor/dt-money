import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Site da Farmacia",
          createdAt: new Date("2021-05-13 12:00:00"),
          type: "deposit",
          value: 500,
          category: "Dev",
        },
        {
          id: 2,
          title: "Divertimento manhooooso",
          createdAt: new Date("2021-05-14 09:00:00"),
          type: "withdraw",
          value: 300,
          category: "Extra office ;)",
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
