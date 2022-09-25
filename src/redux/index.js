import { combineReducers } from "redux";
import error from "./reducers/error";
import notes from "./reducers/note";
const createRootReducer = () =>
  combineReducers({
    error: error,
    notes: notes,
  });

export default createRootReducer;
