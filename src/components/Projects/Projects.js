import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// --- 기존 이미지들 ---
import leaf from "../../Assets/Projects/F1.png";
import Lakers from "../../Assets/Projects/Lakers.png";
import bitsOfCode from "../../Assets/Projects/MLB.png";
import Yankees from "../../Assets/Projects/baseball.png";
import baseball from "../../Assets/Projects/Yankees.png";
// --------------------

// --- 새로 추가된 이미지 ---
import whartonImg from "../../Assets/Projects/Wharton.png";
import sjaLunchImg from "../../Assets/Projects/SJALunch.png";
// -----------------------

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research & Projects <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          I love finding patterns in performance and using data to ask better
          questions in sports, education, and everyday life.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* --- Wharton 아티클 카드 (새로 추가) --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whartonImg}
              isBlog={false} // 'Demo' 버튼으로 표시하기 위해 false로 설정
              title="Wharton Moneyball FLEX Article"
              description="An article published by the Wharton Global Youth Program about my project that analyzed the optimal debut age for F1 drivers, applying statistical methods from the Moneyball FLEX program."
              demoLink="https://globalyouth.wharton.upenn.edu/news/analyzing-f-1-motorsports-drivers-in-whartons-moneyball-flex/"
            />
          </Col>

          {/* --- SJA Lunch 웹사이트 카드 (새로 추가) --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sjaLunchImg}
              isBlog={false} // 'Demo' 버튼으로 표시하기 위해 false로 설정
              title="SJA Lunch Website"
              description="A web application developed to provide the daily meal menu for the St. Johnsbury Academy Jeju community. 10000+ daily visitor."
              demoLink="https://www.sjalunch.com/"
            />
          </Col>

          {/* --- 기존 프로젝트 카드들 --- */}
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
              imgPath={baseball}
              isBlog={false}
              title="Analysis of optimal launch conditions for each baseball field: Mathematical modeling using minimum wall height and distance data"
              description="This research analyzes optimal launch conditions for home runs in different MLB stadiums by modeling the effects of wall height and distance on the minimum required speed and angle for a successful home run."
              demoLink="https://docs.google.com/document/d/1iEFWJ9AabdIbJRGczTmhniK2F_ywutWqr96E7MXcKfs/edit?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Yankees}
              isBlog={false}
              title="Triple Play Strategy: Sustainable Digital Transformation for the New York Yankees"
              description="This project proposes a comprehensive digital transformation strategy for the New York Yankees, emphasizing sustainable and innovative solutions to enhance the organization’s operations."
              demoLink="https://docs.google.com/document/d/1Jw1fvSy7EQSG5KNEOw--DI9Wsi-jddlespqKCLNJSUA/edit?usp=sharing"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
