import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import { ExternalLink, GitHub } from "react-feather";
import "./ProjectSection.scss";
import { projectsData } from "../data/projectsData";
import { useProjectFiltering } from "../hooks/useProjectFiltering";

interface ProjectSectionProps {
  id?: string;
  featuredProjectLabels?: string[]; // New optional prop
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ id }) => {
  const {
    // filteredProjects,
    // selectedTags,
    // setSelectedTags,
    selectedCategory,
    setSelectedCategory,
    // allTags,
    allCategories,
  } = useProjectFiltering();

  // const getTagsForCategory = useMemo(() => {
  //   return (category: string) => {
  //     if (category === "All") {
  //       return allTags;
  //     }
  //     const projectsInCategory = projectsData.filter(
  //       (project) => project.category === category
  //     );
  //     const tags = new Set<string>();
  //     projectsInCategory.forEach((project) => {
  //       project.tags.forEach((tag) => tags.add(tag));
  //     });
  //     return Array.from(tags).sort();
  //   };
  // }, [allTags]);

  return (
    <section id={id} className="project-section-container py-5">
      <Container>
        <h2 className="text-center mb-5 display-5 fw-bold">
          My <span className="highlight">Projects</span>
        </h2>
        {/* <FilterButtons
          allCategories={allCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          allTags={allTags}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        /> */}
        <Row>
          <Col xs={12}>
            <Accordion alwaysOpen className="mb-4">
              {allCategories.map((category, categoryIndex) => (
                <Accordion.Item eventKey={String(categoryIndex)} key={category}>
                  <Accordion.Header>{category}</Accordion.Header>
                  <Accordion.Body>
                    <Button
                      variant={selectedCategory === category ? "primary" : "light"}
                      onClick={() => {
                        setSelectedCategory(category);
                        // setSelectedTags([]); // Clear tags when changing category
                      }}
                      className="me-2 mb-2"
                    >
                      All {category}
                    </Button>
                    <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                      {projectsData
                        .filter((project) => project.category === category)
                        .map((project, index) => (
                          <Col key={index}>
                            <Card className="project-card neumorphic-embossed h-100 p-2 center-align">
                              <Card.Body>
                                <Card.Title className="fw-bold">{project.label}</Card.Title>
                                <Card.Text>{project.desc}</Card.Text>
                                <div className="mb-3">
                                  {project.tags.map((tech, techIndex) => (
                                    <Button
                                      key={techIndex}
                                      className="tech-badge me-2 neumorphic-flat-pressed rounded-pill"
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
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
        {/* Original project display removed */}
      </Container>
    </section>
  );
};

export default ProjectSection;
