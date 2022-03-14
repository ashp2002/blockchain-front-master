import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import WhiteBottom from "../../Component/Customer/WhiteBottom";

const useStyles = makeStyles((theme) => ({
 
}));

const CustomerInquiry = () => {
  const classes = useStyles();

  return (
    <Box width="100%" mb={10}>
        <WhiteBottom />
    </Box>
  );
};
export default CustomerInquiry;