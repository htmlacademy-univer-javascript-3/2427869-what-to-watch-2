import { Link } from 'react-router-dom';
import { AppRoutes } from '../../constants/consts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchPromoMovie } from '../../store/slices/fimls.thunks';

function PromoMovie() {
  const dispatch = useAppDispatch();
  const promoMovie = useAppSelector((state) => state.films.promoMovie);
  const myListMovies = useAppSelector((state) => state.films.myListMovies);

  useEffect(() => {
    dispatch(fetchPromoMovie());
  }, []);

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
            <button className="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <Link to={`/player/${promoMovie?.id as string}`}>
                <span>Play</span>
              </Link>
            </button>
            <button className="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width={19} height={20}>
                <use xlinkHref="#add" />
              </svg>
              <Link to={AppRoutes.MyList}>
                <span>My list</span>
              </Link>
              <span className="film-card__count">{myListMovies.length}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoMovie;
