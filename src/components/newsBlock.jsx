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
  const formattedTime = `${months[parseInt(month) - 1]}. ${year}:`;

  // Function to parse and render Markdown-style links
  const parseMarkdown = (text) => {
    const regex = /(\*\*(.*?)\*\*)|\[([^\]]+)\]\(([^)]+)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    // Loop through all markdown-style links and bold text
    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, boldMatch, boldText, linkText, linkHref] = match;

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
          <NewsLink key={linkHref} href={linkHref}>
            {linkText}
          </NewsLink>
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

  // const TimeTypography = styled(Typography)(({ theme }) => ({
  //   color: "darkslategray",
  //   width: "100px",
  // }));

  const NewsTypography = styled(Typography)(({ theme }) => ({
    color: "darkslategray",
  }));

  const NewsLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    "&:hover": {
      color: "#B908C5",
    },
  }));

  const Highlight = styled("span")(({ theme }) => ({
    color: "#B908C5",
    fontWeight: "bold",
  }));

  return (
    <Box display="flex" sx={{ gap: 1 }}>
      <Box sx={{ width: "100px" }}>
        <Typography
          variant="body2"
          component="p"
          sx={{ ...style.body1, textAlign: "right" }}
        >
          {formattedTime}
        </Typography>
      </Box>

      <Box sx={{ width: "100%" }}>
        <Typography
          variant="body2"
          component="p"
          sx={{ ...style.body1, textAlign: "left" }}
        >
          {parseMarkdown(content)}
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsBlock;
