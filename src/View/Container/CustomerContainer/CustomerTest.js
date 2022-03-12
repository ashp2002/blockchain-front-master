import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import ServiceDecs_img from "../../../Images/ServiceDecs_img.png"

const useStyles = makeStyles((theme) => ({
 
}));

const CaseExampleTest = () => {
  const classes = useStyles();

  return (
    <Box>
      <Container>
        <TitleText
          title="고객지원 테스트 본문"
          size="h2"
        />
      </Container>
    </Box>
  );
};
export default CaseExampleTest;
