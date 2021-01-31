import { NameSpace } from "./name-space";
import { reducer as userReducer } from "./user/user-reducer";
import { reducer as ordersReducer } from "./orders/orders-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.ORDERS]: ordersReducer,
})