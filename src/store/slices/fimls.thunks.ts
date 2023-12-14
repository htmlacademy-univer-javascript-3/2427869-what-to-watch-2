import { AxiosResponse } from 'axios';
import { axiosInstance, createAxiosInstance } from '../../api/api';
import { baseURL } from '../../constants/consts';
import {
  IMovie,
  IMovies,
  IProfile,
  IPromoMovie,
  IReview,
} from '../../types/types';
import { TAppDispatch } from '../index.types';
import {
  setCommentsData,
  setError,
  setFilms,
  setLoader,
  setLoginError,
  setMoreLikeThisMovies,
  setMovie,
  setMyListMovies,
  setProfileData,
  setPromoMovie,
  successLogin,
  successSignOut,
  unsetError,
  unsetLoader,
} from './films.slice';

export const fetchMovies = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(unsetError());
    dispatch(setLoader());
    const data: AxiosResponse<IMovies[]> = await axiosInstance.get('/films');

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
    dispatch(unsetError());
    dispatch(setLoader());
    const token = localStorage.getItem('token');

    const headers = token ? { 'X-Token': token } : undefined;

    const data: AxiosResponse<IMovie> = await axiosInstance.get(
      `/films/${id}`,
      {
        headers: headers,
      }
    );

    const movie: IMovie = data.data;

    dispatch(setMovie(movie));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchPromoMovie = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(unsetError());
    dispatch(setLoader());

    const data: AxiosResponse<IPromoMovie> = await axiosInstance.get('/promo');

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
      dispatch(unsetError());
      dispatch(setLoader());

      const data: AxiosResponse<IProfile> = await axiosInstance.post('/login', {
        email,
        password,
      });

      const profileData: IProfile = data.data;
      localStorage.setItem('token', profileData.token);

      dispatch(successLogin());
      dispatch(setProfileData(profileData));
    } catch (error) {
      dispatch(setLoginError());
    } finally {
      dispatch(unsetLoader());
    }
  };

export const signOut = (token: string) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(unsetError());
    dispatch(setLoader());
    localStorage.removeItem('token');

    await axiosInstance.delete('/logout', {
      headers: {
        'X-Token': token,
      },
    });

    dispatch(successSignOut());
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchReviews = (id: string) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(unsetError());
    dispatch(setLoader());

    const data: AxiosResponse<IReview[]> = await axiosInstance.get(
      `/comments/${id}`
    );

    const reviews: IReview[] = data.data;

    dispatch(setCommentsData(reviews));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const sendComment =
  (id: string, comment: string, rating: number) =>
    async (dispatch: TAppDispatch) => {
      const token = localStorage.getItem('token');

      try {
        dispatch(unsetError());
        dispatch(setLoader());

        if (token) {
          await axiosInstance.post(
            `/comments/${id}`,
            {
              comment,
              rating,
            },
            {
              headers: {
                'X-Token': token,
              },
            }
          );
        }
      } catch (error) {
        dispatch(setError());
      } finally {
        dispatch(unsetLoader());
      }
    };

export const fetchMyListMovies = () => async (dispatch: TAppDispatch) => {
  try {
    dispatch(unsetError());
    dispatch(setLoader());
    const token = localStorage.getItem('token');

    const data: AxiosResponse<IMovies[]> = await axiosInstance.get(
      '/favorite',
      {
        headers: {
          'X-Token': token as string,
        },
      }
    );

    const movies = data.data;

    dispatch(setMyListMovies(movies));
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchChangeStatusFilmMyList =
  (filmId: string, status: number) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(unsetError());
      dispatch(setLoader());
      const token = localStorage.getItem('token');
      const headers = token ? { 'X-Token': token } : undefined;

      await axiosInstance.post(
        `/favorite/${filmId}/${status}`,
        {},
        {
          headers: headers,
        }
      );
    } catch (error) {
      dispatch(setError());
    } finally {
      dispatch(unsetLoader());
    }
  };

export const fetchMoreLikeThisMovies =
  (filmId: string) => async (dispatch: TAppDispatch) => {
    try {
      dispatch(unsetError());
      dispatch(setLoader());

      const data: AxiosResponse<IMovies[]> = await axiosInstance.get(
        `/films/${filmId}/similar`
      );

      const movies = data.data;

      dispatch(setMoreLikeThisMovies(movies));
    } catch (error) {
      dispatch(setError());
    } finally {
      dispatch(unsetLoader());
    }
  };
