import { combineReducers } from "redux";
import CommonRedux from "./CommonRedux";
import AccountRedux from "./AccountRedux";
import BoardRedux_Faq from "./BoardRedux_Faq";
import BoardRedux_Inquiry from "./BoardRedux_Inquiry";
import BoardRedux_Notice from "./BoardRedux_Notice";
import BoardRedux_Supports from "./BoardRedux_Supports";

const rootReducer = combineReducers({
  CommonRedux,
  AccountRedux,
  BoardRedux_Faq,
  BoardRedux_Inquiry,
  BoardRedux_Notice,
  BoardRedux_Supports,
});

export default rootReducer;
