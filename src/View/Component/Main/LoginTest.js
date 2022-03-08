import React, { useEffect, useState } from "react";
import {
  loginSuccess,
  loginFetch,
  loginError,
  loginFailed,
} from "../../modules/AccountRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "../../Common/Common";
import { Box, TextField, Typography, Button } from "@mui/material";
import { FuncLogin, FuncLogout } from "../../Common/AccoutFunc";

const LoginTest = () => {
  const LoginContainer = {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    p: 1,
    m: 1,
    bgcolor: "background.paper",
    borderRadius: 1,
  };

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const fetchingState = useSelector((state) => state.AccountRedux._Fetching);

  const [userID, setUserID] = useState("");
  const [userPW, setUserPW] = useState("");

  return (
    <Box sx={LoginContainer}>
      <Typography variant="body2">로그인상태 : {loginState ? "true" : "false"} </Typography>
      <TextField
        value={userID}
        onChange={({ target: { value } }) => setUserID(value)}
        id="userid"
        label="아이디"
        variant="standard"
      />
      <TextField
        value={userPW}
        onChange={({ target: { value } }) => setUserPW(value)}
        id="userpw"
        label="패스워드"
        variant="standard"
      />
      <Button
        onClick={() => {
          FuncLogin(dispatch, userID, userPW);
        }}
      >
        로그인
      </Button>
      {loginState && (
        <Button onClick={() => FuncLogout(dispatch)}>로그아웃</Button>
      )}
      <Box sx={{ background: "blue", color: "white" }}>
        {fetchingState && "처리중"}
      </Box>
    </Box>
  );
};

export default LoginTest;
