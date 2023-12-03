import { Genres } from '../../constants/consts';
import { useAppDispatch } from '../../store/hooks';
import { changeFilmsGenre } from '../../store/slices/films.slice';
import styles from './genres-list.module.css';

interface IGenresListProps {
  setGenre: (value: Genres) => void;
}

function GenresList(props: IGenresListProps) {
  const dispatch = useAppDispatch();

  const selectGenre = (genre: Genres) => {
    dispatch(changeFilmsGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      <li className="catalog__genres-item catalog__genres-item--active">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.All);
            selectGenre(Genres.All);
          }}
        >
          All genres
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Comedies);
            selectGenre(Genres.Comedies);
          }}
        >
          Comedies
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Crime);
            selectGenre(Genres.Crime);
          }}
        >
          Crime
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Documentary);
            selectGenre(Genres.Documentary);
          }}
        >
          Documentary
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Dramas);
            selectGenre(Genres.Dramas);
          }}
        >
          Dramas
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Horror);
            selectGenre(Genres.Horror);
          }}
        >
          Horror
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.KidsAndFamily);
            selectGenre(Genres.KidsAndFamily);
          }}
        >
          Kids & Family
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Romance);
            selectGenre(Genres.Romance);
          }}
        >
          Romance
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.SciFi);
            selectGenre(Genres.SciFi);
          }}
        >
          Sci-Fi
        </button>
      </li>
      <li className="catalog__genres-item">
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.setGenre(Genres.Thrillers);
            selectGenre(Genres.Thrillers);
          }}
        >
          Thrillers
        </button>
      </li>
    </ul>
  );
}

export default GenresList;
