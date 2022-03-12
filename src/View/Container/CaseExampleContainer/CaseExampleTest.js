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
      <TitleText
        title="적용사례본문 테스트"
        size="h2"
      />
    </Container>
  );
};
export default CaseExampleTest;
