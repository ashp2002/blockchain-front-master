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
  Pagination,
  useMediaQuery,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import { loadItemClear } from "../../modules/BoardRedux";
import { 
  ListGetFunc_support, 
  ItemGetFunc_support, 
  ItemInputFunc_support,
  ItemInputFuncN_support,
  ItemDelFunc_support,
  ItemDelFuncN_support
} from "../../Common/BoardFunc";
import BoardSupports from "../../Component/Customer/BoardList_Supports"
import BoardItemSupports from "../../Component/Customer/BoardItem_Supports"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";
import BoardButton from "../../Component/Common/BoardButton";
import BoardDialog from "../../Component/Customer/BoardDialog"

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerSupports = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const Items = useSelector((state) => state.BoardRedux.Items);
  const ItemInfo = useSelector((state) => state.BoardRedux.ItemInfo);
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const [flagPage, setFlagPage] = useState(0);
  const [page, setPage] = useState(0);
  const [showDialog, setShowModal] = useState(false);

  useEffect(() => {
    ListGetFunc_support(dispatch)
  }, [dispatch]);

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc_support(dispatch, idx)
    console.log("페이지");
  };

  const handleItemPageClose = (data) => {
    setFlagPage(data);
    dispatch(loadItemClear());
    console.log(flagPage);
  };

  const handleClickAddItem = (data) => {
    loginState ? ItemInputFunc_support(dispatch, data) : ItemInputFuncN_support(dispatch, data)
    console.log("밖에", data);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
  };

  const handleClickItemDel = ()=> {
    loginState ? ItemDelFunc_support(dispatch, ItemInfo.idx) : ItemDelFuncN_support(dispatch, ItemInfo.idx)
    console.log("삭제")
  }
 
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
          <Box>
            <BoardSupports 
              tableHead={tableHead}  
              handleItemPageOpen={handleItemPageOpen}
              page={page} 
              Items={Items}
            />
            <Box display="flex" justifyContent="end" mr={2} mt={1}>
              <BoardButton 
                onClick={()=>{ setShowModal(true); }}
              >
                글 쓰 기
              </BoardButton>
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              <Pagination
                count={Items === null ? 0 : parseInt(Items.length / 10) + 1}
                page={page + 1}
                onChange={handleChangePage}
                color="secondary"
                showFirstButton
                showLastButton
              />
            </Box>
          </Box>
          : <BoardItemSupports 
              Item={ItemInfo} 
              handleItemPageClose={handleItemPageClose} 
              handleClickItemDel={handleClickItemDel}
            />
          }
        </Box> 
        <Box my={5}>
          <CompanyInfo />
        </Box>
        <BoardDialog
          showDialog={showDialog}
          setShowModal={setShowModal}
          handleClickAddItem={handleClickAddItem}
          page={loginState ? "SupportAdd" : "SupportAddN"}
        />
      </Container>
  );
};
export default CustomerSupports;
