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

const MainDecsButton = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box mt={6} display="flex" justifyContent="center">
      <Box border={1}>
        <Button>
          문의하기
        </Button>
      </Box>
      <Box ml={10} border={1}>
        <Button>
          솔루션 보기
        </Button>
      </Box>  
    </Box>
  );
};

export default MainDecsButton;
