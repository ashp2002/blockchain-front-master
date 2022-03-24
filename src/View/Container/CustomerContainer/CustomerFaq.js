import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import qs from "qs";
import { useHistory } from "react-router-dom";
//import { AppContext } from "../../AppContext";
//import { checkToken } from "../../Function/UserFuncs";
//import { APIRequest } from "../../Common/Common";
import {
  Button,
  Typography,
  Container,
  Box,
  Divider,
  TextField,
  useMediaQuery,
} from "@mui/material";
import BoardList_Faq from "../../Component/Customer/BoardList_Faq"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";

const useStyles = makeStyles((theme) => ({
  
}));

const CustomerFaq = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [flag, setFlag] = useState(true);


  let tableItem = [
    { id: "1" , name: "안성호", title: "FAQ1", contents: "내용1", regdate: "2022/04/16", idx: "1", status: "완료", isprivate: false, views: "100"},
    { id: "2" , name: "안성호", title: "FAQ2", contents: "내용2", regdate: "2022/04/16", idx: "2", status: "완료", isprivate: false, views: "100"},
    { id: "3" , name: "안성호", title: "FAQ3", contents: "내용3" ,regdate: "2022/04/16", idx: "3", status: "완료", isprivate: false, views: "10"},
  ];

  useEffect(() => {
    /*
    if (userData) {
      checkToken(setLogin, setUserData);
    }
    APIRequest("getFaqList")
      .then((receivedData) => {
        //console.log(receivedData);
        setfaqdatas(receivedData);
      })
      .catch((err) => {
        alert("에러" + err);
        //console.log(err);
      });*/
  }, [flag]);

  const handleClickAdd = () => {
    {
      setaddDialog(true);
    }
  };

  const handleClickDel = () => {
    {
      setdelDialog(true);
    }
  };

  const handleClickUpdate = () => {
    {
      setUpdateDialog(true);
    }
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box mt={10}>
          <TitleText
            title="자 주 하 는 질 문"
            size="h2"
          />
        </Box>
        <Box my={10} width="90%" m="auto">
          <BoardList_Faq tableItem={tableItem}/>
        </Box>
        <Box mb={10}>
          <CompanyInfo />
        </Box>
        {/*
        <AddItem
          showDialog={addDialog}
          flag={flag}
          setFlag={setFlag}
          setShowModal={setaddDialog}
          item_Api="/notice/addFaq"
          title="FAQ 등록하기"
        />
        <DelItem
          showDialog={delDialog}
          flag={flag}
          setFlag={setFlag}
          setShowModal={setdelDialog}
          item_Api="/notice/deleteFaq"
          title="FAQ 삭제하기"
        />
        <UpdateItem
          showDialog={updateDialog}
          setShowModal={setUpdateDialog}
          item_Api="/notice/updateFaq"
          serch_Api="/getFaqInfo"
          title="FAQ 수정하기"
          flag={flag}
          setFlag={setFlag}
        />
          */}
        {/* 
          {userData && userData.u_level == 1 && (
            <Box>
              <Button color="inherit" onClick={handleClickAdd}>
                FAQ등록하기
              </Button>
              <Button color="inherit" onClick={handleClickDel}>
                FAQ삭제하기
              </Button>
              <Button color="inherit" onClick={handleClickUpdate}>
                FAQ수정하기
              </Button>
            </Box>
        )}*/}
      </Container>
    </>
  );
};

export default CustomerFaq;
