import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import apiSupport from "../../Assets/Projects/api-support.png";
import fnb from "../../Assets/Projects/fnb.png";
import gofnb from "../../Assets/Projects/gofnb.png";
import jitsi from "../../Assets/Projects/jitsi-meet.png";
import mrp from "../../Assets/Projects/mrp-two.png";
import mrpWeb from "../../Assets/Projects/mrp-web-two.png";
import warehouseBooking from "../../Assets/Projects/warehouse-booking.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on main job.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gofnb}
              isBlog={false}
              title="Go Food and Beverage"
              description="Specialized management software for the F&B industry Management software designed specifically for the F&B industry, helping restaurant / eatery owners build and optimize the management process of orders, dishes, raw material inventory, staff."
              demoLink="/detail/gofnb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mrpWeb}
              isBlog={false}
              title="MRP Website"
              description="Upgrade MRP system from Winforms App to website. (Product support company employees in determining product calculation and creating sourcing information)."
              demoLink="detail/mrpweb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouseBooking}
              isBlog={false}
              title="Warehouse Booking"
              description="Develop a system to process and save order info from RabbitMQ to PostgresSQL. Supports order and delivery for warehouse employees and suppliers. "
              demoLink="detail/warehousebooking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apiSupport}
              isBlog={false}
              title="API Support for another system in microservice"
              description="Write APIs to transfer/receive data between SQL Server and other systems. Develop APIs for saving and accessing data from SQL Server database. Utilize RabbitMQ for order information publishing to RabbitMQ Server. Retrive data from SQL database, write/ upload file to customer server using SMTP. Querie data from Elasticsearch and returned to frontend system."
              demoLink="detail/apisupport"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mrp}
              isBlog={false}
              title="MRP - Material Requirements Planning"
              description="Support company employees in determining product calculation and creating sourcing information."
              demoLink="detail/materialplanning"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Another <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on free-time.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fnb}
              isBlog={false}
              title="Admin and POS system"
              description="Admin for configure material and POS system."
              ghLink="https://github.com/nguyenquanghuy-forwork/fnb-source"
              docs="/docs/fnb.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jitsi}
              isBlog={false}
              title="Deloy Jitse-meet on AWS and apply Load Balancers/ Auto Scaling"
              description=""
              docs="/docs/jitsimeet-details.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
