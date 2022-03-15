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

const ServiceVoteAgent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box display="flex">
        <BodyText text="D-SOP Blockchain agent" color="#0F0F0F" marginTop="false"></ BodyText>
        <BodyText text=" 는"  marginTop="false"></ BodyText>
      </Box>
      <Box marginTop="false">
        <BodyText text="투표 기록을 암호화한 후 이더리움 네트워크에 저장 함으로써 유권자와 관리자 모두의 걱정을 덜어드립니다."></ BodyText>
        <BodyText text="강력한 스케쥴링 기능을 통해 투표 기간에만 암호화 처리를 할수 있게 프로그래밍 가능하여 불필요한 비용(이더리움소모) 발생을 최소화 할 수 있습니다."></ BodyText>
        <BodyText text="블록체인 암호화를 적용하여 유권자의 믿음을 높일 수 있고,  추후 분쟁 발생시 블록체인에 저장된 데이터와 실데이터 비교를 통해 조작이 없음을 증빙 할 수 있습니다."></ BodyText>
      </Box>
    </Box>
  );
};

export default ServiceVoteAgent;
