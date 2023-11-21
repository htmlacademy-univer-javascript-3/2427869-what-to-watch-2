import { IMocksMovies } from '../../mocks/films';
import MovieCard from '../movie-card/movie-card';

interface IMovieListProps {
    movies: IMocksMovies[];
    setActiveMovie: React.Dispatch<React.SetStateAction<string | null>>;
}

function MovieList(props: IMovieListProps) {
  return (
    <>
      {props.movies.map((movie) => <MovieCard key={movie.id} movie={movie} setActiveMovie={props.setActiveMovie}/>
      )}
    </>);
}

export default MovieList;
