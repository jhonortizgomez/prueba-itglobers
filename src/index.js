import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { App } from "@components/App";
import { storeFn } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = storeFn();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
