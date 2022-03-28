import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import qs from "qs";
import { useHistory } from "react-router-dom";
import {
  Button,
  TextField,
  Typography,
  Box,
  Container,
  Divider,
  useMediaQuery,
} from "@mui/material"; //테이블에 필요한 컴포넌트
import BoardButton from "../Common/BoardButton"

export const useStyles = makeStyles((theme) => ({
  commentcontents: {
    width: "100%",
    marginTop: "16px",
    fontSize: "50px",
    [theme.breakpoints.down("760")]: {
      fontSize: "12px",
    },
  },
  resize: {
    [theme.breakpoints.down("760")]: {
      lineHeight: "normal",
      fontSize: "15px",
    },
  },
}));

const BoardItem_Faq = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const userLevel = useSelector((state) => state.AccountRedux.userLevel);
  const { Item , handleClickItemDel} = props;

  useEffect(() => {
  
  }, []);

  

  return (
    <Container maxWidth="lg">
        <Box width="95%" m="auto">
          <Typography variant="subtitle1" className={classes.name}>
              {`작성자 : ${Item.name}`}
          </Typography>
          <Typography variant="subtitle1" className={classes.name}>
              {`제목 : ${Item.title}`}
          </Typography>
            <Box mt={2} mb={2}>
              <TextField
                fullWidth
                className={classes.contents}
                id="outlined-multiline-static"
                multiline
                value={Item.contents}
                rows={10}
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  classes: {
                    input: classes.resize,
                  },
                }}
              />
            </Box>
          <Divider />
          <Box display="flex" justifyContent="end" mt={2}>
            {userLevel == 1 ? 
              <Box ml={2}>
                <BoardButton color="inherit" onClick={handleClickItemDel}>
                  글삭제
                </BoardButton>
              </Box> : ""
            }
            <Box ml={2}>
              <BoardButton 
                color="inherit" 
                onClick={() => 
                  {props.handleItemPageClose(0);}
                }>
                목록으로
              </BoardButton>
            </Box>
          </Box>
        </Box>  
      </Container>
  );
};
export default BoardItem_Faq;
