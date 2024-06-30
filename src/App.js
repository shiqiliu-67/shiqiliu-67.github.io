import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Intro from "./components/Intro";
import News from "./components/News";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
  },
  palette: {
    primary: {
      main: "#448aff",
      dark: "#536dfe",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Intro />
      <News />
      <Publications />
      <Projects />
    </ThemeProvider>
  );
}
