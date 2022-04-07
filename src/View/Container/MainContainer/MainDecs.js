import React from "react";
import MainContents from "../../Component/Main/MainContents";
import { Box, Container, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className={classes.container}
      sx={{
        pt: ["10px", "40px", "80px"],
        width: "100%",
        height: ["370px", "400px", "500px"],
        bgcolor: "RGB(246,248,247)"
      }}
    >
      <ThemeProvider theme={DarkTheme}>
        <Container>
          <TitleText
            title="BlockChain Data Security Solution"
            subtitle="블록체인 데이터 보안 솔루션"
            description="블록체인은 불변성을 보장합니다."
            description2="귀사의 데이터베이스에 블록체인 솔루션을 적용하면"
            description3="누구도 조작이 불가능한 데이터베이스가 됩니다!"
            size={isMobile || isTablet ? "h4" : "h2"}
            decssize="body2"
          />
          {/* 
          <MainContents />
          <LoginTest />
          */}
          <Box sx={{
              mt: isMobile || isTablet ? 2 : 5,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: isMobile || isTablet ? "150px" : "20%", mr: isMobile || isTablet ? 5 : 10, }}>
              <ColorButton 
                color="border"
                onClick={() => { Test() }}
              >
                문의하기기
              </ ColorButton>
            </Box>
            <Box sx={{ width: isMobile || isTablet ? "150px" : "20%", mr: isMobile || isTablet ? 5 : 10, }}>
              <ColorButton color="border">솔루션보기</ ColorButton>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};
export default MainDecs;
