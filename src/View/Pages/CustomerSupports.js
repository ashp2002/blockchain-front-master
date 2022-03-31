import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import CustomerSupports from "../Container/CustomerContainer/CustomerSupports";
import { loadClear } from "../modules/BoardRedux";

export const useStyles = makeStyles((theme) => ({
}));

const tabContainText = [
  { id: 1, title: "1:1 문의" },
  { id: 2, title: "공지사항" },
  { id: 3, title: "자주하는질문" },
  { id: 4, title: "기술지원" },
];

const CustomerSupports = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleChange = (newValue) => {
    dispatch(loadClear());
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
        <CustomerSupports />
      </Box>
    </Box>
  );
};

export default CustomerSupports;
