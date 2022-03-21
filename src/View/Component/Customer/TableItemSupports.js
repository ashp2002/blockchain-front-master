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

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    color: "black",
    marginTop: "100px",
    marginBottom: "10%",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  name: {
    [theme.breakpoints.down("760")]: {
      fontSize: "15px",
    },
  },
  history: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  contents: {
    width: "100%",
    color: "black",
  },

  button: {
    position: "relative",
    width: "80%",
  },

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

const TableItemSupports = (props) => {
  const theme = useTheme();
  const classes = useStyles();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [flag, setFlag] = useState(false);
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const {Item} = props;

  useEffect(() => {
  
  }, []);


  return (
    <Container maxWidth="lg">
        <Box width="95%" m="auto">
          {Item ? (
            <Typography variant="subtitle1" className={classes.name}>
              {`작성자 : ${Item.name}`}
            </Typography>
          ) : (
            <Typography variant="subtitle1" className={classes.name}>
              {`작성자 :`}
            </Typography>
          )}
          {Item ? (
            <Box mt={2} mb={2}>
              <TextField
                className={classes.contents}
                id="outlined-multiline-static"
                //label="내 용"
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
          ) : (
            <Box mt={2} mb={2}>
              <TextField
                className={classes.contents}
                id="outlined-multiline-static"
                //label="내 용"
                multiline
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
          )}
          <Divider />
          <Box className={classes.button}>
            <Button 
            color="inherit" 
            onClick={() => 
              {props.handleItemPageClose(0);}
              }>
              목록으로
            </Button>
            <Button color="inherit">
              댓글쓰기
            </Button>
            <Button color="inherit">
              글삭제
            </Button>
          </Box>
        </Box>  
      </Container>
  );
};
export default TableItemSupports;
