import React from "react";
import MainContents from "../../Component/Main/MainContents";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import mainAgentDapp from "../../../Images/mainAgentDapp_img.png"
import mainAgentDecs from "../../../Images/mainAgentDecs_img.png"
import mainAgentInfo from "../../../Images/mainAgentInfo_img.png"
import MainAgentContent from "../../Component/Main/MainAgentContent"

const useStyles = makeStyles((theme) => ({
 
}));

const MainAgent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
      <Container>
        <Box
          //flexDirection={isMobile || isTablet ? "column" : "row"}
        >
          <MainAgentContent 
            image={mainAgentDecs} 
            location="Img_left"
            title="DSOP BlockChain Agent는?"
            decs="Database의 각종 기록(Log, 접속기록, 결재기록등 누적데이터)를 이더리움 블룩체인에 매일 기록하고 수시로 변경 발생 여부를 검증하여 조작 발생시 이를 즉각 감지하고 변경사항을 알려주는 솔루션 입니다!"
          />
          <MainAgentContent 
            image={mainAgentDapp} 
            location="Img_right"
            title="Etherium 메인넷 기반 DAPP 솔루션"
            decs="DSOP BlockChain Agent는 업계 유일 이더리움 메인넷기만 DAPP 솔루션으로 타유사 솔루션과 비교될수 없는 보안성을 자랑합니다. Etherium 네트워크는 DAPP네트워크중 가장 높은 해시파워를 가지고 있습니다. 
            이는 해킹이 불가능 함을 보장합니다."
          />
          <MainAgentContent 
            image={mainAgentInfo} 
            location="Img_left"
            title="강력하고 유연한 AGENT "
            decs="자체 개발한 BlockChain Agent는 Oracle, MySQL, MSSQL등 대부분의 Database 시스템을 지원하며 Java기반으로 개발되어 어떤 시스템에도 간편하게 설치 할 수 있습니다. 또한 3중의 Agent감시를 통해 높은 가용성을 보장하며 이상 징후 발생 즉시 통지 됩니다."
          />
        </Box>
      </Container>
  );
};
export default MainAgent;
