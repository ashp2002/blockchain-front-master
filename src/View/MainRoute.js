import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { Route } from "react-router";

import { Box } from "@mui/material";

import Main from "./Pages/Main";
import Service from "./Pages/Service";
import CaseExample from "./Pages/CaseExample";
import Customer from "./Pages/Customer";
import Header from "./Container/Header";
import Bottom from "./Container/Bottom";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);

  useEffect(() => {}, []);
  return (
    <Box>
      <Header />
      <Route path={["/", "/Main"]} component={Main} exact={true} />
      <Route path={["/Service"]} component={Service} />
      <Route path={["/CaseExample"]} component={CaseExample} />
      <Route path={["/Customer"]} component={Customer} />
      <Bottom />
    </Box>
  );
};
export default MainRoute;
