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

const ServiceVoteTrust = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Box display="flex">
        <BodyText text="DSOP Agent" color="#0F0F0F" marginTop="false"></ BodyText>
        <BodyText text=" 는 하이브리드 조작 방식을 적용함으로써 이더리움 네트워크 트렌젝션 수를 줄여 직접적인 블록체인 투표방식보다 압도적으로 저렴한 "  marginTop="false"></ BodyText>
      </Box>
      <Box marginTop="false">
        <BodyText text="가격에 서비스를 활용할 수있으며  기존 데이터 베이스 방식의 빠른 트렌젝션 속도까지 보장받을 수 있습니다."></ BodyText>
        <BodyText text="본 솔루션은 이미 운영중인 선거 서비스에 적용되어 검증 되어 신뢰도를 보장합니다."></ BodyText>
        <BodyText text="지금 상담 받아보세요!"></ BodyText>
      </Box>
    </Box>
  );
};

export default ServiceVoteTrust;
