import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { appRoute, AuthorizationStatus } from "../../enums";
import { getAuthorizationStatus } from "../../redux-store/user/selector";

export default function PrivateRoute({ component: Component, ...rest }) {
  const authStatus = useSelector(getAuthorizationStatus);
  return (
    <Route
      {...rest}
      render={(props) => (
        authStatus === AuthorizationStatus.AUTH ? (
          <Component {...props} />
        ) : (
          <Redirect to={appRoute.LOGIN} />
        )
      )}
    />
  );
}
