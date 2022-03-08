import React from "react";
import MainContents from "../../Component/Main/MainContents";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import MainTitle from "../../Component/Main/MainTitle";

const useStyles = makeStyles((theme) => ({
 
}));

const MainAgentInfo = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      mt={7}
      width="100%"
      height={["370px", "470px", "500px"]}
      bgcolor="RGB(246,248,247)"
    >
      <Container>
      
      </Container>
    </Box>
  );
};
export default MainAgentInfo;
