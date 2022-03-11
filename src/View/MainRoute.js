import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { Route } from "react-router";

import { Box } from "@mui/material";

import Main from "./Pages/Main";
import Header from "./Container/Header";
import Bottom from "./Container/Bottom";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);

  useEffect(() => {}, []);
  return (
    <Box>
      <Header />
      <Route path={["/", "/Main"]} component={Main} exact={true} />
      <Bottom />
    </Box>
  );
};
export default MainRoute;
