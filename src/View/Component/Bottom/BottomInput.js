import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import SimpleTextField from "../Common/SimpleTextField";
import SimpleTextArea from "../Common/SimpleTextArea";

const useStyles = makeStyles((theme) => ({
 
}));

const BottomInput = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box> 
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{ 
            flexBasis: "50%",
            justifyContent: "center",
            mr: 4,
          }} 
        >
          <Box>
            <SimpleTextField />
          </Box>
        </Box>
        <Box
           sx={{ 
            flexBasis: "50%",
            justifyContent: "center",
          }} 
        >
          <Box>
            <SimpleTextField />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <SimpleTextArea rows="10"/>
      </Box>
    </Box>
  );
};

export default BottomInput;
