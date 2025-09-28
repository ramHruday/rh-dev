import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutSection.scss";
interface AboutSectionProps {
  id?: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <section id={id} className="about-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          About <span className="highlight">Me</span>
        </h2>
        <Row className="align-items-center justify-content-center">
          {/* <Col md={4} className="text-center mb-4 mb-md-0">
            <Image src={profilePic} alt="Profile" fluid roundedCircle className="profile-image-about neumorphic-embossed" />
          </Col> */}
          <Col md={7} className="about-content">
            <p className="lead">
              Hello! I'm Hruday, a Data Engineer passionate about building
              scalable, cloud-native data systems.
            </p>
            <p>
              At ProPetro Services, I design and optimize pipelines that power
              real-time IoT analytics, financial reporting, and predictive
              maintenance. My experience spans PySpark, Flink, Delta Lake, and
              modern lakehouse architectures, with a focus on delivering data
              solutions that are reliable, performant, and business-driven.
            </p>
            <p>
              I thrive on solving complex data challenges — from streaming
              telemetry at scale to modeling financial systems — and enjoy
              transforming raw data into actionable insights. Always exploring
              new technologies, I aim to create data platforms that not only
              meet today’s needs but also scale for tomorrow.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
