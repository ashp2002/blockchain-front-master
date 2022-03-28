import React, { useState, useContext, useEffect } from "react";
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
  const history = useHistory();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(location.pathname);
  return (
    <>
      <ThemeProvider theme={DarkTheme}>
      <Box sx={{
        width: "100%",
        backgroundColor: theme.palette.secondary.main,
        display: location.pathname === "/Customer" ? "none" : "",
        }}>
        <Container sx={{ maxWidth: "lg" }}>
          <Box sx={{py: 8}}>
            <TitleText
                title="COMTACT US"
                description="문의하실 부분이 있다면 여기 남겨 주세요."
                description2="1시간 이내에 담당자가 연락 드리겠습니다."
                size="h3"
            />
          </Box>
          <Box sx={{py: 10}}>
            <BottomInput />
          </Box>
          <Box 
            sx={{
              width: "40%",
              margin: "auto",
              mt: 2,
            }}
          >
            <ColorButton color="primary">
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
        <Container maxWidth="lg">
          <Box sx={{
            py: 4,
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
