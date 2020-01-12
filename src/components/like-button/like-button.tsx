import React from 'react';
import { ThumbsUp } from 'react-feather';

interface ILikeButtonProps {
  isLiked: boolean;
  id: string;
}
const LikeButton: React.FC<ILikeButtonProps> = ({ isLiked, id }) => {
  return isLiked ? (
    <ThumbsUp
      key={id}
      fill="#36B37E"
      className="mx-2 cursor-pointer"
      onClick={() => console.log("hu")}
    />
  ) : (
    <ThumbsUp key={id} color="black" className="mx-2 cursor-pointer" />
  );
};

export default LikeButton;
