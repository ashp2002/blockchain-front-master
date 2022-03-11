import React, { useState, useContext, useEffect } from "react";
import { Box, Container, Tabs, Tab } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    backgroundColor: "#ffffff",
  },
}));

const TabBar = (props) => {
  const classes = useStyles();
  const { value } = props;
  
  const handleChange = (event, newValue) => {
    props.handleChange(newValue);
  };

  return (
    <>
      <Box className={classes.tabContainer}>
        <Tabs
          value={props.value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            style={{
              minWidth: "100px",
            }}
            label="패기지 구성"
          />
          <Tab
            style={{
              minWidth: "100px",
            }}
            label="가격 정보"
          />
          <Tab
            style={{
              minWidth: "100px",
            }}
            label="선거 개설"
          />
          <Tab
            style={{
              minWidth: "100px",
            }}
            label="모바일 투표"
          />
        </Tabs>
      </Box>
    </>
  );
}

export default TabBar;