import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import MainBodyText from "./MainBodyText"

const useStyles = makeStyles((theme) => ({
  
}));

const MainEtherInfoBody = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box mt={5}>
      <MainBodyText text="블록체인은 불변성(Immutability)을 보장합니다." color="#0F0F0F"></MainBodyText>
      <MainBodyText text="참여자 간 합의(Consensus)하에 만들어진 거래들은 블록으로 만들어지고,  이 블록들은 체인 형태로 연결되며 참여자들에게 전파됩니다."></MainBodyText>
      <MainBodyText text="이 체인 형태로 인하여 특정 거래를 위/변조하려면, 해당 블록 이후 생성된 모든 참여자의 블록들을 빠른 시간 내에 위/변조해야 하므로 "></MainBodyText>
      <MainBodyText text="사실상 위/변조가 불가능합니다."></MainBodyText>
      <MainBodyText text="이렇게 블록체인은 거래와 거래에 포함된 데이터들에 대한 불변성을 제공합니다."></MainBodyText>
      <MainBodyText text="DSOP BlockChain Agent는 가장 거대한 네트워크를 가진 이더리움 네트워크를 활용 하므로 블록체인 데이터의 조작은 단호하게 불가능합니다.."></MainBodyText>
      <MainBodyText text="일부 업체의 경우 신뢰도가 낮은(네트워크 해쉬가 낮은) 블록체인으로 서비스를 하는 경우가 있으며,"></MainBodyText>
      <MainBodyText text="이 경우 어렵지 않게 블록체인이 해킹 될 수 있습니다."></MainBodyText>
      <MainBodyText text="자사 서비스는 이런 문제를 근본적으로 막을수 있게 가장 높은 해쉬파워를 가진 이더리움을 사용하여 고품질의 서비스를 제공합니다."></MainBodyText>
    </Box>
  );
};

export default MainEtherInfoBody;
