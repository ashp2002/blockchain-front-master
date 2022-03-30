import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import { Link as RouterLink, useHistory, useLocation } from "react-router-dom";
import {
  Link,
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { 
  ItemInputFuncN_inquiry
} from "../Common/BoardFunc";
import DarkTheme from "../Common/DarkTheme";
import TitleText from "../Component/Common/TitleText";
import BodyText from "../Component/Common/BodyText";
import ColorButton from "../Component/Common/ColorButton";
import CompanyInfo from "../Component/Bottom/CompanyInfo";
import BottomInput from "../Component/Bottom/BottomInput";
const useStyles = makeStyles((theme) => ({
 
}));

export default function Footer(props) {
  const theme = useTheme();
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [personInfo, setPersonInfo] = useState({
    txtName: "",
    txtTel: "",
    txtEmail: "",
    txtContent: "",
  });

  const hadleClickReg = () => {
    ItemInputFuncN_inquiry(dispatch, personInfo);
    setPersonInfo("");
  };

  return (
    <>
      <ThemeProvider theme={DarkTheme}>
      <Box 
        sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        display: location.pathname === "/Customer" ? "none" : "",
        }}
        >
        <Container sx={{ maxWidth: "lg" }}>
          <Box sx={{pt: 8, pb: 5}}>
            <TitleText
                title="COMTACT US"
                description="문의하실 부분이 있다면 여기 남겨 주세요."
                description2="1시간 이내에 담당자가 연락 드리겠습니다."
                size="h3"
            />
          </Box>
          <Box margin="auto" width="70%">
            <BottomInput setPersonInfo={setPersonInfo} personInfo={personInfo}/>
          </Box>
          <Box 
            sx={{
              width: "40%",
              margin: "auto",
              mt: 2,
            }}
          >
            <ColorButton onClick={hadleClickReg} color="primary">
              무료상담받기 
            </ColorButton> 
          </Box>
          <Box sx={{ mt: 6 }}>
              <CompanyInfo />
          </Box>
        </Container>
      </Box>
      <Box sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
      }}>
        <Container maxWidth="lg" width="70%">
          <Box sx={{
            pt: 8,
            pb: 5,
            px: 8,
            display: "flex",
            justifyContent: "space-between",
            }}
          >
            <BodyText text="개인정보 보호정책" />
            <BodyText text="Copyright D-SOP soft Inc. All rights reserved." />
          </Box>
        </Container>
      </Box>
      </ThemeProvider>
    </>
  );
}
