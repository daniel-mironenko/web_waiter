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
import PageLoader from "./components/page-loader/page-loader";
import { useLoadStatus } from "./hooks"

export default function App() {
  const { isLoaded, setIsLoaded, error, setError } = useLoadStatus();
  const authStatus = useSelector(getAuthStatus);
  const user = useSelector(getUserData);
  const dispatch = useDispatch();

  function onSuccessLoad() {
    setIsLoaded(true);
  }

  function onErrorLoad(error) {
    setError(error);
  }

  useEffect(() => {
    if (authStatus) {
      dispatch(OrdersOperation.loadActiveOrders(user.id, onSuccessLoad, onErrorLoad));
    }
  }, [])

  if (error) {
    return <ErrorPage message={error} />
  } else if (!isLoaded) {
    return (
      <PageLoader />
    )
  } else {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path={appRoute.PRIVAT_OFFICE} component={PrivatOfficePage} />
          <Route exact path={`${appRoute.LOGIN}`} component={LoginPage} />
          <PrivateRoute exact path={`${appRoute.ORDER}/:id`} component={OrderPage} />
          <Route>
            <ErrorPage message={"Страница не найдена"} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
};
