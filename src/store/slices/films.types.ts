import { Genres } from '../../constants/consts';
import { IMovie, IMovies } from '../../types/types';

export interface IFilmsSliceInitialState {
  currentGenre: Genres;
  allFilms: IMovies[];
  films: IMovies[];
  film: IMovie;
  countFilms: number;
  isLoading: boolean;
  error: string | null;
}
