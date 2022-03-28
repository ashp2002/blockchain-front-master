import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import ServiceVoteTitle from "../../Component/Service/ServiceVoteTitle";
import ServiceVoteInfo from "../../Component/Service/ServiceVoteInfo";
import ServiceVoteAgent from "../../Component/Service/ServiceVoteAgent";
import ServiceVoteTrust from "../../Component/Service/ServiceVoteTrust";
import ServiceEther_Img from"../../../Images/ServiceEther_Img.png"
import ServiceVote_Img from"../../../Images/ServiceVote_Img.png"
const useStyles = makeStyles((theme) => ({
}));

const ServiceVote = () => {
  const classes = useStyles();

  return (
      <Container>
        <Box>
          <ServiceVoteTitle />
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteInfo />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={ServiceEther_Img} />
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteAgent />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <img src={ServiceVote_Img} />
        </Box>
        <Box sx={{ my: 10 }}>
          <ServiceVoteTrust />
        </Box>
      </Container>
  );
};
export default ServiceVote;
