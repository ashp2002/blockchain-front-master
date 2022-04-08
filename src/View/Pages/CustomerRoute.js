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
  //{ id: 1, title: "1:1 문의" },
  { id: 1, title: "기술지원" },
  { id: 2, title: "자주하는질문" },
  { id: 3, title: "공지사항" },
];

const CustomerRoute = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [tabIndex, setTabIndex] = useState(0);
  const newValue = useSelector((state) => state.CommonRedux.tabValue);

  useEffect(() => {
  }, []);

  const handleChange = (value) => {
    switch (value) {
      /*case 0:
        return history.push("/Customer/CustomerInquiry");*/
      case 0:
        return history.push("/Customer/CustomerSupports");
      case 1:
        return history.push("/Customer/CustomerFaq");
      case 2:
        return history.push("/Customer/CustomerNotice");
    }
  };

  return (
    <Box sx={{ mt: 14 }}>
      <CustomerDecs />
      <TabBar handleChange={handleChange} items={tabContainText} index={tabIndex} setIndex={setTabIndex} />
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/*<Route path={["/Customer/CustomerInquiry"]} component={PageInquiry} />*/}
        <Route path={["/Customer", "/Customer/CustomerSupports"]} component={PageSupports} exact={true} />
        <Route path={["/Customer/CustomerFaq"]} component={PageFaq} />
        <Route path={["/Customer/CustomerNotice"]} component={PageNotice} />
      </Box>
    </Box>
  );
};

export default CustomerRoute;
