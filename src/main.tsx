import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/Store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/hermosas-ciudade-cubanas-2-react-frontend/">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
