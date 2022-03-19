import React, { useEffect, useState } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import UserLogin from "../Container/UserContainer/UserLogin";
import UserJoin from '../Container/UserContainer/UserJoin';

export const useStyles = makeStyles((theme) => ({
}));

const User = (props) => {
  const classes = useStyles();
  const [flagPage, setFlagPage] = useState(0);

  const handlePageFlag = (flag) => {
    setFlagPage(flag);
  };

  return (
    <Box sx={{ mt: 14 }}>
      {flagPage == 0 ?
        <UserLogin handlePageFlag={handlePageFlag}/>
        : <UserJoin handlePageFlag={handlePageFlag}/>}
    </Box>
  );
};

export default User;
