import React, { useContext } from "react";

export const verifyEmail = (txt) => {
  // 이메일 검증 스크립트 작성
  var regExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  // 검증에 사용할 정규식 변수 regExp에 저장
  if (txt.match(regExp) != null) {
    return true;
  } else {
    return false;
  }
};

export const verifyID = (txt) => {
  // 이메일 검증 스크립트 작성
  var regExp = /^[a-z0-9]{6,20}$/;

  // 검증에 사용할 정규식 변수 regExp에 저장
  if (txt.match(regExp) != null) {
    return true;
  } else {
    return false;
  }
};
export const verifyPW = (txt) => {
  // 이메일 검증 스크립트 작성
  var regExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  // 검증에 사용할 정규식 변수 regExp에 저장
  if (txt.match(regExp) != null) {
    return true;
  } else {
    return false;
  }
};

export const ParseDATE = (regdate) => {
  let yyyy = regdate.substr(0, 4);
  let mm = regdate.substr(4, 2);
  let dd = regdate.substr(6, 2);

  const arr = [yyyy, "/", mm, "/", dd];

  return arr.join(" ");
};

export const ParseDATE_notice = (regdate) => {
  let yyyy = regdate.substr(0, 4);
  let mm = regdate.substr(5, 2);
  let dd = regdate.substr(8, 2);

  const arr = [yyyy, "/", mm, "/", dd];

  return arr.join(" ");
};