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
  deleteItemSuccess,
  deleteItemFetch,
  deleteItemFailed
} from "../modules/BoardRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "./Common";
import { useHistory } from "react-router-dom";

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
      dispatch(deleteItemSuccess());
      return resultData;
      } catch (e) {
        console.log("asyncAPI Error Log", e);
        alert(e.resultCode.msg);
        dispatch(deleteItemFailed());
      };
    }
/* ===============기술지원 ================*/


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
    dispatch(deleteItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(deleteItemFailed());
    };
  }
/* ===============자주하는질문 FAQ ================*/

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
    dispatch(inputItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(inputItemFailed());
    };
  }


export const ItemDelFunc_notice = async (dispatch, data) => {
  dispatch(deleteItemFetch());
  try {
    let resultData = await asyncAPI("/notice/deleteNotice", {
      idx: data.idx,
    })
    console.log("데이터", resultData)
    dispatch(deleteItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(deleteItemFailed());
    };
  }
/* ===============공지사항 ================*/

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
  try {
    let resultData = await asyncAPI("/addQuestionN1", {
      title: data.TxtTitle,
      contents: data.TxtContent,
      phone: data.TxtPhone,
      email: data.TxtEmail,
      category: data.TxtCategory,
    })
    console.log("데이터", resultData)
    dispatch(inputItemSuccess());
    } catch (e) {
      console.log("asyncAPI Error Log", e);
      alert(e.resultCode.msg);
      dispatch(inputItemFailed());
    };
  }
/* =============== 1:1문의 ================*/

