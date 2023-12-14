import {
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from 'react-router-dom';
import NotFound404 from '../not-found-404/not-found-404';
import { AppRoutes } from '../../constants/consts';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import Tabs from '../../components/tabs/tabs';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MovieCard from '../../components/movie-card/movie-card';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchChangeStatusFilmMyList,
  fetchMoreLikeThisMovies,
  fetchMovie,
} from '../../store/slices/fimls.thunks';
import Header from '../../components/header/header';

function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.films.film);
  const myListMovies = useAppSelector((state) => state.films.myListMovies);
  const moreLikeThisMovies = useAppSelector(
    (state) => state.films.moreLikeThisMovies
  );
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchMoreLikeThisMovies(id));
    }
  }, [id]);

  if (!movie) {
    return <NotFound404 />;
  }

  const onAddToMyListButtonClick = () => {
    if (!token) {
      navigate(AppRoutes.Login);
    }

    if (token) {
      const status = !movie.isFavorite;

      if (id) {
        dispatch(fetchChangeStatusFilmMyList(id, +status));
      }
    }
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt={movie.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
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
                  <svg
                    viewBox="0 0 19 20"
                    width={19}
                    height={20}
                    onClick={onAddToMyListButtonClick}
                  >
                    {movie.isFavorite ? (
                      <use xlinkHref="#in-list" />
                    ) : (
                      <use xlinkHref="#add" />
                    )}
                  </svg>
                  <Link to={AppRoutes.MyList}>
                    <span>My list</span>
                  </Link>
                  <span className="film-card__count">
                    {myListMovies.length}
                  </span>
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
            {moreLikeThisMovies.length > 0 ? (
              moreLikeThisMovies.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))
            ) : (
              <p>There&apos;re no similar movies</p>
            )}
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
