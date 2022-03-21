import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTheme, makeStyles } from "@mui/styles";
import qs from "qs";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Box,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import { ListGetFunc, ItemGetFunc } from "../../Common/TableFunc";
import TableSupports from "../../Component/Customer/TableSupports"
import TableItemSupports from "../../Component/Customer/TableItemSupports"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerSupports = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.TableRedux.Items);
  const ItemInfo = useSelector((state) => state.TableRedux.ItemInfo);
  const [flagPage, setFlagPage] = useState(0);
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  useEffect(() => {
    ListGetFunc(dispatch)
  }, [dispatch]);

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc(dispatch, idx)
  };

  const handleItemPageClose = (data) => {
    setFlagPage(data);
    console.log(flagPage);
  };

  const tableHead = [
    { title: "NO.", width: "100", align: "center", font: "subtitle1" },
    { title: "제목", align: "center", font: "subtitle1" },
    { title: "글쓴이", width: "120", align: "left", font: "subtitle1" },
    { title: "작성날짜", width: "150", align: "center", font: "subtitle1" },
    { title: "조회수", width: "100", align: "center", font: "subtitle1" },
  ];

  return (
      <Container maxWidth="lg">
        <Box mt={10}>
          <TitleText
            title="기 술 지 원"
            size="h2"
          />
        </Box>
        <Box my={10} width="80%" m="auto">
          {flagPage == 0 ?
          <TableSupports tableHead={tableHead} tableItem={Items} handleItemPageOpen={handleItemPageOpen} />
          : <TableItemSupports Item={ItemInfo} handleItemPageClose={handleItemPageClose} />}
        </Box>
        <Box mb={10}>
          <CompanyInfo />
        </Box>
      </Container>
  );
};
export default CustomerSupports;
