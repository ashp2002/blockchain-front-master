import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../../Common/DarkTheme";

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
    <ThemeProvider theme={DarkTheme}>
      <Box sx={{
        backgroundColor: theme.palette.secondary.main
      }}>
        <Container sx={{ maxWidth: "lg" }}>
          <Tabs
            color="white"
            value={props.value}
            variant="fullWidth"
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {items.map((item)=>(
              <Tab
              key={item.title}
              style={{
                display: "flex",
                //flexBasis: "200px",
                fontFamily: "Spoqa Han Sans Neo Medium",
                color: "white",
                fontSize: "20px",
                fontWeight: "800px"
              }}
              label={item.title}
              />
            ))}
          </Tabs>
        </Container>
      </Box>
    </ThemeProvider>
    </>
  );
}

export default TabBar;