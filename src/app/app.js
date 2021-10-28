import React from "react";
import LoginForm from "../components/LoginForm";
import { AuthGuardedRoute } from "../components/AuthGuardedRoute";
import { Route, Switch, Link } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthGuardedRoute exact path={["/", "/index.html"]}>
          <LandingPage />
        </AuthGuardedRoute>
        <AuthGuardedRoute path="/login">
          <LoginForm />
        </AuthGuardedRoute>
      </Switch>
    </div>
  );
}

export default App;
