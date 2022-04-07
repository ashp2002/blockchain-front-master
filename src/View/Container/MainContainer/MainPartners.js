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
import MainPartnersCard from "../../Component/Main/MainPartnersCard";
import MainPartners_Img1 from "../../../Images/MainPartners_Img1.png"
import MainPartners_Img2 from "../../../Images/MainPartners_Img2.png"
import MainPartners_Img3 from "../../../Images/MainPartners_Img3.png"
import MainPartners_Img4 from "../../../Images/MainPartners_Img4.png"
import MainPartners_Img5 from "../../../Images/MainPartners_Img5.png"
import MainPartners_Img6 from "../../../Images/MainPartners_Img6.png"

const useStyles = makeStyles((theme) => ({

}));

const MainPartners = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box sx={{ pt: [5, 5, 15], pb: [5, 5, 15] }}>
        <TitleText
          title="협 력 업 체"
          size="h3"
        />
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
          <MainPartnersCard image={MainPartners_Img1} title="대한체육회TV" />
          <MainPartnersCard image={MainPartners_Img2} title="한국스마트선거"/>
          <MainPartnersCard image={MainPartners_Img3} title="제니스" />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap"}}>
          <MainPartnersCard image={MainPartners_Img4} title="진단보증협회" />
          <MainPartnersCard image={MainPartners_Img5} title="플랜에이" />
          <MainPartnersCard image={MainPartners_Img6} title="월급날" />
        </Box>
      </Box>  
    </Container>
  );
};
export default MainPartners;
