import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import ServiceVoteTitle from "../../Component/Service/ServiceVoteTitle";
import ServiceVoteInfo from "../../Component/Service/ServiceVoteInfo";
import ServiceVoteAgent from "../../Component/Service/ServiceVoteAgent";
import ServiceVoteTrust from "../../Component/Service/ServiceVoteTrust";
import ServiceEther_Img from"../../../Images/ServiceEther_Img.png"
import ServiceVote_Img from"../../../Images/ServiceVote_Img.png"
const useStyles = makeStyles((theme) => ({
  imgBox_agent: {
    [theme.breakpoints.between('sm','md')]: {
      width: "600px",
      height: "130px",
      objectFit: "cover",
    },
    [theme.breakpoints.between('xs','sm')]: {
      width: "370px",
      height: "70px",
      objectFit: "cover",
    },
  },
  "@media (max-width: 900px)": {
    imgBox_trust: {
      width: "600px",
      height: "300px",
      objectFit: "cover",
    },
  },
}));

const ServiceVote = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  return (
      <Container>
        <Box>
          <ServiceVoteTitle />
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteInfo />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={ServiceEther_Img} className={classes.imgBox_agent} />
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteAgent />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={ServiceVote_Img} className={classes.imgBox_trust}/>
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteTrust />
        </Box>
      </Container>
  );
};
export default ServiceVote;
