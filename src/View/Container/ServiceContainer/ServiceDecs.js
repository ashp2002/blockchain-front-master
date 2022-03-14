import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../../Common/DarkTheme";
import TitleText from "../../Component/Common/TitleText";
import ServiceDecs_img from "../../../Images/ServiceDecs_img.png"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${ServiceDecs_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom, right bottom",
    backgroundColor: "black",
  },
}));

const ServiceDecs = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Box
      className={classes.container}
      width="100%"
      height={["200px", "250px", "400px"]}
      bgcolor="RGB(246,248,247)"
    >
      <ThemeProvider theme={DarkTheme}>
      <Container>
        <Box position="relative" left="-500px" bottom="-270px">
          <TitleText
            title="서 비 스 소 개"
            size="h1"
          />
        </Box>
      </Container>
      </ThemeProvider>
    </Box>
  );
};
export default ServiceDecs;
