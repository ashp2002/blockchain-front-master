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
import TableSupports from "../../Component/Customer/TableSupports"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerSupports = () => {
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

  const tableHead = [
    { title: "NO.", width: "200", align: "center", font: "subtitle1" },
    { title: "제목", align: "center", font: "subtitle1" },
    { title: "글쓴이", width: "120", align: "left", font: "subtitle1" },
    { title: "작성날짜", width: "150", align: "center", font: "subtitle1" },
    { title: "조회수", width: "100", align: "center", font: "subtitle1" },
  ];

  let tableItem = [
    { id: "1" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "1", status: "완료", isprivate: false, views: "100"},
    { id: "2" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "2", status: "완료", isprivate: false, views: "100"},
    { id: "3" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "3", status: "완료", isprivate: false, views: "10"},
    { id: "4" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "4", status: "완료", isprivate: false, views: "5"},
    { id: "5" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "5", status: "완료", isprivate: false, views: "100"},
    { id: "6" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "6", status: "완료", isprivate: false, views: "100"},
    { id: "7" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "7", status: "완료", isprivate: false, views: "10"},
    { id: "8" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "8", status: "완료", isprivate: false, views: "5"},
    { id: "9" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "9", status: "완료", isprivate: false, views: "100"},
    { id: "10" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "10", status: "완료", isprivate: false, views: "100"},
    { id: "11" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "11", status: "완료", isprivate: false, views: "10"},
    { id: "12" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "12", status: "완료", isprivate: false, views: "5"},
    { id: "13" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "13", status: "완료", isprivate: false, views: "100"},
    { id: "14" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "14", status: "완료", isprivate: false, views: "100"},
    { id: "15" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "15", status: "완료", isprivate: false, views: "10"},
    { id: "16" , name: "안성호", title: "문의제목", regdate: "2022/04/16", idx: "16", status: "완료", isprivate: false, views: "5"},
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
            title="기 술 지 원"
            size="h2"
          />
        </Box>
        <Box my={10} width="80%" m="auto">
          <TableSupports tableHead={tableHead} tableItem={tableItem}/>
        </Box>
        <Box mb={10}>
          <CompanyInfo />
        </Box>
      </Container>
  );
};
export default CustomerSupports;
