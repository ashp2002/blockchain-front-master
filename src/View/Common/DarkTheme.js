import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import "../../App.css";

// Create a theme instance.
const DarkTheme = createTheme({
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
    fontFamily: "Spoqa Han Sans Neo Regular",
    fontWeight: "500",
    fontSize: "16px",
    color: "#ffffff",
    
    h1: { //page title(고객센터,서비스)
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "50px",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    h2: { //Bottom mainTitle, Table title
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "40px",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    h3: { //Contents title, body
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "35px",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    h4: { //body 
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "25px",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    h5: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "18px",
      fontWeight: "400",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    h6: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "25px",
      fontWeight: "800",
      letterSpacing: "-0.03em",
      letterSpacing: "-1pt",
      color: "#ffffff",
    },
    subtitle1: {
      fontFamily: "Spoqa Han Sans Neo Regular",
      fontSize: "16px",
      fontWeight: "500",
      //fontSize: '1.15em',
      letterSpacing: "-0.5pt",
      color: "#ffffff",
    },
    subtitle2: {
      fontFamily: "Spoqa Han Sans Neo Medium",
      fontSize: "16px",
      fontWeight: "800",
      letterSpacing: "-0.5pt",
      color: "#ffffff",
    },
    body1: {
      fontFamily: "Spoqa Han Sans Neo Bold",
      fontSize: "20px",
      fontWeight: "800",
      letterSpacing: "-0.5pt",
      color: "#ffffff",
    },
    body2: {
      fontFamily: "Spoqa Han Sans Neo Medium",
      fontSize: "20px",
      fontWeight: "500",
      //letterSpacing: "-0.5pt",
      color: "#ffffff",
    },
    button: {
      fontFamily: "Spoqa Han Sans Neo Light",
      fontSize: "18px",
      letterSpacing: "-1pt",
      color: "#ffffff",
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
      main: "#ffffff",
    },
    text: {
      primary: '#ffffff',
    },
    error: {
      main: "#FF4208",
    },
  },
});

export default DarkTheme;