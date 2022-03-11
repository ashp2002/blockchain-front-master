import React from "react";
import { styled } from "@mui/material/styles";

const SimpleTextArea = styled(({ ...other }) => <textarea {...other} />)(
  (props) => ({
    border: "1px solid ",
    //borderColor: props.theme.palette.border.dark,
    padding: "13px",
    fontSize: "15px",
    borderRadius: 0,
    backgroundColor: props.theme.palette.background.default,
    width: "100%",
    font: props.theme.typography,

    "&:hover": {
      backgroundColor: props.theme.palette.background.default,
      border: "1px solid black",
      borderRadius: 0,
    },
    "&:focus": {
      backgroundColor: props.theme.palette.background.default,
      border: "1px solid black",

      borderRadius: 0,
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
  })
);
export default SimpleTextArea;
