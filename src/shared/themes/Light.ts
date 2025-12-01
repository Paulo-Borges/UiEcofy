import { createTheme } from "@mui/material";
import { cyan, grey, yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      dark: yellow[800],
      light: yellow[500],
      contrastText: "#f68605",
    },
    secondary: {
      main: grey[900],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#ffffff",
    },
    background: {
      default: "#f8f8f8",
      paper: "#ffffff",
    },
  },
});
