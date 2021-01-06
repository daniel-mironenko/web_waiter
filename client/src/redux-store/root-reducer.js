import { NameSpace } from "./name-space";
import { reducer as userReducer } from "./user/user-reducer";
import { reducer as tablesReducer } from "./tables/tables-reducer";
import { reducer as menuReducer } from "./menu/menu-reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  [NameSpace.USER]: userReducer,
  [NameSpace.TABLES]: tablesReducer,
  [NameSpace.MENU]: menuReducer
})