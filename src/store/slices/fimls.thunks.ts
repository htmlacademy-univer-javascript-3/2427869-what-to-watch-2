import { AxiosResponse } from 'axios';
import { createAxiosInstance } from '../../api/api';
import { baseURL } from '../../constants/consts';
import { IMovie, IMovies, IProfile, IPromoMovie } from '../../types/types';
import { TAppDispatch } from '../index.types';
import {
  setError,
  setFilms,
  setLoader,
  setLoginError,
  setProfileData,
  setPromoMovie,
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

    dispatch(setPromoMovie(movie));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchPromoMovie = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());

    const data: AxiosResponse<IPromoMovie> = await createAxiosInstance(
      baseURL
    ).get('/promo');

    const movie: IPromoMovie = data.data;

    dispatch(setPromoMovie(movie));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const login =
  (email: string, password: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(setLoader());

      const data: AxiosResponse<IProfile> = await createAxiosInstance(
        baseURL
      ).post('/login', {
        email,
        password,
      });

      const profileData: IProfile = data.data;
      localStorage.setItem('token', profileData.token);

      dispatch(setProfileData(profileData));
    } catch (error) {
      dispatch(setLoginError());
    } finally {
      dispatch(unsetLoader());
    }
  };
