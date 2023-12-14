import axios, { AxiosRequestConfig } from 'axios';
import { baseURL } from '../constants/consts';

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

export const axiosInstance = createAxiosInstance(baseURL);
