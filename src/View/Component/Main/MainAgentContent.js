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

const useStyles = makeStyles((theme) => ({
  container: {
    width: "616px",
    height: "420px",
    objectFit: "cover",
  }
}));

const MainAgentContent = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const { image, location, title, decs } = props;

  return (
    <Box
      display="flex"
      //flexDirection={isMobile || isTablet ? "column" : "row"}
      //mt={[5, 6, 8]}
      //mb={[5, 6, 8]}
    >
      <Box
        display="flex"
        flexBasis="50%"
        justifyContent="center"
        mt={location === "Img_left" ? "" : [5, 5, 0]}
      >
      {location === "Img_left" ?
          <img
            className={classes.container}
            src={image}
          ></img> : 
        <Box px={4} pt={10}>
          <TitleText
            title={title}
            description={decs}
            size="h3"
            decssize="h5"
            align="left"
          />
        </Box>
      }
      </Box>
      <Box
        display="flex"
        flexBasis="50%"
        justifyContent="center"
        mt={location === "Img_left" ? [5, 5, 0] : ""}
      >
        {location === "Img_left" ?
          <Box px={4} pt={10}>
            <TitleText
              title={title}
              description={decs}
              size="h3"
              decssize="h5"
              align="left"
            />
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
