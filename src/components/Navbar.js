import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineCamera
} from "react-icons/ai";
import { FaRunning } from "react-icons/fa"; // Lacrosse icon replacement
import { BsMic } from "react-icons/bs";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // 이 부분은 제공된 코드에 없었지만, 일반적으로 필요한 함수라 추가했습니다.
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            
            {/* Home, Projects, Community & Work 탭 (기존 코드 유지) */}
            {/* (이 부분은 전달해주신 코드에 없었지만, 일반적인 구조라 가정하고 추가했습니다.) */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/community"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Community & Work
              </Nav.Link>
            </Nav.Item>

            {/* Lacrosse 탭 */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/lacrosse"
                onClick={() => updateExpanded(false)}
              >
                <FaRunning style={{ marginBottom: "2px" }} /> Lacrosse
              </Nav.Link>
            </Nav.Item>

            {/* Photos & Highlights 탭 */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/highlights"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineCamera style={{ marginBottom: "2px" }} />Awards & Highlights
              </Nav.Link>
            </Nav.Item>

            {/* Narrative Podcast Project 탭 */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/podcast"
                onClick={() => updateExpanded(false)}
              >
                <BsMic style={{ marginBottom: "2px" }} /> Narrative Podcast Project
              </Nav.Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
