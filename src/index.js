import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
