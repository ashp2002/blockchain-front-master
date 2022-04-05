import React, { useContext, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as RouterLink, useHistory } from "react-router-dom";
import LoginDialog from "./User/LoginDialog";
import SuccessSB from "./Components/Snackbar/SuccessSB";
import { AppContext } from "../AppContext";
import {
  Grow,
  Button,
  Typography,
  Link,
  IconButton,
  Box,
  Divider,
} from "@material-ui/core";

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

  const [loginDialog, setLoginDialog] = React.useState(false);

  const { login, setLogin } = useContext(AppContext);
  const [loginSuccess_SB, setLoginSuccess_SB] = React.useState(false); //로그인 성공

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

  const handleClickVoteUse = (event) => {
    history.push("/MainInfo");
    setOpen(false);
  };

  const handleClickMakeVote = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push("/MakeVote");
    setOpen(false);
  };

  const handleClickCutomer = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    history.push("/CustomerPage");
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
      <SuccessSB
        title="로그인 하였습니다."
        success_SB={loginSuccess_SB}
        setSuccess_SB={setLoginSuccess_SB}
      />

      <LoginDialog
        showDialog={loginDialog}
        setShowDialog={setLoginDialog}
        setLoginSuccess_SB={setLoginSuccess_SB}
      />
      <Box>
        <IconButton
          color="primary"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
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
                      <Typography
                        variant="subtitle2"
                        className={classes.tablebody}
                      >
                        한국스마트선거
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClickVoteUse}>
                      <Typography
                        variant="subtitle2"
                        className={classes.tablebody}
                      >
                        이용방법
                      </Typography>
                    </MenuItem>
                    <Divider className={classes.divider} />
                    <MenuItem onClick={handleClickMakeVote}>
                      <Typography
                        variant="subtitle2"
                        className={classes.tablebody}
                      >
                        투표개설하기
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleClickCutomer}>
                      <Typography
                        variant="subtitle2"
                        className={classes.tablebody}
                      >
                        고객센터
                      </Typography>
                    </MenuItem>

                    <Divider className={classes.divider} />
                    {!login && (
                      <MenuItem
                        onClick={() => {
                          setLoginDialog(true);
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.tablebody}
                        >
                          로그인
                        </Typography>
                      </MenuItem>
                    )}
                    {login && (
                      <MenuItem
                        onClick={() => {
                          history.push("/votelist");
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.tablebody}
                        >
                          내투표
                        </Typography>
                      </MenuItem>
                    )}
                    {login && (
                      <MenuItem
                        onClick={() => {
                          history.push("/myInfo");
                        }}
                      >
                        <Typography
                          variant="subtitle2"
                          className={classes.tablebody}
                        >
                          내정보
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
