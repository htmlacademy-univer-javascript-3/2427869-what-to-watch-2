import { memo } from 'react';
import { IReview } from '../../types/types';

function ReviewComponent({ user, comment, rating, date }: IReview) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author">{user}</cite>
          <time className="review__date" dateTime={date}>
            {date}
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

const Review = memo(ReviewComponent);

export default Review;
