import {userMock} from "../../mock/user-mock";

const initialState = {
  userData: userMock
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
