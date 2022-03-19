import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import {
  Box, 
  TextField, 
  Typography, 
  Button,
  Container
  } from "@mui/material";
import { FuncLogin, FuncLogout } from "../../Common/AccoutFunc";
import SimpleTextField from "../../Component/Common/SimpleTextField";
import TitleText from "../../Component/Common/TitleText";
import ColorButton from "../../Component/Common/ColorButton";

const UserLogin = (props) => {

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const fetchingState = useSelector((state) => state.AccountRedux._Fetching);
  const history = useHistory();
  const [txtID, setTxtID] = useState("");
  const [txtPW, setTxtPW] = useState("");

  const handlePageFlag = () => {
    props.handlePageFlag(1);
  };

  return (
    <Container>
      <Box 
        width="50%" 
        mx="auto" 
        my={20} 
        border={1}
        borderRadius={10} 
        px={5} 
        py={4}>
        <Box>
          <TitleText 
            title="로 그 인"
            size="h2"/>
          <Box my={2}>
            <SimpleTextField
              autoFocus
              value={txtID}
              onChange={({ target: { value } }) => setTxtID(value)}
              radius={5}
              placeholder="아이디를 입력해주세요."
            />
          </Box>
          <Box my={2}>
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
          <Box mt={8}>
            <ColorButton 
              onClick={() => {
                FuncLogin(dispatch, txtID, txtPW);
              }}
              component={RouterLink}
              to="/" 
              color="secondary">
              로그인 
            </ ColorButton>
          </Box>
          <Box display="flex" justifyContent="center" m={2}>
            <Box
              display="flex"
              flexBasis="50%"
              justifyContent="center"
              alignItems="center"
              borderRight={1}
              onClick={() => alert("1:1문의 상담에 올려주세요.")}
            >
              아이디를 잊어버렸어요
            </Box>
            <Box
              display="flex"
              flexBasis="50%"
              justifyContent="center"
              alignItems="center"
              onClick={() => alert("1:1문의 상담에 올려주세요.")}
            >
              비밀번호를 잊어버렸어요
            </Box>
          </Box>
          <Box>
            <ColorButton
            onClick={handlePageFlag}
            color="secondary">
              회원가입
            </ ColorButton>
          </Box>
          <Box mt={8} mb={2} display="flex" justifyContent="center">
            회원가입 시{" "}개인정보 처리방침{" "}확인하였으며,동의합니다.
          </Box>
        </Box>
      </Box>  
    </Container>
  );
};

export default UserLogin;
