import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Podcast.css";

function Podcast() {
  return (
    <Container fluid className="podcast-section">
      <Particle />
      <Container className="podcast-content">
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={8}>
            <h1 className="project-heading">
              Narrative <strong className="purple">Podcast Project</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              This is my narrative podcast project, which explores the intersection of sports, data, and personal stories.
            </p>
            
            <div className="audio-container">
              <audio controls className="audio-player">
                {/* 
                  'public' 폴더에 'narrative-podcast.mp3' 파일이 있는지 확인하세요.
                */}
                <source src="/NarrativeRemix.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Podcast;
