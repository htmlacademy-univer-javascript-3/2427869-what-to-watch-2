import { createSlice } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import {
  setFilmsActionAction,
  // getFimlsByGenreAction,
  changeFilmsGenreAction,
  showMoreFilmsAction,
  resetCountFilmsAction,
  setLoaderAction,
  unsetLoaderAction,
  setErrorAction,
  unsetErrorAction,
  setMovieAction,
  setPromoMovieAction,
  setProfileDataAction,
  setLoginErrorAction,
  unsetLoginErrorAction,
  setCommentsDataAction,
  successLoginAction,
  signOutAction,
  setMyListMoviesAction,
  setMoreLikeThisMoviesAction,
  getFimlsByGenreAction,
} from './films.actions';

const initialState: IFilmsSliceInitialState = {
  currentGenre: Genres.All,
  allFilms: [],
  countFilmsByGenre: [
    { genreName: Genres.All, countFilms: 0 },
    { genreName: Genres.Comedies, countFilms: 0 },
    { genreName: Genres.Crime, countFilms: 0 },
    { genreName: Genres.Drama, countFilms: 0 },
    { genreName: Genres.Thriller, countFilms: 0 },
    { genreName: Genres.Fantasy, countFilms: 0 },
    { genreName: Genres.Action, countFilms: 0 },
    { genreName: Genres.Adventure, countFilms: 0 },
  ],
  filmsByGenre: [],
  film: null,
  comments: [],
  myListMovies: [],
  moreLikeThisMovies: [],
  profile: null,
  countFilms: 8,
  isLoading: false,
  error: null,
  loginError: null,
  authorizationStatus: false,
  promoMovie: null,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setLoader: setLoaderAction,
    unsetLoader: unsetLoaderAction,
    setError: setErrorAction,
    unsetError: unsetErrorAction,
    setLoginError: setLoginErrorAction,
    unsetLoginError: unsetLoginErrorAction,
    setFilms: setFilmsActionAction,
    setMovie: setMovieAction,
    setPromoMovie: setPromoMovieAction,
    setProfileData: setProfileDataAction,
    setCommentsData: setCommentsDataAction,
    setMyListMovies: setMyListMoviesAction,
    setMoreLikeThisMovies: setMoreLikeThisMoviesAction,
    getFimlsByGenre: getFimlsByGenreAction,
    successLogin: successLoginAction,
    successSignOut: signOutAction,
    changeFilmsGenre: changeFilmsGenreAction,
    showMoreFilms: showMoreFilmsAction,
    resetCountFilms: resetCountFilmsAction,
  },
});

export const {
  setLoader,
  unsetLoader,
  setError,
  unsetError,
  setLoginError,
  setFilms,
  setMovie,
  setPromoMovie,
  setProfileData,
  setCommentsData,
  successLogin,
  successSignOut,
  setMyListMovies,
  setMoreLikeThisMovies,
  getFimlsByGenre,
  changeFilmsGenre,
  showMoreFilms,
  resetCountFilms,
} = filmsSlice.actions;

export const films = filmsSlice.reducer;
