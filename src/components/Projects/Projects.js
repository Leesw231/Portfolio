import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// --- 이미지 파일 Import ---
import whartonImg from "../../Assets/Projects/Wharton.png";
import sjaLunchImg from "../../Assets/Projects/SJALunch.png";
import mlbStadiumImg from "../../Assets/Projects/MLB.png";
import f1Img from "../../Assets/Projects/F1.png";
import baseballLaunchImg from "../../Assets/Projects/baseball.png";
import yankeesImg from "../../Assets/Projects/Yankees.png";
import lakersImg from "../../Assets/Projects/Lakers.png";

// --- AIJAM 프로젝트를 위한 새 이미지 ---
import aijamImg from "../../Assets/Projects/AIJAMImage.png"; // 임시 이미지 (원하는 이미지로 변경 가능)


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

          {/* --- 1. Wharton Article --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whartonImg}
              isBlog={false}
              title="Wharton Moneyball FLEX Article"
              description="An article by the Wharton Global Youth Program on my project analyzing the optimal debut age for F1 drivers using statistical methods."
              demoLink="https://globalyouth.wharton.upenn.edu/news/analyzing-f-1-motorsports-drivers-in-whartons-moneyball-flex/"
            />
          </Col>

          {/* --- 2. AIJAM Finalist Paper (새로 추가) --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aijamImg} // 임시 이미지입니다. 다른 이미지로 교체할 수 있습니다.
              isBlog={false}
              title="AIJAM Finalist - Stress Factors in International Schools"
              description="A finalist at AIJAM 2025, this research uses a grounded theory approach to investigate the unique stress factors faced by students in Korean international schools, analyzing data from 500 students."
              demoLink="/AIJAM.pdf" // public 폴더에 넣은 PDF 파일 경로
            />
          </Col>
          
          {/* --- 3. SJA Lunch Website --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sjaLunchImg}
              isBlog={false}
              title="SJA Lunch Website"
              description="A web application developed to provide the daily meal menu for the St. Johnsbury Academy Jeju community. 10000+ daily visits."
              demoLink="https://www.sjalunch.com/"
            />
          </Col>

          {/* --- 4. MLB Stadium --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mlbStadiumImg}
              isBlog={false}
              title="MLB Stadium Home Run Effect"
              description="This project explains the correlation between stadium factors and home run statistics, providing a clear analysis based on real data."
              ghLink="https://github.com/Sewon231/MLB-Stadium-Analysis/blob/main/Final%20project.Rmd"
              demoLink="https://s22260956.shinyapps.io/short_project/"
            />
          </Col>
          {/* --- 7. Yankees Digital Transformation --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yankeesImg}
              isBlog={false}
              title="Sustainable Digital Transformation for the NY Yankees"
              description="This project proposes a comprehensive digital transformation strategy for the New York Yankees, emphasizing sustainable and innovative solutions."
              demoLink="https://docs.google.com/document/d/1Jw1fvSy7EQSG5KNEOw--DI9Wsi-jddlespqKCLNJSUA/edit?usp=sharing"
            />
          </Col>

          

          {/* --- 6. Baseball Launch Conditions --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={baseballLaunchImg}
              isBlog={false}
              title="Analysis of Optimal Launch Conditions for Home Runs"
              description="This research analyzes optimal launch conditions for home runs in different MLB stadiums by modeling the effects of wall height and distance."
              demoLink="https://docs.google.com/document/d/1iEFWJ9AabdIbJRGczTmhniK2F_ywutWqr96E7MXcKfs/edit?usp=sharing"
            />
          </Col>

          {/* --- 5. F1 Driver --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f1Img}
              isBlog={false}
              title="F1 Driver Debut Age Analysis"
              description="This project uses sports data science techniques to investigate whether there is an optimal debut age for F1 drivers, analyzing data from over 860 drivers."
              ghLink="https://github.com/Sewon231/F1-rookie-age-analysis-project"
            />
          </Col>

          {/* --- 8. LA Lakers Stats --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lakersImg}
              isBlog={false}
              title="LA Lakers 23-24 Player Stats Visualization"
              description="This project focuses on visualizing player performance metrics for the 2023-24 LA Lakers season, a fundamental skill in sports data science."
              ghLink="https://github.com/Sewon231/LA-LAKERS-Player-stat-2023-2024"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
