import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Box, 
  TextField, 
  Typography, 
  Button,
  Container
  } from "@mui/material";
import { FuncLogin, FuncLogout, Test } from "../../Common/AccoutFunc";

const UserLogin = () => {
  const LoginContainer = {
    alignItem: "center",
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
    <Container>
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
          component={RouterLink}
          to="/"
        >
          로그인
        </Button>
        <Button
          onClick={() => {
            Test();
          }}
        >
          회원가입
        </Button>
        {loginState && (
          <Button onClick={() => FuncLogout(dispatch)}>로그아웃</Button>
        )}
        <Box sx={{ background: "blue", color: "white" }}>
          {fetchingState && "처리중"}
        </Box>
      </Box>
    </Container>
  );
};

export default UserLogin;
