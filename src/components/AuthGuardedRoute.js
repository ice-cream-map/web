import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import { checkAuth, logout, selectSignin } from "../slices/loginSlice";
import Loading from "./Loading";

export function AuthGuardedRoute({ children, ...rest }) {
  const { loading, loggedIn, error, roles } = useSelector(selectSignin);
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
    const { from } = location.state || { from: { pathname: "/" } };

    if (loggedIn) {
      if (isLoginPagePathname) {
        return (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from },
            }}
          />
        );
      }

      return (
        <>
          <Redirect
            to={{
              pathname: `/${roles}`,
              state: { from },
            }}
          />
          {children}
        </>
      );
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
