import { AxiosResponse } from 'axios';
import { createAxiosInstance } from '../../api/api';
import { baseURL } from '../../constants/consts';
import { IMovie, IMovies } from '../../types/types';
import { TAppDispatch } from '../index.types';
import {
  setError,
  setFilms,
  setLoader,
  setMovie,
  unsetLoader,
} from './films.slice';

export const fetchMovies = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());
    const data: AxiosResponse<IMovies[]> = await createAxiosInstance(
      baseURL
    ).get('/films');

    const movies: IMovies[] = data.data;

    dispatch(setFilms(movies));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchMovie = (id: string) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());
    const data: AxiosResponse<IMovie> = await createAxiosInstance(baseURL).get(
      `/films/${id}`
    );

    const movie: IMovie = data.data;

    dispatch(setMovie(movie));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};
