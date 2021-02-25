import { BrowserRouter, Switch, Route } from "react-router-dom"
import { appRoute } from "./enums";
import PrivatOfficePage from './pages/privat-office-page/privat-office-page';
import LoginPage from "./pages/login-page/login-page";
import ErrorPage from "./pages/error-page/error-page";
import PrivateRoute from "./components/private-route/private-route";
import OrderPage from "./pages/order-page/order-page";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path={appRoute.PRIVAT_OFFICE} component={PrivatOfficePage} />
        <Route exact path={`${appRoute.LOGIN}`} component={LoginPage} />
        <PrivateRoute exact path={`${appRoute.ORDER}/:id`} component={OrderPage} />
        <Route>
          <ErrorPage message={"Page not found"} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
