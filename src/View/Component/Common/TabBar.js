import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import DarkTheme from "../../Common/DarkTheme";
import { tabIndex } from "../../modules/CommonRedux";
import { useSelector, useDispatch } from "react-redux";

export const useStyles = makeStyles((theme) => ({
 
}));

const TabBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { items, handleChange } = props;
  const newValue = useSelector((state) => state.CommonRedux.tabValue);

  const handleTabChange = (event, value) => {
    dispatch(tabIndex(value));
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
            value={newValue}
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