import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import BodyText from "../Common/BodyText"

const useStyles = makeStyles((theme) => ({
  
}));

const ServiceVoteInfo = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box display="flex">
        <BodyText text="선거/설문조사 서비스에서 유권자, 관리자 모두" marginTop="false"></ BodyText>
        <BodyText text="투표 기록 조작은" color="#0F0F0F" marginTop="false"></ BodyText>
        <BodyText text="가장 큰 문제 중 하나 입니다." marginTop="false"></ BodyText>
      </Box>
      <Box mt={2} display="flex" marginTop="false">
        <BodyText text="블록체인의 도움 없이는 아무리 강력한 보안 기술을 도입 하여도 내/외부자의 악의적인 조작은 근본적으로 막을 수 없습니다."></ BodyText>
      </Box>
    </Box>
  );
};

export default ServiceVoteInfo;
