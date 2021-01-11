import { NameSpace } from "../name-space";
import { createSelector } from 'reselect'

export function getMenu(state) {
  return state[NameSpace.MENU].menu;
}

export const getNotAvailableProducts = createSelector(
  // getMenu,
  // (menu) => Object.values(menu)
  //   .filter(it => it.type === "product" && !it.isAvailable)
);