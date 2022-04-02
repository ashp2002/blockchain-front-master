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
} from "../../modules/BoardRedux_Faq";

/* ===============자주하는질문 FAQ ================*/
export const ListGetFunc_faq = async (dispatch) => {
  dispatch(loadFetch());
  try {
    let resultData = await asyncAPI("/getFaqList")
    console.log("데이터", resultData)
    dispatch(loadSuccess(resultData));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadFailed());
    };
  }

export const ItemGetFunc_faq = async (dispatch, itemIdx) => {
  dispatch(loadItemFetch());
  try {
    let resultData = await asyncAPI("/getFaqInfo", { idx: itemIdx })
    console.log("데이터", resultData)
    dispatch(loadItemSuccess(resultData.data));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadItemFailed());
  };
};

export const ItemInputFunc_faq = async (dispatch, data) => {
  dispatch(inputItemFetch());
  try {
    let resultData = await asyncAPI("/notice/addFaq", {
      title: data.TxtTitle,
      contents: data.TxtContent,
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
export const ItemDelFunc_faq = async (dispatch, data) => {
  dispatch(deleteItemFetch());
  try {
    let resultData = await asyncAPI("/notice/deleteFaq", {
      idx: data.idx,
    })
    console.log("데이터", resultData)
    alert(resultData.msg);
    dispatch(deleteItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(deleteItemFailed());
    };
  }
/* ===============자주하는질문 FAQ ================*/

