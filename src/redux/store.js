import { combineReducers, createStore } from "redux";
import { readProduct } from "./Reducer/ProductReduce";

export const Store = createStore(
  combineReducers({
    product: readProduct,
  })
);
