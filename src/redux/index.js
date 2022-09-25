import { combineReducers } from "redux";
import error from "./reducers/error";
const createRootReducer = () =>
  combineReducers({
    error: error,
  });

export default createRootReducer;
