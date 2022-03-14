import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";


const useStyles = makeStyles((theme) => ({
 
}));

const CustomerFaq = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <TitleText
          title="자주하는 질문 TOP 5"
          size="h2"
        />
      </Container>
    </Box>
  );
};
export default CustomerFaq;
