import { useAppDispatch } from '../../store/hooks';
import { showMoreFilms } from '../../store/slices/films.slice';

function ShowMore() {
  const dispatch = useAppDispatch();

  const onClickShowMoreButton = () => {
    dispatch(showMoreFilms());
  };

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
