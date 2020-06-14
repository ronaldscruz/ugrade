import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import theme from "./theme";
import Routes from "./routes";

export default function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const preferredTheme = React.useMemo(() => theme(prefersDarkMode), [
    prefersDarkMode,
  ]);

  return (
    <ThemeProvider theme={preferredTheme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}
