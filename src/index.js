import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
