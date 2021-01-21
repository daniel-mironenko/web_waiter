import Api from "../../api";
import { AuthorizationStatus } from "../../enums";

const initialState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH
};

const ActionType = {
  LOAD_USER_DATA: "LOAD_USER_DATA",
  CHANGE_AUTH_STATUS: "CHANGE_AUTH_STATUS"
};

const ActionCreator = {
  loadUserData(userData) {
    return {
      type: ActionType.LOAD_USER_DATA,
      payload: userData
    }
  },
  changeAuthStatus(authStatus) {
    return {
      type: ActionType.CHANGE_AUTH_STATUS,
      payload: authStatus
    }
  }
};

export const Operation = {
  login(data, onSuccess, onError) {
    return async (dispatch) => {
      try {
        const userInfo = await Api.loginUser(data);
        dispatch(ActionCreator.loadUserData(userInfo));
        dispatch(ActionCreator.changeAuthStatus(AuthorizationStatus.AUTH));
        onSuccess();
      } catch (e) {
        onError();
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_USER_DATA:
      return { ...state, userData: action.payload };

    case ActionType.CHANGE_AUTH_STATUS:
      return { ...state, authorizationStatus: action.payload };

    default:
      return state;
  }
};
