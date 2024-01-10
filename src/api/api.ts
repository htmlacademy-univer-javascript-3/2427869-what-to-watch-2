import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../constants/consts';

export function createAxiosInstance(
  baseURL: string,
  config?: AxiosRequestConfig
) {
  return axios.create({
    baseURL,
    ...config,
    timeout: 5000,
  });
}

export const axiosInstance = createAxiosInstance(BASE_URL);
