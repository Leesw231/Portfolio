import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear(); // 'year' 변수 선언
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Designed and Developed by Sewon Lee</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          {/* --- 'year' 변수를 사용하도록 수정 --- */}
          <h3>Copyright © {year} SL</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
