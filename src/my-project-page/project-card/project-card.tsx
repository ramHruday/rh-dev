import React from "react";
import { Badge, Button } from "react-bootstrap";
import { ExternalLink } from "react-feather";
import { IProjects } from "../constants/projects";
import "./project-card.scss";

const ProjectCard: React.FC<IProjects> = (props) => {
  return (
    <div className="mx-2 my-4 action-panel px-3 pt-4 pb-2">
      <div className="monty font-weight-bold">{props.label}</div>
      {props.img ? (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img
            className="p-2 m-auto overflow-hidden project-image"
            src={require(`./../../assets${props.img}`)}
            alt={props.label}
          />
        </a>
      ) : null}

      <div className="h-50 py-2">
        {props.desc}
        <p className="pt-2">
          {props.tags?.map((t) => (
            <Badge bg="secondary" pill className="mx-1 small project-tag">
              {t}
            </Badge>
          ))}
        </p>
      </div>
      <div className="d-flex justify-content-end pt-2">
        {props.githubUrl ? (
          <Button
            variant="info"
            className="d-flex justify-content-between text-dark mx-1 project-button"
            href={props.githubUrl}
            size="sm"
            target="_blank"
          >
            <span className="mx-1">Github</span>
            <ExternalLink size="16px" />
          </Button>
        ) : null}{" "}
        {props.url ? (
          <Button
            variant="success"
            className="d-flex justify-content-between mx-1 project-button"
            href={props.url}
            target="_blank"
            size="sm"
          >
            <span className="mx-1">Deployed at</span>
            <ExternalLink size="16px" />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
