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
  const { text, size, color, location, marginTop } = props;

  return (
    <Box>
      <Typography
        sx={{
          mt: marginTop === "false" ? "5px" : "16px",
          align: location === "center" ? "center" : "left",
          typography: "h5",
          color: color
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default MainBodyText;
