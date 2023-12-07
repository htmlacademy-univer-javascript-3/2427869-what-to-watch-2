import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MovieCard from '../movie-card/movie-card';
import { resetCountFilms } from '../../store/slices/films.slice';

interface IMovieListProps {
  setActiveMovie: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieList(props: IMovieListProps) {
  const movies = useAppSelector((state) => state.films.films);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   return () => {
  //     console.log('hello');
  //     dispatch(resetCountFilms());
  //   };
  // }, []);

  return (
    <>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setActiveMovie={props.setActiveMovie}
        />
      ))}
    </>
  );
}

export default MovieList;
