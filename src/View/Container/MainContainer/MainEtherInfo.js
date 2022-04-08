import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import MainEtherInfoTitle from "../../Component/Main/MainEtherInfoTitle"
import MainEtherInfoBody from "../../Component/Main/MainEtherInfoBody"
import mainEtherInfo from "../../../Images/mainEtherInfo_Img.png"

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 700px)": {
    imgBox: {
      width: "380px",
      height: "250px",
      objectFit: "cover",
    },
  },
}));

const MainEtherInfo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Box sx={{ pt: [5, 5, 15], pb: [5, 5, 15] }}>
        <MainEtherInfoTitle />
        <MainEtherInfoBody />
        <Box sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
          <img
              src={mainEtherInfo}
              className={classes.imgBox}
          ></img> 
        </Box>
      </Box>  
    </Container>
  );
};
export default MainEtherInfo;
