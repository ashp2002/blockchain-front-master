import React, { useEffect, useState } from "react";
import { AppContextProvider } from "./AppContext";

import { createStore } from "redux";
import { Provider } from "react-redux";
// import { composeWithDevTools } from "redux-devtools-extension";
//
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MainRoute from "./View/MainRoute";
import rootReducer from "./View/modules";

import theme from "./View/Common/theme";

/* 리듀서 스토어 생성 */
const store = createStore(rootReducer);

/* 개발모드 일때만 콘솔 로그 보이도록 함 */
if (process.env.options.mode !== "development") {
  console.log = () => {};
} else {
  console.log("development mode");
}

//Meterial UI 가이드 https://xd.adobe.com/view/2d5f2470-d021-437f-a18b-8e7bed245987-780c/screen/8422903d-fa50-418f-9886-928327927956

const App = (props) => {
  const [login, setLogin] = useState(false);
  useEffect(() => {});
  return (
    <AppContextProvider login={login} setLogin={setLogin}>
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <MainRoute />
        </ThemeProvider>
      </React.Fragment>
    </AppContextProvider>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App location={location} />
    </Provider>
  </BrowserRouter>,

  document.getElementById("root")
);
