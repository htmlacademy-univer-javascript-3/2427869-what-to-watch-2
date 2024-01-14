import { memo, useEffect } from 'react';
import { Genres } from '../../constants/consts';
import { useAppDispatch } from '../../store/hooks';
import { changeFilmsGenre } from '../../store/slices/films.slice';
import styles from './genres-list.module.css';

interface IGenresListProps {
  genre: Genres;
  onSetGenre: (value: Genres) => void;
}

function GenresListComponent(props: IGenresListProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeFilmsGenre(Genres.All));
  }, [dispatch]);

  const selectGenre = (genre: Genres) => {
    dispatch(changeFilmsGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.All ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.All);
            selectGenre(Genres.All);
          }}
        >
          All genres
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Comedies ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Comedies);
            selectGenre(Genres.Comedies);
          }}
        >
          Comedy
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Crime ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Crime);
            selectGenre(Genres.Crime);
          }}
        >
          Crime
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Drama ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Drama);
            selectGenre(Genres.Drama);
          }}
        >
          Drama
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Thriller ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Thriller);
            selectGenre(Genres.Thriller);
          }}
        >
          Thriller
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Fantasy ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Fantasy);
            selectGenre(Genres.Fantasy);
          }}
        >
          Fantasy
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Action ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Action);
            selectGenre(Genres.Action);
          }}
        >
          Action
        </button>
      </li>
      <li
        className={`catalog__genres-item ${
          props.genre === Genres.Adventure ? 'catalog__genres-item--active' : ''
        }`}
      >
        <button
          className={`catalog__genres-link ${styles.button}`}
          onClick={() => {
            props.onSetGenre(Genres.Adventure);
            selectGenre(Genres.Adventure);
          }}
        >
          Adventure
        </button>
      </li>
    </ul>
  );
}

const GenresList = memo(GenresListComponent);

export default GenresList;
