import { NameSpace } from "../name-space";

export function getActiveOrders(state) {
  return state[NameSpace.ORDERS].activeOrders;
}

