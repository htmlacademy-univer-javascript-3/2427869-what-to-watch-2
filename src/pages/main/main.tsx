import { useEffect, useState } from 'react';
import MovieList from '../../components/movie-list/movie-list';
import { Genres } from '../../constants/consts';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getFimlsByGenre,
  resetCountFilms,
} from '../../store/slices/films.slice';
import GenresList from '../../components/genres-list/genres-list';
import ShowMore from '../../components/show-more/show-more';
import Loader from '../../components/loader/loader';
import PromoMovie from '../../components/promo-movie/promo-movie';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function Main() {
  const movies = useAppSelector((state) => state.films.films);
  const [genre, setGenre] = useState<Genres>(Genres.All);
  const countFilms = useAppSelector((state) => state.films.countFilms);
  const isLoading = useAppSelector((state) => state.films.isLoading);
  const error = useAppSelector((state) => state.films.error);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCountFilms());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFimlsByGenre(genre));
  }, [genre, countFilms, dispatch]);

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
        <Header />
        <PromoMovie />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList genre={genre} onSetGenre={setGenre} />
          <div className="catalog__films-list">
            {/* eslint-disable */}
            {isLoading ? (
              <Loader />
            ) : error ? (
              <p>{error}</p>
            ) : (
              <MovieList movies={movies} />
            )}
            {/* eslint-enable */}
          </div>
          <ShowMore />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Main;
