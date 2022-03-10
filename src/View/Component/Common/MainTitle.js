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

const MainTitle = (props) => {
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
    align 
  } = props
  return (
    <Box pt={11}>
      <Box>
        <Typography
          align={align === "left" ? "left" : "center"}
          variant={size}
          className={classes.title}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          align={align === "left" ? "left" : "center"}
          variant={size}
          className={classes.title}
        >
          {subtitle}
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography
          align={align === "left" ? "left" : "center"}
          variant={decssize}
          className={classes.subtitle}
        >
          {description}
        </Typography>
        <Typography
          align={align === "left" ? "left" : "center"}
          variant={decssize}
          className={classes.subtitle}
        >
          {description2}
        </Typography>
        <Typography
          align={align === "left" ? "left" : "center"}
          variant={decssize}
          className={classes.subtitle}
        >
          {description3}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainTitle;
