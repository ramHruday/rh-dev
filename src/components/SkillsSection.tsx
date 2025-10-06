import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./SkillsSection.scss";
import { skillsData } from "../data/skillsData"; // Corrected import path

interface SkillsSectionProps {
  id?: string;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id }) => {
  return (
    <section id={id} className="skills-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          My <span className="highlight">Skills</span>
        </h2>
        <Row>
          {skillsData.map((category, index) => (
            <Col key={index} xs={12} className="mb-5">
              <h3 className="text-center mb-4 skill-category-title">
                {category.category}
              </h3>
              <Row className="g-4 justify-content-center">
                {category.skills.map((skill, skillIndex) => (
                  <Col key={skillIndex} xs={4} sm={4} md={2} lg={2}>
                    <Card className="skill-card neumorphic-embossed h-100 d-flex flex-column align-items-center justify-content-center text-center p-3">
                      <Card.Img
                        variant="top"
                        src={`${process.env.PUBLIC_URL}/assets${skill.iconUrl}`}
                        alt={skill.name}
                        className="skill-icon mb-2"
                      />
                      <Card.Text className="fw-bold mb-0">
                        {skill.name}
                      </Card.Text>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SkillsSection;
