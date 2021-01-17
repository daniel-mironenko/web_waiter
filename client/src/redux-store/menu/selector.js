import { NameSpace } from "../name-space";
import { createSelector } from 'reselect'
import { convertToHashTable } from "../../utils/menu-helper";

function getCatalogs(state) {
  return state[NameSpace.MENU].catalogs;
}

function getProducts(state) {
  return state[NameSpace.MENU].products;
}

export const getMenu = createSelector(
  getCatalogs,
  getProducts,
  (catalogs, products) => convertToHashTable([...catalogs, ...products])
);


export const getNotAvailableProducts = createSelector(
  // getMenu,
  // (menu) => Object.values(menu)
  //   .filter(it => it.type === "product" && !it.isAvailable)
);