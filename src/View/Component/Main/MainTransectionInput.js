import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import MainTitle from "../Common/MainTitle";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "616px",
    height: "420px",
    objectFit: "cover",
  }
}));

const MainTransectionInput = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { image, location, title, decs } = props;

  return (
    <Box
      display="flex"
      //flexDirection={isMobile || isTablet ? "column" : "row"}
      //mt={[5, 6, 8]}
      //mb={[5, 6, 8]}
    >
      <Box
        display="flex"
        flexBasis="50%"
        justifyContent="center"
        border={1}
        p={2}
      >
        <MainTitle title="파일 해시 값 생성하기" size="h3"/>
      </Box>
      <Box
        display="flex"
        flexBasis="50%"
        justifyContent="center"
        border={1}
        p={2}
      >
        <MainTitle title="이더리움 해시값 조회하기" size="h3"/>
      </Box>
    </Box>
  );
};

export default MainTransectionInput;
