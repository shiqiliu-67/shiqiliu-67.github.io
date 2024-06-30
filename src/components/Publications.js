import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import PUBLICATIONS from "../data/publications";
import AUTHORS from "../data/authors";

const makeArray = (x) => {
  if (!x) {
    return [];
  } else if (Array.isArray(x)) {
    return x;
  } else {
    return [String(x)];
  }
};

// const addHyperlinks = (text) => {};

const addHyperlinks = (text) => {
  // Create a regular expression to match any of the names in the dictionary
  const namesRegex = new RegExp(Object.keys(AUTHORS).join("|"), "gi");

  // Replace matching names with hyperlinks
  return text.split(namesRegex).reduce((acc, part, index, arr) => {
    // Add the text part
    if (acc.length) acc.push(part);
    else acc = [part];

    // If not the last part, add the hyperlink
    if (index < arr.length - 1) {
      const name = text.match(namesRegex)[index];
      const href = AUTHORS[name]["homepage"];
      const realName = AUTHORS[name]["realName"]
        ? AUTHORS[name]["realName"]
        : name;
      if (href === "self") {
        acc.push(
          <span style={{ color: "black", fontWeight: "bold" }}>{realName}</span>
        );
      } else {
        acc.push(
          <Link
            key={index}
            href={AUTHORS[name]["homepage"]}
            sx={{
              color: "inherit",
              textDecoration: "none",
              "&:hover": {
                color: "#B908C5", // Change this to your desired hover color
              },
            }}
          >
            {realName}
          </Link>
        );
      }
    }

    return acc;
  }, []);
};

const changeJournalColor = (text) => {
  // Create a regular expression to match any of the names in the dictionary
  const abbrRegex = new RegExp(`\\(.*?\\)`, "gi");
  const awards = ["spotlight", "oral"];
  const awardRegex = new RegExp(awards.join("|"), "i"); // The "i" flag makes the search case-insensitive

  // Replace matching names with hyperlinks
  return text.split(abbrRegex).reduce((acc, part, index, arr) => {
    // Add the text part
    if (acc.length) acc.push(part);
    else acc = [part];

    // If not the last part, add the hyperlink
    if (index < arr.length - 1) {
      const abbr = text.match(abbrRegex)[index];
      if (awardRegex.test(abbr)) {
        acc.push(
          <span key={index} style={{ color: "#B908C5", fontWeight: "bold" }}>
            {abbr}
          </span>
        );
      } else {
        acc.push(
          <span key={index} style={{ color: "black", fontWeight: "bold" }}>
            {abbr}
          </span>
        );
      }
    }

    return acc;
  }, []);
};

const formatLink = (link, idx) => {
  console.log(idx);
  // If not the last part, add the hyperlink
  if (idx === 0) {
    return (
      <span>
        <Link
          key={idx}
          href={link["href"]}
          // sx={{ color: "inherit", textDecoration: "none" }}
        >
          {link["name"]}
        </Link>
      </span>
    );
  } else {
    return (
      <span>
        {" | "}
        <Link
          key={idx}
          href={link["href"]}
          // sx={{ color: "inherit", textDecoration: "none" }}
        >
          {link["name"]}
        </Link>
      </span>
    );
  }
};

export function PublicationBlock(publication) {
  const title = publication.title;
  const authors = publication.authors;
  const journals = makeArray(publication.journals);
  const projectPhoto = publication.projectPhoto;
  const links = publication.links ? publication.links : [];

  //   TODO: format the authors to make the name Bold.

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={3}
        // alignItems="center"
        // justifyContent="center"
        // style={{ minHeight: "100vh" }}
        marginTop="10px"
        marginBottom="10px"
      >
        <Grid item xs={12} md>
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
              src={projectPhoto} // Replace with your profile photo path
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
        <Grid item xs={12} md={8}>
          <Typography variant="h6" sx={{ fontWeight: "Bold" }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ color: "grey" }}>
            {addHyperlinks(authors)}
          </Typography>
          {journals.map((journal) => (
            <Typography variant="body1" sx={{ color: "grey" }}>
              {changeJournalColor(journal)}
            </Typography>
          ))}
          <Typography variant="body1" sx={{ color: "grey" }}>
            {links.map((link, idx) => formatLink(link, idx))}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Publications() {
  return (
    <Container maxWidth="lg">
      <Box marginTop="50px">
        <Typography variant="h4">Selected Publications</Typography>
        <Typography variant="suntitle" sx={{ color: "gray" }}>
          * indicates equal contribution
        </Typography>
        <Grid container>{PUBLICATIONS.map((x) => PublicationBlock(x))}</Grid>
      </Box>
    </Container>
  );
}
