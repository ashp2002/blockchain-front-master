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
      sx={{
        width: "100%",
        height: ["200px", "250px", "400px"],
        bgcolor: "RGB(246,248,247)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <ThemeProvider theme={DarkTheme}>
      <Container>
        <Box sx={{ px: 4 }}>
          <TitleText
            title="서 비 스 소 개"
            size="h1"
            align="left"
          />
        </Box>
      </Container>
      </ThemeProvider>
    </Box>
  );
};
export default ServiceDecs;
