import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/0I1A6002.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-bodyß">
              I’m really into sports analytics and tracking player stats.
              <br />
              <br />I use
              <i>
                <b className="purple"> Java, Python, and R.</b>
              </i>
              <br />
              <br />
              I'm passionate about data science and statistics, especially how they're becoming game-changers in the sports industry. I love working on player valuations and creating insightful scouting reports!              <br />
              <br />
              I try to watch and play as many sports as I can, analyzing each one both from a player’s perspective and through a statistical lens.            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sewon231"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lee_se_231/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
