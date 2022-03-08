import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      tablet: 760,
      mobile: 480,
    },
  },

  typography: {
    fontFamily: "Spoqa Han Sans Neo Light ",
    fontSize: 15,
    color: "#1A1A1A",

    body1: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "15px",
      letterSpacing: "-0.5pt",
      color: "#848484",
    },
    body2: {
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "18px",
      fontWeight: "800",
      //letterSpacing: "-0.5pt",
      color: "#848484",
    },
    h1: {
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontWeight: "900",
      fontSize: "48px",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    h2: {
      fontFamily: "Spoqa Han Sans Neo Regular ",
      fontSize: "45px",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    h3: {
      fontFamily: "Spoqa Han Sans Neo Regular ",
      fontSize: "40px",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    h4: {
      fontFamily: "Spoqa Han Sans Neo Regular ",
      fontSize: "35px",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    h5: {
      fontFamily: "Spoqa Han Sans Neo Regular ",
      fontSize: "27px",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    h6: {
      fontFamily: "Spoqa Han Sans Neo Regular ",
      fontSize: "25px",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#1A1A1A",
    },
    subtitle1: {
      fontFamily: "Spoqa Han Sans Neo Light ",
      fontSize: "18px",
      //fontSize: '1.15em',
      letterSpacing: "-0.5pt",
      color: "#848484",
    },
    subtitle2: {
      fontFamily: "Spoqa Han Sans Neo Light ",
      fontSize: "15px",
      letterSpacing: "-0.5pt",
      color: "#848484",
    },
    button: {
      fontFamily: "Spoqa Han Sans Neo Light ",
      fontSize: "15px",
      letterSpacing: "-1pt",
      color: "#454545",
    },
    caption: {
      fontFamily: "Spoqa Han Sans Neo Light ",
      fontSize: "16px",
      letterSpacing: "-1pt",
    },
  },

  palette: {
    primary: {
      main: "#FF4208",
    },
    secondary: {
      main: "#19857b",
    },
    text: {
      primary: '#ffffff',
    },
    error: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
