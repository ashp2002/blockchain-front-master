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
} from "../../modules/BoardRedux_Inquiry";

/* =============== 1:1문의 ================*/
export const ListGetFunc_inquiry = async (dispatch) => {
  dispatch(loadFetch());
  try {
    let resultData = await asyncAPI("notice/getQuestionList1")
    console.log("데이터", resultData)
    dispatch(loadSuccess(resultData));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadFailed());
    };
  }

export const ItemGetFunc_inquiry = async (dispatch, itemIdx) => {
  dispatch(loadItemFetch());
  try {
    let resultData = await asyncAPI("notice/getQuestionInfo1", { idx: itemIdx })
    console.log("데이터", resultData)
    dispatch(loadItemSuccess(resultData.data));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadItemFailed());
  };
};

export const ItemInputFuncN_inquiry = async (dispatch, data) => {
  dispatch(inputItemFetch());
  console.log(data)
  try {
    let resultData = await asyncAPI("/addQuestionN1", {
      contents: data.txtContent,
      phone: data.txtTel,
      email: data.txtEmail,
    })
    console.log("데이터", resultData)
    alert(resultData.msg);
    dispatch(inputItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(inputItemFailed());
    };
  }
/* =============== 1:1문의 ================*/

