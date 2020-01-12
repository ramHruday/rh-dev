import React from 'react';
import Card from 'react-bootstrap/Card';

import './deck-card.scss';

import PlaceHolderImg from '../../assets/img-placeholder.svg';
import ActionPanel from '../action-panel/action-panel';

interface IComponentCard {
  frameWorks: string[];
  label: string;
  description: string;
  size: number;
  isLiked: boolean;
  isBookmarked: boolean;
  imageSrc: string;
  type: string;
  key: string;
}
interface IDeckCardprops {
  component: IComponentCard;
}
const DeckCard: React.FC<IDeckCardprops> = props => {
  const card = props.component;
  return (
    <Card className="deck-card m-2">
      {!card.imageSrc ? (
        <Card.Img variant="top" src={PlaceHolderImg} />
      ) : (
        <Card.Img variant="top" src={card.imageSrc} />
      )}
      <Card.Body className="bg-white px-2 py-0">
        <Card.Title as="h1">{card.label}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text>{card.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="pl-0 ">
        <ActionPanel
          key={card.key}
          isBookmarked={card.isBookmarked}
          isLiked={card.isLiked}
        />
      </Card.Footer>
    </Card>
  );
};

export default DeckCard;
