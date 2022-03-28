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
import BoardSupports from "../../Component/Customer/BoardList_Supports";
import BoardItemSupports from "../../Component/Customer/BoardItem_Supports";
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";
import BoardButton from "../../Component/Common/BoardButton";
import BoardDialog from "../../Component/Customer/BoardDialog";

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
  const [flag, setflag] = useState(false);
  const [page, setPage] = useState(0);
  const [showDialogAdd, setShowModalAdd] = useState(false);
  const [showDialogDel, setShowModalDel] = useState(false);
  const tableHead = [
    { title: "NO.", width: "100", align: "center", font: "subtitle1" },
    { title: "제목", align: "center", font: "subtitle1" },
    { title: "글쓴이", width: "120", align: "left", font: "subtitle1" },
    { title: "작성날짜", width: "150", align: "center", font: "subtitle1" },
    { title: "조회수", width: "100", align: "center", font: "subtitle1" },
  ];

  useEffect(() => {
    ListGetFunc_support(dispatch)
  }, []);

  useEffect(() => {
  }, [flag]);

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc_support(dispatch, idx)
  };

  const handleItemPageClose = (data) => {
    setFlagPage(data);
    dispatch(loadItemClear());
  };

  const handleClickAddItem = async (data) => {
    let result = ""
    loginState ? 
    result = await ItemInputFunc_support(dispatch, data) 
    : result = await ItemInputFuncN_support(dispatch, data)
    if(result !== ""){
      setShowModalAdd(false);
      ListGetFunc_support(dispatch);
      setflag(!flag);
    }
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
  };

  const handleClickItemDel = async ()=> {
    let result = ""
    loginState ? 
    result = await ItemDelFunc_support(dispatch, ItemInfo.idx) 
    : setShowModalDel(true)
    if(result !== ""){
      setFlagPage(0);
      ListGetFunc_support(dispatch);
      setflag(!flag);
    }
  }

  const handleClickDialogDel = async (data)=> {
    let result = await ItemDelFuncN_support(dispatch, ItemInfo.idx, data.TxtPass)
    if(result !== ""){
      setFlagPage(0);
      ListGetFunc_support(dispatch);
      setflag(!flag);
      setShowModalDel(false);
    }
  }

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
                onClick={()=>{ setShowModalAdd(true); }}
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
          title="게시글등록"
          showDialog={showDialogAdd}
          setShowModal={setShowModalAdd}
          handleClick={handleClickAddItem}
          page={loginState ? "SupportAdd" : "SupportAddN"}
        />
        <BoardDialog
          title="패스워드입력"
          showDialog={showDialogDel}
          setShowModal={setShowModalDel}
          handleClick={handleClickDialogDel}
          page={"SupportDel"}
        />
      </Container>
  );
};
export default CustomerSupports;
