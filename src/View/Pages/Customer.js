import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import CustomerNotice from "../Container/CustomerContainer/CustomerNotice";
import CustomerFaq from "../Container/CustomerContainer/CustomerFaq";
import CustomerSupports from "../Container/CustomerContainer/CustomerSupports";
import CustomerDecs from "../Container/CustomerContainer/CustomerDecs";
import CustomerInquiry from "../Container/CustomerContainer/CustomerInquiry";

export const useStyles = makeStyles((theme) => ({
}));

const tabContainText = [
  { id: 1, title: "1:1 문의" },
  { id: 2, title: "공지사항" },
  { id: 3, title: "자주하는질문" },
  { id: 4, title: "기술지원" },
];

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
      <TabBar handleChange={handleChange} items={tabContainText} value={value}/>
      <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {value === 0 && <CustomerInquiry />}
        {value === 1 && <CustomerNotice />}
        {value === 2 && <CustomerFaq />}
        {value === 3 && <CustomerSupports />}
      </Box>
    </Box>
  );
};

export default Customer;
