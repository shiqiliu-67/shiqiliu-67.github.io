import "./App.css";

import { Box, Container, Typography } from "@mui/material";

import ProjectBlock from "./components/projectBlock";
import NewsBlock from "./components/newsBlock";
import InfoBlock from "./components/infoBlock";
import style from "./styles/default";

import authorsData from "./data/authors.json";
import myInfo from "./data/myInfo.json";
import news from "./data/news.json";
import publications from "./data/publications.json";
import openSourceProjects from "./data/openSourceProjects.json";

function App() {
  return (
    <Container
      component="main"
      maxWidth={false}
      disableGutters
      sx={{
        maxWidth: "60rem",
        px: { xs: 2.5, sm: 4, md: 5 },
        pt: { xs: 4, md: 7 },
        pb: { xs: 6, md: 9 },
        "& > section": { mt: { xs: 4, md: 5 } },
      }}
    >
      <InfoBlock info={myInfo} />

      <Box component="section" aria-labelledby="news-heading">
        <Typography id="news-heading" component="h2" sx={style.h2}>
          News
        </Typography>
        <Box component="ul" role="list" sx={{ m: 0, p: 0, listStyle: "none" }}>
          {news.map((item, iter) => (
            <NewsBlock key={iter} time={item.time} content={item.content} />
          ))}
        </Box>
      </Box>

      <Box component="section" aria-labelledby="publications-heading">
        <Typography id="publications-heading" component="h2" sx={style.h2}>
          Selected Publications
        </Typography>
        <Typography component="p" sx={style.body2}>
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
            myName={myInfo.name}
          />
        ))}
      </Box>

      <Box component="section" aria-labelledby="projects-heading">
        <Typography id="projects-heading" component="h2" sx={style.h2}>
          Open-Source Projects
        </Typography>
        {openSourceProjects.map((item, iter) => (
          <ProjectBlock
            key={iter}
            title={item.title}
            image={item.image}
            authors={item.authors}
            journals={item.descriptions}
            links={item.links}
            authorsData={authorsData}
            myName={myInfo.name}
          />
        ))}
      </Box>
    </Container>
  );
}

export default App;
