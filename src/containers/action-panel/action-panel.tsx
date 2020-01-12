import React from 'react';

import './action-panel.scss';

import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import CommentButton from '../../components/comment-button/comment-button';
import LikeButton from '../../components/like-button/like-button';
import ShareButton from '../../components/share-button/share-button';

interface IActionPanelprops {
  key: string;
  isLiked: boolean;
  isBookmarked: boolean;
}

const ActionPanel: React.FC<IActionPanelprops> = props => {
  return (
    <div className="d-inline-flex action-panel p-2 justify-content-between">
      <ShareButton id={props.key} />
      <CommentButton id={props.key} />
      <BookmarkButton id={props.key} isBookMarked={props.isBookmarked} />
      <LikeButton id={props.key} isLiked={props.isLiked} />
    </div>
  );
};

export default ActionPanel;
