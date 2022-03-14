import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";

const useStyles = makeStyles((theme) => ({
 
}));

const CustomerNotice = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <TitleText
          title="공 지 사 항"
          size="h2"
        />
      </Container>
    </Box>
  );
};
export default CustomerNotice;
