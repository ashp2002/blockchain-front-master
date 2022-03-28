import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import MainServerSolutionCard from "../../Component/Main/MainServerSolutionCard";
import MainServerSolution_Img1 from "../../../Images/MainServerSolution_Img1.png"
import MainServerSolution_Img2 from "../../../Images/MainServerSolution_Img1.png"
import MainServerSolution_Img3 from "../../../Images/MainServerSolution_Img1.png"

const useStyles = makeStyles((theme) => ({

}));

const MainServerSolution = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box   
        sx={{
          pt: 15,
          pb: 15
        }}   
      >
        <TitleText
          title="서버 렉, 클라우드 인드턴스, 소프트웨어"
          subtitle="설치 방식의 솔루션 제공"
          size="h3"
        />
        <Box sx={{ mt: 9, display: "flex", justifyContent: "space-between" }}>
          <MainServerSolutionCard 
            image={MainServerSolution_Img1} 
            title="렉 설치 방식"
            decs="IDC나 사내 전산실에 DB서버가 구축되어 있는 경우 렉 설치 및
                  간단한 설명만으로 솔루션 구축"
          />
          <MainServerSolutionCard 
            image={MainServerSolution_Img2} 
            title="렉 설치 방식"
            decs="AWS등 클라우드 환경에 DB가 구축되어 있는 경우 인스턴스 제공시
                  원격으로 솔루션 구축"
          />
          <MainServerSolutionCard 
            image={MainServerSolution_Img3} 
            title="렉 설치 방식"
            decs="DB서버나 여분의 서버에 솔루션 설치"
          />
        </Box>
      </Box>  
    </Container>
  );
};
export default MainServerSolution;
