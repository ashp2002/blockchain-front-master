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
import SimpleTextField from "../../Component/Common/SimpleTextField";
import SimpleTextArea from "../../Component/Common/SimpleTextArea";

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

const DeletePassDialog = (props) => {
  const classes = useStyles();
  const { showDialog, setShowModal, setIdx } = props;
  const [txtPass, setTxtPass] = useState("");
  const [datas, setdatas] = useState(null);
  let history = useHistory();

  useEffect(() => {
  
  }, []);

  const delPassClick = () => {
    
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Dialog
        className={classes.container}
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth="xs"
      >
        <DialogTitle id="form-dialog-title">게시글 등록</DialogTitle>
          <DialogContent>
            <Box mt={2}>
              <SimpleTextField
                radius={5}
                type="password"
                placeholder="비밀번호"
                value={txtPass || ""}
                onChange={({ target: { value } }) => setTxtPass(value)}
              />
            </Box>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            취소
          </Button>
          <Button onClick={delPassClick} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DeletePassDialog;
