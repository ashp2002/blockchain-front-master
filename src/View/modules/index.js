import { combineReducers } from "redux";
import CommonRedux from "./CommonRedux";
import AccountRedux from "./AccountRedux";
import BoardRedux from "./BoardRedux";

const rootReducer = combineReducers({
  CommonRedux,
  AccountRedux,
  BoardRedux,
});

export default rootReducer;
