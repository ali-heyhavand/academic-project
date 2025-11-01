import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css//bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ThemeProvider } from "react-bootstrap";
import "boxicons/css/boxicons.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter basename="/academic-project">
    <ThemeProvider dir="rtl">
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
