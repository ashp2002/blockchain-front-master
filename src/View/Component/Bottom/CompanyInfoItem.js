import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import BodyText from "../Common/BodyText";

const useStyles = makeStyles((theme) => ({
  
}));

const CompanyInfoItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { text1, text2, border} = props;
  return (
    <Box
      sx={{
        display: "flex",
        flexBasis: "30%",
        justifyContent: "center",
        borderLeft: border === "true" ? 1 : "",
        borderRight: border === "true" ? 1 : "",
        borderColor: "#FFFFFF"
      }}
    >
      <Box py={2}>
        <BodyText marginTop="false" location="center" text={text1} />
        <BodyText marginTop="false" location="center" text={text2} />
      </Box>
    </Box>
  );
};

export default CompanyInfoItem;
