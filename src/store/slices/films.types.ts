import { Genres } from '../../constants/consts';
import {
  IFilmByGenre,
  IMovie,
  IMovies,
  IProfile,
  IPromoMovie,
  IReview,
} from '../../types/types';

export interface IFilmsSliceInitialState {
  currentGenre: Genres;
  allFilms: IMovies[];
  countFilmsByGenre: IFilmByGenre[];
  filmsByGenre: IMovies[];
  film: IMovie | null;
  profile: IProfile | null;
  comments: IReview[];
  myListMovies: IMovies[];
  moreLikeThisMovies: IMovies[];
  countFilms: number;
  isLoading: boolean;
  error: string | null;
  loginError: string | null;
  authorizationStatus: boolean;
  promoMovie: IPromoMovie | null;
}

export interface IGetFilmsByGenre {
  genre: Genres | string;
  moreLikeThis: boolean;
}
