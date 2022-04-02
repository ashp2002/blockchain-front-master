import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "../Common";
import { useHistory } from "react-router-dom";
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
  deleteItemSuccess,
  deleteItemFetch,
  deleteItemFailed
} from "../../modules/BoardRedux_Supports";


/* ===============기술지원 ================*/
export const ListGetFunc_support = async (dispatch) => {
  dispatch(loadFetch());
  try {
    let resultData = await asyncAPI("/getQnaList")
    console.log("데이터", resultData)
    dispatch(loadSuccess(resultData));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadFailed());
    };
  }

export const ItemGetFunc_support = async (dispatch, itemIdx) => {
  dispatch(loadItemFetch());
  try {
    let resultData = await asyncAPI("/getQnaInfo", { idx: itemIdx })
    console.log("데이터", resultData)
    dispatch(loadItemSuccess(resultData.data));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadItemFailed());
  };
};

export const ItemInputFunc_support = async (dispatch, data) => {
  dispatch(inputItemFetch());
  const session_id = sStorage.getItem("session_id");
  try {
    let resultData = await asyncAPI("/notice/addQuestion", {
      title: data.TxtTitle,
      contents: data.TxtContent,
      session_id: session_id,
      isprivate: 0,
    })
    console.log("데이터", resultData)
    alert(resultData.msg);
    dispatch(inputItemSuccess());
    return resultData;
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(inputItemFailed());
    };
  }

export const ItemInputFuncN_support = async (dispatch, data) => {
  dispatch(inputItemFetch());
  try {
    let resultData = await asyncAPI("/addQuestionN", {
      title: data.TxtTitle,
      contents: data.TxtContent,
      name: data.TxtName,
      phone: data.TxtPhone,
      pass: data.TxtPass,
      isprivate: 0,
    })
    console.log("데이터", resultData)
    alert(resultData.msg);
    dispatch(inputItemSuccess());
    return resultData;
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(inputItemFailed());
    };
  }

  export const ItemDelFunc_support = async (dispatch, itemIdx) => {
    dispatch(deleteItemFetch());
    try {
      let resultData = await asyncAPI("/notice/deleteQuestion", {
        idx: itemIdx,
      })
      console.log("데이터", resultData)
      alert(resultData.msg);
      dispatch(deleteItemSuccess());
      return resultData;
      } catch (e) {
        console.log("asyncAPI Error Log", e);
        alert(e.resultCode.msg);
        dispatch(deleteItemFailed());
      };
    }

  export const ItemDelFuncN_support = async (dispatch, itemIdx, pass) => {
    dispatch(deleteItemFetch());
    try {
      let resultData = await asyncAPI("/deleteQuestionN", {
        idx: itemIdx,
        pass: pass,
      })
      console.log("데이터", resultData)
      alert(resultData.msg);
      dispatch(deleteItemSuccess());
      return resultData;
      } catch (e) {
        console.log("asyncAPI Error Log", e);
        alert(e.resultCode.msg);
        dispatch(deleteItemFailed());
      };
    }
/* ===============기술지원 ================*/

