import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom";
import { 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  Box,
  Divider,
  } from '@mui/material';
import { SupportAdd, SupportAddN } from "../../Common/BoardDialogFunc";
import BoardButton from "../Common/BoardButton";

export const useStyles = makeStyles((theme) => ({
  label: {
    fontSize: "15px",
    marginBottom: "5px",
  },
  resize: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "10px",
      fontSize: "15px",
    },
  },
}));

const BoardDialog = (props) => {
  const classes = useStyles();
  const { showDialog, setShowModal, handleClickAddItem, page } = props;
  const [datas, setdatas] = useState({
    id: "",
    TxtPass: "",
    TxtName: "",
    TxtTitle: "",
    TxtContent: "",
    TxtPhone: "",
    idx: "",
  });
  let history = useHistory();

  const contentPage = (data) => {
    switch (data) {
      case "SupportAdd":
        return <SupportAdd setData={setdatas} data={datas}/>;
      case "SupportAddN":
        return <SupportAddN setData={setdatas} data={datas}/>;
      case "SupportDel":
        return //<SupportDel />;
    }
  };

  useEffect(() => {
  
  }, []);

  const handleClickClose = () => {
    setShowModal(false);
    setdatas("");
  };

  return (
    <div>
      <Dialog
        className={classes.container}
        open={showDialog}
        onClose={handleClickClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">게시글 등록</DialogTitle>
          <DialogContent>
            <Box>
              <Divider />
                {contentPage(page)}
              <Divider />
            </Box>
          </DialogContent>
        <DialogActions>
          <Box mr={2} pb={2} display="flex">
            <Box mr={2}>
              <BoardButton onClick={handleClickClose} color="primary">
                취소
              </BoardButton>
            </Box>
            <Box>
              <BoardButton onClick={()=>{ handleClickAddItem(datas) }} color="primary">
                확인
              </BoardButton>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default BoardDialog;
