import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import ContactPageIcon from "@mui/icons-material/ContactPage";

import AUTHORS from "../data/authors";

const SocialMediaLinks = () => {
  const iconButtonStyle = { color: "#000", margin: "0 10px" }; // Add custom styles if needed
  const myInfo = AUTHORS["Shiqi Liu"];
  const github = myInfo["github"];
  const linkedIn = myInfo["linkedIn"];
  const googleScholar = myInfo["googleScholar"];
  const email = "mailto:" + myInfo["email"];
  const cv = myInfo["cv"];

  return (
    <div style={{ display: "flex", justifyContent: "left" }}>
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
    </div>
  );
};

export default function Title() {
  const photoSrc = process.env.PUBLIC_URL + "/imgs/profilePhoto.png";

  const dingzhaoLink = AUTHORS["Ding Zhao"].homepage;
  const safeAILink = "https://safeai-lab.github.io/";

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={2}
        // columnSpacing={{ xs: 0, sm: 4, md: 8 }}
        // alignItems="center"
        // justifyContent="center"
        // style={{ minHeight: "100vh" }}
        marginTop="80px"
      >
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={photoSrc} // Replace with your profile photo path
              alt="Profile Photo"
              sx={{
                width: "100%",
                maxWidth: "240px",
                height: "auto",
                borderRadius: 4, // Adjust the border-radius for rounded edges
                boxShadow: "0px 0px 3px 0px lightgray",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Grid container direction="column" style={{ minHeight: "100%" }}>
            <Grid item xs>
              <Typography variant="h4" gutterBottom>
                Shiqi Liu
              </Typography>
              <Typography variant="body1" paragraph>
                I am a first-year Ph.D. student at{" "}
                <Link href={safeAILink}>Safe AI Lab</Link> at Carnegie Mellon
                University (CMU) advised by Prof.{" "}
                <Link href={dingzhaoLink}>Ding Zhao</Link>. Previously, I earned
                a master's degree in Mechanical Engineering from CMU.
              </Typography>
              <Typography variant="body1" paragraph>
                My current research interests include Reinforcement Learning and
                Geometric Learning in the context of Robotics.
              </Typography>
            </Grid>
            <Grid item>
              <SocialMediaLinks />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
