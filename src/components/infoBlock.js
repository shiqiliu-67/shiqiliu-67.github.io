import React from "react";
import { styled } from "@mui/system";
import { Link, Typography, Box, IconButton, ButtonGroup } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Grid from "@mui/material/Grid2";
import { StaticImage } from "gatsby-plugin-image";

import style from "../styles/default";

const SocialMediaLinks = ({ info }) => {
  const iconButtonStyle = { color: "#000", margin: "0 10px" }; // Add custom styles if needed
  const github = info.github;
  const linkedIn = info.linkedIn;
  const googleScholar = info.googleScholar;
  const email = `mailto:${info.email}`;
  const cv = info.cv;

  return (
    <ButtonGroup>
      <IconButton
        href={email}
        target="_blank"
        rel="noopener"
        style={iconButtonStyle}
      >
        <EmailIcon />
      </IconButton>
      <IconButton
        href={github}
        target="_blank"
        rel="noopener"
        style={iconButtonStyle}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href={googleScholar}
        target="_blank"
        rel="noopener"
        style={iconButtonStyle}
      >
        <SchoolIcon />
      </IconButton>
      <IconButton
        href={linkedIn}
        target="_blank"
        rel="noopener"
        style={iconButtonStyle}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href={cv}
        target="_blank"
        rel="noopener"
        style={iconButtonStyle}
      >
        <ContactPageIcon />
      </IconButton>
    </ButtonGroup>
  );
};

const InfoBlock = ({ info }) => {
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
          <ContentLink key={linkHref} href={linkHref}>
            {linkText}
          </ContentLink>
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

  const ContentTypography = styled(Typography)(({ theme }) => ({
    color: "darkslategray",
  }));

  const ContentLink = styled(Link)(({ theme }) => ({
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
    <Grid container spacing={2} marginTop="30px">
      <Grid size={{ xs: 12, md: 3 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-start" },
            height: "100%",
          }}
        >
          <StaticImage
            src="../images/profilePhoto.png" // Path to your image
            alt="Profile Photo"
            style={{
              justifyContent: "center",
              width: "100%",
              maxWidth: "240px",
              height: "auto",
              borderRadius: "16px", // Adjust as needed
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 9 }}>
        <Typography variant="h1" gutterBottom sx={style.h1}>
          {info.name}
        </Typography>
        <Typography variant="body2" gutterBottom sx={style.body1}>
          {parseMarkdown(info.content)}
        </Typography>

        <SocialMediaLinks info={info} />
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
