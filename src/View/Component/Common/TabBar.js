import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { fontWeight } from "@mui/system";

export const useStyles = makeStyles((theme) => ({
 
}));

const TabBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { value, items } = props;
  
  const handleChange = (event, newValue) => {
    props.handleChange(newValue);
  };

  return (
    <>
      <Box sx={{
        backgroundColor: theme.palette.secondary.main
      }}>
        <Container sx={{ maxWidth: "lg" }}>
          <Tabs
            value={props.value}
            variant="fullWidth"
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {items.map((item)=>(
              <Tab
              style={{
                display: "flex",
                //flexBasis: "200px",
                fontSize: "20px",
                fontWeight: "800px"
              }}
              label={item.title}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
    </>
  );
}

export default TabBar;