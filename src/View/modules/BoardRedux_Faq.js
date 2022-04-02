import React from "react";
import { asyncAPI, APIRequest } from "../Common/Common";

const LIST_LOAD_SUCCESS = "board/faqlist/success";
const LIST_LOAD_FETCH = "board/faqlist/fetch";
const LIST_LOAD_FAILED = "board/faqlist/failed";
const LIST_LOAD_CLEAR = "board/faqlist/clear";

const ITEM_LOAD_SUCCESS = "board/faqitemload/success";
const ITEM_LOAD_FETCH = "board/faqitemload/fetch";
const ITEM_LOAD_FAILED = "board/faqitemload/failed";
const ITEM_LOAD_CLEAR = "board/faqitemload/clear";

const ITEM_INPUT_SUCCESS = "board/faqiteminput/success";
const ITEM_INPUT_FETCH = "board/faqiteminput/fetch";
const ITEM_INPUT_FAILED = "board/faqiteminput/failed";

const ITEM_DELETE_SUCCESS = "board/faqitemdelete/success";
const ITEM_DELETE_FETCH = "board/faqitemdelete/fetch";
const ITEM_DELETE_FAILED = "board/faqitemdelete/failed";
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
  FaqItems: [],
  FaqFetching: false,
  FaqItemInfo: [],
  FaqItemIdx: "",
};

const BoardRedux_Faq = (state = initialState, action) => {
  //console.log("accout redux:", action, state);
  switch (action.type) {
    case LIST_LOAD_FETCH:
      console.log(" List Loading.. ", action, state);
      return {
        ...state,
        FaqFetching: true,
      };

    case LIST_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        FaqItems: action.result.data,
        FaqFetching: false,
      };

    case LIST_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        FaqFetching: false,
      };

    case LIST_LOAD_CLEAR:
      console.log(" List Clear.. ", action, state);
      return {
        ...state,
        FaqItems: "",
        FaqItemInfo: "",
      };

    case ITEM_LOAD_FETCH:
      console.log(" Item Loading.. ", action, state);
      return {
        ...state,
        FaqFetching: true,
      };

    case ITEM_LOAD_CLEAR:
      console.log(" Item Clear.. ", action, state);
      return {
        ...state,
        FaqFetching: "",
      };

    case ITEM_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        FaqItemInfo: action.result,
        FaqFetching: false,
      };

    case ITEM_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        FaqFetching: false,
      };

    case ITEM_INPUT_FETCH:
      console.log(" Input Loading.. ", action, state);
      return {
        ...state,
        FaqFetching: true,
      };

    case ITEM_INPUT_FAILED:
      console.log(" Input Fail", action, state);
      return {
        ...state,
        FaqFetching: false,
      };

    case ITEM_INPUT_SUCCESS:
      console.log(" Input Success", action, state);
      return {
        ...state,
        FaqFetching: false,
      };

    case ITEM_DELETE_FETCH:
      console.log(" Delete Loading.. ", action, state);
      return {
        ...state,
        FaqFetching: true,
      };

    case ITEM_DELETE_FAILED:
      console.log(" Delete Fail", action, state);
      return {
        ...state,
        FaqFetching: false,
      };

    case ITEM_DELETE_SUCCESS:
      console.log(" Delete Success", action, state);
      return {
        ...state,
        FaqFetching: false,
        FaqItemInfo: "",
      };

    default:
      return state;
  }
};

export default BoardRedux_Faq;
