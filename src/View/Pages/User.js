import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import UserLogin from "../Container/UserContainer/UserLogin";

export const useStyles = makeStyles((theme) => ({
}));

const User = (props) => {
  const classes = useStyles();


  return (
    <Box sx={{ mt: 14 }}>
      <UserLogin />
    </Box>
  );
};

export default User;
