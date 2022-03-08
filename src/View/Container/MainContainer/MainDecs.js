import React from "react";
import MainContents from "../../Component/Main/MainContents";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import MainTitle from "../../Component/Main/MainTitle";
import LoginTest from "../../Component/Main/LoginTest";
import mainDecs_img from "../../../Images/mainDecs_img.png"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${mainDecs_img})`,
    backgroundSize: "auto 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom, right bottom",
  },
}));

const MainDecs = () => {
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
        <MainTitle
          title="대한민국 똑똑한"
          subtitle="선거문화를 만듭니다."
          description="중앙선거관리위원회 출신"
          description2="대한민국 최고의 선거전문가들의 똑똑한 선거 시스템"
          size="h1"
        />
        {/* 
        <MainContents />
        <LoginTest />
        */}
      </Container>
    </Box>
  );
};
export default MainDecs;
