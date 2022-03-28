import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import ServiceDecs_img from "../../../Images/ServiceDecs_img.png"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${ServiceDecs_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom, right bottom",
  },
}));

const CaseExampleTest = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box sx={{ my: 10 }}>
        <TitleText
          title="준비중...."
          size="h2"
        />
      </Box>
    </Container>
  );
};
export default CaseExampleTest;
