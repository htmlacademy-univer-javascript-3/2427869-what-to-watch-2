import { createSlice } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import {
  setFilmsActionAction,
  getFimlsByGenreAction,
  changeFilmsGenreAction,
} from './films.actions';
import { mocksMovies } from '../../mocks/films';

const initialState: IFilmsSliceInitialState = {
  currentGenre: Genres.All,
  films: [],
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: setFilmsActionAction,
    getFimlsByGenre: getFimlsByGenreAction,
    changeFilmsGenre: changeFilmsGenreAction,
  },
});

export const { setFilms, getFimlsByGenre, changeFilmsGenre } =
  filmsSlice.actions;

export const films = filmsSlice.reducer;
