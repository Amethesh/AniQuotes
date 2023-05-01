import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/extensions
import App from "./App.tsx";
import "./styles/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
