import { createSlice } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import {
  setFilmsActionAction,
  getFimlsByGenreAction,
  changeFilmsGenreAction,
  showMoreFilmsAction,
  resetCountFilmsAction,
} from './films.actions';

const initialState: IFilmsSliceInitialState = {
  currentGenre: Genres.All,
  films: [],
  countFilms: 8,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: setFilmsActionAction,
    getFimlsByGenre: getFimlsByGenreAction,
    changeFilmsGenre: changeFilmsGenreAction,
    showMoreFilms: showMoreFilmsAction,
    resetCountFilms: resetCountFilmsAction,
  },
});

export const {
  setFilms,
  getFimlsByGenre,
  changeFilmsGenre,
  showMoreFilms,
  resetCountFilms,
} = filmsSlice.actions;

export const films = filmsSlice.reducer;
