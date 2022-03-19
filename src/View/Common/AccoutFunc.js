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
import { useHistory } from "react-router-dom";

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
        sStorage.setItem("session_id", "");
        sStorage.setItem("user_id", "");
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

export const FuncJoin = (
  dispatch,
  txtJoinID, // 아이디
  txtJoinPW, // 암호
  txtName, //이름
  txtTel, //전번
  txtEmail, //이메일
  txtCompany, // 생년월일
  ) => {

    /*
  APIRequest("/user/addUser", {
    userid: txtJoinID,
    pass: txtJoinPW,
    name: txtName,
    phone: txtTel,
    email: txtEmail,
    company: txtCompany,
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
    });*/
    return "true";
};

export const FuncIdCheck = (dispatch, userID) => {
  APIRequest("/user/useridCheck", { userid: userID })
    .then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        alert("사용가능한 아이뒤입니다.")
        return res.resultcode;
      } else {
        alert("중복아이디 입니다.");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("아이디체크실패");
    });
};
