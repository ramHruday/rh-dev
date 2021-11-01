import React from "react";
import Card from "react-bootstrap/Card";
import "./skill-card.scss";

interface ISkillCardprops {
  skill: string;
  imageSrc: string;
}

const SkillCard: React.FC<ISkillCardprops> = (props) => {
  const card = props;
  return (
    <Card className="deck-card m-2 border-0">
      {card.imageSrc ? (
        <Card.Img
          variant="top"
          src={card.imageSrc}
          alt={card.skill}
          style={{ height: "6.5rem" }}
        />
      ) : null}
      <Card.Body className="bg-white px-2 py-0">
        <Card.Title as="h3" className="p-2">
          {card.skill}
        </Card.Title>
      </Card.Body>
      {/* <Card.Body>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="pl-0 ">
        <ActionPanel
          key={card.key}
          isBookmarked={card.isBookmarked}
          isLiked={card.isLiked}
        />
      </Card.Footer> */}
    </Card>
  );
};

export default SkillCard;
