import React from "react";
import { asyncAPI, APIRequest } from "../Common/Common";

const LIST_LOAD_SUCCESS = "board/inquirylist/success";
const LIST_LOAD_FETCH = "board/inquirylist/fetch";
const LIST_LOAD_FAILED = "board/inquirylist/failed";
const LIST_LOAD_CLEAR = "board/inquirylist/clear";

const ITEM_LOAD_SUCCESS = "board/inquiryitemload/success";
const ITEM_LOAD_FETCH = "board/inquiryitemload/fetch";
const ITEM_LOAD_FAILED = "board/inquiryitemload/failed";
const ITEM_LOAD_CLEAR = "board/inquiryitemload/clear";

const ITEM_INPUT_SUCCESS = "board/inquiryiteminput/success";
const ITEM_INPUT_FETCH = "board/inquiryiteminput/fetch";
const ITEM_INPUT_FAILED = "table/inquiryiteminput/failed";

const ITEM_DELETE_SUCCESS = "board/inquiryitemdelete/success";
const ITEM_DELETE_FETCH = "board/inquiryitemdelete/fetch";
const ITEM_DELETE_FAILED = "board/inquiryitemdelete/failed";
////////////////// Load List ////////////////////
export const loadSuccess = (result) => ({
  type: LIST_LOAD_SUCCESS,
  result,
});
export const loadFetch = () => ({
  type: LIST_LOAD_FETCH,
});
export const loadFailed = () => ({
  type: LIST_LOAD_FAILED,
});
export const loadClear = () => ({
  type: LIST_LOAD_CLEAR,
});

////////////////// Load ItemInfo ////////////////////
export const loadItemSuccess = (result) => ({
  type: ITEM_LOAD_SUCCESS,
  result,
});
export const loadItemFetch = () => ({
  type: ITEM_LOAD_FETCH,
});
export const loadItemFailed = () => ({
  type: ITEM_LOAD_FAILED,
});
export const loadItemClear = () => ({
  type: ITEM_LOAD_CLEAR,
});

////////////////// Input Item ////////////////////
export const inputItemSuccess = () => ({
  type: ITEM_INPUT_SUCCESS,
});
export const inputItemFetch = () => ({
  type: ITEM_INPUT_FETCH,
});
export const inputItemFailed = () => ({
  type: ITEM_INPUT_FAILED,
});

////////////////// Delete Item ////////////////////
export const deleteItemSuccess = () => ({
  type: ITEM_DELETE_SUCCESS,
});
export const deleteItemFetch = () => ({
  type: ITEM_DELETE_FETCH,
});
export const deleteItemFailed = () => ({
  type: ITEM_DELETE_FAILED,
});

const initialState = {
  InquiryItems: [],
  InquiryFetching: false,
  InquiryItemInfo: [],
};

const BoardRedux_Inquiry = (state = initialState, action) => {
  //console.log("accout redux:", action, state);
  switch (action.type) {
    case LIST_LOAD_FETCH:
      console.log(" List Loading.. ", action, state);
      return {
        ...state,
        InquiryFetching: true,
      };

    case LIST_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        InquiryItems: action.result.data,
        InquiryFetching: false,
      };

    case LIST_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        InquiryFetching: false,
      };

    case LIST_LOAD_CLEAR:
      console.log(" List Clear.. ", action, state);
      return {
        ...state,
        InquiryItems: "",
        InquiryItemInfo: "",
      };

    case ITEM_LOAD_FETCH:
      console.log(" Item Loading.. ", action, state);
      return {
        ...state,
        InquiryFetching: true,
      };

    case ITEM_LOAD_CLEAR:
      console.log(" Item Clear.. ", action, state);
      return {
        ...state,
        InquiryFetching: "",
      };

    case ITEM_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        InquiryItemInfo: action.result,
        InquiryFetching: false,
      };

    case ITEM_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        InquiryFetching: false,
      };

    case ITEM_INPUT_FETCH:
      console.log(" Input Loading.. ", action, state);
      return {
        ...state,
        InquiryFetching: true,
      };

    case ITEM_INPUT_FAILED:
      console.log(" Input Fail", action, state);
      return {
        ...state,
        InquiryFetching: false,
      };

    case ITEM_INPUT_SUCCESS:
      console.log(" Input Success", action, state);
      return {
        ...state,
        InquiryFetching: false,
      };

    case ITEM_DELETE_FETCH:
      console.log(" Delete Loading.. ", action, state);
      return {
        ...state,
        InquiryFetching: true,
      };

    case ITEM_DELETE_FAILED:
      console.log(" Delete Fail", action, state);
      return {
        ...state,
        InquiryFetching: false,
      };

    case ITEM_DELETE_SUCCESS:
      console.log(" Delete Success", action, state);
      return {
        ...state,
        InquiryFetching: false,
        InquiryItemInfo: "",
      };

    default:
      return state;
  }
};

export default BoardRedux_Inquiry;
