import React from 'react';
import { Share2 } from 'react-feather';

interface IShareButtonProps {
  id: string;
}
const ShareButton: React.FC<IShareButtonProps> = ({ id }) => {
  return <Share2 key={id} color="black" className="mx-2 cursor-pointer" />;
};

export default ShareButton;
