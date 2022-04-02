import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useHistory } from "react-router-dom";
import {
  Table,
  TableBody, //테이블 데이터 내용
  TableCell,
  TableContainer,
  TableFooter,
  TableHead, //테이블상단 필드 제목들
  TablePagination,
  TableRow,
  Box,
  Typography,
  Divider,
  useMediaQuery,
  Pagination,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import { ParseDATE } from "../../Common/CommonFuncs"


export const useStyles = makeStyles((theme) => ({
  
  tableBorder: {
    marginTop: "80px",
    borderTop: "1px solid #707070",
    borderBottom: "1px solid #707070",
  },
  tablebody: {
    fontSize: "1.17vw",
    color: "black",
    [theme.breakpoints.down("900")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
    },
  },
  /* 반응형시 컴포넌트 disabled
  private_cell: {
    [theme.breakpoints.down("900")]: {
      display: "none",
    },
  },*/
}));

const BoardList_Inquiry = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const Items = useSelector((state) => state.BoardRedux_Inquiry.InquiryItems);
  const { tableHead, page } = props;
  
  useEffect(() => {
  
  }, []);

  return (
      <TableContainer className={classes.tableBorder}>
        <Table size="small">
          <TableHead>
            <TableRow height="60">
            {tableHead.map((section) => (
              <TableCell key={section.title} width={section.width} align={section.align} >
                <Typography
                  variant={section.font}
                  className={classes.tablebody}
                >
                  {section.title}
                </Typography>
              </TableCell>
            ))}  
            </TableRow>
          </TableHead>
          <TableBody className={classes.test}>
            {Items &&
              Items
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage) //전체데이터에서 slice를통해 10개만 추출
                .map(
                  (
                    { id, title, regdate, idx, status, phone, email },
                    i
                  ) => (
                    <TableRow
                      hover
                      onClick={() => {
                        props.handleItemPageOpen(1, idx);
                      }}
                      key={idx}
                      height="60"
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        width="100"
                        align="center"
                        className={classes.no_cell}
                      >
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {page * rowsPerPage + i + 1}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {phone}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {email}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.date_cell}
                      >
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {regdate}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.comment_cell}
                      >
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                )}
          </TableBody>
        </Table>
      </TableContainer>
  );
};
export default BoardList_Inquiry;
