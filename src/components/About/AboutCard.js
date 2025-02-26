import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Huy Nguyen Quang </span>
            from <span className="purple"> Distric 07, Ho Chi Minh.</span>
            <br />
            I am a software developer with four years of experience in various
            large and small projects.
            <br />
            I have participated in many different complex projects and can work
            independently or a keymember in a team.
            <br />
            <br />I have programming skills in many languages and technologies
            such as VB.NET, C#, ReactJS, SQL Server, PostgresSQL, Elasticsearch,
            RabbitMQ. I also have the ability to research and learn new
            technologies when required or given the opportunity
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Huy Nguyen Quang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
