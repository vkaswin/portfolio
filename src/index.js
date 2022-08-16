import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { SideBar } from "components";

import "assets/scss/abstracts.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="wrapper">
    <Router />
    <SideBar />
  </div>
);
