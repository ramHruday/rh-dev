import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './AboutSection.scss';
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
              Hello! I'm Hruday, a passionate Full-stack Developer and Innovator. 
              I specialize in building robust and scalable web applications, with a keen interest in 
              creating intuitive user experiences and exploring emerging technologies like the Internet of Drones.
            </p>
            <p>
              With a strong foundation in both front-end and back-end development, 
              I thrive on transforming complex problems into elegant, efficient solutions. 
              My goal is to create impactful digital products that are not only functional but also delightful to use.
            </p>
            <p>
              I am a Grad student at Texas Tech University, constantly seeking new challenges and opportunities to learn and grow.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
