import React from "react";

const REFRESH_VALUE = "refresh/value";
const TABINDEX_VALUE = "tab/value";

export const refreshContents = (refreshValue) => ({
  type: REFRESH_VALUE,
  refreshValue,
});

export const tabIndex = (Value) => ({
  type: TABINDEX_VALUE,
  Value,
});

const initialState = {
  refreshValue: 0,
  tabValue: 0,
};

const CommonRedux = (state = initialState, action) => {
  //console.log("common redux", action, state);
  switch (action.type) {
    case REFRESH_VALUE:
      console.log("common redux REFRESH_VALUE", action, state);
      return {
        ...state,
        refreshValue: action.refreshValue,
      };
    case TABINDEX_VALUE:
      console.log("Tab index value", action, state);
      return {
        ...state,
        tabValue: action.Value,
      };
    default:
      return state;
  }
};

export default CommonRedux;
