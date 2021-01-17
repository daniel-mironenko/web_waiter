import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { appRoute } from "./enums";
import PrivatOffice from './pages/privat-office/privat-office';
import Table from './pages/table/table';
import { rootReducer } from "./redux-store/root-reducer";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import Login from "./pages/login/login";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={`${appRoute.LOGIN}`} component={Login} />
          <Route exact path={appRoute.PRIVAT_OFFICE} component={PrivatOffice} />
          <Route exact path={`${appRoute.TABLE}/:number`} component={Table} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
};

export default App;
