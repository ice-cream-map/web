import "@material-tailwind/react/tailwind.css";
import "tailwindcss/tailwind.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/app";
import OwnerPanel from "./pages/ownerPage";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
