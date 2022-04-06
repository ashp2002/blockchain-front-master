import React, { useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink, useHistory } from "react-router-dom";
import { 
  Box, 
  Paper,
  Popper,
  Container, 
  Link, 
  Button,
  ClickAwayListener,
  MenuItem, 
  MenuList,
  Divider,
  IconButton,
  Typography,
  Grow,
} from "@mui/material/";
import MenuIcon from '@mui/icons-material/Menu';

//import LoginDialog from "./User/LoginDialog";
//import SuccessSB from "./Components/Snackbar/SuccessSB";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "80%",
    margin: "auto",
  },
}));

const MobileDropMenu = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const fetchingState = useSelector((state) => state.AccountRedux._Fetching);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickLogin = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push("/");
    setOpen(false);
  };

  const handleClickMainContents = (event) => {
    history.push("/");
    setOpen(false);
  };

  const handleClickService = (event) => {
    history.push("/Service");
    setOpen(false);
  };

  const handleClickCaseExample = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push("/CaseExample");
    setOpen(false);
  };

  const handleClickCutomer = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push("/Customer");
    setOpen(false);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);

  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Box>
        <IconButton
          color="primary"
          ref={anchorRef}
          size="large"
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon sx={{ width: "40px", height: "40px", pb: ["10px", "5px", "0px"] }}/>
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClickMainContents}>
                      <Typography variant="subtitle2">
                        HOME
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClickService}>
                      <Typography variant="subtitle2">
                        서비스소개
                      </Typography>
                    </MenuItem>
                    <Divider className={classes.divider} />
                    <MenuItem onClick={handleClickCaseExample}>
                      <Typography variant="subtitle2">
                        적용사례
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClickCutomer}>
                      <Typography variant="subtitle2">
                        고객지원
                      </Typography>
                    </MenuItem>
                    <Divider className={classes.divider} />
                    {!loginState && (
                      <MenuItem
                        onClick={() => {
                          console.log("로그인")
                        }}
                      >
                        <Typography variant="subtitle2">
                          로그인
                        </Typography>
                      </MenuItem>
                    )}
                    {loginState && (
                      <MenuItem
                        onClick={() => {
                          console.log("로그아웃")
                        }}
                      >
                        <Typography variant="subtitle2">
                          로그아웃
                        </Typography>
                      </MenuItem>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </div>
  );
};

export default MobileDropMenu;
