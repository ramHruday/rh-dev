import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { GitHub, Linkedin, Mail } from 'react-feather';
import './ContactSection.scss';

interface ContactSectionProps {
  id?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <section id={id} className="contact-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          Get in <span className="highlight">Touch</span>
        </h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p className="text-center mb-4 lead">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
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
                href="mailto:your.email@example.com" // Replace with your email address
                className="neumorphic-embossed-icon mx-3 p-3"
              >
                <Mail size={30} />
              </Button>
            </div>

            {/* Optional Contact Form */}
            <div className="contact-form neumorphic-debossed p-4">
              <h3 className="text-center mb-4">Send a Message</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" className="neumorphic-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" className="neumorphic-input" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Your message" className="neumorphic-input" />
                </Form.Group>

                <Button variant="primary" type="submit" className="neumorphic-embossed-button w-100 mt-3">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
