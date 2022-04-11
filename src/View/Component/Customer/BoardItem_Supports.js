import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
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
    fontSize: 16,
    [theme.breakpoints.down("760")]: {
      lineHeight: "normal",
      fontSize: "15px",
    },
  },
}));

const BoardItem_Supports = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { Item , handleClickItemDel} = props;

  useEffect(() => {
  
  }, []);

  return (
    <Container sx={{ maxWidth: "lg" }}>
        <Box sx={{ width: "95%", m: "auto"}}>
          <Typography sx={{ typography: "subtitle1" }} className={classes.name}>
              {`작성자 : ${Item.name}`}
          </Typography>
            <Box sx={{ mt: 2, mb: 2 }}>
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
          <Box sx={{ display: "flex", justifyContent: "end", mt: 2, mb: 5 }}>
            <Box >
              <BoardButton 
                mobile={isMobile || isTablet ? "true" : "false"} >
                댓글쓰기
              </BoardButton>
            </Box>
            <Box sx={{ ml: 2 }}>
              <BoardButton 
                mobile={isMobile || isTablet ? "true" : "false"}
                onClick={handleClickItemDel}>
                글삭제
              </BoardButton>
            </Box>
            <Box sx={{ ml: 2 }}>
              <BoardButton 
                mobile={isMobile || isTablet ? "true" : "false"} 
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
export default BoardItem_Supports;
