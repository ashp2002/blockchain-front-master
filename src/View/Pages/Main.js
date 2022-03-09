import React, { useEffect, useState } from "react";
import MainDecs from "../Container/MainContainer/MainDecs";
import MainAgent from "../Container/MainContainer/MainAgent";
import MainDBImmutability from "../Container/MainContainer/MainDBImmutability";
import MainEtherInfo from "../Container/MainContainer/MainEtherInfo";
import MainAgentMonitor from "../Container/MainContainer/MainAgentMonitor";
import { Box } from "@mui/material";
const Main = () => {
  return (
    <Box sx={{ mt: 14 }}>
      <MainDecs />
      <MainAgent />
      <MainDBImmutability />
      <MainEtherInfo />
      <MainAgentMonitor />
    </Box>
  );
};

export default Main;
