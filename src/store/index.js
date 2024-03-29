// eslint-disable-next-line
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "../reducers";
let store;
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
