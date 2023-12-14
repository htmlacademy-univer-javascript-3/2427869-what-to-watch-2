import { PayloadAction } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import {
  IMovie,
  IMovies,
  IProfile,
  IPromoMovie,
  IReview,
} from '../../types/types';

export const getFimlsByGenreAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<Genres>
) => {
  let filteredFilms = [];

  if (action.payload === Genres.All) {
    state.films = state.allFilms.slice(0, state.countFilms);
  } else {
    filteredFilms = state.allFilms.filter(
      (item) => item.genre === action.payload
    );
    state.films = filteredFilms.slice(0, state.countFilms);
  }
};

export const setFilmsActionAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovies[]>
) => {
  state.allFilms = action.payload;
  state.films = action.payload.slice(0, state.countFilms);
};

export const changeFilmsGenreAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<Genres>
) => {
  state.currentGenre = action.payload;
};

export const setMovieAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovie>
) => {
  state.film = action.payload;
};

export const setPromoMovieAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IPromoMovie>
) => {
  state.promoMovie = action.payload;
};

export const setProfileDataAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IProfile>
) => {
  state.profile = action.payload;
};

export const setCommentsDataAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IReview[]>
) => {
  state.comments = action.payload;
};

export const setMyListMoviesAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovies[]>
) => {
  state.myListMovies = action.payload;
};

export const setMoreLikeThisMoviesAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovies[]>
) => {
  state.moreLikeThisMovies = action.payload;
};

export const showMoreFilmsAction = (state: IFilmsSliceInitialState) => {
  state.countFilms += 8;
};

export const resetCountFilmsAction = (state: IFilmsSliceInitialState) => {
  state.countFilms = 8;
};

export const setLoaderAction = (state: IFilmsSliceInitialState) => {
  state.isLoading = true;
};

export const unsetLoaderAction = (state: IFilmsSliceInitialState) => {
  state.isLoading = false;
};

export const setErrorAction = (state: IFilmsSliceInitialState) => {
  state.error = 'Something went wrong. Please, update page';
};

export const unsetErrorAction = (state: IFilmsSliceInitialState) => {
  state.error = null;
};

export const setLoginErrorAction = (state: IFilmsSliceInitialState) => {
  state.loginError = 'Uncorrect login or password';
};

export const unsetLoginErrorAction = (state: IFilmsSliceInitialState) => {
  state.loginError = null;
};

export const successLoginAction = (state: IFilmsSliceInitialState) => {
  state.authorizationStatus = true;
};

export const signOutAction = (state: IFilmsSliceInitialState) => {
  state.authorizationStatus = false;
};
