import { styled } from "@mui/system";
import { Link, Typography, Box, Grid } from "@mui/material";

import style from "../styles/default";

const SocialMediaLinks = ({ info }) => {
  const links = [
    { label: "Email", href: info.email && `mailto:${info.email}` },
    { label: "CV", href: info.cv },
    { label: "Google Scholar", href: info.googleScholar },
    { label: "GitHub", href: info.github },
    { label: "LinkedIn", href: info.linkedIn },
    { label: "X (Twitter)", href: info.twitter },
  ];

  return (
    <Box
      component="nav"
      aria-label="Profile links"
      sx={{
        ...style.body2,
        display: { xs: "grid", sm: "flex" },
        gridTemplateColumns: "repeat(3, minmax(0, max-content))",
        flexWrap: "wrap",
        columnGap: 2.25,
        rowGap: 0.5,
        mt: 1.5,
      }}
    >
      {links.filter(({ href }) => href).map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener"
          sx={{ ...style.link, fontWeight: 600, py: 0.25 }}
        >
          {label}
        </Link>
      ))}
    </Box>
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
          </Link>,
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
    <Grid
      component="header"
      container
      columnSpacing={{ xs: 0, sm: 3, md: 4 }}
      rowSpacing={2}
    >
      <Grid size={{ xs: 12, sm: 3 }}>
        <Box
          component="img"
          src={info.profilePhoto}
          alt={`Portrait of ${info.name}`}
          sx={{
            display: "block",
            width: "100%",
            maxWidth: { xs: "9rem", sm: "12rem" },
            height: "auto",
            borderRadius: "16px",
          }}
        />
      </Grid>
      <Grid size={{ xs: 12, sm: 9 }}>
        <Typography variant="h1" sx={{ ...style.h1, mb: 1 }}>
          {info.name}
        </Typography>
        <Typography component="p" sx={style.body1}>
          {parseMarkdown(info.content)}
        </Typography>

        <SocialMediaLinks info={info} />
      </Grid>
    </Grid>
  );
};

export default InfoBlock;
