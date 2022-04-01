import React, { useEffect, useState } from "react";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { Route } from "react-router";
import { tabIndex } from "../modules/CommonRedux";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import TabBar from "../Component/Common/TabBar";
import { Box } from "@mui/material";
import PageSupports from "./Customer/PageSupports";
import PageInquiry from "./Customer/PageInquiry";
import PageFaq from "./Customer/PageFaq";
import PageNotice from "./Customer/PageNotice";
import CustomerDecs from "../Container/CustomerContainer/CustomerDecs";

export const useStyles = makeStyles((theme) => ({
}));

const tabContainText = [
  { id: 1, title: "1:1 문의" },
  { id: 2, title: "공지사항" },
  { id: 3, title: "자주하는질문" },
  { id: 4, title: "기술지원" },
];

const CustomerRoute = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleChange = (value) => {
    switch (value) {
      case 0:
        return history.push("/Customer/CustomerInquiry");
      case 1:
        return history.push("/Customer/CustomerNotice");
      case 2:
        return history.push("/Customer/CustomerFaq");
      case 3:
        return history.push("/Customer/CustomerSupports");
    }
  };

  return (
    <Box sx={{ mt: 14 }}>
      <CustomerDecs />
      <TabBar handleChange={handleChange} items={tabContainText} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Route path={["/Customer", "/Customer/CustomerInquiry"]} component={PageInquiry} exact={true} />
        <Route path={["/Customer/CustomerSupports"]} component={PageSupports} />
        <Route path={["/Customer/CustomerFaq"]} component={PageFaq} />
        <Route path={["/Customer/CustomerNotice"]} component={PageNotice} />
      </Box>
    </Box>
  );
};

export default CustomerRoute;
