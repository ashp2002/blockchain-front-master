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
import { loadItemClear } from "../../modules/BoardRedux_Notice";
import { 
  ListGetFunc_notice, 
  ItemGetFunc_notice, 
  ItemInputFunc_notice,
  ItemDelFunc_notice
} from "../../Common/Board/BoardFunc_Notice";
import BoardList_Notice from "../../Component/Customer/BoardList_Notice"
import BoardItem_Notice from "../../Component/Customer/BoardItem_Notice"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";
import BoardButton from "../../Component/Common/BoardButton";
import BoardDialog from "../../Component/Customer/BoardDialog";

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerNotice = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const Items = useSelector((state) => state.BoardRedux_Notice.NoticeItems);
  const ItemInfo = useSelector((state) => state.BoardRedux_Notice.NoticeItemInfo);
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const userLevel = useSelector((state) => state.AccountRedux.userLevel);
  const [flagPage, setFlagPage] = useState(0);
  const [flag, setflag] = useState(false);
  const [page, setPage] = useState(0);
  const [showDialogAdd, setShowModalAdd] = useState(false);
  
  useEffect(() => {
    ListGetFunc_notice(dispatch)
  }, []);

  const handleItemPageOpen = (flag, idx) => {
    setFlagPage(flag);
    ItemGetFunc_notice(dispatch, idx)
  };

  const handleItemPageClose = (data) => {
    setFlagPage(data);
    dispatch(loadItemClear());
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
  };

  const handleClickAddItem = async (data) => {
    let result = await ItemInputFunc_notice(dispatch, data) 
    if(result !== ""){
      setShowModalAdd(false);
      ListGetFunc_notice(dispatch);
      setflag(!flag);
    }
  };

  const handleClickItemDel = async ()=> {
    let result = await ItemDelFunc_notice(dispatch, ItemInfo.idx) 
    if(result !== ""){
      setFlagPage(0);
      ListGetFunc_notice(dispatch);
      setflag(!flag);
    }
  }

  return (
      <Container sx={{ maxWidth: "lg" }}>
        <Box sx={{ mt: 10 }}>
          <TitleText
            title="공 지 사 항"
            size="h2"
          />
        </Box>
        <Box sx={{ my: 10, width: "80%", m: "auto" }}>
          {flagPage == 0 ?
          <Box>
            <BoardList_Notice  
              handleItemPageOpen={handleItemPageOpen}
              page={page} 
            />
            {userLevel == 1 ? 
              <Box sx={{ display: "flex", justifyContent: "end", mt: 1 }}>
                <BoardButton 
                  mobile={isMobile || isTablet ? "true" : "false"}
                  onClick={()=>{ setShowModalAdd(true); }}
                >
                  글 쓰 기
                </BoardButton>
              </Box> : ""
            }
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 5 }}>
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
          : <BoardItem_Notice 
              Item={ItemInfo} 
              handleItemPageClose={handleItemPageClose} 
              handleClickItemDel={handleClickItemDel}
            />
          }   
        </Box>
        <BoardDialog
          title="공지사항등록"
          showDialog={showDialogAdd}
          setShowModal={setShowModalAdd}
          handleClick={handleClickAddItem}
          page="NoticeAdd"
        />
      </Container>
  );
};
export default CustomerNotice;
