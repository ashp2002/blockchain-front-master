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
} from "../../modules/BoardRedux_Notice";

/* =============== 공지사항 ================*/
export const ListGetFunc_notice = async (dispatch) => {
  dispatch(loadFetch());
  try {
    let resultData = await asyncAPI("/getNoticeList")
    console.log("데이터", resultData)
    dispatch(loadSuccess(resultData));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadFailed());
    };
  }

export const ItemGetFunc_notice = async (dispatch, itemIdx) => {
  dispatch(loadItemFetch());
  try {
    let resultData = await asyncAPI("/getNoticeInfo", { idx: itemIdx })
    console.log("데이터", resultData)
    dispatch(loadItemSuccess(resultData.data));
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(loadItemFailed());
  };
};

export const ItemInputFunc_notice = async (dispatch, data) => {
  dispatch(inputItemFetch());
  try {
    let resultData = await asyncAPI("/notice/addNotice", {
      title: data.TxtTitle,
      contents: data.TxtContent,
      top: "",
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


export const ItemDelFunc_notice = async (dispatch, data) => {
  console.log("커몬안",data)
  dispatch(deleteItemFetch());
  try {
    let resultData = await asyncAPI("/notice/deleteNotice", {
      idx: `${data}`,
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
/* ===============공지사항 ================*/
