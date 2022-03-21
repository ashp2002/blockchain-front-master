import { combineReducers } from "redux";
import CommonRedux from "./CommonRedux";
import AccountRedux from "./AccountRedux";
import TableRedux from "./TableRedux";

const rootReducer = combineReducers({
  CommonRedux,
  AccountRedux,
  TableRedux,
});

export default rootReducer;
