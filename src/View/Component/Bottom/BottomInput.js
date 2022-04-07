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
  const { setPersonInfo, personInfo } = props;

  const handleChange = (event, name) => {
    setPersonInfo(personInfo=>({
      ...personInfo,
      [event.target.name] : event.target.value,
    }))
  };

  return (
    <Box> 
      <Box sx={{ display: "flex", flexDirection: isMobile || isTablet ? "column" : ""}}>
        <Box sx={{ flexBasis: "50%", justifyContent: "center", mr: 4, mb: isMobile || isTablet ? 2 : "" }}>
          <Box>
            <SimpleTextField
              name="txtEmail"
              value={personInfo.txtEmail || ""}
              onChange={(event)=>handleChange(event)}
              placeholder="E-Mail 입력"
            />
          </Box>
        </Box>
        <Box sx={{ flexBasis: "50%", justifyContent: "center" }}>
          <Box>
            <SimpleTextField 
              name="txtTel"
              value={personInfo.txtTel || ""}
              onChange={(event)=>handleChange(event)}
              placeholder="연락처 입력"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <SimpleTextArea 
          name="txtContent"
          value={personInfo.txtContent || ""}
          onChange={(event)=>handleChange(event)}
          rows="10"
          placeholder="상담내용을 입력해주세요"
        />
      </Box>
    </Box>
  );
};

export default BottomInput;
