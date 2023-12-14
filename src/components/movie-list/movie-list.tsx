import MovieCard from '../movie-card/movie-card';
import { IMovies } from '../../types/types';

interface IMovieListProps {
  movies: IMovies[];
  setActiveMovie: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieList(props: IMovieListProps) {
  return (
    <>
      {props.movies.map((movie) => (
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
