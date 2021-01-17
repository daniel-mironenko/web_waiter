import Adapter from "../../adapter";
import Api from "../../api";

const initialState = {
  products: [],
  catalogs: [],
};

const ActionType = {
  LOAD_PRODUCTS: "LOAD_PRODUCTS",
  LOAD_CATALOGS: "LOAD_CATALOGS"
};

const ActionCreator = {
  loadProducts(products) {
    return {
      type: ActionType.LOAD_PRODUCTS,
      payload: products
    }
  },
  loadCatalogs(catalogs) {
    return {
      type: ActionType.LOAD_CATALOGS,
      payload: catalogs
    }
  }
};

export const Operation = {
  loadMenu(setIsLoaded, setError) {
    return async (dispatch) => {
      try {
        const menu = await Api.fetchMenu();
        const catalogs = Adapter.getCatalogs(menu.catalogs);
        const products = Adapter.getProducts(menu.products);
        dispatch(ActionCreator.loadCatalogs(catalogs));
        dispatch(ActionCreator.loadProducts(products));
        setIsLoaded(true);
      } catch (e) {
        setError(e)
        console.error(e);
      }
    }
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.LOAD_CATALOGS:
      return { ...state, catalogs: action.payload }

    case ActionType.LOAD_PRODUCTS:
      return { ...state, products: action.payload }

    default:
      return state
  }
}