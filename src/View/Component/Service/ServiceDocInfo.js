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
        <BodyText text="증빙 문서 발급을 하는 서비스에서 증빙서류의 발급 내역 은 가장 중요한 기록이며 조작될 우려가 높은 자료입니다." marginTop="false"></ BodyText>
      </Box>
      <Box mt={2} display="flex" marginTop="false">
        <BodyText text="이는 블록체인의 도움 없이는 아무리 강력한 보안 기술을 도입 하더라도 내/외부자의 악의적인 조작은 근본적으로 막을 수 없습니다."></ BodyText>
      </Box>
    </Box>
  );
};

export default ServiceVoteInfo;
