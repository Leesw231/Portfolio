import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by Sewon Lee</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3>Copyright © {year} Sewon Lee</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
