import React from "react";
import { Badge, Button } from "react-bootstrap";
import { ExternalLink } from "react-feather";
import { IProjects } from "../constants/projects";
import "./project-card.scss";

const ProjectCard: React.FC<IProjects> = (props) => {
  return (
    <div className="mx-2 my-4 action-panel bg-apple-grey px-3 pt-4 pb-0">
      <div className="monty font-weight-bold">{props.label}</div>
      {/* <div.Img src={props.img} /> */}

      <div className="h-50 pt-2">
        {props.desc}
        <p className="pt-2">
          {props.tags?.map((t) => (
            <Badge bg="secondary" pill className="mx-1 small neu-pill-grey">
              {t}
            </Badge>
          ))}
        </p>
      </div>
      <div className="d-flex justify-content-end pt-2">
        {props.githubUrl ? (
          <Button
            variant="info"
            className="d-flex justify-content-between text-dark mx-1"
            href={props.githubUrl}
            size="sm"
          >
            <span className="mx-1">Github</span>
            <ExternalLink size="16px" />
          </Button>
        ) : null}{" "}
        {props.url ? (
          <Button
            variant="success"
            className="d-flex justify-content-between mx-1"
            href={props.url}
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
