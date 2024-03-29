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
import { SupportAdd, SupportAddN, SupportDel, NoticeAdd } from "../../Common/Board/BoardDialogFunc";
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
  const { title, showDialog, setShowModal, handleClick, page } = props;
  const [datas, setdatas] = useState({
    id: "",
    TxtPass: "",
    TxtName: "",
    TxtTitle: "",
    TxtContent: "",
    TxtPhone: "",
    idx: "",
  });

  const contentPage = (data) => {
    switch (data) {
      case "SupportAdd":
        return <SupportAdd setData={setdatas} data={datas}/>;
      case "SupportAddN":
        return <SupportAddN setData={setdatas} data={datas}/>;
      case "SupportDel":
        return <SupportDel setData={setdatas} data={datas}/>;
      case "NoticeAdd":
        return <NoticeAdd setData={setdatas} data={datas}/>;
    }
  };

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
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <Box>
              <Divider />
                {contentPage(page)}
              <Divider />
            </Box>
          </DialogContent>
        <DialogActions>
          <Box sx={{ mr: 2, pb: 2, display: "flex" }}>
            <Box sx={{ mr: 2 }}>
              <BoardButton onClick={handleClickClose} color="primary">
                취소
              </BoardButton>
            </Box>
            <Box>
              <BoardButton 
                onClick={()=>{ 
                  handleClick(datas)
                  setdatas("");
                }} 
                color="primary"
              >
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
