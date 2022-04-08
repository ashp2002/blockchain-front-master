import React from "react";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import ServiceDocInfo from "../../Component/Service/ServiceDocInfo";
import ServiceVoteAgent from "../../Component/Service/ServiceVoteAgent";
import ServiceVoteTrust from "../../Component/Service/ServiceVoteTrust";
import ServiceDoc_Img from"../../../Images/ServiceDoc_Img.png"

const useStyles = makeStyles((theme) => ({
  "@media (max-width: 800px)": {
    imgBox_agent: {
      width: "350px",
      height: "200px",
      objectFit: "cover",
    },
  },
}));

const ServiceDocument = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box sx={{ my: 10 }}>
        <ServiceDocInfo />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <img src={ServiceDoc_Img}className={classes.imgBox_agent}/>
      </Box>
    </Container>
  );
};
export default ServiceDocument;
