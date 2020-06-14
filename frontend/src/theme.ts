import { createMuiTheme } from "@material-ui/core/styles";

export default (dark: boolean = false) =>
  createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "#0d437b",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.secondary.main,
        main: "#13549a",
        // dark: will be calculated from palette.secondary.main,
        contrastText: "#ffcc00",
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
    },
  });
