import Adapter from "../../adapter";
import Api from "../../api";
import { menu } from "../../mock/menu-mock"
import { convertToHashTable } from "../../utils/menu-helper";

const initialState = {
  menu: convertToHashTable(menu)
};

const ActionType = {
  LOAD_MENU: "LOAD_MENU"
};

const ActionCreator = {
  loadMenu(menu) {
    return {
      type: ActionType.LOAD_MENU,
      payload: menu
    }
  }
};

export const Operation = {
  loadMenu(onSuccess) {
    return async (dispatch) => {
      try {
        const menu = await Api.fetchMenu();
        const catalogs = Adapter.getCatalogs(menu.catalogs);
        const products = Adapter.getProducts(menu.products);
        const convertedMenu = convertToHashTable([...catalogs, ...products]);
        dispatch(ActionCreator.loadMenu(convertedMenu));
        onSuccess(convertedMenu);
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_MENU:
      return { ...state, menu: action.payload }

    default:
      return state
  }
}