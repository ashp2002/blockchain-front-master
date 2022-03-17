import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import qs from "qs";
import { useHistory } from "react-router-dom";
import {
  Button,
  Container,
  Box,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import TableNotice from "../../Component/Customer/TableNotice"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerNotice = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  const [flag, setFlag] = useState(false);
  const [addDialog, setaddDialog] = useState(false);
  const [addDialogN, setaddDialogN] = useState(false);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  let tableItem = [
    { id: "1" , title: "공지제목", regdate: "2022/04/16", idx: "1"},
    { id: "2" , title: "문의제목", regdate: "2022/04/16", idx: "2"},
    { id: "3" , title: "문의제목", regdate: "2022/04/16", idx: "3"},
    { id: "4" , title: "문의제목", regdate: "2022/04/16", idx: "4"},
    { id: "5" , title: "문의제목", regdate: "2022/04/16", idx: "5"},
    { id: "6" , title: "문의제목", regdate: "2022/04/16", idx: "6"},
    { id: "7" , title: "문의제목", regdate: "2022/04/16", idx: "7"},
    { id: "8" , title: "문의제목", regdate: "2022/04/16", idx: "8"},
    { id: "9" , title: "문의제목", regdate: "2022/04/16", idx: "9"},
    { id: "10" , title: "문의제목", regdate: "2022/04/16", idx: "10"},
    { id: "11" , title: "문의제목", regdate: "2022/04/16", idx: "11"},
    { id: "12" , title: "문의제목", regdate: "2022/04/16", idx: "12"},
    { id: "13" , title: "문의제목", regdate: "2022/04/16", idx: "13"},

  ];

  useEffect(() => {
    /*
    if (userData) {
      checkToken(setLogin, setUserData);
    }
    APIRequest("getQnaList")
      .then((receivedData) => {
        setdatas(receivedData);
        //console.log(receivedData);
      })
      .catch((err) => {
        alert("에러" + err);
        //console.log(err);
      });*/
  }, []);

  return (
      <Container maxWidth="lg">
        <Box mt={10}>
          <TitleText
            title="공 지 사 항"
            size="h2"
          />
        </Box>
        <Box my={10} width="80%" m="auto">
          <TableNotice tableItem={tableItem}/>
        </Box>
        <Box mb={10}>
          <CompanyInfo />
        </Box>
      </Container>
  );
};
export default CustomerNotice;
