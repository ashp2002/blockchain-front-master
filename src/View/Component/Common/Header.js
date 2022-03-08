import React, { useContext, useState, useEffect } from "react";
import { Box, AppBar, Toolbar, Container, Link, Button } from "@mui/material/";

import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../Images/logo.png";
//import Logo from "../../../Images/Common/Logo";

const useStyles = makeStyles((theme) => ({
  hoverButton: {
    marginLeft: "20px",
    fontWeight: 800,
  },
}));

const MenuSection = [
  { title: "서비스소개 +", url: "/" },
  { title: "적용사례 +", url: "/" },
  { title: "고객지원 +", url: "/" },
  { title: "로그인 +", url: "/" },
];

const Header = (props) => {
  const classes = useStyles();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const userName = useSelector((state) => state.AccountRedux.userName);
  const location = useLocation();
  console.log("Header", userName);

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
                      : ""
                  }
                >
                  {section.title}
              </Button>
            ))}  
            </Box>
            {/* 아직 미사용
            <Box sx={{ bgcolor: loginState ? "red" : "green" }}>
              {loginState ? userName + " 로그인됨" : "로그인 안됨"}
            </Box>
            */}
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
