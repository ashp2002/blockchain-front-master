import React, { useEffect, useState } from "react";
import {
  loginSuccess,
} from "../modules/AccountRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "./Common";
import { useHistory } from "react-router-dom";

export const GetUserList = async (dispatch) => {
  const session_id = sStorage.getItem("session_id");
    try {
      let resultData = await asyncAPI("/user/getUserList", {
        session_id: session_id, 
      });
      console.log("resultData", resultData);
    } catch (e) {
        console.log("asyncAPI Error Log", e);
        alert(e.resultCode.msg);
    }
};
