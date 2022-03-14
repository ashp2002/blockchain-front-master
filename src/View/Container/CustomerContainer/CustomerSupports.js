import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";

const useStyles = makeStyles((theme) => ({
 
}));

const CustomerSupports = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <TitleText
          title="기 술 지 원"
          size="h2"
        />
      </Container>
    </Box>
  );
};
export default CustomerSupports;
