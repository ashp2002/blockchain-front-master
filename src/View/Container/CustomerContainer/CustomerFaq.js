import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
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
import { loadItemClear } from "../../modules/BoardRedux_Faq";
import { 
  ListGetFunc_faq, 
  ItemGetFunc_faq, 
  ItemInputFunc_faq,
  ItemDelFunc_faq
} from "../../Common/Board/BoardFunc_Faq";
import BoardList_Faq from "../../Component/Customer/BoardList_Faq"
import BoardItem_Faq from "../../Component/Customer/BoardItem_Faq"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";
import BoardButton from "../../Component/Common/BoardButton";
import BoardDialog from "../../Component/Customer/BoardDialog";

export const useStyles = makeStyles((theme) => ({

}));

const CustomerFaq = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const Items = useSelector((state) => state.BoardRedux_Faq.FaqItems);
  const ItemInfo = useSelector((state) => state.BoardRedux_Faq.FaqItemInfo);
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const userLevel = useSelector((state) => state.AccountRedux.userLevel);
  const [flagPage, setFlagPage] = useState(0);
  const [flag, setflag] = useState(false);
  const [page, setPage] = useState(0);
  const [showDialogAdd, setShowModalAdd] = useState(false);

  useEffect(() => {
    ListGetFunc_faq(dispatch)
  }, []);

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc_faq(dispatch, idx)
  };

  const handleItemPageClose = (data) => {
    setFlagPage(data);
    dispatch(loadItemClear());
  };
  
  const handleClickAddItem = async (data) => {
    let result = await ItemInputFunc_faq(dispatch, data) 
    if(result !== ""){
      setShowModalAdd(false);
      ListGetFunc_faq(dispatch);
      setflag(!flag);
    }
  };

  const handleClickItemDel = async ()=> {
    let result = await ItemDelFunc_faq(dispatch, ItemInfo.idx) 
    if(result !== ""){
      setFlagPage(0);
      ListGetFunc_faq(dispatch);
      setflag(!flag);
    }
  }
  
  return (
    <Container sx={{ maxWidth: "lg" }}>
      <Box sx={{ mt: 10 }}>
        <TitleText
          title="자 주 하 는 질 문"
          size="h2"
        />
      </Box>
      <Box sx={{ my: 10, width: "80%", m: "auto" }}>
        {flagPage == 0 ?
        <Box>
          <BoardList_Faq  
            handleItemPageOpen={handleItemPageOpen}
            page={page} 
          />
          {userLevel == 1 ? 
            <Box sx={{ display: "flex", justifyContent: "end", mt: 1 }}>
              <BoardButton 
                onClick={()=>{ setShowModalAdd(true); }}
              >
                글 쓰 기
              </BoardButton>
            </Box> : ""
          }
        </Box>
        : <BoardItem_Faq 
            Item={ItemInfo} 
            handleItemPageClose={handleItemPageClose} 
            handleClickItemDel={handleClickItemDel}
          />
        }   
      </Box>
      <Box sx={{ my: 5 }}>
        <CompanyInfo />
      </Box>
      <BoardDialog
        title="FAQ등록"
        showDialog={showDialogAdd}
        setShowModal={setShowModalAdd}
        handleClick={handleClickAddItem}
        page="NoticeAdd"
      />
    </Container>
  );
};

export default CustomerFaq;
