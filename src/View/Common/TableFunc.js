import React, { useEffect, useState } from "react";
import {
  loadSuccess,
  loadFetch,
  loadFailed,
  loadItemSuccess,
} from "../modules/TableRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "./Common";
import { useHistory } from "react-router-dom";

export const ListGetFunc = async (dispatch) => {
  dispatch(loadFetch());
  await APIRequest("/getQnaList")
    .then((res) => {
      console.log("데이터", res)
      dispatch(loadSuccess(res));
    })
    .catch((error) => {
      console.log(error);
      alert("리스트실패");
      dispatch(loadFailed());
    });
};

export const ItemGetFunc = async (dispatch, itemIdx) => {
  dispatch(loadFetch());
  await APIRequest("getQnaInfo",{idx: itemIdx})
    .then((res) => {
      console.log("아이템 들어옴", res)
      dispatch(loadItemSuccess(res));
    })
    .catch((error) => {
      console.log(error);
      alert("로그아웃 실패");
      dispatch(loadFailed());
    });
};
