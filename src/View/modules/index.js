import { combineReducers } from "redux";
import CommonRedux from "./CommonRedux";
import AccountRedux from "./AccountRedux";

const rootReducer = combineReducers({
  CommonRedux,
  AccountRedux,
});

export default rootReducer;
