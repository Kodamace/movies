import React, { FC } from 'react';
import { StyledReview } from '../../Styles';

const Review: FC<{ html: string }> = ({ html }) => {
  return (
    <StyledReview
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

export default Review;
