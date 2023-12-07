import { createSlice } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState } from './films.types';
import { Genres } from '../../constants/consts';
import {
  setFilmsActionAction,
  getFimlsByGenreAction,
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
} from './films.actions';

const initialState: IFilmsSliceInitialState = {
  currentGenre: Genres.All,
  films: [],
  allFilms: [],
  film: {
    id: 'a6b04675-7b9f-4d34-8e58-2e4394b5b3f0',
    name: 'Bohemian Rhapsody',
    posterImage:
      'https://13.design.pages.academy/static/film/poster/Bohemian_Rhapsody.jpg',
    backgroundImage:
      'https://13.design.pages.academy/static/film/background/Bohemian_Rhapsody.jpg',
    backgroundColor: '#929FA5',
    videoLink: 'https://13.design.pages.academy/static/film/video/bike.mp4',
    description:
      'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    rating: 6.1,
    scoresCount: 338903,
    director: 'Bryan Singer',
    starring: ['Rami Malek', 'Lucy Boynton', 'Gwilym Lee'],
    runTime: 134,
    genre: 'Drama',
    released: 2018,
    isFavorite: false,
  },
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
    getFimlsByGenre: getFimlsByGenreAction,
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
  getFimlsByGenre,
  changeFilmsGenre,
  showMoreFilms,
  resetCountFilms,
} = filmsSlice.actions;

export const films = filmsSlice.reducer;
