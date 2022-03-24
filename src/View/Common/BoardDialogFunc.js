import React, { useState, useContext, useEffect } from "react";
import { useTheme, makeStyles } from "@mui/styles";
import { Typography, Box } from "@mui/material";
import LabelTextField from "../Component/Common/LabelTextField";

const useStyles = makeStyles((theme) => ({

}));

export const SupportAddN = (props) => {
  const { setData , data } = props;

  const handleChange = (event, name) => {
    setData(data=>({
      ...data,
      [event.target.name] : event.target.value,
    }))
  };

  return (
    <Box>
      <Box mt={2}>
        <LabelTextField 
          title="제목" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtTitle}
          name="TxtTitle"
        />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="작성자" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtName}
          name="TxtName"
          />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="연락처" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtPhone}
          name="TxtPhone"
          />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="비밀번호" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtPass}
          name="TxtPass"
          />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="내용" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtContent}
          name="TxtContent"
          multiline= "5"
          />
      </Box>
    </Box>
  );
};

export const SupportAdd = (props) => {
  const { setData , data } = props;

  const handleChange = (event, name) => {
    setData(data=>({
      ...data,
      [event.target.name] : event.target.value,
    }))
  };

  return (
    <Box>
      <Box mt={2}>
        <LabelTextField 
          title="제목" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtTitle}
          name="TxtTitle"
        />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="비밀번호" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtPass}
          name="TxtPass"
          />
      </Box>
      <Box mt={2}>
        <LabelTextField 
          title="내용" 
          inputWidth="100%" 
          handleChange={handleChange}
          value={data.TxtContent}
          name="TxtContent"
          multiline= "5"
          />
      </Box>
    </Box>
  );
};


