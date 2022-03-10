import React from "react";
import { styled } from "@mui/material/styles";

const SimpleTextField = styled(({ radius, center, ...other }) => (
  <input {...other} />
))((props) => ({
  border: "1px solid ",
  //borderColor: props.theme.palette.border.dark,
  padding: "13px",
  fontSize: "15px",
  borderRadius: props.radius,
  backgroundColor: props.theme.palette.background.default,
  width: "100%",
  textAlign: props.center ? "center" : "left",
  "&:hover": {
    backgroundColor: props.theme.palette.background.default,
    border: "1px solid black",
    borderRadius: props.radius,
  },
  "&:disabled": {
    backgroundColor: props.theme.palette.background.disabled,
    //borderColor: props.theme.palette.border.dark,
    borderRadius: props.radius,
  },
  "&:focus": {
    backgroundColor: props.theme.palette.background.default,
    border: "1px solid black",

    borderRadius: props.radius,
    outline: "none",
    "&::-webkit-input-placeholder": {
      color: props.theme.palette.background.default,
    },
    //      "&:-ms-input-placeholder": {
    //        color: props.theme.palette.background.default,
    //      },
    "&::placeholder": {
      color: props.theme.palette.background.default,
    },
  },
  "&::-webkit-input-placeholder": {
    color: props.theme.palette.text.secondary,
  },
  //    "&:-ms-input-placeholder": {
  //      color: props.theme.palette.text.secondary,
  //    },
  "&::placeholder": {
    color: props.theme.palette.text.secondary,
  },
}));
SimpleTextField.defaultProps = { radius: 0 };
export default SimpleTextField;
