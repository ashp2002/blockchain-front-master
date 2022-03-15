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
      <Box my={10}>
        <ServiceDocInfo />
      </Box>
      <Box display="flex" justifyContent="center">
        <img src={ServiceDoc_Img} />
      </Box>
      <Box my={10}>
        <ServiceVoteAgent />
      </Box>
      <Box display="flex" justifyContent="center">
        <img src={ServiceDoc_Img} />
      </Box>
      <Box my={10}>
        <ServiceVoteTrust />
      </Box>
    </Container>
  );
};
export default ServiceDocument;
