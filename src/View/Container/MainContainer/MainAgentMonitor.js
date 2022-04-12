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
  imgBox: {
    [theme.breakpoints.between('sm','md')]: {
      width: "550px",
      height: "430px",
      objectFit: "cover",
    },
    [theme.breakpoints.between('xs','sm')]: {
      width: "400px",
      height: "300px",
      objectFit: "cover",
    },
  },
}));

const MainAgentMonitor = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%", bgcolor: "#F4F4F4" }}>
      <Container>
        <Box sx={{ pt: [5, 5, 15], pb: [5, 5, 15] }}>
          <MainAgentMonitorTitle />
          <Box sx={{ mt: 6, display: "flex", justifyContent: "center" }}>
            <img
                src={mainMonitor_img}
                className={classes.imgBox}
            ></img> 
          </Box>
        </Box>  
      </Container>
    </Box>
  );
};
export default MainAgentMonitor;
