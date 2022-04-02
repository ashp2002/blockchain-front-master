import React from "react";
import { asyncAPI, APIRequest } from "../Common/Common";

const LIST_LOAD_SUCCESS = "board/supportslist/success";
const LIST_LOAD_FETCH = "board/supportslist/fetch";
const LIST_LOAD_FAILED = "board/supportslist/failed";
const LIST_LOAD_CLEAR = "board/supportslist/clear";

const ITEM_LOAD_SUCCESS = "board/supportsitemload/success";
const ITEM_LOAD_FETCH = "board/supportsitemload/fetch";
const ITEM_LOAD_FAILED = "board/supportsitemload/failed";
const ITEM_LOAD_CLEAR = "board/supportsitemload/clear";

const ITEM_INPUT_SUCCESS = "board/supportsiteminput/success";
const ITEM_INPUT_FETCH = "board/supportsiteminput/fetch";
const ITEM_INPUT_FAILED = "table/supportsiteminput/failed";

const ITEM_DELETE_SUCCESS = "board/supportsitemdelete/success";
const ITEM_DELETE_FETCH = "board/supportsitemdelete/fetch";
const ITEM_DELETE_FAILED = "board/supportsitemdelete/failed";
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
  SupportsItems: [],
  SupportsFetching: false,
  SupportsItemInfo: [],
};

const BoardRedux_Supports = (state = initialState, action) => {
  //console.log("accout redux:", action, state);
  switch (action.type) {
    case LIST_LOAD_FETCH:
      console.log(" List Loading.. ", action, state);
      return {
        ...state,
        SupportsFetching: true,
      };

    case LIST_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        SupportsItems: action.result.data,
        SupportsFetching: false,
      };

    case LIST_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        SupportsFetching: false,
      };

    case LIST_LOAD_CLEAR:
      console.log(" List Clear.. ", action, state);
      return {
        ...state,
        SupportsItems: "",
        SupportsItemInfo: "",
      };

    case ITEM_LOAD_FETCH:
      console.log(" Item Loading.. ", action, state);
      return {
        ...state,
        SupportsFetching: true,
      };

    case ITEM_LOAD_CLEAR:
      console.log(" Item Clear.. ", action, state);
      return {
        ...state,
        SupportsItemInfo: "",
      };

    case ITEM_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        SupportsItemInfo: action.result,
        SupportsFetching: false,
      };

    case ITEM_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        SupportsFetching: false,
      };

    case ITEM_INPUT_FETCH:
      console.log(" Input Loading.. ", action, state);
      return {
        ...state,
        SupportsFetching: true,
      };

    case ITEM_INPUT_FAILED:
      console.log(" Input Fail", action, state);
      return {
        ...state,
        SupportsFetching: false,
      };

    case ITEM_INPUT_SUCCESS:
      console.log(" Input Success", action, state);
      return {
        ...state,
        SupportsFetching: false,
      };

    case ITEM_DELETE_FETCH:
      console.log(" Delete Loading.. ", action, state);
      return {
        ...state,
        SupportsFetching: true,
      };

    case ITEM_DELETE_FAILED:
      console.log(" Delete Fail", action, state);
      return {
        ...state,
        SupportsFetching: false,
      };

    case ITEM_DELETE_SUCCESS:
      console.log(" Delete Success", action, state);
      return {
        ...state,
        SupportsFetching: false,
        SupportsItemInfo: "",
      };

    default:
      return state;
  }
};

export default BoardRedux_Supports;
