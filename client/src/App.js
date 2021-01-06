import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { appRoute } from "./enums";
import PrivatOffice from './pages/privat-office/privat-office';
import Table from './pages/table/table';
import { rootReducer } from "./redux-store/root-reducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={appRoute.PRIVAT_OFFICE} component={PrivatOffice} />
          <Route exact path={`${appRoute.TABLE}/:number`} component={Table} />
        </Switch>
      </BrowserRouter>
    </Provider>

  );
};

export default App;
