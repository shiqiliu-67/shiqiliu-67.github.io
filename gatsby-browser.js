// gatsby-browser.js

import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./src/utils/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./src/theme";

const cache = createEmotionCache();

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </CacheProvider>
  );
};
