import React from "react";
import { styled } from "@mui/system";
import { Link, Typography, Box } from "@mui/material";
import style from "../styles/default";

const NewsBlock = ({ time, content }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, month] = time.split("-");
  const formattedTime = `${months[parseInt(month) - 1]} ${year}`;

  // Function to parse and render Markdown-style links
  const parseMarkdown = (text) => {
    const regex = /(\*\*(.*?)\*\*)|\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Loop through all markdown-style links and bold text
    while ((match = regex.exec(text)) !== null) {
      const [, , boldText, linkText, linkHref] = match;

      // Push text before the current match
      if (lastIndex < match.index) {
        parts.push(text.slice(lastIndex, match.index));
      }

      if (boldText) {
        // Handle bold text (**bold_text**)
        parts.push(<Highlight key={boldText}>{boldText}</Highlight>);
      } else if (linkText && linkHref) {
        // Handle Markdown-style links [text](url)
        parts.push(
          <Link key={linkHref} href={linkHref} sx={style.link}>
            {linkText}
          </Link>
        );
      }

      lastIndex = regex.lastIndex;
    }

    // Push remaining text after the last match
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  };

  const Highlight = styled("span")({
    color: style.accentColor,
    fontWeight: "bold",
  });

  return (
    <Box
      component="li"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "4.75rem minmax(0, 1fr)", sm: "5.5rem minmax(0, 1fr)" },
        columnGap: { xs: 1, sm: 2 },
        alignItems: "baseline",
        py: 0.375,
      }}
    >
      <Typography
        component="time"
        dateTime={time}
        sx={{ ...style.body2, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}
      >
        {formattedTime}
      </Typography>
      <Typography component="p" sx={{ ...style.body1, fontSize: "0.9375rem" }}>
        {parseMarkdown(content)}
      </Typography>
    </Box>
  );
};

export default NewsBlock;
