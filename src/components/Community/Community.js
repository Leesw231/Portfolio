import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../Projects/ProjectCards"; // ProjectCard 컴포넌트를 재사용합니다.
import Particle from "../Particle";

// --- 이미지 import ---
import icheonJournal from "../../Assets/Projects/IcheonJournal.png";
import wechok from "../../Assets/Projects/WEchok.png";
import internship from "../../Assets/Projects/InternshipFinal.png";
import volunteerAward from "../../Assets/Projects/VolunteerAward.jpg";

function Community() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Community & <strong className="purple">Work</strong>
        </h1>
        <p style={{ color: "white" }}>
          My experiences in volunteering and professional environments.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* --- 봉사 기사 카드 --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icheonJournal}
              isBlog={false}
              title="Icheon Journal - 'Rich Man of Joy' Article"
              description="An article featured in the Icheon Journal covering my volunteering story and my philosophy on sharing."
              demoLink="https://www.2000n.net/news/articleView.html?idxno=30011"
            />
          </Col>

          {/* --- 위촉장 카드 --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wechok}
              isBlog={false}
              title="Steering Committee Member Appointment"
              description="Appointment letter from the mayor of Icheon City, designating me as a steering committee member for the Nurim Senior Care & Rehabilitation Center."
            />
          </Col>

          {/* --- 인턴십 증서 카드 --- */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internship}
              isBlog={false}
              title="SpaceRadar - Paid Internship Certificate"
              description="Certificate for a paid internship at SpaceRadar, where I worked as a company student intern focusing on aerospace data analysis and visualization."
            />
          </Col>
          
                    {/* --- 우수봉사자증 카드 --- */}
          <Col md={4} className="project-card volunteer-award-card"> {/* <--- 여기에 클래스 추가 */}
            <ProjectCard
              imgPath={volunteerAward}
              isBlog={true}
              title="Outstanding Volunteer Award 2025"
              description="Recognized as an Outstanding Volunteer by the city of Icheon for dedicated community service."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Community;
