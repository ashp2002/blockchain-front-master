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

}));

const ServiceVoteTitle = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box pt={11}>
      <Box>
        <Typography
          align="center"
          variant="h3"
        >
          블록체인 기술도 모두 다 같은 블록체인이 아닙니다!
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center">
        <Typography
          align="center"
          variant="h3"
        >
          절대 신뢰할 수 있는 블록체인 네트워크는 바로
        </Typography>
        <Typography
          color="primary"
          variant="h3"
        >
          이더리움 메인 넷
        </Typography>
        <Typography
          variant="h3"
        >
          입니다!
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceVoteTitle;
