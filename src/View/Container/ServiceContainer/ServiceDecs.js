import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import TitleText from "../../Component/Common/TitleText";
import ServiceDecs_img from "../../../Images/ServiceDecs_img.png"

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: `url(${ServiceDecs_img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom, right bottom",
  },
}));

const MainDecs = () => {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      width="100%"
      height={["200px", "250px", "300px"]}
      bgcolor="RGB(246,248,247)"
    >
      <Container>
        <TitleText
          title="서비스 소개"
          size="h1"
        />
      </Container>
    </Box>
  );
};
export default MainDecs;
