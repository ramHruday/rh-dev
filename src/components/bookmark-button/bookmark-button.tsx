import React from 'react';
import { Bookmark } from 'react-feather';

interface IBookMarkButtonProps {
  isBookMarked: boolean;
  id: string;
}
const BookmarkButton: React.FC<IBookMarkButtonProps> = ({
  isBookMarked,
  id
}) => {
  return isBookMarked ? (
    <Bookmark key={id} color="black" className="mx-2 cursor-pointer" />
  ) : (
    <Bookmark key={id} fill="#159BFD" className="mx-2 cursor-pointer" />
  );
};

export default BookmarkButton;
