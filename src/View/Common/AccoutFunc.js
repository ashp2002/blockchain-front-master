import React, { useEffect, useState } from "react";
import {
  loginSuccess,
  loginFetch,
  loginError,
  loginFailed,
  logoutFetch,
  logoutSuccess,
  logoutFailed,
} from "../modules/AccountRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "./Common";

export const FuncLogin = (dispatch, userID, userPW) => {
  dispatch(loginFetch());
  APIRequest("login", { userid: userID, pass: userPW })
    .then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        sStorage.setItem("session_id", res.session_id);
        dispatch(loginSuccess(res));
      } else {
        alert("아이디 암호를 다시확인하세요.");
        dispatch(loginFailed());
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그인 처리중 오류가 발생하였습니다.");
      dispatch(loginError());
    });
};

export const FuncLogout = (dispatch) => {
  dispatch(logoutFetch());
  const session_id = sStorage.getItem("session_id");
  APIRequest("logout", { session_id: session_id })
    .then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        dispatch(logoutSuccess());
      } else {
        alert("로그아웃 실패");
        dispatch(logoutFailed());
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그아웃 실패");
      dispatch(logoutFailed());
    });
};
/*  계정생성
export const Test = (dispatch) => {
  APIRequest("/user/addUser", {
    userid: "ashp2002",
    pass: "dkstjdgh",
    name: "안성호",
    phone: "01031399986",
    addr: "강서구",
    email: "ashp",
    birth: "1983",
    company: "디솝",
    })
    .then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        alert("가입완료");
      } else {
        alert("로그아웃 실패");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그아웃 실패");
    });
};
*/
