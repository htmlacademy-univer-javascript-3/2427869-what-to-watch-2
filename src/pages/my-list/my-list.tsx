import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchMyListMovies } from '../../store/slices/fimls.thunks';
import Header from '../../components/header/header';
import MovieList from '../../components/movie-list/movie-list';

function MyList() {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.films.myListMovies);

  useEffect(() => {
    dispatch(fetchMyListMovies());
  }, [dispatch]);

  return (
    <div className="user-page">
      <Header />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <div className="catalog__films-list">
          {movies.length !== 0 ? (
            <MovieList movies={movies} />
          ) : (
            <p>There&apos;re no movies in your list</p>
          )}
        </div>
      </section>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
  );
}

export default MyList;
