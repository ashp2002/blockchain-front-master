import React from "react";
import { asyncAPI, APIRequest } from "../Common/Common";

const USER_LOGIN_SUCCESS = "user/login/success";
const USER_LOGIN_FETCH = "user/login/fetch";
const USER_LOGIN_FAILED = "user/login/failed";
const USER_LOGIN_ERROR = "user/login/error";

const USER_LOGOUT_SUCCESS = "user/logout/success";
const USER_LOGOUT_FETCH = "user/logout/fetch";
const USER_LOGOUT_FAILED = "user/logout/failed";

////////////////// 로그인 ////////////////////
export const loginSuccess = (result) => ({
  type: USER_LOGIN_SUCCESS,
  result,
});
export const loginFetch = () => ({
  type: USER_LOGIN_FETCH,
});
export const loginFailed = () => ({
  type: USER_LOGIN_FAILED,
});
export const loginError = () => ({
  type: USER_LOGIN_ERROR,
});
///////////////// 로그아웃 /////////////////////
export const logoutSuccess = (result) => ({
  type: USER_LOGOUT_SUCCESS,
  result,
});
export const logoutFetch = () => ({
  type: USER_LOGOUT_FETCH,
});
export const logoutFailed = () => ({
  type: USER_LOGOUT_FAILED,
});

const initialState = {
  loginState: false,
  userName: "",
  userId: null,
  userLevel: -1,
  userInfo: null,
  _Fetching: false,
};

const AccountRedux = (state = initialState, action) => {
  //console.log("accout redux:", action, state);
  switch (action.type) {
    case USER_LOGIN_FETCH:
      console.log("로긴 시작:", action, state);
      return {
        ...state,
        _Fetching: true,
      };

    case USER_LOGIN_SUCCESS:
      console.log("로긴 성공 :", action, state);

      return {
        ...state,
        loginState: true,
        userId: action.result.data.userid,
        userName: action.result.data.name,
        userLevel: action.result.data.u_level,
        userInfo: action.result.data,
        _Fetching: false,
      };
    case USER_LOGIN_FAILED:
      console.log("로긴 실패 :", action, state);
      return {
        ...state,
        _Fetching: false,
      };

    case USER_LOGIN_ERROR:
      console.log("로긴 실패 :", action, state);
      return {
        ...state,
        _Fetching: false,
      };

    ///////////////////////////////////////

    case USER_LOGOUT_FETCH:
      console.log("로그아웃 시작:", action, state);
      return {
        ...state,
        _Fetching: true,
      };

    case USER_LOGOUT_SUCCESS:
      console.log("로그아웃 성공 :", action, state);

      return {
        ...state,
        loginState: false,
        userId: null,
        userName: "",
        userLevel: null,
        userInfo: null,
        _Fetching: false,
      };

    case USER_LOGIN_FAILED:
      console.log("로그아웃 실패 :", action, state);
      return {
        ...state,
        _Fetching: false,
      };

    default:
      return state;
  }
};

export default AccountRedux;
