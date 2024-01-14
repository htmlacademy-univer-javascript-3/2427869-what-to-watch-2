import MovieCard from '../movie-card/movie-card';
import { IMovies } from '../../types/types';

interface IMovieListProps {
  movies: IMovies[];
}

function MovieList({ movies }: IMovieListProps) {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default MovieList;
