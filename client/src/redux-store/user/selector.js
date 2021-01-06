import { NameSpace } from "../name-space";

export function getUserData(state) {
  return state[NameSpace.USER].userData;
} 