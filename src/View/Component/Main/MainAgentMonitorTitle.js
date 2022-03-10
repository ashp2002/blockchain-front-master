import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },

  subtitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
}));

const MainEtherInfoTitle = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box pt={11}>
      <Box display="flex" justifyContent="center">
        <Typography
          variant="h5"
          color="#0F0F0F"
        >
          DSOP BlockChain Agent
        </Typography>
        <Typography
          variant="h5"
        >
          는 3단계에 걸친 모니터링 기능을 통해 Agent의 높은 가용성을 보장합니다.
        </Typography>
      </Box>
      <Box mt={2} display="flex" justifyContent="center">
        <Typography
          variant="h5"
        >
          분리된 모니터링 모듈을 제공하여 외부에서 서비스 이상징후를 즉각적으로 파악 하고 조치 할 수 있도록 제공합니다.
        </Typography>
      </Box>
    </Box>
  );
};

export default MainEtherInfoTitle;
