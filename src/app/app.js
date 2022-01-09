import React from "react";
import LoginForm from "../components/LoginForm";
import { AuthGuardedRoute } from "../components/AuthGuardedRoute";
import { Route, Switch, Link } from "react-router-dom";
import AdminPanel from "../pages/adminPage";
import OwnerPanel from "../pages/ownerPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthGuardedRoute exact path={["/", "/Admin"]}>
          <AdminPanel />
        </AuthGuardedRoute>
        <AuthGuardedRoute exact path={["/", "/ShopOwner/Add", "/ShopOwner"]}>
          <OwnerPanel />
        </AuthGuardedRoute>
        <AuthGuardedRoute path="/login">
          <LoginForm />
        </AuthGuardedRoute>
      </Switch>
    </div>
  );
}

export default App;
