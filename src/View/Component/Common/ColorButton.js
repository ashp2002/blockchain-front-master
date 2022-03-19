import React from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";

//사용방법 : link => 라우터 링크일때('to' 사용 필수), color=> primary, secondary, third, outerline(외곽선)
const ColorButton = styled(({ link, color, ...other }) => (
  <Button component={link && RouterLink} {...other} />
))((props) => ({
  background:
    props.color === "primary"
      ? props.theme.palette.primary.main
      : props.color === "secondary"
      ? props.theme.palette.secondary.main
      : props.color === "third"
      ? props.theme.palette.third.main
      : props.color === "outer"
      ? props.theme.palette.background.default
      : props.color === "border"
      ? "#00ff0000"
      : props.theme.palette.primary.main,
  boxShadow: "none",
  borderRadius: props.radius === "true" ? 15 : 1,
  width: "100%",
  border: props.color === "outer" ? "solid" : props.color === "border" ? "solid"  : null,
  borderWidth: props.color === "outer" ? "1px" : props.color === "border" ? "2px" : 0,
  borderColor: props.color === "outer" ? props.theme.palette.border.dark
    : props.color === "border" ? props.theme.palette.secondary.main : null,
  color: props.color === "outer" ? props.theme.palette.text.primary : "white",
  height: props.height === "small" ? "45px" : "50px",
  fontFamily: "Spoqa Han Sans Neo Bold",
  fontSize: "20px",
  "&:hover": {
    backgroundColor:
      props.color === "primary"
        ? props.theme.palette.primary.main
        : props.color === "secondary"
        ? props.theme.palette.secondary.main
        : props.color === "third"
        ? props.theme.palette.third.main
        : props.color === "outer"
        ? props.theme.palette.background.default
        : props.theme.palette.primary.main,
  },
}));
export default ColorButton;
