import Api from "../../api";
import { AuthorizationStatus } from "../../enums";
import { loadState, saveState } from "../../session-storage";
import Adapter from "../../adapter";
import { ActionCreator as OrdersActionCreator } from "../orders/orders-reducer";

const initialState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

let localState
try {
  localState = { ...initialState, ...loadState("userState") }
} catch (e) {
  localState = initialState
}

const ActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
};

const ActionCreator = {
  loginSuccess(userData) {
    return {
      type: ActionType.LOGIN_SUCCESS,
      payload: userData
    }
  },
};

export const Operation = {
  login(data, onSuccess, onError) {
    return async (dispatch, getState) => {
      try {
        const response = await Api.loginUser(data);
        const userInfo = Adapter.getLoginUser(response);
        const orders = Adapter.getOrders(userInfo.orders);
        delete userInfo.orders;
        dispatch(ActionCreator.loginSuccess(userInfo));
        dispatch(OrdersActionCreator.loadActiveOrdersSuccess(orders))
        saveState("userState", getState().USER);
        saveState("ordersState", getState().ORDERS);
        onSuccess();
      } catch (e) {
        onError();
      }
    }
  }
}

export function reducer(state = localState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return { ...state, userData: action.payload, authorizationStatus: AuthorizationStatus.AUTH };

    default:
      return state;
  }
};
