import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import { GetUserList } from "../Common/ManagerFunc";

export const useStyles = makeStyles((theme) => ({
}));

const Manager = (props) => {
  const classes = useStyles();

  useEffect(() => {
    GetUserList()
  }, []);

  return (
    <Box sx={{ mt: 14 }}>
      관리자
    </Box>
  );
};

export default Manager;
