import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import { Route } from "react-router";

import { Box } from "@mui/material";

import ScrollToTop from "./Common/ScrollToTop";
import Main from "./Pages/Main";
import Service from "./Pages/Service";
import CaseExample from "./Pages/CaseExample";
import Customer from "./Pages/Customer";
import User from "./Pages/User";
import Header from "./Container/Header";
import Bottom from "./Container/Bottom";

const MainRoute = () => {
  const { login, setLogin } = useContext(AppContext);

  useEffect(() => {}, []);
  return (
    <Box>
      <Header />
      <ScrollToTop>
        <Route path={["/", "/Main"]} component={Main} exact={true} />
        <Route path={["/Service"]} component={Service} />
        <Route path={["/CaseExample"]} component={CaseExample} />
        <Route path={["/Customer"]} component={Customer} />
        <Route path={["/User"]} component={User} />
      </ScrollToTop>
      <Bottom />
    </Box>
  );
};
export default MainRoute;
