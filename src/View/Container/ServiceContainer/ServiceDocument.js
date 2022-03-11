import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";

const useStyles = makeStyles((theme) => ({
}));

const ServiceDocument = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box>
          <TitleText
            title="증빙문서조작감지"
            size="h1"
          />
        </Box>
      </Container>
    </Box>
  );
};
export default ServiceDocument;
