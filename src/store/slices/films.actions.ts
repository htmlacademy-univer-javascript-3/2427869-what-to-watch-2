import { PayloadAction } from '@reduxjs/toolkit';
import { IFilmsSliceInitialState, IGetFilmsByGenre } from './films.types';
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
  action: PayloadAction<Genres | IGetFilmsByGenre>
) => {
  let filteredFilms: IMovies[] = [];

  if (action.payload === Genres.All) {
    filteredFilms = state.allFilms.slice(0, state.countFilms);
  } else {
    filteredFilms = state.allFilms.filter(
      (film) => action.payload === film.genre
    );
  }

  if (typeof action.payload === 'object' && 'genre' in action.payload) {
    filteredFilms = state.moreLikeThisMovies.slice(0, state.countFilms);
  }

  state.filmsByGenre = filteredFilms;
};

export const setFilmsActionAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<IMovies[]>
) => {
  state.countFilmsByGenre = [
    { genreName: Genres.All, countFilms: 0 },
    { genreName: Genres.Comedies, countFilms: 0 },
    { genreName: Genres.Crime, countFilms: 0 },
    { genreName: Genres.Drama, countFilms: 0 },
    { genreName: Genres.Thriller, countFilms: 0 },
    { genreName: Genres.Fantasy, countFilms: 0 },
    { genreName: Genres.Action, countFilms: 0 },
    { genreName: Genres.Adventure, countFilms: 0 },
  ];

  state.allFilms = action.payload;

  state.allFilms?.map((item) => {
    state.countFilmsByGenre.forEach((movie) => {
      if (item.genre === movie.genreName) {
        state.countFilmsByGenre[0].countFilms++;
        movie.countFilms++;
      }
    });
  });
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
  const genreName = action.payload[0].genre;

  state.countFilmsByGenre = state.countFilmsByGenre.map((item) =>
    item.genreName === genreName
      ? {
        genreName,
        countFilms: action.payload.length,
      }
      : item
  );

  state.moreLikeThisMovies = action.payload;
};

export const showMoreFilmsAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<number>
) => {
  state.countFilms += action.payload;
};

export const resetCountFilmsAction = (
  state: IFilmsSliceInitialState,
  action: PayloadAction<number>
) => {
  state.countFilms = action.payload;
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
