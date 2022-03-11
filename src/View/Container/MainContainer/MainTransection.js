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
    <Box width="100%" bgcolor="#F4F4F4">
      <Container>
        <Box   
          pt={15}
          pb={15}
        >
          <TitleText
            title="트랜잭션 생성 및 조회"
            size="h3"
          />
          <Box>
            <MainTransectionInput />
          </Box> 
        </Box>  
      </Container>
    </Box>
  );
};
export default MainTransection;
