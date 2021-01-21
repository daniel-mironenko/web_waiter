import Api from "../../api";
import { AuthorizationStatus } from "../../enums";
import { loadState, saveState } from "../../session-storage";

const initialState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

let localState
try {
  localState = { ...initialState, ...loadState() }
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
        const userInfo = await Api.loginUser(data);
        dispatch(ActionCreator.loginSuccess(userInfo));
        saveState(getState().USER);
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
