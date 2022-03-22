import React, { useEffect, useState } from "react";
import {
  loadSuccess,
  loadFetch,
  loadFailed,
  loadItemSuccess,
  loadItemFetch,
  loadItemFailed,
  loadItemClear,
  inputItemSuccess,
  inputItemFetch,
  inputItemFailed,
} from "../modules/TableRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "./Common";
import { useHistory } from "react-router-dom";

export const ListGetFunc_support = async (dispatch) => {
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

export const ItemGetFunc_support = async (dispatch, itemIdx) => {
  dispatch(loadItemFetch());
  await APIRequest("getQnaInfo",{idx: itemIdx})
    .then((res) => {
      console.log("아이템 들어옴", res)
      dispatch(loadItemSuccess(res));
    })
    .catch((error) => {
      console.log(error);
      alert("가져오기실패");
      dispatch(loadItemFailed());
    });
};

export const ItemInputFunc_support = async (dispatch, data) => {
  dispatch(inputItemFetch());
  await APIRequest("/addQuestionN",
    {
      title: data.TxtTitle,
      contents: data.TxtContent,
      name: data.TxtName,
      phone: data.TxtPhone,
    })
    .then((res) => {
      console.log("등록성공", res)
      dispatch(inputItemSuccess());
    })
    .catch((error) => {
      console.log(error);
      alert("등록실패");
      dispatch(inputItemFailed());
    });
};

