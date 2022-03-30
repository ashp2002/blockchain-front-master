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
import { verifyEmail, verifyPW, verifyID } from "./CommonFuncs";

/*
export const FuncLogin = async (dispatch, userID, userPW) => {
  dispatch(loginFetch());
  let temp = 5;
  await APIRequest("login", { userid: userID, pass: userPW })
    .then((res) => {
      if (res.resultcode === 1) {
        temp = 1;
        console.log(res);
        sStorage.setItem("session_id", res.session_id);
        dispatch(loginSuccess(res));
      } else {
        console.log(res);
        alert("아이디 암호를 다시확인하세요.");
        dispatch(loginFailed());
        temp = 0;
      }
    })
    .catch((error) => {
      console.log(error);
      alert("로그인 처리중 오류가 발생하였습니다.");
      dispatch(loginError());
    });
  return temp;
};
*/

export const FuncLogin = async (dispatch, userID, userPW) => {
  dispatch(loginFetch());
  let temp = 5;
  console.log("FuncLoginSync", userID, userPW);
  try {
    let resultData = await asyncAPI("login", {
      userid: userID,
      pass: userPW,
    });
    console.log("resultData", resultData);
    temp = 1;
    sStorage.setItem("session_id", resultData.session_id);
    dispatch(loginSuccess(resultData));
  } catch (e) {
    console.log("asyncAPI Error Log", e);
    temp = 0;
    alert(e.resultCode.msg);
    dispatch(loginFailed());
  }
  return temp;
};
/*
export const FuncLogout = async (dispatch) => {
  dispatch(logoutFetch());
  const session_id = sStorage.getItem("session_id");
  await APIRequest("logout", { session_id: session_id })
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
*/
export const FuncLogout = async (dispatch) => {
  dispatch(logoutFetch());
  const session_id = sStorage.getItem("session_id");
    try {
      let resultData = await asyncAPI("logout", {
        session_id: session_id, 
      });
      console.log("resultData", resultData);
      sStorage.setItem("session_id", "");
      sStorage.setItem("user_id", "");
      dispatch(logoutSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(logoutFailed());
    }
};

export const FuncJoin = async ( personInfo ) => {
    try{
      let resultData = await asyncAPI("/user/addUser", {
        userid: personInfo.txtJoinID,
        pass: personInfo.txtJoinPW,
        name: personInfo.txtName,
        phone: personInfo.txtTel,
        email: personInfo.txtEmail,
        company: personInfo.txtCompany,
      })
    } catch (e) {
        console.log("asyncAPI Error Log", e);
        alert(e.resultCode.msg);
      }
  return "true";
};

export const FuncIdCheck = async (dispatch, userID) => {
  try {
    let resultData = await asyncAPI("/user/useridCheck", {
      userid: userID,
    });
    console.log("resultData", resultData);
  } catch (e) {
    console.log("asyncAPI Error Log", e);
    alert(e.resultCode.msg);
  }
};

export const FuncJoinResultCheck = (personInfo, PWCheckResult) => {
  if (!verifyID(personInfo.txtJoinID)) {
    alert("아이디를 6자 이상 영어 소문자 또는 숫자로 입력해주세요");
    return "fail";
  }
  if (!verifyPW(personInfo.txtJoinPW)) {
    alert(
      "암호는 8자이상 영문 대문자,소문자,숫자,특수문자를 모두 포함해야합니다."
    );
    return "fail";
  }

  if (!PWCheckResult) {
    console.log()
    alert("비밀번호가 다릅니다. 비밀번호를 확인해주세요.");
    return "fail";
  }

  if (personInfo.txtName.length < 2) {
    alert("이름을 입력해주세요");
    return "fail";
  }
  if (!verifyEmail(personInfo.txtEmail)) {
    alert("이메일을 정확히 입력해주세요");
    return "fail";
  }
};
