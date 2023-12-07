import { PayloadAction } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import { IMovie, IMovies } from '../../types/types';

// export const setFilmsActionAction = (
//   state: IFilmsSliceInitialState,
//   action: PayloadAction<IMovies[]>
// ) => {
//   state.films = action.payload;
// };

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

// Ваше действие для установки фильмов
export const setFilmsActionAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovies[]>
) => {
  state.allFilms = action.payload; // сохраните все фильмы здесь
  state.films = action.payload.slice(0, state.countFilms); // сохраните только первые 8 фильмов здесь
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
