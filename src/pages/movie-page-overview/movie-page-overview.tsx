import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';

function MoviePageOverview() {
  const movie = useAppSelector((state) => state.films.film);

  const [movieScore, setMovieScore] = useState('');

  useEffect(() => {
    if (movie) {
      if (movie?.rating >= 0 && movie?.rating <= 3) {
        setMovieScore('Bad');
      } else if (movie?.rating > 3 && movie?.rating <= 5) {
        setMovieScore('Normal');
      } else if (movie?.rating > 5 && movie?.rating <= 8) {
        setMovieScore('Good');
      } else if (movie?.rating > 8 && movie?.rating < 10) {
        setMovieScore('Very good');
      } else if (movie.rating === 10) {
        setMovieScore('Awesome');
      }
    }
  }, [movie]);

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{movie?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{movieScore}</span>
          <span className="film-rating__count">
            {movie?.scoresCount} ratings
          </span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{movie?.description}</p>
        <p className="film-card__director">
          <strong>Director: {movie?.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>
            Starring: {movie?.starring.map((item) => `${item}, `)}
          </strong>
        </p>
      </div>
    </>
  );
}

export default MoviePageOverview;
