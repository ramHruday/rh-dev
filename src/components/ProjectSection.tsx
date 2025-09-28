import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { ExternalLink, GitHub, Check } from "react-feather";
import "./ProjectSection.scss";
import { projectsData } from "../data/projectsData";
import { useProjectFiltering } from "../hooks/useProjectFiltering";
import { FilterButtons } from "../components/FilterButtons";

interface ProjectSectionProps {
  id?: string;
  featuredProjectLabels?: string[]; // New optional prop
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  const {
    filteredProjects,
    selectedTags,
    setSelectedTags,
    selectedCategory,
    setSelectedCategory,
    allTags,
    allCategories,
  } = useProjectFiltering();

  return (
    <section id={id} className="project-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          My <span className="highlight">Projects</span>
        </h2>
        <FilterButtons
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allTags={allTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredProjects.map((project, index) => (
            <Col key={index}>
              <Card className="project-card neumorphic-embossed h-100 p-2 center-align">
                {/* {project.img ? (
                  <Card.Img
                    variant="top"
                    src={`${process.env.PUBLIC_URL}/assets${project.img}`}
                    alt={project.label}
                    className="project-image"
                  />
                ) : null} */}
                <Card.Body>
                  <Card.Title className="fw-bold">{project.label}</Card.Title>
                  <Card.Text>{project.desc}</Card.Text>
                  <div className="mb-3">
                    {project.tags.map((tech, techIndex) => (
                      <Button
                        key={techIndex}
                        className="tech-badge me-2 neumorphic-flat-pressed rounded-pill"
                        // onClick={() =>
                        //   setSelectedTags((prevTags) =>
                        //     prevTags.includes(tech)
                        //       ? prevTags.filter((t) => t !== tech)
                        //       : [...prevTags, tech]
                        //   )
                        // }
                      >
                        {tech}
                      </Button>
                    ))}
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between align-items-center project-card-footer">
                  <div>
                    {project.githubUrl && (
                      <Button
                        variant="link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button neumorphic-embossed-icon"
                      >
                        <GitHub size={20} />
                      </Button>
                    )}
                    {project.url && (
                      <Button
                        variant="link"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-button ms-2 neumorphic-embossed-icon"
                      >
                        <ExternalLink size={20} />
                      </Button>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProjectSection;
