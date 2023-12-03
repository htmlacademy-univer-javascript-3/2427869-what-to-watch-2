import { Genres } from '../../constants/consts';
import { IMocksMovies } from '../../mocks/films';

export interface IFilmsSliceInitialState {
  currentGenre: Genres;
  films: IMocksMovies[];
}
