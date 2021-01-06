import { NameSpace } from "../name-space";
import { createSelector } from 'reselect'

export function getMainMenu(state) {
  return state[NameSpace.MENU].mainMenu;
}

export function getAdditiveMenu(state) {
  return state[NameSpace.MENU].additiveMenu;
}

export const getNotAvailableProducts = createSelector(
  getMainMenu,
  (menu) => Object.values(menu.nodes)
    .filter(it => it.type === "product" && !it.isAvailable)
);