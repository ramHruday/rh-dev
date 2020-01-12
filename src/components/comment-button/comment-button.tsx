import React from 'react';
import { MessageSquare } from 'react-feather';

interface ICommentButtonProps {
  id: string;
}
const CommentButton: React.FC<ICommentButtonProps> = ({ id }) => {
  return (
    <MessageSquare key={id} color="black" className="mx-2 cursor-pointer" />
  );
};

export default CommentButton;
