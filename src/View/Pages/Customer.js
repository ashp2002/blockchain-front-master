import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import CustomerTest from "../Container/CustomerContainer/CustomerTest";
import CustomerDecs from "../Container/CustomerContainer/CustomerDecs";

export const useStyles = makeStyles((theme) => ({
}));

const Customer = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    //console.log(newValue);
  };

  return (
    <Box sx={{ mt: 14 }}>
      <CustomerDecs />
      <CustomerTest />
    </Box>
  );
};

export default Customer;
