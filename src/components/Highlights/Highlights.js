import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Highlights.css";

// --- 이미지 Import (파일 이름 수정 완료) ---
import aijamAward from "../../Assets/Projects/AIJAMAward.png";
import stanford from "../../Assets/Projects/Stanford.png";
import harvard from "../../Assets/Projects/Harvard2.png";
import harvardComment from "../../Assets/Projects/HarvardC.png";
import harvardSummer from "../../Assets/Projects/HarvardSummer.png";
import tedx1 from "../../Assets/Projects/TEDx1.jpg";
import tedx2 from "../../Assets/Projects/TEDx2.jpg";
import tedx3 from "../../Assets/Projects/TEDx3.jpg";
import tedx4 from "../../Assets/Projects/TEDx4.jpg";
import tedx5 from "../../Assets/Projects/TEDx5.jpg";
import nhssas1 from "../../Assets/Projects/NHSSAS1.jpg";
import nhssas2 from "../../Assets/Projects/NHSSAS2.jpg";
import nhssas3 from "../../Assets/Projects/NHSSAS3.jpg";
import nhssas4 from "../../Assets/Projects/NHSSAS4.jpg";
import nhssas5 from "../../Assets/Projects/NHSSAS5.jpg";


function Highlights() {
  return (
    <Container fluid className="highlight-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Awards & <strong className="purple">Highlights</strong>
        </h1>
        <p style={{ color: "white" }}>
          A collection of my academic and extracurricular achievements.
        </p>

        {/* --- AIJAM Award --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">AIJAM ASIA 2025 - Gold Award</h2>
            <img src={aijamAward} alt="AIJAM Gold Award" className="highlight-image" />
          </Col>
        </Row>


        {/* --- Harvard 2024 --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">Harvard Pre-College Program 2024/2025</h2>
            <img src={harvard} alt="Harvard Transcript" className="highlight-image-half" />
            <img src={harvardComment} alt="Harvard Comments" className="highlight-image-half" />
          </Col>
        </Row>



        {/* --- Stanford Summer Camp --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">Stanford Pre-Collegiate Summer Institutes 2024</h2>
            <img src={stanford} alt="Stanford Certificate" className="highlight-image" />
          </Col>
        </Row>

        

        {/* --- Harvard Summer 2025 --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">Harvard Summer School 2025 - Circuit of Collaboration Award</h2>
            <img src={harvardSummer} alt="Harvard Summer Award" className="highlight-image" />
          </Col>
        </Row>

        {/* --- TEDx Speaker --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">TEDx Speaker</h2>
            <div className="gallery-grid">
              
              <img src={tedx3} alt="TEDx 3" className="gallery-grid-image" />
              <img src={tedx4} alt="TEDx 4" className="gallery-grid-image" />
              <img src={tedx2} alt="TEDx 2" className="gallery-grid-image" />
            </div>
          </Col>
        </Row>

        {/* --- National High School Sports Analytics Summit --- */}
        <Row className="highlight-row">
          <Col>
            <h2 className="highlight-title">National High School Sports Analytics Summit</h2>
            <div className="gallery-grid">
              <img src={nhssas1} alt="NHSSAS 1" className="gallery-grid-image" />
              <img src={nhssas2} alt="NHSSAS 2" className="gallery-grid-image rotate-90" />
              <img src={nhssas3} alt="NHSSAS 3" className="gallery-grid-image" />
              <img src={nhssas4} alt="NHSSAS 4" className="gallery-grid-image" />
              <img src={nhssas5} alt="NHSSAS 5" className="gallery-grid-image" />
            </div>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Highlights;
