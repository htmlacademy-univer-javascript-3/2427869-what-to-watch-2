import { useEffect, useState } from 'react';
import MovieList from '../../components/movie-list/movie-list';
import { AppRoutes, Genres } from '../../constants/consts';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getFimlsByGenre,
  resetCountFilms,
} from '../../store/slices/films.slice';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import Loader from '../../components/loader/loader';

interface IMainProps {
  filmName: string;
  genre: string;
  promoDate: number;
}

function Main(props: IMainProps) {
  const [activeMovie, setActiveMovie] = useState<string | null>(null);
  const [genre, setGenre] = useState<Genres>(Genres.All);
  const countFilms = useAppSelector((state) => state.films.countFilms);
  const isLoading = useAppSelector((state) => state.films.isLoading);
  const error = useAppSelector((state) => state.films.error);
  const { films, filmsByGenre } = useAppSelector((state) => state.films);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCountFilms());
  }, []);

  useEffect(() => {
    dispatch(getFimlsByGenre(genre));
  }, [genre, countFilms]);

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <div className="logo">
            <Link to="/" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width={63}
                  height={63}
                />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <h2 className="film-card__title">{props.filmName}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.genre}</span>
                <span className="film-card__year">{props.promoDate}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <Link to={'/player/1'}>
                    <span>Play</span>
                  </Link>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <Link to={AppRoutes.MyList}>
                    <span>My list</span>
                  </Link>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genre={genre} setGenre={setGenre} />
          <div className="catalog__films-list">
            {isLoading ? (
              <Loader />
            ) : error ? (
              <p>{error}</p>
            ) : (
              <MovieList setActiveMovie={setActiveMovie} />
            )}
          </div>
          <ShowMore />
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Main;
