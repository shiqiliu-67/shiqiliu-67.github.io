import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { Container, Typography } from "@mui/material";

import ProjectBlock from "../components/projectBlock";
import NewsBlock from "../components/newsBlock";
import InfoBlock from "../components/infoBlock";

const HomePage = ({ data }) => {
  const info = data.allInfoJson.nodes[0];
  const news = data.allNewsJson.nodes;
  const publications = data.allPublicationsJson.nodes;
  const openSourceProjects = data.allOpenSourceProjectsJson.nodes;
  const authorsData = data.allAuthorsJson.nodes;
  const myName = info.name;

  return (
    <>
      <Helmet>
        <title>Shiqi Liu</title>
        <meta
          name="description"
          content="Shiqi Liu's personal academic website."
        />
        <meta
          name="keywords"
          content="Shiqi Liu, academic website, personal website, robotics, Carnegie Mellon University, machine learning, deep learning, reinforcement learning, geometric learning, AI research, computer science"
        />
        <meta name="author" content="Shiqi Liu" />
      </Helmet>

      {/* Abstract Section */}

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "960px", // Set your custom max width here
        }}
      >
        <InfoBlock info={info} />

        {/* News Section */}

        <Typography variant="h4" component="h1" gutterBottom>
          News
        </Typography>
        {news.map((item, iter) => (
          <NewsBlock key={iter} time={item.time} content={item.content} />
        ))}

        {/* Publication Section */}

        <Typography variant="h4" component="h1" gutterBottom marginTop="30px">
          Selected Publications
        </Typography>
        <Typography variant="body1" gutterBottom>
          * indicates equal contribution
        </Typography>
        {publications.map((item, iter) => (
          <ProjectBlock
            key={iter}
            title={item.title}
            image={item.image}
            authors={item.authors}
            journals={item.journals}
            links={item.links}
            authorsData={authorsData}
            myName={myName}
          />
        ))}

        {/* Open source Projects Section */}

        <Typography variant="h4" component="h1" gutterBottom marginTop="30px">
          Open Sourced Projects
        </Typography>
        {/* <List> */}
        {openSourceProjects.map((item, iter) => (
          <ProjectBlock
            key={iter}
            title={item.title}
            image={item.image}
            authors={item.authors}
            journals={item.descriptions}
            links={item.links}
            authorsData={authorsData}
            myName={myName}
          />
        ))}
        {/* </List> */}
      </Container>
    </>
  );
};

export const query = graphql`
  query {
    allInfoJson {
      nodes {
        name
        profilePhoto
        content
        email
        googleScholar
        linkedIn
        github
        cv
      }
    }
    allPublicationsJson {
      nodes {
        title
        authors
        journals
        image
        links {
          name
          link
        }
      }
    }
    allOpenSourceProjectsJson {
      nodes {
        title
        authors
        descriptions
        image
        links {
          name
          link
        }
      }
    }
    allAuthorsJson {
      nodes {
        name
        realName
        homepage
      }
    }
    allNewsJson {
      nodes {
        time
        content
      }
    }
  }
`;

export default HomePage;
