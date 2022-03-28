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
  boximage: {
    width: "250px",
    height: "160px",
  }
}));

const MainDBImmutabilityCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { image, title } = props;

  return (
    <Box 
      sx={{
        px: [1, 3, 4],
        py: [2, 5, 7],
        border: 2,
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between",
        borderRadius: 1,
        borderColor: "#A8A8A8",
      }} 
    >
      <Box 
        className={classes.boximage}
        sx={{
          display: "flex", 
          justifyContent: "center"
        }} 
      >
        <img
          src={image}
        ></img>
      </Box>
      <Box mt={5}>
        <Typography sx={{ variant: "body1", align: "center"}}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainDBImmutabilityCard;
