import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  FaChartLine,
  FaCheckCircle,
  FaCogs,
  FaDatabase,
  FaRocket,
  FaTools,
  FaUsers,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Particle from "../Particle";

const PDFViewer = ({ filePath }) => {
  return (
    <iframe
      src={`${window.location.origin}${filePath}`}
      style={{ width: "100%", height: "500px", border: "none" }}
      title="PDF Viewer"
    ></iframe>
  );
};

const projectImages = {
  gofnb: [
    "/images/gfnb01.png",
    "/images/gfnb02.png",
    "/images/gfnb03.png",
    "/images/gfnb04.png",
    "/images/gfnb05.png",
    "/images/gfnb06.png",
  ],
  mrpweb: [
    "/images/mrpweb00.png",
    "/images/mrpweb01.png",
    "/images/mrpweb02.png",
  ],
  warehousebooking: [
    "/images/warehousebooking01.png",
    "/images/warehousebooking02.png",
    "/images/warehousebooking03.png",
    "/images/warehousebooking04.png",
  ],
  apisupport: ["/images/apisupport01.png", "/images/apisupport02.png"],
  materialplanning: [
    "/images/mrp00.png",
    "/images/mrp01.png",
    "/images/mrp02.png",
  ],
};

const Details = () => {
  const { id } = useParams();

  const detailData = {
    gofnb: {
      title: "Go Food and Beverage (GoFNB)",
      description: (
        <div style={{ textAlign: "left" }}>
          <h4 className="purple">
            <FaRocket /> Overview
          </h4>
          <p>
            GoFNB is an advanced management platform tailored for the Food &
            Beverage industry. It streamlines restaurant operations, optimizes
            inventory, and enhances customer experience.
          </p>
          <h4 className="purple">
            <FaCogs /> Key Features
          </h4>
          <ul>
            <FaCheckCircle className="text-success" /> Real-time order tracking
            & POS integration
            <br />
            <FaCheckCircle className="text-success" /> Automated inventory &
            supply chain management <br />
            <FaCheckCircle className="text-success" /> AI-driven sales analytics
            & recommendations <br />
            <FaCheckCircle className="text-success" /> Role-based staff &
            payroll management
          </ul>

          <h4 className="purple">
            <FaTools /> Tech Stack
          </h4>
          <ul>
            <FaDatabase className="text-info" /> Backend: C# .NET Core, CQRS,
            MediatR
            <br />
            <FaDatabase className="text-info" /> Frontend: ReactJS, Redux,
            TypeScript
            <br />
            <FaDatabase className="text-info" /> Realtime: SignalR, WebSockets
            <br />
            <FaDatabase className="text-info" /> Messaging: RabbitMQ, Redis
            <br />
            <FaDatabase className="text-info" /> Database: SQL Server, EF Core
          </ul>
          <h4 className="purple">
            <FaChartLine /> Business Impact
          </h4>
          <ul>
            <FaUsers className="text-warning" /> Enhanced operational efficiency
            for restaurants
            <br />
            <FaUsers className="text-warning" /> Reduced costs through automated
            processes
            <br />
            <FaUsers className="text-warning" /> Improved customer experience &
            loyalty programs
          </ul>
        </div>
      ),
    },
    mrpweb: {
      title: "MRP Website",
      description: (
        <div style={{ textAlign: "left" }}>
          <h4 className="purple">
            <FaRocket /> Overview
          </h4>
          <p>
            The MRP Website project was a major upgrade from a legacy WinForms
            application to a modern web-based solution. This transition improved
            accessibility, streamlined workflows, and enhanced operational
            efficiency for manufacturing businesses.
          </p>
          <h4 className="purple">
            <FaCogs /> Key Responsibilities
          </h4>
          <ul>
            <FaCheckCircle className="text-success" /> Full-stack development
            based on Business Analyst (BA) specifications & UI/UX requirements
            <br />
            <FaCheckCircle className="text-success" /> Built robust RESTful APIs
            using C# .NET Core 6 for high performance & security <br />
            <FaCheckCircle className="text-success" /> Developed an interactive
            frontend using React & TypeScript <br />
            <FaCheckCircle className="text-success" /> Optimized database
            operations with PostgreSQL <br />
            <FaCheckCircle className="text-success" /> Implemented real-time
            updates and improved system scalability
          </ul>

          <h4 className="purple">
            <FaTools /> Tech Stack
          </h4>
          <ul>
            <FaDatabase className="text-info" /> Frontend: React.js, TypeScript,
            Redux
            <br />
            <FaDatabase className="text-info" /> Backend: C# .NET Core 6,
            RESTful APIs
            <br />
            <FaDatabase className="text-info" /> Database: PostgreSQL
            <br />
          </ul>
          <h4 className="purple">
            <FaChartLine /> Business Impact
          </h4>
          <ul>
            <FaUsers className="text-warning" /> Improved user experience with a
            responsive web-based system
            <br />
            <FaUsers className="text-warning" /> Reduced maintenance costs &
            increased scalability
            <br />
            <FaUsers className="text-warning" /> Streamlined manufacturing
            processes with real-time data visualization
          </ul>
        </div>
      ),
    },
    warehousebooking: {
      title: "Warehouse Booking",
      description: (
        <div style={{ textAlign: "left" }}>
          <h4 className="purple">
            <FaRocket /> Overview
          </h4>
          <p>
            The Warehouse Booking system was designed to streamline order
            processing and logistics for warehouse employees and suppliers. It
            processes order information from RabbitMQ and saves it to
            PostgreSQL, ensuring efficient inventory management.
          </p>
          <h4 className="purple">
            <FaCogs /> Key Responsibilities
          </h4>
          <ul>
            <FaCheckCircle className="text-success" /> Defined performance
            metrics screens for supplier orders
            <br />
            <FaCheckCircle className="text-success" /> Processed orders and
            suggested optimized delivery schedules <br />
            <FaCheckCircle className="text-success" /> Developed reporting
            features to track warehouse efficiency <br />
            <FaCheckCircle className="text-success" /> Implemented features to
            assist warehouse employees in organizing inventory
          </ul>

          <h4 className="purple">
            <FaTools /> Tech Stack
          </h4>
          <ul>
            <FaDatabase className="text-info" /> Frontend: React.js, Ant Design
            <br />
            <FaDatabase className="text-info" /> Backend: NestJS
            <br />
            <FaDatabase className="text-info" /> Messaging: RabbitMQ
            <br />
            <FaDatabase className="text-info" /> Database: PostgreSQL, modified
            nestjsx/crud for optimized queries
          </ul>
          <h4 className="purple">
            <FaChartLine /> Business Impact
          </h4>
          <ul>
            <FaUsers className="text-warning" /> Improved warehouse operational
            efficiency and order tracking
            <br />
            <FaUsers className="text-warning" /> Reduced processing times with
            automated scheduling and reporting
            <br />
            <FaUsers className="text-warning" /> Enhanced supplier coordination
            with real-time data insights
          </ul>
        </div>
      ),
    },
    apisupport: {
      title: "API Support for Another System in Microservice",
      description: (
        <div style={{ textAlign: "left" }}>
          <h4 className="purple">
            <FaRocket /> Overview
          </h4>
          <p>
            The API Support project focused on developing and maintaining
            RESTful APIs that facilitate seamless data exchange between SQL
            Server and other systems in a microservice architecture.
          </p>
          <h4 className="purple">
            <FaCogs /> Key Responsibilities
          </h4>
          <ul>
            <FaCheckCircle className="text-success" /> Developed APIs to
            transfer and receive data between SQL Server and external systems
            <br />
            <FaCheckCircle className="text-success" /> Built APIs for saving and
            accessing data in SQL Server <br />
            <FaCheckCircle className="text-success" /> Utilized RabbitMQ to
            publish order information to a RabbitMQ server <br />
            <FaCheckCircle className="text-success" /> Retrieved data from SQL
            Server, wrote/uploaded files to customer servers using SMTP <br />
            <FaCheckCircle className="text-success" /> Queried Elasticsearch to
            return relevant data to the frontend system
          </ul>
        </div>
      ),
    },
    materialplanning: {
      title: "Material Requirements Planning",
      description: (
        <div style={{ textAlign: "left" }}>
          <h4 className="purple">
            <FaRocket /> Overview
          </h4>
          <p>
            The Material Requirements Planning (MRP) system was designed to
            assist company employees in accurately calculating product
            requirements and creating sourcing plans. This system optimizes the
            ordering process and improves overall business efficiency.
          </p>
          <h4 className="purple">
            <FaCogs /> Key Responsibilities
          </h4>
          <ul>
            <FaCheckCircle className="text-success" /> Developed a WinForms
            application to streamline ordering and business operations
            <br />
            <FaCheckCircle className="text-success" /> Debugged and fixed
            critical issues to ensure smooth functionality <br />
            <FaCheckCircle className="text-success" /> Enhanced user interface
            with DevExpress Framework for better UX <br />
            <FaCheckCircle className="text-success" /> Optimized database
            performance through SQL Stored Procedures <br />
          </ul>
          <h4 className="purple">
            <FaTools /> Tech Stack
          </h4>
          <ul>
            <FaDatabase className="text-info" /> UI Design: DevExpress Framework{" "}
            <br />
            <FaDatabase className="text-info" /> Programming Language: VB.Net
            <br />
            <FaDatabase className="text-info" /> Database: SQL Server, Stored
            Procedures <br />
          </ul>
        </div>
      ),
    },
  };

  const data = detailData[id] || {
    title: "Not Found",
    description: "The page you are looking for does not exist.",
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {data.title} <strong className="purple">Details</strong>
        </h1>
        <div style={{ color: "white" }}>{data.description}</div>
        {id !== "jitsimeet" && id !== "fnb" && (
          <Row className="mt-4">
            <Col>
              <Slider {...settings}>
                {projectImages[id]?.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image}
                      alt={`Screenshot ${index + 1}`}
                      style={{ width: "100%", borderRadius: "10px" }}
                    />
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default Details;
