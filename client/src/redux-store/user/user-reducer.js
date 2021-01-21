import Api from "../../api";
import { AuthorizationStatus } from "../../enums";

const initialState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

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
    return async (dispatch) => {
      try {
        const userInfo = await Api.loginUser(data);
        dispatch(ActionCreator.loginSuccess(userInfo));
        onSuccess();
      } catch (e) {
        onError();
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return { ...state, userData: action.payload, authorizationStatus: AuthorizationStatus.AUTH };

    default:
      return state;
  }
};
