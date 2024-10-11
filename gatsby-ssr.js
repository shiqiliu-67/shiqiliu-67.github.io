// gatsby-ssr.js

import React from "react";
import { renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import createEmotionCache from "./src/utils/createEmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./src/theme";

// Add a meta tag for the emotion insertion point in the head of the HTML
export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="emotion-insertion-point"
      name="emotion-insertion-point"
      content="emotion-insertion-point"
    />,
  ]);
};

// Replace the renderer to include Emotion's critical CSS
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // Create a new Emotion cache instance for each request
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  // Wrap the app with CacheProvider and ThemeProvider
  const app = (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{bodyComponent}</ThemeProvider>
    </CacheProvider>
  );

  // Render the app to a string
  const html = renderToString(app);

  // Extract Emotion's critical CSS
  const emotionChunks = extractCriticalToChunks(html);

  // Replace the body HTML string with the rendered app
  replaceBodyHTMLString(html);

  // Generate style tags from the extracted CSS
  const emotionStyleTags = emotionChunks.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  // Add the style tags to the head of the HTML
  setHeadComponents(emotionStyleTags);
};

// Ensure Emotion styles are loaded first in the head
export const onPreRenderHTML = ({ getHeadComponents }) => {
  const headComponents = getHeadComponents();

  headComponents.sort((a, b) => {
    const isEmotionA = a.props && a.props["data-emotion"];
    const isEmotionB = b.props && b.props["data-emotion"];

    if (isEmotionA && !isEmotionB) {
      return -1;
    }
    if (!isEmotionA && isEmotionB) {
      return 1;
    }
    return 0;
  });
};

// Wrap the root element with CacheProvider and ThemeProvider
export const wrapRootElement = ({ element }) => {
  const cache = createEmotionCache();

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </CacheProvider>
  );
};
