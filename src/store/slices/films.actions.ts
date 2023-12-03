import { PayloadAction } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import { IMocksMovies } from '../../mocks/films';

export const setFilmsActionAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMocksMovies[]>
) => {
  state.films = action.payload;
};

export const getFimlsByGenreAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<Genres>
) => {
  const films = [...state.films];
  let filteredFilms = [];

  if (action.payload === Genres.All) {
    state.films = films.slice(0, state.countFilms);
  } else {
    filteredFilms = films.filter((item) => item.genre === action.payload);
    state.films = filteredFilms.slice(0, state.countFilms);
  }
};

export const changeFilmsGenreAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<Genres>
) => {
  state.currentGenre = action.payload;
};

export const showMoreFilmsAction = (state: IFilmsSliceInitialState) => {
  state.countFilms += 8;
};

export const resetCountFilmsAction = (state: IFilmsSliceInitialState) => {
  state.countFilms = 8;
};
