import React, { useContext, useState, useEffect } from "react";
import { Box, AppBar, Toolbar, Container, Link, Button } from "@mui/material/";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../Images/common/logo.png"

const useStyles = makeStyles((theme) => ({
  hoverButton: {
    marginLeft: "20px",
    fontWeight: 800,
  },
  Button: {
    marginLeft: "20px",
  },
}));

const MenuSection = [
  { title: "HOME", url: "/" },
  { title: "서비스소개", url: "/Service" },
  { title: "적용사례", url: "/CaseExample" },
  { title: "고객지원", url: "/Customer" },
];

const Header = (props) => {
  const classes = useStyles();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const userName = useSelector((state) => state.AccountRedux.userName);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("Header", userName);
  console.log("Header", location.pathname);

  return (
    <React.Fragment>
      <AppBar sx={{ position: "fixed", backgroundColor: "white", boxShadow: "0" }}>
        <Container sx={{ maxWidth: "lg" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 50,
              py: 7,
            }}
          >
            <Link component={RouterLink} to={"/"}>
              <img alt="로고" src={Logo}></img>
            </Link>
            <Box flexGrow={1} />
            <Box>
              {MenuSection.map((section) => (
                <Button
                  component={RouterLink}
                  key={section.title}
                  to={section.url}
                  className={
                    section.url === location.pathname
                      ? classes.hoverButton
                      : classes.Button
                  }
                >
                  {section.title}
              </Button>
            ))}
              <Button
                component={RouterLink}
                to="/User"
                className={classes.Button} 
                >
                  {loginState ? "로그아웃" : "로그인"}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
