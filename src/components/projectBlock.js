import React from "react";
import { Link, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import style from "../styles/default";

const ProjectBlock = ({
  index,
  title,
  authors,
  journals,
  links,
  image,
  authorsData,
  myName,
}) => {
  const formatUnlinkAuthor = (realName) => {
    return <span style={{ color: "red", fontWeight: "bold" }}>{realName}</span>;
  };

  const formatMe = (realName) => {
    return (
      <span style={{ color: style.primeColor, fontWeight: "bold" }}>
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
          color: "inherit",
          // textDecoration: "none",
          "&:hover": {
            color: "#B908C5", // Change this to your desired hover color
          },
        }}
      >
        {realName}
      </Link>
    );
  };

  const getFormattedPart = (text, name, idx) => {
    const author = getAuthor(name);
    if (!author) {
      return formatUnlinkAuthor(name);
    }
    const authorName = author.realName ? author.realName : author.name;
    const authorLink = author.homepage;
    if (name === myName) {
      return formatMe(authorName);
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
        acc.push(getFormattedPart(part, name, idx));
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
            <span key={idx} style={{ color: "#B908C5", fontWeight: "bold" }}>
              {abbr}
            </span>
          );
        } else {
          acc.push(
            <span key={idx} style={{ color: "black", fontWeight: "bold" }}>
              {abbr}
            </span>
          );
        }
      }

      return acc;
    }, []);
  };

  const formatLink = (link, idx) => (
    <span>
      {idx > 0 && " | "}
      <Link key={idx} href={link["link"]}>
        {link["name"]}
      </Link>
    </span>
  );

  // console.log("key", index);

  return (
    <Grid
      container
      spacing={2}
      marginTop={index === 0 ? "0px" : "20px"}
      marginBottom="0px"
    >
      <Grid size={{ xs: 12, md: 3.5 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            paddingTop: "64%", // 4:3 aspect ratio
            backgroundColor: "white",
            boxShadow: "0px 0px 0px 1px lightgray",
            borderRadius: 2,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={image} // Replace with your profile photo path
            alt="Project Photo"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "92%",
              height: "96%",
              objectFit: "contain",
              transform: "translate(-50%, -50%)",
            }}
          />
        </Box>
      </Grid>

      <Grid size={{ xs: 12, md: 8.5 }}>
        <Typography variant="h3" sx={style.h3}>
          {title}
        </Typography>
        <Typography component="p" sx={style.body1}>
          {formatAuthors(authors)}
        </Typography>
        <Typography component="p" sx={style.body1}>
          {formatJournals(journals)}
        </Typography>
        <Typography component="p" sx={style.body1}>
          {links.map((link, idx) => formatLink(link, idx))}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProjectBlock;
