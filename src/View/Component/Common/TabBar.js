import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Tabs, Tab, useMediaQuery } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../../Common/DarkTheme";

export const useStyles = makeStyles((theme) => ({
 
}));

const TabBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { items, handleChange, index, setIndex } = props;
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

  const handleTabChange = (event, value) => {
    setIndex(value)
    handleChange(value);
  };

  return (
    <>
    <ThemeProvider theme={DarkTheme}>
      <Box sx={{
        backgroundColor: theme.palette.secondary.main
      }}
      >
        <Container sx={{ maxWidth: "lg" }}>
          <Tabs
            color="white"
            value={index}
            variant="fullWidth"
            onChange={handleTabChange}
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
                fontSize: isMobile || isTablet ? "15px" : "20px",
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