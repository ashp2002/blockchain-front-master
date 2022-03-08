import React, { useContext, useState, useEffect } from "react";
import { Box, AppBar, Toolbar, Container, Link } from "@mui/material/";

import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../../Images/Common/Logo";

const Header = (props) => {
  const { sections, title } = props;
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const userName = useSelector((state) => state.AccountRedux.userName);
  console.log("Header", userName);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container sx={{ maxWidth: "lg" }}>
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <Link component={RouterLink} to={"/"}>
              <Logo />
            </Link>

            <Box flexGrow={1} />
            <Box sx={{ bgcolor: loginState ? "red" : "green" }}>
              {loginState ? userName + " 로그인됨" : "로그인 안됨"}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

export default Header;
