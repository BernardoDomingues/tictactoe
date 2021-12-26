import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { GamesProvider } from "./providers/game";

ReactDOM.render(
  <React.StrictMode>
    <GamesProvider>
      <App />
    </GamesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
