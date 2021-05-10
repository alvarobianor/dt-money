import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Comedor de casadas",
          amount: 100,
          type: "deposit",
          category: "food",
          createdAt: new Date(),
        },
        {
          id: 1,
          title: "Nestlê",
          amount: 500,
          type: "withdraw",
          category: "food",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
