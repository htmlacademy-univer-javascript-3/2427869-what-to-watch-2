import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import {
  fetchChangeStatusFilmMyList,
  fetchMyListMovies,
  fetchPromoMovie,
} from '../../store/slices/fimls.thunks';

function PromoMovie() {
  const dispatch = useAppDispatch();
  const promoMovie = useAppSelector((state) => state.films.promoMovie);
  const myListMovies = useAppSelector((state) => state.films.myListMovies);
  const isLoading = useAppSelector((state) => state.films.isLoading);
  const token = localStorage.getItem('wtw-token');

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchPromoMovie());
  }, [myListMovies, dispatch]);

  const onAddToMyListButtonClick = async () => {
    if (!token) {
      navigate(AppRoutes.Login);
    }

    if (token && promoMovie) {
      const status = !promoMovie.isFavorite;

      if (promoMovie.id) {
        await dispatch(fetchChangeStatusFilmMyList(promoMovie.id, +status));
        await dispatch(fetchMyListMovies());
      }
    }
  };

  /* eslint-disable */
  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img
            src={promoMovie?.posterImage}
            alt={promoMovie?.name}
            width={218}
            height={327}
          />
        </div>
        <div className="film-card__desc">
          <h2 className="film-card__title">{promoMovie?.name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{promoMovie?.genre}</span>
            <span className="film-card__year">{promoMovie?.released}</span>
          </p>
          <div className="film-card__buttons">
            <button
              className="btn btn--play film-card__button"
              type="button"
              disabled={isLoading}
            >
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <Link to={`/player/${promoMovie?.id as string}`}>
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
                {promoMovie?.isFavorite ? (
                  <use xlinkHref="#in-list" />
                ) : (
                  <use xlinkHref="#add" />
                )}
              </svg>
              <span>My list</span>
              <span className="film-card__count">{myListMovies.length}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoMovie;
