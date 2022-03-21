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

export const FuncLogin = async (dispatch, userID, userPW) => {
  dispatch(loginFetch());
  let temp = 5;
  await APIRequest("login", { userid: userID, pass: userPW })
    .then((res) => {
      if (res.resultcode === 1) {
        temp = 1;
        sStorage.setItem("session_id", res.session_id);
        dispatch(loginSuccess(res));
      } else {
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

export const FuncJoin = async (
  dispatch,
  txtJoinID, // 아이디
  txtJoinPW, // 암호
  txtName, //이름
  txtTel, //전번
  txtEmail, //이메일
  txtCompany, // 생년월일
  ) => {
    await APIRequest("/user/addUser", {
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
          return res.resultcode;
        } else {
          alert("가입실패");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("가입실패 다시 확인해주세요.");
      });
      return "true";
};

export const FuncIdCheck = async (dispatch, userID) => {
  await APIRequest("/user/useridCheck", { userid: userID })
    .then((res) => {
      console.log(res);
      if (res.resultcode === 1) {
        alert("사용가능한 아이뒤입니다.")
      } else {
        alert("중복아이디 입니다.");
      }
    })
    .catch((error) => {
      console.log(error);
      alert("아이디체크실패");
    });
};

export const FuncJoinResultCheck = (
    txtJoinID, 
    txtJoinPW, 
    PWCheckResult, 
    txtName, 
    txtEmail
  ) => {
  if (!verifyID(txtJoinID)) {
    alert("아이디를 6자 이상 영어 소문자 또는 숫자로 입력해주세요");
    return "fail";
  }
  if (!verifyPW(txtJoinPW)) {
    alert(
      "암호는 8자이상 영문 대문자,소문자,숫자,특수문자를 모두 포함해야합니다."
    );
    return "fail";
  }

  if (!PWCheckResult) {
    alert("비밀번호가 다릅니다. 비밀번호를 확인해주세요.");
    return "fail";
  }

  if (txtName.length < 2) {
    alert("이름을 입력해주세요");
    return "fail";
  }
  if (!verifyEmail(txtEmail)) {
    alert("이메일을 정확히 입력해주세요");
    return "fail";
  }
};
