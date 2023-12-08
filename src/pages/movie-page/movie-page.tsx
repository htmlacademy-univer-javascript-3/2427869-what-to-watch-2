import { Link, Route, Routes, useParams } from 'react-router-dom';
import NotFound404 from '../not-found-404/not-found-404';
import { AppRoutes } from '../../constants/consts';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import Tabs from '../../components/tabs/tabs';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MovieCard from '../../components/movie-card/movie-card';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMovie } from '../../store/slices/fimls.thunks';
import Loader from '../../components/loader/loader';

function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.films.film);
  const movies = useAppSelector((state) => state.films.films);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, []);

  if (!movie) {
    return <NotFound404 />;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movie.name} />
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
            <div className="film-card__desc">
              <h2 className="film-card__title">{movie.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{movie.genre}</span>
                <span className="film-card__year">{movie.released}</span>
              </p>
              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <Link to={`/player/${movie.id}`}>
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
                {token ? (
                  <Link
                    to={`/films/${movie.id}/addreview`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={movie.posterImage}
                alt={movie.name}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <Tabs />
              {/* {isLoading ? (
                <Loader />
              ) : (

              )} */}
              <Routes>
                <Route path="overview" element={<MoviePageOverview />} />
                <Route path="details" element={<MoviePageDetails />} />
                <Route path="review" element={<MoviePageReviews />} />
              </Routes>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            {movies.map((item) => {
              if (item.genre === movie.genre && item.name !== movie.name) {
                return <MovieCard key={item.id} movie={item} />;
              }

              return null;
            })}
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <Link to={AppRoutes.Main} className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MoviePage;
