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

  if (action.payload !== Genres.All) {
    state.films = films.filter((item) => item.genre === action.payload);
  }
};

export const changeFilmsGenreAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<Genres>
) => {
  state.currentGenre = action.payload;
};
