import React, { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Container } from "@mui/material";
import { useTheme, makeStyles } from "@mui/styles";
import { 
  ListGetFunc_inquiry,
  ItemGetFunc_inquiry,
  ItemDelFunc_inquiry,
  ItemInputFuncN_inquiry
} from "../../Common/BoardFunc";
import WhiteBottom from "../../Component/Customer/WhiteBottom";

const useStyles = makeStyles((theme) => ({
 
}));

const CustomerInquiry = () => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const Items = useSelector((state) => state.BoardRedux.Items);
  const ItemInfo = useSelector((state) => state.BoardRedux.ItemInfo);
  const userLevel = useSelector((state) => state.AccountRedux.userLevel);
  const loginState = useSelector((state) => state.AccountRedux.loginState);
  const _Fetching = useSelector((state) => state.AccountRedux.loginState);
  const [personInfo, setPersonInfo] = useState({
    txtName: "",
    txtTel: "",
    txtEmail: "",
    txtContent: "",
  });

  useEffect(() => {
    userLevel == 1 ? ListGetFunc_inquiry(dispatch) : ""
  }, []);

  console.log("리스트", Items)
  const hadleClickReg = () => {
    ItemInputFuncN_inquiry(dispatch, personInfo);
    setPersonInfo("");
  };

  return (
    <Box sx={{ width: "80%", mb: 10 }}>
        <WhiteBottom 
          hadleClickReg={hadleClickReg} 
          personInfo={personInfo} 
          setPersonInfo={setPersonInfo}
        />
    </Box>
    
  );
};
export default CustomerInquiry;
