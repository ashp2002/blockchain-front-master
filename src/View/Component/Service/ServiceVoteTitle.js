import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import TitleText from "../Common/TitleText";

const useStyles = makeStyles((theme) => ({

}));

const ServiceVoteTitle = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box pt={11}>
      <Box>
        <TitleText 
          title="블록체인 기술도 모두 다 같은 블록체인이 아닙니다!" 
          subtitle="절대 신뢰할 수 있는 블록체인 네트워크는 바로 이더리움 메인 넷 입니다!"
          size={isMobile || isTablet ? "h4" : "h3"} 
        />
      </Box>
    </Box>
  );
};

export default ServiceVoteTitle;
