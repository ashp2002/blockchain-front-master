import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, makeStyles } from "@mui/styles";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import {
  Box, 
  TextField, 
  Typography, 
  Button,
  Container,
  useMediaQuery
  } from "@mui/material";
import { FuncLogin, FuncLogout } from "../../Common/AccoutFunc";
import SimpleTextField from "../../Component/Common/SimpleTextField";
import TitleText from "../../Component/Common/TitleText";
import ColorButton from "../../Component/Common/ColorButton";


export const useStyles = makeStyles((theme) => ({
}));

const UserLogin = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const fetchingState = useSelector((state) => state.AccountRedux._Fetching);
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [txtID, setTxtID] = useState("");
  const [txtPW, setTxtPW] = useState("");

  const handlePageFlag = () => {
    props.handlePageFlag(1);
  };

  const handleLogin = async () => {
    let result = await FuncLogin(dispatch, txtID, txtPW);
    if(result == 1){history.goBack();}
  };

  return (
    <Container>
      <Box
        sx={{
          width: isTablet || isMobile ? "100%" : "50%",
          mx: "auto",
          my: 20,
          px: 5,
          py: 4,
          border: 1,
          borderRadius: 10,
        }} 
      >
        <Box>
          <TitleText 
            title="로 그 인"
            size="h2"/>
          <Box sx={{ my: 2 }}>
            <SimpleTextField
              autoFocus
              value={txtID}
              onChange={({ target: { value } }) => setTxtID(value)}
              radius={5}
              placeholder="아이디를 입력해주세요."
            />
          </Box>
          <Box sx={{ my: 2 }}>
            <SimpleTextField
              value={txtPW}
              onChange={({ target: { value } }) => setTxtPW(value)}
              radius={5}
              type="password"
              placeholder="비밀번호 (8-15자리 숫자, 영문자, 특수문자)"
            />
          </Box>
          {/* <Typography variant="body2" color="error">
            {loginFail && "아이디 또는 비밀번호를 확인해주세요."}
          </Typography>
          */}
          <Box sx={{ mt: 8 }}>
            <ColorButton 
              onClick={handleLogin
                /*async () => {
                let loginResult = await FuncLogin(dispatch, txtID, txtPW);
                console.log("로그인결과!!!",loginResult);
                //if(loginResult === 1){history.goBack()}
              }*/ }
              color="secondary">
              로그인 
            </ ColorButton>
          </Box>
          <Box 
            sx={{
              m: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexBasis: "50%",
                justifyContent: "center",
                alignItems: "center",
                borderRight: 1,
              }}
              onClick={() => alert("1:1문의 상담에 올려주세요.")}
            >
              아이디를 잊어버렸어요
            </Box>
            <Box
              sx={{
                display: "flex",
                flexBasis: "50%",
                justifyContent: "center",
                alignItems: "center",
                borderRight: 1,
              }}
              onClick={() => alert("1:1문의 상담에 올려주세요.")}
            >
              비밀번호를 잊어버렸어요
            </Box>
          </Box>
          <Box>
            <ColorButton onClick={handlePageFlag} color="secondary">
              회원가입
            </ ColorButton>
          </Box>
          <Box 
            sx={{
              mt: 8,
              mb: 2,
              display: "flex",
              justifyContent: "center"
            }}
          >
            회원가입 시{" "}개인정보 처리방침{" "}확인하였으며,동의합니다.
          </Box>
        </Box>
      </Box>  
    </Container>
  );
};

export default UserLogin;
