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
import MainTransectionInput from "../../Component/Main/MainTransectionInput";

const useStyles = makeStyles((theme) => ({

}));

const MainTransection = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box   
        pt={5}
        pb={10}
      >
        <TitleText
          title="트랙잭션 생성 및 조회"
          size="h3"
        />
        <MainTransectionInput />
      </Box>  
    </Container>
  );
};
export default MainTransection;
