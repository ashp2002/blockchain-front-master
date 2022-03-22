import React from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Box,
  Typography,
  Divider,
  useMediaQuery,
  Pagination,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import SimpleTextField from "./SimpleTextField"
import SimpleTextArea from "./SimpleTextArea"

const LabelTextField = (props) => {
  const theme = useTheme();
  const { title, inputWidth, handleChange, name, value, multiline } = props;
  console.log(value)
  return (
    <Box display="flex" my={2}>
      <Box mr={2} flexBasis="20%">
        <Typography variant="h5">
          {title}
        </Typography>
      </Box>
      <Box maxWidth={inputWidth} display="flex" flexBasis="80%"> 
        {multiline != null ?
          <SimpleTextArea 
          onChange={(event)=>handleChange(event)} 
          radius={5} 
          value={value || ""}
          name={name}
          rows={multiline}
          />:
          <SimpleTextField 
            onChange={(event)=>handleChange(event)} 
            radius={5} 
            value={value || ""}
            name={name}
          />
        }
      </Box>
    </Box>
  );
};

export default LabelTextField;