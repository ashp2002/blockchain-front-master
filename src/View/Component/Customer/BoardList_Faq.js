import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
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

const BoardList_Faq = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const Items = useSelector((state) => state.BoardRedux_Faq.FaqItems);
  const [error, setError] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
  }, []);

  return (
    <Box>
      <Container sx={{ maxWidth: "lg" }}>
        <Box>
          {Items ? (
            Items.map((data) => (
              <Accordion key={data.idx}>
                <AccordionSummary
                  //expandIcon={<ExpandMoreIcon />}
                  aria-controls="FAQ Contents"
                  className={classes.test}
                  id={data.idx}
                >
                  <Box 
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: isMobile || isTablet ? "30" : "40"
                    }}
                  >
                    {/* 
                    <Box flexBasis="10%" pl={3}>
                      {userData && userData.u_level == 1
                        ? `Q${data.id}  (IDX: ${data.idx})`
                        : `Q${data.id}`}
                    </Box>
                    */}
                    <Box sx={{ flexBasis: "90%" }}>
                      <Typography
                        sx={{ variant: "subtitle2" }}
                        className={classes.titlecontents}
                      >
                        {data.title}
                      </Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails className={classes.bodycontainer}>
                  <Box sx={{ display: "flex", width: "100%", py: 2 }}>
                    <Box sx={{ flexBasis: "10%", pt: 2, pl: 3, display: isMobile || isTablet ? "none" : "" }}>
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
          ) : ""}
        </Box>
      </Container>
    </Box>
  );
};

export default BoardList_Faq;
