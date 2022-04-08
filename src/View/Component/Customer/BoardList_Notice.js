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
import { ParseDATE_notice } from "../../Common/CommonFuncs"

export const useStyles = makeStyles((theme) => ({
  tableBorder: {
    borderTop: "1px solid #707070",
    borderBottom: "1px solid #707070",
  },
  tablebody: {
    color: "black",
    [theme.breakpoints.down("1280")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15px",
    },
  },
  no_cell: { 
    [theme.breakpoints.down("900")]: {
      display: "none",
    },
  },
}));

const BoardList_Notice = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [flag, setFlag] = useState(false);
  const Items = useSelector((state) => state.BoardRedux_Notice.NoticeItems);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { page } = props;

  useEffect(() => {
    console.log(Items)
  }, []);

  return (
    <Box>
      <TableContainer className={classes.tableBorder}>
        <Table size="small">
          <TableBody>
            {Items &&
              Items
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage) //전체데이터에서 slice를통해 10개만 추출
                .map(({ id, title, regdate, idx, }, i ) => (
                    <TableRow
                      hover
                      onClick={() => {
                        props.handleItemPageOpen(1, idx);
                      }}
                      key={idx}
                      height={isMobile || isTablet ? "40" : "60"}
                    >
                      <TableCell
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
                          {title}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        width={isMobile || isTablet ? "150" : "300"}
                        className={classes.date_cell}
                      >
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {ParseDATE_notice(regdate)}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                )}
          </TableBody>
        </Table>
      </TableContainer>
      </Box> 
  );
};
export default BoardList_Notice;
