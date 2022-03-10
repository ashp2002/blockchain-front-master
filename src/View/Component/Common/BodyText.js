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

const MainBodyText = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { text, size, color, location } = props;

  return (
    <Box>
      <Typography
        mt={2}
        align={location === "center" ? "center" : "left"}
        variant="h5"
        color={color}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MainBodyText;
