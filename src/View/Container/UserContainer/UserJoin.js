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
import { FuncJoin, FuncIdCheck, FuncJoinResultCheck } from "../../Common/AccoutFunc";
import SimpleTextField from "../../Component/Common/SimpleTextField";
import TitleText from "../../Component/Common/TitleText";
import ColorButton from "../../Component/Common/ColorButton";


const UserJoin = (props) => {

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const fetchingState = useSelector((state) => state.AccountRedux._Fetching);
  const history = useHistory();
  const [txtName, setTxtName] = React.useState("");
  const [txtTel, setTxtTel] = React.useState("");
  const [txtEmail, setTxtEmail] = React.useState("");
  const [txtCompany, setTxtCompany] = React.useState("");
  const [txtJoinID, setTxtJoinID] = React.useState("");
  const [txtJoinPW, setTxtJoinPW] = React.useState("");
  const [txtJoinPW2, setTxtJoinPW2] = React.useState("");
  const [PWCheckResult, setPWCheckResult] = React.useState(false);
  const [personInfo, setPersonInfo] = useState({
    id: "",
    txtName: "",
    txtTel: "",
    txtEmail: "",
    txtCompany: "",
    txtJoinID: "",
    txtJoinPW: "",
    txtJoinPW2: "",
  });

  const handleJoin = async () => {
    let Checkresult = FuncJoinResultCheck(personInfo, PWCheckResult);
    if(Checkresult === "fail") {return;}
    let Joinresult = await FuncJoin( personInfo );
    if(Joinresult === "true") { history.goBack() }
  };
  
  const handlePageFlag = () => {
    props.handlePageFlag(0);
  };

  const handleIdcheck = async() => {
    FuncIdCheck(personInfo.txtJoinID);
  };

  const handleChange = (event, name) => {
    setPersonInfo(personInfo=>({
      ...personInfo,
      [event.target.name] : event.target.value,
    }))
  };

  return (
    <Container>
      <Box
        sx={{
          width: "50%",
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
            title="회 원 가 입"
            size="h2"/>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{
            my: 2,
            display: "flex",
            flexDirection: "column",
            flexBasis: "70%",
            }}
          >
            <Box>사용자 ID</Box>
            <SimpleTextField
              name="txtJoinID"
              value={personInfo.txtJoinID || ""}
              onChange={(event)=>handleChange(event)}
              autoFocus
              radius={5}
              placeholder="영문소문자, 숫자 조합"
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flexBasis: "5%" }} />
          <Box 
            sx={{ 
              my: 2, 
              pt: 3, 
              display: "flex", 
              flexDirection: "column", 
              flexBasis: "25%"}}
            >
            <ColorButton onClick={handleIdcheck} color="secondary" height="small" radius="true">
                조 회
            </ColorButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ 
            mt: 2, 
            display: "flex", 
            flexDirection: "column", 
            flexBasis: "45%"
            }}
          >
            <Box>비밀번호</Box>
            <SimpleTextField
              name="txtJoinPW"
              radius={5}
              type="password"
              placeholder="비밀번호"
              value={personInfo.txtJoinPW || ""}
              onChange={(event)=>handleChange(event)}
            />
            <Box sx={{ color: "red" }}> 
              영문,숫자,특수문자 조합 8자~ 15자 
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flexBasis: "10%" }} />
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", flexBasis: "45%" }}>
            <Box>비밀번호 확인</Box>
            <SimpleTextField
              radius={5}
              name="txtJoinPW2"
              type="password"
              placeholder="비밀번호 확인"
              value={personInfo.txtJoinPW2 || ""}
              onChange={(event)=> {
                handleChange(event)
                if (personInfo.txtJoinPW == event.target.value) { setPWCheckResult(true); }
                else { setPWCheckResult(false); }
              }}
            />
            {personInfo.txtJoinPW2 != "" ? (
              PWCheckResult ? null : (
                <Box sx={{ color: "red" }}>
                  비밀번호가 일치하지 않습니다.
                </Box>
              )
            ) : null}
          </Box>
        </Box>
        <Box my={2}>
          <Box>이름</Box>
          <SimpleTextField
            name="txtName"
            radius={5}
            value={personInfo.txtName || ""}
            onChange={(event)=>handleChange(event)}
          />
        </Box>
        {/*<BirthTextSet txtBirth={txtBirth} setTxtBirth={setTxtBirth} />*/}
        <Box sx={{ my: 2 }}>
          <Box>회사명</Box>
          <SimpleTextField
            name="txtCompany"
            radius={5}
            maxLength={12}
            placeholder="회사명을 입력해주세요"
            value={personInfo.txtCompany || ""}
            onChange={(event)=>handleChange(event)}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Box>휴대전화</Box>
          <SimpleTextField
            name="txtTel"
            radius={5}
            maxlength={12}
            placeholder="(예시) 01012345678"
            value={personInfo.txtTel || ""}
            onChange={(event)=>handleChange(event)}
          />
        </Box>
        <Box sx={{ my: 2 }}>
          <Box>이메일</Box>
          <SimpleTextField
            name="txtEmail"
            radius={5}
            type="email"
            value={personInfo.txtEmail || ""}
            onChange={(event)=>handleChange(event)}
          />
        </Box>
        <Box sx={{ mt: 2, mb: 4, display: "flex", justifyContent: "center" }}>
          회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며,동의합니다.
        </Box>
        <Box>
          <ColorButton color="secondary" onClick={handleJoin}>
            회원가입하기
          </ColorButton>
        </Box>
        <Box sx={{ my: 2 }}>
          <ColorButton onClick={handlePageFlag} color="secondary">
              돌아가기
          </ColorButton>
        </Box>
      </Box>  
    </Container>
  );
};

export default UserJoin;
