import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "./Lacrosse.css";


// --- 비디오 파일 ---
import video1 from "../../Assets/Projects/Goal2025.mp4";
import video2 from "../../Assets/Projects/Bodycheck2023.mp4";


// --- 라크로스 사진들 ---
import photo1 from "../../Assets/Projects/0I1A5148_Original.jpg";
import photo2 from "../../Assets/Projects/0I1A5850_Original.jpg";
import photo3 from "../../Assets/Projects/0I1A7296_Original.jpg";
import photo4 from "../../Assets/Projects/IMG_6778 2.JPG";
import photo5 from "../../Assets/Projects/IMG_6747.JPG";
import photo6 from "../../Assets/Projects/IMG_6783 2.JPG";
import photo7 from "../../Assets/Projects/0I1A6339_Original.jpg";
import photo8 from "../../Assets/Projects/0I1A5372_Original.jpg";
import photo9 from "../../Assets/Projects/0I1A5937_Original.jpg";
import photo10 from "../../Assets/Projects/IMG_6784 2.JPG";
import photo11 from "../../Assets/Projects/IMG_6782.JPG";


const photos = [
  { id: 1, src: photo1, alt: "Lacrosse Photo 1" },
  { id: 2, src: photo2, alt: "Lacrosse Photo 2" },
  { id: 3, src: photo3, alt: "Lacrosse Photo 3" },
  { id: 4, src: photo4, alt: "Lacrosse Photo 4" },
  { id: 5, src: photo5, alt: "Lacrosse Photo 5" },
  { id: 6, src: photo6, alt: "Lacrosse Photo 6" },
  { id: 7, src: photo7, alt: "Lacrosse Photo 7" },
  { id: 8, src: photo8, alt: "Lacrosse Photo 8" },
  { id: 9, src: photo9, alt: "Lacrosse Photo 9" },
  { id: 10, src: photo10, alt: "Lacrosse Photo 10" },
  { id: 11, src: photo11, alt: "Lacrosse Photo 11" },
];


function Lacrosse() {
  return (
    <Container fluid className="lacrosse-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Lacrosse</strong> Journey
        </h1>
        <p style={{ color: "white" }}>Highlights and moments from the field.</p>


        {/* --- 비디오 클립 섹션 (수정됨) --- */}
        <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
          <Col md={6} className="video-col">
            <video controls className="lacrosse-video">
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
          <Col md={6} className="video-col">
            <video controls className="lacrosse-video">
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Col>
        </Row>


        {/* --- 사진 갤러리 섹션 --- */}
        <h2 style={{ color: "white", fontSize: "2.1em", paddingTop: "40px" }}>
          Photo <strong className="purple">Highlights</strong>
        </h2>
        <Row style={{ justifyContent: "center", paddingTop: "20px" }}>
          {photos.map((photo) => (
            <Col key={photo.id} md={4} className="gallery-col">
              <img src={photo.src} alt={photo.alt} className="gallery-image" />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}


export default Lacrosse;
