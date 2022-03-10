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
import SimpleTextField from "../Common/SimpleTextField";
import ColorButton from "../Common/ColorButton";
import TransectionTemp1 from "../../../Images/TransectionTemp1.png"
import TransectionTemp2 from "../../../Images/TransectionTemp2.png"

const useStyles = makeStyles((theme) => ({
 
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
      border={1}
      px={4}
      py={14}
    >
      <Box
        flexBasis="50%"
        justifyContent="center"
        borderRight={1}
        px={8}
      >
        <TitleText title="파일 해시 값 생성하기" size="h3"/>
        <Box display="flex" justifyContent="center">
          <img
            src={TransectionTemp1}
          ></img>
        </Box>
        <Box mt={6} mb={4}>
          <SimpleTextField />
        </Box>
        <Box mb={3}>
          <ColorButton color="secondary"> 복사하기 </ ColorButton>
        </Box>
      </Box>
      <Box
        flexBasis="50%"
        justifyContent="center"
        px={8}
      >
        <TitleText title="이더리움 해시값 조회하기" size="h3"/>
        <Box>
          <SimpleTextField />
        </Box>
        <Box mt={4} mb={6}>
          <ColorButton color="secondary"> 복사하기 </ ColorButton>
        </Box>
        <Box display="flex" justifyContent="center">
          <img
            src={TransectionTemp2}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default MainTransectionInput;
