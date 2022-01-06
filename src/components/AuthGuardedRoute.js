import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { checkAuth, logout, selectSignin } from "../slices/loginSlice";
import Loading from "./Loading";

export function AuthGuardedRoute({ children, ...rest }) {
  const { loading, loggedIn, error } = useSelector(selectSignin);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Route
        {...rest}
        render={({ location }) => renderRoutedComponent(location)}
      />
    </>
  );

  function renderRoutedComponent(location) {
    const isLoginPagePathname = location.pathname.includes("login");

    if (loggedIn) {
      if (isLoginPagePathname) {
        const { from } = location.state || { from: { pathname: "/" } };

        return (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from },
            }}
          />
        );
      }

      return <>{children}</>;
    } else {
      if (isLoginPagePathname) {
        return children;
      }

      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
    }
  }
}
