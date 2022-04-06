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

const TitleText = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const {
    title, 
    subtitle, 
    description, 
    description2, 
    description3, 
    size, 
    decssize, 
    align,
  } = props
  return (
    <Box>
      <Box>
        <TexitItem text={title} variant={size} align={align}/>
        <TexitItem text={subtitle} variant={size} align={align}/>
      </Box>
      <Box sx={{ mt: [ 2, 5, 5] }}>
        <TexitItem text={description} variant={decssize} align={align}/>
        <TexitItem text={description2} variant={decssize} align={align}/>
        <TexitItem text={description3} variant={decssize} align={align}/>
      </Box>
    </Box>
  );
};

export default TitleText;


const TexitItem = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { text, variant, align }  = props;
   
  return (
    <Box sx={{ mt: 1 }}>
      <Typography
        sx={{ 
          textAlign: align === "left" ? "left" : "center",
          typography: variant,
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
