import { BrowserRouter, Switch, Route } from "react-router-dom"
import { appRoute } from "./enums";
import PrivatOfficePage from './pages/privat-office-page/privat-office-page';
import LoginPage from "./pages/login-page/login-page";
import ErrorPage from "./pages/error-page/error-page";
import PrivateRoute from "./components/private-route/private-route";
import OrderPage from "./pages/order-page/order-page";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthStatus, getUserData } from "./redux-store/user/selector";
import { Operation as OrdersOperation } from "./redux-store/orders/orders-reducer";

export default function App() {
  const authStatus =  useSelector(getAuthStatus);
  const user = useSelector(getUserData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authStatus) {
      dispatch(OrdersOperation.loadActiveOrders(user.id));
    }
  }, [])

  // Добавить Лоудер

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={appRoute.PRIVAT_OFFICE} component={PrivatOfficePage} />
        <Route exact path={`${appRoute.LOGIN}`} component={LoginPage} />
        <PrivateRoute exact path={`${appRoute.TABLE}/:number`} component={OrderPage} />
        <Route>
          <ErrorPage message={"Страница не найдена"} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
