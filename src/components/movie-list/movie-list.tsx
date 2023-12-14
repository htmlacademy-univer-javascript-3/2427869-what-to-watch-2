import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MovieCard from '../movie-card/movie-card';

interface IMovieListProps {
  setActiveMovie: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieList(props: IMovieListProps) {
  const movies = useAppSelector((state) => state.films.films);
  const dispatch = useAppDispatch();

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
