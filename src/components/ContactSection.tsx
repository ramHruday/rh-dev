import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { GitHub, Linkedin, Mail } from "react-feather";
import { useTheme } from "../contexts/theme-context";
import "./ContactSection.scss";

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  const { theme } = useTheme();

  const cursorLogo =
    theme === "light-mode"
      ? `${process.env.PUBLIC_URL}/assets/images/logos/AVATAR_CIRCLE_LIGHT.png`
      : `${process.env.PUBLIC_URL}/assets/images/logos/AVATAR_CIRCLE_DARK.png`;

  return (
    <section id={id} className="contact-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          Get in <span className="highlight">Touch</span>
        </h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center mb-4 lead">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <div className="d-flex justify-content-center mb-5 social-links">
              <Button
                variant="link"
                href="https://github.com/ramHruday" // Replace with your GitHub URL
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic-embossed-icon mx-3 p-3"
              >
                <GitHub size={30} />
              </Button>
              <Button
                variant="link"
                href="https://www.linkedin.com/in/rama-hrudayb/" // Replace with your LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                className="neumorphic-embossed-icon mx-3 p-3"
              >
                <Linkedin size={30} />
              </Button>
              <Button
                variant="link"
                href="mailto:ramahrudaybandaru@gmail.com" // Replace with your email address
                className="neumorphic-embossed-icon mx-3 p-3"
              >
                <Mail size={30} />
              </Button>
            </div>
            <p
              className="text-center text-muted mb-4"
              style={{ fontSize: "0.85rem" }}
            >
              <a
                href="https://cursor.sh"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                built with cursor
                <img
                  src={cursorLogo}
                  alt="Cursor Logo"
                  style={{
                    height: "2em",
                    marginRight: "0.3em",
                    verticalAlign: "middle",
                  }}
                />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
