import React from "react";
import { Link, Typography, Box, Grid } from "@mui/material";

import style from "../styles/default";

const ProjectBlock = ({
  title,
  headingComponent = "h3",
  authors,
  journals,
  links,
  image,
  authorsData,
  myName,
}) => {
  const formatUnlinkAuthor = (realName, idx) => {
    return (
      <span key={idx} style={{ color: "var(--color-error)", fontWeight: "bold" }}>
        {realName}
      </span>
    );
  };

  const formatMe = (realName, idx) => {
    return (
      <span key={idx} style={{ color: style.primeColor, fontWeight: "bold" }}>
        {realName}
      </span>
    );
  };

  const formatAuthorAsLink = (realName, href, idx) => {
    return (
      <Link
        key={idx}
        href={href}
        sx={{
          ...style.link,
          color: "inherit",
        }}
      >
        {realName}
      </Link>
    );
  };

  const getFormattedPart = (name, idx) => {
    const author = getAuthor(name);
    if (!author) {
      return formatUnlinkAuthor(name, idx);
    }
    const authorName = author.realName ? author.realName : author.name;
    const authorLink = author.homepage;
    if (name === myName) {
      return formatMe(authorName, idx);
    }
    return formatAuthorAsLink(authorName, authorLink, idx);
  };

  const formatAuthors = (text) => {
    const authorNames = authorsData.map((author) => author.name);
    const namesRegex = new RegExp(authorNames.join("|"), "gi");

    return text.split(namesRegex).reduce((acc, part, idx, arr) => {
      if (acc.length) acc.push(part);
      else acc = [part];

      if (idx < arr.length - 1) {
        const name = text.match(namesRegex)[idx];
        acc.push(getFormattedPart(name, idx));
      }

      return acc;
    }, []);
  };

  const getAuthor = (authorName) => {
    const author = authorsData.find((a) => a.name === authorName);
    return author;
  };

  const formatJournals = (text) => {
    // Create a regular expression to match any of the names in the dictionary
    const abbrRegex = new RegExp(`\\(.*?\\)`, "gi");
    const awards = ["spotlight", "oral"];
    const awardRegex = new RegExp(awards.join("|"), "i"); // The "i" flag makes the search case-insensitive

    // Replace matching names with hyperlinks
    return text.split(abbrRegex).reduce((acc, part, idx, arr) => {
      // Add the text part
      if (acc.length) acc.push(part);
      else acc = [part];

      // If not the last part, add the hyperlink
      if (idx < arr.length - 1) {
        const abbr = text.match(abbrRegex)[idx];
        if (awardRegex.test(abbr)) {
          acc.push(
            <span key={idx} style={{ color: style.accentColor, fontWeight: "bold" }}>
              {abbr}
            </span>
          );
        } else {
          acc.push(
            <span key={idx} style={{ color: style.primeColor, fontWeight: "bold" }}>
              {abbr}
            </span>
          );
        }
      }

      return acc;
    }, []);
  };

  return (
    <Grid
      component="article"
      container
      columnSpacing={{ xs: 0, sm: 3 }}
      rowSpacing={1.5}
      sx={{
        py: { xs: 2, sm: 2.25 },
        "& + article": { borderTop: "1px solid var(--color-border)" },
      }}
    >
      <Grid size={{ xs: 12, sm: 3.5 }}>
        <Box
          sx={{
            aspectRatio: "25 / 16",
            maxWidth: { xs: "20rem", sm: "none" },
            backgroundColor: "white", // Keep research figures on their original light canvas.
            border: "1px solid var(--color-border)",
            borderRadius: "12px",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Box
            component="img"
            src={image}
            alt=""
            sx={{
              width: "92%",
              height: "96%",
              objectFit: "contain",
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, sm: 8.5 }}>
        <Typography component={headingComponent} variant="h3" sx={{ ...style.h3, mb: 0.5 }}>
          {title}
        </Typography>
        {authors && (
          <Typography component="p" sx={style.body2}>
            {formatAuthors(authors)}
          </Typography>
        )}
        <Typography
          component="p"
          sx={{ ...style.body2, fontStyle: authors ? "italic" : "normal", mt: 0.25 }}
        >
          {formatJournals(journals)}
        </Typography>
        <Box sx={{ ...style.body2, display: "flex", flexWrap: "wrap", gap: 1.5, mt: 0.75 }}>
          {links.map(({ name, link }) => (
            <Link key={name} href={link} sx={{ ...style.link, fontWeight: 600 }}>
              {name}
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProjectBlock;
