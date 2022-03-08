import React, { useEffect } from "react";
import { refreshContents } from "../../modules/CommonRedux";
import { useSelector, useDispatch } from "react-redux";
import { asyncAPI, APIRequest } from "../../Common/Common";

const Test1 = ({ initialValue }) => {
  return <div>{initialValue.first}</div>;
};

const Test2 = ({ inputValue, children, ...other }) => {
  console.log(other);
  const { style, onChange } = other;
  return (
    <div>
      <div {...other} style={{ ...style, color: "red" }}>
        {children}
      </div>
      <input defaultValue={inputValue} {...{ onChange }} />
    </div>
  );
};

const MainContents = () => {
  const dispatch = useDispatch();
  const v = useSelector((state) => state.CommonRedux.refreshValue);
  useEffect(async () => {
    try {
      let resultData = await asyncAPI("user/useridCheck", {
        userid: "testist",
      });
      console.log("resultData1 ", resultData);
    } catch (e) {
      console.log("asyncAPI Log", e);
    }

    dispatch(refreshContents("Block Chain"));
  }, []);

  const def = "default";
  const initialValue = {
    def,
    first: "1",
    second: "2",
  };

  return (
    <div>
      <Test1 {...{ initialValue }} />
      <Test2
        inputValue={"Test2"}
        style={{ fontSize: 20 }}
        onClick={() => {
          console.log("onClick");
        }}
        onChange={(e) => {
          console.log("onChange", e.target.value);
        }}
      >
        {v}
      </Test2>
    </div>
  );
};

export default MainContents;
