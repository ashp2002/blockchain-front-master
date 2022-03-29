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
    <Box sx={{ pt: 11 }}>
      <Box>
        <Typography sx={{ textAlign: "left", typography: "h3" }}>
          블록체인 기술도 모두 다 같은 블록체인이 아닙니다!
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ textAlign: "left", typography: "h3" }}>
          절대 신뢰할 수 있는 블록체인 네트워크는 바로
        </Typography>
        <Typography
          variant="h3" 
          sx={{ color: theme.palette.primary.main }}
        >
          이더리움 메인 넷
        </Typography>
        <Typography sx={{ typography: "h3" }}>
          입니다!
        </Typography>
      </Box>
    </Box>
  );
};

export default MainEtherInfoTitle;
