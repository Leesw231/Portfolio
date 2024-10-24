import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/F1.png";
import Lakers from "../../Assets/Projects/Lakers.png";
import bitsOfCode from "../../Assets/Projects/MLB.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MLB Stadium Home Run Effect"
              description="The most common myth in baseball is that the team lost because the stadium was too small, or that the team won because of the stadium. You might think that this is because the number of home runs produced varies greatly depending on the stadium. This project explains the correlation between these stadiums and actual data."
              ghLink="https://github.com/Sewon231/MLB-Stadium-Analysis/blob/main/Final%20project.Rmd"
              demoLink="https://s22260956.shinyapps.io/short_project/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="F1 Driver"
              description="F1 is no longer a minor sport. It has attracted many fans and competition for secondary industries and stadiums is fierce. There are many different players in F1. There are veteran players like Sir. Lewis Hamilton and Asian players like Yuki Tsunoda. And each player has a different debut age. Therefore, this project uses sports data science techniques to prove the topic to see if there is an optimal debut age."
              ghLink="https://github.com/Sewon231/F1-rookie-age-analysis-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lakers}
              isBlog={false}
              title="LA Lakers 23-24 player stat"
              description="One of the most important things in sports data science is visualizing data. This can be a graph or a chart. This project is a project to visualize player stats, which is the basis of sports data science."
              ghLink="https://github.com/Sewon231/LA-LAKERS-Player-stat-2023-2024"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
