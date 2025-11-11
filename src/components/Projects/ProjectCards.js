import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  // Demo 버튼을 렌더링하는 함수
  const renderDemoButton = () => {
    // demoLink가 없으면 버튼을 보여주지 않음
    if (!props.demoLink) {
      return null;
    }

    // demoLink가 http로 시작하는 외부 링크인 경우
    if (props.demoLink.startsWith("http")) {
      return (
        <Button
          variant="primary"
          href={props.demoLink}
          target="_blank"
          style={{ marginLeft: "10px" }}
        >
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
      );
    }

    // 내부 경로 또는 public 파일 (PDF 등) 링크인 경우
    // react-router-dom의 Link 컴포넌트 대신 일반 a 태그를 사용해야
    // 페이지 이동 없이 파일만 열 수 있습니다.
    return (
      <Button
        variant="primary"
        href={props.demoLink}
        target="_blank" // 새 탭에서 PDF 열기
        rel="noopener noreferrer" // 보안을 위한 속성
        style={{ marginLeft: "10px" }}
      >
        <CgWebsite /> &nbsp;
        {"Demo"}
      </Button>
    );
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* GitHub 버튼 */}
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {/* Demo 버튼 (위에서 정의한 함수 사용) */}
        {renderDemoButton()}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
