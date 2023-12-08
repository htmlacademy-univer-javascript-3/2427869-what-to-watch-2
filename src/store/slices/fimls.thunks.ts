import { AxiosResponse } from 'axios';
import { createAxiosInstance } from '../../api/api';
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
  setMovie,
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

    dispatch(setMovie(movie));
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

export const signOut = (token: string) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());
    localStorage.removeItem('token');

    await createAxiosInstance(baseURL).delete('/logout', {
      headers: {
        'X-Token': token,
      },
    });
  } catch (error) {
    dispatch(setError());
  } finally {
    dispatch(unsetLoader());
  }
};

export const fetchReviews = (id: string) => async (dispatch: TAppDispatch) => {
  try {
    dispatch(setLoader());

    const data: AxiosResponse<IReview[]> = await createAxiosInstance(
      baseURL
    ).get(`/comments/${id}`);

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
        dispatch(setLoader());

        if (token) {
          await createAxiosInstance(baseURL).post(
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
