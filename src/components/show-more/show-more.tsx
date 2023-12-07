import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { showMoreFilms } from '../../store/slices/films.slice';

function ShowMore() {
  const dispatch = useAppDispatch();
  const allFilms = useAppSelector((state) => state.films.allFilms);
  const countFilms = useAppSelector((state) => state.films.countFilms);

  const onClickShowMoreButton = () => {
    dispatch(showMoreFilms());
  };

  if (countFilms >= allFilms.length) {
    return null; // Возвращает null, если больше нет фильмов для отображения
  }

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={onClickShowMoreButton}
      >
        Show more
      </button>
    </div>
  );
}

export default ShowMore;
