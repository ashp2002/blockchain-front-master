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
  box: {
    width: "200px",
    height: "175px",
  }
}));

const MainPartnersCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { image, title, margin } = props;

  return (
    <Box>
      <Box 
        border={8}
        display="flex" 
        flexDirection="column" 
        justifyContent="center"
        borderRadius={1}
        borderColor="#E5E5E5"
        mx={margin === "true" ? "80px" : "0px"}
        className={classes.box}
        >
        <Box display="flex" justifyContent="center" >
          <img
            src={image}
          ></img>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" mb={4} >
        <Typography
          mt={1}
          align="center"
          variant="h5"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default MainPartnersCard;
