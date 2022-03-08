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
    color: "black",
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
  return (
    <Box>
      <Box>
        <Typography
          align="left"
          variant={props.size}
          color="inherit"
          className={classes.title}
        >
          {props.title}
        </Typography>
      </Box>
      <Box>
        <Typography
          align="left"
          variant={props.size}
          color="inherit"
          className={classes.title}
        >
          {props.subtitle}
        </Typography>
      </Box>
      <Box>
        <Typography
          align="left"
          variant="body1"
          color="inherit"
          className={classes.subtitle}
        >
          {props.description}
        </Typography>
        <Typography
          align="left"
          variant="body1"
          color="inherit"
          className={classes.subtitle}
        >
          {props.description2}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainTitle;
