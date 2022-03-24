import React from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import { Box, Button, TextField, Typography, Grid } from "@mui/material";

const TableButton = styled(({ link, color, ...other }) => (
  <Button component={link && RouterLink} {...other} />
))((props) => ({
  background: props.theme.palette.secondary.main,
  boxShadow: "none",
  borderRadius: 5,
  width: "100px",
  border: props.color === "outer" ? "solid" : props.color === "border" ? "solid"  : null,
  borderWidth: props.color === "outer" ? "1px" : props.color === "border" ? "2px" : 0,
  borderColor: props.color === "outer" ? props.theme.palette.border.dark
    : props.color === "border" ? props.theme.palette.secondary.main : null,
  color: props.color === "outer" ? props.theme.palette.text.primary : "white",
  height: "40px",
  fontFamily: "Spoqa Han Sans Neo Medium",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: props.theme.palette.primary.main
  },
}));
export default TableButton;
