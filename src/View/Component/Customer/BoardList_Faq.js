import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import qs from "qs";
import { useHistory } from "react-router-dom";
import {
  Button,
  Typography,
  Container,
  Box,
  Divider,
  TextField,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    width: "70%",
    color: "black",
    marginTop: "100px",
    marginBottom: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  title: {
    [theme.breakpoints.down("760")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "36px",
    },
  },
  bodycontainer: {
    backgroundColor: "#ECF0F4",
  },

  titlecontents: {
    color: "black",
    marginLeft: "16px",
    [theme.breakpoints.down("1080")]: {
      fontSize: "15px",
    },
  },
  history: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  bodycontents: {
    width: "90%",
    color: "black",
    [theme.breakpoints.down("760")]: {
      width: "100%",
    },
  },

  resize: {
    fontSize: "15px",
    lineHeight: "normal",
    paddingRight: "8px",
  },

  notchedOutline: {
    borderWidth: "0",
  },

  test: {
    borderLeftColor: "black",
  },
}));

const TableFaq = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const [faqdatas, setfaqdatas] = useState(null);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(true);
  const { tableItem } = props;

  useEffect(() => {
    /*
    if (userData) {
      checkToken(setLogin, setUserData);
    }
    APIRequest("getFaqList")
      .then((receivedData) => {
        //console.log(receivedData);
        setfaqdatas(receivedData);
      })
      .catch((err) => {
        alert("에러" + err);
        //console.log(err);
      });*/
  }, [flag]);

  const handleClickAdd = () => {
    {
      setaddDialog(true);
    }
  };

  const handleClickDel = () => {
    {
      setdelDialog(true);
    }
  };

  const handleClickUpdate = () => {
    {
      setUpdateDialog(true);
    }
  };

  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Box>
          {tableItem ? (
            tableItem.map((data) => (
              <Accordion key={data.id}>
                <AccordionSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="FAQ Contents"
                  className={classes.test}
                  id={data.idx}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    width="100%"
                    height={50}
                  >
                    {/* 
                    <Box flexBasis="10%" pl={3}>
                      {userData && userData.u_level == 1
                        ? `Q${data.id}  (IDX: ${data.idx})`
                        : `Q${data.id}`}
                    </Box>
                    */}
                    <Box flexBasis="90%">
                      <Typography
                        variant="subtitle2"
                        className={classes.titlecontents}
                      >
                        {data.title}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails className={classes.bodycontainer}>
                  <Box display="flex" width="100%" py={2}>
                    <Box flexBasis="10%" pt={2} pl={3}>
                      A
                    </Box>
                    <TextField
                      className={classes.bodycontents}
                      id="outlined-multiline-static"
                      multiline
                      value={data.contents}
                      variant="outlined"
                      rows={6}
                      InputProps={{
                        readOnly: true,
                        classes: {
                          input: classes.resize,
                          notchedOutline: classes.notchedOutline,
                          root: classes.notchedOutline,
                        },
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))
          ) : (
            <Box height="250px"></Box>
          )}
        </Box>
      </Container>
    </>
  );
};

export default TableFaq;
