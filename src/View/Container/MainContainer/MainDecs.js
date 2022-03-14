import React from "react";
import MainContents from "../../Component/Main/MainContents";
import { Box, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import LoginTest from "../../Component/Main/LoginTest";
import mainDecs_img from "../../../Images/mainDecs_img.png"
import DarkTheme from "../../Common/DarkTheme";
import ColorButton from "../../Component/Common/ColorButton";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${mainDecs_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom, right bottom",
  },
}));

const MainDecs = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={classes.container}
      width="100%"
      height={["370px", "470px", "500px"]}
      bgcolor="RGB(246,248,247)"
      pt={10}
    >
      <ThemeProvider theme={DarkTheme}>
        <Container>
          <TitleText
            title="BlockChain Data Security Solution"
            subtitle="블록체인 데이터 보안 솔루션"
            description="블록체인은 불변성을 보장합니다."
            description2="귀사의 데이터베이스에 블록체인 솔루션을 적용하면"
            description3="누구도 조작이 불가능한 데이터베이스가 됩니다!"
            size="h2"
          />
          {/* 
          <MainContents />
          <LoginTest />
          */}
          <Box mt={5} display="flex" justifyContent="center">
            <Box width="30%" mr={10}>
            <ColorButton>문의하기</ ColorButton>
            </Box>
            <Box width="30%">
            <ColorButton>솔루션보기</ ColorButton>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};
export default MainDecs;
