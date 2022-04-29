import { createTheme } from "@material-ui/core/styles";

const textColor = "#727272";
const blue = "#036998";
const lightBlue = "#05C7F2";
// const blue = "#05C7F2";

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },

    MuiInputBase: {
      root: {
        // height: 50,
        background: "white",
        // border: "1px solid rgba(5, 199, 242, 0.5)",
      },
    },

    MuiStepper: {
      // Nome da regra
      root: {
        // Algum CSS
        background: "transparent",
        paddingTop: 0,
      },
    },
  },

  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 16,
    fontWeight: "normal",
    textDecoration: "none",
    color: textColor,
  },

  animations: {
    translatePageContainer: {
      animation: `$translate .6s ease-out forwards`,
      keyframeName: "@keyframes translate",
      keyframeValue: {
        to: {
          opacity: 1,
          paddingLeft: "4vw",
        },
      },
    },
  },

  palette: {
    primary: {
      light: "#A1C3ED",
      main: blue,
      dark: "#286090",
      contrastText: "#FFFFFF",
    },

    yellow: "#FFA900",
    white: "#FFF",
    red: "#FF5251",
    blue: blue,
    lightBlue: lightBlue,
    main: blue,

    purple: "#9746FF",
    green: "#69BF41",
    errorMessage: "#f44336",
    secondary: {
      light: "#F5F5F5",
      main: blue,
      dark: "#9E9E9E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: textColor,
    },
    icons: {},
    background: {
      paper: "#fff",
      default: "#F7F7F7",
    },
  },

  space: {
    globalPadding: "0px 30px 0px 30px",
    unit: 8,
    padding: "0px 30px 0px 30px",
    margin: 8,
  },

  MuiButton: {
    // Name of the rule
    text: {
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  },
});
