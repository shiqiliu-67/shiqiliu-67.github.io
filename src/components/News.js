import React from "react";
import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";

export default function News() {
  const TimeTypography = styled(Typography)(({ theme }) => ({
    color: "darkslategray",
    // fontWeight: "bold",
    marginRight: "10px",
    width: "64px",
  }));

  const NewsTypography = styled(Typography)(({ theme }) => ({
    color: "darkslategray",
  }));

  const NewsLink = styled(Link)(({ theme }) => ({
    // color: "inherit",
    textDecoration: "none",
    // fontWeight: "bold",
    "&:hover": {
      color: "#B908C5", // Change this to your desired hover color
    },
  }));

  const Highlight = styled("span")(({ theme }) => ({
    color: "#B908C5",
    fontWeight: "bold",
  }));

  const news = [
    {
      time: "2023/11",
      text: (
        <span>
          One paper about{" "}
          <NewsLink href="https://arxiv.org/abs/2304.06286">
            cardiovascular record retrieval
          </NewsLink>{" "}
          was accepted by PMLR ML4H 2023.
        </span>
      ),
    },
    {
      time: "2023/10",
      text: (
        <span>
          A new arXiv preprint <NewsLink href="">RoboTool</NewsLink>.
        </span>
      ),
    },
    {
      time: "2023/08",
      text: (
        <span>
          Two papers got accepted to CoRL 2023, and{" "}
          <NewsLink href="https://sites.google.com/view/rl-covers/">
            COVERS
          </NewsLink>{" "}
          was accepted for an <Highlight>oral presentation</Highlight>!
        </span>
      ),
    },
    {
      time: "2023/06",
      text: (
        <span>
          One paper about{" "}
          <NewsLink href="https://arxiv.org/abs/2011.04408">
            cross-domain robust perception
          </NewsLink>{" "}
          got accepted to IROS 2023.
        </span>
      ),
    },
    //One paper about cross-domain robust perception is accepted to IROS 2023
  ];

  return (
    <Container maxWidth="lg">
      <Box marginTop="50px" sx={{ maxHeight: "20vh", overflow: "auto" }}>
        <Typography variant="h4">News</Typography>
        {news.map((x) => (
          <Box display="flex" alignItems="center">
            <TimeTypography variant="body2">{x.time}: </TimeTypography>
            <NewsTypography variant="body2">{x.text}</NewsTypography>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
