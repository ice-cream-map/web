import React from "react";
import LoginForm from "../components/LoginForm";
import { AuthGuardedRoute } from "../components/AuthGuardedRoute";
import { Switch } from "react-router-dom";
import AdminPanel from "../pages/adminPage";
import OwnerPanel from "../pages/ownerPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <AuthGuardedRoute exact path="/Admin" role="Admin">
          <AdminPanel />
        </AuthGuardedRoute>
        <AuthGuardedRoute exact path="/ShopOwner" role="ShopOwner">
          <OwnerPanel />
        </AuthGuardedRoute>
        <AuthGuardedRoute path={["/", "/login"]}>
          <LoginForm />
        </AuthGuardedRoute>
      </Switch>
    </div>
  );
}

export default App;
