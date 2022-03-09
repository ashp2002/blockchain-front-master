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
    fontFamily: "Spoqa Han Sans Neo Light",
    fontWeight: "500",
    fontSize: "16px",
    color: "#707070",
    
    h1: { //page title(고객센터,서비스)
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontWeight: "800",
      fontSize: "50px",
      letterSpacing: "-1pt",
      color: "#0F0F0F",
    },
    h2: { //Bottom mainTitle, Table title
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "40px",
      fontWeight: "800",
      letterSpacing: "-1pt",
      color: "#0F0F0F",
    },
    h3: { //Contents title, body
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "35px",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#0F0F0F",
    },
    h4: { //body 
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "25px",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#0F0F0F",
    },
    h5: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "18px",
      fontWeight: "600",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#7A7A7A",
    },
    h6: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "25px",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#0F0F0F",
    },
    subtitle1: {
      fontFamily: "Spoqa Han Sans Neo Light",
      fontSize: "16px",
      fontWeight: "500",
      //fontSize: '1.15em',
      letterSpacing: "-0.5pt",
      color: "#707070",
    },
    subtitle2: {
      fontFamily: "Spoqa Han Sans Neo Light",
      fontSize: "16px",
      fontWeight: "800",
      letterSpacing: "-0.5pt",
      color: "#707070",
    },
    body1: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "20px",
      fontWeight: "800",
      letterSpacing: "-0.5pt",
      color: "#848484",
    },
    body2: {
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "20px",
      fontWeight: "800",
      //letterSpacing: "-0.5pt",
      color: "#7A7A7A",
    },
    button: {
      fontFamily: "Spoqa Han Sans Neo Light",
      fontSize: "18px",
      letterSpacing: "-1pt",
      color: "#707070",
    },
    caption: {
      fontFamily: "Spoqa Han Sans Neo Light",
      fontSize: "16px",
      letterSpacing: "-1pt",
    },
  },

  palette: {
    primary: {
      main: "#FF4208",
    },
    secondary: {
      main: "#102534",
    },
    text: {
      primary: '#707070',
    },
    error: {
      main: "#FF4208",
    },
  },
});

export default theme;
