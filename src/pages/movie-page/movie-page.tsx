import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import NotFound404 from '../not-found-404/not-found-404';
import { AppRoutes, Genres } from '../../constants/consts';
import MoviePageOverview from '../movie-page-overview/movie-page-overview';
import MoviePageDetails from '../movie-page-details/movie-page-details';
import Tabs from '../../components/tabs/tabs';
import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
import MovieCard from '../../components/movie-card/movie-card';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  fetchChangeStatusFilmMyList,
  fetchMoreLikeThisMovies,
  fetchMovie,
  fetchMyListMovies,
} from '../../store/slices/fimls.thunks';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ShowMore from '../../components/show-more/show-more';
import {
  changeFilmsGenre,
  getFimlsByGenre,
  resetCountFilms,
} from '../../store/slices/films.slice';

function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.films.film);
  const myListMovies = useAppSelector((state) => state.films.myListMovies);
  const moreLikeThisMovies = useAppSelector(
    (state) => state.films.moreLikeThisMovies
  );
  const isLoading = useAppSelector((state) => state.films.isLoading);
  const filmsByGenre = useAppSelector((state) => state.films.filmsByGenre);
  const countFilms = useAppSelector((state) => state.films.countFilms);
  const token = localStorage.getItem('wtw-token');
  const navigate = useNavigate();

  const fetchMovieById = useCallback(async () => {
    if (id) {
      await dispatch(fetchMovie(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(resetCountFilms(4));
  }, [dispatch]);

  useEffect(() => {
    fetchMovieById();
  }, [id, myListMovies, fetchMovieById]);

  useEffect(() => {
    if (id) {
      dispatch(fetchMoreLikeThisMovies(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (movie) {
      dispatch(changeFilmsGenre(movie?.genre as Genres));
    }
  }, [movie, dispatch]);

  useEffect(() => {
    dispatch(
      getFimlsByGenre({
        genre: movie?.genre as string,
        moreLikeThis: true,
      })
    );
  }, [dispatch, movie, countFilms]);

  if (!movie) {
    return <NotFound404 />;
  }

  const onAddToMyListButtonClick = async () => {
    if (!token) {
      navigate(AppRoutes.Login);
    }

    if (token) {
      const status = !movie.isFavorite;

      if (id) {
        await dispatch(fetchChangeStatusFilmMyList(id, +status));
        await dispatch(fetchMyListMovies());
      }
    }
  };

  /* eslint-disable */
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={onAddToMyListButtonClick}
                >
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    {movie.isFavorite ? (
                      <use xlinkHref="#in-list" />
                    ) : (
                      <use xlinkHref="#add" />
                    )}
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">
                    {myListMovies.length}
                  </span>
                </button>
                {token ? (
                  <Link
                    to={`/films/${movie.id}/review`}
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
              <Routes>
                <Route path="/" element={<MoviePageOverview />} />
                <Route path="details" element={<MoviePageDetails />} />
                <Route path="reviews" element={<MoviePageReviews />} />
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
              filmsByGenre.map((item) => (
                <MovieCard key={item.id} movie={item} />
              ))
            ) : (
              <p>There&apos;re no similar movies</p>
            )}
          </div>
          <ShowMore />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default MoviePage;
