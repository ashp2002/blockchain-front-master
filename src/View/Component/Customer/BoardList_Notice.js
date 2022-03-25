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

export const useStyles = makeStyles((theme) => ({
  container: {
    Height: "100%",
    color: "black",
    marginTop: "100px",
    marginBottom: "10%",
  },
  table: {
    [theme.breakpoints.down("460")]: {
      width: "100%",
    },
  },
  tableBorder: {
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
  icon: {
    paddingTop: "5px",
  },
  private_cell: {
    [theme.breakpoints.down("900")]: {
      display: "none",
    },
  },
  history: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  date_cell: {
    [theme.breakpoints.down("760")]: {
      display: "none",
    },
  },
  no_cell: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
  comment_cell: {
    [theme.breakpoints.down("600")]: {
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
  const [page, setPage] = useState(0);
  const Items = useSelector((state) => state.BoardRedux.Items);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [addDialog, setaddDialog] = useState(false);
  const [addDialogN, setaddDialogN] = useState(false);
  const [datas, setdatas] = useState(null);
  const [error, setError] = useState(null);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const { tableItem } = props;

  useEffect(() => {
    console.log(Items)
  }, []);

  const parse = (regdate) => {
    let yyyy = regdate.substr(0, 4);
    let mm = regdate.substr(4, 2);
    let dd = regdate.substr(6, 2);

    const arr = [yyyy, "/", mm, "/", dd];

    return arr.join(" ");
  };

  const handleClickOpen = (props) => {
    /*
    {
      login ? history.push(`/AddTableQ`) : history.push(`/AddTableQN`);
    }*/
  };

  const handleChangePage = (event, newPage) => {
    setPage(--newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer className={classes.tableBorder}>
        <Table size="small">
          <TableBody className={classes.test}>
            {tableItem &&
              tableItem
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage) //전체데이터에서 slice를통해 10개만 추출
                .map(
                  (
                    {
                      id,
                      title,
                      regdate,
                      idx,
                    },
                    i
                  ) => (
                    <TableRow
                      hover
                      onClick={() => {
                        isprivate
                          ? props.history.push(`/TableItemPass?idx=${idx}`)
                          : props.history.push(`/TableItem?idx=${idx}`);
                      }}
                      key={id}
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
                          {title}
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        width="300"
                        className={classes.date_cell}
                      >
                        <Typography
                          variant="body2"
                          className={classes.tablebody}
                        >
                          {regdate}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  )
                )}
          </TableBody>
        </Table>
      </TableContainer>
    <Box mt={8} display="flex" justifyContent="center">
      <Pagination
        count={tableItem === null ? 0 : parseInt(tableItem.length / 10) + 1}
        page={page + 1}
        onChange={handleChangePage}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  </>
  );
};
export default BoardList_Notice;