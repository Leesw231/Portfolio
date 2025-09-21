import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/F1.png";
import Lakers from "../../Assets/Projects/Lakers.png";
import bitsOfCode from "../../Assets/Projects/MLB.png";
import Yankees from "../../Assets/Projects/baseball.png";
import baseball from "../../Assets/Projects/Yankees.png";

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
              description="One of the most common myths in baseball is that a team loses because the stadium is too small or wins because of the stadium itself. You might think this is because the number of home runs produced varies greatly depending on the stadium. This project explains the correlation between those stadium differences and actual home run data, providing a clear analysis based on real statistics."
              ghLink="https://github.com/Sewon231/MLB-Stadium-Analysis/blob/main/Final%20project.Rmd"
              demoLink="https://s22260956.shinyapps.io/short_project/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="F1 Driver"
              description="F1 is no longer a minor sport. It has attracted many fans, and competition among secondary markets and venues is very fierce. There are many different drivers in F1, including veterans like Sir Lewis Hamilton and Asian drivers like Yuki Tsunoda. Each driver has a different debut age. Therefore, this project uses sports data science techniques to investigate whether there is an optimal debut age for F1 drivers."
              ghLink="https://github.com/Sewon231/F1-rookie-age-analysis-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lakers}
              isBlog={false}
              title="LA Lakers 23-24 Player Stats"
              description="One of the most important things in sports data science is visualizing data, which can take the form of graphs or charts. This project focuses on visualizing player statistics, which is fundamental to the field of sports data science. The goal is to present clear and insightful visual representations of player performance metrics for the 2023-24 LA Lakers season."
              ghLink="https://github.com/Sewon231/LA-LAKERS-Player-stat-2023-2024"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseball}
              isBlog={false}
              title="Analysis of optimal launch conditions for each baseball field: Mathematical modeling using minimum wall height and distance data"
              description="This research analyzes optimal launch conditions for home runs in different MLB stadiums by modeling the effects of wall height and distance on the minimum required speed and angle for a successful home run."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Yankees}
              isBlog={false}
              title="Triple Play Strategy: Sustainable Digital Transformation for the New York Yankees"
              description="This project proposes a comprehensive digital transformation strategy for the New York Yankees, emphasizing sustainable and innovative solutions to enhance the organization’s operations."
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
