import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "../reducers";

export const storeFn = () => {
  return createStore(rootReducer);
};
