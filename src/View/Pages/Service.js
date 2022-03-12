import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import ServiceDecs from "../Container/ServiceContainer/ServiceDecs";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import ServiceVote from "../Container/ServiceContainer/ServiceVote";
import ServiceDocument from "../Container/ServiceContainer/ServiceDocument";
import ServicePayment from "../Container/ServiceContainer/ServicePayment";
import ServiceAccess from "../Container/ServiceContainer/ServiceAccess";

export const useStyles = makeStyles((theme) => ({
}));


const tabContainText = [
  { id: 1, title: "투표기록조작감지" },
  { id: 2, title: "증빙문서조작감지" },
  { id: 3, title: "결제조작감지" },
  { id: 4, title: "접근기록조작감지" },
];

const Service = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    //console.log(newValue);
  };

  return (
    <Box sx={{ mt: 14 }}>
      <ServiceDecs />
      <TabBar handleChange={handleChange} items={tabContainText} value={value}/>
      <Box display="flex" flexDirection="column" alignItems="center">
        {value === 0 && <ServiceVote />}
        {value === 1 && <ServiceDocument />}
        {value === 2 && <ServicePayment />}
        {value === 3 && <ServiceAccess />}
      </Box>
    </Box>
  );
};

export default Service;
