import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { appRoute } from "../../enums";
import { getAuthStatus } from "../../redux-store/user/selector";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authStatus = useSelector(getAuthStatus);
  return (
    <Route
      {...rest}
      render={(props) => (
        authStatus ? (
          <Component {...props} />
        ) : (
          <Redirect to={appRoute.LOGIN} />
        )
      )}
    />
  );
}
