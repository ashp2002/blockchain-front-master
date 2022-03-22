import React from "react";
import { asyncAPI, APIRequest } from "../Common/Common";

const LIST_LOAD_SUCCESS = "table/list/success";
const LIST_LOAD_FETCH = "table/list/fetch";
const LIST_LOAD_FAILED = "table/list/failed";

const ITEM_LOAD_SUCCESS = "table/itemload/success";
const ITEM_LOAD_FETCH = "table/itemload/fetch";
const ITEM_LOAD_FAILED = "table/itemload/failed";
const ITEM_LOAD_CLEAR = "table/itemload/clear";

const ITEM_INPUT_SUCCESS = "table/iteminput/success";
const ITEM_INPUT_FETCH = "table/iteminput/fetch";
const ITEM_INPUT_FAILED = "table/iteminput/failed";
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

const initialState = {
  Items: [],
  _Fetching: true,
  ItemInfo: [],
};

const TableRedux = (state = initialState, action) => {
  //console.log("accout redux:", action, state);
  switch (action.type) {
    case LIST_LOAD_FETCH:
      console.log(" List Loading.. ", action, state);
      return {
        ...state,
        _Fetching: true,
      };
    case LIST_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);

      return {
        ...state,
        Items: action.result,
        _Fetching: false,
      };
    case LIST_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        _Fetching: false,
      };

    case ITEM_LOAD_FETCH:
      console.log(" Item Loading.. ", action, state);
      return {
        ...state,
        _Fetching: true,
      };
    case ITEM_LOAD_CLEAR:
      console.log(" Item Clear.. ", action, state);
      return {
        ...state,
        ItemInfo: "",
        _Fetching: true,
      };
    case ITEM_LOAD_SUCCESS:
      console.log(" Loading Success", action, state);
      return {
        ...state,
        ItemInfo: action.result,
        _Fetching: false,
      };
    case ITEM_LOAD_FAILED:
      console.log(" Loading Fail", action, state);
      return {
        ...state,
        _Fetching: false,
      };

    case ITEM_INPUT_FETCH:
      console.log(" Input Loading.. ", action, state);
      return {
        ...state,
        _Fetching: true,
      };
    case ITEM_INPUT_FAILED:
      console.log(" Input Fail", action, state);
      return {
        ...state,
        _Fetching: false,
      };
    case ITEM_INPUT_SUCCESS:
      console.log(" Input Success", action, state);
      return {
        ...state,
        _Fetching: false,
      };
    default:
      return state;
  }
};

export default TableRedux;
