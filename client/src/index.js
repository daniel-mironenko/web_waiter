import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux-store/root-reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Operation as OrdersOperation } from "./redux-store/orders/orders-reducer";
import ErrorPage from './pages/error-page/error-page';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

const user = store.getState().USER;

function renderDOM() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

function onSuccess() {
  renderDOM();
}

function onError() {
  ReactDOM.render(
    <ErrorPage message={"Ошибка, попробуйте перезагрузить страницу"} isGoBack={false} />,
    document.getElementById('root')
  );
}

if (user.authStatus) {
  store.dispatch(OrdersOperation.loadActiveOrders(user.userData.id, onSuccess, onError));
} else {
  renderDOM();
}

