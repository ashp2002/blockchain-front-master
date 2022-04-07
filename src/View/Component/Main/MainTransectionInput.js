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
  "@media (max-width: 700px)": {
    imgBox: {
      width: "350px",
      height: "200px",
      objectFit: "cover",
    },
  },
}));

const MainTransectionInput = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { image, location, title, decs } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        border: 2,
        borderColor: "#707070",
        borderRadius: 15,
        px: 4,
        py: 14,
        width: "100%",
      }}
    >
      <Box
        sx={{
          justifyContent: "center",
          px: 8,
          py: 3,
          width: "100%",
          flexBasis: "50%",
        }}
      >
        <TitleText title="파일 해시 값 생성하기" size="h4"/>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={TransectionTemp1}
            className={classes.imgBox}
          ></img>
        </Box>
        <Box sx={{ mt: 6, mb: 4 }}>
          <SimpleTextField />
        </Box>
        <Box sx={{ mb: 3 }}>
          <ColorButton color="secondary"> 복사하기 </ ColorButton>
        </Box>
      </Box>
      <Box
        sx={{
          justifyContent: "center",
          px: 8,
          py: 3,
          width: "100%",
          flexBasis: "50%",
        }}
      >
        <TitleText title="이더리움 해시값 조회하기" size="h4"/>
        <Box>
          <SimpleTextField />
        </Box>
        <Box sx={{ mt: 4, mb: 6 }}>
          <ColorButton color="secondary"> 복사하기 </ ColorButton>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img
            src={TransectionTemp2}
            className={classes.imgBox}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default MainTransectionInput;
