import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import Userprovider from "./store/UserContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Userprovider>
        <App />
      </Userprovider>
    </Router>
  </React.StrictMode>,
  rootElement
);
