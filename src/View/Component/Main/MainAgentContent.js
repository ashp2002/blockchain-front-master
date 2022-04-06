import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import TitleText from "../Common/TitleText";
import BodyText from "../Common/BodyText";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "616px",
    height: "420px",
    objectFit: "cover",
  },

  "@media (max-width: 700px)": {
    container: {
      width: "400px",
      height: "300px",
      objectFit: "cover",
    },
  },
}));

const MainAgentContent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const { image, location, title, decs1, decs2, decs3, decs4 } = props;

  return (
    <Box
      sx={{ display: "flex", flexDirection: isMobile || isTablet ? "column" : "row"  }}
      //flexDirection={isMobile || isTablet ? "column" : "row"}
      //mt={[5, 6, 8]}
      //mb={[5, 6, 8]}
    >
      <Box
        sx={{
          display: "flex",
          flexBasis: "50%",
          justifyContent: "center",
          mt: location === "Img_left" ? "" : [5, 5, 0]
        }}
      >
      {location === "Img_left" ?
          <img
            className={classes.container}
            src={image}
          ></img> : 
        <Box sx={{ px: 4, pt: isMobile || isTablet ? 2 : 10, pb: isMobile || isTablet ? 5 : 0 }}>
          <TitleText title={title} size={isMobile || isTablet ? "h4" : "h2"} align="left" />
          <BodyText text={decs1} location="left" />
          <BodyText text={decs2} location="left" />
          <BodyText text={decs3} location="left" />
          <BodyText text={decs4} location="left" />
        </Box>
      }
      </Box>
      <Box
        sx={{
          display: "flex",
          flexBasis: "50%",
          justifyContent: "center",
          mt: location === "Img_left" ? "" : [5, 5, 0]
        }}
      >
        {location === "Img_left" ?
          <Box sx={{ px: 4, pt: isMobile || isTablet ? 2 : 10, pb: isMobile || isTablet ? 5 : 0 }}>
            <TitleText title={title} size={isMobile || isTablet ? "h4" : "h2"} align="left" />
            <BodyText text={decs1} location="left" />
            <BodyText text={decs2} location="left" />
            <BodyText text={decs3} location="left" />
            <BodyText text={decs4} location="left" />
          </Box> : 
          <img
            className={classes.container}
            src={image}
          ></img> 
        }
      </Box>
    </Box>
  );
};

export default MainAgentContent;
