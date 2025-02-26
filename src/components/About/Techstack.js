import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiNodejs, DiReact } from "react-icons/di";
import {
  SiAmazonecs,
  SiAzurepipelines,
  SiMicrosoftsqlserver,
  SiPostgresql,
  SiRabbitmq,
  SiRedis,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        C#
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRabbitmq />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SignalR
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SocketIO
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonecs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzurepipelines />
      </Col>
    </Row>
  );
}

export default Techstack;
