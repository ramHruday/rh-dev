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
    <Card className="deck-card border-0 bg-neu-white p-2">
      {card.imageSrc ? (
        <Card.Img
          variant="top"
          className="p-2 m-auto overflow-hidden"
          src={require(`./../../assets${card.imageSrc}`)}
          alt={card.skill}
          style={{ width: "auto", height: "4.5rem", maxWidth: "100%" }}
        />
      ) : null}
      <p className="text-center">{card.skill}</p>
    </Card>
  );
};

export default SkillCard;
