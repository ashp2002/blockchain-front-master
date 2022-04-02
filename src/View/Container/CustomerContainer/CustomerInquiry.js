import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Box,
  Typography,
  Divider,
  Pagination,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { 
  ListGetFunc_inquiry,
  ItemGetFunc_inquiry,
  ItemDelFunc_inquiry,
  ItemInputFuncN_inquiry
} from "../../Common/Board/BoardFunc_Inquiry";
import WhiteBottom from "../../Component/Customer/WhiteBottom";
import TitleText from "../../Component/Common/TitleText";
import BoardList_Inquiry from "../../Component/Customer/BoardList_Inquiry";

const useStyles = makeStyles((theme) => ({
 
}));

const CustomerInquiry = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [flagPage, setFlagPage] = useState(0);
  const [flag, setflag] = useState(false);
  const [page, setPage] = useState(0);
  const Items = useSelector((state) => state.BoardRedux_Inquiry.InquiryItems);
  const ItemInfo = useSelector((state) => state.BoardRedux_Inquiry.InquiryItemInfo);
  const userLevel = useSelector((state) => state.AccountRedux.userLevel);
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const _Fetching = useSelector((state) => state.AccountRedux.loginState);
  const [personInfo, setPersonInfo] = useState({
    txtName: "",
    txtTel: "",
    txtEmail: "",
    txtContent: "",
  });
  const tableHead = [
    { title: "NO.", width: "100", align: "center", font: "subtitle1" },
    { title: "이메일", align: "center", font: "subtitle1" },
    { title: "연락처", align: "center", font: "subtitle1" },
    { title: "날짜", width: "300", align: "center", font: "subtitle1" },
    { title: "답변여부", width: "100", align: "center", font: "subtitle1" },
  ];

  useEffect(() => {
    userLevel == 1 ? ListGetFunc_inquiry(dispatch) : ""
  }, []);
  
  useEffect(() => {
  }, [flag]);

  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
  };

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc_inquiry(dispatch, idx)
  };

  const hadleClickReg = () => {
    ItemInputFuncN_inquiry(dispatch, personInfo);
    setPersonInfo("");
  };

  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Box sx={{ width: "80%", mb: 10, m: "auto" }}>
        {userLevel == 1 ?
        <Box sx={{ m: "auto" }}>
          <Box sx={{ mt: 10, }}>
            <TitleText
              title="상 담 리 스 트"
              size="h2"
            />
          </Box>
          <Box sx={{ width: "90%", m: "auto" }}>
            <BoardList_Inquiry 
              tableHead={tableHead}  
              handleItemPageOpen={handleItemPageOpen}
              page={page} 
              Items={Items}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Pagination
              count={Items === null ? 0 : parseInt(Items.length / 10) + 1}
              page={page + 1}
              onChange={handleChangePage}
              color="secondary"
              showFirstButton
              showLastButton
            />
          </Box>
        </Box> : ""}
        <WhiteBottom 
          hadleClickReg={hadleClickReg} 
          personInfo={personInfo} 
          setPersonInfo={setPersonInfo}
        />
      </Box>
    </Container>
  );
};
export default CustomerInquiry;
