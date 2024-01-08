import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchReviews } from '../../store/slices/fimls.thunks';
import { useEffect } from 'react';
import Review from '../../components/review/review';

function MoviePageReviews() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const comments = useAppSelector((state) => state.films.comments);

  useEffect(() => {
    if (id) {
      dispatch(fetchReviews(id));
    }
  }, []);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((item) => (
          <Review key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MoviePageReviews;
