import React from "react";
import {
  Typography,
  Box,
  Container,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import MainAgentMonitorTitle from "../../Component/Main/MainAgentMonitorTitle"
import mainMonitor_img from "../../../Images/mainMonitor_img.png"

const useStyles = makeStyles((theme) => ({

}));

const MainAgentMonitor = () => {
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
        >
          <MainAgentMonitorTitle />
          <Box mt={5} display="flex" justifyContent="center">
            <img
                src={mainMonitor_img}
            ></img> 
          </Box>
        </Box>  
      </Container>
    </Box>
  );
};
export default MainAgentMonitor;