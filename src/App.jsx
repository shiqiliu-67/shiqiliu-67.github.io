import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Container, Typography } from "@mui/material";

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
        maxWidth={false}
        sx={{
          maxWidth: "960px", // Set your custom max width here
          marginBottom: "30vh",
        }}
      >
        <InfoBlock info={myInfo} />

        {/* News Section */}

        <Typography component="h1" gutterBottom marginTop="30px" sx={style.h2}>
          News
        </Typography>
        {news.map((item, iter) => (
          <NewsBlock key={iter} time={item.time} content={item.content} />
        ))}

        {/* Publication Section */}

        <Typography component="h2" gutterBottom marginTop="30px" sx={style.h2}>
          Selected Publications
        </Typography>
        <Typography component="p" gutterBottom sx={style.body1}>
          * indicates equal contribution
        </Typography>
        {publications.map((item, iter) => (
          <ProjectBlock
            key={iter}
            index={iter}
            title={item.title}
            image={item.image}
            authors={item.authors}
            journals={item.journals}
            links={item.links}
            authorsData={authorsData}
            myName={myInfo.name}
          />
        ))}

        {/* Open source Projects Section */}

        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          marginTop="30px"
          sx={style.h2}
        >
          Open Sourced Projects
        </Typography>
        {openSourceProjects.map((item, iter) => (
          <ProjectBlock
            key={iter}
            index={iter}
            title={item.title}
            image={item.image}
            authors={item.authors}
            journals={item.descriptions}
            links={item.links}
            authorsData={authorsData}
            myName={myInfo.name}
          />
        ))}
      </Container>
  )
}

export default App
