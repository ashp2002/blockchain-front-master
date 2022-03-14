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
import TitleText from "../../Component/Common/TitleText"
import ColorButton from "../../Component/Common/ColorButton";
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import BottomInput from "../../Component/Bottom/BottomInput";
const useStyles = makeStyles((theme) => ({
 
}));

export default function WhiteBottom(props) {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box sx={{
        width: "100%",
        backgroundColor: "white",
      }}>
        <Container maxWidth="lg">
          <Box py={8}>
            <TitleText
                title="COMTACT US"
                description="문의하실 부분이 있다면 여기 남겨 주세요."
                description2="1시간 이내에 담당자가 연락 드리겠습니다."
                size="h3"
            />
          </Box>
          <Box px={10}>
            <BottomInput />
          </Box>
          <Box width="40%" margin="auto" mt={2}>
            <ColorButton color="primary">
              무료상담받기 
            </ColorButton> 
          </Box>
          <Box mt={6}>
              <CompanyInfo />
          </Box>
        </Container>
      </Box>
    </>
  );
}