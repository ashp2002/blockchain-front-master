import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";

const useStyles = makeStyles((theme) => ({
}));

const ServiceAccess = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <Box>
          <TitleText
            title="접근기록조작감지"
            size="h1"
          />
        </Box>
      </Container>
    </Box>
  );
};
export default ServiceAccess;
