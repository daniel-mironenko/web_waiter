import { createSelector } from "reselect";
import { NameSpace } from "../name-space";

export function getActiveOrders(state) {
  return state[NameSpace.ORDERS].activeOrders;
}

export function getClosedTables(state) {
  return state[NameSpace.TABLES].closedTables;
}

export const getDaysClosedTables = createSelector(
  getClosedTables,
  (closedTables) => Object.keys(closedTables).sort((a, b) => new Date(b) - new Date(a))
);
