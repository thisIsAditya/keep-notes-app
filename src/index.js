import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import configAppStore from "./redux/store";

export const { store } = configAppStore();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
