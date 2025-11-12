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
            
            {/* --- HTML5 Audio Player로 수정 --- */}
            <div className="audio-container">
              <audio controls className="audio-player">
                {/* 
                  [중요] 파일 이름에 띄어쓰기와 특수문자가 포함되어 있으니,
                  public 폴더에 있는 실제 파일 이름과 정확히 일치하는지 확인해주세요.
                */}
                <source src="/Sewon Lee (Narrative Remix).mp3" type="audio/mpeg" />
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
