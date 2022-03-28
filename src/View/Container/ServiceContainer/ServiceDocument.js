import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import ServiceDocInfo from "../../Component/Service/ServiceDocInfo";
import ServiceVoteAgent from "../../Component/Service/ServiceVoteAgent";
import ServiceVoteTrust from "../../Component/Service/ServiceVoteTrust";
import ServiceDoc_Img from"../../../Images/ServiceDoc_Img.png"

const useStyles = makeStyles((theme) => ({
}));

const ServiceDocument = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box sx={{ my: 10 }}>
        <ServiceDocInfo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={ServiceDoc_Img} />
      </Box>
      <Box sx={{ my: 10 }}>
        <ServiceVoteAgent />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img src={ServiceDoc_Img} />
      </Box>
      <Box sx={{ my: 10 }}>
        <ServiceVoteTrust />
      </Box>
    </Container>
  );
};
export default ServiceDocument;
