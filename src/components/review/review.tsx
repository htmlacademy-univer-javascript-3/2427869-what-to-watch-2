import { memo } from 'react';
import { IReview } from '../../types/types';

function ReviewComponent({ user, comment, rating, date }: IReview) {
  const dateObject = new Date(date);

  const formattedDate = dateObject.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>
            {formattedDate}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

const Review = memo(ReviewComponent);

export default Review;
