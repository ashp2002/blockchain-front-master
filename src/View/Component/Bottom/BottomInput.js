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
      <Box display="flex">
        <Box
          flexBasis="50%"
          justifyContent="center"
          pr={4}
        >
          <Box>
            <SimpleTextField />
          </Box>
        </Box>
        <Box
          flexBasis="50%"
          justifyContent="center"
          pl={4}
        >
          <Box>
            <SimpleTextField />
          </Box>
        </Box>
      </Box>
      <Box mt={2}>
        <SimpleTextArea rows="10"/>
      </Box>
    </Box>
  );
};

export default BottomInput;
