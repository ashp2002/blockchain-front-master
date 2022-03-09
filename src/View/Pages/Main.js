import React, { useEffect, useState } from "react";
import MainDecs from "../Container/MainContainer/MainDecs";
import MainAgent from "../Container/MainContainer/MainAgent";
import { Box } from "@mui/material";
const Main = () => {
  return (
    <Box sx={{ mt: 14 }}>
      <MainDecs />
      <MainAgent />
    </Box>
  );
};

export default Main;
