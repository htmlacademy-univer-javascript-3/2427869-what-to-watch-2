import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showMoreFilms } from '../../store/slices/films.slice';
import { useLocation } from 'react-router-dom';

function ShowMore() {
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector((state) => state.films.allFilms);
  const countFilmsByGenre = useAppSelector(
    (state) => state.films.countFilmsByGenre
  );
  const countFilms = useAppSelector((state) => state.films.countFilms);
  const currentGenre = useAppSelector((state) => state.films.currentGenre);

  const [isShowMoreVisible, setIsShowMoreVisible] = useState<boolean>(true);

  const url = useLocation().pathname;

  useEffect(() => {
    const amountMovies = countFilmsByGenre.find(
      (film) => film.genreName === currentGenre
    );

    if (amountMovies && amountMovies?.countFilms > 0 && url === '/') {
      if (amountMovies?.countFilms <= countFilms) {
        setIsShowMoreVisible(false);

        return;
      }
    } else if (
      url.includes('films') &&
      amountMovies &&
      amountMovies?.countFilms > 0
    ) {
      if (amountMovies?.countFilms <= countFilms) {
        setIsShowMoreVisible(false);

        return;
      }
    }

    setIsShowMoreVisible(true);
  }, [countFilmsByGenre, currentGenre, countFilms, url]);

  const onClickShowMoreButton = () => {
    if (url.includes('films')) {
      dispatch(showMoreFilms(4));
    } else {
      dispatch(showMoreFilms(8));
    }
  };

  if (countFilms >= allFilms.length) {
    return null;
  }

  return isShowMoreVisible ? (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickShowMoreButton}
      >
        Show more
      </button>
    </div>
  ) : null;
}

export default ShowMore;
