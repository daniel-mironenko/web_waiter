import Api from "../../api";
import { loadState, removeState, saveState } from "../../session-storage";
import { Adapter } from "../../adapter";
import { ActionCreator as OrdersActionCreator } from "../orders/orders-reducer";

const initialState = {
  userData: null,
  authStatus: false
};

let localState
try {
  localState = { ...initialState, ...loadState("userState") }
} catch (e) {
  localState = initialState
}

const ActionType = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
};

export const ActionCreator = {
  loginSuccess(userData) {
    return {
      type: ActionType.LOGIN_SUCCESS,
      payload: userData
    }
  },
  logout() {
    return {
      type: ActionType.LOGOUT,
      payload: null
    }
  },
};

export const Operation = {
  login(data, onSuccess, onError) {
    return async (dispatch, getState) => {
      try {
        const response = await Api.loginUser(data);
        const userInfo = Adapter.getLoginUser(response);
        const orders = userInfo.orders.map(order => Adapter.getOrder(order));
        delete userInfo.orders;
        dispatch(ActionCreator.loginSuccess(userInfo));
        dispatch(OrdersActionCreator.loadActiveOrdersSuccess(orders))
        saveState("userState", getState().USER);
        onSuccess();
      } catch (e) {
        onError();
      }
    }
  },
  logout() {
    return (dispatch) => {
     removeState("userState");
      dispatch(ActionCreator.logout());
      dispatch(OrdersActionCreator.clearActiveOrders());
    }
  },
}

export function reducer(state = localState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return { ...state, userData: action.payload, authStatus: true };

    case ActionType.LOGOUT:
      return {...state, userData: null, authStatus: false}

    default:
      return state;
  }
};
