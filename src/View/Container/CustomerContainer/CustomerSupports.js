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
import { loadItemClear } from "../../modules/TableRedux";
import { ListGetFunc_support, ItemGetFunc_support, ItemInputFunc_support } from "../../Common/TableFunc";
import TableSupports from "../../Component/Customer/TableSupports"
import TableItemSupports from "../../Component/Customer/TableItemSupports"
import CompanyInfo from "../../Component/Bottom/CompanyInfo";
import TitleText from "../../Component/Common/TitleText";
import TableButton from "../../Component/Common/TableButton";
import TableDialog from "../../Component/Customer/TableDialog"

export const useStyles = makeStyles((theme) => ({
  
}));

const CustomerSupports = () => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const Items = useSelector((state) => state.TableRedux.Items);
  const ItemInfo = useSelector((state) => state.TableRedux.ItemInfo);
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
    ItemInputFunc_support(dispatch, data);
    console.log("밖에", data);
  };
  
  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
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
          <Box>
            <TableSupports 
              tableHead={tableHead} 
              tableItem={Items} 
              handleItemPageOpen={handleItemPageOpen}
              page={page} 
            />
            <Box display="flex" justifyContent="end" mr={2} mt={1}>
              <TableButton 
                onClick={()=>{ setShowModal(true); }}
              >
                글 쓰 기
              </TableButton>
            </Box>
            <Box mt={2} display="flex" justifyContent="center">
              <Pagination
                count={Items === null ? 0 : parseInt(Items.length / 10) + 1}
                page={page + 1}
                onChange={handleChangePage}
                color="primary"
                showFirstButton
                showLastButton
              />
            </Box>
          </Box>
          : <TableItemSupports Item={ItemInfo} handleItemPageClose={handleItemPageClose} />}
        </Box> 
        <Box my={5}>
          <CompanyInfo />
        </Box>
        <TableDialog
          showDialog={showDialog}
          setShowModal={setShowModal}
          handleClick={handleClickAddItem}
        />
      </Container>
  );
};
export default CustomerSupports;
