import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import PROJECTS from "../data/projects";
import { PublicationBlock } from "./Publications";
// import AUTHORS from "../data/authors";

export default function Projects() {
  return (
    <Container maxWidth="lg">
      <Box marginTop="50px">
        <Typography variant="h4">Projects</Typography>
        <Grid container>{PROJECTS.map((x) => PublicationBlock(x))}</Grid>
      </Box>
    </Container>
  );
}
