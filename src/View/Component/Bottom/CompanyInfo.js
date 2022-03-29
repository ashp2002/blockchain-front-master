import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import CompanyInfoItem from "../Bottom/CompanyInfoItem";

const useStyles = makeStyles((theme) => ({
  
}));

const CompanyInfo = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Box sx={{ px: 5, display: "flex", justifyContent: "space-between" }}>
      <CompanyInfoItem 
        text1= "서울특별시 강서구 마곡중앙6로 63," 
        text2="마곡테크노타워 6층 A667호" />
      <CompanyInfoItem
        border="true"
        text1= "Tel. 010-3139-9986"/>
      <CompanyInfoItem 
        text1= "contact@d-sop.co.kr"/>
    </Box>
  );
};

export default CompanyInfo;
