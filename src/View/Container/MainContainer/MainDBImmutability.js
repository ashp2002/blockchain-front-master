import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import MainDBImmutabilityCard from "../../Component/Main/MainDBImmutabilityCard"
import MainTitle from "../../Component/Main/MainTitle"
import mainDBImmutability_Img1 from "../../../Images/mainDBImmutability_Img1.png"
import mainDBImmutability_Img2 from "../../../Images/mainDBImmutability_Img2.png"
import mainDBImmutability_Img3 from "../../../Images/mainDBImmutability_Img3.png"

const useStyles = makeStyles((theme) => ({
 
}));

const MainDBImmutability = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width="100%" bgcolor="#F4F4F4">
      <Container>
        <Box
          pt={5}
          pb={10}
          //flexDirection={isMobile || isTablet ? "column" : "row"}
        >
          <MainTitle
            title="누구도 조작할 수 없는 불변의 데이터베이스"
            subtitle="블록체인 에이젼트로 가능합니다."
            description="블록체인에 기록한 Database는 어느 누구도, 어떠한 방법으로도 위/변조가 불가능합니다."
            description2="참여자들은 블록체인에 기록된 데이터를 신뢰할 수 있습니다."
            description3="또한, 데이터 생성및 변경 내역 또한 블록체인에 기록되므로 데이터 이력 추적 관리가 가능하여 투명성 또한 보장받을 수 있습니다"
            size="h3"
            decssize="h5"
          />
          <Box mt={5} display="flex" justifyContent="space-between">
            <MainDBImmutabilityCard image={mainDBImmutability_Img1} title="내부자에 의한 조작" />
            <MainDBImmutabilityCard image={mainDBImmutability_Img2} title="외부에 의한 악의적인 조작" />
            <MainDBImmutabilityCard image={mainDBImmutability_Img3} title="의도치 않은 변형" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default MainDBImmutability;
