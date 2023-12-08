import { Genres } from '../../constants/consts';
import {
  IMovie,
  IMovies,
  IProfile,
  IPromoMovie,
  IReview,
} from '../../types/types';

export interface IFilmsSliceInitialState {
  currentGenre: Genres;
  allFilms: IMovies[];
  films: IMovies[];
  film: IMovie;
  profile: IProfile | null;
  comments: IReview[];
  countFilms: number;
  isLoading: boolean;
  error: string | null;
  loginError: string | null;
  authorizationStatus: boolean;
  promoMovie: IPromoMovie | null;
}
