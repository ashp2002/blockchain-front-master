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
  } from '@mui/material';
import SimpleTextField from "../Common/SimpleTextField";
import SimpleTextArea from "../Common/SimpleTextArea";
import { SupportAdd } from "../../Common/TableDialogFunc";

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

const TableDialog = (props) => {
  const classes = useStyles();
  const { showDialog, setShowModal, handleClick } = props;
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
            <Box>{contentPage("SupportAdd")}</Box>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} color="primary">
            취소
          </Button>
          <Button onClick={()=>{ handleClick(datas) }} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default TableDialog;
