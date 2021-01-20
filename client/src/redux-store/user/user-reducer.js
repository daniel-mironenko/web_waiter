import Api from "../../api";
import {userMock} from "../../mock/user-mock";

const initialState = {
  userData: null
};

const ActionType = {
  LOAD_USER_DATA: "LOAD_USER_DATA"
};

 const ActionCreator = {
  loadUserData(userData) {
    return {
      type: ActionType.LOAD_USER_DATA,
      payload: userData
    }
  }
};

export const Operation = {
  login(data, onSuccess, onError) {
    return async (dispatch) => {
      try {
        const userInfo = await Api.loginUser(data);
        dispatch(ActionCreator.loadUserData(userInfo));
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
      return Object.assign(state, {
        userData: action.payload
      })

    default: 
      return state;
  }
};
