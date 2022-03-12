import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import CaseExampleTest from "../Container/CaseExampleContainer/CaseExampleTest";
import CaseExampleDecs from "../Container/CaseExampleContainer/CaseExampleDecs";

export const useStyles = makeStyles((theme) => ({
}));

const CaseExample = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    //console.log(newValue);
  };

  return (
    <Box sx={{ mt: 14 }}>
      <CaseExampleDecs />
      <CaseExampleTest />
    </Box>
  );
};

export default CaseExample;
